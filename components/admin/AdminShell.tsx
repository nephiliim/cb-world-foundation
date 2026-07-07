import Link from "next/link";

const adminLinks = [
  { label: "Dashboard", href: "/admin/dashboard" },
  { label: "Gallery", href: "/admin/gallery" },
  { label: "News", href: "/admin/news" },
  { label: "Events", href: "/admin/events" },
  { label: "Feedback", href: "/admin/feedback" },
  { label: "Legacy Wall", href: "/admin/legacy-wall" },
  { label: "Settings", href: "/admin/settings" },
];

export function AdminShell({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <main className="admin-v2">
      <aside className="admin-v2-sidebar">
        <div className="admin-v2-brand">CB’S WORLD<br /><span>Admin CMS</span></div>
        <nav>
          {adminLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>
      </aside>
      <section className="admin-v2-content">
        <header className="admin-v2-header">
          <div>
            <p className="admin-v2-kicker">Foundation management</p>
            <h1>{title}</h1>
            {subtitle ? <p>{subtitle}</p> : null}
          </div>
        </header>
        {children}
      </section>
    </main>
  );
}
