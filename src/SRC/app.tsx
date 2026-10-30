
import React, { useState } from "react";

type Page =
  | "Home"
  | "About"
  | "Features"
  | "Team"
  | "Contact"
  | "Login"
  | "Register";

const team = [
  { name: "Osakwe Daniel", role: "Team Lead" },
  { name: "Ladenegan Success", role: "Team Member" },
  { name: "Iledbare Daniel", role: "Team Member" },
  { name: "Ayinlade Matthew", role: "Team Member" },
  { name: "Olajuwon Gideon", role: "Team Member" },
  { name: "Agunbiade Samuel", role: "Team Member" },
  { name: "Sunday Bright", role: "Team Member" },
];

const features = [
  {
    icon: "📚",
    title: "Student Records",
    description:
      "Organize student information and keep important school records in one place.",
  },
  {
    icon: "📋",
    title: "Digital Attendance",
    description:
      "Record daily student attendance without depending on paper registers.",
  },
  {
    icon: "📊",
    title: "Attendance Reports",
    description:
      "View attendance summaries and follow student attendance over time.",
  },
  {
    icon: "🏫",
    title: "School Management",
    description:
      "Give each school its own organized space for managing school activities.",
  },
  {
    icon: "👩‍🏫",
    title: "Teacher Management",
    description:
      "Organize teacher information and class assignments.",
  },
  {
    icon: "🔐",
    title: "Secure Access",
    description:
      "Plan access around school roles and protect private school records.",
  },
];

