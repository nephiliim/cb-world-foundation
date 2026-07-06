import Link from "next/link";
import { donationLink } from "@/data/site";

export function CTA() {
  return (
    <section className="cta-band">
      <span className="eyebrow">Carry the legacy forward</span>
      <h2>Together we can honour Claudyo's life through action.</h2>
      <p>Donate, share the appeal, volunteer or help connect the foundation with schools and community partners.</p>
      <div className="button-row">
        <a className="button primary" href={donationLink} target="_blank" rel="noreferrer">Donate Now</a>
        <Link className="button ghost" href="/contact">Get Involved</Link>
      </div>
    </section>
  );
}
