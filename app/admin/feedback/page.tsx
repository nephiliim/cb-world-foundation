import { AdminShell } from "@/components/admin/AdminShell";
import { feedbackHighlights } from "@/data/admin";

export default function AdminFeedbackPage() {
  return (
    <AdminShell title="Anonymous Feedback" subtitle="Publish supportive quotes without names or personal details.">
      <div className="admin-v2-list">
        {feedbackHighlights.map((item) => <article key={item.quote}><p>“{item.quote}”</p><span>{item.source}</span></article>)}
      </div>
      <div className="admin-v2-panel"><h2>Privacy rule</h2><p>Never publish names, phone numbers, private family details, addresses, or anything that identifies the person unless they give clear written permission.</p></div>
    </AdminShell>
  );
}
