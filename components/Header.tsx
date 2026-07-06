import Link from "next/link";
import { navItems, siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <span className="brand-mark">CB</span>
        <span>
          <strong>{siteConfig.name}</strong>
          <small>{siteConfig.tagline}</small>
        </span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>{item.label}</Link>
        ))}
      </nav>
      <Link className="nav-donate" href="/donate">Donate</Link>
    </header>
  );
}
