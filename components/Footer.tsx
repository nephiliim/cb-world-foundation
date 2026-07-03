import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <strong>{siteConfig.name}</strong>
          <p>{siteConfig.location} · {siteConfig.email}</p>
        </div>
        <div className="nav-links">
          {navLinks.slice(1).map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
