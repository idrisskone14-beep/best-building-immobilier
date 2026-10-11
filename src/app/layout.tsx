import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { BuildProgress } from "@/components/BuildProgress";
import { JsonLd } from "@/components/JsonLd";
import { company, env } from "@/lib/site";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(env.siteUrl),
  title: {
    default: `${company.name} — Promotion immobilière haut standing en Côte d’Ivoire`,
    template: `%s | ${company.name}`,
  },
  description:
    "BEST BUILDING IMMOBILIER (2BI SARL) : promotion immobilière, aménagement foncier, architecture et construction. Découvrez BEST BUILDING LUXURY, 27 villas duplex haut standing à Grand-Bassam.",
  applicationName: company.name,
  authors: [{ name: company.name }],
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: "website",
    locale: "fr_CI",
    siteName: company.name,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: company.name }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0f3450",
  width: "device-width",
  initialScale: 1,
};

const organization = {
  "@context": "https://schema.org",
  "@type": ["RealEstateAgent", "Organization"],
  "@id": `${env.siteUrl}/#organization`,
  name: company.name,
  legalName: company.name,
  alternateName: company.acronym,
  url: env.siteUrl,
  logo: `${env.siteUrl}/brand/logo-2bi.png`,
  image: `${env.siteUrl}/og.jpg`,
  foundingDate: company.foundedISO,
  email: company.email,
  telephone: company.phones.map((p) => p.tel),
  description:
    "Société ivoirienne de promotion immobilière, d’aménagement foncier, d’architecture et de construction, basée à Abidjan.",
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    addressCountry: "CI",
  },
  areaServed: { "@type": "Country", name: "Côte d’Ivoire" },
  identifier: { "@type": "PropertyValue", name: "RCCM", value: company.rccm },
  knowsAbout: ["Promotion immobilière", "Aménagement foncier", "Architecture", "Construction", "Gestion immobilière"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable}`}>
      <body>
        <noscript>
          <style>{`[style*="opacity: 0"]{opacity:1!important;transform:none!important}[style*="clip-path"]{clip-path:none!important}`}</style>
        </noscript>
        <a
          href="#contenu"
          className="fixed left-4 top-4 z-[100] -translate-y-24 bg-white px-5 py-3 text-sm font-semibold text-navy shadow-lg focus:translate-y-0"
        >
          Aller au contenu
        </a>
        <Providers>
          <Header />
          <main id="contenu" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
          <BackToTop />
          <BuildProgress />
        </Providers>
        <JsonLd data={organization} />
      </body>
    </html>
  );
}
