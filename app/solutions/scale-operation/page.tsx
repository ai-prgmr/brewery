import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  IconPackages,
  IconArrowRight,
  IconCheck,
  IconBuildingFactory2,
  IconCpu,
  IconGauge,
  IconFlame,
  IconChartLine,
  IconShieldCheck,
} from "@tabler/icons-react";
import EquipmentSystems from "@/components/equipment-systems";

export const metadata: Metadata = {
  title: "Scale Existing Operation | Brewery Capacity Expansion — Brau Mitraa",
  description:
    "Expand your brewery capacity seamlessly. Multi-vessel brewhouses (20HL to 100HL+), large-scale cellar tank blocks, PLC automation, and zero-downtime engineering from Brau Mitraa.",
  openGraph: {
    title: "Scale Your Brewery Operation | 20HL to 100HL+ Systems",
    description:
      "Multiply your commercial production volume with German-engineered multi-vessel brewhouses and expanded cellar blocks engineered for zero downtime.",
    url: "https://braumitraa.com/solutions/scale-operation",
    siteName: "Brau Mitraa",
    images: [
      {
        url: "/brewery/images/solution-scale.jpg",
        width: 1200,
        height: 630,
        alt: "Commercial Brewery Capacity Expansion by Brau Mitraa",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scale Your Operation | Brau Mitraa Expansion Systems",
    description:
      "Engineered for growing breweries: multi-vessel brewhouses, 40HL-200HL unitank blocks, and high-throughput automation.",
    images: ["/brewery/images/solution-scale.jpg"],
  },
};

const expansionModules = [
  {
    title: "Multi-Vessel High-Throughput Brewhouses",
    desc: "Designed for continuous, back-to-back brewing shifts. We engineer dedicated 3-vessel, 4-vessel, and 5-vessel configurations (Mash Mixer, Lauter Tun, Wort Kettle, Whirlpool) enabling 6 to 8 brews in a 24-hour cycle.",
    features: [
      "Custom batch volumes from 20HL to 100HL+",
      "High-gravity brewing capability with automated liquor blending",
      "Vapor condensing & thermal heat recovery systems",
      "Automated spent grain evacuation conveyors",
    ],
  },
  {
    title: "Cellar Block & Unitank Farm Additions",
    desc: "Eliminate fermentation bottlenecks with custom-fabricated outdoor or indoor fermentation farms. Every tank is engineered for precision temperature stratification and minimal dissolved oxygen pickup.",
    features: [
      "Unitanks and Bright Beer Tanks from 40HL to 200HL+",
      "Independent multi-zone dimpled cooling jackets",
      "Sanitary purged racking arms and CIP rotating spray balls",
      "100mm chloride-free polyurethane insulation with welded cladding",
    ],
  },
  {
    title: "Automated Brewhouse PLC Controls",
    desc: "Upgrade from manual or semi-manual ball valves to centralized, recipe-driven Siemens or Allen-Bradley touchscreen automation with full batch traceability and remote monitoring.",
    features: [
      "Automated strike water temperature and flow metering",
      "Differential pressure-guided lautering rakes",
      "Continuous wort boil intensity regulation",
      "Cloud-connected data logging for consistent batch repeatability",
    ],
  },
  {
    title: "Utility Infrastructure & CIP Stations",
    desc: "Support higher cellar turnover with upgraded refrigeration, steam generating capacity, and automated multi-tank Clean-In-Place kitchens.",
    features: [
      "High-tonnage dual-circuit glycol chiller skids",
      "Steam boilers and high-recovery Hot Liquor Tanks (HLT)",
      "Automated 3-tank and 4-tank CIP stations with chemical dosing",
      "CO2 recovery and gas management piping manifolds",
    ],
  },
];

const zeroDowntimeSteps = [
  {
    number: "01",
    title: "Cellar Audit & Bottleneck Mapping",
    desc: "We analyze your current cycle times, yeast viability, and utility limits to determine the exact vessel sizing and cellar ratio required for target volume.",
  },
  {
    number: "02",
    title: "Pre-Piped Skid Modular Delivery",
    desc: "Valves, pumps, and manifolds are skid-mounted and pre-wired in our Indian industrial hub, reducing messy on-site welding and electrical delays.",
  },
  {
    number: "03",
    title: "Scheduled Tie-In Windows",
    desc: "Glycol headers, steam lines, and main product manifolds are integrated during planned maintenance intervals without interrupting active fermentations.",
  },
  {
    number: "04",
    title: "Sensory & Yield Validation",
    desc: "We run comparison brews alongside your master brewer to verify that bitterness profiles, clarity, and ester expressions remain identical to your flagship recipes.",
  },
];

export default function ScaleOperationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://braumitraa.com/solutions/scale-operation#service",
        "name": "Commercial Brewery Capacity Expansion",
        "provider": {
          "@type": "Organization",
          "name": "Brau Mitraa",
          "url": "https://braumitraa.com",
        },
        "description":
          "Commercial brewery scaling solutions including 20HL to 100HL multi-vessel brewhouses, fermentation cellar blocks, and PLC automation.",
        "areaServed": ["IN", "DE", "Global"],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://braumitraa.com/solutions/scale-operation#breadcrumb",
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
            "name": "Scale Existing Operation",
            "item": "https://braumitraa.com/solutions/scale-operation",
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
              Scale Existing Operation
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 anim-enter-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EFE6] border border-[#D49B44]/30 text-[#D49B44] text-xs font-bold tracking-widest uppercase">
                <IconPackages className="w-4 h-4" />
                <span>Commercial Capacity Expansion</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A1A18] leading-[1.1]">
                Scale Your Operation. <br />
                <span className="italic font-normal text-[#D49B44]">
                  Multiply Output, Preserve Character.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#42403B] font-light leading-relaxed max-w-2xl">
                When demand outstrips your cellar or retail distribution orders
                surge, you can&apos;t afford production stoppages or subtle flavor
                deviations.
              </p>

              <p className="text-sm sm:text-base text-[#76736A] leading-relaxed max-w-xl">
                We engineer scalable commercial brewing systems from 20HL to
                100HL+, modular unitank farms, and automated CIP loops designed
                for seamless integration into your existing building footprint
                with zero interruption to ongoing brew schedules.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#D49B44] hover:bg-[#c08a38] text-white text-sm font-semibold px-7 py-3.5 rounded-full shadow transition-all duration-200 hover:scale-105"
                >
                  <span>Request Capacity Audit</span>
                  <IconArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A18] hover:text-[#D49B44] transition-colors px-4 py-3.5"
                >
                  <span>Meet Our Lead Engineers</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 anim-enter-right">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E5DFD5] aspect-[4/3] bg-[#EFECE4] group">
                <Image
                  src="/brewery/images/solution-scale.jpg"
                  alt="Large commercial fermentation tank farm and stainless brewhouse"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-xs font-medium space-y-1">
                  <p className="font-bold text-sm tracking-wide">
                    Commercial Brewhouses (20HL to 100HL+)
                  </p>
                  <p className="text-stone-300 text-[11px]">
                    Modular unitank farms · Centralized PLC recipe automation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capacity Metrics */}
      <section className="py-14 border-b border-[#E5DFD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="editorial-card anim-enter-up anim-delay-1 p-6 rounded-2xl bg-[#FDFBF7] border border-[#E5DFD5] text-center space-y-1">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#D49B44]">
                20–100HL+
              </span>
              <p className="text-xs font-semibold text-[#1A1A18]">Brewhouse Sizing</p>
              <p className="text-[11px] text-[#76736A]">3, 4, and 5-vessel continuous systems</p>
            </div>
            <div className="editorial-card anim-enter-up anim-delay-2 p-6 rounded-2xl bg-[#FDFBF7] border border-[#E5DFD5] text-center space-y-1">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#D49B44]">
                6–8
              </span>
              <p className="text-xs font-semibold text-[#1A1A18]">Brews per 24h</p>
              <p className="text-[11px] text-[#76736A]">Optimized lautering & boiling cycles</p>
            </div>
            <div className="editorial-card anim-enter-up anim-delay-3 p-6 rounded-2xl bg-[#FDFBF7] border border-[#E5DFD5] text-center space-y-1">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#D49B44]">
                Zero
              </span>
              <p className="text-xs font-semibold text-[#1A1A18]">Downtime Strategy</p>
              <p className="text-[11px] text-[#76736A]">Pre-piped modular integration</p>
            </div>
            <div className="editorial-card anim-enter-up anim-delay-4 p-6 rounded-2xl bg-[#FDFBF7] border border-[#E5DFD5] text-center space-y-1">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#D49B44]">
                100%
              </span>
              <p className="text-xs font-semibold text-[#1A1A18]">Repeatability</p>
              <p className="text-[11px] text-[#76736A]">PLC temperature & flow monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Offerings Grid */}
      <section className="py-20 lg:py-24 border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-3 anim-enter-left">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44]">
              EXPANSION CAPABILITIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A18] tracking-tight">
              Modular Systems for Growing Breweries
            </h2>
            <p className="text-sm sm:text-base text-[#76736A]">
              Every expansion component is engineered to harmonize with your
              current equipment, eliminating dead-legs and balancing glycol
              backpressure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expansionModules.map((module, idx) => (
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
                      Scale 0{idx + 1}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#42403B] leading-relaxed">
                    {module.desc}
                  </p>
                </div>

                <ul className="space-y-2.5 pt-4 border-t border-[#E5DFD5]/70">
                  {module.features.map((feat, fIdx) => (
                    <li
                      key={fIdx}
                      className="text-xs text-[#76736A] flex items-start gap-2.5"
                    >
                      <IconCheck className="w-4 h-4 text-[#D49B44] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Systems: Copper Showpiece vs Stainless Workhorse */}
      <EquipmentSystems pageType="solution-scale" />

      {/* Zero Downtime Methodology */}
      <section className="py-20 lg:py-24 bg-[#FAF8F5] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3 anim-enter-up">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44]">
              THE MITRAA EXPANSION PROTOCOL
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A18] tracking-tight">
              Expanding Without Losing a Single Brew Day
            </h2>
            <p className="text-sm sm:text-base text-[#76736A]">
              We pre-commission manifolds in our factory so that on-site
              integration is measured in hours, not weeks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {zeroDowntimeSteps.map((step, idx) => (
              <div
                key={idx}
                className={`editorial-card anim-enter-up anim-delay-${idx + 1} bg-[#FDFBF7] rounded-3xl p-8 border border-[#E5DFD5] space-y-4`}
              >
                <span className="font-serif text-4xl font-bold text-[#D49B44]">
                  {step.number}
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

      {/* Cross Navigation */}
      <section className="py-16 border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="editorial-card anim-enter-up flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD5]">
            <div>
              <p className="text-xs uppercase tracking-wider font-bold text-[#D49B44]">
                Looking For Different Solutions?
              </p>
              <h4 className="font-serif text-2xl font-bold text-[#1A1A18] mt-1">
                Explore our turnkey setups or replacement components.
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
            EXPAND TODAY
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1A18] tracking-tight">
            Ready to Increase Your Hectolitre Output?
          </h2>
          <p className="text-sm sm:text-base text-[#76736A] leading-relaxed">
            Let our technical directors review your current cellar layout,
            chilling capacity, and utility infrastructure to design an optimal
            expansion path.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#D49B44] hover:bg-[#c08a38] text-white text-sm font-semibold px-8 py-4 rounded-full shadow transition-all duration-200 hover:scale-105"
            >
              <span>Book a Commercial Expansion Consultation</span>
              <IconArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

