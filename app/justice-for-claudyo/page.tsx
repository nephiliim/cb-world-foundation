import { heroImages, siteConfig } from "@/data/site";

export default function JusticeForClaudyoPage() {
  return (
    <main>
      <section className="page-hero justice-hero">
        <div>
          <span className="eyebrow">Justice for Claudyo 🦋</span>
          <h1>There is a {siteConfig.reward} reward for information leading to a conviction.</h1>
          <p>If you know anything, please do the right thing. One share could reach the person willing to speak up.</p>
          <div className="button-row">
            <a className="button primary" href={siteConfig.policeAppealUrl} target="_blank" rel="noreferrer">Submit information</a>
            <a className="button ghost" href={`tel:${siteConfig.crimestoppersPhone.replaceAll(" ", "")}`}>Call Crimestoppers</a>
          </div>
        </div>
        <img src={heroImages.memorial} alt="Memorial for Claudyo" />
      </section>

      <section className="split-section">
        <img className="feature-image" src={heroImages.familyGrave} alt="Family at Claudyo's grave" />
        <div>
          <span className="eyebrow">Message from Mum</span>
          <h2>“My one and only CB.”</h2>
          <p>Please don't scroll past without doing the right thing. Let's not give them the chance to do this again to somebody else's son, brother, grandson, nephew, cousin or friend.</p>
          <p>Rest easy Son, I will see you in a minute ✨</p>
        </div>
      </section>
    </main>
  );
}
