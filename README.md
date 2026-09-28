# James Stevens — Software Engineering Portfolio

A software engineering portfolio showcasing full-stack, backend, desktop, command-line, and frontend applications built with Java, C#/.NET, Python, JavaScript, and related technologies.

The projects in this portfolio focus on solving complete application problems rather than isolated programming exercises. They demonstrate object-oriented design, business logic, data persistence, relational data modeling, authentication and authorization, validation, automated testing, reporting, user interface development, and maintainable application architecture.

## Portfolio Technology

The portfolio website is built with:

- React
- JavaScript
- Vite
- CSS
- Cloudflare

## Featured Projects

### Paws & Reservations

**Full-Stack Flagship Project**

Paws & Reservations is a full-stack pet boarding management application designed to support the day-to-day operations of a boarding business.

The system manages customers, pets, employees, boarding reservations, services, invoicing, payments, reporting, and account security.

**Key capabilities:**

- Customer and pet management
- Boarding operations
- Employee and role-based workflows
- Invoicing and payment processing
- Operational and financial reporting
- PDF report exports
- Authentication and account recovery
- Email integration

**Technology:**

C# · ASP.NET MVC 5 · .NET Framework · Entity Framework 6 · SQL Server · ASP.NET Identity

**Application preview includes:**

- Public home page and application branding
- Administrative dashboard
- Customer profiles
- Pet profiles and care information
- Active boardings
- Boarding details
- Invoice details
- Payment details
- Reports dashboard
- Revenue reporting

**Source:**
https://github.com/jas812000/JamesPetBoarding

---

### Accounting Calculators

**Primary Java Featured Project**

Accounting Calculators is a JavaFX desktop application providing payroll, federal income tax, and expense calculators.

The project separates calculation logic from the user interface and emphasizes reusable components, input validation, modular design, and object-oriented programming.

**Key capabilities:**

- Payroll calculations
- Federal income tax calculations
- Expense calculations
- Input validation
- Modular calculation logic
- Desktop user interface

**Technology:**

Java · JavaFX · Object-Oriented Design · Input Validation

**Application preview includes:**

- Main application menu
- Payroll Calculator
- Federal Income Tax Calculator
- Expenses Calculator

**Source:**
https://github.com/jas812000/accounting-calculators-javafx

---

### Art Inventory & Transaction Management System

**Featured Java Project**

A Java application for managing artwork inventory and transactions with an emphasis on domain modeling, persistence, configuration, validation, error handling, automated testing, and maintainable application architecture.

The application demonstrates how inventory, customers, orders, and transaction lifecycles can be modeled as a cohesive business application.

**Key capabilities:**

- Artwork inventory management
- Transaction processing
- Customer management
- Order management
- Domain modeling
- File persistence
- Configuration management
- Input validation
- Error handling
- Automated testing

**Technology:**

Java 21 · Maven · Swing · File Persistence · Automated Testing

**Application preview includes:**

- Dashboard
- Artwork inventory
- Adding and removing artwork
- Customer management
- Order creation and retrieval
- Order updates
- Order completion
- Order cancellation
- Inventory release after cancellation

**Source:**
https://github.com/jas812000/art-inventory-transaction-management-system

---

### Reservation Management System

**Java Backend Supporting Project**

The Reservation Management System is a modular Java backend application for managing customer accounts and lodging reservations.

The project demonstrates object-oriented design, business rules, data normalization, file persistence, custom exceptions, controlled reservation lifecycles, and automated testing.

**Key capabilities:**

- Customer account management
- Reservation workflows
- Name normalization
- Address normalization
- Business-rule validation
- Reservation lifecycle management
- File persistence
- Custom exception handling
- Automated testing

**Technology:**

Java · Maven · Object-Oriented Design · File Persistence · JUnit 5

**Application preview includes:**

- Main application menu
- Customer account creation
- Existing account lookup
- Reservation creation
- Reservation details
- Completed reservation lifecycle

**Source:**
https://github.com/jas812000/reservation-management-system

---

### Home Services Quote Calculator

**Python Supporting Project**

The Home Services Quote Calculator is a Python command-line application that calculates home-service estimates using structured pricing rules, validation, modular application design, and automated tests.

It supports individual and combined service quotes while applying service-specific pricing rules and validating user input.

**Key capabilities:**

- Service quote calculations
- Pricing rules
- House-cleaning estimates
- Yard-service estimates
- Combined service estimates
- Input validation
- Modular business logic
- Command-line interface
- Automated testing

**Technology:**

Python · Object-Oriented Design · CLI · Automated Testing · Ruff · GitHub Actions

