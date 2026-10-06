"use client";

import { useEffect, useState, type CSSProperties } from "react";

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

type Project = {
  title: string;
  description: string;
  details: string;
  problem: string;
  fixed: string;
  impact: string;
  tagline?: string;
  image?: string;
  imageAlt?: string;
  tags: string[];
};

const contactLinks = [
  { label: "Email", value: "ejssagpang@gmail.com", href: "mailto:ejssagpang@gmail.com" },
  { label: "Phone", value: "+63 993 763 1538", href: "tel:+639937631538" },
  { label: "Location", value: "Davao City, Philippines", href: "#contact" },
];

const toolGroups: ToolGroup[] = [
  {
    title: "Automation & AI",
    tools: [
      { name: "GoHighLevel", initials: "HL", color: "#20c997" },
      { name: "Zapier", icon: "https://cdn.simpleicons.org/zapier" },
      { name: "Omnisend", initials: "O", color: "#5f46f7" },
      { name: "Google Tags", icon: "https://cdn.simpleicons.org/googletagmanager" },
      { name: "OpenAI", icon: "/openai-logo.svg" },
      { name: "Google Gemini", icon: "https://cdn.simpleicons.org/googlegemini" },
      { name: "Claude", icon: "https://cdn.simpleicons.org/claude" },
      { name: "Relevance AI", initials: "RA", color: "#5b5ff0" },
    ],
  },
  {
    title: "CRM & Operations",
    tools: [
      { name: "Close CRM", initials: "C", color: "#0057ff" },
      { name: "Zoho CRM", icon: "https://cdn.simpleicons.org/zoho" },
      { name: "Microsoft", initials: "MS", color: "#00a4ef" },
    ],
  },
  {
    title: "Communication",
    tools: [
      { name: "Discord", icon: "https://cdn.simpleicons.org/discord" },
      { name: "Microsoft Teams", initials: "T", color: "#6264a7" },
      { name: "Zoom", icon: "https://cdn.simpleicons.org/zoom" },
      { name: "WhatsApp", icon: "https://cdn.simpleicons.org/whatsapp" },
      { name: "Google Workspace", initials: "G", color: "#4285f4" },
      { name: "Slack", icon: "/slack-logo.svg" },
    ],
  },
  {
    title: "Website & Dev",
    tools: [
      { name: "Swipe Pages", initials: "SP", color: "#2f7df6" },
      { name: "Typeform", icon: "https://cdn.simpleicons.org/typeform" },
      { name: "GoDaddy", icon: "https://cdn.simpleicons.org/godaddy" },
      { name: "Wix", icon: "https://cdn.simpleicons.org/wix" },
    ],
  },
  {
    title: "Security",
    tools: [
      { name: "NordPass", initials: "N", color: "#00a3ff" },
      { name: "LastPass", icon: "https://cdn.simpleicons.org/lastpass" },
      { name: "1Password", icon: "https://cdn.simpleicons.org/1password" },
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
    logo: "automation",
    description:
      "Design GoHighLevel workflows, pipelines, onboarding sequences, task routing, and Zapier integrations that remove repetitive manual work.",
  },
  {
    title: "IT Service Management",
    logo: "service",
    description:
      "Keep request, incident, problem, and change records organized while improving documentation, portals, and service delivery visibility.",
  },
  {
    title: "CRM Architecture",
    logo: "crm",
    description:
      "Configure CRM environments around the real business model, then refine automation, data flow, and reporting for daily operations.",
  },
  {
    title: "Systems Administration",
    logo: "systems",
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

const projects: Project[] = [
  {
    title: "Swipe Pages -> Attentive Lead Sync",
    description:
      "Built an automation that captures new Swipe Pages form submissions, subscribes the lead in Attentive, and applies custom attributes so marketing follow-up starts with clean subscriber data.",
    details:
      "A lead-capture workflow connecting Swipe Pages form submissions to Attentive so new contacts move into the right marketing system without manual entry.",
    problem:
      "New form submissions needed to be copied into Attentive by hand, which slowed down follow-up and created a risk of missing custom lead details.",
    fixed:
      "Connected the form trigger to Attentive subscription actions, then mapped custom attributes so every new subscriber arrives with useful context for segmentation.",
    impact:
      "Reduced manual subscriber entry and made new lead records more complete before marketing follow-up begins.",
    image: "/swipe-pages-attentive-lead-sync.png",
    imageAlt:
      "Automation workflow showing Swipe Pages new form submission followed by Attentive subscribe user and custom attributes steps.",
    tags: ["Swipe Pages", "Attentive", "Lead Sync"],
  },
  {
    title: "Instagram #imadethis -> Manychat Auto-Tagging",
    description:
      "Built an automation that detects new tagged Instagram media, filters posts using the #imadethis condition, finds the matching Manychat user, and applies the right tag for follow-up segmentation.",
    details:
      "An Instagram-to-Manychat automation that watches tagged media, checks for campaign-specific conditions, and updates the matching contact for follow-up.",
    problem:
      "Campaign participants using #imadethis had to be reviewed and tagged manually, making audience segmentation slower and less consistent.",
    fixed:
      "Added filtering steps to qualify posts, found the matching Manychat user by name, and applied the correct tag automatically for cleaner follow-up flows.",
    impact:
      "Improved campaign tracking by making participant tagging faster, cleaner, and less dependent on manual review.",
    image: "/instagram-imadethis-manychat-auto-tagging.png",
    imageAlt:
      "Automation workflow showing Instagram tagged media, Zapier filters, Manychat find user by name, and Manychat add tag to user steps.",
    tags: ["Instagram", "Zapier", "Manychat"],
  },
  {
    title: "Google Sheets -> GHL Lead Sync with Team Notification",
    description:
      "Built an automation that watches for new or updated spreadsheet rows, creates or updates the matching lead in GoHighLevel, and sends a Google Chat notification so the team can act quickly.",
    details:
      "A lead-sync system that uses Google Sheets as the intake source, keeps GoHighLevel contacts updated, and alerts the team when action is needed.",
    problem:
      "Lead updates in spreadsheets were disconnected from the CRM, so the team had to check sheets manually and risked acting on outdated records.",
    fixed:
      "Synced new and updated spreadsheet rows into GoHighLevel, then added a Google Chat notification so the team receives timely updates after each change.",
    impact:
      "Kept the CRM and team alerts aligned so lead changes could be acted on quickly without checking spreadsheets repeatedly.",
    image: "/google-sheets-ghl-lead-sync-team-notification.png",
    imageAlt:
      "Automation workflow showing Google Sheets new or updated spreadsheet row, LeadConnector add or update contact, and Google Chat create message steps.",
    tags: ["Google Sheets", "GoHighLevel", "Team Notification"],
  },
  {
    title: "GHL Email Campaign Follow-up & Pipeline Cleanup",
    description:
      "Automated a GoHighLevel follow-up path that sends timed email touches after engagement, waits between steps, and removes the campaign tag once the sequence is complete to keep the pipeline clean.",
    details:
      "A GoHighLevel sequence that handles engagement-based email follow-ups and removes completed campaign tags at the end of the workflow.",
    problem:
      "Contacts who clicked or opened emails needed follow-up, but completed sequences could leave extra tags behind and make pipeline reporting messy.",
    fixed:
      "Built a timed follow-up path with wait steps, multiple email touches, and a final tag-removal step to keep campaign status and pipeline data clean.",
    impact:
      "Created a more reliable follow-up process while keeping campaign tags and pipeline reporting easier to maintain.",
    image: "/ghl-email-followup-pipeline-cleanup.png",
    imageAlt:
      "GoHighLevel workflow showing clicked or opened trigger, first follow-up, wait, second follow-up, wait, third follow-up, and remove tag steps.",
    tags: ["GoHighLevel", "Email Follow-up", "Pipeline Cleanup"],
  },
  {
    title: "Scale Smart Dashboard",
    description:
      "A GoHighLevel dashboard for real-time lead visibility, campaign performance, pipeline health, KPI tracking, and integrated business reporting.",
    details:
      "A CRM reporting dashboard built around pipeline visibility, lead performance, and operational metrics that teams can review quickly.",
    problem:
      "Key CRM and campaign numbers were spread across multiple views, making it hard to spot pipeline movement and performance issues fast.",
    fixed:
      "Organized lead, campaign, pipeline, and KPI views into one dashboard so reporting is easier to scan and decisions can be made with cleaner context.",
    impact:
      "Gave operators a faster way to review sales and campaign health without jumping between disconnected CRM screens.",
    tags: ["Dashboard", "CRM", "Analytics"],
  },
  {
    title: "Onboarding Automation",
    description:
      "A structured onboarding workflow that sends welcome messages, collects client details, schedules calls, and assigns tasks automatically.",
    details:
      "A client onboarding workflow designed to reduce repetitive admin work and give each new client a consistent start.",
    problem:
      "New client handoffs required repeated manual messages, detail collection, scheduling, and task assignment, which could delay kickoff.",
    fixed:
      "Created an automated onboarding sequence for welcome messages, information collection, call scheduling, and task routing so the process stays consistent.",
    impact:
      "Reduced kickoff delays and helped every new client receive the same organized onboarding experience.",
    tags: ["Automation", "Zapier", "Client Ops"],
  },
];

const credentials = [
  {
    title: "Google IT Support",
    issuer: "Google",
    date: "Aug 2023",
    href: "https://www.coursera.org/account/accomplishments/specialization/certificate/3NTLBERKZJZM",
  },
  {
    title: "Penetration Testing Intern",
    issuer: "Google",
    date: "Mar 2022",
    href: "https://www.credential.net/400e40f0-5af3-43c8-8277-081dd7e07ac5",
  },
  {
    title: "Web Application Penetration Testing",
    issuer: "Secuna",
    date: "Dec 2021",
    href: "https://www.udemy.com/certificate/UC-bfd57ece-8b96-4afc-a44e-0a43221d4b5e/",
  },
];

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);
  const [activeImage, setActiveImage] = useState<{
    alt: string;
    src: string;
    title: string;
  } | null>(null);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const nextTheme = savedTheme === "light" ? "light" : "dark";

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  useEffect(() => {
    if (!activeImage && !activeProject) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && activeImage) {
        setActiveImage(null);
      } else if (event.key === "Escape") {
        setActiveProject(null);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeImage, activeProject]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
  }

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
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={theme === "dark"}
          >
            <span className="theme-symbol theme-symbol-moon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M20.25 15.35A8.5 8.5 0 0 1 8.65 3.75 8.75 8.75 0 1 0 20.25 15.35Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </span>
            <span className="theme-symbol theme-symbol-sun" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9ZM12 2.75v2M12 19.25v2M4.75 4.75l1.42 1.42M17.83 17.83l1.42 1.42M2.75 12h2M19.25 12h2M4.75 19.25l1.42-1.42M17.83 6.17l1.42-1.42"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </button>
          <a
            className="nav-cta"
            href="/elijah-sagpang-cv.pdf"
            download="Elijah Sagpang - CV.pdf"
          >
            Download CV
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
              <a
                className="button primary"
                href="https://calendar.app.google/xHq85XixLKvPgzhW9"
                target="_blank"
                rel="noreferrer"
              >
                Book a Call
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
                <img src="/profile-photo.jpg" alt="Portrait of Elijah Jake Sagpang" />
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
                <span className={`service-logo ${service.logo}`} aria-hidden="true" />
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
              <article
                className="project-card"
                key={project.title}
                role="button"
                tabIndex={0}
                onClick={() => setActiveProject(project)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveProject(project);
                  }
                }}
                aria-label={`Open project details for ${project.title}`}
              >
                {project.image ? (
                  <div className="project-image-button" aria-hidden="true">
                    <img src={project.image} alt={project.imageAlt ?? `${project.title} project preview`} />
                  </div>
                ) : null}
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

      <section className="section muted credential-section">
        <div className="container">
          <div className="section-heading centered">
            <h2>Education & Certifications</h2>
            <p>Formal IT training with certifications across support, cybersecurity, and application security.</p>
          </div>
          <div className="credential-grid">
            <article className="credential-panel education-panel">
              <div className="credential-header">
                <span className="credential-icon education-icon" aria-hidden="true" />
                <div>
                  <span>Education</span>
                  <h3>Bachelor&apos;s Degree</h3>
                </div>
              </div>
              <p>Information Technology - Cybersecurity</p>
              <div className="education-meta">
                <div>
                  <span>School</span>
                  <strong>Ateneo de Davao University</strong>
                </div>
                <div>
                  <span>Timeline</span>
                  <strong>Jan 2019 to Apr 2022</strong>
                </div>
              </div>
              <div className="credential-tags" aria-label="Education focus areas">
                <span>Cybersecurity</span>
                <span>IT Operations</span>
                <span>Systems Support</span>
              </div>
            </article>
            <article className="credential-panel certification-panel">
              <div className="credential-header">
                <span className="credential-icon certification-icon" aria-hidden="true" />
                <div>
                  <span>Certifications</span>
                  <h3>Professional Credentials</h3>
                </div>
              </div>
              <div className="certification-list">
                {credentials.map((item) => (
                  <div className="certification-item" key={`${item.issuer}-${item.title}`}>
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.issuer}</span>
                    </div>
                    <div className="certification-action">
                      <time>{item.date}</time>
                      <a
                        className="credential-link"
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View credential for ${item.title}`}
                      >
                        View credential
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
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

      {activeProject ? (
        <div
          className="project-modal-backdrop"
          role="presentation"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`Project details for ${activeProject.title}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="project-modal-close"
              type="button"
              onClick={() => setActiveProject(null)}
              aria-label="Close project details"
            >
              x
            </button>
            <div className="project-modal-media">
              {activeProject.image ? (
                <button
                  className="project-modal-image"
                  type="button"
                  onClick={() =>
                    setActiveImage({
                      alt: activeProject.imageAlt ?? `${activeProject.title} project screenshot`,
                      src: activeProject.image,
                      title: activeProject.title,
                    })
                  }
                  aria-label={`Open full-size image for ${activeProject.title}`}
                >
                  <img
                    src={activeProject.image}
                    alt={activeProject.imageAlt ?? `${activeProject.title} project screenshot`}
                  />
                </button>
              ) : (
                <div className="project-modal-placeholder" aria-hidden="true">
                  <span>{activeProject.title}</span>
                </div>
              )}
            </div>
            <div className="project-modal-body">
              <p className="project-modal-kicker">Featured Project</p>
              <h3>{activeProject.title}</h3>
              {activeProject.tagline ? (
                <p className="project-modal-tagline">{activeProject.tagline}</p>
              ) : null}
              <div className="project-modal-sections">
                <section>
                  <h4>Overview</h4>
                  <p>{activeProject.details}</p>
                </section>
                <section>
                  <h4>Problem</h4>
                  <p>{activeProject.problem}</p>
                </section>
                <section>
                  <h4>Solution</h4>
                  <p>{activeProject.fixed}</p>
                </section>
                <section>
                  <h4>Results & Impact</h4>
                  <p>{activeProject.impact}</p>
                </section>
              </div>
              <section className="project-modal-tools">
                <h4>Tools Used</h4>
                <div className="tag-row project-modal-tags">
                  {activeProject.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      ) : null}

      {activeImage ? (
        <div
          className="image-modal-backdrop"
          role="presentation"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="image-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`Full-size image for ${activeImage.title}`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="image-modal-header">
              <h3>{activeImage.title}</h3>
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                aria-label="Close image preview"
              >
                Close
              </button>
            </div>
            <img src={activeImage.src} alt={activeImage.alt} />
          </div>
        </div>
      ) : null}
    </main>
  );
}
