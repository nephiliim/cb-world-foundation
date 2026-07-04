import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata = { title: "Programs" };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Coming next" title="Programs" copy="This page is part of the clean v2 structure and is ready for the next content sprint." />
      <Section>
        <div className="container narrow">
          <h2>Ready to build.</h2>
          <p className="large-copy">This page has been included so the navigation and route structure are clean from day one.</p>
        </div>
      </Section>
    </>
  );
}
