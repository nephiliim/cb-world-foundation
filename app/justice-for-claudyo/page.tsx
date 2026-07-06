import { siteConfig, heroImages } from "@/data/site";

export default function JusticePage() {
  return (
    <main>
      <section className="page-hero justice-page-hero">
        <div>
          <span className="eyebrow">Justice for Claudyo 🦋</span>
          <h1>There is a {siteConfig.reward} reward for information leading to a conviction.</h1>
          <p>If you know anything, please do the right thing. One share could reach the person willing to speak up.</p>
          <div className="button-row">
            <a className="button primary" href={siteConfig.policeAppealUrl} target="_blank" rel="noreferrer">Submit Information</a>
            <a className="button ghost" href={`tel:${siteConfig.crimestoppersPhone.replaceAll(" ", "")}`}>Call Crimestoppers</a>
          </div>
        </div>
        <img src={heroImages.memorial} alt="Claudyo memorial" />
      </section>

      <section className="section dark-section">
        <div className="section-heading">
          <span className="eyebrow">Official appeal channels</span>
          <h2>Please use the official routes.</h2>
          <p>Information about the investigation should be passed to the police or Crimestoppers, not through the foundation website.</p>
        </div>
        <div className="mission-grid two">
          <a className="mission-card" href={siteConfig.policeAppealUrl} target="_blank" rel="noreferrer">
            <span>🚔</span>
            <h3>Metropolitan Police appeal</h3>
            <p>Submit information directly through the official MIPP appeal link.</p>
          </a>
          <a className="mission-card" href={`tel:${siteConfig.crimestoppersPhone.replaceAll(" ", "")}`}>
            <span>☎️</span>
            <h3>Crimestoppers</h3>
            <p>Call anonymously on {siteConfig.crimestoppersPhone}.</p>
          </a>
        </div>
      </section>

      <section className="split-section">
        <img className="feature-image" src={heroImages.familyGrave} alt="Family at Claudyo's grave" />
        <div>
          <span className="eyebrow">Message from Mum</span>
          <h2>“My one and only CB.”</h2>
          <p>
            Please don’t scroll past without doing the right thing. Let’s not give them the chance to do this again to somebody else’s son, brother, grandson, nephew, cousin or friend.
          </p>
          <p>Rest easy Son, I will see you in a minute ✨</p>
        </div>
      </section>
    </main>
  );
}