export default function App() {
  const [page, setPage] = useState<Page>("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (nextPage: Page) => {
    setPage(nextPage);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems: Page[] = [
    "Home",
    "About",
    "Features",
    "Team",
    "Contact",
  ];

  return (
    <div className="app">
      <header className="navbar">
        <button className="brand" onClick={() => navigate("Home")}>
          <span className="brand-icon">S</span>
          <span>
            <strong>SchoolHub Lagos</strong>
            <small>Smarter Schools. Brighter Futures.</small>
          </span>
        </button>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map((item) => (
            <button
              key={item}
              className={page === item ? "nav-link active" : "nav-link"}
              onClick={() => navigate(item)}
            >
              {item}
            </button>
          ))}

          <button
            className="nav-login"
            onClick={() => navigate("Login")}
          >
            Login
          </button>

          <button
            className="nav-register"
            onClick={() => navigate("Register")}
          >
            Register School
          </button>
        </nav>
      </header>

      <main>
        {page === "Home" && (
          <>
            <section className="hero">
              <div className="hero-content">
                <span className="eyebrow">
                  A smarter way to manage schools
                </span>
                <h1>
                  Smarter Schools.
                  <br />
                  <span>Brighter Futures.</span>
                </h1>
                <p>
                  SchoolHub Lagos is a digital school management
                  platform designed to help schools organize student
                  records, monitor attendance and manage important
                  school information.
                </p>
                <div className="hero-buttons">
                  <button
                    className="primary-button"
                    onClick={() => navigate("Register")}
                  >
                    Get Started
                  </button>
                  <button
                    className="secondary-button"
                    onClick={() => navigate("About")}
                  >
                    Learn More
                  </button>
                </div>
              </div>

              <div className="hero-visual">
                <div className="visual-card">
                  <div className="visual-top">
                    <span>School Overview</span>
                    <span className="status-dot">●</span>
                  </div>
                  <div className="visual-icon">🏫</div>
                  <h3>Your school, organized.</h3>
                  <p>
                    Student records, attendance and reports in one
                    digital space.
                  </p>
                  <div className="visual-stats">
                    <div>
                      <strong>01</strong>
                      <small>Student records</small>
                    </div>
                    <div>
                      <strong>02</strong>
                      <small>Attendance</small>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section">
              <div className="section-heading">
                <span className="eyebrow">What we provide</span>
                <h2>One platform. Better school organization.</h2>
                <p>
                  Useful digital tools to make everyday school
                  administration more organized.
                </p>
              </div>

              <div className="feature-grid">
                {features.slice(0, 3).map((feature) => (
                  <article className="feature-card" key={feature.title}>
                    <span className="feature-icon">{feature.icon}</span>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </article>
                ))}
              </div>

              <div className="center-button">
                <button
                  className="secondary-button"
                  onClick={() => navigate("Features")}
                >
                  Explore All Features
                </button>
              </div>
            </section>

            <section className="callout">
              <h2>Bring your school records into one place.</h2>
              <p>
                Discover a more organized approach to school
                administration with SchoolHub Lagos.
              </p>
              <button
                className="light-button"
                onClick={() => navigate("Register")}
              >
                Register Your School
              </button>
            </section>
          </>
        )}

        {page === "About" && (
          <section className="section page-section">
            <span className="eyebrow">About SchoolHub Lagos</span>
            <h1>Making school management more organized.</h1>
            <p>
              SchoolHub Lagos is a digital school management
              platform designed to improve the way schools manage
              their daily activities and administrative operations.
              Our platform aims to provide schools with a simple,
              reliable and organized way to manage student
              information, monitor attendance and keep important
              school records in one place.
            </p>

            <div className="info-grid">
              <article className="info-card">
                <h2>Our Mission</h2>
                <p>
                  To help schools move from paper-based record
                  keeping towards organized and accessible digital
                  school management.
                </p>
              </article>
              <article className="info-card">
                <h2>Our Vision</h2>
                <p>
                  To support a future where schools can manage
                  important information efficiently using accessible
                  digital tools.
                </p>
              </article>
            </div>

            <h2 className="subheading">The problem we are solving</h2>
            <p>
              Paper-based registers and scattered school records
              can make it difficult to organize information, track
              attendance and prepare reports.
            </p>

            <h2 className="subheading">Our proposed solution</h2>
            <p>
              SchoolHub Lagos brings student records, digital
              attendance and school reports together in one
              organized platform.
            </p>
          </section>
        )}

        {page === "Features" && (
          <section className="section page-section">
            <span className="eyebrow">Platform features</span>
            <h1>Tools designed for better school management.</h1>
            <p>
              Explore the key areas SchoolHub Lagos is being
              developed to support.
            </p>

            <div className="feature-grid">
              {features.map((feature) => (
                <article className="feature-card" key={feature.title}>
                  <span className="feature-icon">{feature.icon}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {page === "Team" && (
          <section className="section page-section">
            <span className="eyebrow">Meet the developers</span>
            <h1>The SchoolHub Lagos Team</h1>
            <p>
              A team working together to develop smarter digital
              solutions for schools.
            </p>

            <div className="team-grid">
              {team.map((member) => (
                <article
                  className={
                    member.role === "Team Lead"
                      ? "team-card team-lead"
                      : "team-card"
                  }
                  key={member.name}
                >
                  <div className="team-avatar">
                    {member.name.charAt(0)}
                  </div>
                  <h3>{member.name}</h3>
                  <span>{member.role}</span>
                </article>
              ))}
            </div>
          </section>
        )}

        {page === "Contact" && (
          <section className="section page-section narrow">
            <span className="eyebrow">Get in touch</span>
            <h1>Contact SchoolHub Lagos</h1>
            <p>
              Have a question or want to learn more about the
              platform? Send us a message.
            </p>

            <form
              className="form-card"
              onSubmit={(event) => {
                event.preventDefault();
                alert(
                  "This contact form is a design preview. Message sending will be connected later."
                );
              }}
            >
              <label>
                Your name
                <input type="text" placeholder="Enter your name" required />
              </label>
              <label>
                Email address
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </label>
              <label>
                Subject
                <input type="text" placeholder="Message subject" required />
              </label>
              <label>
                Message
                <textarea
                  placeholder="Write your message"
                  rows={5}
                  required
                />
              </label>
              <button className="primary-button" type="submit">
                Send Message
              </button>
            </form>
          </section>
        )}

        {page === "Login" && (
          <section className="section page-section narrow">
            <span className="eyebrow">Welcome back</span>
            <h1>School Login</h1>
            <p>
              Sign-in functionality will be connected to secure
              school accounts during backend development.
            </p>

            <form
              className="form-card"
              onSubmit={(event) => {
                event.preventDefault();
                alert(
                  "Login is not connected yet. Secure authentication will be added during backend development."
                );
              }}
            >
              <label>
                Email address
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </label>
              <button className="primary-button" type="submit">
                Login
              </button>
            </form>
          </section>
        )}

        {page === "Register" && (
          <section className="section page-section narrow">
            <span className="eyebrow">Join SchoolHub Lagos</span>
            <h1>Register Your School</h1>
            <p>
              Enter your school's details to begin the registration
              process. Approval and secure account creation will be
              connected later.
            </p>

            <form
              className="form-card"
              onSubmit={(event) => {
                event.preventDefault();
                alert(
                  "School registration is a design preview. Database saving and approval will be connected later."
                );
              }}
            >
              <label>
                School name
                <input type="text" placeholder="Enter school name" required />
              </label>
              <label>
                School email
                <input
                  type="email"
                  placeholder="Enter school email"
                  required
                />
              </label>
              <label>
                Phone number
                <input type="tel" placeholder="Enter phone number" required />
              </label>
              <label>
                School address
                <textarea
                  placeholder="Enter school address"
                  rows={3}
                  required
                />
              </label>
              <label>
                School type
                <select required defaultValue="">
                  <option value="" disabled>
                    Select school type
                  </option>
                  <option>Public</option>
                  <option>Private</option>
                  <option>Other</option>
                </select>
              </label>
              <label>
                Administrator name
                <input
                  type="text"
                  placeholder="Enter administrator name"
                  required
                />
              </label>
              <label>
                Administrator email
                <input
                  type="email"
                  placeholder="Enter administrator email"
                  required
                />
              </label>
              <label>
                Create password
                <input
                  type="password"
                  placeholder="Create a password"
                  required
                />
              </label>
              <button className="primary-button" type="submit">
                Submit Registration
              </button>
            </form>
          </section>
        )}
      </main>

      <footer className="footer">
        <div>
          <h2>SchoolHub Lagos</h2>
          <p>Smarter Schools. Brighter Futures.</p>
          <p>Developed by the SchoolHub Lagos Team.</p>
          <p>Competition: Tech Up Boys.</p>
        </div>

        <button className="footer-link" onClick={() => navigate("Team")}>
          Meet the Development Team →
        </button>

        <small>
          © {new Date().getFullYear()} SchoolHub Lagos. All rights
          reserved.
        </small>
      </footer>
    </div>
  );
}
