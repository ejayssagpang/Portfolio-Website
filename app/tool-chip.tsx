import type { CSSProperties } from "react";

export type Tool = {
  name: string;
  icon?: string;
  initials?: string;
  color?: string;
  tone?: "monochrome" | "bright" | "muted" | "pale";
};

export default function ToolChip({ tool, caption }: { tool: Tool; caption?: string }) {
  return (
    <span className={`tool-chip${caption ? " core-tool" : ""}`}>
      <span
        className={`tool-icon${tool.tone ? ` logo-${tool.tone}` : ""}`}
        style={{ "--logo-color": tool.color } as CSSProperties}
        aria-hidden="true"
      >
        {tool.icon ? (
          <img src={tool.icon} alt="" width="22" height="22" loading="lazy" />
        ) : tool.initials}
      </span>
      <span className="tool-copy">
        <span className="tool-name">{tool.name}</span>
        {caption && <small>{caption}</small>}
      </span>
    </span>
  );
}
