import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata = { title: "Acts of Kindness" };

export default function ActsPage() {
  return (
    <>
      <PageHero eyebrow="Community support" title="Acts of Kindness" copy="Small actions can carry huge meaning. This page will grow into a home for stories, support, care packages and moments of community love." />
      <Section>
        <div className="container content-grid">
          <div>
            <h2>Kindness in Claudyo's name.</h2>
            <p className="large-copy">From families needing support to community members who need a reminder that they are not alone, this area will document real acts of care and compassion.</p>
          </div>
          <img className="rounded-media" src="/images/founders/founders-2.jpg" alt="Foundation support" />
        </div>
      </Section>
    </>
  );
}
