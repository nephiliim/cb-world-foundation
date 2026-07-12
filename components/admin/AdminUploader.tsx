"use client";

import { useState } from "react";

export type UploadedFile = {
  url: string;
  path?: string;
  name: string;
  type: string;
  size?: number;
  media?: unknown;
};

type AdminUploaderProps = {
  label?: string;
  folder?: string;
  multiple?: boolean;
  accept?: string;
  onUploaded?: (file: UploadedFile) => void;
};

export function AdminUploader({
  label = "Upload media",
  folder = "uploads",
  multiple = true,
  accept = "image/*,video/*,audio/*,.pdf",
  onUploaded,
}: AdminUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [error, setError] = useState("");
  const [copiedUrl, setCopiedUrl] = useState("");

  async function uploadFile(file: File) {
    const adminKey =
      window.localStorage.getItem("cb_admin_key") || "";

    if (!adminKey) {
      throw new Error(
        "Unlock the CMS with your admin key before uploading."
      );
    }

    const formData = new FormData();

    formData.append("file", file);
    formData.append("folder", folder);

    const response = await fetch("/api/admin/upload", {
      method: "POST",
      headers: {
        "x-admin-key": adminKey,
      },
      body: formData,
    });

    const text = await response.text();

    let result: UploadedFile & { error?: string };

    try {
      result = JSON.parse(text);
    } catch {
      throw new Error(text || "Upload failed.");
    }

    if (!response.ok) {
      throw new Error(result.error || "Upload failed.");
    }

    if (!result.url) {
      throw new Error("The upload completed but no file URL was returned.");
    }

    return result;
  }

  async function handleFiles(fileList: FileList | null) {
    if (!fileList?.length) return;

    setUploading(true);
    setError("");
    setCopiedUrl("");

    try {
      const selectedFiles = Array.from(fileList);
      const uploadedFiles: UploadedFile[] = [];

      for (const file of selectedFiles) {
        const result = await uploadFile(file);

        uploadedFiles.push(result);
        onUploaded?.(result);
      }

      setFiles((current) => [
        ...uploadedFiles,
        ...current,
      ]);
    } catch (uploadError) {
      setError(
        uploadError instanceof Error
          ? uploadError.message
          : "Upload failed."
      );
    } finally {
      setUploading(false);
    }
  }

  async function copyUrl(url: string) {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(url);

      window.setTimeout(() => {
        setCopiedUrl("");
      }, 1800);
    } catch {
      setError("Could not copy the URL.");
    }
  }

  return (
    <div className="admin-upload-box">
      <label className="admin-upload-drop">
        <input
          type="file"
          multiple={multiple}
          accept={accept}
          disabled={uploading}
          onChange={(event) => {
            void handleFiles(event.target.files);
            event.currentTarget.value = "";
          }}
        />

        <strong>
          {uploading ? "Uploading..." : label}
        </strong>

        <span>
          Choose files from your device. Images, videos, audio files
          and PDFs are supported.
        </span>
      </label>

      {error && (
        <p className="admin-upload-error">
          {error}
        </p>
      )}

      {files.length > 0 && (
        <div className="admin-upload-results">
          {files.map((file) => (
            <div
              className="admin-upload-result"
              key={`${file.url}-${file.name}`}
            >
              <div>
                <a
                  href={file.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {file.name}
                </a>

                <small>
                  {file.type}
                  {file.size
                    ? ` • ${(file.size / 1024 / 1024).toFixed(2)} MB`
                    : ""}
                </small>
              </div>

              <button
                type="button"
                onClick={() => void copyUrl(file.url)}
              >
                {copiedUrl === file.url
                  ? "Copied"
                  : "Copy URL"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}