import { anonymousFeedback } from "@/data/media";
import styles from "./feedback.module.css";

export default function FeedbackPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <span className={styles.kicker}>Community Voices</span>

          <h1 className={styles.title}>
            Every voice helps shape our future.
          </h1>

          <p className={styles.lead}>
            The work of CB'S WORLD Foundation is built on listening to families,
            young people and our community. Every message, piece of feedback and
            shared experience helps us continue Claudyo's legacy with compassion,
            purpose and hope.
          </p>
        </div>
      </section>

      <section className={styles.grid}>
        {anonymousFeedback.map((item) => (
          <article className={styles.card} key={item.quote}>
            <p className={styles.quote}>“{item.quote}”</p>

            <span className={styles.label}>
              {item.label}
            </span>
          </article>
        ))}
      </section>

      <section className={styles.notice}>
        <h2>Your privacy matters.</h2>

        <p>
          Every testimonial displayed here has been anonymised. Names,
          locations and identifying details are removed before publication to
          protect the privacy of everyone who shares their experience.
        </p>

        <p>
          Thank you to every family, volunteer, supporter and young person who
          continues to believe in the mission of CB'S WORLD Foundation Charity.
          Your encouragement helps us create lasting change.
        </p>
      </section>
    </main>
  );
}