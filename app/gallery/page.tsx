import type { Metadata } from "next";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">Gallery</span>
        <h1 className="section-title">Photos and stories will live here.</h1>
        <p className="section-copy">Milestone 1 includes placeholder gallery blocks ready to replace with real event photos.</p>
        <div className="grid gallery" style={{ marginTop: 32 }}>
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="gallery-item" key={index}>Gallery image {index + 1}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
