function Resume() {
  return (
    <main>
      <section className="resume-page">
        <div className="section-content">
          <p className="section-label">Resume</p>

          <h1>Software Engineer</h1>

          <p>
            Software engineer with hands-on experience building Java, C#/.NET,
            and Python applications backed by relational databases. Experienced
            in backend and full-stack development, object-oriented design,
            automated testing, secure development, and CI/CD workflows. Focused
            on building reliable, maintainable software through sound engineering
            practices, thoughtful application design, and continuous improvement.
            Interested in contributing to backend and enterprise application
            development while continuing to grow as a software engineer.
          </p>

          <div className="resume-actions">
            <a
              href="/James_Stevens_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>

            <a href="/James_Stevens_Resume.pdf" download>
              Download PDF
            </a>
          </div>
        </div>
      </section>

      <section className="resume-experience">
        <div className="section-content">
          <p className="section-label">Experience</p>

          <h2>Software Development</h2>

          <div className="resume-entry">
            <h3>Software Developer – Internship</h3>
            <p>
              University of Maryland Global Campus · May 2024 – March 2026
            </p>
            <p>
              Java development · JUnit testing · Software quality and security ·
              GitHub Actions · CI/CD · Oracle SQL · Relational database design
            </p>
          </div>

          <div className="resume-entry">
            <h3>Software Developer – Internship</h3>
            <p>
              University of Maryland Global Campus · May 2022 – December 2023
            </p>
            <p>
              Java integration and testing · Python · Flask · Flask Blueprints ·
              Authentication · Validation · Team development
            </p>
          </div>
        </div>
      </section>

      <section className="resume-project">
        <div className="section-content">
          <p className="section-label">Selected Project</p>

          <div className="resume-entry">
            <h2>Paws & Reservations</h2>
            <p>
              C# · ASP.NET MVC 5 · .NET Framework · Entity Framework 6 · SQL Server ·
              ASP.NET Identity
            </p>
            <p>
              Full-stack pet boarding management application with customer and pet
              management, boarding workflows, invoicing, payments, reporting,
              authentication, and role-based authorization.
            </p>
          </div>
        </div>
      </section>

      <section className="resume-background">
        <div className="section-content">
          <p className="section-label">Additional Professional Experience</p>

          <div className="resume-entry">
            <h2>United States Army</h2>
            <h3>Sergeant First Class (SFC)</h3>
            <p>February 2001 – July 2012</p>
            <p>
              Technical leadership · Operations · Quality assurance · Training ·
              Regulatory compliance
            </p>
          </div>

          <div className="resume-entry">
            <h2>BioLife Plasma Services</h2>
            <h3>Medical Support Specialist</h3>
            <p>June 2023 – June 2024</p>
            <p>
              Incident reporting · Regulatory compliance · Case review ·
              Risk mitigation · Cross-functional collaboration
            </p>
          </div>

          <div className="resume-entry">
            <h2>Healthcare Experience</h2>
            <h3>Registered Nurse</h3>
            <p>2012 – 2022</p>
            <p>
              Emergency · Trauma · Acute care · Cardiac/cath lab · Travel nursing
            </p>
          </div>
        </div>
      </section>

      <section className="resume-education">
        <div className="section-content">
          <p className="section-label">Education</p>

          <div className="resume-entry">
            <h2>Master of Science, Information Technology – Software Engineering</h2>
            <p>
              University of Maryland Global Campus · March 2026
            </p>
          </div>

          <div className="resume-entry">
            <h2>Bachelor of Science, Computer Science</h2>
            <p>
              University of Maryland Global Campus · December 2023
            </p>
          </div>

          <div className="resume-entry">
            <h2>Bachelor of Science, Nursing</h2>
            <p>
              University of Maryland School of Nursing · December 2010
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Resume