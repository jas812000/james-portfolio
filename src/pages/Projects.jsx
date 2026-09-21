const projects = [
  {
    label: "Primary Java Featured Project",
    title: "Accounting Calculators",
    description:
      "A JavaFX desktop application providing payroll, tax, and expense calculators. The project separates calculation logic from the user interface and emphasizes reusable components, input validation, and object-oriented design.",
    capabilities:
      "Payroll calculations · Tax calculations · Expense calculations · Input validation · Modular calculation logic · Desktop user interface",
    technology:
      "Java · JavaFX · Object-Oriented Design · Input Validation",
    url: "https://github.com/jas812000/accounting-calculators-javafx",
  },
  {
    label: "Featured Java Project",
    title: "Art Inventory & Transaction Management System",
    description:
      "A Java application for managing artwork inventory and transactions with a focus on domain modeling, persistence, configuration, validation, error handling, automated testing, and maintainable application architecture.",
    capabilities:
      "Inventory management · Transaction processing · Domain modeling · Persistence · Configuration management · Validation · Automated testing",
    technology:
      "Java 21 · Maven · Swing · File Persistence · Automated Testing",
    url: "https://github.com/jas812000/art-inventory-transaction-management-system",
  },
  {
    label: "Full-Stack Flagship Project",
    title: "Paws & Reservations",
    description:
      "A full-stack pet boarding management application designed to support the day-to-day operations of a boarding business. The system manages customers, pets, employees, boarding reservations, services, invoicing, payments, reporting, and account security.",
    capabilities:
      "Customer and pet management · Boarding operations · Employee and role-based workflows · Invoicing and payment processing · Operational and financial reporting · PDF report exports · Authentication and account recovery · Email integration",
    technology:
      "C# · ASP.NET MVC 5 · .NET Framework · Entity Framework 6 · SQL Server · ASP.NET Identity",
    url: "https://github.com/jas812000/JamesPetBoarding",
  },
  {
    label: "Java Backend Supporting Project",
    title: "Reservation Management System",
    description:
      "A modular Java backend application for managing customers, lodging, and reservations. The project demonstrates object-oriented design, business rules, persistence, custom exceptions, and automated testing.",
    capabilities:
      "Customer management · Lodging management · Reservation workflows · Business-rule validation · File persistence · Custom exception handling · Automated testing",
    technology:
      "Java · Maven · Object-Oriented Design · File Persistence · Automated Testing",
    url: "https://github.com/jas812000/reservation-management-system",
  },
  {
    label: "Python Supporting Project",
    title: "Home Services Quote Calculator",
    description:
      "A Python command-line application that calculates home-service quotes using structured pricing rules, validation, modular application design, and automated tests.",
    capabilities:
      "Service quote calculations · Pricing rules · Input validation · Modular business logic · Command-line interface · Automated testing",
    technology:
      "Python · Object-Oriented Design · CLI · Automated Testing · Ruff · GitHub Actions",
    url: "https://github.com/jas812000/home-services-quote-calculator",
  },
  {
    label: "Frontend Supporting Project",
    title: "Learn English Together",
    description:
      "A browser-based learning site designed to help Thai learners build English vocabulary through organized lessons, visual material, and audio-supported content.",
    capabilities:
      "Vocabulary lessons · Image-supported learning · Audio content · Browser-based navigation · Responsive frontend presentation",
    technology:
      "HTML · CSS · JavaScript",
    url: "https://github.com/jas812000/learn-english-together",
  },
]

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
        {projects.map((project) => (
          <section className="project-detail" key={project.title}>
            <div className="section-content">
              <p className="section-label">{project.label}</p>

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <h3>Key Capabilities</h3>
              <p>{project.capabilities}</p>

              <h3>Technology</h3>
              <p>{project.technology}</p>

              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub →
              </a>
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}

export default Projects
