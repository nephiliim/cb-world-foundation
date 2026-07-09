import Link from "next/link";

type Stat = {
  label: string;
  value: number | string;
  icon: string;
  href: string;
};

export function CommandStats({ stats }: { stats: Stat[] }) {
  return (
    <div className="command-grid">
      {stats.map((stat) => (
        <Link className="command-stat-card" href={stat.href} key={stat.label}>
          <span className="command-stat-icon">{stat.icon}</span>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </Link>
      ))}
    </div>
  );
}

export function QuickActions() {
  const actions = [
    ["➕", "New Event", "/admin/events"],
    ["📸", "Upload Media", "/admin/gallery"],
    ["📰", "Publish News", "/admin/news"],
    ["📍", "Add Bleed Kit", "/admin/bleed-kits"],
    ["❤️", "Legacy Wall", "/admin/legacy-wall"],
    ["💬", "Feedback", "/admin/feedback"],
  ];

  return (
    <div className="command-actions">
      {actions.map(([icon, label, href]) => (
        <Link className="command-action" href={href} key={label}>
          <span>{icon}</span>
          <strong>{label}</strong>
        </Link>
      ))}
    </div>
  );
}

export function CommandPanel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="command-panel">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function EmptyState({ text }: { text: string }) {
  return <p className="command-empty">{text}</p>;
}
