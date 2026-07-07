"use client";

import { useState } from "react";

type Props = {
  label?: string;
  folder?: string;
  onUploaded?: (file: { url: string; path: string; type: string; name: string }) => void;
};

export function MediaUploadField({ label = "Upload media", folder = "gallery", onUploaded }: Props) {
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [url, setUrl] = useState("");

  async function upload(file: File) {
    setUploading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", folder);

    const adminKey = window.localStorage.getItem("cb_admin_key") || "";

    const response = await fetch("/api/admin/upload", {
      method: "POST",
      headers: { "x-admin-key": adminKey },
      body: formData,
    });

    const result = await response.json();
    setUploading(false);

    if (!response.ok) {
      setMessage(result.error || "Upload failed");
      return;
    }

    setUrl(result.url);
    setMessage("Upload complete");
    onUploaded?.(result);
  }

  return (
    <div className="admin-v2-card">
      <label className="admin-v2-label">{label}</label>
      <input
        className="admin-v2-input"
        type="file"
        accept="image/*,video/*"
        disabled={uploading}
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) upload(file);
        }}
      />
      {uploading && <p className="admin-v2-note">Uploading...</p>}
      {message && <p className="admin-v2-note">{message}</p>}
      {url && (
        <div className="admin-v2-upload-preview">
          <input className="admin-v2-input" value={url} readOnly />
        </div>
      )}
    </div>
  );
}
