const stats = [
  ["Reward appeal", "£20k"],
  ["Years loved", "17"],
  ["Core pillars", "4"],
  ["Legacy-led mission", "Every Day"],
];

export function V6Stats() {
  return (
    <section className="v6-stats" aria-label="Foundation highlights">
      {stats.map(([label, value]) => (
        <div className="v6-stat" key={label}>
          <span>{label}</span>
          <strong>{value}</strong>
        </div>
      ))}
    </section>
  );
}
