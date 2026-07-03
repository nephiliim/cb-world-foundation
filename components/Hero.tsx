import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">Community charity foundation</span>
          <h1>{siteConfig.tagline}</h1>
          <p>
            A warm, youth-focused foundation website built to share the mission,
            promote programmes, collect support, and show the real impact CB's World is making.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/donate">Support the mission</Link>
            <Link className="button button-secondary" href="/programs">View programs</Link>
          </div>
        </div>
        <div className="hero-panel" aria-label="Community support visual panel">
          <div className="hero-card">
            <span className="eyebrow">Milestone 1</span>
            <h2>Website foundation ready</h2>
            <p>
              Clean pages, reusable sections, mobile-friendly layout, and easy content updates through one data file.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
