import type { Metadata } from "next";
import { newsPosts } from "@/data/site";

export const metadata: Metadata = { title: "News" };

export default function NewsPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">News</span>
        <h1 className="section-title">Updates from CB's World Foundation.</h1>
        <p className="section-copy">Use this section for launch updates, community stories, event recaps, and volunteer callouts.</p>
        <div className="grid news-grid">
          {newsPosts.map((post) => (
            <article className="card" key={post.slug}>
              <span className="eyebrow">{new Date(post.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</span>
              <h2>{post.title}</h2>
              <p className="section-copy">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
