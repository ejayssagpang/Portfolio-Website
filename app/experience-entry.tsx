import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  address: string;
  email?: string;
  phone?: { value: string; href: string };
  highlights: { label: string; description: string }[];
};

function Highlights({ items }: { items: Experience["highlights"] }) {
  return (
    <ul className="experience-highlights">
      {items.map((item) => (
        <li key={item.label}>
          <strong>{item.label}:</strong> {item.description}
        </li>
      ))}
    </ul>
  );
}

export default function ExperienceEntry({ job }: { job: Experience }) {
  return (
    <article className="experience-card">
      <div className="experience-meta">
        <p className="experience-date">{job.period}</p>
        <h3>{job.role}</h3>
        <span className="employer-name">{job.company}</span>
        <p className="employer-location">
          <MapPin size={15} aria-hidden="true" />
          {job.location}
        </p>
        {(job.email || job.phone || job.address !== job.location) && (
          <details className="employer-details">
            <summary>
              Employer details <ChevronDown size={15} aria-hidden="true" />
            </summary>
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
          </details>
        )}
      </div>
      <div className="experience-summary">
        <Highlights items={job.highlights.slice(0, 3)} />
        {job.highlights.length > 3 && (
          <details className="responsibility-details">
            <summary>
              <span className="when-closed">More responsibilities</span>
              <span className="when-open">Fewer responsibilities</span>
              <span className="sr-only"> for {job.role}</span>
              <ChevronDown size={16} aria-hidden="true" />
            </summary>
            <Highlights items={job.highlights.slice(3)} />
          </details>
        )}
      </div>
    </article>
  );
}
