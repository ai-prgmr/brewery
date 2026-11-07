import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollAnimator } from "@/components/scroll-animator";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://braumitraa.com"),
  title: "Brau Mitraa — Your Brewing Friends | Turnkey Brewery Setups",
  description:
    "Brau (German: Brew) × Mitraa (Sanskrit: Friend). We are your dedicated brewing companions, pairing German master engineering with precision Indian fabrication to set up the exact brewery of your needs.",
  keywords: [
    "Brau Mitraa",
    "brewing friends",
    "brewery setup",
    "turnkey brewery setup",
    "craft beer systems",
    "commercial brewing",
    "fermentation tanks",
    "German brewing engineering",
    "microbrewery solutions",
    "beer catalogue",
    "mead",
    "braggot",
  ],
  authors: [{ name: "Brau Mitraa" }],
  openGraph: {
    title: "Brau Mitraa — Your Brewing Friends | Turnkey Brewery Setups",
    description:
      "Brau (German: Brew) × Mitraa (Sanskrit: Friend). Setting up custom German-engineered turnkey breweries in India and worldwide.",
    url: "https://braumitraa.com",
    siteName: "Brau Mitraa",
    images: [
      {
        url: "/screen.png",
        width: 1200,
        height: 630,
        alt: "Brau Mitraa Digital Flagship Brewery & Equipment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brau Mitraa — Brewing Possibilities Together",
    description:
      "Global brewing systems engineered with German precision and Indian manufacturing excellence.",
    images: ["/screen.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Brau Mitraa",
    url: "https://braumitraa.com",
    logo: "https://braumitraa.com/logo.svg",
    description:
      "Global brewing systems crafted with German precision and Indian manufacturing excellence.",
    slogan: "Your Brewing Friends — Setting Up The Brewery Of Your Needs",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Customer Support & Sales",
        email: "contact@braumitraa.com",
      },
    ],
    knowsAbout: [
      "Brewery Engineering",
      "Turnkey Brewpubs",
      "Commercial Fermentation Systems",
      "Beer Styles & Recipe Formulation",
      "CIP & Brewhouse Automation",
    ],
  };

  return (
    <html
      lang="en"
      className={cn(
        "h-full scroll-smooth antialiased",
        plusJakarta.variable,
        cormorant.variable,
        caveat.variable
      )}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-[#1A1A18] selection:bg-[#D49B44]/20 selection:text-[#1A1A18]">
        <ScrollAnimator />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
