import Link from "next/link";
import { donationLink, navItems, siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand-block" aria-label="CB's World Foundation home">
        <img src="/images/logo/cb-foundation-logo.jpg" alt="CB's World Foundation logo" />
        <span>
          <strong>{siteConfig.name}</strong>
          <small>Long Live CB</small>
        </span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>{item.label}</Link>
        ))}
      </nav>
      <a className="donate-button" href={donationLink} target="_blank" rel="noreferrer">♡ Donate</a>
    </header>
  );
}
