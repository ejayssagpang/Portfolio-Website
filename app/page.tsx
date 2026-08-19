const stats = [
  { value: "4+", label: "Years in IT operations" },
  { value: "12", label: "Core tools mastered" },
  { value: "5", label: "Recent technical roles" },
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

const services = [
  "IT service management",
  "CRM setup and optimization",
  "Workflow automation",
  "Systems administration",
  "Technical documentation",
  "Security testing support",
];

const experience = [
  {
    company: "Outsourcing and Recruitment Company",
    role: "Information Technology Service Management I",
    period: "Mar 2025 - Apr 2026",
    tags: ["ITSM", "Automation", "Documentation"],
  },
  {
    company: "Living Mulch, LLC",
    role: "IT Virtual Assistant",
    period: "Mar 2025 - Aug 2025",
    tags: ["GoHighLevel", "Zapier", "CRM"],
  },
  {
    company: "Simply Earth",
    role: "System Administrator",
    period: "Apr 2024 - Mar 2025",
    tags: ["Admin", "Integration", "Access"],
  },
  {
    company: "Coredev Solutions, Inc.",
    role: "Jr. Software Implementer",
    period: "Sep 2022 - Apr 2024",
    tags: ["MySQL", "QA", "Deployment"],
  },
  {
    company: "Secuna Technologies, Inc.",
    role: "Web Application Penetration Tester Intern",
    period: "Dec 2021 - Mar 2022",
    tags: ["Kali Linux", "Security", "Reports"],
  },
];

const projects = [
  {
    title: "Scale Smart Dashboard",
    type: "CRM analytics",
    description:
      "A GoHighLevel dashboard giving teams real-time visibility into leads, pipelines, campaigns, KPIs, and integrated performance data.",
    stack: ["GoHighLevel", "KPI Tracking", "Integrations"],
  },
  {
    title: "Onboarding Automation",
    type: "Workflow system",
    description:
      "An automated client onboarding flow that sends welcome messages, collects information, schedules calls, and assigns tasks across tools.",
    stack: ["GoHighLevel", "Zapier", "Automation"],
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Elijah Jake Sagpang home">
          EJS
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">IT Service Manager • Automation Specialist</p>
          <h1>
            Hi, I&apos;m <span>Elijah</span>
          </h1>
          <p className="lead">
            I build reliable technical operations for growing teams, from
            GoHighLevel automations and CRM architecture to systems
            administration, documentation, data migration, and security-minded
            support.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="mailto:ejssagpang@gmail.com">
              Hire Me
            </a>
            <a className="button secondary" href="#projects">
              View Projects
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Elijah profile summary">
          <div className="portrait">
            <span>EJ</span>
          </div>
          <div className="orbit-card card-one">CRM</div>
          <div className="orbit-card card-two">ITSM</div>
          <div className="orbit-card card-three">SEC</div>
        </div>
      </section>

      <section className="stats" aria-label="Portfolio highlights">
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="section about" id="about">
        <div className="section-copy">
          <p className="section-kicker">About Me</p>
          <h2>Technical operator for systems that need to work cleanly.</h2>
        </div>
        <div className="about-panel">
          <p>
            Based in Davao City, Philippines, I help teams turn scattered tools,
            manual handoffs, and unclear technical processes into dependable
            systems. My background combines IT service management, CRM
            automation, implementation support, and web application security.
          </p>
          <div className="service-grid">
            {services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-copy centered">
          <p className="section-kicker">Tech Stack</p>
          <h2>Tools I use to build, connect, and support operations.</h2>
        </div>
        <div className="skill-grid">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-copy centered">
          <p className="section-kicker">Projects</p>
          <h2>Selected automation and operations work.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <p>{project.type}</p>
              <h3>{project.title}</h3>
              <span>{project.description}</span>
              <div>
                {project.stack.map((item) => (
                  <small key={item}>{item}</small>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience" id="experience">
        <div className="section-copy">
          <p className="section-kicker">Experience</p>
          <h2>Recent roles and responsibilities.</h2>
        </div>
        <div className="experience-list">
          {experience.map((job) => (
            <article key={`${job.company}-${job.role}`}>
              <p>{job.period}</p>
              <h3>{job.role}</h3>
              <span>{job.company}</span>
              <div>
                {job.tags.map((tag) => (
                  <small key={tag}>{tag}</small>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section credentials">
        <div>
          <p className="section-kicker">Education</p>
          <h2>Bachelor&apos;s Degree in Information Technology - Cybersecurity</h2>
          <span>Ateneo de Davao University • Jan 2019 - Apr 2022</span>
        </div>
        <div>
          <p className="section-kicker">Certifications</p>
          <ul>
            <li>Google IT Support • Aug 2023</li>
            <li>Google Penetration Testing Intern • Mar 2022</li>
            <li>Secuna Web Application Penetration Testing • Dec 2021</li>
          </ul>
        </div>
      </section>

      <footer className="footer" id="contact">
        <p className="section-kicker">Contact</p>
        <h2>Have a system, workflow, or CRM that needs cleaning up?</h2>
        <div className="contact-actions">
          <a className="button primary" href="mailto:ejssagpang@gmail.com">
            ejssagpang@gmail.com
          </a>
          <a className="button secondary" href="tel:+639937631538">
            +63 993 763 1538
          </a>
          <a className="button secondary" href="https://linkedin.com/in/ejssagpang">
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}
