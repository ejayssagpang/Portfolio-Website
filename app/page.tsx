import type { CSSProperties } from "react";

type Tool = {
  name: string;
  icon?: string;
  initials?: string;
  color?: string;
};

type ToolGroup = {
  title: string;
  tools: Tool[];
};

const contactLinks = [
  { label: "Email", value: "ejssagpang@gmail.com", href: "mailto:ejssagpang@gmail.com" },
  { label: "Phone", value: "+63 993 763 1538", href: "tel:+639937631538" },
  { label: "Location", value: "Davao City, Philippines", href: "#contact" },
];

const toolGroups: ToolGroup[] = [
  {
    title: "Automation Platforms",
    tools: [
      { name: "GoHighLevel", initials: "HL", color: "#20c997" },
      { name: "Zapier", icon: "https://cdn.simpleicons.org/zapier" },
      { name: "Omnisend", initials: "O", color: "#5f46f7" },
      { name: "Google Tags", icon: "https://cdn.simpleicons.org/googletagmanager" },
    ],
  },
  {
    title: "CRM & Operations",
    tools: [
      { name: "Close CRM", initials: "C", color: "#0057ff" },
      { name: "Zoho CRM", icon: "https://cdn.simpleicons.org/zoho" },
      { name: "Google Workspace", icon: "https://cdn.simpleicons.org/google" },
      { name: "Microsoft", initials: "MS", color: "#00a4ef" },
    ],
  },
  {
    title: "Technical Stack",
    tools: [
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
      { name: "HTML/CSS", icon: "https://cdn.simpleicons.org/html5" },
      { name: "Linux", icon: "https://cdn.simpleicons.org/linux" },
    ],
  },
];

const services = [
  {
    title: "Workflow Automation",
    description:
      "Design GoHighLevel workflows, pipelines, onboarding sequences, task routing, and Zapier integrations that remove repetitive manual work.",
  },
  {
    title: "IT Service Management",
    description:
      "Keep request, incident, problem, and change records organized while improving documentation, portals, and service delivery visibility.",
  },
  {
    title: "CRM Architecture",
    description:
      "Configure CRM environments around the real business model, then refine automation, data flow, and reporting for daily operations.",
  },
  {
    title: "Systems Administration",
    description:
      "Manage access, credentials, integrations, technical support, and system reliability with a security-aware operational mindset.",
  },
];

const experience = [
  {
    company: "Outsourcing and Recruitment Company",
    role: "Information Technology Service Management I",
    period: "Mar 2025 - Apr 2026",
    description:
      "Managed infrastructure lifecycle, GHL workflows, service records, technical documentation, portals, process improvements, and compliance-aware solutions.",
  },
  {
    company: "Living Mulch, LLC",
    role: "IT Virtual Assistant",
    period: "Mar 2025 - Aug 2025",
    description:
      "Configured GoHighLevel environments, built automations, connected third-party tools, troubleshot campaigns, and optimized pipeline performance.",
  },
  {
    company: "Simply Earth",
    role: "System Administrator",
    period: "Apr 2024 - Mar 2025",
    description:
      "Led technical support, access management, systems integration, project launch tech stacks, and CRM automation platform maintenance.",
  },
  {
    company: "Coredev Solutions, Inc.",
    role: "Jr. Software Implementer",
    period: "Sep 2022 - Apr 2024",
    description:
      "Installed enterprise software, tested systems, migrated MySQL datasets, documented implementations, and managed least-privilege access.",
  },
];

const projects = [
  {
    title: "Scale Smart Dashboard",
    description:
      "A GoHighLevel dashboard for real-time lead visibility, campaign performance, pipeline health, KPI tracking, and integrated business reporting.",
    tags: ["Dashboard", "CRM", "Analytics"],
  },
  {
    title: "Onboarding Automation",
    description:
      "A structured onboarding workflow that sends welcome messages, collects client details, schedules calls, and assigns tasks automatically.",
    tags: ["Automation", "Zapier", "Client Ops"],
  },
];

const credentials = [
  "Google IT Support - Aug 2023",
  "Google Penetration Testing Intern - Mar 2022",
  "Secuna Web Application Penetration Testing - Dec 2021",
];

