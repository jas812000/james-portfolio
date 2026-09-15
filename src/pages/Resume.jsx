function Resume() {
  return (
    <main>
      <section className="resume-page">
        <div className="section-content">
            <p className="section-label">Resume</p>

            <h1>Software Engineer</h1>

            <p>
            Software engineer with hands-on experience developing Java, Python,
            and .NET applications with relational databases, automated testing,
            and CI/CD workflows. Experienced in object-oriented design, software
            quality, secure development, collaborative code review, and test
            automation, with a focus on building reliable and maintainable
            software.
            </p>

            <div className="resume-actions">
                <a href="/Stevens_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    View Resume
                </a>

                <a href="/Stevens_Resume.pdf" download>
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
              Java development · JUnit testing · Automated software quality ·
              Security analysis · GitHub Actions · CI/CD · Oracle SQL
            </p>
          </div>

          <div className="resume-entry">
            <h3>Software Developer – Internship</h3>
            <p>
              University of Maryland Global Campus · May 2022 – December 2023
            </p>
            <p>
              Python · Flask · Application architecture · Authentication ·
              Validation · Testing · Team integration
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
            </div>

            <div className="resume-entry">
                <h2>BioLife Plasma Services</h2>
                <h3>Medical Support Specialist</h3>
                <p>June 2023 – June 2024</p>
            </div>

            <div className="resume-entry">
                <h2>Healthcare Experience</h2>
                <h3>Registered Nurse</h3>
                <p>2012 – 2022</p>
                <p>
                    Emergency, acute-care, cardiac/cath-lab, and travel-nursing experience
                    across multiple healthcare systems in Texas.
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