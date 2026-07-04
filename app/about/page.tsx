import CardGrid from '@/components/CardGrid';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="A family-led foundation created with purpose" body="CB's World Foundation Charity honours Claudyo by supporting families, educating young people and helping communities respond to knife crime with compassion and action." />
      <Section eyebrow="Founders" title="Meet the people behind the foundation">
        <div className="grid gap-6 md:grid-cols-3">
          <ImagePlaceholder label="Dydo founder photo" path="public/founders/dydo.jpg" />
          <ImagePlaceholder label="Siobhan founder photo" path="public/founders/siobhan.jpg" />
          <ImagePlaceholder label="Founders together" path="public/founders/founders-together.jpg" />
        </div>
      </Section>
      <Section eyebrow="Values" title="The values shaping every part of the work">
        <CardGrid items={[
          { title: 'Love', description: 'Leading with family, care and dignity.' },
          { title: 'Education', description: 'Helping young people understand choices and consequences.' },
          { title: 'Support', description: 'Standing with grieving families and vulnerable communities.' },
          { title: 'Action', description: 'Turning awareness into practical steps and safer spaces.' }
        ]} />
      </Section>
    </>
  );
}
