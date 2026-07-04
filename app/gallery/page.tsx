import ImagePlaceholder from '@/components/ImagePlaceholder';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { galleryCategories } from '@/data/site';

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Photos and memories from CB's World" body="A growing visual archive covering Claudyo, family, foundation work, community events, memorials, acts of kindness and media moments." />
      <Section eyebrow="Categories" title="Organised asset areas">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {galleryCategories.map((category) => <ImagePlaceholder key={category} label={category} path={`public/gallery/${category.toLowerCase().replaceAll(' ', '-')}/`} />)}
        </div>
      </Section>
    </>
  );
}
