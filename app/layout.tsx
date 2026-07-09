import type { Metadata } from "next";
import "./globals.css";
import "./v6-homepage.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/site";
import "./event-hub.css";
import "./admin/command-centre.css";
import "@/components/admin/AdminUploadStyles.css"; 

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
