import type { ProjectStatus } from "@/data/projects";

const statusStyles: Record<ProjectStatus, { color: string; dot: string }> = {
  Completed: { color: "text-success border-success/40 bg-success/10", dot: "bg-success" },
  Ongoing: { color: "text-warning border-warning/40 bg-warning/10", dot: "bg-warning" },
  Research: { color: "text-accent border-accent/40 bg-accent/10", dot: "bg-accent" },
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const styles = statusStyles[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded border font-mono text-xs tracking-widest ${styles.color}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${styles.dot}`} aria-hidden="true" />
      {status.toUpperCase()}
    </span>
  );
}
