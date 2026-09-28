import { useEffect, useRef, useState } from "react"

function ProjectGallery({ images, projectTitle }) {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const closeButtonRef = useRef(null)
  const previousFocusRef = useRef(null)

  const isOpen = selectedIndex !== null
  const selectedImage = isOpen ? images[selectedIndex] : null

  function openImage(index) {
    previousFocusRef.current = document.activeElement
    setSelectedIndex(index)
  }

  function closeImage() {
    setSelectedIndex(null)
    requestAnimationFrame(() => previousFocusRef.current?.focus())
  }

  function navigate(direction) {
    setSelectedIndex((index) =>
      (index + direction + images.length) % images.length
    )
  }

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeButtonRef.current?.focus()

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        closeImage()
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        setSelectedIndex((index) =>
            (index + 1) % images.length
        )
      } else if (event.key === "ArrowLeft") {
        event.preventDefault()
        setSelectedIndex((index) =>
            (index - 1 + images.length) % images.length
        )
      } else if (event.key === "Tab") {
        const controls = document.querySelectorAll(
            ".lightbox button:not(:disabled)"
        )

        const first = controls[0]
        const last = controls[controls.length - 1]

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, images.length])

  return (
    <>
      <div
        className="project-gallery"
        aria-label={`${projectTitle} screenshots`}
      >
        {images.map((image, index) => (
          <figure className="project-gallery-item" key={image.src}>
            <h4>{image.title}</h4>

            <button
              type="button"
              className="project-gallery-image"
              onClick={() => openImage(index)}
              aria-label={`Enlarge ${image.title} screenshot`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />
            </button>

            <figcaption>{image.description}</figcaption>
          </figure>
        ))}
      </div>

      {selectedImage && (
        <div
          className="lightbox-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeImage()
            }
          }}
        >
          <div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`${projectTitle} screenshot viewer`}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="lightbox-close"
              onClick={closeImage}
              aria-label="Close screenshot viewer"
            >
              ×
            </button>

            <h2>{selectedImage.title}</h2>

            <div className="lightbox-image-container">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
              />
            </div>

            <p>{selectedImage.description}</p>

            <div className="lightbox-navigation">
              <button
                type="button"
                onClick={() => navigate(-1)}
                aria-label="Previous screenshot"
              >
                ← Previous
              </button>

              <span aria-live="polite">
                {selectedIndex + 1} / {images.length}
              </span>

              <button
                type="button"
                onClick={() => navigate(1)}
                aria-label="Next screenshot"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectGallery
