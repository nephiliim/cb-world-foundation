import Link from "next/link";
import { CTA } from "@/components/CTA";
import { galleryImages, heroImages, impactStats, missionCards, newsPosts, siteConfig } from "@/data/site";

export default function HomePage() {
  return (
    <main>
      <section className="v4-hero">
        <div className="hero-glow" />
        <div className="hero-copy">
          <span className="eyebrow">Official foundation website</span>
          <h1>{siteConfig.tagline}</h1>
          <p>
            A digital home for Claudyo's memory, the justice appeal, community support and the work being built in his name.
          </p>
          <div className="button-row">
            <Link className="button primary" href="/claudyos-legacy">Read Claudyo's Story</Link>
            <a className="button ghost" href={siteConfig.donationLink} target="_blank" rel="noreferrer">Donate Now</a>
          </div>
        </div>
        <div className="hero-portrait-card">
          <img src={heroImages.claudyoPortrait} alt="Claudyo Lafayette" />
          <div className="portrait-caption">
            <strong>Claudyo Jauad Lafayette</strong>
            <span>Forever loved. Forever remembered.</span>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="section-heading">
          <span className="eyebrow">The foundation</span>
          <h2>Legacy, justice, support and change.</h2>
        </div>
        <div className="mission-grid">
          {missionCards.map((card) => (
            <Link className="mission-card" href={card.href} key={card.title}>
              <span>{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div className="image-stack">
          <img src={heroImages.claudyoNews} alt="Claudyo Jauad Lafayette" />
          <img src={heroImages.estateMemorial} alt="Family and friends at memorial" />
        </div>
        <div>
          <span className="eyebrow">Meet Claudyo</span>
          <h2>More than a headline. A son, a friend and a young man with a future.</h2>
          <p>
            CB's World Foundation exists to keep Claudyo's name alive by turning remembrance into action: education, support, kindness and safer communities.
          </p>
          <Link className="text-link" href="/claudyos-legacy">Explore his legacy →</Link>
        </div>
      </section>

      <section className="justice-banner">
        <div>
          <span className="eyebrow">Justice for Claudyo 🦋</span>
          <h2>{siteConfig.reward} reward for information leading to a conviction.</h2>
          <p>If you know anything, please do the right thing. Information should be shared through official police or Crimestoppers channels.</p>
        </div>
        <div className="button-row">
          <a className="button primary" href={siteConfig.policeAppealUrl} target="_blank" rel="noreferrer">Give Information</a>
          <Link className="button ghost" href="/justice-for-claudyo">View Appeal</Link>
        </div>
      </section>

      <section className="section">
        <div className="stats-grid">
          {impactStats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading between">
          <div>
            <span className="eyebrow">Gallery</span>
            <h2>Real moments. Real memories.</h2>
          </div>
          <Link className="text-link" href="/gallery">View gallery →</Link>
        </div>
        <div className="gallery-strip">
          {galleryImages.slice(0, 5).map((image) => (
            <img key={image.src} src={image.src} alt={image.alt} />
          ))}
        </div>
      </section>

      <section className="section dark-section">
        <div className="section-heading between">
          <div>
            <span className="eyebrow">Latest updates</span>
            <h2>Legacy in action.</h2>
          </div>
          <Link className="text-link light" href="/news">View news →</Link>
        </div>
        <div className="news-grid">
          {newsPosts.map((post) => (
            <article className="news-card" key={post.slug}>
              <span>{new Date(post.date).toLocaleDateString("en-GB")}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}
