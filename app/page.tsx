import Link from "next/link";
import {
  siteConfig,
  heroImages,
  missionCards,
  galleryImages,
  newsPosts,
} from "@/data/site";
import { supabaseAdmin } from "@/lib/adminAuth";
import { V6Hero } from "@/components/home/V6Hero";
import { V6Stats } from "@/components/home/V6Stats";
import { V6Mission } from "@/components/home/V6Mission";
import { V6Pillars } from "@/components/home/V6Pillars";
import { V6Justice } from "@/components/home/V6Justice";
import { V6Cards } from "@/components/home/V6Cards";
import { V6Gallery } from "@/components/home/V6Gallery";

export const dynamic = "force-dynamic";

type HomepageSettings = {
  homepage_hero_title: string;
  homepage_hero_text: string;
  homepage_primary_button_text: string;
  homepage_primary_button_link: string;
  homepage_secondary_button_text: string;
  homepage_secondary_button_link: string;
  homepage_mission_title: string;
  homepage_mission_text: string;
  homepage_cta_title: string;
  homepage_cta_text: string;
};

const defaults: HomepageSettings = {
  homepage_hero_title: "Long Live His Legacy",
  homepage_hero_text:
    "Honouring Claudyo Jauad Lafayette through love, justice, awareness and positive community action.",
  homepage_primary_button_text: "Donate Now",
  homepage_primary_button_link: "/donate",
  homepage_secondary_button_text: "Get Involved",
  homepage_secondary_button_link: "/get-involved",
  homepage_mission_title:
    "Building safer communities. Creating brighter futures.",
  homepage_mission_text:
    "Through education, awareness, justice and real support, CB'S WORLD Foundation is working every day to turn pain into purpose and protect young lives.",
  homepage_cta_title:
    "Help keep Claudyo's legacy moving forward.",
  homepage_cta_text:
    "Share the appeal, support the foundation, leave a message, or get involved with future community work.",
};

async function getHomepageSettings(): Promise<HomepageSettings> {
  const { data, error } = await supabaseAdmin
    .from("cms_settings")
    .select("title, value")
    .eq("category", "Homepage")
    .eq("status", "published");

  if (error || !data) {
    return defaults;
  }

  const settings = { ...defaults };

  for (const row of data) {
    if (row.title in settings) {
      settings[row.title as keyof HomepageSettings] =
        typeof row.value === "string" ? row.value : "";
    }
  }

  return settings;
}

export default async function HomePage() {
  const settings = await getHomepageSettings();

  const homepageSiteConfig = {
    ...siteConfig,
    homepageHeroTitle: settings.homepage_hero_title,
    homepageHeroText: settings.homepage_hero_text,
    homepagePrimaryButtonText:
      settings.homepage_primary_button_text,
    homepagePrimaryButtonLink:
      settings.homepage_primary_button_link,
    homepageSecondaryButtonText:
      settings.homepage_secondary_button_text,
    homepageSecondaryButtonLink:
      settings.homepage_secondary_button_link,
  };

  return (
    <main className="v6-home">
      <V6Hero
        siteConfig={homepageSiteConfig}
        heroImages={heroImages}
      />

      <V6Stats />

      <V6Mission
        heroImages={heroImages}
        title={settings.homepage_mission_title}
        text={settings.homepage_mission_text}
      />

      <V6Pillars cards={missionCards} />
      <V6Justice siteConfig={siteConfig} />
      <V6Cards />

      <V6Gallery
        images={galleryImages.slice(0, 4)}
        news={newsPosts.slice(0, 3)}
      />

      <section className="v6-final-cta">
        <span className="v6-kicker">Join the mission</span>

        <h2>{settings.homepage_cta_title}</h2>

        <p>{settings.homepage_cta_text}</p>

        <div className="v6-actions v6-actions-center">
          <Link
            className="v6-btn v6-btn-primary"
            href={settings.homepage_primary_button_link}
          >
            {settings.homepage_primary_button_text}
          </Link>

          <Link
            className="v6-btn v6-btn-ghost"
            href={settings.homepage_secondary_button_link}
          >
            {settings.homepage_secondary_button_text}
          </Link>
        </div>
      </section>
    </main>
  );
}