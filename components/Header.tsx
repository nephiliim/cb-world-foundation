import Link from "next/link";
import { navItems, heroImages, siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand-lockup" aria-label="CB's World Foundation home">
        <img src={heroImages.logo} alt="CB's World Foundation logo" />
        <span>{siteConfig.name}</span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </nav>
      <a className="nav-donate" href={siteConfig.donationLink} target="_blank" rel="noreferrer">Donate</a>
    </header>
  );
}

export default Header;
