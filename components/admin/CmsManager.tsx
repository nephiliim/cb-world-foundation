"use client";

import { useEffect, useMemo, useState } from "react";
import { AdminCmsStyles } from "./AdminCmsStyles";
import {
  AdminUploader,
  type UploadedFile,
} from "./AdminUploader";

type Field = {
  name: string;
  label: string;
  type?: "text" | "textarea" | "select" | "url" | "date";
  options?: string[];
  placeholder?: string;
};

type Row = Record<string, unknown>;

type CmsManagerProps = {
  module: string;
  title: string;
  description: string;
  fields: Field[];
  previewField?: string;
};

function createSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function CmsManager({
  module,
  title,
  description,
  fields,
  previewField = "image_url",
}: CmsManagerProps) {
  const emptyForm = useMemo(
    () =>
      Object.fromEntries(
        fields.map((field) => [
          field.name,
          field.type === "select"
            ? field.options?.[0] ?? "draft"
            : "",
        ])
      ),
    [fields]
  );

  const [adminKey, setAdminKey] = useState("");
  const [items, setItems] = useState<Row[]>([]);
  const [form, setForm] = useState<Row>(emptyForm);
  const [editingId, setEditingId] = useState<string | number | null>(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const hasUploadField = fields.some((field) =>
    ["image_url", "cover_image", "video_url", "media_url"].includes(
      field.name
    )
  );

  useEffect(() => {
    const savedKey = localStorage.getItem("cb_admin_key") || "";
    setAdminKey(savedKey);
  }, []);

  useEffect(() => {
    if (adminKey) {
      void loadItems(adminKey);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminKey, module]);

  async function request(path: string, options: RequestInit = {}) {
    const response = await fetch(path, {
      ...options,
      headers: {
        "content-type": "application/json",
        "x-admin-key": adminKey,
        ...(options.headers || {}),
      },
    });

    const json = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(json.error || "Request failed.");
    }

    return json;
  }

  async function loadItems(key = adminKey) {
    if (!key) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`/api/admin/${module}`, {
        headers: {
          "x-admin-key": key,
        },
        cache: "no-store",
      });

      const json = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(json.error || "Could not load items.");
      }

      setItems(Array.isArray(json.data) ? json.data : []);
    } catch (loadError) {
      setError(
        loadError instanceof Error
          ? loadError.message
          : "Could not load items."
      );
    } finally {
      setLoading(false);
    }
  }

  async function saveKey() {
    setError("");
    setMessage("");

    localStorage.setItem("cb_admin_key", adminKey);
    await loadItems(adminKey);

    setMessage("CMS unlocked successfully.");
  }

  async function saveItem(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSaving(true);
    setError("");
    setMessage("");

    try {
      await request(`/api/admin/${module}`, {
        method: editingId ? "PATCH" : "POST",
        body: JSON.stringify(
          editingId
            ? {
                id: editingId,
                ...form,
              }
            : form
        ),
      });

      setMessage(editingId ? "Changes saved." : "Saved successfully.");
      setForm(emptyForm);
      setEditingId(null);

      await loadItems();
    } catch (saveError) {
      setError(
        saveError instanceof Error
          ? saveError.message
          : "Could not save item."
      );
    } finally {
      setSaving(false);
    }
  }

  async function setStatus(item: Row, status: string) {
    setError("");
    setMessage("");

    try {
      await request(`/api/admin/${module}`, {
        method: "PATCH",
        body: JSON.stringify({
          id: item.id,
          status,
        }),
      });

      setMessage("Updated.");
      await loadItems();
    } catch (updateError) {
      setError(
        updateError instanceof Error
          ? updateError.message
          : "Could not update item."
      );
    }
  }

  function editItem(item: Row) {
    const editableValues = Object.fromEntries(
      fields.map((field) => [
        field.name,
        item[field.name] ?? "",
      ])
    );

    const id = item.id;

    if (typeof id !== "string" && typeof id !== "number") {
      setError("This item has no valid ID.");
      return;
    }

    setForm(editableValues);
    setEditingId(id);
    setMessage("Editing item.");
    setError("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function cancelEditing() {
    setForm(emptyForm);
    setEditingId(null);
    setMessage("");
    setError("");
  }

  async function removeItem(item: Row) {
    if (!window.confirm("Delete this item?")) return;

    setError("");
    setMessage("");

    try {
      await request(`/api/admin/${module}`, {
        method: "DELETE",
        body: JSON.stringify({
          id: item.id,
        }),
      });

      setMessage("Deleted.");
      await loadItems();
    } catch (deleteError) {
      setError(
        deleteError instanceof Error
          ? deleteError.message
          : "Could not delete item."
      );
    }
  }

  function handleUploadedFile(file: UploadedFile) {
    const isVideo = file.type?.startsWith("video/");

    setForm((current) => {
      const updated = { ...current };

      if (
        isVideo &&
        fields.some((field) => field.name === "video_url")
      ) {
        updated.video_url = file.url;
      } else if (
        fields.some((field) => field.name === "image_url")
      ) {
        updated.image_url = file.url;
      } else if (
        fields.some((field) => field.name === "cover_image")
      ) {
        updated.cover_image = file.url;
      } else if (
        fields.some((field) => field.name === "media_url")
      ) {
        updated.media_url = file.url;
      }

      if (fields.some((field) => field.name === "media_type")) {
        updated.media_type = isVideo ? "video" : "image";
      }

      return updated;
    });

    setMessage(
      "Upload complete. The file URL has been added to the form."
    );
  }

  function updateField(field: Field, value: string) {
    setForm((current) => {
      const updated = {
        ...current,
        [field.name]: value,
      };

      const hasSlugField = fields.some(
        (item) => item.name === "slug"
      );

      const isTitleField =
        field.name === "title" ||
        field.name === "headline";

      if (hasSlugField && isTitleField && !editingId) {
        updated.slug = createSlug(value);
      }

      return updated;
    });
  }

  return (
    <>
      <AdminCmsStyles />

      <section
        className="admin-cms-card"
        style={{ marginBottom: 18 }}
      >
        <h2 style={{ marginTop: 0 }}>{title}</h2>
        <p style={{ color: "#b7cdec" }}>{description}</p>

        <div className="admin-cms-form two">
          <label>
            Admin API key
            <input
              value={adminKey}
              onChange={(event) => setAdminKey(event.target.value)}
              placeholder="Paste ADMIN_API_KEY"
              type="password"
            />
          </label>

          <div
            style={{
              display: "flex",
              alignItems: "end",
              gap: 10,
            }}
          >
            <button
              className="admin-cms-button"
              type="button"
              onClick={() => void saveKey()}
            >
              Unlock CMS
            </button>

            <button
              className="admin-cms-button secondary"
              type="button"
              onClick={() => void loadItems()}
            >
              Refresh
            </button>
          </div>
        </div>

        {error && (
          <div className="admin-cms-error">{error}</div>
        )}

        {message && (
          <div className="admin-cms-success">{message}</div>
        )}
      </section>

      {hasUploadField && (
        <section
          className="admin-cms-card"
          style={{ marginBottom: 18 }}
        >
          <h3 style={{ marginTop: 0 }}>Upload media</h3>
          <p style={{ color: "#b7cdec" }}>
            Upload a file and its URL will be added to the form
            automatically.
          </p>

          <AdminUploader
            label="Choose an image or video"
            folder={module}
            multiple={false}
            onUploaded={handleUploadedFile}
          />
        </section>
      )}

      <section
        className="admin-cms-card"
        style={{ marginBottom: 18 }}
      >
        <h3 style={{ marginTop: 0 }}>
          {editingId ? "Edit item" : "Add new"}
        </h3>

        <form
          className="admin-cms-form two"
          onSubmit={saveItem}
        >
          {fields.map((field) => (
            <label
              key={field.name}
              style={
                field.type === "textarea"
                  ? { gridColumn: "1 / -1" }
                  : undefined
              }
            >
              {field.label}

              {field.type === "textarea" ? (
                <textarea
                  value={String(form[field.name] ?? "")}
                  placeholder={field.placeholder}
                  onChange={(event) =>
                    updateField(field, event.target.value)
                  }
                />
              ) : field.type === "select" ? (
                <select
                  value={String(form[field.name] ?? "")}
                  onChange={(event) =>
                    updateField(field, event.target.value)
                  }
                >
                  {(field.options || []).map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type || "text"}
                  value={String(form[field.name] ?? "")}
                  placeholder={field.placeholder}
                  onChange={(event) =>
                    updateField(field, event.target.value)
                  }
                />
              )}
            </label>
          ))}

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            <button
              className="admin-cms-button"
              type="submit"
              disabled={saving}
            >
              {saving
                ? "Saving..."
                : editingId
                ? "Save Changes"
                : "Publish / Save"}
            </button>

            {editingId && (
              <button
                className="admin-cms-button secondary"
                type="button"
                onClick={cancelEditing}
              >
                Cancel Editing
              </button>
            )}
          </div>
        </form>
      </section>

      <section className="admin-cms-card">
        <h3 style={{ marginTop: 0 }}>
          Saved items {loading ? "— loading..." : ""}
        </h3>

        <div style={{ overflowX: "auto" }}>
          <table className="admin-cms-table">
            <thead>
              <tr>
                <th>Preview</th>
                <th>Title</th>
                <th>Status</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {items.map((item) => {
                const preview = item[previewField];
                const titleValue =
                  item.title ||
                  item.name ||
                  item.quote ||
                  "Untitled";

                const subtitle =
                  item.category ||
                  item.date ||
                  item.relationship ||
                  "";

                const status =
                  typeof item.status === "string"
                    ? item.status
                    : "draft";

                const createdAt =
                  typeof item.created_at === "string"
                    ? item.created_at
                    : null;

                return (
                  <tr key={String(item.id)}>
                    <td>
                      {typeof preview === "string" && preview ? (
                        <img
                          className="admin-cms-thumb"
                          src={preview}
                          alt=""
                        />
                      ) : (
                        "—"
                      )}
                    </td>

                    <td>
                      <strong>{String(titleValue)}</strong>
                      <br />
                      <span style={{ color: "#b7cdec" }}>
                        {String(subtitle)}
                      </span>
                    </td>

                    <td>
                      <span className="admin-cms-status">
                        {status}
                      </span>
                    </td>

                    <td>
                      {createdAt
                        ? new Date(createdAt).toLocaleDateString()
                        : "—"}
                    </td>

                    <td>
                      <div className="admin-cms-actions">
                        <button
                          className="admin-cms-button secondary"
                          type="button"
                          onClick={() => editItem(item)}
                        >
                          Edit
                        </button>

                        <button
                          className="admin-cms-button secondary"
                          type="button"
                          onClick={() =>
                            void setStatus(item, "published")
                          }
                        >
                          Publish
                        </button>

                        <button
                          className="admin-cms-button secondary"
                          type="button"
                          onClick={() =>
                            void setStatus(item, "draft")
                          }
                        >
                          Draft
                        </button>

                        <button
                          className="admin-cms-button danger"
                          type="button"
                          onClick={() => void removeItem(item)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}

              {!items.length && (
                <tr>
                  <td colSpan={5}>No items yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
