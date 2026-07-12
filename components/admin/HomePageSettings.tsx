"use client";

import { FormEvent, useEffect, useState } from "react";
import { AdminCmsStyles } from "./AdminCmsStyles";

type SettingRow = {
  id: string | number;
  title: string;
  value: string;
  category?: string;
  status?: string;
};

type HomepageForm = {
  homepage_hero_title: string;
  homepage_hero_text: string;
  homepage_primary_button_text: string;
  homepage_primary_button_link: string;
  homepage_secondary_button_text: string;
  homepage_secondary_button_link: string;
  homepage_mission_title: string;
  homepage_mission_text: string;
  homepage_cta_title: string;
  homepage_cta_text: string;
};

const defaultSettings: HomepageForm = {
  homepage_hero_title: "Long Live His Legacy",
  homepage_hero_text:
    "Honouring Claudyo Jauad Lafayette through love, justice, awareness and positive community action.",
  homepage_primary_button_text: "Donate Now",
  homepage_primary_button_link: "/donate",
  homepage_secondary_button_text: "Get Involved",
  homepage_secondary_button_link: "/get-involved",
  homepage_mission_title:
    "Building safer communities. Creating brighter futures.",
  homepage_mission_text:
    "Through education, awareness, justice and real support, CB'S WORLD Foundation is working every day to turn pain into purpose and protect young lives.",
  homepage_cta_title:
    "Help keep Claudyo's legacy moving forward.",
  homepage_cta_text:
    "Share the appeal, support the foundation, leave a message, or get involved with future community work.",
};

const fieldLabels: Record<keyof HomepageForm, string> = {
  homepage_hero_title: "Hero title",
  homepage_hero_text: "Hero text",
  homepage_primary_button_text: "Primary button text",
  homepage_primary_button_link: "Primary button link",
  homepage_secondary_button_text: "Secondary button text",
  homepage_secondary_button_link: "Secondary button link",
  homepage_mission_title: "Mission heading",
  homepage_mission_text: "Mission text",
  homepage_cta_title: "Final call-to-action heading",
  homepage_cta_text: "Final call-to-action text",
};

