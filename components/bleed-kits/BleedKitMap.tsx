"use client";

type BleedKit = {
  id: string;
  name: string;
  address: string;
  area?: string | null;
  status?: string | null;
  available_hours?: string | null;
  notes?: string | null;
  latitude?: number | null;
  longitude?: number | null;
};

export function BleedKitMap({ kits }: { kits: BleedKit[] }) {
  return (
    <div className="bleed-kit-layout">
      <div className="bleed-kit-map-card">
        <div className="bleed-kit-map-placeholder">
          <span>🩸</span>
          <h2>Bleed Kit Map</h2>
          <p>Interactive map view ready. Add kit locations in the admin dashboard.</p>
        </div>
      </div>

      <div className="bleed-kit-list">
        <h2>Known kit locations</h2>
        {kits.length === 0 ? (
          <p className="section-copy">No bleed kit locations have been published yet.</p>
        ) : (
          kits.map((kit) => (
            <article className="bleed-kit-card" key={kit.id}>
              <span>{kit.area || "Community location"}</span>
              <h3>{kit.name}</h3>
              <p>{kit.address}</p>
              <small>{kit.available_hours || "Availability to be confirmed"}</small>
              {kit.notes && <p>{kit.notes}</p>}
            </article>
          ))
        )}
      </div>
    </div>
  );
}
