import { anonymousFeedback } from "@/data/media";
import styles from "./feedback.module.css";

export default function FeedbackPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <span className={styles.kicker}>Anonymous feedback</span>
          <h1 className={styles.title}>Words from people touched by the work.</h1>
          <p className={styles.lead}>
            These highlights are shared without names or personal details, keeping confidentiality protected while showing
            the impact of CB’S WORLD Foundation Charity’s awareness work.
          </p>
        </div>
      </section>

      <section className={styles.grid}>
        {anonymousFeedback.map((item) => (
          <article className={styles.card} key={item.quote}>
            <p className={styles.quote}>“{item.quote}”</p>
            <span className={styles.label}>{item.label}</span>
          </article>
        ))}
      </section>

      <div className={styles.notice}>
        <p>
          All feedback on this page is anonymised. Names, private details and identifying information should be removed
          before anything is published publicly.
        </p>
      </div>
    </main>
  );
}
