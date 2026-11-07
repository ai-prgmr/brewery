import type { Metadata } from "next";
import Link from "next/link";
import {
  IconCpu,
  IconFlame,
  IconShieldCheck,
  IconGauge,
  IconArrowRight,
  IconBuildingFactory2,
} from "@tabler/icons-react";
import { TechnologyContent } from "@/components/technology-content";

export const metadata: Metadata = {
  title: "Brewery Technology & Engineering | Braupagode™ Systems — Brau Mitraa",
  description:
    "Explore Brau Mitraa's German brewery technology: the patented Braupagode™ vertical brewhouse, 75% energy-saving vapor recompression, and full 200,000L plant layouts.",
  keywords: [
    "Braupagode",
    "brewery technology",
    "thermal vapor recompression",
    "two-vessel vertical brewhouse",
    "German brewing engineering",
    "microbrewery equipment 1000L",
    "annual production 200000 liters",
    "commercial brewery systems",
    "mash lauter tun specifications",
    "wort chiller 100 kW",
  ],
  openGraph: {
    title: "Brewery Technology & Engineering | Braupagode™ Systems — Brau Mitraa",
    description:
      "Patented vertical stacked brewhouse engineering, 75% thermal vapor recompression energy reduction, and turnkey 200,000L commercial brewery plant scope.",
    url: "https://braumitraa.com/technology",
    siteName: "Brau Mitraa",
    images: [
      {
        url: "/brewery/images/solution-brewery.jpg",
        width: 1200,
        height: 630,
        alt: "Brau Mitraa Braupagode Brewery Technology and Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brewery Technology & Engineering | Brau Mitraa",
    description:
      "Patented Braupagode™ vertical brewhouses, 75% energy savings via vapor recompression, and verified 200,000L brewery layouts.",
    images: ["/brewery/images/solution-brewery.jpg"],
  },
};

export default function TechnologyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": "https://braumitraa.com/technology#braupagode",
        "name": "Braupagode™ 1,000L Microbrewery System",
        "image": "https://braumitraa.com/brewery/images/solution-brewery.jpg",
        "description":
          "Patented two-vessel vertical stacked brewhouse system designed for a 200 kg malt charge and 1,000L cast-out wort volume. Features thermal vapor recompression saving 75% boiling energy and enables 2 brews per 10-hour shift (up to 500,000L annually).",
        "brand": {
          "@type": "Brand",
          "name": "Brau Mitraa",
        },
        "manufacturer": {
          "@type": "Organization",
          "name": "Brau Mitraa",
          "url": "https://braumitraa.com",
        },
        "category": "Commercial Brewing Machinery",
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Cast-out Wort Volume",
            "value": "1,000 Litres (flexible 600 - 1,200 Litres)",
          },
          {
            "@type": "PropertyValue",
            "name": "Malt Charge",
            "value": "approx. 200 kg",
          },
          {
            "@type": "PropertyValue",
            "name": "Thermal Energy Savings",
            "value": "75% reduction via vapor recompression",
          },
          {
            "@type": "PropertyValue",
            "name": "Annual Production Output",
            "value": "200,000 to 500,000 Litres",
          },
          {
            "@type": "PropertyValue",
            "name": "Metallurgy",
            "value": "Stainless steel 1.4301 (AISI 304) with IIIc mill-finish",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://braumitraa.com/technology#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does the Braupagode achieve two brews in a 10-hour shift?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Because the vessels are stacked vertically, the upper mash and lauter tun is freed as soon as lautering finishes and wort fills the lower boiling kettle. A second brew cycle can be started immediately in the upper vessel while the first batch is boiling below.",
            },
          },
          {
            "@type": "Question",
            "name": "How does thermal vapor recompression save 75% of wort boiling energy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Braupagode pulls kettle steam vapor into an internal plate heat exchanger and recompresses 50% of it using a small charge of live steam. The re-energized vapor is pumped back through a distribution screen to sustain a rolling boil, cutting fresh energy consumption to just 25%.",
            },
          },
          {
            "@type": "Question",
            "name": "What ceiling height and floor drainage are required for installation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Braupagode assembly has a total height of approximately 3,500 mm, fitting comfortably inside standard commercial ceilings of 3.8 to 4.2 meters. Flooring must be tiled or chemical industrial resin with a 1–2% slope towards a stainless steel drainage channel with a DN 100 sewer connection.",
            },
          },
          {
            "@type": "Question",
            "name": "What is the annual production capacity of a complete plant setup?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In a single-shift operation (2 brews per 10-hour shift), the brewhouse can produce up to 500,000 liters annually. When paired with our 4x 1,200L + 4x 2,400L fermentation cellar (filling 16 times per year), it achieves a standard commercial production output of 200,000 liters annually.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://braumitraa.com/technology#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://braumitraa.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Technology & Engineering",
            "item": "https://braumitraa.com/technology",
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1A1A18]">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <section className="relative pt-12 pb-14 lg:pt-20 lg:pb-20 border-b border-[#E5DFD5] bg-gradient-to-b from-[#FAF8F5] to-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-medium text-[#76736A] mb-8"
          >
            <Link
              href="/"
              className="hover:text-[#D49B44] transition-colors focus:outline-none"
            >
              Home
            </Link>
            <span>/</span>
            <span className="text-[#1A1A18] font-semibold" aria-current="page">
              Technology & Engineering
            </span>
          </nav>

          <div className="max-w-3xl space-y-6 anim-enter-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EFE6] border border-[#D49B44]/30 text-[#D49B44] text-xs font-bold tracking-widest uppercase">
              <IconCpu className="w-4 h-4" />
              <span>Certified German Brewhouse Engineering</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A1A18] leading-[1.1]">
              Brewhouse Technology: <br />
              <span className="italic font-normal text-[#D49B44]">
                The Braupagode™ & 200,000L Plant Scope.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#42403B] font-light leading-relaxed max-w-2xl">
              Authentic brewing engineering is governed by thermodynamic
              efficiency, fluid dynamics, and metallurgical precision. Explore
              the exact mechanical specifications of our patented vertically
              stacked Braupagode™ brewhouse and complete commercial plant layout.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#D49B44] hover:bg-[#c08a38] text-white text-xs font-semibold px-7 py-3.5 rounded-full shadow transition-all duration-200 hover:scale-105"
              >
                <span>Request Detailed P&ID Schematics</span>
                <IconArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/solutions/start-brewery"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#1A1A18] hover:text-[#D49B44] transition-colors px-4 py-3.5"
              >
                <span>Explore Turnkey Setups</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs & Specifications Content */}
      <TechnologyContent />
    </main>
  );
}

