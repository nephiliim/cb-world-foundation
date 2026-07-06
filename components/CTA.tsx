import { siteConfig } from "@/data/site";
export function CTA() {
  return <section className="section"><div className="container justice-band"><div><span className="kicker">Support the foundation</span><h2 className="section-title">Help continue Claudyo's legacy.</h2><p className="section-copy">Every share, message, donation and act of kindness helps carry the mission forward.</p></div><a className="button primary" href={siteConfig.donationLink} target="_blank" rel="noreferrer">Donate Now</a></div></section>;
}
