import { galleryImages } from "@/data/site";

export default function GalleryPage() {
  const categories = Array.from(new Set(galleryImages.map((image) => image.category)));
  return (
    <main>
      <section className="simple-page-header">
        <span className="eyebrow">Gallery</span>
        <h1>Memories, memorials and foundation moments.</h1>
        <p>A growing visual archive for Claudyo’s legacy and the work being built in his name.</p>
      </section>
      <section className="section">
        <div className="filter-row">
          {categories.map((category) => <span key={category}>{category}</span>)}
        </div>
        <div className="gallery-grid large">
          {galleryImages.map((image) => (
            <figure className="gallery-card" key={image.src}>
              <img src={image.src} alt={image.alt} />
              <figcaption>{image.category} — {image.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
