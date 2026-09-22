import { useEffect, useState } from "react"

const initialFormData = {
    name: "",
    company: "",
    email: "",
    subject: "",
    message: "",
    website: "",
}

function Contact() {
    const [formData, setFormData] = useState(initialFormData)
    const [status, setStatus] = useState({
        type: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        if (window.location.search) {
            window.history.replaceState(
                {},
                "",
                `${window.location.pathname}${window.location.hash}`
            )
        }
    }, [])

    useEffect(() => {
        if (status.type !== "success") {
            return undefined
        }

        const timer = window.setTimeout(() => {
            setStatus({
                type: "",
                message: "",
            })
        }, 5000)

        return () => window.clearTimeout(timer)
    }, [status.type])

    function handleChange(event) {
        const { name, value } = event.target

        setFormData((current) => ({
            ...current,
            [name]: value,
        }))
    }

    async function handleSubmit(event) {
        event.preventDefault()

        setIsSubmitting(true)
        setStatus({
            type: "",
            message: "",
        })

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || "Unable to send your message.")
            }

            setFormData(initialFormData)

            setStatus({
                type: "success",
                message: "Your message was sent successfully.",
            })
        } catch (error) {
            setStatus({
                type: "error",
                message:
                    error instanceof Error
                        ? error.message
                        : "Unable to send your message right now.",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <main>
            <section className="contact-page">
                <div className="section-content">
                    <p className="section-label">Contact</p>

                    <h1>Let’s connect.</h1>

                    <p>
                        I’m interested in junior and entry-level software engineering
                        opportunities, particularly in backend development, Java, C#/.NET,
                        Python, and full-stack development.
                    </p>
                </div>
            </section>

            <section className="contact-content">
                <div className="contact-layout">
                    <div className="contact-info">
                        <p className="section-label">Contact Information</p>

                        <h2>Get in touch.</h2>

                        <p>
                            If you would like to discuss a software engineering opportunity,
                            project, or professional connection, feel free to contact me.
                        </p>

                        <div className="contact-details">
                            <div className="contact-detail">
                                <h3>Email</h3>
                                <p>
                                    <a href="mailto:james@james-stevens.dev">
                                        james@james-stevens.dev
                                    </a>
                                </p>
                            </div>

                            <div className="contact-detail">
                                <h3>Phone</h3>
                                <p>
                                    <a href="tel:+14107368849">(410) 736-8849</a>
                                </p>
                            </div>

                            <div className="contact-detail">
                                <h3>GitHub</h3>
                                <p>
                                    <a
                                        href="https://github.com/jas812000"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        github.com/jas812000
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                maxLength="100"
                                autoComplete="name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="company">
                                Company <span>(Optional)</span>
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                maxLength="150"
                                autoComplete="organization"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                maxLength="254"
                                autoComplete="email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                maxLength="150"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="7"
                                value={formData.message}
                                onChange={handleChange}
                                maxLength="5000"
                                required
                            />
                        </div>

                        <div className="contact-honeypot" aria-hidden="true">
                            <label htmlFor="website">Website</label>
                            <input
                                type="text"
                                id="website"
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                tabIndex="-1"
                                autoComplete="off"
                            />
                        </div>

                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>

                        {status.message && (
                            <p
                                className={`form-status form-status-${status.type}`}
                                role="status"
                                aria-live="polite"
                            >
                                {status.message}
                            </p>
                        )}
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Contact
