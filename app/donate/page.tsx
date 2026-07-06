import { CTA } from "@/components/CTA";
import { donationLink } from "@/data/site";

export default function DonatePage() {
  return (
    <main>
      <section className="simple-page-header">
        <span className="eyebrow">Donate</span>
        <h1>Support the foundation and help carry Claudyo’s legacy forward.</h1>
        <p>Your support helps build education, community support, acts of kindness and long-term impact.</p>
        <a className="button primary" href={donationLink} target="_blank" rel="noreferrer">Donate via GoFundMe</a>
      </section>
      <CTA />
    </main>
  );
}
