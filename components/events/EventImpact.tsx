import type { CmsEvent } from "@/lib/events";

export function EventImpact({ event }: { event: CmsEvent }) {
  const stats = [
    ["Young people reached", event.impact_young_people || 0],
    ["Families supported", event.impact_families || 0],
    ["Volunteers involved", event.impact_volunteers || 0],
    ["Bleed kits supported", event.bleed_kits_supported || 0],
  ];

  return (
    <div className="event-impact-grid">
      {stats.map(([label, value]) => (
        <div className="event-impact-card" key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
