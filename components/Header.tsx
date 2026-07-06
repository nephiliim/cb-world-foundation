import Link from "next/link";
import { navItems, siteConfig, images } from "@/data/site";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          <img src={images.logo} alt="CB's World Foundation logo" />
          <span>{siteConfig.name}<small>LONG LIVE CB</small></span>
        </Link>
        <nav className="nav">
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <a className="donate-btn" href={siteConfig.donationLink} target="_blank" rel="noreferrer">Donate ♥</a>
      </div>
    </header>
  );
}
