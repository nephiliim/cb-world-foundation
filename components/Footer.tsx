import Link from "next/link";
import { images, navItems, siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <img src={images.logo} alt="CB's World Foundation logo" />
            <h3>{siteConfig.name}</h3>
            <p>Building a legacy of love, justice and change in memory of Claudyo Jauad Lafayette.</p>
          </div>
          <div><h4>Quick Links</h4>{navItems.slice(0,4).map(i => <Link key={i.href} href={i.href}>{i.label}</Link>)}</div>
          <div><h4>Support</h4><Link href="/donate">Donate</Link><Link href="/get-involved">Volunteer</Link><Link href="/contact">Contact</Link></div>
          <div><h4>Justice</h4><p>Crimestoppers: {siteConfig.crimestoppersPhone}</p><a href={siteConfig.policeAppealUrl} target="_blank" rel="noreferrer">Police appeal</a></div>
        </div>
        <div className="copyright">© 2026 CB's World Foundation. All rights reserved.</div>
      </div>
    </footer>
  );
}