**Application preview includes:**

- Main service menu
- House-cleaning quote
- Yard-service quote
- Combined service quote
- Input-validation workflow

**Source:**
https://github.com/jas812000/home-services-quote-calculator

---

### Learn English Together

**Frontend Supporting Project**

Learn English Together is a browser-based learning application designed to help Thai learners build English vocabulary through organized lessons, visual material, bilingual navigation, and audio-supported content.

The project demonstrates frontend development while addressing a practical educational use case.

**Key capabilities:**

- Vocabulary lessons
- Image-supported learning
- Audio content
- Browser-based navigation
- Thai and English content
- Responsive frontend presentation

**Technology:**

HTML · CSS · JavaScript

**Application preview includes:**

- Homepage
- Number vocabulary navigation
- Single-digit vocabulary lessons
- House vocabulary
- Kitchen vocabulary
- Food-preparation vocabulary

**Live Application:**
https://jas812000.github.io/learn-english-together/

**Source:**
https://github.com/jas812000/learn-english-together

## Project Screenshots

Every project currently showcased in the portfolio includes application screenshots.

The Projects page uses an interactive screenshot gallery and lightbox so visitors can review application interfaces and workflows without leaving the portfolio.

Screenshot collections are stored under:

```text
public/images/projects/
```

Current collections include:

```text
accounting-calculators/
art-inventory/
home-services/
learn-english-together/
paws-reservations/
reservation-management/
```

The screenshots are intended to show actual application behavior and representative workflows, including user interfaces, application output, business processes, reports, and validation.

## Technical Areas Demonstrated

The projects collectively demonstrate experience across several areas of software development.

### Languages

- Java
- C#
- Python
- JavaScript
- HTML
- CSS

### Backend and Application Development

- ASP.NET MVC 5
- .NET Framework
- Entity Framework 6
- Java application development
- Object-oriented design
- Domain modeling
- Business-rule implementation
- Application validation
- Exception handling
- File persistence

### Frontend and User Interface Development

- React
- JavaFX
- Swing
- HTML
- CSS
- JavaScript
- Responsive browser interfaces
- Desktop application interfaces

### Data and Persistence

- SQL Server
- Entity Framework
- Relational data modeling
- File-based persistence

### Security and Account Management

Paws & Reservations demonstrates application-security workflows including:

- Authentication
- ASP.NET Identity
- Role-based workflows
- Account recovery
- Email integration

### Testing and Code Quality

Projects include examples of:

- Automated testing
- JUnit 5
- Input validation
- Business-rule testing
- Ruff
- GitHub Actions
- Maven-based Java builds

### Reporting and Business Workflows

The portfolio also includes applications demonstrating:

- Operational reporting
- Financial reporting
- PDF report generation
- Invoice processing
- Payment processing
- Reservation lifecycles
- Transaction lifecycles
- Inventory management
- Quote calculations

## Portfolio Structure

The React portfolio is organized around reusable pages and components.

```text
james-portfolio/
├── public/
│   └── images/
│       └── projects/
├── src/
│   ├── components/
│   └── pages/
├── README.md
└── package.json
```

Project metadata, descriptions, capabilities, technologies, repository links, live-demo links, and screenshot collections are presented through the Projects page.

A reusable project gallery provides consistent screenshot presentation across the portfolio.

## Live Demonstrations

### Learn English Together

A live version of Learn English Together is currently available:

https://jas812000.github.io/learn-english-together/

Additional applications may receive live demonstrations where deployment is practical for the project's architecture and technology stack.

## Running the Portfolio Locally

### Prerequisites

Install a current Node.js and npm environment.

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

Vite will start the local development server and display the local address in the terminal.

### Create a Production Build

```bash
npm run build
```

The production-ready output is generated by Vite.

## Individual Project Repositories

Each application showcased here is maintained in its own repository.

- Accounting Calculators
  https://github.com/jas812000/accounting-calculators-javafx

- Art Inventory & Transaction Management System
  https://github.com/jas812000/art-inventory-transaction-management-system

- Paws & Reservations
  https://github.com/jas812000/JamesPetBoarding

- Reservation Management System
  https://github.com/jas812000/reservation-management-system

- Home Services Quote Calculator
  https://github.com/jas812000/home-services-quote-calculator

- Learn English Together
  https://github.com/jas812000/learn-english-together

## Purpose

This portfolio is intended to provide a central location for reviewing my software engineering work across multiple languages and application types.

The individual repositories contain the source code and project-specific documentation, while this portfolio provides a higher-level view of the applications, their technologies, their primary capabilities, and representative screenshots of the completed software.
