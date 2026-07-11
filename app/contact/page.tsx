import { contactTypes } from "@/data/site";

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">Contact Us</span>

          <h1>We're here to help.</h1>

          <p className="section-copy">
            Whether you'd like to support the foundation, invite us to speak,
            volunteer, ask for help, or simply get in touch, we'd love to hear
            from you.
          </p>
        </div>
      </section>

      <section className="section light">
        <div className="container split">

          <div>

            <span className="kicker">Get In Touch</span>

            <h2 className="section-title">
              Every conversation matters.
            </h2>

            <p className="section-copy">
              CB'S WORLD Foundation is committed to supporting families,
              educating young people and working alongside communities to create
              lasting change.
            </p>

            <div className="foundation-value-grid">

              <div className="foundation-value-card">
                <span>SCHOOLS</span>
                <h3>Education</h3>
                <p>
                  Invite us to speak about knife crime awareness,
                  community safety and youth empowerment.
                </p>
              </div>

              <div className="foundation-value-card">
                <span>MEDIA</span>
                <h3>Press</h3>
                <p>
                  Interviews, campaigns, charity partnerships and
                  awareness opportunities.
                </p>
              </div>

              <div className="foundation-value-card">
                <span>VOLUNTEERS</span>
                <h3>Join Us</h3>
                <p>
                  Become part of the growing community helping to
                  continue Claudyo's legacy.
                </p>
              </div>

            </div>

          </div>

          <div>

            <form className="form">

              <input
                className="input"
                placeholder="Your Name"
              />

              <input
                className="input"
                type="email"
                placeholder="Email Address"
              />

              <select className="input">
                {contactTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>

              <textarea
                placeholder="How can we help?"
              />

              <button
                className="button primary"
                type="button"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>

      <section className="foundation-message">
        <div className="container">

          <span className="kicker">
            Together We Make A Difference
          </span>

          <h2>
            Small conversations can lead to
            <strong> life-changing opportunities.</strong>
          </h2>

          <p>
            Whether you're looking to support the foundation, organise a
            community event or simply learn more about our mission, we'd love
            to hear from you.
          </p>

        </div>
      </section>

    </main>
  );
}