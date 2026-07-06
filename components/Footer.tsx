import Link from "next/link";
import { heroImages, navItems, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src={heroImages.logo} alt="CB's World Foundation logo" />
        <div>
          <h2>{siteConfig.name}</h2>
          <p>{siteConfig.tagline}</p>
        </div>
      </div>
      <div className="footer-links">
        {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </div>
      <p className="footer-note">If you have information about Claudyo's case, use the official police appeal or call Crimestoppers anonymously on {siteConfig.crimestoppersPhone}.</p>
    </footer>
  );
}

export default Footer;
