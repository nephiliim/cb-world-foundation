"use client";

import { useEffect, useState } from "react";
import { galleryMedia } from "@/data/media";
import styles from "./gallery.module.css";

const categories = [
  "Claudyo",
  "Awareness",
  "Community",
  "Events",
  "Music",
  "Videos",
];

export default function GalleryPage() {
  const featured = galleryMedia[0];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedItem =
    selectedIndex !== null ? galleryMedia[selectedIndex] : null;

  function openLightbox(index: number) {
    setSelectedIndex(index);
  }

  function closeLightbox() {
    setSelectedIndex(null);
  }

  function showPrevious() {
    setSelectedIndex((current) => {
      if (current === null) return 0;
      return current === 0 ? galleryMedia.length - 1 : current - 1;
    });
  }

  function showNext() {
    setSelectedIndex((current) => {
      if (current === null) return 0;
      return current === galleryMedia.length - 1 ? 0 : current + 1;
    });
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    }

    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <span className={styles.kicker}>Gallery</span>

          <h1 className={styles.title}>
            Memories, awareness and legacy.
          </h1>

          <p className={styles.lead}>
            A growing media library for CB&apos;S WORLD Foundation Charity —
            celebrating Claudyo&apos;s life, sharing the work being done in his
            name, and raising awareness for young people and families.
          </p>

          <div className={styles.feature}>
            <button
  type="button"
  className={styles.featureCard}
  onClick={() => openLightbox(0)}
  aria-label={`Open ${featured.title}`}
  style={{
    border: 0,
    padding: 0,
    cursor: "pointer",
    background: "transparent",
  }}
>
  <img src={featured.src} alt={featured.title} />
</button>

            <div className={styles.featureText}>
              <span className={styles.kicker}>Featured memory</span>
              <h2>{featured.title}</h2>
              <p>{featured.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <div>
            <span className={styles.kicker}>Collections</span>
            <h2>Photos and videos</h2>
          </div>

          <div
            className={styles.filters}
            aria-label="Gallery categories"
          >
            {categories.map((category) => (
              <span className={styles.filter} key={category}>
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {galleryMedia.map((item, index) => (
            <article className={styles.card} key={item.src}>
              <button
                type="button"
                className={styles.media}
                onClick={() => openLightbox(index)}
                aria-label={`Open ${item.title}`}
                style={{
                  display: "block",
                  width: "100%",
                  border: 0,
                  padding: 0,
                  cursor: "pointer",
                  background: "transparent",
                }}
              >
                {item.type === "video" ? (
                  <>
                    <video
                      preload="metadata"
                      poster={item.poster}
                      muted
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>

                   
                  </>
                ) : (
                  <img src={item.src} alt={item.title} />
                )}
              </button>

              <div className={styles.body}>
                <span className={styles.badge}>{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.note}>
          <h2>More memories can be added over time.</h2>

          <p>
            The gallery is set up so future events, music clips, awareness
            videos, photos and community work can be added without redesigning
            the page each time.
          </p>
        </div>
      </section>

      {selectedItem && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          onClick={closeLightbox}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "grid",
            placeItems: "center",
            padding: "20px",
            background: "rgba(2, 8, 20, 0.94)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            style={{
              position: "relative",
              width: "min(1000px, 100%)",
              maxHeight: "92vh",
              overflow: "hidden",
              borderRadius: "24px",
              background: "#071426",
              boxShadow: "0 30px 90px rgba(0,0,0,.6)",
            }}
          >
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close gallery"
              style={{
                position: "absolute",
                top: "14px",
                right: "14px",
                zIndex: 5,
                width: "44px",
                height: "44px",
                border: 0,
                borderRadius: "50%",
                background: "rgba(0,0,0,.68)",
                color: "#fff",
                fontSize: "1.8rem",
                cursor: "pointer",
              }}
            >
              ×
            </button>

            <div
              style={{
                position: "relative",
                display: "grid",
                placeItems: "center",
                minHeight: "320px",
                maxHeight: "72vh",
                background: "#020711",
              }}
            >
              {selectedItem.type === "video" ? (
                <video
                  key={selectedItem.src}
                  controls
                  autoPlay
                  playsInline
                  poster={selectedItem.poster}
                  style={{
                    width: "100%",
                    maxHeight: "72vh",
                    objectFit: "contain",
                  }}
                >
                  <source
                    src={selectedItem.src}
                    type="video/mp4"
                  />
                  Your browser does not support the video.
                </video>
              ) : (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  style={{
                    display: "block",
                    width: "100%",
                    maxHeight: "72vh",
                    objectFit: "contain",
                  }}
                />
              )}

              {galleryMedia.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPrevious}
                    aria-label="Previous item"
                    style={{
                      position: "absolute",
                      left: "14px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "46px",
                      height: "46px",
                      border: 0,
                      borderRadius: "50%",
                      background: "rgba(0,0,0,.68)",
                      color: "#fff",
                      fontSize: "2rem",
                      cursor: "pointer",
                    }}
                  >
                    ‹
                  </button>

                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Next item"
                    style={{
                      position: "absolute",
                      right: "14px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "46px",
                      height: "46px",
                      border: 0,
                      borderRadius: "50%",
                      background: "rgba(0,0,0,.68)",
                      color: "#fff",
                      fontSize: "2rem",
                      cursor: "pointer",
                    }}
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            <div
              style={{
                padding: "18px 22px 22px",
                color: "#fff",
              }}
            >
              <span
                style={{
                  color: "#4da3ff",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {selectedItem.category}
              </span>

              <h2 style={{ margin: "7px 0 6px" }}>
                {selectedItem.title}
              </h2>

              <p style={{ margin: 0, opacity: 0.78 }}>
                {selectedItem.description}
              </p>

              <small
                style={{
                  display: "block",
                  marginTop: "10px",
                  opacity: 0.55,
                }}
              >
                {selectedIndex + 1} of {galleryMedia.length}
              </small>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}