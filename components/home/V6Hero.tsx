import Link from "next/link";

type HeroImages = {
  logo: string;
  claudyoPortrait: string;
};

type SiteConfig = {
  description: string;
  donationLink: string;
};

export function V6Hero({
  siteConfig,
  heroImages,
}: {
  siteConfig: SiteConfig;
  heroImages: HeroImages;
}) {
  return (
    <section className="v6-hero">
      <div className="v6-orb v6-orb-one" />
      <div className="v6-orb v6-orb-two" />

      <div className="v6-hero-inner">
        <div className="v6-hero-copy">
          <span className="v6-kicker">CB&apos;s World Foundation</span>

          <h1>
            <span>Long Live</span>
            <strong>His Legacy</strong>
          </h1>

          <p>{siteConfig.description}</p>

          <div className="v6-actions">
            <a
              className="v6-btn v6-btn-primary"
              href={siteConfig.donationLink}
              target="_blank"
              rel="noreferrer"
            >
              Donate Now
            </a>

            <Link className="v6-btn v6-btn-ghost" href="/claudyos-legacy">
              Read His Story
            </Link>
          </div>
        </div>

        <div className="v6-hero-art">
          <img
            className="v6-logo-watermark"
            src={heroImages.logo}
            alt=""
            aria-hidden="true"
          />

          <div className="v6-portrait-wrap">
            <img
              className="v6-portrait"
              src={heroImages.claudyoPortrait}
              alt="Claudyo Jauad Lafayette"
            />

            <div className="v6-signature-below">
              Long Live Claudyo&apos;s Legacy 💙
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}