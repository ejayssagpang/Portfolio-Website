import type { CSSProperties } from "react";

export type Tool = {
  name: string;
  icon?: string;
  initials?: string;
  color?: string;
  tone?: "monochrome" | "bright" | "muted" | "pale";
};

export default function ToolChip({ tool }: { tool: Tool }) {
  return (
    <span className="tool-chip">
      <span
        className={`tool-icon${tool.tone ? ` logo-${tool.tone}` : ""}`}
        style={{ "--logo-color": tool.color } as CSSProperties}
        aria-hidden="true"
      >
        {tool.icon ? (
          <img src={tool.icon} alt="" width="22" height="22" loading="lazy" />
        ) : tool.initials}
      </span>
      <span className="tool-name">{tool.name}</span>
    </span>
  );
}
