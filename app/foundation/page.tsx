import CardGrid from '@/components/CardGrid';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { foundationWork } from '@/data/site';

export default function FoundationPage() {
  return (
    <>
      <PageHero eyebrow="Foundation Work" title="Education, prevention, support and safer communities" body="The foundation focuses on knife crime prevention, school talks, bleed control kit awareness, grief support, youth education and community safety." />
      <Section eyebrow="Programmes" title="Core workstreams">
        <CardGrid items={foundationWork} />
      </Section>
    </>
  );
}
