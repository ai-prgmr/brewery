import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  IconBuildingStore,
  IconArrowRight,
  IconCheck,
  IconFlame,
  IconShieldCheck,
  IconBuildingFactory2,
  IconBeer,
  IconGauge,
  IconTools,
  IconClock,
} from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Start New Brewery | Turnkey Microbrewery Solutions — Brau Mitraa",
  description:
    "Launch your dream craft brewery or brewpub with Brau Mitraa. Complete turnkey setups, space-saving Braupagode vertical brewhouses, 75% energy savings, and German master brewing mentorship.",
  openGraph: {
    title: "Start Your Brewery | Complete Turnkey Microbrewery Setups",
    description:
      "From architectural floor planning to first pour. Complete German-engineered brewhouse systems manufactured in India for restaurants, brewpubs, and entrepreneurs.",
    url: "https://braumitraa.com/solutions/start-brewery",
    siteName: "Brau Mitraa",
    images: [
      {
        url: "/images/solution-brewery.jpg",
        width: 1200,
        height: 630,
        alt: "Turnkey Microbrewery Setup by Brau Mitraa",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Start Your Brewery | Brau Mitraa Turnkey Solutions",
    description:
      "Space-saving 2-vessel Braupagode brewhouses, certified SS304/SS316 fabrication, and 130+ recipes ready on day one.",
    images: ["/images/solution-brewery.jpg"],
  },
};

const scopeItems = [
  {
    category: "Grist & Milling",
    items: [
      "100L malt storage hopper with discharge slide",
      "Two-roller mill (600 kg/h) with spring-loaded bearings",
      "TSK 60 cable conveying system for dust-free malt transport",
    ],
  },
  {
    category: "Two-Vessel Brewhouse (Braupagode)",
    items: [
      "Upper Vessel: Mash & Lauter tun (DN40 manifold, 4 draw-offs)",
      "Variable frequency raking machine with spent grain discharge",
      "Lower Vessel: Wort boiler with distribution screen & whirlpool pump",
      "Thermal vapor recompression slashing boiling energy by up to 75%",
    ],
  },
  {
    category: "Cellar & Fermentation",
    items: [
      "Unitanks / Fermenters (SS304/SS316, 60° conical bottom)",
      "Dual-zone dimpled cooling jackets with low-chloride rock wool insulation",
      "Bright Beer Tanks (BBTs) for carbonation and clarification",
      "Aseptic sample valves, shadowless manways, and DIN 11851 unions",
    ],
  },
  {
    category: "Utilities & CIP",
    items: [
      "Mobile 2-tank Clean-In-Place (CIP) sanitization station",
      "High-efficiency two-stage plate heat exchanger with aerator",
      "Centralized glycol chilling system with automated solenoid valves",
      "Touchscreen PLC control panel for precise temperature mashing steps",
    ],
  },
];

const turnkeySteps = [
  {
    step: "01",
    title: "Feasibility & Site Blueprinting",
    desc: "We analyze your venue's ceiling heights, floor load capacity, steam/electric feeds, and drainage to generate custom 2D/3D CAD layouts that maximize brewdeck ergonomics.",
  },
  {
    step: "02",
    title: "Precision Engineering & Fabrication",
    desc: "Vessels are manufactured in our Indore hub using food-grade SS304/SS316 with IIIc mill finish welds, purged orbital piping, and low-chloride insulation certified to German standards.",
  },
  {
    step: "03",
    title: "Mechanical Installation & Commissioning",
    desc: "Our engineers supervise mechanical placement, glycol piping, electrical drops, and leak testing before conducting wet water and CIP trial runs.",
  },
  {
    step: "04",
    title: "Master Brew Coaching & First Pour",
    desc: "Our German and Indian brewmasters guide your team through raw material sourcing, mashing cycles, yeast pitching, and sensory sign-off for your inaugural commercial batches.",
  },
];

export default function StartBreweryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://braumitraa.com/solutions/start-brewery#service",
        "name": "Turnkey Microbrewery Setup",
        "provider": {
          "@type": "Organization",
          "name": "Brau Mitraa",
          "url": "https://braumitraa.com",
        },
        "description":
          "Complete turnkey brewery setup for restaurants, brewpubs, and commercial start-ups. Includes space-saving Braupagode 500L-2,000L brewhouses, fermentation cellar, and master brewer commissioning.",
        "areaServed": ["IN", "DE", "Global"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Turnkey Brewing Equipment",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Braupagode 1,000L Microbrewery",
                "description":
                  "Stacked two-vessel brewhouse with thermal vapor recompression and raking machine.",
              },
            },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://braumitraa.com/solutions/start-brewery#breadcrumb",
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
            "name": "Solutions",
            "item": "https://braumitraa.com/#solutions",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Start New Brewery",
            "item": "https://braumitraa.com/solutions/start-brewery",
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
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-[#E5DFD5] bg-gradient-to-b from-[#FAF8F5] to-[#FDFBF7]">
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
            <Link
              href="/#solutions"
              className="hover:text-[#D49B44] transition-colors focus:outline-none"
            >
              Solutions
            </Link>
            <span>/</span>
            <span className="text-[#1A1A18] font-semibold" aria-current="page">
              Start New Brewery
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 anim-enter-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EFE6] border border-[#D49B44]/30 text-[#D49B44] text-xs font-bold tracking-widest uppercase">
                <IconBuildingStore className="w-4 h-4" />
                <span>Turnkey Microbrewery Solutions</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A1A18] leading-[1.1]">
                Start Your Brewery. <br />
                <span className="italic font-normal text-[#D49B44]">
                  Turnkey, Tailored, Uncompromising.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#42403B] font-light leading-relaxed max-w-2xl">
                Launching a brewery is one of the most rewarding commercial
                ventures, but improper vessel geometry, mismatched glycol loads, or
                faulty sanitization can handicap a business from day one.
              </p>

              <p className="text-sm sm:text-base text-[#76736A] leading-relaxed max-w-xl">
                Brau Mitraa removes the guesswork. We deliver complete,
                energy-efficient 500L to 2,000L brewhouse setups that fit tight
                urban floor plans, conserve up to 75% boiling energy, and guarantee
                immediate brewing readiness.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#D49B44] hover:bg-[#c08a38] text-white text-sm font-semibold px-7 py-3.5 rounded-full shadow transition-all duration-200 hover:scale-105"
                >
                  <span>Request Turnkey Estimate</span>
                  <IconArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/beverages"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A18] hover:text-[#D49B44] transition-colors px-4 py-3.5"
                >
                  <span>Explore 130+ Recipes Included</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 anim-enter-right">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E5DFD5] aspect-[4/3] bg-[#EFECE4] group">
                <Image
                  src="/images/solution-brewery.jpg"
                  alt="Modern polished stainless turnkey microbrewery setup"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-xs font-medium space-y-1">
                  <p className="font-bold text-sm tracking-wide">
                    Braupagode 1,000L Cast-Out Wort Setup
                  </p>
                  <p className="text-stone-300 text-[11px]">
                    2 brews per 10-hour shift · Up to 500,000 L annual production
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights & Key Numbers */}
      <section className="py-14 border-b border-[#E5DFD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="editorial-card anim-enter-up anim-delay-1 p-6 rounded-2xl bg-[#FDFBF7] border border-[#E5DFD5] text-center space-y-1">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#D49B44]">
                50%
              </span>
              <p className="text-xs font-semibold text-[#1A1A18]">Floor Space Saved</p>
              <p className="text-[11px] text-[#76736A]">Vertical 2-vessel Braupagode stack</p>
            </div>
            <div className="editorial-card anim-enter-up anim-delay-2 p-6 rounded-2xl bg-[#FDFBF7] border border-[#E5DFD5] text-center space-y-1">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#D49B44]">
                75%
              </span>
              <p className="text-xs font-semibold text-[#1A1A18]">Thermal Energy Cut</p>
              <p className="text-[11px] text-[#76736A]">Proprietary vapor recompression</p>
            </div>
            <div className="editorial-card anim-enter-up anim-delay-3 p-6 rounded-2xl bg-[#FDFBF7] border border-[#E5DFD5] text-center space-y-1">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#D49B44]">
                2 Brews
              </span>
              <p className="text-xs font-semibold text-[#1A1A18]">Per 10-Hour Shift</p>
              <p className="text-[11px] text-[#76736A]">Parallel mashing and lautering</p>
            </div>
            <div className="editorial-card anim-enter-up anim-delay-4 p-6 rounded-2xl bg-[#FDFBF7] border border-[#E5DFD5] text-center space-y-1">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#D49B44]">
                40%
              </span>
              <p className="text-xs font-semibold text-[#1A1A18]">Lower Capex</p>
              <p className="text-[11px] text-[#76736A]">Versus European import overhead</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Turnkey Scope */}
      <section className="py-20 lg:py-24 border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-3 anim-enter-left">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44]">
              WHAT WE SUPPLY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A18] tracking-tight">
              The Complete Turnkey Equipment Package
            </h2>
            <p className="text-sm sm:text-base text-[#76736A]">
              We don&apos;t just sell vessels. Every turnkey installation is an
              integrated system of milling, mashing, boiling, chilling, cellaring,
              and CIP automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scopeItems.map((scope, idx) => (
              <div
                key={idx}
                className={`editorial-card bg-[#FAF8F5] rounded-3xl p-8 border border-[#E5DFD5] space-y-4 hover:border-[#D49B44]/40 transition-colors ${
                  idx % 2 === 0 ? "anim-enter-left" : "anim-enter-right"
                } anim-delay-${idx + 1}`}
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#E5DFD5]">
                  <h3 className="font-serif text-2xl font-bold text-[#1A1A18]">
                    {scope.category}
                  </h3>
                  <span className="text-xs font-bold text-[#D49B44] bg-[#F4EFE6] px-3 py-1 rounded-full">
                    Module 0{idx + 1}
                  </span>
                </div>
                <ul className="space-y-3 pt-2">
                  {scope.items.map((item, iIdx) => (
                    <li
                      key={iIdx}
                      className="text-xs sm:text-sm text-[#42403B] flex items-start gap-2.5"
                    >
                      <IconCheck className="w-4 h-4 text-[#D49B44] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 4-Step Journey */}
      <section className="py-20 lg:py-24 bg-[#FAF8F5] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3 anim-enter-up">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44]">
              METHODOLOGY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A18] tracking-tight">
              From Floor Plan to First Commercial Pour
            </h2>
            <p className="text-sm sm:text-base text-[#76736A]">
              Our founders walk your site and supervise commissioning so you can
              focus on branding and welcoming your first guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {turnkeySteps.map((step, idx) => (
              <div
                key={idx}
                className={`editorial-card anim-enter-up anim-delay-${idx + 1} bg-[#FDFBF7] rounded-3xl p-8 border border-[#E5DFD5] space-y-4 relative`}
              >
                <span className="font-serif text-4xl font-bold text-[#D49B44]">
                  {step.step}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1A1A18]">
                  {step.title}
                </h3>
                <p className="text-xs text-[#76736A] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross Navigation to Other Solutions */}
      <section className="py-16 border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="editorial-card anim-enter-up flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD5]">
            <div>
              <p className="text-xs uppercase tracking-wider font-bold text-[#D49B44]">
                Explore Other Solutions
              </p>
              <h4 className="font-serif text-2xl font-bold text-[#1A1A18] mt-1">
                Already operating an active brewery?
              </h4>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/solutions/scale-operation"
                className="group/link inline-flex items-center gap-2 text-xs font-semibold px-5 py-3 rounded-full bg-[#FDFBF7] hover:bg-[#F4EFE6] border border-[#E5DFD5] text-[#1A1A18] transition-colors"
              >
                <span>Scale Existing Operation</span>
                <IconArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
              </Link>
              <Link
                href="/solutions/upgrade-replace"
                className="group/link inline-flex items-center gap-2 text-xs font-semibold px-5 py-3 rounded-full bg-[#FDFBF7] hover:bg-[#F4EFE6] border border-[#E5DFD5] text-[#1A1A18] transition-colors"
              >
                <span>Upgrade or Replace</span>
                <IconArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-[#FDFBF7] to-[#FAF8F5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 anim-enter-up">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44]">
            GET STARTED
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1A18] tracking-tight">
            Ready to Plan Your New Brewery?
          </h2>
          <p className="text-sm sm:text-base text-[#76736A] leading-relaxed">
            Speak directly with founders Rainer Kruppa, Abhay Jhaveri, and
            Rüdiger Stolle. We review your space, discuss target capacity, and
            prepare a custom turnkey quotation.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#D49B44] hover:bg-[#c08a38] text-white text-sm font-semibold px-8 py-4 rounded-full shadow transition-all duration-200 hover:scale-105"
            >
              <span>Schedule a Technical Consultation</span>
              <IconArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

