function Contact() {
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
                            <a href="mailto:YOUR_EMAIL">jas812000@gmail.com</a>
                        </p>
                        </div>

                        <div className="contact-detail">
                        <h3>Phone</h3>
                        <p>
                            <a href="tel:YOUR_PHONE">(410) 736-8849</a>
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
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="company">Company <span>(Optional)</span></label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                        id="message"
                        name="message"
                        rows="7"
                        required
                        ></textarea>
                    </div>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    </main>
  )
}

export default Contact