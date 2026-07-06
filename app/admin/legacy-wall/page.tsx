import { supabase } from "@/lib/supabase";

type LegacyMessage = {
  id: string;
  name: string;
  email: string;
  message: string;
  approved: boolean;
  created_at: string;
};

async function getMessages(): Promise<LegacyMessage[]> {
  const { data, error } = await supabase
    .from("legacy_messages")
    .select("id,name,email,message,approved,created_at")
    .order("created_at", { ascending: false })
    .limit(100);

  if (error) {
    console.error("Admin legacy wall fetch error", error);
    return [];
  }

  return data ?? [];
}

export default async function AdminLegacyWallPage() {
  const messages = await getMessages();

  return (
    <main className="admin-page">
      <div className="container">
        <p className="eyebrow">Admin</p>
        <h1>Legacy Wall Messages</h1>
        <p className="section-copy">First version: review submitted messages. Approval buttons come in the next admin sprint.</p>

        <div className="admin-list">
          {messages.map((item) => (
            <article className="admin-card" key={item.id}>
              <div>
                <strong>{item.name}</strong>
                <p className="muted">{item.email}</p>
                <p>{item.message}</p>
              </div>
              <span className={item.approved ? "status approved" : "status pending"}>
                {item.approved ? "Approved" : "Pending"}
              </span>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
