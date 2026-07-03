import { impactStats } from "@/data/site";

export function Stats() {
  return (
    <div className="grid stats">
      {impactStats.map((stat) => (
        <div className="card stat" key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
