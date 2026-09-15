function Skills() {
  return (
    <main>
        <section className="skills-page">
            <div className="section-content">
                <p className="section-label">Skills</p>

                <h1>Technologies and engineering practices I use to build software.</h1>

                <p>
                My technical experience spans backend development, relational
                databases, frontend development, application security, testing,
                and software delivery. I focus on understanding how these
                technologies work together to build reliable and maintainable
                applications.
                </p>
            </div>
        </section>

        <div className="skills-grid">
            <section className="skill-group">
                <h2>Languages</h2>
                <p>Java · C# · Python · SQL · JavaScript</p>
            </section>

            <section className="skill-group">
                <h2>Backend & Frameworks</h2>
                <p>
                    Spring Boot · ASP.NET MVC · .NET Framework · Entity Framework · REST APIs
                </p>
            </section>

            <section className="skill-group">
                <h2>Databases & Data</h2>
                <p>
                    PostgreSQL · SQL Server · Relational Data Modeling · JPA
                </p>
            </section>

            <section className="skill-group">
                <h2>Frontend</h2>
                <p>React · HTML · CSS · JavaScript</p>
            </section>

            <section className="skill-group">
                <h2>Security</h2>
                <p>
                    Spring Security · ASP.NET Identity · Authentication · Authorization ·
                    Role-Based Access Control · Secure Development
                </p>
            </section>

            <section className="skill-group">
                <h2>Testing & Quality</h2>
                <p>
                    Unit Testing · Integration Testing · Validation · Debugging · Code Review
                </p>
            </section>

            <section className="skill-group">
                <h2>DevOps & Tools</h2>
                <p>
                    Git · GitHub · GitHub Actions · CI/CD · Docker · Kubernetes · Maven ·
                    npm · Postman
                </p>
            </section>
        </div>
        <section className="currently-developing">
            <div className="section-content">
                <p className="section-label">Currently Developing</p>

                <h2>Expanding my enterprise Java and software delivery experience.</h2>

                <p>
                I am continuing to develop hands-on experience with Java enterprise
                development and modern software delivery through the Enterprise Project
                Management System.
                </p>

                <p>
                Spring Boot · Spring Data JPA · Spring Security · PostgreSQL · Docker ·
                Kubernetes · GitHub Actions · CI/CD
                </p>
            </div>
        </section>
    </main>
  )
}

export default Skills