import Link from "next/link";
import { galleryImages, siteConfig } from "@/data/site";

const claudyoPortrait =
  "https://crimestoppers-uk.org/getmedia/1d8e3981-ac90-4a4b-aa47-1c3594b32ce7/Claudyo-Lafayette-photo-1.png";

const newsItems = [
  {
    title: "Justice for Claudyo appeal continues",
    date: "Reward appeal",
    href: "/justice-for-claudyo",
  },
  {
    title: "Legacy Wall now open for messages",
    date: "Community tribute",
    href: "/legacy-wall",
  },
  {
    title: "Foundation work growing across the community",
    date: "Our mission",
    href: "/foundation",
  },
];

const pillars = [
  {
    title: "Legacy",
    text: "Keeping Claudyo’s memory alive through love, action and community.",
    icon: "🦋",
  },
  {
    title: "Justice",
    text: "Sharing the official appeal and encouraging anyone with information to speak up.",
    icon: "⚖️",
  },
  {
    title: "Support",
    text: "Standing with families, young people and communities affected by violence.",
    icon: "💙",
  },
  {
    title: "Change",
    text: "Creating safer communities through awareness, education and acts of kindness.",
    icon: "🤝",
  },
];

const impact = [
  ["Young lives touched", "2,543+"],
  ["Bleed control kits", "156"],
  ["School talks", "87"],
  ["Communities supported", "24"],
  ["Lives we’re building for", "Every day"],
];

export default function HomePage() {
  const featuredImages = galleryImages.slice(0, 4);

  return (
    <main className="v5-home">
      <section className="v5-hero" aria-label="CB's World Foundation homepage hero">
        <div className="v5-hero__glow" />
        <div className="v5-hero__content">
          <div className="v5-hero__copy">
            <p className="v5-kicker">CB’s World Foundation</p>
            <h1>
              Long Live
              <span>His Legacy</span>
            </h1>
            <p className="v5-hero__lead">
              Honouring Claudyo Jauad Lafayette by working to prevent knife crime,
              support families affected by violence, and create safer communities.
            </p>
            <div className="v5-actions">
              <Link className="v5-btn v5-btn--primary" href="/donate">
                Donate now <span>♥</span>
              </Link>
              <Link className="v5-btn v5-btn--ghost" href="/claudyos-legacy">
                Read his story
              </Link>
            </div>
          </div>

          <div className="v5-hero__image-wrap">
            <div className="v5-logo-orb">
              <img src="/images/logo/cb-world-logo.png" alt="CB's World Foundation logo" />
            </div>
            <img className="v5-hero__image" src={claudyoPortrait} alt="Claudyo Jauad Lafayette" />
          </div>
        </div>

        <div className="v5-impact-strip" aria-label="Foundation impact highlights">
          {impact.map(([label, value]) => (
            <div className="v5-impact-item" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="v5-section v5-mission-grid">
        {pillars.map((pillar) => (
          <article className="v5-card v5-pillar" key={pillar.title}>
            <span className="v5-icon" aria-hidden="true">{pillar.icon}</span>
            <h2>{pillar.title}</h2>
            <p>{pillar.text}</p>
          </article>
        ))}
      </section>

      <section className="v5-section v5-split">
        <div>
          <p className="v5-kicker">Our Mission</p>
          <h2>Building safer communities. Creating brighter futures.</h2>
          <p>
            Through education, awareness, justice and real support, CB’s World
            Foundation is working every day to turn pain into purpose and protect young lives.
          </p>
          <Link className="v5-btn v5-btn--primary" href="/foundation">
            Learn more
          </Link>
        </div>
        <div className="v5-video-card">
          <img
            src="https://www.camdennewjournal.co.uk/media/2025/07/1947ce92-eca3-47fa-903e-e4932f9c5bb7.jpg"
            alt="Family and friends at the Ampthill estate memorial"
          />
          <Link href="/gallery" className="v5-play-card">View gallery</Link>
        </div>
      </section>

      <section className="v5-section v5-justice-callout">
        <div>
          <p className="v5-kicker">Justice for Claudyo</p>
          <h2>{siteConfig.reward || "£20,000"} reward appeal</h2>
          <p>
            If you know anything, please do the right thing. Information can be
            given through the official police appeal or anonymously through Crimestoppers.
          </p>
        </div>
        <div className="v5-justice-actions">
          <Link className="v5-btn v5-btn--primary" href="/justice-for-claudyo">
            Find out more
          </Link>
          <a className="v5-btn v5-btn--ghost" href="https://mipp.police.uk/operation/01MPS23V46-PO1" target="_blank" rel="noreferrer">
            Submit information
          </a>
        </div>
      </section>

      <section className="v5-section">
        <div className="v5-section-head">
          <div>
            <p className="v5-kicker">Featured photos</p>
            <h2>Claudyo’s life, family and legacy.</h2>
          </div>
          <Link href="/gallery" className="v5-text-link">View gallery →</Link>
        </div>
        <div className="v5-gallery-preview">
          {featuredImages.map((image) => (
            <figure key={image.src}>
              <img src={image.src} alt={image.alt} />
              <figcaption>{image.category}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="v5-section v5-news-section">
        <div className="v5-section-head">
          <div>
            <p className="v5-kicker">Latest updates</p>
            <h2>Keep up with the foundation.</h2>
          </div>
          <Link href="/news" className="v5-text-link">All news →</Link>
        </div>
        <div className="v5-news-grid">
          {newsItems.map((item) => (
            <Link href={item.href} className="v5-card v5-news-card" key={item.title}>
              <span>{item.date}</span>
              <h3>{item.title}</h3>
              <p>Read more →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="v5-section v5-final-cta">
        <p className="v5-kicker">Get involved</p>
        <h2>Help continue Claudyo’s legacy.</h2>
        <p>
          Donate, volunteer, share the justice appeal, or leave a message on the Legacy Wall.
        </p>
        <div className="v5-actions v5-actions--center">
          <Link className="v5-btn v5-btn--primary" href="/donate">Support the foundation</Link>
          <Link className="v5-btn v5-btn--ghost" href="/legacy-wall">Visit Legacy Wall</Link>
        </div>
      </section>
    </main>
  );
}
