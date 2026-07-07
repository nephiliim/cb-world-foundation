import { BleedKitMap } from "@/components/bleed-kits/BleedKitMap";

async function getBleedKits() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
  try {
    const res = await fetch(`${baseUrl}/api/bleed-kits`, { cache: "no-store" });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function BleedControlKitsPage() {
  const kits = await getBleedKits();

  return (
    <main className="bleed-kits-page">
      <section className="page-hero bleed-kits-hero">
        <div className="container">
          <span className="kicker">Bleed Control Kits</span>
          <h1>Find a bleed control kit near you.</h1>
          <p className="section-copy">
            Every second counts. CB’S WORLD Foundation Charity supports awareness, education and access to life-saving bleed control kits in local communities.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <BleedKitMap kits={kits} />
        </div>
      </section>

      <section className="section light">
        <div className="container split">
          <div>
            <span className="kicker">Why it matters</span>
            <h2 className="section-title">Bleed kits can help save lives before emergency services arrive.</h2>
            <p className="section-copy">
              Severe bleeding can become life-threatening within minutes. Public access bleed control kits provide emergency equipment that can be used by trained responders or members of the public while waiting for paramedics.
            </p>
          </div>
          <div className="card">
            <h3>Request a kit</h3>
            <p>If your school, business, sports club or community space needs a bleed control kit, contact the foundation.</p>
            <a className="button primary" href="/contact">Request support</a>
          </div>
        </div>
      </section>
    </main>
  );
}
