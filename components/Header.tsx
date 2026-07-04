import Link from "next/link";
import { navItems, siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand">
        <img src="/images/logo/cb-world-logo.jpg" alt="CB's World Foundation logo" />
        <span>{siteConfig.name}</span>
      </Link>
      <nav className="desktop-nav">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>{item.label}</Link>
        ))}
      </nav>
      <Link href="/donate" className="nav-donate">Donate</Link>
    </header>
  );
}
