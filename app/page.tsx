import Link from "next/link";
import { siteConfig, heroImages, missionCards, galleryImages, newsPosts } from "@/data/site";
import { V6Hero } from "@/components/home/V6Hero";
import { V6Stats } from "@/components/home/V6Stats";
import { V6Mission } from "@/components/home/V6Mission";
import { V6Pillars } from "@/components/home/V6Pillars";
import { V6Justice } from "@/components/home/V6Justice";
import { V6Cards } from "@/components/home/V6Cards";
import { V6Gallery } from "@/components/home/V6Gallery";

export default function HomePage() {
  return (
    <main className="v6-home">
      <V6Hero siteConfig={siteConfig} heroImages={heroImages} />
      <V6Stats />
      <V6Mission heroImages={heroImages} />
      <V6Pillars cards={missionCards} />
      <V6Justice siteConfig={siteConfig} />
      <V6Cards />
      <V6Gallery images={galleryImages.slice(0, 4)} news={newsPosts.slice(0, 3)} />

      <section className="v6-final-cta">
        <span className="v6-kicker">Join the mission</span>
        <h2>Help keep Claudyo’s legacy moving forward.</h2>
        <p>
          Share the appeal, support the foundation, leave a message, or get involved with future community work.
        </p>
        <div className="v6-actions v6-actions-center">
          <Link className="v6-btn v6-btn-primary" href="/donate">Donate Now</Link>
          <Link className="v6-btn v6-btn-ghost" href="/get-involved">Get Involved</Link>
        </div>
      </section>
    </main>
  );
}
