import ProjectGallery from "../components/ProjectGallery"

const projects = [
  {
    label: "Primary Java Featured Project",
    title: "Accounting Calculators",
    images: [
      {
        src: "/images/projects/accounting-calculators/welcome-screen.png",
        alt: "Accounting Calculators main navigation screen",
        title: "Main Menu",
        description: "Central navigation providing access to all three calculators.",
      },
      {
        src: "/images/projects/accounting-calculators/payroll-calculator.png",
        alt: "Payroll Calculator displaying gross pay, deductions, and net pay",
        title: "Payroll Calculator",
        description: "Calculates gross pay, federal withholding, payroll taxes, deductions, and net pay.",
      },
      {
        src: "/images/projects/accounting-calculators/tax-calculator.png",
        alt: "Federal Income Tax Calculator displaying tax calculation results",
        title: "Federal Income Tax Calculator",
        description: "Calculates annual federal income tax using the selected tax year, filing status, and taxable income.",
      },
      {
        src: "/images/projects/accounting-calculators/expenses-calculator.png",
        alt: "Expenses Calculator displaying categorized expenses and totals",
        title: "Expenses Calculator",
        description: "Tracks categorized expenses, optional due dates, and automatically updated totals.",
      },
    ],
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
    images: [
      {
        src: "/images/projects/art-inventory/dashboard.png",
        alt: "Dashboard screenshot from the Art Inventory and Transaction Management System",
        title: "Dashboard",
        description: "Main navigation for artwork inventory, customers, and orders.",
      },
      {
        src: "/images/projects/art-inventory/inventory.png",
        alt: "Artwork Inventory screenshot from the Art Inventory and Transaction Management System",
        title: "Artwork Inventory",
        description: "View available artwork and inventory information.",
      },
      {
        src: "/images/projects/art-inventory/add-art.png",
        alt: "Add Artwork screenshot from the Art Inventory and Transaction Management System",
        title: "Add Artwork",
        description: "Add new artwork to inventory.",
      },
      {
        src: "/images/projects/art-inventory/remove-artwork.png",
        alt: "Remove Artwork screenshot from the Art Inventory and Transaction Management System",
        title: "Remove Artwork",
        description: "Remove artwork from inventory.",
      },
      {
        src: "/images/projects/art-inventory/manage-customer-initial.png",
        alt: "Customer Management screenshot from the Art Inventory and Transaction Management System",
        title: "Customer Management",
        description: "Retrieve and manage customer information.",
      },
      {
        src: "/images/projects/art-inventory/manage-customer-post.png",
        alt: "Updated Customer screenshot from the Art Inventory and Transaction Management System",
        title: "Updated Customer",
        description: "View updated customer information.",
      },
      {
        src: "/images/projects/art-inventory/create-order.png",
        alt: "Create Order screenshot from the Art Inventory and Transaction Management System",
        title: "Create Order",
        description: "Create an order for a customer.",
      },
      {
        src: "/images/projects/art-inventory/retrieve-order.png",
        alt: "Retrieve Order screenshot from the Art Inventory and Transaction Management System",
        title: "Retrieve Order",
        description: "Search for and retrieve existing orders.",
      },
      {
        src: "/images/projects/art-inventory/all-orders.png",
        alt: "All Orders screenshot from the Art Inventory and Transaction Management System",
        title: "All Orders",
        description: "Browse and review recorded orders.",
      },
      {
        src: "/images/projects/art-inventory/updated-order.png",
        alt: "Updated Order screenshot from the Art Inventory and Transaction Management System",
        title: "Updated Order",
        description: "Review updated order information.",
      },
      {
        src: "/images/projects/art-inventory/complete-order.png",
        alt: "Complete Order screenshot from the Art Inventory and Transaction Management System",
        title: "Complete Order",
        description: "Process an order through completion.",
      },
      {
        src: "/images/projects/art-inventory/completed-order.png",
        alt: "Completed Order screenshot from the Art Inventory and Transaction Management System",
        title: "Completed Order",
        description: "Review a completed transaction.",
      },
      {
        src: "/images/projects/art-inventory/cancel-order.png",
        alt: "Cancel Order screenshot from the Art Inventory and Transaction Management System",
        title: "Cancel Order",
        description: "Cancel an existing order.",
      },
      {
        src: "/images/projects/art-inventory/inventory-released.png",
        alt: "Inventory Released screenshot from the Art Inventory and Transaction Management System",
        title: "Inventory Released",
        description: "Review inventory following order cancellation.",
      },
    ],
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
    images: [
      {
        src: "/images/projects/home-services/main-menu.png",
        alt: "Home Services Quote Calculator main menu",
        title: "Main Menu",
        description: "Review available house-cleaning and yard services, pricing, and service options.",
      },
      {
        src: "/images/projects/home-services/house-cleaning.png",
        alt: "Home Services Quote Calculator house-cleaning estimate",
        title: "House-Cleaning Quote",
        description: "Generate an itemized house-cleaning estimate with service charges, surcharges, and tax.",
      },
      {
        src: "/images/projects/home-services/yard-service.png",
        alt: "Home Services Quote Calculator yard-service estimate",
        title: "Yard-Service Quote",
        description: "Generate an itemized yard-service estimate with labor, property-size charges, discounts, and tax.",
      },
      {
        src: "/images/projects/home-services/combined-service.png",
        alt: "Home Services Quote Calculator combined house and yard estimate",
        title: "Combined Quote",
        description: "Generate house-cleaning and yard-service estimates together with a combined total.",
      },
      {
        src: "/images/projects/home-services/input-validation.png",
        alt: "Home Services Quote Calculator input validation",
        title: "Input Validation",
        description: "Validate menu selections, property sizes, time formats, and service time ranges.",
      },
    ],
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
    images: [
      {
        src: "/images/projects/learn-english-together/home.png",
        alt: "Bilingual English Practice Zone homepage",
        title: "Homepage",
        description: "Thai and English navigation for the available vocabulary categories.",
      },
      {
        src: "/images/projects/learn-english-together/numbers.png",
        alt: "Numbers vocabulary category navigation",
        title: "Numbers",
        description: "Choose from the available number vocabulary lessons.",
      },
      {
        src: "/images/projects/learn-english-together/single-digits.png",
        alt: "Single-digit vocabulary cards with pronunciation buttons",
        title: "Single Digits",
        description: "Practice numbers using images, English labels, and pronunciation audio.",
      },
      {
        src: "/images/projects/learn-english-together/house.png",
        alt: "Bilingual House vocabulary category navigation",
        title: "House",
        description: "Explore household vocabulary organized by room and area.",
      },
      {
        src: "/images/projects/learn-english-together/kitchen.png",
        alt: "Kitchen vocabulary topic navigation",
        title: "Kitchen",
        description: "Navigate kitchen vocabulary topics in Thai and English.",
      },
      {
        src: "/images/projects/learn-english-together/food-preparation.png",
        alt: "Food preparation vocabulary with photographs and pronunciation buttons",
        title: "Food Preparation",
        description: "Learn food preparation vocabulary through photographs and audio.",
      },
    ],
    demoUrl: "https://jas812000.github.io/learn-english-together/",
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

              {project.images && (
                <ProjectGallery
                  images={project.images}
                  projectTitle={project.title}
                />
              )}

              <h3>Key Capabilities</h3>
              <p>{project.capabilities}</p>

              <h3>Technology</h3>
              <p>{project.technology}</p>

              {project.demoUrl && (
                <p>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Live Demo →
                  </a>
                </p>
              )}

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
