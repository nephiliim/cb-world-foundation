import Link from "next/link";
import { galleryImages, heroImages, impactStats, missionCards, newsPosts, siteConfig } from "@/data/site";

export default function HomePage() {
  return (
    <main>
      <section className="v4-hero">
        <div className="hero-glow" />
        <div className="hero-copy">
          <img className="hero-logo" src={heroImages.logo} alt="CB's World Foundation logo" />
          <span className="eyebrow">Legacy • Justice • Support • Community</span>
          <h1>{siteConfig.tagline}</h1>
          <p>{siteConfig.description}</p>
          <div className="button-row">
            <a className="button primary" href={siteConfig.donationLink} target="_blank" rel="noreferrer">Donate now</a>
            <Link className="button ghost" href="/claudyos-legacy">Read Claudyo's story</Link>
          </div>
        </div>
        <div className="hero-image-stack">
          <img className="hero-main-photo" src={heroImages.claudyoPortrait} alt="Claudyo Lafayette" />
          <div className="reward-card"><strong>{siteConfig.reward}</strong><span>reward for information leading to a conviction</span></div>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-heading">
          <span className="eyebrow">Our mission</span>
          <h2>Built around love, action and a safer future.</h2>
        </div>
        <div className="mission-grid">
          {missionCards.map((card) => (
            <article className="glass-card" key={card.title}>
              <span className="card-icon">{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section premium-split">
        <img className="feature-image" src={heroImages.claudyoNews} alt="Claudyo Jauad Lafayette" />
        <div>
          <span className="eyebrow">Meet Claudyo</span>
          <h2>More than a headline. A son, a friend and a young man deeply loved.</h2>
          <p>CB's World Foundation exists to honour Claudyo's life by carrying his memory into work that supports families, reaches young people and creates safer communities.</p>
          <Link className="text-link" href="/claudyos-legacy">Explore his legacy →</Link>
        </div>
      </section>

      <section className="justice-band">
        <div>
          <span className="eyebrow">Justice for Claudyo 🦋</span>
          <h2>{siteConfig.reward} reward for information.</h2>
          <p>If you know anything, please do the right thing. One share could reach the person willing to speak up.</p>
        </div>
        <div className="button-row">
          <a className="button primary" href={siteConfig.policeAppealUrl} target="_blank" rel="noreferrer">Submit information</a>
          <a className="button ghost" href={`tel:${siteConfig.crimestoppersPhone.replaceAll(" ", "")}`}>Call Crimestoppers</a>
        </div>
      </section>

      <section className="section-shell">
        <div className="stats-grid">
          {impactStats.map((stat) => <div className="stat-card" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
        </div>
      </section>

      <section className="section-shell">
        <div className="section-heading"><span className="eyebrow">Gallery</span><h2>Real moments, real memories.</h2></div>
        <div className="gallery-preview">
          {galleryImages.slice(0, 5).map((image) => <img key={image.src} src={image.src} alt={image.alt} />)}
        </div>
      </section>

      <section className="section-shell">
        <div className="section-heading"><span className="eyebrow">Latest</span><h2>Legacy in action.</h2></div>
        <div className="news-grid">
          {newsPosts.map((post) => <article className="glass-card" key={post.slug}><span>{post.date}</span><h3>{post.title}</h3><p>{post.excerpt}</p></article>)}
        </div>
      </section>
    </main>
  );
}
