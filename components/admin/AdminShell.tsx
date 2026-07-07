import Link from "next/link";
import React from "react";

type AdminShellProps = { title: string; subtitle?: string; children: React.ReactNode };

const adminLinks = [
  ["Dashboard", "/admin/dashboard"],
  ["Gallery", "/admin/gallery"],
  ["News", "/admin/news"],
  ["Events", "/admin/events"],
  ["Feedback", "/admin/feedback"],
  ["Legacy Wall", "/admin/legacy-wall"],
  ["Settings", "/admin/settings"],
];

export function AdminShell({ title, subtitle, children }: AdminShellProps) {
  return (
    <div className="admin-cms-shell">
      <aside className="admin-cms-sidebar">
        <strong>CB’S WORLD Admin</strong>
        <nav>
          {adminLinks.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
      </aside>
      <main className="admin-cms-main">
        <header className="admin-cms-header">
          <div>
            <h1>{title}</h1>
            {subtitle && <p>{subtitle}</p>}
          </div>
          <Link className="admin-cms-view-site" href="/">View site</Link>
        </header>
        {children}
      </main>
    </div>
  );
}
