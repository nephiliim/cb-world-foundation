"use client";

import { useState } from "react";

type UploadedFile = {
  url: string;
  name: string;
  type: string;
  size: number;
};

export function AdminUploader({
  label = "Upload media",
  folder = "uploads",
  onUploaded,
}: {
  label?: string;
  folder?: string;
  onUploaded?: (file: UploadedFile) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [error, setError] = useState("");

  async function uploadFile(file: File) {
    const adminKey = window.localStorage.getItem("admin_api_key") || "";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", folder);

    const response = await fetch("/api/admin/upload", {
      method: "POST",
      headers: { "x-admin-key": adminKey },
      body: formData,
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Upload failed");
    }

    return result as UploadedFile;
  }

  async function handleFiles(fileList: FileList | null) {
    if (!fileList?.length) return;

    setUploading(true);
    setError("");

    try {
      const uploaded: UploadedFile[] = [];

      for (const file of Array.from(fileList)) {
        const result = await uploadFile(file);
        uploaded.push(result);
        onUploaded?.(result);
      }

      setFiles((current) => [...uploaded, ...current]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="admin-upload-box">
      <label className="admin-upload-drop">
        <input
          type="file"
          multiple
          accept="image/*,video/*,audio/*,.pdf"
          onChange={(event) => handleFiles(event.target.files)}
        />
        <strong>{uploading ? "Uploading..." : label}</strong>
        <span>Choose files from your device. Images, videos, audio and PDFs are supported.</span>
      </label>

      {error && <p className="admin-upload-error">{error}</p>}

      {files.length > 0 && (
        <div className="admin-upload-results">
          {files.map((file) => (
            <div className="admin-upload-result" key={file.url}>
              <a href={file.url} target="_blank" rel="noreferrer">
                {file.name}
              </a>
              <button type="button" onClick={() => navigator.clipboard.writeText(file.url)}>
                Copy URL
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
