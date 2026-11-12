"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconArrowRight,
  IconArrowLeft,
  IconPlayerPlay,
  IconStack,
  IconBuildingFactory2,
  IconBuildingStore,
  IconPackages,
  IconTools,
  IconAdjustments,
  IconBolt,
  IconTrendingUp,
  IconShieldCheck,
  IconAward,
  IconMessage,
  IconCompass,
  IconCpu,
  IconTruck,
  IconSchool,
  IconX,
  IconCheck,
} from "@tabler/icons-react";
import EquipmentSystems from "@/components/equipment-systems";

export default function HomePage() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const solutions = [
    {
      title: "Start Your Brewery",
      desc: "Restaurants, brewpubs, new ventures. Turn your idea into a working brewery with tailored turnkey setups.",
      image: "/brewery/images/solution-brewery.jpg",
      icon: IconBuildingStore,
      href: "/solutions/start-brewery",
      cta: "Explore Brewery Setups",
    },
    {
      title: "Scale Your Operation",
      desc: "Larger systems, expansions and custom automation solutions engineered to increase capacity smoothly.",
      image: "/brewery/images/solution-scale.jpg",
      icon: IconPackages,
      href: "/solutions/scale-operation",
      cta: "View Brewing Systems",
    },
    {
      title: "Upgrade or Replace",
      desc: "Individual tanks, CIP units, filtration, automated brewhouse upgrades and hands-on maintenance support.",
      image: "/brewery/images/solution-upgrade.jpg",
      icon: IconTools,
      href: "/solutions/upgrade-replace",
      cta: "Explore Equipment",
    },
  ];

  const beerStyles = [
    {
      title: "Lagers & Pilsners",
      subtitle: "Crisp. Classic. Always a favourite.",
      image: "/brewery/images/beer-lagers.jpg",
      href: "/beverages#lagers",
    },
    {
      title: "Ales & IPAs",
      subtitle: "Bold. Hoppy. Full of character.",
      image: "/brewery/images/beer-ales.jpg",
      href: "/beverages#ales",
    },
    {
      title: "Wheat Beers",
      subtitle: "Fruity. Refreshing. Distinctive.",
      image: "/brewery/images/beer-wheat.jpg",
      href: "/beverages#wheat",
    },
    {
      title: "Stouts & Porters",
      subtitle: "Rich. Roasted. Complex.",
      image: "/brewery/images/beer-stouts.jpg",
      href: "/beverages#stouts",
    },
    {
      title: "Sours & Fruit Beers",
      subtitle: "Tart. Creative. Unforgettable.",
      image: "/brewery/images/beer-sours.jpg",
      href: "/beverages#sours",
    },
    {
      title: "Mead & Braggot",
      subtitle: "Fermented honey. Ancient craft.",
      image: "/brewery/images/beer-mead.jpg",
      href: "/beverages#mead",
    },
    {
      title: "Kombucha & Teas",
      subtitle: "Live SCOBY. Sparkling botanicals.",
      image: "/brewery/images/bev-kombucha.jpg",
      href: "/beverages#kombucha",
    },
    {
      title: "Ciders & Perries",
      subtitle: "Fermented apple & pear must.",
      image: "/brewery/images/bev-cider.jpg",
      href: "/beverages#cider",
    },
    {
      title: "Flavoured Concepts",
      subtitle: "Creative. Local. Limitless.",
      image: "/brewery/images/beer-flavoured.jpg",
      href: "/beverages#experimental",
    },
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Let's Talk",
      desc: "Understand your idea, location, brew target, and specific site requirements.",
      icon: IconMessage,
    },
    {
      step: "02",
      title: "Design",
      desc: "A solution tailored precisely to your floorplan, vision and business model.",
      icon: IconCompass,
    },
    {
      step: "03",
      title: "Build",
      desc: "German & Indian manufacturing, strict quality checks, and component integration.",
      icon: IconCpu,
    },
    {
      step: "04",
      title: "Install & Commission",
      desc: "Professional mechanical setup, utility hookups, and rigorous hydrostatic testing.",
      icon: IconTruck,
    },
    {
      step: "05",
      title: "Train & Support",
      desc: "Brewmaster recipe coaching, preventive maintenance, and lifetime mitraa care.",
      icon: IconSchool,
    },
  ];

  return (
    <>
      {/* BEGIN: HeroSection */}
      <section
        className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden"
        data-purpose="hero-banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Editorial Content */}
            <div className="lg:col-span-6 space-y-6 lg:pr-6">
              {/* Etymology & Identity Badge */}
              <div className="hero-enter-kicker inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EFE6] border border-[#D49B44]/30 text-xs text-[#42403B] shadow-sm">
                <span className="font-bold text-[#D49B44] uppercase tracking-wider">Brau</span>
                <span className="text-[#76736A] text-[11px]">(German: Brew / Beer)</span>
                <span className="text-[#D49B44] font-bold">&times;</span>
                <span className="font-bold text-[#D49B44] uppercase tracking-wider">Mitraa</span>
                <span className="text-[#76736A] text-[11px]">(मित्र · Sanskrit: Friend & Companion)</span>
              </div>

              <h1 className="hero-enter-title font-serif text-4xl sm:text-5xl lg:text-[62px] leading-[1.08] font-medium tracking-tight text-[#1A1A18]">
                <span className="text-[#D49B44] font-bold">Brau Mitraa</span> — <br />
                Your Brewing Friends. <br />
                <span className="italic font-normal text-[#42403B]">
                  Setting Up the Brewery of Your Needs.
                </span>
              </h1>

              <p className="hero-enter-desc text-base sm:text-lg text-[#42403B] font-normal leading-relaxed max-w-xl">
                True to our name, we are your trusted brewing companions. We combine
                centuries of German master brewing craft with precision Indian
                fabrication to help you design, engineer, and commission the exact
                turnkey brewery your business, floor plan, and target market demand.
              </p>
              <div className="hero-enter-cta flex flex-wrap items-center gap-4 pt-2">
                <Link
                  className="inline-flex items-center gap-2 bg-[#D49B44] hover:bg-[#BE8532] text-white text-sm font-medium px-6 py-3.5 rounded-full shadow transition-all duration-200 hover:translate-x-0.5 group"
                  href="/contact"
                >
                  Let's Build Your Brewery
                  <IconArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="inline-flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#1A1A18] hover:text-[#D49B44] transition-colors group"
                >
                  <span className="w-9 h-9 rounded-full border border-[#D49B44] flex items-center justify-center text-[#D49B44] group-hover:bg-[#D49B44] group-hover:text-white transition duration-300">
                    <IconPlayerPlay className="w-4 h-4 fill-current ml-0.5" />
                  </span>
                  Watch Our Story
                </button>
              </div>
            </div>

            {/* Right Hero Image with Script Badge */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/12] bg-[#EFECE4] hero-image-cinematic">
                <Image
                  src="/brewery/images/hero-toast.jpg"
                  alt="Friends toasting golden craft beer glasses in an ambient brewery"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transform hover:scale-102 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                {/* Stylized Script Quote Badge Overlay */}
                <div className="absolute bottom-6 right-6 text-right max-w-xs pointer-events-none drop-shadow-md">
                  <p className="font-script text-3xl sm:text-4xl text-white font-bold leading-none transform -rotate-3 tracking-wide">
                    Good Beer
                    <br />
                    Brings People
                    <br />
                    Together
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Pillars Strip */}
          <div className="hero-enter-strip mt-14 pt-8 border-t border-[#E5DFD5] grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white/70 border border-[#E5DFD5]/70 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#D49B44]/30 flex items-center justify-center text-[#D49B44] shrink-0">
                <span className="font-serif text-sm font-bold">DE+IN</span>
              </div>
              <div>
                <p className="text-sm font-bold text-[#1A1A18]">
                  Global Expertise
                </p>
                <p className="text-xs text-[#76736A]">
                  Germany + India Engineering
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white/70 border border-[#E5DFD5]/70 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#D49B44]/30 flex items-center justify-center text-[#D49B44] shrink-0">
                <IconStack className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#1A1A18]">
                  End-to-End Support
                </p>
                <p className="text-xs text-[#76736A]">From concept to final pour</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white/70 border border-[#E5DFD5]/70 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#D49B44]/30 flex items-center justify-center text-[#D49B44] shrink-0">
                <IconBuildingFactory2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#1A1A18]">
                  For Every Scale
                </p>
                <p className="text-xs text-[#76736A]">
                  Restaurants to commercial breweries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: HeroSection */}

      {/* BEGIN: EngineeringSynergySection */}
      <section
        id="synergy"
        className="py-20 lg:py-24 bg-[#FAF8F5] border-y border-[#E5DFD5]"
        data-purpose="engineering-synergy"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-6 scroll-reveal">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44]">
                THE ENGINEERING SYNERGY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A18] tracking-tight leading-[1.14]">
                German Brewing Engineering. <br />
                <span className="italic font-normal text-[#D49B44]">
                  Indian Precision Manufacturing.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#42403B] leading-relaxed">
                Historically, ambitious craft breweries had two bad choices: pay
                crippling import markups for European brewhouses that arrived
                months late, or risk their entire business on local vendors
                unfamiliar with fluid dynamics, dead-leg sanitary rules, and
                thermal recompression.
              </p>
              <p className="text-sm text-[#76736A] leading-relaxed">
                Brau Mitraa was created to abolish this false tradeoff. Master
                brewers and engineers design and certify every system to German
                industrial DIN/TÜV standards, while our advanced manufacturing
                hub in Indore executes precision stainless fabrication. The
                result is pure German engineering rigor at accessible local
                manufacturing efficiency.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/about#synergy"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#1A1A18] hover:text-[#D49B44] transition-colors group"
                >
                  <span>Learn About Our Origin & Founders</span>
                  <IconArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <span className="text-[#E5DFD5] hidden sm:inline">&bull;</span>
                <Link
                  href="/beverages"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#76736A] hover:text-[#D49B44] transition-colors"
                >
                  <span>130+ Validated Styles</span>
                </Link>
              </div>
            </div>

            {/* Right Comparison Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* German Side */}
              <div className="editorial-card anim-enter-left bg-[#FDFBF7] rounded-3xl p-6 sm:p-8 border border-[#E5DFD5] space-y-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">🇩🇪</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D49B44] bg-[#F4EFE6] px-2.5 py-1 rounded-full border border-[#D49B44]/20">
                    Bavaria & Baden-Württemberg
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1A1A18]">
                  German Engineering Heritage
                </h3>
                <ul className="space-y-2.5 text-xs text-[#76736A]">
                  <li className="flex items-start gap-2">
                    <IconCheck className="w-4 h-4 text-[#D49B44] shrink-0 mt-0.5" />
                    <span>
                      Proprietary Braupagode vertical vessel thermodynamic design
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCheck className="w-4 h-4 text-[#D49B44] shrink-0 mt-0.5" />
                    <span>
                      Thermal vapor recompression saving 75% of wort boiling
                      energy
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCheck className="w-4 h-4 text-[#D49B44] shrink-0 mt-0.5" />
                    <span>
                      Reinheitsgebot pure brewing discipline & recipe
                      formulation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCheck className="w-4 h-4 text-[#D49B44] shrink-0 mt-0.5" />
                    <span>
                      DIN 11851 sanitary union fittings & aseptic sampling ports
                    </span>
                  </li>
                </ul>
              </div>

              {/* Indian Side */}
              <div className="editorial-card anim-enter-right anim-delay-1 bg-[#FDFBF7] rounded-3xl p-6 sm:p-8 border border-[#E5DFD5] space-y-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">🇮🇳</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D49B44] bg-[#F4EFE6] px-2.5 py-1 rounded-full border border-[#D49B44]/20">
                    Indore Industrial Hub
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1A1A18]">
                  Indian Fabrication Excellence
                </h3>
                <ul className="space-y-2.5 text-xs text-[#76736A]">
                  <li className="flex items-start gap-2">
                    <IconCheck className="w-4 h-4 text-[#D49B44] shrink-0 mt-0.5" />
                    <span>
                      Certified food-grade SS304/SS316 fabrication facility
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCheck className="w-4 h-4 text-[#D49B44] shrink-0 mt-0.5" />
                    <span>
                      Up to 40% capital expenditure savings versus European
                      imports
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCheck className="w-4 h-4 text-[#D49B44] shrink-0 mt-0.5" />
                    <span>
                      Rapid local dispatch for spare parts, seals, and gaskets
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCheck className="w-4 h-4 text-[#D49B44] shrink-0 mt-0.5" />
                    <span>
                      Direct in-country commissioning, training, and 24/7 support
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: EngineeringSynergySection */}

      {/* BEGIN: SolutionsSection */}
      <section
        id="solutions"
        className="py-20 bg-[#FDFBF7] border-b border-[#E5DFD5]"
        data-purpose="solutions-overview"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="anim-enter-up flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44] mb-2">
                SOLUTIONS FOR EVERY AMBITION
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#1A1A18] tracking-tight leading-[1.12]">
                From a single tank to a complete brewery.
              </h2>
            </div>
            <div className="lg:max-w-md text-left lg:text-right space-y-3">
              <p className="text-sm text-[#42403B] leading-relaxed">
                Whether you're a restaurant, entrepreneur or an established
                brewery; we design, manufacture and deliver brewing systems that
                fit your vision, your space and your market.
              </p>
              <a
                className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#1A1A18] hover:text-[#D49B44] transition-colors group"
                href="#contact"
              >
                <span>Explore All Solutions</span>
                <IconArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* 3 Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((item, idx) => {
              const IconComponent = item.icon;
              const enterDirection =
                idx === 0
                  ? "anim-enter-left"
                  : idx === 1
                  ? "anim-enter-up anim-delay-1"
                  : "anim-enter-right anim-delay-2";
              return (
                <article
                  key={idx}
                  className={`editorial-card ${enterDirection} bg-white rounded-2xl overflow-hidden border border-[#E5DFD5] shadow-sm group flex flex-col justify-between`}
                >
                  <div className="relative h-64 overflow-hidden bg-stone-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover editorial-card-img"
                    />
                    <div className="absolute top-4 left-4 w-9 h-9 rounded-lg bg-white/90 backdrop-blur border border-[#D49B44]/40 flex items-center justify-center text-[#D49B44] shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#1A1A18] mb-2 group-hover:text-[#D49B44] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#42403B] leading-relaxed mb-6">
                        {item.desc}
                      </p>
                    </div>
                    <Link
                      className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-[#D49B44] hover:text-[#BE8532]"
                      href={item.href}
                    >
                      {item.cta}{" "}
                      <IconArrowRight className="w-3.5 h-3.5 editorial-arrow" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      {/* END: SolutionsSection */}

      {/* BEGIN: EquipmentSystemsSection (Copper vs Stainless Steel) */}
      <EquipmentSystems pageType="home" />
      {/* END: EquipmentSystemsSection */}

      {/* BEGIN: TechnologySection */}
      <section
        id="technology"
        className="py-20 lg:py-28 overflow-hidden"
        data-purpose="engineering-technology"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Text Details */}
            <div className="lg:col-span-5 space-y-6 anim-enter-left">
              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44]">
                ENGINEERED FOR A BETTER BREW
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#1A1A18] tracking-tight leading-[1.12]">
                Brewing technology without boundaries.
              </h2>
              <p className="text-base text-[#42403B] leading-relaxed">
                Our equipment is manufactured in Germany and India, with
                carefully selected components sourced to our standards. The
                result: reliable, efficient and scalable brewing systems built
                for the real world.
              </p>
              <div className="pt-2">
                <Link
                  className="inline-flex items-center gap-2 bg-[#D49B44] hover:bg-[#BE8532] text-white text-sm font-medium px-6 py-3.5 rounded-full shadow transition-all duration-200 group"
                  href="/technology"
                >
                  Discover Our Technology
                  <IconArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Center Porthole Manway Visual */}
            <div className="lg:col-span-4 flex justify-center anim-enter-zoom">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-3 bg-gradient-to-tr from-stone-400 via-stone-200 to-stone-500 shadow-2xl border-4 border-[#FAF8F5]">
                <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner">
                  <Image
                    src="/brewery/images/tech-sight-glass.jpg"
                    alt="Craft beer sight glass fermentation bubbling"
                    fill
                    sizes="384px"
                    className="object-cover scale-110"
                  />
                  {/* Circular highlight glare effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/30 pointer-events-none porthole-sheen" />
                  {/* Radial brass rim ring */}
                  <div className="absolute inset-0 rounded-full border-8 border-stone-700/30 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Right Feature Badges Column */}
            <div className="lg:col-span-3 space-y-6">
              {[
                { label: "Precise Engineering", icon: IconAdjustments },
                { label: "Energy Efficient", icon: IconBolt },
                { label: "Scalable Solutions", icon: IconTrendingUp },
                { label: "Global Compliance", icon: IconShieldCheck },
                { label: "Built to Last", icon: IconAward },
              ].map((badge, idx) => {
                const BadgeIcon = badge.icon;
                const delayClass = `anim-delay-${Math.min(idx + 1, 5)}`;
                return (
                  <div key={idx} className={`anim-enter-right flex items-center gap-3 ${delayClass} group`}>
                    <span className="w-10 h-10 rounded-full border border-[#D49B44] flex items-center justify-center text-[#D49B44] shrink-0 bg-[#FAF8F5] transition-all duration-300 group-hover:bg-[#D49B44] group-hover:text-white group-hover:scale-105">
                      <BadgeIcon className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-semibold tracking-wider uppercase text-[#1A1A18] transition-colors duration-200 group-hover:text-[#D49B44]">
                      {badge.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* END: TechnologySection */}

      {/* BEGIN: BeveragePortfolio */}
      <section
        id="beverages"
        className="py-20 bg-[#FAF8F5] border-t border-[#E5DFD5]"
        data-purpose="beverage-styles"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="anim-enter-up flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44] mb-2">
                A WORLD OF FLAVOURS
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#1A1A18] tracking-tight">
                What will you brew?
              </h2>
              <p className="text-sm text-[#76736A] mt-2">
                From timeless classics to bold experiments, explore a wide range
                of beer styles and other brewed beverages.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                className="text-xs uppercase tracking-wider font-semibold text-[#1A1A18] hover:text-[#D49B44] transition-colors group flex items-center gap-1"
                href="/beverages"
              >
                <span>Explore the Full Catalogue</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <div className="flex gap-2">
                <button
                  onClick={() => scrollCarousel("left")}
                  aria-label="Scroll styles left"
                  className="w-9 h-9 rounded-full border border-[#D49B44] flex items-center justify-center text-[#1A1A18] hover:bg-[#D49B44] hover:text-white transition duration-200"
                >
                  <IconArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollCarousel("right")}
                  aria-label="Scroll styles right"
                  className="w-9 h-9 rounded-full border border-[#D49B44] flex items-center justify-center text-[#1A1A18] hover:bg-[#D49B44] hover:text-white transition duration-200"
                >
                  <IconArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* 7 Beer Style Cards (Scrollable Carousel) */}
          <div
            ref={carouselRef}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 overflow-x-auto pb-4 custom-scrollbar"
          >
            {beerStyles.map((style, idx) => (
              <Link
                key={idx}
                href={style.href}
                className={`editorial-card anim-enter-up anim-delay-${(idx % 4) + 1} bg-white rounded-xl p-3 border border-[#E5DFD5] group flex flex-col justify-between min-w-[150px] shadow-sm`}
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-[#1A1A18] relative">
                  <Image
                    src={style.image}
                    alt={style.title}
                    fill
                    sizes="150px"
                    className="object-cover editorial-card-img"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1A1A18] leading-tight group-hover:text-[#D49B44] transition-colors">
                    {style.title}
                  </h4>
                  <p className="text-[11px] text-[#76736A] mt-1 leading-snug">
                    {style.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* END: BeveragePortfolio */}

      {/* BEGIN: JourneySection */}
      <section
        id="journey"
        className="py-20 lg:py-24 bg-[#F4EFE6]/70 border-y border-[#E5DFD5]"
        data-purpose="process-timeline"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="anim-enter-up flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44] mb-2">
                THE BRAU MITRAA JOURNEY
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#1A1A18] tracking-tight">
                From idea to your first pour.
              </h2>
            </div>
            <div className="space-y-2 lg:text-right">
              <p className="text-sm text-[#42403B] max-w-md">
                We're with you at every stage – from concept and design to
                installation, training and ongoing support.
              </p>
              <Link
                href="/process"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#D49B44] hover:text-[#BE8532] transition-colors group"
              >
                <span>Explore the 5-Step Process in Detail</span>
                <IconArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* 5 Steps Process Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 journey-connector">
            {journeySteps.map((step, idx) => {
              const StepIcon = step.icon;
              const delayClass = `anim-delay-${idx + 1}`;
              return (
                <Link
                  key={idx}
                  href={`/process#step-${step.step}`}
                  className={`editorial-card anim-enter-up ${delayClass} bg-white/80 backdrop-blur rounded-2xl p-6 border border-[#E5DFD5] relative flex flex-col justify-between group z-10 shadow-sm`}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#D49B44]/40 flex items-center justify-center text-[#D49B44] mb-4 group-hover:scale-105 transition-transform duration-300">
                      <StepIcon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#D49B44] tracking-widest block mb-1">
                      {step.step}
                    </span>
                    <h4 className="text-base font-bold text-[#1A1A18] mb-2 group-hover:text-[#D49B44] transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[#76736A] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="pt-4 flex items-center gap-1 text-[11px] font-semibold text-[#D49B44] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span>Learn more</span>
                    <IconArrowRight className="w-3 h-3 editorial-arrow" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      {/* END: JourneySection */}

      {/* BEGIN: StorySection */}
      <section
        className="py-20 lg:py-28"
        data-purpose="about-founders"
        id="story"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image of founders reviewing architectural brewery blueprints */}
            <div className="lg:col-span-7 anim-enter-left">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E5DFD5] relative h-[420px] sm:h-[480px] group">
                <Image
                  src="/brewery/images/story-founders.jpg"
                  alt="Brewing experts and engineers collaborating over table blueprints"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover editorial-card-img"
                />
                <div className="absolute inset-0 bg-stone-900/10 pointer-events-none" />
              </div>
            </div>

            {/* Editorial text */}
            <div className="lg:col-span-5 space-y-6 anim-enter-right">
              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44]">
                PEOPLE BEHIND POSSIBILITIES
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#1A1A18] tracking-tight leading-[1.12]">
                Experience. Passion. <br />A shared vision.
              </h2>
              <p className="text-base text-[#42403B] leading-relaxed">
                A German brewing expert, an experienced project leader and a
                young industrialist with a global outlook came together to
                create Brau Mitraa – a partner for anyone who wants to brew,
                anywhere in the world.
              </p>
              <p className="text-sm text-[#76736A] leading-relaxed">
                We bridge traditional brewing heritage with agile fabrication,
                ensuring your facility delivers consistent flavor and
                sustainable operation.
              </p>
              <div className="pt-2">
                <Link
                  className="inline-flex items-center gap-2 bg-[#D49B44] hover:bg-[#BE8532] text-white text-sm font-medium px-6 py-3.5 rounded-full shadow transition-colors duration-200 group"
                  href="/about"
                >
                  <span>Meet Our Founders & Story</span>
                  <IconArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: StorySection */}

      {/* BEGIN: CallToActionBanner */}
      <section
        className="relative py-24 sm:py-32 overflow-hidden"
        data-purpose="final-call-to-action"
        id="contact"
      >
        {/* Background Ambient Taproom/Brewery Image */}
        <div className="absolute inset-0 z-0 anim-enter-zoom">
          <Image
            src="/brewery/images/cta-taproom.jpg"
            alt="Warm illuminated brewery and restaurant ambient background"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-900/80 to-stone-950/70 pointer-events-none" />
        </div>

        {/* Banner Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 anim-enter-left">
              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44]">
                EVERY GREAT BREW STARTS SOMEWHERE
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
                Let's bring your brewery to life.
              </h2>
            </div>
            <div className="lg:col-span-5 space-y-6 anim-enter-right anim-delay-1">
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                A new venture, an expansion, or a single piece of equipment.
                Tell us what you're brewing up, and let's start a conversation.
              </p>
              <Link
                className="inline-flex items-center gap-2 bg-[#D49B44] hover:bg-[#BE8532] text-white text-sm font-medium px-7 py-3.5 rounded-full shadow-lg transition duration-200 group"
                href="/contact"
              >
                Book a Consultation
                <IconArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* END: CallToActionBanner */}

      {/* Video Story Modal */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="bg-[#FAF8F5] rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl border border-[#E5DFD5]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#F4EFE6] text-[#76736A] hover:text-[#1A1A18] transition"
              aria-label="Close modal"
            >
              <IconX className="w-5 h-5" />
            </button>
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D49B44]">
                OUR HERITAGE & VISION
              </span>
              <h3 className="font-serif text-3xl text-[#1A1A18]">
                Crafting Possibilities Together
              </h3>
              <p className="text-sm text-[#42403B] leading-relaxed">
                Brau Mitraa was founded by master German brewers and precision
                Indian engineers united by one dream: delivering turnkey brewery
                technology built without compromise. From micro-breweries to
                commercial scale, we handle the science, engineering, and
                commissioning so you can focus on brewing exceptional beverages.
              </p>
              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setVideoModalOpen(false)}
                  className="bg-[#D49B44] hover:bg-[#BE8532] text-white text-xs font-semibold px-6 py-2.5 rounded-full transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
