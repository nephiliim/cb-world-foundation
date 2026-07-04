import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Section } from "@/components/Section";
import { foundationWork, galleryImages, impactStats, newsPosts, siteConfig } from "@/data/site";

export default function HomePage() {
  const featuredImages = galleryImages.slice(0, 6);

  return (
    <>
      <section className="premium-hero">
        <div className="premium-hero__image" />
        <div className="premium-hero__overlay" />
        <div className="container premium-hero__content">
          <span className="eyebrow hero-eyebrow">CB's World Foundation</span>
          <h1>{siteConfig.tagline}</h1>
          <p>
            A legacy-led foundation tackling knife crime, supporting families, inspiring young people and creating hope through community action.
          </p>
          <div className="button-row">
            <ButtonLink href="/donate">Donate now</ButtonLink>
            <ButtonLink href="/claudyos-legacy" variant="secondary">Read Claudyo's story</ButtonLink>
          </div>
        </div>
      </section>

      <Section className="mission-strip">
        <div className="container mission-grid">
          <div className="mission-intro">
            <span className="eyebrow">Our purpose</span>
            <h2>Love turned into action.</h2>
            <p>
              The foundation exists to keep Claudyo's name alive by creating safer communities and standing with families who need support.
            </p>
          </div>
          {foundationWork.slice(0, 3).map((item) => (
            <Link className="mission-card" href={`/foundation#${item.slug}`} key={item.slug}>
              <span>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="container legacy-feature">
          <div className="legacy-photo-stack">
            <img className="legacy-photo large" src="/images/hero/claudyo-main.jpg" alt="Claudyo portrait" />
            <img className="legacy-photo small" src="/images/legacy/legacy-1.jpg" alt="Claudyo legacy artwork" />
          </div>
          <div className="legacy-copy">
            <span className="eyebrow">Claudyo's legacy</span>
            <h2>A story that continues through every life touched.</h2>
            <p>
              Claudyo Jauad Lafayette is at the heart of CB's World Foundation. His legacy inspires the foundation's work with young people, families, schools and communities.
            </p>
            <p>
              This website is being built as a digital home for his story, the foundation's mission, community memories, media and the future work still to come.
            </p>
            <ButtonLink href="/claudyos-legacy" variant="secondary">Explore the legacy</ButtonLink>
          </div>
        </div>
      </Section>

      <Section className="impact-band">
        <div className="container">
          <div className="section-heading centred">
            <span className="eyebrow">Impact</span>
            <h2>Built for community impact</h2>
          </div>
          <div className="stats-grid premium-stats">
            {impactStats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container gallery-showcase">
          <div className="showcase-copy">
            <span className="eyebrow">Gallery</span>
            <h2>A visual archive of legacy, family and foundation work.</h2>
            <p>
              Photos and videos are organised so the website can grow into a proper media library for events, memories, school talks, press coverage and acts of kindness.
            </p>
            <ButtonLink href="/gallery" variant="secondary">View full gallery</ButtonLink>
          </div>
          <div className="masonry-preview">
            {featuredImages.map((image, index) => (
              <img className={`tile tile-${index + 1}`} key={image.src} src={image.src} alt={image.alt} />
            ))}
          </div>
        </div>
      </Section>

      <Section className="soft-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Latest updates</span>
            <h2>News from the foundation</h2>
          </div>
          <div className="card-grid two news-cards">
            {newsPosts.map((post) => (
              <article className="card story-card" key={post.slug}>
                <span className="eyebrow">{new Date(post.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <section className="donate-banner">
        <div className="container donate-banner__inner">
          <div>
            <span className="eyebrow">Support the mission</span>
            <h2>Help keep Claudyo's legacy alive.</h2>
            <p>
              Every donation helps the foundation continue its work in awareness, support, community projects and acts of kindness.
            </p>
          </div>
          <a className="button donate-button" href={siteConfig.donationLink} target="_blank" rel="noreferrer">Donate through GoFundMe</a>
        </div>
      </section>
    </>
  );
}
