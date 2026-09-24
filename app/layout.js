import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "./components/LanguageProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { SITE_URL, PHONE_DISPLAY, WHATSAPP_NUMBER, IMAGES, BUSINESS_HOURS } from "./lib/site";

const TITLE = "Shivu Events Madhugiri | Flowers · Photography · Sound · Utensils";
const DESCRIPTION =
  "Shivu Events Madhugiri — flower decoration, photography, sound systems and event utensil rental for weddings and functions in Madhugiri, Karnataka.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "wedding decoration Madhugiri",
    "event management Madhugiri",
    "flower decoration Karnataka",
    "wedding photography Madhugiri",
    "sound system rental Madhugiri",
    "Shivu Events",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Shivu Events Madhugiri",
    images: [{ url: IMAGES.hero, width: 1600, height: 900 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGES.hero],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Shivu Events Madhugiri",
  image: IMAGES.hero,
  telephone: `+${WHATSAPP_NUMBER}`,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Madhugiri",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  url: SITE_URL,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: `${String(BUSINESS_HOURS.openHour).padStart(2, "0")}:00`,
    closes: `${String(BUSINESS_HOURS.closeHour).padStart(2, "0")}:00`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-body">
        <LanguageProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
