import { galleryImages } from "@/data/site";

export default function GalleryPage() {
  return (
    <main>
      <section className="page-hero text-only"><div><span className="eyebrow">Gallery</span><h1>Photos, memories and foundation moments.</h1><p>A growing archive of Claudyo's legacy and the work being carried forward.</p></div></section>
      <section className="section-shell"><div className="gallery-grid-full">{galleryImages.map((image) => <figure key={image.src} className="photo-card"><img src={image.src} alt={image.alt} /><figcaption><strong>{image.category}</strong><span>{image.caption}</span></figcaption></figure>)}</div></section>
    </main>
  );
}
