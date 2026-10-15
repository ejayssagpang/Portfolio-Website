import { ArrowRight, type LucideIcon } from "lucide-react";

export type ProjectStep = { label: string; detail: string; icon: LucideIcon };

export default function ProjectPreview({ label, steps }: { label: string; steps: ProjectStep[] }) {
  return (
    <div className="project-preview" aria-label={`${label}: ${steps.map((step) => step.label).join(" to ")}`}>
      <div className="preview-heading">
        <span>{label}</span>
        <span>{steps.length} stages</span>
      </div>
      <ol className="preview-flow">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <li key={step.label}>
              <span className="preview-step-icon"><Icon size={22} strokeWidth={1.6} aria-hidden="true" /></span>
              <strong>{step.label}</strong>
              <small>{step.detail}</small>
              {index < steps.length - 1 && <ArrowRight className="preview-arrow" size={15} aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
