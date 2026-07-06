import Link from "next/link";

type Props = {
  siteConfig: { name: string; donationLink: string };
  heroImages: { logo?: string; claudyo?: string; claudyoPortrait?: string };
};

export function V6Hero({ siteConfig, heroImages }: Props) {
  const portrait = heroImages.claudyoPortrait || heroImages.claudyo;

  return (
    <section className="v6-hero">
      <div className="v6-orb v6-orb-one" />
      <div className="v6-orb v6-orb-two" />
      <div className="v6-hero-inner">
        <div className="v6-hero-copy">
          <div className="v6-brand-chip">
            {heroImages.logo && <img src={heroImages.logo} alt="CB's World Foundation logo" />}
            <span>{siteConfig.name}</span>
          </div>
          <p className="v6-kicker">Long Live CB</p>
          <h1>
            <span>Long Live</span>
            <strong>His Legacy</strong>
          </h1>
          <p className="v6-lead">
            Honouring Claudyo Jauad Lafayette by working to prevent knife crime, support families affected by violence, and create safer communities.
          </p>
          <div className="v6-actions">
            <a className="v6-btn v6-btn-primary" href={siteConfig.donationLink} target="_blank" rel="noreferrer">Donate Now</a>
            <Link className="v6-btn v6-btn-ghost" href="/claudyos-legacy">Read His Story</Link>
          </div>
        </div>

        <div className="v6-hero-visual" aria-label="Claudyo portrait">
          <div className="v6-watermark">CB</div>
          {portrait && <img className="v6-portrait" src={portrait} alt="Claudyo Jauad Lafayette" />}
          <div className="v6-photo-caption">Claudyo Jauad Lafayette</div>
        </div>
      </div>
    </section>
  );
}