export function HomePageSettings() {
  const [adminKey, setAdminKey] = useState("");
  const [form, setForm] = useState<HomepageForm>(defaultSettings);
  const [rows, setRows] = useState<SettingRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setAdminKey(localStorage.getItem("cb_admin_key") || "");
  }, []);

  useEffect(() => {
    if (adminKey) {
      void loadSettings(adminKey);
    }
  }, [adminKey]);

  async function loadSettings(key = adminKey) {
    if (!key) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/settings", {
        headers: {
          "x-admin-key": key,
        },
        cache: "no-store",
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Could not load settings.");
      }

      const savedRows = (result.data || []) as SettingRow[];
      setRows(savedRows);

      setForm((current) => {
        const updated = { ...current };

        for (const row of savedRows) {
          if (row.title in updated) {
            updated[row.title as keyof HomepageForm] = row.value || "";
          }
        }

        return updated;
      });
    } catch (loadError) {
      setError(
        loadError instanceof Error
          ? loadError.message
          : "Could not load settings."
      );
    } finally {
      setLoading(false);
    }
  }

  async function unlockCms() {
    localStorage.setItem("cb_admin_key", adminKey);
    setMessage("");
    setError("");

    await loadSettings(adminKey);
    setMessage("Homepage settings unlocked.");
  }

  async function saveSetting(
    title: keyof HomepageForm,
    value: string
  ) {
    const existing = rows.find((row) => row.title === title);

    const response = await fetch("/api/admin/settings", {
      method: existing ? "PATCH" : "POST",
      headers: {
        "Content-Type": "application/json",
        "x-admin-key": adminKey,
      },
      body: JSON.stringify(
        existing
          ? {
              id: existing.id,
              title,
              value,
              category: "Homepage",
              status: "published",
            }
          : {
              title,
              value,
              category: "Homepage",
              status: "published",
            }
      ),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.error || `Could not save ${fieldLabels[title]}.`
      );
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSaving(true);
    setMessage("");
    setError("");

    try {
      const entries = Object.entries(form) as [
        keyof HomepageForm,
        string
      ][];

      for (const [title, value] of entries) {
        await saveSetting(title, value);
      }

      await loadSettings();
      setMessage("Homepage settings saved successfully.");
    } catch (saveError) {
      setError(
        saveError instanceof Error
          ? saveError.message
          : "Could not save homepage settings."
      );
    } finally {
      setSaving(false);
    }
  }

  function updateField(name: keyof HomepageForm, value: string) {
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  return (
    <>
      <AdminCmsStyles />

      <div>
        <section className="admin-cms-card" style={{ marginBottom: 18 }}>
          <h2 style={{ marginTop: 0 }}>Homepage editor</h2>

          <p style={{ color: "#b7cdec" }}>
            Update the main homepage wording and buttons without editing code.
          </p>

          <div className="admin-cms-form two">
            <label>
              Admin API key
              <input
                type="password"
                value={adminKey}
                onChange={(event) => setAdminKey(event.target.value)}
                placeholder="Paste ADMIN_API_KEY"
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
                onClick={() => void unlockCms()}
              >
                Unlock Homepage CMS
              </button>

              <button
                className="admin-cms-button secondary"
                type="button"
                onClick={() => void loadSettings()}
              >
                Refresh
              </button>
            </div>
          </div>

          {loading && (
            <p style={{ color: "#b7cdec" }}>Loading settings...</p>
          )}

          {error && <div className="admin-cms-error">{error}</div>}
          {message && <div className="admin-cms-success">{message}</div>}
        </section>

        <section className="admin-cms-card">
          <form className="admin-cms-form two" onSubmit={handleSubmit}>
            <label style={{ gridColumn: "1 / -1" }}>
              Hero title
              <input
                value={form.homepage_hero_title}
                onChange={(event) =>
                  updateField("homepage_hero_title", event.target.value)
                }
              />
            </label>

            <label style={{ gridColumn: "1 / -1" }}>
              Hero text
              <textarea
                value={form.homepage_hero_text}
                onChange={(event) =>
                  updateField("homepage_hero_text", event.target.value)
                }
              />
            </label>

            <label>
              Primary button text
              <input
                value={form.homepage_primary_button_text}
                onChange={(event) =>
                  updateField(
                    "homepage_primary_button_text",
                    event.target.value
                  )
                }
              />
            </label>

            <label>
              Primary button link
              <input
                value={form.homepage_primary_button_link}
                onChange={(event) =>
                  updateField(
                    "homepage_primary_button_link",
                    event.target.value
                  )
                }
              />
            </label>

            <label>
              Secondary button text
              <input
                value={form.homepage_secondary_button_text}
                onChange={(event) =>
                  updateField(
                    "homepage_secondary_button_text",
                    event.target.value
                  )
                }
              />
            </label>

            <label>
              Secondary button link
              <input
                value={form.homepage_secondary_button_link}
                onChange={(event) =>
                  updateField(
                    "homepage_secondary_button_link",
                    event.target.value
                  )
                }
              />
            </label>

            <label style={{ gridColumn: "1 / -1" }}>
              Mission heading
              <input
                value={form.homepage_mission_title}
                onChange={(event) =>
                  updateField("homepage_mission_title", event.target.value)
                }
              />
            </label>

            <label style={{ gridColumn: "1 / -1" }}>
              Mission text
              <textarea
                value={form.homepage_mission_text}
                onChange={(event) =>
                  updateField("homepage_mission_text", event.target.value)
                }
              />
            </label>

            <label style={{ gridColumn: "1 / -1" }}>
              Final call-to-action heading
              <input
                value={form.homepage_cta_title}
                onChange={(event) =>
                  updateField("homepage_cta_title", event.target.value)
                }
              />
            </label>

            <label style={{ gridColumn: "1 / -1" }}>
              Final call-to-action text
              <textarea
                value={form.homepage_cta_text}
                onChange={(event) =>
                  updateField("homepage_cta_text", event.target.value)
                }
              />
            </label>

            <button
              className="admin-cms-button"
              type="submit"
              disabled={saving}
            >
              {saving ? "Saving Homepage..." : "Save Homepage"}
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
