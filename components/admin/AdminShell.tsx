import Link from "next/link";

const nav = [
  ["Dashboard", "/admin"],
  ["Gallery", "/admin/gallery"],
  ["News", "/admin/news"],
  ["Events", "/admin/events"],
  ["Feedback", "/admin/feedback"],
  ["Legacy Wall", "/admin/legacy-wall"],
  ["Settings", "/admin/settings"],
];

export function AdminShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="admin-cms">
      <aside className="admin-sidebar">
        <div className="admin-brand">CB’S WORLD<br /><span>Foundation Charity</span></div>
        <nav>{nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      </aside>
      <section className="admin-main">
        <header className="admin-topbar"><h1>{title}</h1><p>Manage website content, approvals and updates.</p></header>
        {children}
      </section>
    </main>
  );
}
