import ImagePlaceholder from '@/components/ImagePlaceholder';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';

export default function MediaPage() {
  return (
    <>
      <PageHero eyebrow="Media & Press" title="Press coverage, interviews and foundation videos" body="This page is ready for BBC, ITV, newspaper screenshots, interviews and video coverage." />
      <Section eyebrow="Coverage" title="Media folders ready for uploads">
        <div className="grid gap-5 md:grid-cols-3">
          <ImagePlaceholder label="BBC coverage" path="public/media/bbc/" />
          <ImagePlaceholder label="ITV coverage" path="public/media/itv/" />
          <ImagePlaceholder label="Newspapers" path="public/media/newspapers/" />
        </div>
      </Section>
    </>
  );
}