export default function Home() {
  return (
    <main>
      <div className="scroll-line" aria-hidden="true" />

      <header className="site-header">
        <nav className="nav" aria-label="Primary navigation">
          <a className="logo" href="#home" aria-label="Elijah Jake Sagpang home">
            Elijah Sagpang
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="nav-cta" href="#contact">
            Get In Touch
          </a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">IT Service Manager & Automation Specialist</p>
            <h1>Building cleaner systems for growing teams.</h1>
            <p className="lead">
              I help businesses streamline operations through GoHighLevel
              automation, CRM setup, IT service management, systems
              administration, implementation support, and security-minded
              troubleshooting.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="mailto:ejssagpang@gmail.com">
                Hire Me
              </a>
              <a className="button secondary" href="#projects">
                View My Projects
              </a>
            </div>
            <div className="quick-contact" aria-label="Quick contact details">
              {contactLinks.map((item) => (
                <a key={item.label} href={item.href}>
                  <strong>{item.label}</strong>
                  <span>{item.value}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="hero-photo reveal" aria-label="Profile visual">
            <div className="portrait-wrap">
              <div className="portrait">
                <span>EJ</span>
              </div>
            </div>
            <div className="floating-note note-one">GHL</div>
            <div className="floating-note note-two">CRM</div>
            <div className="floating-note note-three">ITSM</div>
          </div>
        </div>
      </section>

      <section className="tools-section" id="skills">
        <div className="container">
          <div className="section-heading centered">
            <h2>Tools & Technologies</h2>
            <p>Platforms and technologies I use to build, automate, and support operations.</p>
          </div>
          <div className="tool-groups">
            {toolGroups.map((group) => (
              <article className="tool-group" key={group.title}>
                <h3>{group.title}</h3>
                <div>
                  {group.tools.map((tool) => (
                    <span className="tool-chip" key={tool.name}>
                      <span
                        className="tool-icon"
                        style={{ "--logo-color": tool.color } as CSSProperties}
                        aria-hidden="true"
                      >
                        {tool.icon ? (
                          <img src={tool.icon} alt="" width="20" height="20" />
                        ) : (
                          tool.initials
                        )}
                      </span>
                      {tool.name}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading centered">
            <h2>Services</h2>
            <p>Focused technical support for teams that need less friction and better visibility.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="modern-card" key={service.title}>
                <span aria-hidden="true" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted" id="experience">
        <div className="container">
          <div className="section-heading centered">
            <h2>Experience</h2>
            <p>Recent roles across IT operations, automation, administration, implementation, and security.</p>
          </div>
          <div className="experience-list">
            {experience.map((job) => (
              <article className="experience-card" key={`${job.company}-${job.role}`}>
                <div>
                  <p>{job.period}</p>
                  <h3>{job.role}</h3>
                  <span>{job.company}</span>
                </div>
                <p>{job.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <div className="section-heading centered">
            <h2>Projects</h2>
            <p>Practical automation work built around business operations and measurable workflows.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-topline">
                  <span>Featured Project</span>
                  <small>Operations</small>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container credential-grid">
          <article>
            <h2>Education</h2>
            <p>Bachelor&apos;s Degree in Information Technology - Cybersecurity</p>
            <span>Ateneo de Davao University - Jan 2019 to Apr 2022</span>
          </article>
          <article>
            <h2>Certifications</h2>
            <ul>
              {credentials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container contact-grid">
          <div>
            <h2>Get In Touch</h2>
            <p>
              Ready to clean up a workflow, improve a CRM, or make technical
              operations easier to manage? Let&apos;s talk about what your team
              needs next.
            </p>
          </div>
          <div className="contact-cards">
            {contactLinks.map((item) => (
              <a key={item.label} href={item.href} className="contact-card">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            ))}
            <a className="contact-card" href="https://linkedin.com/in/ejssagpang">
              <span>LinkedIn</span>
              <strong>linkedin.com/in/ejssagpang</strong>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <strong>Elijah Jake Sagpang</strong>
          <p>IT Service Manager & Automation Specialist</p>
        </div>
      </footer>
    </main>
  );
}
