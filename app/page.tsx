import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Section } from "@/components/Section";
import { foundationWork, galleryImages, impactStats, newsPosts, siteConfig } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-bg" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Community charity foundation</span>
            <h1>{siteConfig.tagline}</h1>
            <p>{siteConfig.description}</p>
            <div className="button-row">
              <ButtonLink href="/donate">Donate now</ButtonLink>
              <ButtonLink href="/claudyos-legacy" variant="secondary">Read the legacy</ButtonLink>
            </div>
          </div>
          <div className="hero-card">
            <img src="/images/hero/claudyo-main.jpg" alt="Claudyo portrait" />
          </div>
        </div>
      </section>

      <Section>
        <div className="container split">
          <div>
            <span className="eyebrow">Why we exist</span>
            <h2>Turning love, loss and legacy into community action.</h2>
          </div>
          <p className="large-copy">CB's World Foundation exists to honour Claudyo Jauad Lafayette by helping young people, supporting families, raising awareness and creating safer, more hopeful communities.</p>
        </div>
      </Section>

      <Section className="blue-section">
        <div className="container stats-grid">
          {impactStats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Foundation work</span>
            <h2>What we focus on</h2>
          </div>
          <div className="card-grid">
            {foundationWork.map((item) => (
              <Link className="card" href={`/foundation#${item.slug}`} key={item.slug}>
                <span className="card-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section className="soft-section">
        <div className="container gallery-preview">
          <div>
            <span className="eyebrow">Gallery</span>
            <h2>Real images from the foundation story.</h2>
            <p>Photos, branding and videos are organised into a clean media structure ready to grow.</p>
            <ButtonLink href="/gallery" variant="secondary">View gallery</ButtonLink>
          </div>
          <div className="mini-gallery">
            {galleryImages.slice(0, 4).map((image) => <img key={image.src} src={image.src} alt={image.alt} />)}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Latest updates</span>
            <h2>News from the foundation</h2>
          </div>
          <div className="card-grid two">
            {newsPosts.map((post) => (
              <article className="card" key={post.slug}>
                <span className="eyebrow">{new Date(post.date).toLocaleDateString("en-GB")}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
