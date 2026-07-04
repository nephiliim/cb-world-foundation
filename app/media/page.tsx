import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata = { title: "Media" };

export default function MediaPage() {
  return (
    <>
      <PageHero eyebrow="Video and press" title="Media & Press" copy="A home for interviews, videos, press coverage and public awareness content." />
      <Section>
        <div className="container video-grid">
          <div className="video-card"><video controls src="/videos/foundation-1.mp4" /></div>
          <div className="video-card"><video controls src="/videos/foundation-2.mp4" /></div>
        </div>
      </Section>
    </>
  );
}
