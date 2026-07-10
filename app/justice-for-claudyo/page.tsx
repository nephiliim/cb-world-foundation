[10:13, 10/07/2026] Derek Lamptey: import Link from "next/link";
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
              There is a reward for information that leads to a conviction of
              those responsible. If you know anything, please
[10:15, 10/07/2026] Derek Lamptey: import Link from "next/link";
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
              There is a reward for information that leads to a conviction of
              those responsible. If you know anything, please say something.
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
                href={tel:${siteConfig.crimestoppersPhone.replaceAll(" ", "")}}
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
              One share could reach the right person who is willing to do the
              right thing. Please don&apos;t scroll past without doing the right
              thing.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}