import Link from "next/link";
import { supabaseAdmin } from "@/lib/adminAuth";

export const dynamic = "force-dynamic";

async function getNews() {
  const { data, error } = await supabaseAdmin
    .from("cms_news")
    .select("*")
    .eq("status", "published")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Could not load news:", error.message);
    return [];
  }

  return data ?? [];
}

export default async function NewsPage() {
  const news = await getNews();

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">Latest Updates</span>
          <h1>Foundation News</h1>

          <p className="section-copy">
            Stories, events, campaigns and updates from CB&apos;S WORLD
            Foundation Charity.
          </p>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          {news.length > 0 ? (
            <div className="grid cards-grid">
              {news.map((item) => (
                <article className="news-card" key={item.id}>
                  {item.image_url && (
                    <img src={item.image_url} alt={item.title || "News update"} />
                  )}

                  <div className="news-card-body">
                    <span className="kicker">
                      {item.category || "News"}
                    </span>

                    <h2>{item.title}</h2>

                    <p>{item.summary || item.excerpt}</p>

                    {item.slug && (
                      <Link href={`/news/${item.slug}`}>
                        Read more →
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="legacy-wall-empty-card">
              <h3>No news published yet.</h3>
              <p>Check back soon for the latest updates.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}