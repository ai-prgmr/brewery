import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  IconTools,
  IconArrowRight,
  IconCheck,
  IconFlame,
  IconShieldCheck,
  IconBuildingFactory2,
  IconRecycle,
  IconGauge,
  IconRefresh,
} from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Upgrade or Replace | Brewery Equipment & Tank Retrofits — Brau Mitraa",
  description:
    "Upgrade your brewery equipment with precision German-engineered components. Thermal vapor recompression retrofits, custom unitanks, automated CIP skids, and DIN 11851 sanitary spares.",
  openGraph: {
    title: "Upgrade or Replace Brewery Equipment | Brau Mitraa",
    description:
      "Modernize your brewhouse with energy-saving thermal vapor recompression, custom-dimensioned fermentation tanks, CIP stations, and genuine replacement parts.",
    url: "https://braumitraa.com/solutions/upgrade-replace",
    siteName: "Brau Mitraa",
    images: [
      {
        url: "/images/solution-upgrade.jpg",
        width: 1200,
        height: 630,
        alt: "Brewery Equipment Upgrade and Replacement by Brau Mitraa",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Upgrade or Replace Brewery Equipment | Brau Mitraa",
    description:
      "Precision retrofits: thermal vapor recompression (75% energy savings), custom cellar tanks, CIP carts, and fast-dispatch sanitary spares.",
    images: ["/images/solution-upgrade.jpg"],
  },
};

const upgradeModules = [
  {
    title: "Thermal Vapor Recompression Retrofits",
    badge: "Energy Efficiency",
    desc: "Cut your brewhouse's largest utility expense. We can retrofit Kruppa thermal vapor recompression onto your existing wort boiling kettle, compressing generated steam to slash primary heating energy by up to 75%.",
    specs: [
      "Compatible with existing steam and thermal oil kettles",
      "Payback period often achieved in under 18–24 months",
      "Reduces brewery boiler load and carbon footprint",
      "Includes plate heat exchanger, recompression loop, and distribution screen",
    ],
  },
  {
    title: "Custom-Dimensioned Cellar Tanks",
    badge: "Cellar Expansion",
    desc: "Need to squeeze an extra fermenter into an awkward corner or under a low ceiling? We engineer bespoke SS304/SS316 unitanks, brite beer tanks, and horizontal lagering vessels tailored to your exact architectural clearances.",
    specs: [
      "Custom height-to-diameter aspect ratios",
      "Dual or triple-zone dimpled cooling jackets",
      "Available for craft beer, hard cider, seltzers, or kombucha",
      "Fully passivated, ground flush to IIIc sanitary finish",
    ],
  },
  {
    title: "Mobile & Automated CIP Stations",
    badge: "Sanitation & Hygiene",
    desc: "Eliminate manual chemical handling and sanitize tanks with laboratory precision. Our skid-mounted mobile CIP carts feature automated temperature regulation, return pumps, and chemical dosing.",
    specs: [
      "Available in 2-tank (Caustic / Acid) or 3-tank configurations",
      "Integrated electrical heating elements and temperature sensors",
      "High-pressure sanitary centrifugal pumps with flow switch interlocks",
      "Heavy-duty stainless caster wheels with lock brakes",
    ],
  },
  {
    title: "Lauter False Bottoms & Raking Blades",
    badge: "Runoff Performance",
    desc: "Slow runoff times and stuck mashes destroy brewhouse efficiency. Replace worn perforated screens with laser-cut 0.7mm wedge-wire false bottoms and retrofitted frequency-controlled raking machines.",
    specs: [
      "Precision 0.7mm continuous slot geometry prevents grain blinding",
      "Sectional design for easy removal and thorough vessel CIP",
      "Infinitely variable VFD raking blade height adjustment",
      "Automated spent grain discharge ploughs",
    ],
  },
];

const replacementParts = [
  {
    name: "DIN 11851 Sanitary Unions & Clamps",
    desc: "German DIN 11851 male/female threaded fittings, nut couplings, and Tri-Clamp sanitary adaptors in SS304/SS316.",
  },
  {
    name: "Aseptic Sampling Valves & Sight Glasses",
    desc: "Flame-sterilizable sample cocks, pressure relief spunding valves (bunging apparatus), and inline glass flow indicators.",
  },
  {
    name: "Food-Grade Gaskets & Seal Kits",
    desc: "EPDM, silicone, and PTFE replacement seals for manways, butterfly valves, and plate heat exchanger gaskets.",
  },
  {
    name: "Sanitary Impeller Pumps & Motors",
    desc: "Food-grade washdown duty centrifugal transfer pumps, wort pumps, and frequency inverters for variable flow rate control.",
  },
];

export default function UpgradeReplacePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://braumitraa.com/solutions/upgrade-replace#service",
        "name": "Brewery Equipment Upgrade and Replacement",
        "provider": {
          "@type": "Organization",
          "name": "Brau Mitraa",
          "url": "https://braumitraa.com",
        },
        "description":
          "Brewery equipment modernization, thermal vapor recompression retrofits, custom fermentation tanks, CIP skids, and sanitary parts.",
        "areaServed": ["IN", "DE", "Global"],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://braumitraa.com/solutions/upgrade-replace#breadcrumb",
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
            "name": "Upgrade or Replace",
            "item": "https://braumitraa.com/solutions/upgrade-replace",
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
              Upgrade or Replace
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 anim-enter-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EFE6] border border-[#D49B44]/30 text-[#D49B44] text-xs font-bold tracking-widest uppercase">
                <IconTools className="w-4 h-4" />
                <span>Equipment & Retrofit Solutions</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A1A18] leading-[1.1]">
                Upgrade or Replace. <br />
                <span className="italic font-normal text-[#D49B44]">
                  Modernize Every Drop.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#42403B] font-light leading-relaxed max-w-2xl">
                Brewing equipment wears down, technology advances, and utility
                costs rise. You don&apos;t always need a brand-new brewery to see
                transformative improvements in your production speed and energy bills.
              </p>

              <p className="text-sm sm:text-base text-[#76736A] leading-relaxed max-w-xl">
                From adding single unitanks and mobile CIP carts to retrofitting
                Kruppa thermal vapor recompression on your existing kettle, we
                engineer plug-and-play components that install cleanly with
                standard sanitary connections.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#D49B44] hover:bg-[#c08a38] text-white text-sm font-semibold px-7 py-3.5 rounded-full shadow transition-all duration-200 hover:scale-105"
                >
                  <span>Inquire for Equipment & Spares</span>
                  <IconArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/#solutions"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A18] hover:text-[#D49B44] transition-colors px-4 py-3.5"
                >
                  <span>Explore All Brewing Systems</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 anim-enter-right">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E5DFD5] aspect-[4/3] bg-[#EFECE4] group">
                <Image
                  src="/images/solution-upgrade.jpg"
                  alt="Stainless steel sanitary brewery fittings, valves, and tank retrofits"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-xs font-medium space-y-1">
                  <p className="font-bold text-sm tracking-wide">
                    Sanitary Valves, CIP Carts & Tank Retrofits
                  </p>
                  <p className="text-stone-300 text-[11px]">
                    DIN 11851 / Tri-Clamp standards · Rapid dispatch from Indore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Energy & Efficiency Proof */}
      <section className="py-14 border-b border-[#E5DFD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="editorial-card anim-enter-up anim-delay-1 p-6 rounded-2xl bg-[#FDFBF7] border border-[#E5DFD5] text-center space-y-1">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#D49B44]">
                75%
              </span>
              <p className="text-xs font-semibold text-[#1A1A18]">Energy Reduction</p>
              <p className="text-[11px] text-[#76736A]">Vapor recompression retrofits</p>
            </div>
            <div className="editorial-card anim-enter-up anim-delay-2 p-6 rounded-2xl bg-[#FDFBF7] border border-[#E5DFD5] text-center space-y-1">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#D49B44]">
                0.7mm
              </span>
              <p className="text-xs font-semibold text-[#1A1A18]">Wedge-Wire Screens</p>
              <p className="text-[11px] text-[#76736A]">Prevents lautering runoff stalls</p>
            </div>
            <div className="editorial-card anim-enter-up anim-delay-3 p-6 rounded-2xl bg-[#FDFBF7] border border-[#E5DFD5] text-center space-y-1">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#D49B44]">
                SS 316L
              </span>
              <p className="text-xs font-semibold text-[#1A1A18]">Aseptic Metallurgy</p>
              <p className="text-[11px] text-[#76736A]">IIIc mill finish sanitary welds</p>
            </div>
            <div className="editorial-card anim-enter-up anim-delay-4 p-6 rounded-2xl bg-[#FDFBF7] border border-[#E5DFD5] text-center space-y-1">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#D49B44]">
                24h
              </span>
              <p className="text-xs font-semibold text-[#1A1A18]">Spare Dispatch</p>
              <p className="text-[11px] text-[#76736A]">From our Indore central stock</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upgrade Modules Showcase */}
      <section className="py-20 lg:py-24 border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-3 anim-enter-left">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44]">
              UPGRADE MODULES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A18] tracking-tight">
              Targeted Upgrades for Immediate ROI
            </h2>
            <p className="text-sm sm:text-base text-[#76736A]">
              We evaluate your existing brewhouse fittings, pipe diameters, and
              pressures to supply custom drop-in replacements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upgradeModules.map((module, idx) => (
              <div
                key={idx}
                className={`editorial-card bg-[#FAF8F5] rounded-3xl p-8 border border-[#E5DFD5] space-y-4 hover:border-[#D49B44]/40 transition-colors flex flex-col justify-between ${
                  idx % 2 === 0 ? "anim-enter-left" : "anim-enter-right"
                } anim-delay-${idx + 1}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5DFD5]">
                    <h3 className="font-serif text-2xl font-bold text-[#1A1A18]">
                      {module.title}
                    </h3>
                    <span className="text-xs font-bold text-[#D49B44] bg-[#F4EFE6] px-3 py-1 rounded-full">
                      {module.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#42403B] leading-relaxed">
                    {module.desc}
                  </p>
                </div>

                <ul className="space-y-2.5 pt-4 border-t border-[#E5DFD5]/70">
                  {module.specs.map((spec, sIdx) => (
                    <li
                      key={sIdx}
                      className="text-xs text-[#76736A] flex items-start gap-2.5"
                    >
                      <IconCheck className="w-4 h-4 text-[#D49B44] shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spare Parts Inventory */}
      <section className="py-20 lg:py-24 bg-[#FAF8F5] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3 anim-enter-up">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44]">
              SPARE PARTS & ESSENTIALS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A18] tracking-tight">
              Sanitary Fittings & Spares On Demand
            </h2>
            <p className="text-sm sm:text-base text-[#76736A]">
              Never let a failed seal or damaged valve halt a packaging run. We
              maintain rapid-dispatch inventory in Indore.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {replacementParts.map((part, idx) => (
              <div
                key={idx}
                className={`editorial-card anim-enter-up anim-delay-${idx + 1} bg-[#FDFBF7] rounded-3xl p-6 border border-[#E5DFD5] space-y-3`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#F4EFE6] border border-[#E5DFD5] flex items-center justify-center text-[#D49B44]">
                  <IconTools className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1A1A18]">
                  {part.name}
                </h3>
                <p className="text-xs text-[#76736A] leading-relaxed">
                  {part.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross Navigation */}
      <section className="py-16 border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="editorial-card anim-enter-up flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD5]">
            <div>
              <p className="text-xs uppercase tracking-wider font-bold text-[#D49B44]">
                Looking to Start Fresh or Expand?
              </p>
              <h4 className="font-serif text-2xl font-bold text-[#1A1A18] mt-1">
                Explore our full brewhouse systems and capacity scaling.
              </h4>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/solutions/start-brewery"
                className="group/link inline-flex items-center gap-2 text-xs font-semibold px-5 py-3 rounded-full bg-[#FDFBF7] hover:bg-[#F4EFE6] border border-[#E5DFD5] text-[#1A1A18] transition-colors"
              >
                <span>Start New Brewery</span>
                <IconArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
              </Link>
              <Link
                href="/solutions/scale-operation"
                className="group/link inline-flex items-center gap-2 text-xs font-semibold px-5 py-3 rounded-full bg-[#FDFBF7] hover:bg-[#F4EFE6] border border-[#E5DFD5] text-[#1A1A18] transition-colors"
              >
                <span>Scale Existing Operation</span>
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
            GET IN TOUCH
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1A18] tracking-tight">
            Need a Replacement Tank, Skid or Valve?
          </h2>
          <p className="text-sm sm:text-base text-[#76736A] leading-relaxed">
            Send us your port dimensions, electrical specs, or vessel drawing.
            We&apos;ll confirm compatibility and provide an exact quote and
            dispatch timeframe.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#D49B44] hover:bg-[#c08a38] text-white text-sm font-semibold px-8 py-4 rounded-full shadow transition-all duration-200 hover:scale-105"
            >
              <span>Request Equipment Quote</span>
              <IconArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

