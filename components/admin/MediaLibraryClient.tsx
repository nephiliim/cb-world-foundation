"use client";

import { useMemo, useState } from "react";
import { AdminUploader } from "@/components/admin/AdminUploader";

type MediaItem = {
  id: string;
  title: string;
  description?: string | null;
  file_name?: string | null;
  file_url: string;
  file_type?: string | null;
  category?: string | null;
  tags?: string[] | null;
  created_at?: string;
};

export function MediaLibraryClient({ initialMedia }: { initialMedia: MediaItem[] }) {
  const [media, setMedia] = useState(initialMedia);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("all");
  const [copied, setCopied] = useState("");

  const filtered = useMemo(() => {
    return media.filter((item) => {
      const search = `${item.title} ${item.description || ""} ${item.category || ""} ${(item.tags || []).join(" ")}`.toLowerCase();
      const matchesQuery = search.includes(query.toLowerCase());
      const matchesType = type === "all" || item.file_type === type;
      return matchesQuery && matchesType;
    });
  }, [media, query, type]);

  function addUploaded(file: any) {
    if (file.media) {
      setMedia((current) => [file.media, ...current]);
    }
  }

  async function copyUrl(url: string) {
    await navigator.clipboard.writeText(url);
    setCopied(url);
    setTimeout(() => setCopied(""), 1800);
  }

  return (
    <div className="media-library">
      <section className="media-upload-panel">
        <h2>Upload new media</h2>
        <p>Upload images, videos, audio or PDFs. They will be saved into the Media Library automatically.</p>
        <AdminUploader folder="media-library" label="Upload to Media Library" onUploaded={addUploaded} />
      </section>

      <section className="media-toolbar">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search media..."
        />
        <select value={type} onChange={(event) => setType(event.target.value)}>
          <option value="all">All files</option>
          <option value="image">Images</option>
          <option value="video">Videos</option>
          <option value="audio">Audio</option>
          <option value="document">Documents</option>
          <option value="file">Other files</option>
        </select>
      </section>

      <section className="media-grid">
        {filtered.map((item) => (
          <article className="media-card" key={item.id}>
            <div className="media-preview">
              {item.file_type === "image" ? (
                <img src={item.file_url} alt="" />
              ) : item.file_type === "video" ? (
                <video src={item.file_url} controls />
              ) : (
                <div className="media-file-icon">📄</div>
              )}
            </div>

            <div className="media-card-body">
              <span>{item.category || item.file_type || "Media"}</span>
              <h3>{item.title}</h3>
              {item.description && <p>{item.description}</p>}
              {item.tags?.length ? (
                <div className="media-tags">
                  {item.tags.map((tag) => <em key={tag}>{tag}</em>)}
                </div>
              ) : null}

              <button type="button" onClick={() => copyUrl(item.file_url)}>
                {copied === item.file_url ? "Copied" : "Copy URL"}
              </button>
            </div>
          </article>
        ))}
      </section>

      {!filtered.length && (
        <div className="media-empty">
          <h3>No media found</h3>
          <p>Upload your first file or change the search/filter.</p>
        </div>
      )}
    </div>
  );
}
