const stats = [
  ["£20k", "Reward appeal"],
  ["17", "Years loved"],
  ["4", "Core pillars"],
  ["Every Day", "Lives we build for"],
];

export function V6Stats() {
  return (
    <section className="v6-stats">
      {stats.map(([value, label]) => (
        <div className="v6-stat" key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </section>
  );
}
