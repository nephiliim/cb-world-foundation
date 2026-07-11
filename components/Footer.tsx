import Link from "next/link";
import { images, siteConfig } from "@/data/site";

const facebookUrl =
  "https://www.facebook.com/profile.php?id=61590775048399";

const tiktokUrl = "https://www.tiktok.com/@dydo219";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer-grid">
          <div className="site-footer-brand">
            <img
              src={images.logo}
              alt="CB'S WORLD Foundation Charity logo"
            />

            <div>
              <h3>{siteConfig.name}</h3>
              <span>Long Live His Legacy</span>
            </div>

            <p>
              Building a legacy of love, justice and positive change in memory
              of Claudyo Jauad Lafayette.
            </p>
          </div>

          <div className="site-footer-column">
            <h4>Quick Links</h4>
            <Link href="/">Home</Link>
            <Link href="/claudyos-legacy">Claudyo&apos;s Legacy</Link>
            <Link href="/foundation">Foundation</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/legacy-wall">Legacy Wall</Link>
          </div>

          <div className="site-footer-column">
            <h4>Support</h4>
            <Link href="/donate">Donate</Link>
            <Link href="/get-involved">Get Involved</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/feedback">Feedback</Link>
          </div>

          <div className="site-footer-column">
            <h4>Justice & Updates</h4>

            <a
              href={siteConfig.policeAppealUrl}
              target="_blank"
              rel="noreferrer"
            >
              Official Police Appeal
            </a>

            <a
              href={`tel:${siteConfig.crimestoppersPhone.replaceAll(" ", "")}`}
            >
              Crimestoppers: {siteConfig.crimestoppersPhone}
            </a>

            <a href={facebookUrl} target="_blank" rel="noreferrer">
              Facebook
            </a>

            <a href={tiktokUrl} target="_blank" rel="noreferrer">
              TikTok
            </a>
          </div>
        </div>

        <div className="site-footer-bottom">
          <p>
            © 2026 CB&apos;S WORLD Foundation Charity. All rights reserved.
          </p>

          <p>In loving memory of Claudyo Jauad Lafayette.</p>
        </div>
      </div>
    </footer>
  );
}