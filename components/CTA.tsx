import Link from "next/link";

export function CTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta">
          <div>
            <h2 className="section-title">Ready to support CB's World?</h2>
            <p>Become a volunteer, sponsor a session, donate, or help connect young people with better opportunities.</p>
          </div>
          <Link className="button button-primary" href="/contact">Get involved</Link>
        </div>
      </div>
    </section>
  );
}
