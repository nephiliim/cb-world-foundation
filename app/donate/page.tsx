import type { Metadata } from "next";
import Link from "next/link";
import { donationOptions } from "@/data/site";

export const metadata: Metadata = { title: "Donate" };

export default function DonatePage() {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">Donate</span>
        <h1 className="section-title">Help fund more safe spaces and opportunities.</h1>
        <p className="section-copy">
          Donation cards are now managed from the site data file. Later, each card can be connected to Stripe, PayPal, GoFundMe, or a charity payment provider.
        </p>
        <div className="grid donate-grid">
          {donationOptions.map((item) => (
            <div className="card donation-card" key={item.amount}>
              <strong>{item.amount}</strong>
              <p className="section-copy">{item.text}</p>
              <Link className="button button-secondary" href="/contact">Choose this</Link>
            </div>
          ))}
        </div>
        <div className="hero-actions"><Link className="button button-primary" href="/contact">Contact us to donate</Link></div>
      </div>
    </section>
  );
}
