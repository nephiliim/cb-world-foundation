import Link from "next/link";
import { donationLink } from "@/data/site";

export const metadata = {
  title: "Justice for Claudyo | CB's World Foundation",
  description:
    "Justice for Claudyo appeal information, reward notice, MIPP link and Crimestoppers contact details.",
};

export default function JusticeForClaudyoPage() {
  return (
    <main>
      <section className="justice-hero">
        <div className="justice-hero__overlay" />
        <div className="container justice-hero__content">
          <span className="eyebrow">Justice for Claudyo 🦋</span>
          <h1>One share could reach the right person.</h1>
          <p>
            There is a £20,000 reward for information that leads to a conviction of
            those responsible for Claudyo’s death. If you know anything, please say something.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="https://mipp.police.uk/operation/01MPS23V46-PO1" target="_blank" rel="noreferrer">
              Give Information
            </a>
            <a className="button button-secondary" href="tel:0800555111">
              Call Crimestoppers
            </a>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container justice-grid">
          <div className="justice-card justice-card--main">
            <span className="eyebrow">Appeal</span>
            <h2>If you know anything, please say something.</h2>
            <p>
              Please don’t scroll past without doing the right thing. Let’s not give
              them the chance to do this again to somebody else’s son, brother,
              grandson, nephew, cousin or friend.
            </p>
            <p>
              Information can be submitted through the Metropolitan Police MIPP portal,
              or anonymously through Crimestoppers.
            </p>
          </div>

          <aside className="justice-card justice-card--reward">
            <span className="reward-amount">£20,000</span>
            <h3>Reward for information</h3>
            <p>
              For information that leads to a conviction of those responsible.
            </p>
            <a className="text-link" href="https://mipp.police.uk/operation/01MPS23V46-PO1" target="_blank" rel="noreferrer">
              Open police appeal portal →
            </a>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container narrow tribute-message">
          <span className="eyebrow">A message from Mum</span>
          <blockquote>
            “This defines my Faith, Hope, and most importantly my Love. It defines who I am,
            and the young man I gave birth to and raised, and was lucky enough to have as my
            only Son for 17 years. My one and only CB 🦋 Rest easy Son, I will see you in a minute.”
          </blockquote>
          <p>— Mum 💫</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container video-section">
          <div>
            <span className="eyebrow">Appeal video</span>
            <h2>Justice for Claudyo</h2>
            <p>
              Share this page and help the appeal reach someone who may hold vital information.
            </p>
          </div>
          <video className="justice-video" controls preload="metadata">
            <source src="/videos/justice/justice-for-claudyo-appeal.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="section donate-band">
        <div className="container donate-band__inner">
          <div>
            <span className="eyebrow">Keep the legacy moving</span>
            <h2>Support CB’s World Foundation</h2>
            <p>
              Help continue Claudyo’s legacy through awareness, education, family support and community action.
            </p>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href={donationLink} target="_blank" rel="noreferrer">
              Donate
            </a>
            <Link className="button button-secondary" href="/contact">
              Get involved
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
