"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import RotatingSpecialties from "./rotating-specialties";
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Award,
  CalendarDays,
  GraduationCap,
  LayoutDashboard,
  Mail,
  MapPin,
  Menu,
  Moon,
  Network,
  Phone,
  Server,
  ShieldCheck,
  Sun,
  Workflow,
  X,
  ZoomIn,
} from "lucide-react";

type Tool = {
  name: string;
  icon?: string;
  initials?: string;
  color?: string;
  tone?: "monochrome" | "bright" | "muted" | "pale";
};

type ToolGroup = {
  title: string;
  tools: Tool[];
};

type Experience = {
  company: string;
  role: string;
  period: string;
  address: string;
  email?: string;
  phone?: { value: string; href: string };
  highlights: { label: string; description: string }[];
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
  {
    label: "Email",
    value: "ejssagpang@gmail.com",
    href: "mailto:ejssagpang@gmail.com",
    icon: Mail,
  },
  { label: "Phone", value: "+63 993 763 1538", href: "tel:+639937631538", icon: Phone },
  { label: "Location", value: "Davao City, Philippines", href: "#contact", icon: MapPin },
];

const toolGroups: ToolGroup[] = [
  {
    title: "Automation & AI",
    tools: [
      { name: "Zapier", icon: "https://cdn.simpleicons.org/zapier" },
      { name: "Make", icon: "/make-logo.png" },
      { name: "n8n", icon: "/n8n-logo.png" },
      { name: "OpenAI", icon: "/openai-logo.svg" },
      { name: "Claude", icon: "https://cdn.simpleicons.org/claude" },
      { name: "Relevance AI", icon: "/relevance-ai-logo.png", tone: "pale" },
    ],
  },
  {
    title: "CRM & Operations",
    tools: [
      { name: "GoHighLevel", icon: "/gohighlevel-logo.png" },
      { name: "Close CRM", icon: "/close-crm-logo.png" },
      { name: "Zoho CRM", icon: "https://cdn.simpleicons.org/zoho", tone: "muted" },
      { name: "HubSpot", icon: "/hubspot-logo.svg", tone: "bright" },
      { name: "Monday.com", icon: "/monday-logo.svg", tone: "bright" },
      { name: "Notion", icon: "/notion-logo.svg", tone: "monochrome" },
      { name: "Omnisend", icon: "/omnisend-logo.png", tone: "bright" },
      { name: "Typeform", icon: "/typeform-logo.png", tone: "monochrome" },
      { name: "Jotform", icon: "/jotform-logo.png" },
    ],
  },
  {
    title: "Communication",
    tools: [
      { name: "Discord", icon: "https://cdn.simpleicons.org/discord" },
      { name: "Microsoft Teams", icon: "/microsoft-teams-logo.png" },
      { name: "Zoom", icon: "https://cdn.simpleicons.org/zoom" },
      { name: "WhatsApp", icon: "https://cdn.simpleicons.org/whatsapp", tone: "bright" },
      { name: "Google Workspace", icon: "/google-workspace-logo.png" },
      { name: "Slack", icon: "/slack-logo.svg" },
    ],
  },
  {
    title: "Website & Dev",
    tools: [
      {
        name: "Google Tags",
        icon: "https://cdn.simpleicons.org/googletagmanager",
      },
      { name: "Swipe Pages", icon: "/swipe-pages-logo.png" },
      { name: "GoDaddy", icon: "https://cdn.simpleicons.org/godaddy", tone: "bright" },
      { name: "Wix", icon: "/wix-logo.png" },
      { name: "Cloudflare", icon: "/cloudflare-logo.png" },
      { name: "Supabase", icon: "/supabase-logo.png" },
    ],
  },
  {
    title: "Security",
    tools: [
      { name: "NordPass", icon: "/nordpass-logo.png", tone: "bright" },
      { name: "LastPass", icon: "https://cdn.simpleicons.org/lastpass" },
      { name: "1Password", icon: "https://cdn.simpleicons.org/1password", tone: "muted" },
    ],
  },
  {
    title: "Technical Stack",
    tools: [
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql", tone: "muted" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript", tone: "bright" },
      { name: "HTML/CSS", icon: "https://cdn.simpleicons.org/html5" },
      { name: "Linux", icon: "https://cdn.simpleicons.org/linux", tone: "bright" },
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

const serviceIcons = {
  automation: Workflow,
  service: ShieldCheck,
  crm: Network,
  systems: Server,
};

const experience: Experience[] = [
  {
    company: "Outsourcing and Recruitment Company",
    role: "Information Technology Service Management I",
    period: "Mar 2025 - Apr 2026",
    address: "Sheridan, Wyoming, USA",
    highlights: [
      {
        label: "Infrastructure",
        description: "Managed IT systems from planning and deployment through ongoing maintenance.",
      },
      {
        label: "Workflow Automation",
        description: "Built GoHighLevel workflows and pipelines to streamline client onboarding and offboarding.",
      },
      {
        label: "Service Delivery",
        description: "Maintained accurate request, incident, problem, and change records to support reliable service.",
      },
      {
        label: "Knowledge Management",
        description: "Built knowledge bases, technical documentation, and customer portals to improve support and transparency.",
      },
      {
        label: "Process Optimization",
        description: "Evaluated systems against best practices and aligned improvements with business goals.",
      },
      {
        label: "Compliance",
        description: "Delivered cost-conscious IT solutions while upholding data security, privacy, and retention requirements.",
      },
    ],
  },
  {
    company: "Living Mulch, LLC",
    role: "IT Virtual Assistant",
    period: "Mar 2025 - Aug 2025",
    address: "1914 Midland Avenue, Syracuse, NY 13205",
    email: "imyourcoo@livingmulch.co",
    phone: { value: "(315) 802 5425", href: "tel:+13158025425" },
    highlights: [
      {
        label: "CRM Architecture",
        description: "Tailored GoHighLevel environments to business models and operational needs.",
      },
      {
        label: "Workflow Engineering",
        description: "Built end-to-end automations to reduce manual work and improve team productivity.",
      },
      {
        label: "Ecosystem Integration",
        description: "Connected GHL with third-party applications through APIs and native integrations.",
      },
      {
        label: "Technical Troubleshooting",
        description: "Resolved complex technical issues to keep sales pipelines and marketing campaigns running reliably.",
      },
      {
        label: "Performance Optimization",
        description: "Audited and refined automations to support conversions, ROI, and scalable growth.",
      },
    ],
  },
  {
    company: "Simply Earth",
    role: "System Administrator",
    period: "Apr 2024 - Mar 2025",
    address: "W4228 Church Rd, Waldo, WI 53093, United States",
    email: "help@simplyearth.com",
    phone: { value: "+1 866-330-8165", href: "tel:+18663308165" },
    highlights: [
      {
        label: "Technical Leadership",
        description: "Guided web development teams through urgent system fixes under tight deadlines.",
      },
      {
        label: "Access Management",
        description: "Centralized administration of credentials and platform permissions across the organization.",
      },
      {
        label: "Systems Integration",
        description: "Deployed connected toolsets to reduce silos and improve cross-functional productivity.",
      },
      {
        label: "Technology Advisory",
        description: "Partnered with the CEO to design and implement custom tech stacks for new project launches.",
      },
      {
        label: "Infrastructure Oversight",
        description: "Maintained the company's technical ecosystem, including CRMs, automation platforms, and middleware.",
      },
    ],
  },
  {
    company: "Coredev Solutions, Inc.",
    role: "Jr. Software Implementer",
    period: "Sep 2022 - Apr 2024",
    address: "11B, Cherry Tree Street, Palm Drive, Buhangin Davao City, Davao Del Sur 8000, Philippines",
    email: "info@coredev.ph",
    phone: { value: "+639985831612", href: "tel:+639985831612" },
    highlights: [
      {
        label: "Systems Deployment",
        description: "Installed and configured enterprise applications to meet operational requirements.",
      },
      {
        label: "Quality Assurance",
        description: "Performed functional testing to validate software performance and reliability before deployment.",
      },
      {
        label: "Database Migration",
        description: "Extracted and migrated complex datasets into MySQL while preserving data integrity and optimizing structure.",
      },
      {
        label: "Technical Support",
        description: "Troubleshot critical system issues and provided advanced user support.",
      },
      {
        label: "Implementation Documentation",
        description: "Authored implementation guides and recommendations to support ongoing system monitoring.",
      },
      {
        label: "Access Governance",
        description: "Administered credentials and permissions using least-privilege access to protect systems.",
      },
      {
        label: "Technology Integration",
        description: "Researched and integrated emerging software to keep the tech stack current and secure.",
      },
    ],
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
    logo: "/google-logo.png",
    date: "Aug 2023",
    href: "https://www.coursera.org/account/accomplishments/specialization/certificate/3NTLBERKZJZM",
  },
  {
    title: "Penetration Testing Intern",
    issuer: "Secuna",
    logo: "/secuna-logo.svg",
    date: "Mar 2022",
    href: "https://www.credential.net/400e40f0-5af3-43c8-8277-081dd7e07ac5",
  },
  {
    title: "Web Application Penetration Testing",
    issuer: "Udemy",
    logo: "/udemy-logo.svg",
    date: "Dec 2021",
    href: "https://www.udemy.com/certificate/UC-bfd57ece-8b96-4afc-a44e-0a43221d4b5e/",
  },
];

const navigationItems = [
  { id: "skills", label: "Tools" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

type NavigationSection = (typeof navigationItems)[number]["id"];

export default function Home() {
  const pageRoot = useRef<HTMLElement>(null);
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] =
    useState<NavigationSection | null>(null);
  const projectDialog = useRef<HTMLDivElement>(null);
  const imageDialog = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<
    (typeof projects)[number] | null
  >(null);
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
    const root = pageRoot.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!root || reducedMotion.matches || !window.IntersectionObserver) return;

    const selector =
      ".section-heading, .tool-group h3, .tool-chip, .modern-card, .experience-card, .project-card, .education-panel, .certification-item, .contact-grid > div:first-child, .contact-card";
    const elements = Array.from(root.querySelectorAll<HTMLElement>(selector));
    const reveal = (element: HTMLElement) => {
      element.dataset.reveal = "visible";
      observer.unobserve(element);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) reveal(entry.target as HTMLElement);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
    );

    for (const element of elements) {
      const siblings = Array.from(element.parentElement?.children ?? []).filter(
        (sibling) => sibling.matches(selector),
      );
      element.style.setProperty(
        "--reveal-delay",
        `${Math.min(siblings.indexOf(element) * 75, 375)}ms`,
      );
      element.classList.add("scroll-reveal");
      element.dataset.reveal = "pending";
      observer.observe(element);
    }

    function revealFocused(event: FocusEvent) {
      if (!(event.target instanceof Element)) return;
      const element = event.target.closest<HTMLElement>(".scroll-reveal");
      if (element) reveal(element);
    }
    function honorReducedMotion() {
      if (!reducedMotion.matches) return;
      elements.forEach(reveal);
      observer.disconnect();
    }
    root.addEventListener("focusin", revealFocused);
    reducedMotion.addEventListener("change", honorReducedMotion);
    return () => {
      observer.disconnect();
      root.removeEventListener("focusin", revealFocused);
      reducedMotion.removeEventListener("change", honorReducedMotion);
      for (const element of elements) {
        element.classList.remove("scroll-reveal");
        delete element.dataset.reveal;
        element.style.removeProperty("--reveal-delay");
      }
    };
  }, []);

  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);
    let frame: number | null = null;

    function updateActiveSection() {
      frame = null;
      const activationLine =
        (document.querySelector(".site-header")?.getBoundingClientRect()
          .bottom ?? 80) + 32;
      let nextSection: NavigationSection | null = null;
      let nearestTop = -Infinity;

      for (const section of sections) {
        const top = section.getBoundingClientRect().top;
        if (top <= activationLine && top >= nearestTop) {
          nearestTop = top;
          nextSection = section.id as NavigationSection;
        }
      }

      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2
      ) {
        nextSection = "contact";
      }
      setActiveSection(nextSection);
    }

    function scheduleUpdate() {
      if (frame === null)
        frame = window.requestAnimationFrame(updateActiveSection);
    }

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);
    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, []);

  useEffect(() => {
    if (!activeImage && !activeProject) {
      return;
    }

    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const dialog = activeImage ? imageDialog.current : projectDialog.current;
    document.body.style.overflow = "hidden";
    dialog?.focus();
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (activeImage) setActiveImage(null);
        else setActiveProject(null);
      }
      if (event.key === "Tab" && dialog) {
        const elements = Array.from(
          dialog.querySelectorAll<HTMLElement>(
            'button, a[href], [tabindex="0"]',
          ),
        );
        const first = elements[0];
        const last = elements[elements.length - 1];
        if (
          event.shiftKey &&
          (document.activeElement === first ||
            document.activeElement === dialog)
        ) {
          event.preventDefault();
          last?.focus();
        } else if (
          !event.shiftKey &&
          (document.activeElement === last || document.activeElement === dialog)
        ) {
          event.preventDefault();
          first?.focus();
        }
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [activeImage, activeProject]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
  }

  return (
    <main ref={pageRoot}>
      <a className="skip-link" href="#home">
        Skip to content
      </a>

      <header className="site-header">
        <nav className="nav" aria-label="Primary navigation">
          <a
            className="logo"
            href="#home"
            aria-label="Elijah Jake Sagpang home"
          >
            <span className="logo-mark" aria-hidden="true">
              <img className="brand-logo-dark" src="/brand-logo.png?v=3" alt="" width="38" height="38" />
              <img className="brand-logo-light" src="/brand-logo-light.png?v=3" alt="" width="38" height="38" />
            </span>
            <span>Elijah Sagpang</span>
          </a>
          <div
            className={`nav-links ${menuOpen ? "is-open" : ""}`}
            id="nav-links"
            onClick={() => setMenuOpen(false)}
          >
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={
                  activeSection === item.id ? "location" : undefined
                }
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </a>
            ))}
            <a
              className="mobile-cv"
              href="/elijah-sagpang-cv.pdf"
              download="Elijah Sagpang - CV.pdf"
            >
              <ArrowDownToLine size={16} aria-hidden="true" /> Download CV
            </a>
          </div>
          <div className="nav-actions">
            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              aria-pressed={theme === "dark"}
              title={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? (
                <Sun size={19} aria-hidden="true" />
              ) : (
                <Moon size={19} aria-hidden="true" />
              )}
            </button>
            <a
              className="nav-cta"
              href="/elijah-sagpang-cv.pdf"
              download="Elijah Sagpang - CV.pdf"
            >
              <ArrowDownToLine size={16} aria-hidden="true" /> Download CV
            </a>
            <button
              className="menu-toggle"
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="nav-links"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              title={menuOpen ? "Close navigation" : "Open navigation"}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-background">
          <img
            src="/elijah-portrait.png"
            alt="Portrait of Elijah Jake Sagpang"
            fetchPriority="high"
          />
        </div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>
              <span className="hero-name-line">Elijah Jake</span>
              <br />
              <span className="hero-name-line hero-name-accent">Sagpang.</span>
            </h1>
            <RotatingSpecialties />
            <p className="hero-role">
              IT Service Manager & Automation Specialist
            </p>
            <p className="lead">
              I build cleaner systems for growing teams. From CRM workflows to
              IT operations, I turn everyday complexity into processes that
              work.
            </p>
            <div className="hero-actions">
              <a
                className="button primary"
                href="https://calendar.app.google/xHq85XixLKvPgzhW9"
                target="_blank"
                rel="noreferrer"
              >
                Book a Call <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className="button secondary" href="#projects">
                View Projects <ArrowDown size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="quick-contact" aria-label="Quick contact details">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.label} href={item.href} aria-label={`${item.label}: ${item.value}`}>
                    <Icon size={16} aria-hidden="true" />
                    <span>{item.value}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="tools-section muted" id="skills">
        <div className="container">
          <div className="section-heading centered">
            <p className="section-kicker">The toolkit</p>
            <h2>Tools & Technologies</h2>
            <p>
              Platforms and technologies I use to build, automate, and support
              operations.
            </p>
          </div>
          <div className="tool-groups">
            {toolGroups.map((group) => (
              <article className="tool-group" key={group.title}>
                <h3>{group.title}</h3>
                <div>
                  {group.tools.map((tool) => (
                    <span className="tool-chip" key={tool.name}>
                      <span
                        className={`tool-icon${tool.tone ? ` logo-${tool.tone}` : ""}`}
                        style={{ "--logo-color": tool.color } as CSSProperties}
                        aria-hidden="true"
                      >
                        {tool.icon ? (
                          <img
                            src={tool.icon}
                            alt=""
                            width="20"
                            height="20"
                            loading="lazy"
                          />
                        ) : (
                          tool.initials
                        )}
                      </span>
                      <span className="tool-name">{tool.name}</span>
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
            <p className="section-kicker">01 / Expertise</p>
            <h2>Services</h2>
            <p>
              Focused technical support for teams that need less friction and
              better visibility.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => {
              const Icon =
                serviceIcons[service.logo as keyof typeof serviceIcons];
              return (
                <article className="modern-card" key={service.title}>
                  <div className="service-topline">
                    <span
                      className={`service-logo ${service.logo}`}
                      aria-hidden="true"
                    >
                      <Icon size={25} strokeWidth={1.6} />
                    </span>
                    <span className="service-number">0{index + 1}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section muted" id="experience">
        <div className="container">
          <div className="section-heading centered">
            <p className="section-kicker">02 / Career</p>
            <h2>Experience</h2>
            <p>
              Recent roles across IT operations, automation, administration,
              implementation, and security.
            </p>
          </div>
          <div className="experience-list">
            {experience.map((job) => (
              <article
                className="experience-card"
                key={`${job.company}-${job.role}`}
              >
                <div>
                  <p>{job.period}</p>
                  <h3>{job.role}</h3>
                  <span>{job.company}</span>
                  <address className="employer-contact" aria-label={`${job.company} contact details`}>
                    <div>
                      <MapPin size={16} aria-hidden="true" />
                      <span>{job.address}</span>
                    </div>
                    {job.email && (
                      <a href={`mailto:${job.email}`} aria-label={`${job.company} email: ${job.email}`}>
                        <Mail size={16} aria-hidden="true" />
                        <span>{job.email}</span>
                      </a>
                    )}
                    {job.phone && (
                      <a href={job.phone.href} aria-label={`${job.company} phone: ${job.phone.value}`}>
                        <Phone size={16} aria-hidden="true" />
                        <span>{job.phone.value}</span>
                      </a>
                    )}
                  </address>
                </div>
                <ul className="experience-highlights">
                  {job.highlights.map((highlight) => (
                    <li key={highlight.label}>
                      <strong>{highlight.label}:</strong> {highlight.description}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <div className="section-heading centered">
            <p className="section-kicker">03 / Selected work</p>
            <h2>Featured Projects</h2>
            <p>
              Practical automation work built around business operations and
              measurable workflows.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
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
                    <img
                      src={project.image}
                      alt={
                        project.imageAlt ?? `${project.title} project preview`
                      }
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="project-illustration" aria-hidden="true">
                    {index === 4 ? (
                      <LayoutDashboard size={46} strokeWidth={1.2} />
                    ) : (
                      <Workflow size={46} strokeWidth={1.2} />
                    )}
                    <span>
                      {index === 4 ? "CRM & Analytics" : "Client Operations"}
                    </span>
                  </div>
                )}
                <div className="project-topline">
                  <span>Case Study / 0{index + 1}</span>
                  <ArrowUpRight size={18} aria-hidden="true" />
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
            <p className="section-kicker">04 / Foundation</p>
            <h2>Education & Certifications</h2>
            <p>
              Formal IT training with certifications across support,
              cybersecurity, and application security.
            </p>
          </div>
          <div className="credential-grid">
            <article className="credential-panel education-panel">
              <div className="credential-header">
                <span
                  className="credential-icon education-icon"
                  aria-hidden="true"
                >
                  <GraduationCap size={25} strokeWidth={1.6} />
                </span>
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
              <div
                className="credential-tags"
                aria-label="Education focus areas"
              >
                <span>Cybersecurity</span>
                <span>IT Operations</span>
                <span>Systems Support</span>
              </div>
            </article>
            <article className="credential-panel certification-panel">
              <div className="credential-header">
                <span
                  className="credential-icon certification-icon"
                  aria-hidden="true"
                >
                  <Award size={25} strokeWidth={1.6} />
                </span>
                <div>
                  <span>Certifications</span>
                  <h3>Professional Credentials</h3>
                </div>
              </div>
              <div className="certification-list">
                {credentials.map((item) => (
                  <div
                    className="certification-item"
                    key={`${item.issuer}-${item.title}`}
                  >
                    <div className="certification-summary">
                      <span
                        className={`certification-logo${item.issuer === "Secuna" ? " secuna" : ""}`}
                        aria-hidden="true"
                      >
                        <img src={item.logo} alt="" width="32" height="32" loading="lazy" />
                      </span>
                      <div className="certification-text">
                        <strong>{item.title}</strong>
                        <span>{item.issuer}</span>
                      </div>
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
                        View credential{" "}
                        <ArrowUpRight size={14} aria-hidden="true" />
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
            <p className="section-kicker">05 / Let&apos;s connect</p>
            <h2>
              Let&apos;s make your
              <br />
              systems work better.
            </h2>
            <p>
              Ready to clean up a workflow, improve a CRM, or make technical
              operations easier to manage? Let&apos;s talk about what your team
              needs next.
            </p>
            <a
              className="button primary"
              href="https://calendar.app.google/xHq85XixLKvPgzhW9"
              target="_blank"
              rel="noreferrer"
            >
              <CalendarDays size={18} aria-hidden="true" /> Book a Call{" "}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="contact-cards">
            {contactLinks.map((item) => (
              <a key={item.label} href={item.href} className="contact-card">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            ))}
            <a
              className="contact-card"
              href="https://linkedin.com/in/ejssagpang"
            >
              <span>LinkedIn</span>
              <strong>linkedin.com/in/ejssagpang</strong>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <strong>Elijah Jake Sagpang</strong>
          <p>IT Service Manager & Automation Specialist</p>
          <a href="#home">
            Back to top <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </footer>

      {activeProject ? (
        <div
          className="project-modal-backdrop"
          role="presentation"
          onClick={() => setActiveProject(null)}
          aria-hidden={activeImage ? true : undefined}
        >
          <div
            className="project-modal"
            ref={projectDialog}
            tabIndex={-1}
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
              <X size={20} aria-hidden="true" />
            </button>
            <div className="project-modal-media">
              {activeProject.image ? (
                <button
                  className="project-modal-image"
                  type="button"
                  onClick={() => {
                    if (!activeProject.image) return;
                    setActiveImage({
                      alt:
                        activeProject.imageAlt ??
                        `${activeProject.title} project screenshot`,
                      src: activeProject.image,
                      title: activeProject.title,
                    });
                  }}
                  aria-label={`Open full-size image for ${activeProject.title}`}
                >
                  <img
                    src={activeProject.image}
                    alt={
                      activeProject.imageAlt ??
                      `${activeProject.title} project screenshot`
                    }
                  />
                  <span className="image-zoom">
                    <ZoomIn size={17} aria-hidden="true" /> View full image
                  </span>
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
            ref={imageDialog}
            tabIndex={-1}
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
                title="Close image preview"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <img src={activeImage.src} alt={activeImage.alt} />
          </div>
        </div>
      ) : null}
    </main>
  );
}
