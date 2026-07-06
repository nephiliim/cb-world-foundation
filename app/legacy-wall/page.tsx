import { LegacyWallForm } from "@/components/LegacyWallForm";
import { supabase } from "@/lib/supabase";

export const metadata = {
  title: "Legacy Wall | CB's World Foundation",
  description: "Leave a respectful message in memory of Claudyo.",
};

type LegacyMessage = {
  id: string;
  name: string;
  message: string;
  created_at: string;
};

async function getApprovedMessages(): Promise<LegacyMessage[]> {
  const { data, error } = await supabase
    .from("legacy_messages")
    .select("id,name,message,created_at")
    .eq("approved", true)
    .order("created_at", { ascending: false })
    .limit(60);

  if (error) {
    console.error("Legacy wall fetch error", error);
    return [];
  }

  return data ?? [];
}

export default async function LegacyWallPage() {
  const messages = await getApprovedMessages();

  return (
    <main>
      <section className="page-hero legacy-wall-hero">
        <div className="container narrow">
          <p className="eyebrow">A living tribute</p>
          <h1>Legacy Wall</h1>
          <p>
            Leave a respectful message, memory or word of support in honour of Claudyo. Messages are reviewed before appearing publicly.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-column legacy-wall-layout">
          <div>
            <p className="eyebrow">Leave a message</p>
            <h2>A space for love, remembrance and support</h2>
            <p className="section-copy">
              This wall is for family, friends and supporters to share kind words and keep Claudyo's legacy alive with respect and care.
            </p>
            <LegacyWallForm />
          </div>

          <div className="legacy-message-grid">
            {messages.length === 0 ? (
              <div className="legacy-message-card">
                <p>No public messages yet. Be the first to leave a respectful tribute.</p>
              </div>
            ) : (
              messages.map((item) => (
                <article className="legacy-message-card" key={item.id}>
                  <p>“{item.message}”</p>
                  <strong>{item.name}</strong>
                </article>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
