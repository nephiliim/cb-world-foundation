import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import { navLinks, siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="header">
      <nav className="container nav" aria-label="Main navigation">
        <Link href="/" className="logo" aria-label={`${siteConfig.name} home`}>
          <span className="logo-mark">CB</span>
          <span>{siteConfig.shortName}</span>
        </Link>
        <div className="nav-links desktop-nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </div>
        <MobileNav />
      </nav>
    </header>
  );
}
