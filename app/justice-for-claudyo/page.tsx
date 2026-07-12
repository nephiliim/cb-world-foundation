import { images, siteConfig } from "@/data/site";

export default function JusticePage() {
  return (
    <main>
      <section className="page-hero justice-hero">
        <div className="container split justice-split">
          <div>
            <span className="kicker">Justice for Claudyo 🦋</span>

            <h1>{siteConfig.reward} Reward</h1>

            <p className="section-copy">
              A £20,000 reward remains available for information that leads to the
              conviction of those responsible for Claudyo&apos;s death. If you know
              anything, however small it may seem, please come forward.
            </p>

            <div className="button-row">
              <a
                className="button primary"
                href={siteConfig.policeAppealUrl}
                target="_blank"
                rel="noreferrer"
              >
                Submit Information
              </a>

              <a
                className="button secondary"
                href={`tel:${siteConfig.crimestoppersPhone.replaceAll(" ", "")}`}
              >
                Call Crimestoppers
              </a>
            </div>
          </div>

          <div className="justice-image-wrap">
            <img
              className="justice-image justice-image-portrait"
              src={images.claudyoPortrait}
              alt="Claudyo Lafayette"
            />
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container split justice-split">
          <div className="justice-image-wrap">
            <img
              className="justice-image justice-image-landscape"
              src={images.familyGrave}
              alt="Family at Claudyo's grave"
            />
          </div>

          <div>
            <span className="kicker">Message from Mum</span>

            <h2 className="section-title">My one and only CB.</h2>

           <p className="section-copy">
           One share could reach the person who knows something and is ready to
            do the right thing. Please help us keep Claudyo&apos;s appeal visible
            and encourage anyone with information to come forward.
</p>
          </div>
        </div>
      </section>
    </main>
  );
}