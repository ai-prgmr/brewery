import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  IconMessage,
  IconCompass,
  IconCpu,
  IconTruck,
  IconSchool,
  IconArrowRight,
  IconCheck,
  IconShieldCheck,
  IconBuildingFactory2,
  IconBeer,
  IconFlame,
  IconGauge,
  IconTools,
} from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "The Brau Mitraa Journey | Turnkey Brewery Engineering Process",
  description:
    "Explore the 5 proven steps of the Brau Mitraa journey: from concept discussion and 2D/3D CAD design to precision fabrication, installation, and master brewer commissioning.",
  openGraph: {
    title: "The Brau Mitraa Process | From Idea to Your First Commercial Pour",
    description:
      "A complete walkthrough of how we design, manufacture, install, and commission world-class German-engineered breweries in India and globally.",
    url: "https://braumitraa.com/process",
    siteName: "Brau Mitraa",
    images: [
      {
        url: "/brewery/images/process/process-02-design.jpg",
        width: 1200,
        height: 630,
        alt: "Brau Mitraa 5-Step Turnkey Brewery Process",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Brau Mitraa Process | From Idea to First Pour",
    description:
      "Discover the 5 proven steps of our turnkey brewery engineering methodology: Talk, Design, Build, Install, Train.",
    images: ["/brewery/images/process/process-02-design.jpg"],
  },
};

interface ProcessStep {
  number: string;
  phase: string;
  title: string;
  subtitle: string;
  lead: string;
  image: string;
  imageAlt: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverables: string[];
  inDepthPoints: {
    title: string;
    desc: string;
  }[];
}

const steps: ProcessStep[] = [
  {
    number: "01",
    phase: "PHASE 01 · INITIAL CONSULTATION",
    title: "Let's Talk",
    subtitle: "Discovery, Feasibility & Target Scoping",
    lead: "Every successful brewery begins with a candid technical conversation. We listen closely to your vision, evaluate your space, and identify the exact commercial parameters needed for long-term profitability.",
    image: "/brewery/images/process/process-01-talk.jpg",
    imageAlt: "Brewery founders and engineers discussing site floorplans over coffee",
    icon: IconMessage,
    deliverables: [
      "Site feasibility scorecard (floor loads, ceiling clearances, utility feeds)",
      "Target batch volume recommendation (500L to 100HL+)",
      "Excise, environmental, and municipal zoning compliance guidance",
      "Preliminary capital budget estimate & projected ROI timeframe",
    ],
    inDepthPoints: [
      {
        title: "Site Architecture & Ceiling Assessment",
        desc: "We analyze structural floor load limits (kg/m²), floor drain slopes, ceiling clearance heights, and logistical ingress points for vessel rigging.",
      },
      {
        title: "Commercial Business Model Alignment",
        desc: "Whether you operate a high-volume hospitality brewpub, a specialty taproom, or a packaging distribution plant, we size your cellar turnover to match expected sales peaks.",
      },
      {
        title: "Water Chemistry Profiling",
        desc: "We review local water hardness, alkalinity, and chloride levels to specify appropriate filtration, Reverse Osmosis (RO), or liquor blending skids.",
      },
    ],
  },
  {
    number: "02",
    phase: "PHASE 02 · ARCHITECTURE & MODELING",
    title: "Design",
    subtitle: "Custom 2D/3D CAD Layouts & P&ID Schematics",
    lead: "A brewery is a living machine where fluid dynamics, thermal kinetics, and ergonomics must intersect cleanly. We engineer custom blueprints tailored precisely to your building envelope.",
    image: "/brewery/images/process/process-02-design.jpg",
    imageAlt: "3D CAD brewhouse model and architectural blueprints on technical workstation",
    icon: IconCompass,
    deliverables: [
      "2D/3D isometric CAD layout drawings showing all vessel footprints",
      "Full Piping & Instrumentation Diagram (P&ID) with valve schedules",
      "Electrical, steam, glycol, and water utility interface schedules",
      "Ergonomic brewer walkway and spent grain evacuation blueprints",
    ],
    inDepthPoints: [
      {
        title: "Thermal Kinetic Optimization",
        desc: "We calculate exact boiling evaporation rates, plate heat exchanger surface areas, and vapor recompression loop geometry to minimize energy loss.",
      },
      {
        title: "P&ID Process Architecture",
        desc: "Every pipe run, automated pneumatic valve, temperature sensor, and sampling point is charted to eliminate dead-legs and optimize CIP circulation.",
      },
      {
        title: "Future Cellar Expansion Headroom",
        desc: "We plan glycol header capacities, drainage troughs, and electrical panels with surplus capacity so you can add future unitanks without tearing up floors.",
      },
    ],
  },
  {
    number: "03",
    phase: "PHASE 03 · ADVANCED MANUFACTURING",
    title: "Build",
    subtitle: "German Engineering & Precision Stainless Fabrication",
    lead: "In our dedicated Indian industrial manufacturing hub, we translate German DIN and TÜV sanitary standards into high-precision stainless steel machinery with zero metallurgical compromises.",
    image: "/brewery/images/process/process-03-build.jpg",
    imageAlt: "Skilled metal craftsman performing sanitary orbital TIG welding on a stainless brewery tank",
    icon: IconCpu,
    deliverables: [
      "Certified food-grade SS304 / SS316L material test certificates (MTC)",
      "Hydrostatic jacket pressure test certification (tested to 3.0 bar)",
      "Automated orbital TIG welding with internal IIIc sanitary mill finish",
      "Factory Acceptance Test (FAT) sign-off prior to crating and dispatch",
    ],
    inDepthPoints: [
      {
        title: "Certified Food-Grade Metallurgy",
        desc: "Only certified prime stainless steel 1.4301 (AISI 304) and 1.4404 (AISI 316L) is used. Internal surfaces are ground flush to IIIc mill finish (Ra ≤ 0.4 µm), pickled, and passivated.",
      },
      {
        title: "Proprietary Braupagode Stacking",
        desc: "Upper mash/lauter tun stacked directly over the lower wort kettle. Features laser-cut 0.7mm wedge-wire false bottoms and variable frequency raking machines.",
      },
      {
        title: "Thermal Vapor Recompression",
        desc: "Kruppa vapor recompression technology compresses kettle steam with live steam, slashing thermal wort boiling energy consumption by up to 75%.",
      },
    ],
  },
  {
    number: "04",
    phase: "PHASE 04 · ON-SITE COMMISSIONING",
    title: "Install & Commission",
    subtitle: "Rigging, Utility Hookups & Hydrostatic Validation",
    lead: "Our installation engineers manage the physical placement, leveling, sanitary pipework, and electrical tie-ins, followed by rigorous wet trial runs to verify every valve and seal.",
    image: "/brewery/images/process/process-04-install.jpg",
    imageAlt: "Professional technicians installing stainless unitanks and piping manifold in brewery",
    icon: IconTruck,
    deliverables: [
      "Rigging, laser-leveling, and structural vibration isolation",
      "Pre-insulated sanitary process piping and DIN 11851 connections",
      "Centralized touchscreen PLC control panel wiring & sensor calibration",
      "Site Acceptance Test (SAT) and multi-stage CIP sanitization run",
    ],
    inDepthPoints: [
      {
        title: "Precision Mechanical Rigging",
        desc: "Vessels are maneuvered through access points, positioned according to approved CAD drawings, and laser-aligned to ensure complete gravitational drainage.",
      },
      {
        title: "Utility & Glycol Integration",
        desc: "We connect dual-circuit glycol headers, steam lines, treated water supplies, and compressed air lines using food-grade stainless and pre-insulated piping.",
      },
      {
        title: "Wet Water & CIP Commissioning",
        desc: "We perform full-capacity water brews to calibrate flow meters, confirm boil heat-up rates, test heat exchanger knockdown times, and validate CIP spray coverage.",
      },
    ],
  },
  {
    number: "05",
    phase: "PHASE 05 · COMMERCIAL LAUNCH & LIFETIME CARE",
    title: "Train & Support",
    subtitle: "Master Brew Mentorship & Lifetime Mitraa Partnership",
    lead: "We don't hand over the keys and walk away. Our founders and brewmasters work alongside your crew on the brewdeck, ensuring your inaugural commercial batches pour to absolute perfection.",
    image: "/brewery/images/process/process-05-train.jpg",
    imageAlt: "Master brewer coaching a young brewing team at the brewhouse touch panel and testing wort",
    icon: IconSchool,
    deliverables: [
      "On-deck brewmaster coaching for your first commercial brew cycles",
      "Access to 130+ validated craft beer, kombucha, and seltzer formulations",
      "Comprehensive staff Standard Operating Procedures (SOP) and safety manuals",
      "Lifetime Mitraa guarantee with rapid 24h spare parts dispatch from our Indian industrial hub",
    ],
    inDepthPoints: [
      {
        title: "Inaugural Commercial Brew Days",
        desc: "Our brewmasters guide your team through malt milling gap settings, mash temperature rests, sparge flow rates, whirlpool trub separation, and active yeast pitching.",
      },
      {
        title: "Rigorous Staff SOP & CIP Training",
        desc: "Your brewers learn exact chemical concentration titrations, caustic/acid recirculation times, pressure transfer protocols, and cellar CO2 safety practices.",
      },
      {
        title: "Continuous Mitraa Support",
        desc: "Mitraa means lifelong companion. You have direct access to our founders for troubleshooting, recipe scaling, seasonal style additions, and preventive maintenance audits.",
      },
    ],
  },
];

export default function ProcessPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        "@id": "https://braumitraa.com/process#howto",
        "name": "The Brau Mitraa 5-Step Brewery Engineering Process",
        "description":
          "From initial idea to commercial first pour: how Brau Mitraa designs, manufactures, installs, and commissions turnkey craft breweries.",
        "step": steps.map((s, idx) => ({
          "@type": "HowToStep",
          "position": idx + 1,
          "name": s.title,
          "itemListElement": [
            {
              "@type": "HowToDirection",
              "text": s.lead,
            },
          ],
          "image": `https://braumitraa.com${s.image}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://braumitraa.com/process#breadcrumb",
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
            "name": "Process",
            "item": "https://braumitraa.com/process",
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
            <span className="text-[#1A1A18] font-semibold" aria-current="page">
              The Brau Mitraa Process
            </span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EFE6] border border-[#D49B44]/30 text-[#D49B44] text-xs font-bold tracking-widest uppercase">
              <span>The 5-Step Mitraa Journey</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A1A18] leading-[1.1]">
              From Concept to First Pour: <br />
              <span className="italic font-normal text-[#D49B44]">
                Our Turnkey Engineering Journey.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#42403B] font-light leading-relaxed max-w-2xl">
              Building a brewery is not simply purchasing stainless steel tanks;
              it is orchestrating fluid dynamics, heat recovery, sanitary
              standards, and recipe science into a reliable commercial engine.
            </p>

            <p className="text-sm sm:text-base text-[#76736A] leading-relaxed max-w-2xl">
              True to our name (&ldquo;Mitraa&rdquo; means friend and trusted
              companion), our three founders remain personally engaged at every
              stage of the journey—ensuring your system delivers peak efficiency,
              zero unexpected downtime, and world-class beverage quality.
            </p>
          </div>
        </div>
      </section>

      {/* Process Navigation Bar */}
      <section className="sticky top-20 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E5DFD5] py-3.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs font-semibold text-[#76736A]">
          <span className="uppercase tracking-wider text-[#1A1A18]">
            Quick Step Jump:
          </span>
          <div className="flex items-center gap-6">
            {steps.map((s, idx) => (
              <a
                key={idx}
                href={`#step-${s.number}`}
                className="hover:text-[#D49B44] transition-colors flex items-center gap-1.5"
              >
                <span className="font-mono text-[#D49B44]">{s.number}.</span>
                <span>{s.title}</span>
              </a>
            ))}
          </div>
          <Link
            href="/contact"
            className="text-[#D49B44] hover:text-[#BE8532] transition-colors"
          >
            Start Your Journey &rarr;
          </Link>
        </div>
      </section>

      {/* The 5 Steps In-Depth Walkthrough */}
      <div className="divide-y divide-[#E5DFD5]">
        {steps.map((step, idx) => {
          const isEven = idx % 2 === 1;
          const StepIcon = step.icon;

          return (
            <section
              key={idx}
              id={`step-${step.number}`}
              className="py-20 lg:py-28 scroll-mt-32"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Text Column */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isEven ? "lg:order-2 anim-enter-right" : "lg:order-1 anim-enter-left"
                    }`}
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] border border-[#E5DFD5] text-[11px] font-mono font-bold text-[#D49B44] tracking-widest">
                      <StepIcon className="w-3.5 h-3.5" />
                      <span>{step.phase}</span>
                    </div>

                    <div>
                      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1A1A18] tracking-tight">
                        <span className="text-[#D49B44] font-mono mr-2">
                          {step.number}.
                        </span>
                        {step.title}
                      </h2>
                      <p className="text-sm font-semibold uppercase tracking-wider text-[#76736A] mt-1">
                        {step.subtitle}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-[#42403B] leading-relaxed">
                      {step.lead}
                    </p>

                    {/* In-Depth Engineering Points */}
                    <div className="space-y-4 pt-2 border-t border-[#E5DFD5]/80">
                      {step.inDepthPoints.map((point, pIdx) => (
                        <div key={pIdx} className="space-y-1">
                          <h4 className="text-xs uppercase tracking-wider font-bold text-[#1A1A18] flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D49B44]" />
                            {point.title}
                          </h4>
                          <p className="text-xs text-[#76736A] leading-relaxed pl-3.5">
                            {point.desc}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Key Deliverables Box */}
                    <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5] space-y-3">
                      <p className="text-[11px] uppercase tracking-wider font-bold text-[#D49B44]">
                        Key Deliverables for {step.title}:
                      </p>
                      <ul className="space-y-2">
                        {step.deliverables.map((deliv, dIdx) => (
                          <li
                            key={dIdx}
                            className="text-xs text-[#42403B] flex items-start gap-2"
                          >
                            <IconCheck className="w-3.5 h-3.5 text-[#D49B44] shrink-0 mt-0.5" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "lg:order-1 anim-enter-left" : "lg:order-2 anim-enter-right"
                    }`}
                  >
                    <div className="editorial-card relative rounded-3xl overflow-hidden shadow-2xl border border-[#E5DFD5] aspect-[16/11] bg-[#EDE8DF] group">
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                      {/* Image Overlay Label */}
                      <div className="absolute bottom-6 left-6 right-6 text-white text-xs space-y-1 drop-shadow">
                        <span className="font-mono text-[#D49B44] text-[11px] uppercase tracking-widest font-bold">
                          Step {step.number} Validation
                        </span>
                        <p className="font-serif text-lg sm:text-xl font-bold">
                          {step.title} &mdash; {step.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* The Mitraa Advantage Table */}
      <section className="py-20 lg:py-24 bg-[#FAF8F5] border-y border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44]">
              WHY THE MITRAA WAY WORKS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A18] tracking-tight">
              Turnkey Partner vs. Equipment Broker
            </h2>
            <p className="text-sm sm:text-base text-[#76736A]">
              Why working with an integrated engineering partner protects your
              capital and guarantees your beer quality.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-[#E5DFD5] shadow-sm bg-white">
            <div className="grid grid-cols-12 bg-[#F4EFE6] p-4 sm:p-6 text-xs font-bold uppercase tracking-wider text-[#1A1A18] border-b border-[#E5DFD5]">
              <div className="col-span-4">Execution Dimension</div>
              <div className="col-span-4 text-[#D49B44]">The Brau Mitraa Process</div>
              <div className="col-span-4 text-[#76736A]">Standard Component Broker</div>
            </div>

            <div className="divide-y divide-[#E5DFD5] text-xs">
              <div className="grid grid-cols-12 p-4 sm:p-6 items-center">
                <div className="col-span-4 font-semibold text-[#1A1A18]">
                  Responsibility & Accountability
                </div>
                <div className="col-span-4 text-[#1A1A18] font-medium flex items-center gap-1.5">
                  <IconCheck className="w-4 h-4 text-[#D49B44] shrink-0" />
                  <span>Single-source turnkey guarantee</span>
                </div>
                <div className="col-span-4 text-[#76736A]">
                  Fingers pointed between vendors
                </div>
              </div>

              <div className="grid grid-cols-12 p-4 sm:p-6 items-center">
                <div className="col-span-4 font-semibold text-[#1A1A18]">
                  Thermodynamic Energy Design
                </div>
                <div className="col-span-4 text-[#1A1A18] font-medium flex items-center gap-1.5">
                  <IconCheck className="w-4 h-4 text-[#D49B44] shrink-0" />
                  <span>75% energy savings via vapor recompression</span>
                </div>
                <div className="col-span-4 text-[#76736A]">
                  Standard open-stack kettle boil
                </div>
              </div>

              <div className="grid grid-cols-12 p-4 sm:p-6 items-center">
                <div className="col-span-4 font-semibold text-[#1A1A18]">
                  Commissioning & First Pour
                </div>
                <div className="col-span-4 text-[#1A1A18] font-medium flex items-center gap-1.5">
                  <IconCheck className="w-4 h-4 text-[#D49B44] shrink-0" />
                  <span>Founding German/Indian brewmasters on deck</span>
                </div>
                <div className="col-span-4 text-[#76736A]">
                  Tanks delivered to dock; customer on own
                </div>
              </div>

              <div className="grid grid-cols-12 p-4 sm:p-6 items-center">
                <div className="col-span-4 font-semibold text-[#1A1A18]">
                  Beverage Formulation Support
                </div>
                <div className="col-span-4 text-[#1A1A18] font-medium flex items-center gap-1.5">
                  <IconCheck className="w-4 h-4 text-[#D49B44] shrink-0" />
                  <span>130+ validated beer, seltzer & kombucha styles</span>
                </div>
                <div className="col-span-4 text-[#76736A]">
                  No recipe or yeast coaching provided
                </div>
              </div>

              <div className="grid grid-cols-12 p-4 sm:p-6 items-center">
                <div className="col-span-4 font-semibold text-[#1A1A18]">
                  Spare Parts & Lifetime Care
                </div>
                <div className="col-span-4 text-[#1A1A18] font-medium flex items-center gap-1.5">
                  <IconCheck className="w-4 h-4 text-[#D49B44] shrink-0" />
                  <span>24h dispatch from our central Indian industrial hub</span>
                </div>
                <div className="col-span-4 text-[#76736A]">
                  Weeks to months overseas airfreight
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross Navigation to Solutions */}
      <section className="py-16 border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD5]">
            <div>
              <p className="text-xs uppercase tracking-wider font-bold text-[#D49B44]">
                Choose Your Pathway
              </p>
              <h4 className="font-serif text-2xl font-bold text-[#1A1A18] mt-1">
                Explore our solutions tailored to your commercial stage.
              </h4>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/solutions/start-brewery"
                className="inline-flex items-center gap-2 text-xs font-semibold px-5 py-3 rounded-full bg-[#FDFBF7] hover:bg-[#F4EFE6] border border-[#E5DFD5] text-[#1A1A18] transition-colors"
              >
                <span>Start New Brewery</span>
                <IconArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/solutions/scale-operation"
                className="inline-flex items-center gap-2 text-xs font-semibold px-5 py-3 rounded-full bg-[#FDFBF7] hover:bg-[#F4EFE6] border border-[#E5DFD5] text-[#1A1A18] transition-colors"
              >
                <span>Scale Existing Operation</span>
                <IconArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-[#FDFBF7] to-[#FAF8F5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44]">
            TAKE STEP 01 TODAY
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1A18] tracking-tight">
            Ready to Begin Phase 01: Let&apos;s Talk?
          </h2>
          <p className="text-sm sm:text-base text-[#76736A] leading-relaxed">
            Send us your site address, proposed batch targets, or floor plan.
            Our founders review every brief and prepare tailored engineering
            guidance for our initial consultation.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D49B44] hover:bg-[#c08a38] text-white text-sm font-semibold px-8 py-4 rounded-full shadow transition-all duration-200 hover:scale-105"
            >
              <span>Schedule Initial Consultation</span>
              <IconArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/beverages"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#F4EFE6] text-[#1A1A18] border border-[#E5DFD5] text-sm font-semibold px-8 py-4 rounded-full transition-colors"
            >
              <span>Explore 130+ Recipes</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

