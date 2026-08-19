const highlights = [
  "IT service management",
  "Workflow automation",
  "CRM architecture",
  "Cybersecurity foundation",
];

const experience = [
  {
    company: "Outsourcing and Recruitment Company",
    location: "Sheridan, WY",
    role: "Information Technology Service Management I",
    period: "Mar 2025 - Apr 2026",
    summary:
      "Managed IT infrastructure, service records, automation workflows, knowledge bases, and operational improvements aligned with security and business goals.",
  },
  {
    company: "Living Mulch, LLC",
    location: "Syracuse, NY",
    role: "IT Virtual Assistant",
    period: "Mar 2025 - Aug 2025",
    summary:
      "Configured GoHighLevel environments, engineered onboarding automations, integrated third-party tools, and optimized campaigns for scalable operations.",
  },
  {
    company: "Simply Earth",
    location: "Waldo, WI",
    role: "System Administrator",
    period: "Apr 2024 - Mar 2025",
    summary:
      "Led technical support, access management, systems integration, and custom tech-stack planning for launches and ongoing operations.",
  },
  {
    company: "Coredev Solutions, Inc.",
    location: "Davao City, Philippines",
    role: "Jr. Software Implementer",
    period: "Sep 2022 - Apr 2024",
    summary:
      "Deployed enterprise software, tested implementations, migrated MySQL data, documented systems, and supported secure user access.",
  },
  {
    company: "Secuna Technologies, Inc.",
    location: "Taguig, Philippines",
    role: "Web Application Penetration Tester Intern",
    period: "Dec 2021 - Mar 2022",
    summary:
      "Performed manual and automated web security testing, vulnerability analysis, exploitation validation, and remediation reporting.",
  },
];

const projects = [
  {
    title: "Scale Smart Dashboard",
    client: "Living Mulch, LLC",
    description:
      "Built a GoHighLevel dashboard for lead visibility, pipeline tracking, campaign performance, KPI widgets, and integrated reporting.",
  },
  {
    title: "Onboarding Automation",
    client: "Living Mulch, LLC",
    description:
      "Created an automated onboarding workflow using GoHighLevel and Zapier to collect client information, send welcome communications, schedule calls, and assign tasks.",
  },
];

const skills = [
  "GoHighLevel",
  "Zapier",
  "MySQL",
  "Python",
  "JavaScript",
  "HTML/CSS",
  "Linux",
  "Google Workspace",
  "Close CRM",
  "Zoho CRM",
  "Omnisend",
  "Google Tags",
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Elijah Jake Sagpang home">
            EJS
          </a>
          <div className="nav-links">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Davao City, Philippines</p>
            <h1>Elijah Jake Sagpang</h1>
            <p className="lead">
              Strategic IT Service Manager and automation specialist building
              reliable systems, cleaner workflows, and scalable technical
              operations for growing teams.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="mailto:ejssagpang@gmail.com">
                Email me
              </a>
              <a className="button secondary" href="https://linkedin.com/in/ejssagpang">
                LinkedIn
              </a>
            </div>
          </div>

          <aside className="profile-panel" aria-label="Professional highlights">
            <div>
              <span className="panel-label">Focus</span>
              <h2>IT operations that scale without extra noise.</h2>
            </div>
            <ul>
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section intro">
        <div>
          <p className="section-kicker">Profile</p>
          <h2>Technical operator with a security-minded backbone.</h2>
        </div>
        <p>
          I help teams turn scattered tools and manual processes into dependable
          systems. My work spans ITSM, system administration, CRM automation,
          implementation support, data migration, documentation, and web
          application security testing.
        </p>
      </section>

      <section className="section" id="experience">
        <div className="section-heading">
          <p className="section-kicker">Experience</p>
          <h2>Recent roles</h2>
        </div>
        <div className="timeline">
          {experience.map((job) => (
            <article className="timeline-item" key={`${job.company}-${job.role}`}>
              <div>
                <p className="period">{job.period}</p>
                <h3>{job.role}</h3>
                <p className="company">
                  {job.company} <span>{job.location}</span>
                </p>
              </div>
              <p>{job.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="section-heading">
          <p className="section-kicker">Projects</p>
          <h2>Selected work</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <p>{project.client}</p>
              <h3>{project.title}</h3>
              <span>{project.description}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills">
        <div className="section-heading">
          <p className="section-kicker">Skills</p>
          <h2>Tools and strengths</h2>
        </div>
        <div className="skill-list">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section credentials">
        <div>
          <p className="section-kicker">Education</p>
          <h2>Bachelor&apos;s Degree in Information Technology - Cybersecurity</h2>
          <p>Ateneo de Davao University, Jan 2019 - Apr 2022</p>
        </div>
        <div>
          <p className="section-kicker">Certifications</p>
          <ul>
            <li>Google IT Support, Aug 2023</li>
            <li>Google Penetration Testing Intern, Mar 2022</li>
            <li>Secuna Web Application Penetration Testing, Dec 2021</li>
          </ul>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>Let&apos;s build better systems.</h2>
        </div>
        <div className="contact-links">
          <a href="mailto:ejssagpang@gmail.com">ejssagpang@gmail.com</a>
          <a href="tel:+639937631538">+63 993 763 1538</a>
          <a href="https://linkedin.com/in/ejssagpang">linkedin.com/in/ejssagpang</a>
        </div>
      </footer>
    </main>
  );
}
