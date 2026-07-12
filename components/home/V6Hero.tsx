import Link from "next/link";

type HeroImages = {
  logo: string;
  claudyoPortrait: string;
};

type SiteConfig = {
  description: string;
  donationLink: string;
  homepageHeroTitle?: string;
  homepageHeroText?: string;
  homepagePrimaryButtonText?: string;
  homepagePrimaryButtonLink?: string;
  homepageSecondaryButtonText?: string;
  homepageSecondaryButtonLink?: string;
};

export function V6Hero({
  siteConfig,
  heroImages,
}: {
  siteConfig: SiteConfig;
  heroImages: HeroImages;
}) {
  const heroTitle =
    siteConfig.homepageHeroTitle || "Long Live His Legacy";

  const heroText =
    siteConfig.homepageHeroText || siteConfig.description;

  const primaryText =
    siteConfig.homepagePrimaryButtonText || "Donate Now";

  const primaryLink =
    siteConfig.homepagePrimaryButtonLink ||
    siteConfig.donationLink;

  const secondaryText =
    siteConfig.homepageSecondaryButtonText ||
    "Read His Story";

  const secondaryLink =
    siteConfig.homepageSecondaryButtonLink ||
    "/claudyos-legacy";

  const primaryIsExternal = primaryLink.startsWith("http");

  return (
    <section className="v6-hero">
      <div className="v6-orb v6-orb-one" />
      <div className="v6-orb v6-orb-two" />

      <div className="v6-hero-inner">
        <div className="v6-hero-copy">
          <span className="v6-kicker">
            CB&apos;s World Foundation
          </span>

          <h1>
            <strong>{heroTitle}</strong>
          </h1>

          <p>{heroText}</p>

          <div className="v6-actions">
            {primaryIsExternal ? (
              <a
                className="v6-btn v6-btn-primary"
                href={primaryLink}
                target="_blank"
                rel="noreferrer"
              >
                {primaryText}
              </a>
            ) : (
              <Link
                className="v6-btn v6-btn-primary"
                href={primaryLink}
              >
                {primaryText}
              </Link>
            )}

            <Link
              className="v6-btn v6-btn-ghost"
              href={secondaryLink}
            >
              {secondaryText}
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