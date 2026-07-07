"use client";

import { useEffect, useMemo, useState } from "react";
import { AdminCmsStyles } from "./AdminCmsStyles";

type Field = { name: string; label: string; type?: "text" | "textarea" | "select" | "url" | "date"; options?: string[]; placeholder?: string };
type Row = Record<string, any>;

type CmsManagerProps = {
  module: string;
  title: string;
  description: string;
  fields: Field[];
  previewField?: string;
};

export function CmsManager({ module, title, description, fields, previewField = "image_url" }: CmsManagerProps) {
  const empty = useMemo(() => Object.fromEntries(fields.map((f) => [f.name, f.type === "select" ? f.options?.[0] ?? "draft" : ""])), [fields]);
  const [adminKey, setAdminKey] = useState("");
  const [items, setItems] = useState<Row[]>([]);
  const [form, setForm] = useState<Row>(empty);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cb_admin_key") || "";
    setAdminKey(saved);
  }, []);

  useEffect(() => {
    if (adminKey) void loadItems(adminKey);
  }, [adminKey]);

  async function request(path: string, options: RequestInit = {}) {
    const res = await fetch(path, {
      ...options,
      headers: { "content-type": "application/json", "x-admin-key": adminKey, ...(options.headers || {}) },
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(json.error || "Request failed");
    return json;
  }

  async function loadItems(key = adminKey) {
    if (!key) return;
    setLoading(true); setError("");
    try {
      const res = await fetch(`/api/admin/${module}`, { headers: { "x-admin-key": key } });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Could not load items");
      setItems(json.data || []);
    } catch (err: any) { setError(err.message); }
    finally { setLoading(false); }
  }

  async function saveKey() {
    localStorage.setItem("cb_admin_key", adminKey);
    await loadItems(adminKey);
  }

  async function createItem(event: React.FormEvent) {
    event.preventDefault(); setMessage(""); setError("");
    try {
      await request(`/api/admin/${module}`, { method: "POST", body: JSON.stringify(form) });
      setForm(empty); setMessage("Saved successfully."); await loadItems();
    } catch (err: any) { setError(err.message); }
  }

  async function setStatus(item: Row, status: string) {
    setError(""); setMessage("");
    try { await request(`/api/admin/${module}`, { method: "PATCH", body: JSON.stringify({ id: item.id, status }) }); setMessage("Updated."); await loadItems(); }
    catch (err: any) { setError(err.message); }
  }

  async function removeItem(item: Row) {
    if (!confirm("Delete this item?")) return;
    try { await request(`/api/admin/${module}`, { method: "DELETE", body: JSON.stringify({ id: item.id }) }); setMessage("Deleted."); await loadItems(); }
    catch (err: any) { setError(err.message); }
  }

  return (
    <>
      <AdminCmsStyles />
      <section className="admin-cms-card" style={{ marginBottom: 18 }}>
        <h2 style={{ marginTop: 0 }}>{title}</h2>
        <p style={{ color: "#b7cdec" }}>{description}</p>
        <div className="admin-cms-form two">
          <label>Admin API key
            <input value={adminKey} onChange={(e) => setAdminKey(e.target.value)} placeholder="Paste ADMIN_API_KEY" type="password" />
          </label>
          <div style={{ display: "flex", alignItems: "end", gap: 10 }}>
            <button className="admin-cms-button" type="button" onClick={saveKey}>Unlock CMS</button>
            <button className="admin-cms-button secondary" type="button" onClick={() => loadItems()}>Refresh</button>
          </div>
        </div>
        {error && <div className="admin-cms-error">{error}</div>}
        {message && <div className="admin-cms-success">{message}</div>}
      </section>

      <section className="admin-cms-card" style={{ marginBottom: 18 }}>
        <h3 style={{ marginTop: 0 }}>Add new</h3>
        <form className="admin-cms-form two" onSubmit={createItem}>
          {fields.map((field) => (
            <label key={field.name} style={field.type === "textarea" ? { gridColumn: "1 / -1" } : undefined}>
              {field.label}
              {field.type === "textarea" ? (
                <textarea value={form[field.name] || ""} placeholder={field.placeholder} onChange={(e) => setForm({ ...form, [field.name]: e.target.value })} />
              ) : field.type === "select" ? (
                <select value={form[field.name] || ""} onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}>
                  {(field.options || []).map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
              ) : (
                <input type={field.type || "text"} value={form[field.name] || ""} placeholder={field.placeholder} onChange={(e) => setForm({ ...form, [field.name]: e.target.value })} />
              )}
            </label>
          ))}
          <button className="admin-cms-button" type="submit">Publish / Save</button>
        </form>
      </section>

      <section className="admin-cms-card">
        <h3 style={{ marginTop: 0 }}>Saved items {loading ? "— loading..." : ""}</h3>
        <div style={{ overflowX: "auto" }}>
          <table className="admin-cms-table">
            <thead><tr><th>Preview</th><th>Title</th><th>Status</th><th>Created</th><th>Actions</th></tr></thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item[previewField] ? <img className="admin-cms-thumb" src={item[previewField]} alt="" /> : "—"}</td>
                  <td><strong>{item.title || item.name || item.quote || "Untitled"}</strong><br/><span style={{ color: "#b7cdec" }}>{item.category || item.date || item.relationship || ""}</span></td>
                  <td><span className="admin-cms-status">{item.status || "draft"}</span></td>
                  <td>{item.created_at ? new Date(item.created_at).toLocaleDateString() : "—"}</td>
                  <td><div className="admin-cms-actions"><button className="admin-cms-button secondary" onClick={() => setStatus(item, "published")}>Publish</button><button className="admin-cms-button secondary" onClick={() => setStatus(item, "draft")}>Draft</button><button className="admin-cms-button danger" onClick={() => removeItem(item)}>Delete</button></div></td>
                </tr>
              ))}
              {!items.length && <tr><td colSpan={5}>No items yet.</td></tr>}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
