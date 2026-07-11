import Link from "next/link";
import { missionCards, siteConfig } from "@/data/site";

export default function FoundationPage() {
  return (
    <main>
      <section className="page-hero foundation-hero">
        <div className="container split">
          <div>
            <span className="kicker">Meet the Founders</span>

            <h1>Turning unimaginable loss into lasting change.</h1>

            <p className="section-copy">
              <strong>CB&apos;S WORLD Foundation Charity</strong> was founded by{" "}
              <strong>Dydo Lafayette</strong>, Claudyo&apos;s mother, together
              with <strong>Siobhan Hennessey</strong>.
            </p>

            <p className="section-copy">
              Together, they are transforming grief into hope by supporting
              families, educating young people and helping to create safer
              communities through awareness, education and positive action.
            </p>

            <div className="button-row">
              <a
                className="button primary"
                href={siteConfig.donationLink}
                target="_blank"
                rel="noreferrer"
              >
                Donate Now
              </a>

              <Link className="button secondary" href="/get-involved">
                Get Involved
              </Link>
            </div>
          </div>

          <img
            className="feature-image"
            src="/images/foundation/founders.jpg"
            alt="Dydo Lafayette and Siobhan Hennessey"
          />
        </div>
      </section>

      <section className="section light foundation-story">
        <div className="container split">
          <img
            className="foundation-story-image"
            src="/images/foundation/founders-red.jpg"
            alt="Dydo Lafayette and Siobhan Hennessey"
          />

          <div>
            <span className="kicker">Why We Started</span>

            <h2 className="section-title">
              Turning grief into purpose and positive action.
            </h2>

            <p className="section-copy">
              Following the heartbreaking loss of Claudyo, Dydo made a promise
              that his name would continue to inspire hope and meaningful
              change.
            </p>

            <p className="section-copy">
              CB&apos;S WORLD Foundation Charity was created to honour
              Claudyo&apos;s life by helping protect other young people,
              supporting families affected by violence and encouraging
              communities to work together.
            </p>

            <p className="section-copy">
              Dydo and Siobhan believe that every young person deserves
              guidance, opportunity and the chance to feel safe. Through
              education, mentoring, awareness campaigns and community
              partnerships, they are working to help build a future in which
              fewer families experience the pain of losing someone they love.
            </p>

            <p className="section-copy">
              Claudyo&apos;s legacy continues through every conversation,
              every community project and every young life reached by the
              foundation.
            </p>
          </div>
        </div>
      </section>

      <section className="section foundation-values">
        <div className="container">
          <span className="kicker">Our Purpose</span>

          <h2 className="section-title">
            The future we are working towards.
          </h2>

          <div className="foundation-value-grid">
            <article className="foundation-value-card">
              <span>Our Vision</span>
              <h3>A safer future for young people.</h3>
              <p>
                A future where young people feel protected, valued, supported
                and inspired to reach their potential.
              </p>
            </article>

            <article className="foundation-value-card">
              <span>Our Mission</span>
              <h3>Support, education and prevention.</h3>
              <p>
                Supporting families, educating communities and taking positive
                action to help prevent youth violence.
              </p>
            </article>

            <article className="foundation-value-card">
              <span>Our Promise</span>
              <h3>To keep Claudyo&apos;s legacy moving forward.</h3>
              <p>
                Honouring Claudyo through compassion, community action and
                lasting change that reaches future generations.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <span className="kicker">What We Stand For</span>

          <h2 className="section-title">
            Building safer communities through action.
          </h2>

          <div className="grid mission-grid">
            {missionCards.map((card) => (
              <div className="card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="foundation-message">
        <div className="container">
          <span className="kicker">A Message from the Founders</span>

          <h2>
            Every young life matters, and every family deserves support.
          </h2>

          <p>
            CB&apos;S WORLD Foundation was created from love, resilience and a
            determination to make a difference. Every family supported, every
            young person reached and every community brought together is
            another step towards creating the safer future Claudyo deserved.
          </p>

          <strong>Dydo Lafayette and Siobhan Hennessey</strong>
        </div>
      </section>

      <section className="section foundation-final-cta">
        <div className="container">
          <span className="kicker">Support the Mission</span>

          <h2 className="section-title">
            Help us keep Claudyo&apos;s legacy moving forward.
          </h2>

          <p className="section-copy">
            Every donation, share, partnership and volunteer helps us reach
            more young people and support more families.
          </p>

          <div className="button-row">
            <a
              className="button primary"
              href={siteConfig.donationLink}
              target="_blank"
              rel="noreferrer"
            >
              Donate Now
            </a>

            <Link className="button secondary" href="/get-involved">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}