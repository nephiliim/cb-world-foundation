type GalleryImage = { src: string; alt: string; category?: string };
type NewsPost = { title: string; date?: string; excerpt?: string; summary?: string };

export function V6Gallery({ images, news }: { images: GalleryImage[]; news: NewsPost[] }) {
  return (
    <section className="v6-section">
      <div className="v6-section-head">
        <div>
          <p className="v6-kicker">Gallery and updates</p>
          <h2>Real moments. Real legacy.</h2>
        </div>
        <a className="v6-text-link" href="/gallery">View all →</a>
      </div>
      <div className="v6-gallery-grid">
        {images.map((image) => (
          <figure key={image.src}>
            <img src={image.src} alt={image.alt} />
            <figcaption>{image.category || image.alt}</figcaption>
          </figure>
        ))}
      </div>
      <div className="v6-news-strip">
        {news.map((item) => (
          <article key={item.title}>
            <span>{item.date || "Latest"}</span>
            <h3>{item.title}</h3>
            <p>{item.excerpt || item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
