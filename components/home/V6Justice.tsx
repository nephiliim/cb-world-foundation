import Link from "next/link";

type SiteConfig = {
  reward: string;
  policeAppealUrl: string;
  crimestoppersPhone: string;
};

export function V6Justice({ siteConfig }: { siteConfig: SiteConfig }) {
  return (
    <section className="v6-justice">
      <div>
        <span className="v6-kicker">Justice for Claudyo</span>
        <h2>{siteConfig.reward} Reward</h2>
        <p>
          For information leading to a conviction. If you know anything, please do the right thing.
        </p>
        <div className="v6-actions">
          <a className="v6-btn v6-btn-primary" href={siteConfig.policeAppealUrl} target="_blank" rel="noreferrer">
            Submit Information
          </a>
          <Link className="v6-btn v6-btn-ghost" href="/justice-for-claudyo">Learn More</Link>
        </div>
      </div>
      <div className="v6-crimestoppers">
        <span>Crimestoppers</span>
        <strong>{siteConfig.crimestoppersPhone}</strong>
        <p>100% anonymous. Always.</p>
      </div>
    </section>
  );
}
