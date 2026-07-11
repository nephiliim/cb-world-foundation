import { siteConfig } from "@/data/site";

export default function DonatePage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">Support CB'S WORLD</span>

          <h1>Help Claudyo's legacy live on.</h1>

          <p className="section-copy">
            Every donation helps CB'S WORLD Foundation continue its mission to
            support families affected by violence, educate young people, raise
            awareness of knife crime and build safer communities.
          </p>

          <div className="button-row">
            <a
              className="button primary"
              href={siteConfig.donationLink}
              target="_blank"
              rel="noreferrer"
            >
              Donate via GoFundMe
            </a>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container">

          <div className="foundation-value-grid">

            <div className="foundation-value-card">
              <span>SUPPORT</span>
              <h3>Families</h3>
              <p>
                Helping families affected by violence through support,
                remembrance and community.
              </p>
            </div>

            <div className="foundation-value-card">
              <span>EDUCATION</span>
              <h3>Young People</h3>
              <p>
                Raising awareness about knife crime and encouraging safer
                futures for young people.
              </p>
            </div>

            <div className="foundation-value-card">
              <span>LEGACY</span>
              <h3>Claudyo</h3>
              <p>
                Ensuring Claudyo's story continues to inspire hope, kindness
                and positive change for generations to come.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="foundation-message">
        <div className="container">

          <span className="kicker">Every Gift Matters</span>

          <h2>
            Together we can create a future where
            <strong> more young lives are protected.</strong>
          </h2>

          <p>
            Whether your donation is large or small, every contribution helps
            us continue Claudyo's legacy and support the work of CB'S WORLD
            Foundation Charity.
          </p>

          <div className="button-row">
            <a
              className="button primary"
              href={siteConfig.donationLink}
              target="_blank"
              rel="noreferrer"
            >
              Donate Today
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}