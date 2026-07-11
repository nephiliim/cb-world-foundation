import type { Metadata } from "next";
import "./globals.css";
import "./v6-homepage.css";
import "./event-hub.css";
import "./admin/command-centre.css";
import "./admin/media-library.css";
import "@/components/admin/AdminUploadStyles.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/site";

const siteUrl = "https://cb-world-foundation-eight.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: `${siteConfig.name} | Long Live His Legacy`,
    template: `%s | ${siteConfig.name}`,
  },

  description:
    "CB'S WORLD Foundation Charity honours Claudyo Jauad Lafayette by supporting families, educating young people, raising awareness of knife crime and helping build safer communities.",

  keywords: [
    "CB'S WORLD Foundation Charity",
    "Claudyo Jauad Lafayette",
    "Justice for Claudyo",
    "knife crime awareness",
    "youth violence prevention",
    "community charity",
    "family support",
    "Camden charity",
    "London youth charity",
  ],

  authors: [
    {
      name: "CB'S WORLD Foundation Charity",
    },
  ],

  creator: "CB'S WORLD Foundation Charity",
  publisher: "CB'S WORLD Foundation Charity",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Long Live His Legacy`,
    description:
      "Honouring Claudyo Jauad Lafayette through love, justice, education and positive community action.",
    images: [
      {
        url: "/images/logo/cb-world-logo.jpg",
        width: 1200,
        height: 630,
        alt: "CB'S WORLD Foundation Charity",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Long Live His Legacy`,
    description:
      "Honouring Claudyo Jauad Lafayette through love, justice, education and positive community action.",
    images: ["/images/logo/cb-world-logo.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Charity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}