import React from "react";

type AdminShellProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function AdminShell({
  title,
  subtitle,
  children,
}: AdminShellProps) {
  return (
    <div className="admin-v2-shell">
      <header className="admin-v2-header">
        <h1>{title}</h1>
        {subtitle && (
          <p className="admin-v2-subtitle">
            {subtitle}
          </p>
        )}
      </header>

      <main>{children}</main>
    </div>
  );
}