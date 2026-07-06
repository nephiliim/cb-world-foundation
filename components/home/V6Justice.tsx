type Props = {
  siteConfig: {
    reward?: string;
    policeAppealUrl?: string;
    crimestoppersPhone?: string;
  };
};

export function V6Justice({ siteConfig }: Props) {
  return (
    <section className="v6-justice">
      <div>
        <p className="v6-kicker">Justice for Claudyo</p>
        <h2>{siteConfig.reward || "£20,000"} reward for information leading to a conviction.</h2>
        <p>If you know anything, please say something. One share could reach the right person.</p>
      </div>
      <div className="v6-justice-panel">
        <span>Crimestoppers</span>
        <strong>{siteConfig.crimestoppersPhone || "0800 555 111"}</strong>
        <a className="v6-btn v6-btn-primary" href={siteConfig.policeAppealUrl || "https://mipp.police.uk/operation/01MPS23V46-PO1"} target="_blank" rel="noreferrer">Submit Information</a>
      </div>
    </section>
  );
}
