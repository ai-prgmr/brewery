import type { Metadata } from "next";
import Link from "next/link";
import {
  IconBook,
  IconArrowRight,
  IconSparkles,
  IconBuildingFactory2,
  IconShieldCheck,
  IconMail,
} from "@tabler/icons-react";
import { KnowledgeCenterClient } from "@/components/knowledge-center";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Knowledge Center | Brewery Engineering Guides & Whitepapers — Brau Mitraa",
  description:
    "Authoritative brewing engineering guides, whitepapers, and operational advice. Learn about thermal vapor recompression, site feasibility, SS304 vs SS316L metallurgy, and cold-fermented lager science.",
  openGraph: {
    title: "Knowledge Center | Brau Mitraa Brewery Engineering & Science",
    description:
      "Deep technical whitepapers and actionable guides by German master brewers and Indian manufacturing directors.",
    url: "https://braumitraa.com/knowledge",
    siteName: "Brau Mitraa",
    images: [
      {
        url: "/images/process/process-03-build.jpg",
        width: 1200,
        height: 630,
        alt: "Brau Mitraa Knowledge Center — Brewery Engineering & Brewing Science",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Knowledge Center | Brau Mitraa",
    description:
      "Technical whitepapers and brewhouse planning guides from Brau Mitraa founders.",
    images: ["/images/process/process-03-build.jpg"],
  },
};

export default function KnowledgePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://braumitraa.com/knowledge#webpage",
        "url": "https://braumitraa.com/knowledge",
        "name": "Brau Mitraa Knowledge Center",
        "description":
          "Brewery engineering guides, thermodynamic whitepapers, and technical brewing papers published by Brau Mitraa founders.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://braumitraa.com/#website",
          "name": "Brau Mitraa",
          "url": "https://braumitraa.com",
        },
        "hasPart": articles.map((art) => ({
          "@type": "BlogPosting",
          "headline": art.title,
          "description": art.excerpt,
          "author": {
            "@type": "Person",
            "name": art.author,
            "jobTitle": art.authorRole,
          },
          "datePublished": "2024-10-01",
          "mainEntityOfPage": `https://braumitraa.com/knowledge#${art.id}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://braumitraa.com/knowledge#breadcrumb",
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
            "name": "Knowledge Center",
            "item": "https://braumitraa.com/knowledge",
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1A1A18]">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <section className="relative pt-12 pb-14 lg:pt-20 lg:pb-20 border-b border-[#E5DFD5] bg-gradient-to-b from-[#FAF8F5] to-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
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
              Knowledge Center
            </span>
          </nav>

          <div className="max-w-3xl space-y-6 anim-enter-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EFE6] border border-[#D49B44]/30 text-[#D49B44] text-xs font-bold tracking-widest uppercase">
              <IconBook className="w-4 h-4" />
              <span>Engineering Guides & Technical Papers</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A1A18] leading-[1.1]">
              Knowledge Center. <br />
              <span className="italic font-normal text-[#D49B44]">
                Science, Metallurgy & Brewhouse Economics.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#42403B] font-light leading-relaxed max-w-2xl">
              We believe great breweries are built on transparent engineering
              and empirical science. Explore our technical whitepapers, site
              planning guides, and brewing protocols written directly by our
              founders and technical directors.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Client Section (Search, Filter, Featured, Articles Grid, Modal Reader) */}
      <KnowledgeCenterClient />

      {/* Technical Advisory Banner */}
      <section className="py-20 bg-[#FAF8F5] border-y border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="editorial-card anim-enter-up p-8 sm:p-12 rounded-3xl bg-[#FDFBF7] border border-[#E5DFD5] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44]">
                  BESPOKE TECHNICAL ADVISORY
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A18] tracking-tight">
                  Have a Complex Engineering Question for Your Site?
                </h2>
                <p className="text-sm text-[#42403B] leading-relaxed max-w-2xl">
                  Every building envelope and water profile is distinct. Our
                  founders review floor loading specs, glycol chiller heat
                  balances, and water reverse osmosis designs for clients worldwide.
                </p>
              </div>

              <div className="lg:col-span-4 lg:text-right">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#D49B44] hover:bg-[#c08a38] text-white text-xs font-semibold px-7 py-3.5 rounded-full shadow transition-all duration-200 hover:scale-105"
                >
                  <span>Ask an Engineering Question</span>
                  <IconArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
