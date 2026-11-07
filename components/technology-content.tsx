"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconCpu,
  IconFlame,
  IconShieldCheck,
  IconGauge,
  IconTools,
  IconCheck,
  IconBuildingFactory2,
  IconArrowRight,
  IconBeer,
  IconClock,
  IconRefresh,
  IconPackages,
  IconChevronDown,
  IconChevronUp,
} from "@tabler/icons-react";

export function TechnologyContent() {
  const [activeTab, setActiveTab] = useState<
    "braupagode" | "recompression" | "wortchilling" | "plant200k" | "automation"
  >("braupagode");

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setExpandedFaq(expandedFaq === idx ? null : idx);
  };

  return (
    <>
      {/* Interactive Tabs Header */}
      <section className="sticky top-20 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5DFD5] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-x-auto scrollbar-none gap-2">
          <span className="text-xs uppercase tracking-wider font-bold text-[#1A1A18] shrink-0 mr-2 hidden md:inline">
            Engineering Modules:
          </span>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setActiveTab("braupagode")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === "braupagode"
                  ? "bg-[#D49B44] text-white shadow-sm"
                  : "bg-[#FDFBF7] text-[#42403B] border border-[#E5DFD5] hover:border-[#D49B44]"
              }`}
            >
              1. Braupagode™ Brewhouse
            </button>
            <button
              onClick={() => setActiveTab("recompression")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === "recompression"
                  ? "bg-[#D49B44] text-white shadow-sm"
                  : "bg-[#FDFBF7] text-[#42403B] border border-[#E5DFD5] hover:border-[#D49B44]"
              }`}
            >
              2. Vapor Recompression
            </button>
            <button
              onClick={() => setActiveTab("wortchilling")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === "wortchilling"
                  ? "bg-[#D49B44] text-white shadow-sm"
                  : "bg-[#FDFBF7] text-[#42403B] border border-[#E5DFD5] hover:border-[#D49B44]"
              }`}
            >
              3. Wort Chilling (100 kW)
            </button>
            <button
              onClick={() => setActiveTab("plant200k")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === "plant200k"
                  ? "bg-[#D49B44] text-white shadow-sm"
                  : "bg-[#FDFBF7] text-[#42403B] border border-[#E5DFD5] hover:border-[#D49B44]"
              }`}
            >
              4. 200,000L Plant Scope
            </button>
            <button
              onClick={() => setActiveTab("automation")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === "automation"
                  ? "bg-[#D49B44] text-white shadow-sm"
                  : "bg-[#FDFBF7] text-[#42403B] border border-[#E5DFD5] hover:border-[#D49B44]"
              }`}
            >
              5. Automation & Safety
            </button>
          </div>
        </div>
      </section>

      {/* Tab 1: Braupagode Brewhouse */}
      {activeTab === "braupagode" && (
        <section className="py-16 lg:py-24 animate-in fade-in duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6 anim-enter-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] border border-[#D49B44]/30 text-[#D49B44] text-xs font-bold tracking-widest uppercase">
                  <span>Patented German Geometry</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1A1A18] tracking-tight leading-[1.12]">
                  The Braupagode™ 1,000L Brewhouse: <br />
                  <span className="italic font-normal text-[#D49B44]">
                    Vertical Stacking, Parallel Production.
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-[#42403B] leading-relaxed">
                  Engineered by Brauereimanufaktur Kruppa in Germany, the Braupagode
                  revolutionizes microbrewery spatial ergonomics by vertically
                  stacking two vessels. The upper vessel houses mashing and lautering,
                  while the lower vessel serves as the wort boiling kettle and whirlpool.
                </p>
                <p className="text-xs sm:text-sm text-[#76736A] leading-relaxed">
                  The fundamental operational breakthrough over horizontal setups is
                  parallel batching: as soon as the first mash is lautered into the
                  lower kettle and begins boiling, a second brew cycle can be
                  immediately initiated in the upper tun. This enables two complete
                  1,000L brews within a single 10-hour shift (up to 500,000L annually).
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                  <div className="editorial-card anim-enter-up anim-delay-1 p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5]">
                    <span className="text-[10px] uppercase font-bold text-[#76736A] block">
                      Malt Charge
                    </span>
                    <span className="font-serif text-2xl font-bold text-[#D49B44]">
                      ~200 kg
                    </span>
                  </div>
                  <div className="editorial-card anim-enter-up anim-delay-2 p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5]">
                    <span className="text-[10px] uppercase font-bold text-[#76736A] block">
                      Cast-Out Wort
                    </span>
                    <span className="font-serif text-2xl font-bold text-[#D49B44]">
                      1,000 L
                    </span>
                  </div>
                  <div className="editorial-card anim-enter-up anim-delay-3 p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5] col-span-2 sm:col-span-1">
                    <span className="text-[10px] uppercase font-bold text-[#76736A] block">
                      Specialty Flexibility
                    </span>
                    <span className="font-serif text-2xl font-bold text-[#D49B44]">
                      6 – 12 hl
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 anim-enter-right">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E5DFD5] aspect-[4/5] bg-[#EFECE4] group">
                  <Image
                    src="/brewery/images/solution-brewery.jpg"
                    alt="Braupagode 1000L Vertical Brewhouse Stainless Steel Setup"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-white text-xs space-y-1">
                    <p className="font-serif text-xl font-bold">
                      Braupagode™ Vertical Stack
                    </p>
                    <p className="text-stone-300 text-[11px]">
                      Upper: Mash/Lauter Tun &bull; Lower: Whirlpool Kettle &bull; Forklift frame
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vessel Engineering Specifications Table */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A18] anim-enter-left">
                Mechanical & Dimensional Specifications
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Upper Tun */}
                <div className="editorial-card anim-enter-left anim-delay-1 bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-[#E5DFD5] space-y-5">
                  <div className="flex items-center justify-between border-b border-[#E5DFD5] pb-3">
                    <h4 className="font-serif text-xl font-bold text-[#1A1A18]">
                      Upper Section: Mash & Lauter Tun
                    </h4>
                    <span className="text-xs font-mono font-bold text-[#D49B44] bg-[#F4EFE6] px-2.5 py-1 rounded-full">
                      Vessel 01
                    </span>
                  </div>

                  <dl className="divide-y divide-[#E5DFD5]/70 text-xs text-[#42403B]">
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#76736A]">Inner Diameter / Outer Diameter</dt>
                      <dd className="font-mono font-bold text-[#1A1A18]">1,295 mm / 1,498 mm</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#76736A]">Inner & Outer Metallurgy</dt>
                      <dd className="font-mono font-bold text-[#1A1A18]">Stainless Steel 1.4301 (AISI 304)</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#76736A]">Interior Weld & Surface Finish</dt>
                      <dd className="font-mono font-bold text-[#1A1A18]">IIIc Mill-Finish, Ground Flush</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#76736A]">Thermal Insulation</dt>
                      <dd className="font-mono font-bold text-[#1A1A18]">100 mm Low-Chloride Rock Wool</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#76736A]">Lauter Ring Manifold</dt>
                      <dd className="font-mono font-bold text-[#1A1A18]">DN 40 (1 ½&quot;) with 4 Draw-off Points</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#76736A]">False Bottom Configuration</dt>
                      <dd className="font-mono font-bold text-[#1A1A18]">4-Segment Removable (Dome Hatch Access)</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#76736A]">Raking Machine Drive</dt>
                      <dd className="font-mono font-bold text-[#1A1A18]">VFD Gear Motor with PTC Thermistor</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#76736A]">Spent Grain Hatch & Chute</dt>
                      <dd className="font-mono font-bold text-[#1A1A18]">180 x 280 mm Stainless Chute</dd>
                    </div>
                  </dl>
                </div>

                {/* Lower Kettle */}
                <div className="editorial-card anim-enter-right anim-delay-2 bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-[#E5DFD5] space-y-5">
                  <div className="flex items-center justify-between border-b border-[#E5DFD5] pb-3">
                    <h4 className="font-serif text-xl font-bold text-[#1A1A18]">
                      Lower Section: Whirlpool & Boiling Kettle
                    </h4>
                    <span className="text-xs font-mono font-bold text-[#D49B44] bg-[#F4EFE6] px-2.5 py-1 rounded-full">
                      Vessel 02
                    </span>
                  </div>

                  <dl className="divide-y divide-[#E5DFD5]/70 text-xs text-[#42403B]">
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#76736A]">Inner Diameter / Outer Diameter</dt>
                      <dd className="font-mono font-bold text-[#1A1A18]">1,498 mm / 1,700 mm</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#76736A]">Total System Assembly Height</dt>
                      <dd className="font-mono font-bold text-[#1A1A18]">approx. 3,500 mm</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#76736A]">Max Cast-Out Volume</dt>
                      <dd className="font-mono font-bold text-[#1A1A18]">12 hl (1,200 Litres)</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#76736A]">High-Gravity Flexibility</dt>
                      <dd className="font-mono font-bold text-[#1A1A18]">6 to 12 hl (Bock, DIPA, Imperial Stout)</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#76736A]">Tangential Whirlpool Inlet</dt>
                      <dd className="font-mono font-bold text-[#1A1A18]">DN 25 (1&quot;) Tangential Trub Port</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#76736A]">Vapor Exhaust Line</dt>
                      <dd className="font-mono font-bold text-[#1A1A18]">DN 50 (2&quot;) with Recompression Feed</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#76736A]">Wort Transfer Pump</dt>
                      <dd className="font-mono font-bold text-[#1A1A18]">2.2 kW Frequency-Controlled Sanitary Pump</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-[#76736A]">Optional Outer Aesthetics</dt>
                      <dd className="font-mono font-bold text-[#1A1A18]">Traditional Bavarian Hammered Copper Cladding</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tab 2: Thermal Vapor Recompression */}
      {activeTab === "recompression" && (
        <section className="py-16 lg:py-24 animate-in fade-in duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6 anim-enter-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] border border-[#D49B44]/30 text-[#D49B44] text-xs font-bold tracking-widest uppercase">
                  <IconFlame className="w-4 h-4" />
                  <span>Thermodynamic Innovation</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1A1A18] tracking-tight leading-[1.15]">
                  Thermal Vapor Recompression: <br />
                  <span className="italic font-normal text-[#D49B44]">
                    75% Boiling Energy Reduction.
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-[#42403B] leading-relaxed">
                  In conventional wort boiling, hundreds of kilowatt-hours of
                  thermal energy escape up the exhaust stack as steam vapor. Kruppa
                  thermal vapor recompression recycles this latent energy via an
                  integrated plate heat exchanger and live-steam injection.
                </p>
                <p className="text-xs sm:text-sm text-[#76736A] leading-relaxed">
                  Half of the generated vapor is compressed using live steam and
                  routed directly back to the special distribution screen. The
                  resulting synergy cuts boiling thermal energy requirements to just
                  25% of standard boiling kettles—saving thousands of kilowatt-hours
                  every month.
                </p>

                <div className="editorial-card anim-enter-up anim-delay-1 p-6 rounded-2xl bg-[#FAF8F5] border border-[#D49B44]/30 space-y-3">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#D49B44]">
                    The Thermodynamic Recompression Cycle:
                  </h4>
                  <ul className="space-y-2 text-xs text-[#42403B]">
                    <li className="flex items-start gap-2">
                      <IconCheck className="w-4 h-4 text-[#D49B44] shrink-0 mt-0.5" />
                      <span>
                        <strong>Vapor Extraction:</strong> Boiling steam collects inside the sealed lower kettle dome and enters the DN 50 recompression loop.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconCheck className="w-4 h-4 text-[#D49B44] shrink-0 mt-0.5" />
                      <span>
                        <strong>Live Steam Injection:</strong> High-pressure live steam boosts vapor temperature and pressure within the heat exchanger.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconCheck className="w-4 h-4 text-[#D49B44] shrink-0 mt-0.5" />
                      <span>
                        <strong>Distribution Screen Return:</strong> Re-energized vapor is dispersed through a specialized screen, sustaining a rolling boil with minimal primary fuel.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6 anim-enter-right">
                <div className="editorial-card anim-enter-up anim-delay-1 p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD5] space-y-6 text-center">
                  <span className="font-serif text-5xl sm:text-6xl font-bold text-[#D49B44] block">
                    -75%
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#1A1A18]">
                      Wort Boiling Thermal Energy
                    </h3>
                    <p className="text-xs text-[#76736A] mt-2 max-w-xs mx-auto">
                      Consumes only 25% of the fuel required by standard open-vent atmospheric wort boiling pans.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#E5DFD5] grid grid-cols-2 gap-4 text-left text-xs">
                    <div>
                      <span className="text-[#76736A] block">Steam Fitting Rating</span>
                      <span className="font-bold text-[#1A1A18]">1 to 2 bar gauge</span>
                    </div>
                    <div>
                      <span className="text-[#76736A] block">Boiler Capacity Match</span>
                      <span className="font-bold text-[#1A1A18]">100 kW Output</span>
                    </div>
                  </div>
                </div>

                <div className="editorial-card anim-enter-up anim-delay-2 p-6 rounded-2xl bg-[#FDFBF7] border border-[#E5DFD5] space-y-2 text-xs">
                  <h4 className="font-bold text-[#1A1A18]">Environmental & Financial Impact:</h4>
                  <p className="text-[#76736A]">
                    For a brewery producing 200,000L to 500,000L per year, vapor recompression eliminates tens of thousands in fuel bills and reduces operational carbon footprints by over 40 tons annually.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tab 3: Two-Stage Wort Chilling & Sterile Aeration */}
      {activeTab === "wortchilling" && (
        <section className="py-16 lg:py-24 animate-in fade-in duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6 anim-enter-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] border border-[#D49B44]/30 text-[#D49B44] text-xs font-bold tracking-widest uppercase">
                  <IconGauge className="w-4 h-4" />
                  <span>Rapid Heat Recovery</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1A1A18] tracking-tight leading-[1.12]">
                  Two-Stage Wort Chiller (100 kW): <br />
                  <span className="italic font-normal text-[#D49B44]">
                    From 95°C to 6°C in 30 Minutes.
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-[#42403B] leading-relaxed">
                  Fast wort knockdown is critical to prevent dimethyl sulfide (DMS)
                  recursor formation and preserve clean hop aromatics. Our two-stage
                  stainless steel plate heat exchanger chills 10 hl (1,000L) of
                  boiling wort per hour from 95°C down to 6°C in just 30 minutes.
                </p>
                <p className="text-xs sm:text-sm text-[#76736A] leading-relaxed">
                  Simultaneously, incoming brewing water is heated from 20°C to 82°C
                  in the pre-cooling stage and returned to the hot water tank—saving
                  immense heating energy for the subsequent mash cycle.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="editorial-card anim-enter-left anim-delay-1 p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5] space-y-2">
                    <span className="text-xs font-bold uppercase text-[#D49B44]">
                      Stage 1: Pre-Cooling & Water Recovery
                    </span>
                    <p className="text-xs text-[#42403B] leading-relaxed">
                      Wort cooled from <strong>95°C to 24°C</strong> using brewing water. Fresh brewing water heats from <strong>20°C to 82°C</strong> and stores directly in the HLT for immediate reuse.
                    </p>
                  </div>
                  <div className="editorial-card anim-enter-right anim-delay-2 p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5] space-y-2">
                    <span className="text-xs font-bold uppercase text-[#D49B44]">
                      Stage 2: Ice Water Pitching Chill
                    </span>
                    <p className="text-xs text-[#42403B] leading-relaxed">
                      Wort drops from <strong>24°C to 6°C–8°C</strong> using ice/glycol water. Ice water heats from 1°C to 5°C and recirculates back to the 15 kW refrigeration tank.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6 anim-enter-right">
                <div className="editorial-card anim-enter-up anim-delay-1 p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD5] space-y-4">
                  <h3 className="font-serif text-xl font-bold text-[#1A1A18]">
                    DN 25 Sterile Aeration Unit
                  </h3>
                  <p className="text-xs text-[#76736A] leading-relaxed">
                    Prior to yeast pitching, chilled wort requires precise dissolved
                    oxygen (8–10 ppm) to facilitate healthy cell membrane lipid
                    synthesis without premature oxidation.
                  </p>
                  <ul className="space-y-2 text-xs text-[#42403B] pt-2 border-t border-[#E5DFD5]">
                    <li className="flex items-start gap-2">
                      <IconCheck className="w-4 h-4 text-[#D49B44] shrink-0 mt-0.5" />
                      <span>Sintered stainless cartridge creating microscopic counterflow bubbles.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconCheck className="w-4 h-4 text-[#D49B44] shrink-0 mt-0.5" />
                      <span>Adjustable sterile air membrane filter cartridge.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconCheck className="w-4 h-4 text-[#D49B44] shrink-0 mt-0.5" />
                      <span>Sanitary DIN 11851 check valve and fine-metering needle valve.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconCheck className="w-4 h-4 text-[#D49B44] shrink-0 mt-0.5" />
                      <span>Integrated Pt100 digital sensor monitoring final knockdown temperature.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tab 4: 200,000L Complete Plant Scope */}
      {activeTab === "plant200k" && (
        <section className="py-16 lg:py-24 animate-in fade-in duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="max-w-3xl space-y-4 anim-enter-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] border border-[#D49B44]/30 text-[#D49B44] text-xs font-bold tracking-widest uppercase">
                <IconBuildingFactory2 className="w-4 h-4" />
                <span>Commercial Production Blueprint</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1A1A18] tracking-tight leading-[1.12]">
                Complete Brewery Equipment Package <br />
                <span className="italic font-normal text-[#D49B44]">
                  For an Annual Production of 200,000 Litres.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#42403B] leading-relaxed">
                Extracted directly from our verified master engineering
                specifications, here is the complete 11-module scope of supply
                engineered to produce 200,000 litres annually with maximum
                consistency and lowest utility drag.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { num: "01. MALT HANDLING & MILLING", title: "Two-Roller Mill & Grist Conveyor", desc: "600 kg/h mill capacity with spring-loaded ball bearings, parallel gap adjustment, 100L hopper, and TSK 60 cable conveyor." },
                { num: "02. TWO-VESSEL BREWHOUSE", title: "Braupagode 1,000L System", desc: "200 kg malt charge, stacked mash/lauter tun over whirlpool kettle, 4-draw lautering ring, and 75% energy-saving vapor recompression." },
                { num: "03. WORT COOLING & AERATION", title: "100 kW Plate Chiller & Sintered Aerator", desc: "Cools 10 hl/h from 95°C to 6°C in 30 minutes. Sintered stainless cartridge aerator delivering sterile dissolved oxygen." },
                { num: "04. YEAST MANAGEMENT", title: "100L Yeast Storage Tank", desc: "Harvested yeast storage vessel allowing healthy yeast slurry propagation across 8 to 10 consecutive fermentation generations." },
                { num: "05. FERMENTATION CELLAR BLOCK", title: "4x 1,200L + 4x 2,400L Unitanks", desc: "8 total jacketed conical unitanks. Filling 16 times annually yields exactly 200,000 liters of finished craft beer." },
                { num: "06. FINISHED BEER CELLAR", title: "2x 1,000L + 2x 2,000L BBTs", desc: "Bright beer tanks for clarification and carbonation. In pub breweries, beer pumps directly to the dispensing tap wall." },
                { num: "07. CIP SANITATION STATION", title: "Integrated Clean-In-Place Cart", desc: "Mobile caustic and acid wash tanks with high-pressure centrifugal pumps, sanitizing vessels and lines with zero cross-contamination." },
                { num: "08. STEAM GENERATOR SYSTEM", title: "100 kW Steam Output (Gas/Oil)", desc: "Industrial steam boiler providing reliable 1 to 2 bar steam for mashing temperature steps, wort boiling, and CIP heating." },
                { num: "09. REFRIGERATION & GLYCOL", title: "15 kW Cooling Capacity & Glycol Tank", desc: "Centralized chilling plant with food-grade propylene glycol storage, maintaining cellar fermenters at 0°C to 12°C." },
              ].map((mod, idx) => (
                <div
                  key={idx}
                  className={`editorial-card anim-enter-up anim-delay-${(idx % 3) + 1} p-6 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD5] space-y-3`}
                >
                  <span className="text-xs font-mono font-bold text-[#D49B44]">{mod.num}</span>
                  <h4 className="font-serif text-lg font-bold text-[#1A1A18]">{mod.title}</h4>
                  <p className="text-xs text-[#76736A] leading-relaxed">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tab 5: Automation & Safety */}
      {activeTab === "automation" && (
        <section className="py-16 lg:py-24 animate-in fade-in duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6 anim-enter-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] border border-[#D49B44]/30 text-[#D49B44] text-xs font-bold tracking-widest uppercase">
                  <IconCpu className="w-4 h-4" />
                  <span>PLC Automation & Electrical Architecture</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1A1A18] tracking-tight leading-[1.12]">
                  9-Step Infusion Automation: <br />
                  <span className="italic font-normal text-[#D49B44]">
                    Precise Temperature & Time Control.
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-[#42403B] leading-relaxed">
                  Consistency is the benchmark of commercial brewing excellence.
                  Our German-engineered automation architecture delivers pure
                  temperature-time control with 9 programmable steps, automatic
                  pneumatic steam valves, and digital visualization on a 9&quot;
                  touchscreen monitor.
                </p>
                <p className="text-xs sm:text-sm text-[#76736A] leading-relaxed">
                  All electrical supply lines are protected in splash-proof IP54
                  stainless steel housings and routed through heavy-duty stainless
                  cable conduits, pre-wired and functionally tested at the factory
                  before dispatch.
                </p>

                <div className="editorial-card anim-enter-up anim-delay-1 p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5] space-y-3">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#1A1A18]">
                    Control Cabinet Protection & Circuits:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#42403B]">
                    <li className="flex items-center gap-2">
                      <IconCheck className="w-3.5 h-3.5 text-[#D49B44]" />
                      <span>1x Brewhouse Transfer Pump (2.2 kW VFD)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <IconCheck className="w-3.5 h-3.5 text-[#D49B44]" />
                      <span>1x Raking Agitator & Macerator (VFD)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <IconCheck className="w-3.5 h-3.5 text-[#D49B44]" />
                      <span>4x Pneumatic Steam Control Valves</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <IconCheck className="w-3.5 h-3.5 text-[#D49B44]" />
                      <span>1x Boil-Over Safety Sensor & Fan</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <IconCheck className="w-3.5 h-3.5 text-[#D49B44]" />
                      <span>Digital Pt100 Temperature Sensors</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <IconCheck className="w-3.5 h-3.5 text-[#D49B44]" />
                      <span>Common Motor Fault Signal & 400V Output</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6 anim-enter-right">
                <div className="editorial-card anim-enter-up anim-delay-1 p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD5] space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-[#1A1A18]">
                    Factory Pre-Assembly & Forklift Frame
                  </h3>
                  <p className="text-xs text-[#76736A] leading-relaxed">
                    Unlike modular kits that arrive in dozens of loose boxes, the
                    entire Braupagode brewhouse is pre-piped and mounted on a
                    forklift-compatible structural steel frame at the factory.
                  </p>
                  <div className="space-y-3 pt-2 text-xs text-[#42403B]">
                    <div className="flex items-start gap-2">
                      <IconCheck className="w-4 h-4 text-[#D49B44] shrink-0 mt-0.5" />
                      <span>Height-adjustable spherical feet to compensate for floor unevenness.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <IconCheck className="w-4 h-4 text-[#D49B44] shrink-0 mt-0.5" />
                      <span>Integrated checker plate operating platform with staircase included.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <IconCheck className="w-4 h-4 text-[#D49B44] shrink-0 mt-0.5" />
                      <span>On-site requirements: DN 100 sewer connection and 1–2% floor slope to stainless trench drain.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Engineering FAQs Section */}
      <section className="py-20 lg:py-24 bg-[#FAF8F5] border-y border-[#E5DFD5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 anim-enter-up">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44]">
              TECHNICAL QUESTIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A18] tracking-tight">
              Frequently Asked Engineering Questions
            </h2>
            <p className="text-sm text-[#76736A]">
              Detailed answers on Braupagode thermodynamics, production output, floor specs, and installation.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How does the Braupagode achieve two brews in a 10-hour shift?",
                a: "Because the vessels are stacked vertically, the upper mash and lauter tun is freed as soon as lautering finishes and wort fills the lower boiling kettle. You can immediately dough-in and start the next batch in the upper vessel while the first batch is boiling below.",
              },
              {
                q: "How does thermal vapor recompression save 75% of wort boiling energy?",
                a: "Conventional boiling exhausts latent steam heat into the air. The Braupagode pulls this vapor into an internal plate heat exchanger and recompresses 50% of it using a small charge of live steam. The re-energized vapor is pumped back through a distribution screen to maintain the boil, cutting fresh energy consumption to just 25%.",
              },
              {
                q: "What ceiling height and floor drainage are required for installation?",
                a: "The Braupagode assembly has a total height of approximately 3,500 mm, fitting comfortably inside standard commercial ceilings of 3.8 to 4.2 meters. Flooring must be tiled or chemical industrial resin with a 1–2% slope towards a stainless steel drainage channel with a DN 100 sewer connection.",
              },
              {
                q: "Can the system brew high-gravity beers like Imperial Stouts and IPAs?",
                a: "Yes. The whirlpool kettle heating system allows flexible cast-out volumes from 6 to 12 hl (600 to 1,200 liters). This enables specialty high-gravity brewing with large malt bills without overflow or trub fouling.",
              },
              {
                q: "What is the annual production capacity of a complete plant setup?",
                a: "In a single-shift operation (2 brews per 10-hour shift), the brewhouse can produce up to 500,000 liters annually. When paired with our 4x 1,200L + 4x 2,400L fermentation cellar (filling 16 times per year), it achieves a standard commercial production output of 200,000 liters annually.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className={`editorial-card anim-enter-up anim-delay-${(idx % 3) + 1} bg-[#FDFBF7] rounded-2xl border border-[#E5DFD5] overflow-hidden`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif text-lg font-bold text-[#1A1A18]">
                    {faq.q}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#E5DFD5] flex items-center justify-center text-[#D49B44] shrink-0">
                    {expandedFaq === idx ? (
                      <IconChevronUp className="w-4 h-4" />
                    ) : (
                      <IconChevronDown className="w-4 h-4" />
                    )}
                  </span>
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-[#42403B] leading-relaxed border-t border-[#E5DFD5]/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Technical Consultation CTA */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-[#FDFBF7] to-[#FAF8F5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 anim-enter-up">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44]">
            ENGINEERING CONSULTATION
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1A18] tracking-tight">
            Review Your Site With Our Technical Directors
          </h2>
          <p className="text-sm sm:text-base text-[#76736A] leading-relaxed">
            Send us your building drawings, electrical ratings, or target
            production volume. Rainer Kruppa, Abhay Jhaveri, and Rüdiger Stolle
            will calculate your thermodynamic balance and generate an indicative
            2D CAD brewhouse layout.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D49B44] hover:bg-[#c08a38] text-white text-sm font-semibold px-8 py-4 rounded-full shadow transition-all duration-200 hover:scale-105"
            >
              <span>Schedule Engineering Consultation</span>
              <IconArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/solutions/start-brewery"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#F4EFE6] text-[#1A1A18] border border-[#E5DFD5] text-sm font-semibold px-8 py-4 rounded-full transition-colors"
            >
              <span>Explore Turnkey Microbreweries</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

