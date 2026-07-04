import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { galleryImages } from "@/data/site";

export const metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Photos" title="Gallery" copy="A growing visual archive for Claudyo's legacy, the foundation, family, community and events." />
      <Section>
        <div className="container gallery-grid">
          {galleryImages.map((image) => <img key={image.src} src={image.src} alt={image.alt} />)}
        </div>
      </Section>
    </>
  );
}
