import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { foundationWork } from "@/data/site";

export const metadata = { title: "Foundation Work" };

export default function FoundationPage() {
  return (
    <>
      <PageHero eyebrow="Foundation work" title="Community action with purpose" copy="CB's World Foundation focuses on awareness, education, safer communities and family support." />
      <Section>
        <div className="container card-grid">
          {foundationWork.map((item) => (
            <article className="card" id={item.slug} key={item.slug}>
              <span className="card-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
