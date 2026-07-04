import ImagePlaceholder from '@/components/ImagePlaceholder';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';

export default function ActsPage() {
  return (
    <>
      <PageHero eyebrow="Acts of Kindness" title="Small acts that show families they are not alone" body="This page will highlight care packages, family support, community stories, gifts and messages of love." />
      <Section eyebrow="Support" title="Photo areas for kindness stories">
        <div className="grid gap-5 md:grid-cols-3">
          <ImagePlaceholder label="Gifts" path="public/acts-of-kindness/gifts/" />
          <ImagePlaceholder label="Families" path="public/acts-of-kindness/families/" />
          <ImagePlaceholder label="Support" path="public/acts-of-kindness/support/" />
        </div>
      </Section>
    </>
  );
}
