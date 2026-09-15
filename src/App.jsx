import './App.css'

function App() {
  return (
    <>
      <header className="site-header">
        <nav className="navbar">
          <a href="/" className="brand">James Stevens</a>

          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/skills">Skills</a>
            <a href="/resume">Resume</a>
            <a href="/contact">Contact</a>
          </div>
        </nav>
      </header>
      <main>
        <section className="hero-section">
          <div className="hero-content">
            <p className="hero-label">Software Engineer</p>

            <h1>Building reliable software from backend to deployment.</h1>

            <p className="hero-description">
              Backend-focused software engineer working with Java, C#/.NET,
              Python, SQL, and modern software engineering practices.
            </p>

            <div className="hero-actions">
              <a href="/projects">View Projects</a>
              <a href="/resume">View Resume</a>
            </div>
          </div>
        </section>
        <section className="about-preview">
          <div className="section-content">
            <p className="section-label">About</p>

            <h2>Software engineering grounded in real-world problem solving.</h2>

            <p>
              I am a software engineer focused on backend development, relational
              databases, secure application design, and building maintainable
              software from development through deployment.
            </p>

            <a href="/about">More About Me</a>
          </div>
        </section>
        <section className="featured-projects">
          <div className="section-content">
            <p className="section-label">Featured Projects</p>

            <div className="section-heading">
              <h2>Selected software engineering work.</h2>
              <a href="/projects">View All Projects →</a>
            </div>

            <div className="project-grid">
              <article className="project-card">
                <h3>Paws & Reservations</h3>

                <p>
                  A pet boarding management application supporting customers, pets,
                  employees, boarding operations, invoicing, payments, reporting,
                  and account security.
                </p>

                <p>
                  C# · ASP.NET MVC 5 · Entity Framework 6 · SQL Server
                </p>

                <a href="/projects/james-pet-boarding">View Project</a>
              </article>

              <article className="project-card">
                <h3>Enterprise Project Management System</h3>

                <p>
                  An enterprise project management platform for organizations, teams,
                  projects, tasks, users, and role-based workflows.
                </p>

                <p>
                  Java · Spring Boot · React · PostgreSQL
                </p>

                <p>In Development</p>

                <a href="/projects/epms">View Project</a>
              </article>
            </div>

          </div>
        </section>
        <section className="skills-preview">
          <div className="section-content">
            <p className="section-label">Core Skills</p>

            <div className="section-heading">
              <h2>Technologies and practices I use to build software.</h2>
              <a href="/skills">View All Skills →</a>
            </div>

            <div className="skills-grid">
              <div className="skill-group">
                <h3>Languages</h3>
                <p>Java · C# · Python · SQL · JavaScript</p>
              </div>
              <div className="skill-group">
                <h3>Backend & Data</h3>
                <p>Spring Boot · ASP.NET MVC · Entity Framework · PostgreSQL · SQL Server</p>
              </div>
              <div className="skill-group">
                <h3>Frontend</h3>
                <p>React · HTML · CSS</p>
              </div>
              <div className="skill-group">
                <h3>Engineering Practices</h3>
                <p>Git · GitHub · REST APIs · Testing · CI/CD · Secure Development</p>
              </div>
            </div>

          </div>
        </section>
        <section className="contact-cta">
          <div className="section-content">
            <p className="section-label">Let's Connect</p>

            <h2>Ready to contribute and grow as a software engineer.</h2>

            <p>
              I'm interested in junior and entry-level software engineering
              opportunities where I can contribute, continue learning, and grow
              as an engineer.
            </p>

            <a href="/contact">Contact Me</a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-content">
          <p>© 2026 James Stevens. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
