function Projects() {
  return (
    <main>
        <section className="projects-page">
            <div className="section-content">
                <p className="section-label">Projects</p>

                <h1>Software engineering projects built around real application problems.</h1>

                <p>
                    My projects focus on designing and building complete applications
                    rather than isolated coding exercises. They demonstrate backend
                    development, relational data modeling, application security,
                    business logic, frontend development, testing, and modern software
                    engineering practices.
                </p>
            </div>
        </section>
        <div className="projects-grid">
            <section className="project-detail">
                <div className="section-content">
                    <p className="section-label">Featured Project</p>

                    <h2>Paws & Reservations</h2>

                    <p>
                    A full-stack pet boarding management application designed to support the
                    day-to-day operations of a boarding business. The system manages
                    customers, pets, employees, boarding reservations, services, invoicing,
                    payments, reporting, and account security.
                    </p>

                    <h3>Key Capabilities</h3>

                    <p>
                    Customer and pet management · Boarding operations · Employee and
                    role-based workflows · Invoicing and payment processing · Operational
                    and financial reporting · PDF report exports · Authentication and account
                    recovery · Email integration
                    </p>

                    <h3>Technology</h3>

                    <p>
                    C# · ASP.NET MVC 5 · .NET Framework · Entity Framework 6 · SQL Server ·
                    ASP.NET Identity
                    </p>

                    <a href="/projects/james-pet-boarding">View Project Details</a>
                </div>
            </section>
            <section className="project-detail">
                <div className="section-content">
                    <p className="section-label">In Development</p>

                    <h2>Enterprise Project Management System</h2>

                    <p>
                    An enterprise project management platform designed around organizations,
                    teams, users, projects, and tasks. The application will support
                    collaborative project workflows, role-based access, task management,
                    project monitoring, and secure application architecture.
                    </p>

                    <h3>Planned Capabilities</h3>

                    <p>
                    Organization and team management · Project and task management ·
                    Role-based authorization · REST APIs · Authentication and security ·
                    Testing · CI/CD · Containerization · Deployment and observability
                    </p>

                    <h3>Technology</h3>

                    <p>
                    Java · Spring Boot · Spring Data JPA · Spring Security · React ·
                    PostgreSQL · Docker · Kubernetes · GitHub Actions
                    </p>

                    <a href="/projects/epms">View Project Details</a>
                </div>
            </section>
            <section className="project-detail">
                <div className="section-content">
                    <p className="section-label">Project</p>

                    <h2>Project Name</h2>

                    <p>
                    Project description will be added after reviewing existing GitHub
                    repositories and selecting an additional project that demonstrates
                    relevant software engineering skills.
                    </p>

                    <h3>Key Capabilities</h3>

                    <p>
                    Project capabilities will be added after project selection.
                    </p>

                    <h3>Technology</h3>

                    <p>
                    Technology stack will be added after project selection.
                    </p>

                    <a href="/projects/project-three">View Project Details</a>
                </div>
            </section>
            <section className="project-detail">
                <div className="section-content">
                    <p className="section-label">Project</p>

                    <h2>Project Name</h2>

                    <p>
                    Project description will be added after reviewing existing GitHub
                    repositories and selecting an additional project that demonstrates
                    relevant software engineering skills.
                    </p>

                    <h3>Key Capabilities</h3>

                    <p>
                    Project capabilities will be added after project selection.
                    </p>

                    <h3>Technology</h3>

                    <p>
                    Technology stack will be added after project selection.
                    </p>

                    <a href="/projects/project-four">View Project Details</a>
                </div>
            </section>
        </div>
    </main>
  )
}

export default Projects