import Link from "next/link";
import { donationLink, foundationWork, galleryImages, impactStats, newsPosts, siteConfig } from "@/data/site";

export default function HomePage() {
  const heroImage = galleryImages[0]?.src;
  const memorialImage = galleryImages[4]?.src;

  return (
    <main className="v4-home">
      <section className="hero-showcase">
        <div className="hero-bg" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="hero-logo-watermark"><img src="/images/logo/cb-foundation-logo.jpg" alt="" /></div>
        <div className="hero-copy">
          <p className="kicker">Long Live CB</p>
          <h1>Honouring <span>Claudyo.</span></h1>
          <p>{siteConfig.tagline}</p>
          <div className="hero-actions">
            <Link className="primary-action" href="/claudyos-legacy">About Claudyo →</Link>
            <Link className="secondary-action" href="/justice-for-claudyo">Justice for Claudyo</Link>
          </div>
        </div>
      </section>

      <section className="pillar-strip">
        {foundationWork.map((item) => (
          <Link className="pillar-card" key={item.slug} href={item.slug === "justice" ? "/justice-for-claudyo" : "/foundation"}>
            <span>{item.icon}</span>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </Link>
        ))}
      </section>

      <section className="justice-banner">
        <div className="justice-emblem">Justice<br />for<br />Claudyo</div>
        <div>
          <p className="kicker">Justice for Claudyo</p>
          <h2>£20,000 reward</h2>
          <p>For information leading to the arrest and conviction of those responsible for Claudyo's murder.</p>
          <Link className="primary-action" href="/justice-for-claudyo">Find out more →</Link>
        </div>
        <div className="justice-contact">
          <strong>Crimestoppers</strong>
          <span>0800 555 111</span>
          <small>100% anonymous. Always.</small>
          <strong>Met Police</strong>
          <span>020 8721 4006</span>
          <small>Quote: Operation Veyron</small>
        </div>
      </section>

      <section className="feature-grid-home">
        <article className="feature-panel">
          <h2>Claudyo's Legacy</h2>
          <p>A beautiful soul taken too soon. Learn about Claudyo's life, his dreams, his family and the legacy he left behind.</p>
          <Link href="/claudyos-legacy">Learn more →</Link>
          <img src={heroImage} alt="Claudyo Lafayette" />
        </article>
        <article className="feature-panel">
          <h2>Gallery</h2>
          <p>Photos and videos from Claudyo's life, memorials, events and foundation activities.</p>
          <Link href="/gallery">View gallery →</Link>
          <img src={memorialImage} alt="Family and friends at the Ampthill estate memorial" />
        </article>
        <article className="feature-panel legacy-wall-panel">
          <h2>Legacy Wall</h2>
          <p>Leave a message, share a memory or light a candle in honour of Claudyo.</p>
          <Link href="/legacy-wall">Visit Legacy Wall →</Link>
          <div className="candle">🕯️🦋</div>
        </article>
        <article className="feature-panel latest-panel">
          <h2>Latest News</h2>
          <p>Stay up to date with the latest news, events and foundation updates.</p>
          <Link href="/news">View all news →</Link>
          <img src={newsPosts[0]?.image} alt={newsPosts[0]?.title} />
        </article>
      </section>

      <section className="latest-news-row">
        <div className="section-heading-row">
          <h2>Latest News</h2>
          <Link href="/news">View all news →</Link>
        </div>
        <div className="news-cards-row">
          {newsPosts.map((post) => (
            <article key={post.slug} className="news-mini-card">
              <img src={post.image} alt={post.title} />
              <small>{new Date(post.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</small>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link href="/news">Read more →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="impact-band">
        <p className="kicker">Our impact together</p>
        <div>
          {impactStats.map((stat) => (
            <div key={stat.label} className="impact-stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta-v4">
        <h2>Help continue Claudyo's legacy.</h2>
        <p>Every share, every message and every donation helps carry this mission forward.</p>
        <a className="primary-action" href={donationLink} target="_blank" rel="noreferrer">Donate today →</a>
      </section>
    </main>
  );
}
