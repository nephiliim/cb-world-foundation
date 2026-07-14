"use client";

import { useEffect, useState } from "react";
import { galleryMedia } from "@/data/media";
import styles from "./gallery.module.css";

type GalleryItem = {
  id: string | number;
  title: string;
  category?: string | null;
  media_type?: "image" | "video" | null;
  image_url?: string | null;
  video_url?: string | null;
  description?: string | null;
  created_at?: string | null;
};

const fallbackGalleryItems: GalleryItem[] = galleryMedia.map(
  (item, index) => ({
    id: `fallback-${index}`,
    title: item.title,
    description: item.description,
    category: item.category,
    media_type: item.type,
    image_url: item.type === "image" ? item.src : item.poster || null,
    video_url: item.type === "video" ? item.src : null,
    created_at: null,
  })
);

const categories = [
  "All",
  "Claudyo",
  "Awareness",
  "Community",
  "Events",
  "Music",
  "Videos",
  "Bleed Kits",
  "Family",
  "Memorial",
];

export default function GalleryPage() {
  const [items, setItems] =
    useState<GalleryItem[]>(fallbackGalleryItems);

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);

  const [loading, setLoading] = useState(true);

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  const selectedItem =
    selectedIndex !== null
      ? filteredItems[selectedIndex]
      : null;

  const featured = filteredItems[0] || items[0] || null;

  useEffect(() => {
    async function loadGallery() {
      try {
        const response = await fetch("/api/gallery", {
          cache: "no-store",
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            result.error || "Could not load the gallery."
          );
        }

        const publishedItems = Array.isArray(result.data)
          ? result.data
          : [];

        setItems(
          publishedItems.length > 0
            ? publishedItems
            : fallbackGalleryItems
        );
      } catch {
        setItems(fallbackGalleryItems);
      } finally {
        setLoading(false);
      }
    }

    loadGallery();
  }, []);

  function getMediaSource(item: GalleryItem) {
    return item.media_type === "video"
      ? item.video_url || item.image_url || ""
      : item.image_url || "";
  }

  function openLightbox(index: number) {
    setSelectedIndex(index);
  }

  function closeLightbox() {
    setSelectedIndex(null);
  }

  function showPrevious() {
    setSelectedIndex((current) => {
      if (current === null || filteredItems.length === 0) {
        return null;
      }

      return current === 0
        ? filteredItems.length - 1
        : current - 1;
    });
  }

  function showNext() {
    setSelectedIndex((current) => {
      if (current === null || filteredItems.length === 0) {
        return null;
      }

      return current === filteredItems.length - 1
        ? 0
        : current + 1;
    });
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (selectedIndex === null) {
        return;
      }

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
  }, [selectedIndex, filteredItems.length]);

  useEffect(() => {
    setSelectedIndex(null);
  }, [activeCategory]);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <span className={styles.kicker}>Gallery</span>

          <h1 className={styles.title}>
            Memories, awareness and legacy.
          </h1>

          <p className={styles.lead}>
            A growing media library for CB&apos;S WORLD Foundation
            Charity — celebrating Claudyo&apos;s life, sharing the
            work being done in his name and raising awareness for
            young people and families.
          </p>

          {featured && (
            <div className={styles.feature}>
              <button
                type="button"
                className={styles.featureCard}
                onClick={() => {
                  const index = filteredItems.findIndex(
                    (item) => item.id === featured.id
                  );

                  openLightbox(index >= 0 ? index : 0);
                }}
                aria-label={`Open ${featured.title}`}
                style={{
                  border: 0,
                  padding: 0,
                  cursor: "pointer",
                  background: "transparent",
                }}
              >
                {featured.media_type === "video" ? (
                  <video
                    preload="metadata"
                    poster={featured.image_url || undefined}
                    muted
                  >
                    <source
                      src={featured.video_url || ""}
                      type="video/mp4"
                    />
                  </video>
                ) : (
                  <img
                    src={featured.image_url || ""}
                    alt={featured.title}
                  />
                )}
              </button>

              <div className={styles.featureText}>
                <span className={styles.kicker}>
                  Featured memory
                </span>

                <h2>{featured.title}</h2>

                <p>
                  {featured.description ||
                    "A memory shared through CB'S WORLD Foundation Charity."}
                </p>
              </div>
            </div>
          )}
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
              <button
                type="button"
                className={styles.filter}
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                style={{
                  cursor: "pointer",
                  opacity:
                    activeCategory === category ? 1 : 0.72,
                  outline:
                    activeCategory === category
                      ? "2px solid #77b7ff"
                      : "none",
                  outlineOffset: "2px",
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className={styles.note}>
            <h2>Loading gallery...</h2>
          </div>
        ) : filteredItems.length > 0 ? (
          <div className={styles.grid}>
            {filteredItems.map((item, index) => {
              const mediaSource = getMediaSource(item);

              return (
                <article
                  className={styles.card}
                  key={item.id}
                >
                  <button
                    type="button"
                    className={styles.media}
                    onClick={() => openLightbox(index)}
                    aria-label={`Open ${item.title}`}
                    style={{
                      width: "100%",
                      border: 0,
                      padding: 0,
                      cursor: "pointer",
                      background: "transparent",
                    }}
                  >
                    {item.media_type === "video" ? (
                      <video
                        preload="metadata"
                        poster={item.image_url || undefined}
                        muted
                      >
                        <source
                          src={item.video_url || ""}
                          type="video/mp4"
                        />
                      </video>
                    ) : (
                      <img
                        src={mediaSource}
                        alt={item.title}
                      />
                    )}
                  </button>

                  <div className={styles.body}>
                    <span className={styles.badge}>
                      {item.category || "Gallery"}
                    </span>

                    <h3>{item.title}</h3>

                    <p>
                      {item.description ||
                        "A moment shared through the foundation."}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className={styles.note}>
            <h2>No media in this category yet.</h2>
            <p>
              Choose another category or add new media through the
              Gallery CMS.
            </p>
          </div>
        )}

        <div className={styles.note}>
          <h2>More memories can be added over time.</h2>

          <p>
            New events, music clips, awareness videos,
            photographs and community work can be added directly
            through the admin dashboard.
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
              {selectedItem.media_type === "video" ? (
                <video
                  key={selectedItem.video_url}
                  controls
                  autoPlay
                  playsInline
                  poster={selectedItem.image_url || undefined}
                  style={{
                    width: "100%",
                    maxHeight: "72vh",
                    objectFit: "contain",
                  }}
                >
                  <source
                    src={selectedItem.video_url || ""}
                    type="video/mp4"
                  />

                  Your browser does not support the video.
                </video>
              ) : (
                <img
                  src={selectedItem.image_url || ""}
                  alt={selectedItem.title}
                  style={{
                    display: "block",
                    width: "100%",
                    maxHeight: "72vh",
                    objectFit: "contain",
                  }}
                />
              )}

              {filteredItems.length > 1 && (
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
                {selectedItem.category || "Gallery"}
              </span>

              <h2 style={{ margin: "7px 0 6px" }}>
                {selectedItem.title}
              </h2>

              <p style={{ margin: 0, opacity: 0.78 }}>
                {selectedItem.description ||
                  "A moment shared through the foundation."}
              </p>

              <small
                style={{
                  display: "block",
                  marginTop: "10px",
                  opacity: 0.55,
                }}
              >
                {selectedIndex + 1} of{" "}
                {filteredItems.length}
              </small>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}