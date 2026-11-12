"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconFlame,
  IconShieldCheck,
  IconArrowRight,
  IconCheck,
  IconSparkles,
  IconBuildingStore,
  IconBuildingFactory2,
  IconScale,
  IconTemperature,
  IconDropletFilled,
  IconCoin,
  IconTools,
  IconInfoCircle,
} from "@tabler/icons-react";

interface EquipmentSystemsProps {
  pageType?: "home" | "solution-start" | "solution-scale" | "solution-upgrade";
  className?: string;
}

export default function EquipmentSystems({
  pageType = "home",
  className = "",
}: EquipmentSystemsProps) {
  const [activeTab, setActiveTab] = useState<"copper" | "stainless">("copper");

  return (
    <section
      id="equipment-systems"
      className={`py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#E5DFD5] relative overflow-hidden ${className}`}
      data-purpose="equipment-metallurgy-systems"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EFE6] border border-[#D49B44]/30 text-xs font-bold text-[#D49B44] tracking-widest uppercase">
            <IconTools className="w-3.5 h-3.5" />
            <span>Core Brewhouse Metallurgy</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1A1A18] leading-[1.12]">
            Handcrafted Copper vs. Precision Stainless Steel. <br />
            <span className="italic font-normal text-[#D49B44]">
              Engineered for Your Exact Business Model.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#42403B] font-light leading-relaxed">
            The heart of every brewery is its brewhouse. Whether you are launching an experiential
            flagship taproom where guests drink with their eyes, or an industrial 24/7 packaging
            line maximizing hectolitres per hour, Brau Mitraa engineers both metallurgy
            paradigms to exacting German standards.
          </p>
        </div>

        {/* The Two Flagship Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-20">
          {/* PRODUCT 1: COPPER BREWHOUSE */}
          <article className="editorial-card bg-white rounded-3xl overflow-hidden border border-[#D49B44]/30 shadow-md flex flex-col justify-between group hover:border-[#D49B44] transition-all duration-300">
            <div>
              <div className="relative h-72 sm:h-80 overflow-hidden bg-stone-900">
                <Image
                  src="/brewery/images/equipment-copper-brewhouse.jpg"
                  alt="Handcrafted German-engineered copper brewhouse with polished copper kettle and brass valves"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover editorial-card-img"
                  priority={pageType === "home"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#D49B44] text-white text-xs font-semibold tracking-wide uppercase shadow">
                    Flagship Showpiece
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#FAF8F5] text-xs font-medium border border-white/20">
                    Dual-Layer Sanitary Core
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-widest text-[#D49B44] font-semibold mb-1">
                    Classic Bavarian & Bohemian Heritage
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                    Handcrafted Copper Brewhouse (Kupfer-Sudhaus)
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-sm sm:text-base text-[#42403B] leading-relaxed">
                  The quintessential Bavarian showpiece. Built for brewpubs, hotel microbreweries,
                  and destination taprooms where the brewing process is the primary visual attraction.
                  Delivers unparalleled guest engagement and timeless European elegance.
                </p>

                {/* Metallurgy Specs */}
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1A1A18]">
                    <IconScale className="w-4 h-4 text-[#D49B44]" />
                    <span>Metallurgy & Architecture</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#42403B]">
                    <li className="flex items-start gap-1.5">
                      <IconCheck className="w-3.5 h-3.5 text-[#D49B44] shrink-0 mt-0.5" />
                      <span><strong>Interior:</strong> Sanitary AISI 304/316L (Ra &lt; 0.4 µm)</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <IconCheck className="w-3.5 h-3.5 text-[#D49B44] shrink-0 mt-0.5" />
                      <span><strong>Exterior:</strong> Solid German C11000 Copper Clad</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <IconCheck className="w-3.5 h-3.5 text-[#D49B44] shrink-0 mt-0.5" />
                      <span><strong>Heat Transfer:</strong> ~20x faster than stainless steel</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <IconCheck className="w-3.5 h-3.5 text-[#D49B44] shrink-0 mt-0.5" />
                      <span><strong>Finish:</strong> High-temp anti-tarnish protective lacquer</span>
                    </li>
                  </ul>
                </div>

                {/* Key Commercial Advantages */}
                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#76736A]">
                    Commercial & Brewing Advantages
                  </p>
                  <ul className="space-y-2 text-sm text-[#42403B]">
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#FAF8F5] border border-[#D49B44] flex items-center justify-center text-[#D49B44] shrink-0 mt-0.5 font-bold text-xs">
                        1
                      </span>
                      <span>
                        <strong>Footfall & Pint Premium Multiplier:</strong> Brewpubs with visible
                        copper vessels command <strong>15%–25% higher draft price margins</strong> and
                        act as an organic magnet for photos, foot traffic, and private event bookings.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#FAF8F5] border border-[#D49B44] flex items-center justify-center text-[#D49B44] shrink-0 mt-0.5 font-bold text-xs">
                        2
                      </span>
                      <span>
                        <strong>Thermodynamic Superiority:</strong> Copper transfers heat uniformly
                        at ~390 W/m·K (vs. ~16 for steel), preventing localized scorch points and
                        catalyzing gentle Maillard caramelization essential for traditional lagers.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#FAF8F5] border border-[#D49B44] flex items-center justify-center text-[#D49B44] shrink-0 mt-0.5 font-bold text-xs">
                        3
                      </span>
                      <span>
                        <strong>Natural Sulfur (DMS) Clarification:</strong> Copper acts as a natural
                        flavor catalyst during boiling, binding volatile sulfur compounds and producing
                        exceptionally round, crisp, clean beer.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0 border-t border-[#E5DFD5]/60 mt-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-[#76736A] uppercase tracking-wider block">Typical Scale</span>
                <span className="font-serif font-bold text-lg text-[#1A1A18]">500L – 2,500L (5HL – 25HL)</span>
              </div>
              <Link
                href="/contact?interest=copper-brewhouse"
                className="inline-flex items-center gap-2 bg-[#D49B44] hover:bg-[#BE8532] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-all duration-200 hover:scale-105 shadow-sm"
              >
                <span>Inquire Copper Setup</span>
                <IconArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>

          {/* PRODUCT 2: STAINLESS STEEL BREWHOUSE */}
          <article className="editorial-card bg-white rounded-3xl overflow-hidden border border-[#E5DFD5] shadow-md flex flex-col justify-between group hover:border-[#1A1A18] transition-all duration-300">
            <div>
              <div className="relative h-72 sm:h-80 overflow-hidden bg-stone-900">
                <Image
                  src="/brewery/images/equipment-stainless-brewhouse.jpg"
                  alt="Modern commercial stainless steel brewhouse with orbital welded sanitary piping and PLC touchscreen"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover editorial-card-img"
                  priority={pageType === "home"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#1A1A18] text-white text-xs font-semibold tracking-wide uppercase shadow">
                    Commercial Workhorse
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#1A1A18] text-xs font-bold border border-[#E5DFD5]">
                    100% AISI 304 / 316L
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-widest text-[#D49B44] font-semibold mb-1">
                    Continuous High-Throughput Engineering
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                    Industrial Stainless Steel Brewhouse (Edelstahl-Sudhaus)
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-sm sm:text-base text-[#42403B] leading-relaxed">
                  The modern craft powerhouse. Built for regional packaging breweries, high-volume
                  contract facilities, and modular brewpubs prioritizing continuous multi-shift
                  brewing cycles, automated PLC recipe execution, and maximum capital efficiency.
                </p>

                {/* Metallurgy Specs */}
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1A1A18]">
                    <IconScale className="w-4 h-4 text-[#1A1A18]" />
                    <span>Metallurgy & Architecture</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#42403B]">
                    <li className="flex items-start gap-1.5">
                      <IconCheck className="w-3.5 h-3.5 text-[#1A1A18] shrink-0 mt-0.5" />
                      <span><strong>Interior:</strong> Sanitary AISI 304/316L (Ra &lt; 0.4 µm)</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <IconCheck className="w-3.5 h-3.5 text-[#1A1A18] shrink-0 mt-0.5" />
                      <span><strong>Exterior:</strong> Brushed Satin (240 Grit) or Mirror Polish</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <IconCheck className="w-3.5 h-3.5 text-[#1A1A18] shrink-0 mt-0.5" />
                      <span><strong>Pressure Jacketing:</strong> Laser-welded dimple plates (3.0 bar)</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <IconCheck className="w-3.5 h-3.5 text-[#1A1A18] shrink-0 mt-0.5" />
                      <span><strong>Sanitation:</strong> 100% Acid & Caustic CIP Resilient</span>
                    </li>
                  </ul>
                </div>

                {/* Key Commercial Advantages */}
                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#76736A]">
                    Commercial & Brewing Advantages
                  </p>
                  <ul className="space-y-2 text-sm text-[#42403B]">
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#FAF8F5] border border-[#1A1A18] flex items-center justify-center text-[#1A1A18] shrink-0 mt-0.5 font-bold text-xs">
                        1
                      </span>
                      <span>
                        <strong>Continuous Multi-Batch Output:</strong> Optimized for back-to-back 24-hour
                        brewing shifts (up to <strong>6–8 brews per day</strong>) with automated spent grain
                        evacuation and whirlpool settling.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#FAF8F5] border border-[#1A1A18] flex items-center justify-center text-[#1A1A18] shrink-0 mt-0.5 font-bold text-xs">
                        2
                      </span>
                      <span>
                        <strong>Rugged Chemical Durability:</strong> Resists aggressive nitric acid,
                        peracetic acid, and hot caustic washes without surface degradation or galvanic reactions.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#FAF8F5] border border-[#1A1A18] flex items-center justify-center text-[#1A1A18] shrink-0 mt-0.5 font-bold text-xs">
                        3
                      </span>
                      <span>
                        <strong>Capex Efficiency:</strong> Lower vessel production cost per hectolitre,
                        allowing entrepreneurs to allocate more budget toward expanded fermentation cellar blocks
                        and packaging lines.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0 border-t border-[#E5DFD5]/60 mt-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-[#76736A] uppercase tracking-wider block">Typical Scale</span>
                <span className="font-serif font-bold text-lg text-[#1A1A18]">500L – 10,000L+ (5HL – 100HL+)</span>
              </div>
              <Link
                href="/contact?interest=stainless-brewhouse"
                className="inline-flex items-center gap-2 bg-[#1A1A18] hover:bg-[#33312B] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-all duration-200 hover:scale-105 shadow-sm"
              >
                <span>Inquire Stainless Setup</span>
                <IconArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        </div>

        {/* DEEP DIVE: WHY COPPER IS AN INVESTMENT, NOT A HEADACHE */}
        <div className="bg-[#F4EFE6] rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#D49B44]/40 shadow-sm mb-20 relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#D49B44] block mb-2">
                DEBUNKING THE INDUSTRY MYTH
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A18] tracking-tight leading-[1.15]">
                Why a Copper Brewhouse is a High-Yield Investment — <br />
                <span className="text-[#D49B44] italic font-normal">
                  Rather Than an Investment Headache.
                </span>
              </h3>
              <p className="text-sm sm:text-base text-[#42403B] mt-4 leading-relaxed">
                Many new brewery owners hesitate when considering copper, fearing tarnishing,
                arduous daily hand-polishing, or chemical corrosion from modern Clean-In-Place (CIP)
                regimens. <strong>Here is how Brau Mitraa's German dual-layer engineering permanently resolves those concerns</strong>:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Pillar 1 */}
              <div className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-[#E5DFD5] space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#D49B44]/40 flex items-center justify-center text-[#D49B44]">
                  <IconShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#1A1A18]">
                  Dual-Layer Sanitary Core
                </h4>
                <p className="text-xs text-[#76736A] uppercase font-semibold">
                  Zero CIP Headache
                </p>
                <p className="text-xs sm:text-sm text-[#42403B] leading-relaxed">
                  The wort and cleaning fluids never touch copper. The interior is fabricated from
                  food-grade <strong>AISI 304 or 316L stainless steel</strong>. You use standard
                  automated caustic and acid CIP cycles with zero leaching, zero corrosion, and 100% hygiene.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-[#E5DFD5] space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#D49B44]/40 flex items-center justify-center text-[#D49B44]">
                  <IconSparkles className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#1A1A18]">
                  Nano-Sealed Anti-Tarnish
                </h4>
                <p className="text-xs text-[#76736A] uppercase font-semibold">
                  No Daily Polishing
                </p>
                <p className="text-xs sm:text-sm text-[#42403B] leading-relaxed">
                  Our exterior copper cladding is factory-sealed with an industrial high-temperature
                  protective clear coat. It resists oxidation, moisture, and fingerprints. Daily
                  maintenance requires nothing more than a gentle wipe with a microfiber cloth.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-[#D49B44]/40 flex items-center justify-center text-[#D49B44]">
                <IconCoin className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-lg text-[#1A1A18]">
                Taproom Pint Premium
              </h4>
              <p className="text-xs text-[#76736A] uppercase font-semibold">
                Measurable Financial ROI
              </p>
              <p className="text-xs sm:text-sm text-[#42403B] leading-relaxed">
                In a brewpub, the brewhouse is your central architectural centerpiece. Guests
                willingly pay <strong>15%–25% higher margins</strong> for beer brewed in an authentic
                copper cathedral. Most taprooms fully amortize the copper upgrade within 6 to 9 months.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="grid grid-cols-1 md:grid-cols-1">
              <div className="bg-white/90 backdrop-blur rounded-2xl p-6 border border-[#D49B44]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-3xl">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#D49B44] tracking-wider">
                    <IconTemperature className="w-4 h-4" />
                    <span>Thermodynamics & Flavor Chemistry</span>
                  </div>
                  <h4 className="font-serif font-bold text-xl text-[#1A1A18]">
                    Natural Sulfur Scavenging & 20x Faster Thermal Conduction
                  </h4>
                  <p className="text-xs sm:text-sm text-[#42403B] leading-relaxed">
                    Beyond sheer aesthetics, copper acts as a chemical catalyst that binds volatile
                    dimethyl sulfide (DMS) during boiling, preventing cabbage-like off-notes.
                    Its thermal conductivity (~390 W/m·K) ensures rapid heat dispersion, preventing hot-spot
                    scorching and providing smooth, authentic Bavarian malt profiles.
                  </p>
                </div>

                <Link
                  href="/contact?topic=copper-consultation"
                  className="inline-flex items-center gap-2 bg-[#D49B44] hover:bg-[#BE8532] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full whitespace-nowrap shadow transition-transform hover:scale-105 shrink-0"
                >
                  <span>Discuss With Our Brewmaster</span>
                  <IconArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* SIDE-BY-SIDE METALLURGICAL COMPARISON MATRIX */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44]">
              DETAILED TECHNICAL COMPARISON
            </p>
            <h3 className="font-serif text-3xl font-bold text-[#1A1A18] tracking-tight">
              Compare Specifications Side-by-Side
            </h3>
            <p className="text-sm text-[#76736A]">
              Evaluate which material aligns with your production volume, venue aesthetic, and budget.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#E5DFD5] bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#E5DFD5] bg-[#F4EFE6]/70">
                  <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-[#1A1A18] w-1/4">
                    Evaluation Criteria
                  </th>
                  <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-[#D49B44] w-3/8 border-l border-[#E5DFD5] bg-[#D49B44]/5">
                    Handcrafted Copper Brewhouse
                  </th>
                  <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-[#1A1A18] w-3/8 border-l border-[#E5DFD5]">
                    Industrial Stainless Steel Brewhouse
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5DFD5] text-[#42403B]">
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#1A1A18] bg-[#FAF8F5]">
                    Primary Objective
                  </td>
                  <td className="p-4 sm:p-5 border-l border-[#E5DFD5] bg-[#D49B44]/5">
                    Customer attraction, taproom draft margin, heritage brand prestige
                  </td>
                  <td className="p-4 sm:p-5 border-l border-[#E5DFD5]">
                    High-volume output, 24/7 continuous brewing, packaging distribution
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#1A1A18] bg-[#FAF8F5]">
                    Vessel Construction
                  </td>
                  <td className="p-4 sm:p-5 border-l border-[#E5DFD5] bg-[#D49B44]/5">
                    Dual-metal: 304/316L SS interior with genuine German copper cladding
                  </td>
                  <td className="p-4 sm:p-5 border-l border-[#E5DFD5]">
                    100% monolithic certified food-grade AISI 304 or 316L stainless steel
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#1A1A18] bg-[#FAF8F5]">
                    Thermal Conductivity
                  </td>
                  <td className="p-4 sm:p-5 border-l border-[#E5DFD5] bg-[#D49B44]/5 font-semibold text-[#D49B44]">
                    ~385–400 W/m·K (Ultra-fast, zero hot spots)
                  </td>
                  <td className="p-4 sm:p-5 border-l border-[#E5DFD5]">
                    ~16 W/m·K (Regulated via laser-welded dimple cooling jackets)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#1A1A18] bg-[#FAF8F5]">
                    Flavor & Chemistry
                  </td>
                  <td className="p-4 sm:p-5 border-l border-[#E5DFD5] bg-[#D49B44]/5">
                    Catalytic binding of volatile sulfur/DMS compounds; rich malt caramelization
                  </td>
                  <td className="p-4 sm:p-5 border-l border-[#E5DFD5]">
                    Neutral sensory profile; perfect for hop-forward IPAs and clean seltzers
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#1A1A18] bg-[#FAF8F5]">
                    Cleaning & CIP Regimen
                  </td>
                  <td className="p-4 sm:p-5 border-l border-[#E5DFD5] bg-[#D49B44]/5">
                    100% compatible with caustic and acid CIP (interior is sanitary SS)
                  </td>
                  <td className="p-4 sm:p-5 border-l border-[#E5DFD5]">
                    100% resilient to aggressive chemicals, peracetic acid, and steam sterilizing
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#1A1A18] bg-[#FAF8F5]">
                    Exterior Maintenance
                  </td>
                  <td className="p-4 sm:p-5 border-l border-[#E5DFD5] bg-[#D49B44]/5">
                    Simple microfiber cloth wipe (factory nano-lacquered anti-tarnish coat)
                  </td>
                  <td className="p-4 sm:p-5 border-l border-[#E5DFD5]">
                    Standard washdown with mild detergent; satin-finish hide scratches
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#1A1A18] bg-[#FAF8F5]">
                    Best Suited For
                  </td>
                  <td className="p-4 sm:p-5 border-l border-[#E5DFD5] bg-[#D49B44]/5 font-medium">
                    Gastropubs, brewpubs, hotel microbreweries, experiential brand centers
                  </td>
                  <td className="p-4 sm:p-5 border-l border-[#E5DFD5] font-medium">
                    Production microbreweries, canning/bottling facilities, contract brewing
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bottom Help Banner */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-[#E5DFD5] shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#D49B44] flex items-center justify-center text-[#D49B44] shrink-0">
                <IconInfoCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#1A1A18]">
                  Unsure which metallurgy suits your venue & financial plan?
                </p>
                <p className="text-xs text-[#76736A]">
                  Our German and Indian master brewers conduct a complimentary feasibility review for your space.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#D49B44] hover:bg-[#BE8532] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-200 hover:scale-105 shadow-sm whitespace-nowrap shrink-0"
            >
              <span>Request Feasibility Study</span>
              <IconArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
