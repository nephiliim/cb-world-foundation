export function AdminStatCard({ label, value, note }: { label: string; value: string; note: string }) {
  return <div className="admin-v2-card"><span>{label}</span><strong>{value}</strong><p>{note}</p></div>;
}

export function AdminActionCard({ title, body, action }: { title: string; body: string; action: string }) {
  return <div className="admin-v2-action"><h3>{title}</h3><p>{body}</p><button type="button">{action}</button></div>;
}
