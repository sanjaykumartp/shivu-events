import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "./components/LanguageProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SocialBar from "./components/SocialBar";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata = {
  title: "Shivu Events Madhugiri | Flowers · Photography · Sound · Utensils",
  description:
    "Shivu Events Madhugiri — flower decoration, photography, sound systems and event utensil rental for weddings and functions in Madhugiri.",
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
      </head>
      <body className="font-body">
        <LanguageProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <SocialBar />
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
