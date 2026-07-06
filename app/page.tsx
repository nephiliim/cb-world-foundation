import Link from "next/link";
import { galleryImages, heroImages, impactStats, missionCards, siteConfig } from "@/data/site";

const claudyoImage = heroImages?.claudyoPortrait || heroImages?.claudyo || galleryImages?.[0]?.src || "/images/hero/claudyo-main.jpg";
const missionImage = heroImages?.familyGrave || heroImages?.family || galleryImages?.[2]?.src || claudyoImage;

export default function HomePage() {
  return (
    <main className="legacy-home">
      <section className="legacy-hero-shell">
        <div className="legacy-hero-bg" />
        <div className="legacy-hero-content">
          <div className="legacy-hero-copy">
            <span className="legacy-kicker">CB&apos;s World Foundation</span>
            <h1>
              Long Live
              <span>His Legacy</span>
            </h1>
            <p>
              Honouring Claudyo Jauad Lafayette by working to prevent knife crime,
              support families affected by violence, and create safer communities.
            </p>
            <div className="legacy-actions">
              <a className="legacy-button primary" href={siteConfig.donationLink} target="_blank" rel="noreferrer">
                Donate Now <span>♡</span>
              </a>
              <Link className="legacy-button ghost" href="/claudyos-legacy">
                Read His Story
              </Link>
            </div>
          </div>

          <div className="legacy-hero-image-wrap" aria-label="Claudyo portrait">
            <img src={claudyoImage} alt="Claudyo Jauad Lafayette" />
            <div className="legacy-image-glow" />
          </div>
        </div>

        <div className="legacy-stats-bar">
          {impactStats.map((stat) => (
            <div key={stat.label} className="legacy-stat-item">
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          ))}
          <div className="legacy-stat-item final">
            <span>Lives We&apos;re Building A Future For</span>
            <strong>Every Day</strong>
          </div>
        </div>
      </section>

      <section className="legacy-mission-section">
        <div className="legacy-mission-copy">
          <span className="legacy-kicker blue">Our Mission</span>
          <h2>Building safer communities. Creating brighter futures.</h2>
          <p>
            Through education, awareness, justice and real support, CB&apos;s World Foundation is working every day to turn pain into purpose and protect young lives.
          </p>
          <Link className="legacy-button primary compact" href="/foundation">
            Learn More
          </Link>
        </div>
        <Link className="legacy-video-card" href="/media">
          <img src={missionImage} alt="Foundation community and memorial work" />
          <div className="play-circle">▶</div>
          <span>Watch Our Story</span>
        </Link>
      </section>

      <section className="legacy-pillars-section">
        {missionCards.map((card) => (
          <Link href={card.title.toLowerCase() === "justice" ? "/justice-for-claudyo" : "/foundation"} className="legacy-pillar" key={card.title}>
            <div className="legacy-pillar-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.description || card.text}</p>
          </Link>
        ))}
      </section>

      <section className="legacy-justice-band">
        <div>
          <span className="legacy-kicker">Justice for Claudyo</span>
          <h2>{siteConfig.reward || "£20,000"} Reward</h2>
          <p>
            If you know anything that could help bring justice for Claudyo, please use the official reporting channels.
          </p>
        </div>
        <div className="legacy-justice-actions">
          <a className="legacy-button primary" href={siteConfig.policeAppealUrl} target="_blank" rel="noreferrer">
            Submit Information
          </a>
          <a className="legacy-button ghost" href={`tel:${(siteConfig.crimestoppersPhone || "0800555111").replaceAll(" ", "")}`}>
            Crimestoppers
          </a>
        </div>
      </section>

      <section className="legacy-cards-row">
        <Link className="legacy-info-card" href="/claudyos-legacy">
          <h3>Claudyo&apos;s Legacy</h3>
          <p>Learn about Claudyo&apos;s life, dreams, family and the legacy he left behind.</p>
          <span>Learn More →</span>
        </Link>
        <Link className="legacy-info-card" href="/gallery">
          <h3>Gallery</h3>
          <p>Photos and videos from Claudyo&apos;s life, memorials, events and foundation activities.</p>
          <span>View Gallery →</span>
        </Link>
        <Link className="legacy-info-card" href="/legacy-wall">
          <h3>Legacy Wall</h3>
          <p>Leave a message, share a memory or light a candle in honour of Claudyo.</p>
          <span>Visit Legacy Wall →</span>
        </Link>
      </section>
    </main>
  );
}
