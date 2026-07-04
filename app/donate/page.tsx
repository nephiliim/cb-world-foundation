import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/ButtonLink";
import { siteConfig } from "@/data/site";

export const metadata = { title: "Donate" };

export default function DonatePage() {
  return (
    <>
      <PageHero eyebrow="Support the mission" title="Donate" copy="Every donation helps the foundation continue Claudyo's legacy through awareness, support and community action." />
      <Section>
        <div className="container card-grid">
          {["£5", "£20", "£50", "Monthly"].map((amount) => (
            <article className="card" key={amount}>
              <h3>{amount}</h3>
              <p>Help support awareness work, family support, events and future community projects.</p>
              <ButtonLink href={siteConfig.donationLink}>Donate</ButtonLink>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
