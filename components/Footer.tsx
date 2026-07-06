import Link from "next/link";
import { navItems, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <div className="footer-brand">CB</div>
        <h2>{siteConfig.name}</h2>
        <p>{siteConfig.description}</p>
      </div>
      <div className="footer-links">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>{item.label}</Link>
        ))}
      </div>
      <p className="footer-note">Built to honour Claudyo's legacy and support community change.</p>
    </footer>
  );
}
