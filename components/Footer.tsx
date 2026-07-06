import Link from "next/link";
import { donationLink, navItems, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src="/images/logo/cb-foundation-logo.jpg" alt="CB's World Foundation logo" />
        <div>
          <h3>{siteConfig.name}</h3>
          <p>Building a legacy of love, justice and change in memory of Claudyo Jauad Lafayette.</p>
        </div>
      </div>
      <div className="footer-links">
        <div>
          <h4>Quick links</h4>
          {navItems.slice(0, 5).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>
        <div>
          <h4>Support</h4>
          <a href={donationLink} target="_blank" rel="noreferrer">Donate</a>
          <Link href="/legacy-wall">Legacy Wall</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        <div>
          <h4>Join our mission</h4>
          <p>Sign up for updates and be the first to hear about our work and events.</p>
          <div className="newsletter-box"><span>Enter your email address</span><button>↗</button></div>
        </div>
      </div>
      <p className="footer-bottom">© 2026 CB's World Foundation Charity. All rights reserved.</p>
    </footer>
  );
}
