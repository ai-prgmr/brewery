import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  IconBrandLinkedin,
  IconArrowRight,
  IconArrowUpRight,
  IconCertificate,
  IconBuildingFactory2,
  IconFlame,
  IconShieldCheck,
  IconMapPin,
  IconCheck,
  IconBeer,
} from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "About Us & Founders | Brau Mitraa - German-Indian Brewery Engineering",
  description:
    "Three founders, two countries, one standard: build breweries in India the way they are built in Germany. Meet Rainer Kruppa, Abhay Jhaveri, and Rüdiger Stolle.",
  openGraph: {
    title: "Who Builds Your Brewery? | Brau Mitraa Founders & Story",
    description:
      "Meet the German brewmasters and Indian industrial leaders engineering modern, energy-efficient turnkey breweries worldwide.",
    url: "https://braumitraa.com/about",
    siteName: "Brau Mitraa",
    images: [
      {
        url: "/images/story-founders.jpg",
        width: 1200,
        height: 630,
        alt: "Brau Mitraa Founders & Engineers Collaborating on Brewery Blueprints",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us & Founders | Brau Mitraa",
    description:
      "Three founders, two countries, one standard: build breweries in India the way they are built in Germany.",
    images: ["/images/story-founders.jpg"],
  },
};

interface Founder {
  name: string;
  role: string;
  location: string;
  country: string;
  flag: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
  isRound?: boolean;
  credentials: string[];
  bio: string;
  responsibilities: string[];
  linkedInUrl: string;
}

const founders: Founder[] = [
  {
    name: "Rainer Kruppa",
    role: "Co-Founder & Brewing Technology Director",
    location: "Germany",
    country: "Germany",
    flag: "🇩🇪",
    image: "/images/founders/rainer-kruppa.jpg",
    imageAlt:
      "Rainer Kruppa pouring a freshly brewed beer from a stainless brewery tank",
    objectPosition: "50% 20%",
    isRound: false,
    credentials: [
      "Diplom-Braumeister (Master Brewer)",
      "Brauereimanufaktur Kruppa",
      "Inventor of the Braupagode",
    ],
    bio: "With over three decades at the forefront of German brewing craft and brewhouse manufacturing, Rainer Kruppa brings authentic Bavarian brewing heritage and revolutionary thermodynamic design to Brau Mitraa. He engineered the proprietary Braupagode—a vertically stacked two-vessel brewhouse that incorporates thermal vapor recompression to slash boiling energy consumption by up to 75%.",
    responsibilities: [
      "Brewhouse thermodynamic modeling & equipment design",
      "Vapor recompression & heat recovery optimization",
      "German DIN/TÜV sanitary brewing standard certification",
      "Authentic recipe architecture & yeast management",
    ],
    linkedInUrl: "https://www.linkedin.com/search/results/all/?keywords=Rainer%20Kruppa%20Brau%20Mitraa",
  },
  {
    name: "Abhay Jhaveri",
    role: "Co-Founder & Managing Director",
    location: "Indore, India",
    country: "India",
    flag: "🇮🇳",
    image: "/images/founders/abhay-jhaveri.jpg",
    imageAlt:
      "Abhay Jhaveri holding a beer in a brewpub with copper kettles behind him",
    objectPosition: "50% 15%",
    isRound: false,
    credentials: [
      "Industrialist & Managing Director",
      "Advanced Manufacturing Hub, Indore",
      "Turnkey Project Leadership",
    ],
    bio: "A visionary industrialist with a global outlook, Abhay Jhaveri leads Brau Mitraa's manufacturing infrastructure, supply chain, and business operations in Indore. He recognized that regional craft brewers faced a punishing compromise between exorbitant European import costs and inconsistent local fabrications. Abhay established the precision manufacturing protocols that bring German engineering tolerances to life in India.",
    responsibilities: [
      "Precision SS304/SS316 fabrication management in Indore",
      "Turnkey project delivery & commercial contracting",
      "Strategic equipment sourcing & quality assurance",
      "Client commissioning, spare parts logistics & lifetime support",
    ],
    linkedInUrl: "https://www.linkedin.com/search/results/all/?keywords=Abhay%20Jhaveri%20Brau%20Mitraa",
  },
  {
    name: "Rüdiger Stolle",
    role: "Co-Founder & Technical Director",
    location: "Germany",
    country: "Germany",
    flag: "🇩🇪",
    image: "/images/founders/ruediger-stolle.jpg",
    imageAlt: "Portrait of Rüdiger Stolle",
    objectPosition: "center",
    isRound: true,
    credentials: [
      "Senior Brewing Consultant",
      "International Project Leader",
      "Process Automation Specialist",
    ],
    bio: "Rüdiger Stolle combines extensive hands-on plant management with international brewhouse commissioning experience across Europe and Asia. He oversees system integration, fluid dynamics, PLC automation architectures, and rigorous sanitation protocols. Rüdiger ensures that every component—from the DN40 lautering manifold to multi-stage CIP loops—performs reliably under real commercial peak-shift loads.",
    responsibilities: [
      "Global plant layout, piping & P&ID engineering",
      "PLC automation, VFD raking & temperature profiling",
      "Clean-In-Place (CIP) validation & micro-hygiene",
      "Brewery commissioning & technical operational training",
    ],
    linkedInUrl: "https://www.linkedin.com/search/results/all/?keywords=R%C3%BCdiger%20Stolle%20Brau%20Mitraa",
  },
];

const pillars = [
  {
    number: "01",
    title: "Metallurgical Purity & Craftsmanship",
    desc: "Every vessel is constructed from certified food-grade SS 1.4301 (AISI 304) or SS 1.4404 (AISI 316L). Internal surfaces and welds are ground flush to IIIc mill-finish, pickled, and passivated to eliminate any risk of microbial harbor points.",
    icon: IconShieldCheck,
  },
  {
    number: "02",
    title: "Thermodynamic Innovation (Braupagode)",
    desc: "By stacking the mash/lauter tun vertically above the wort boiler and integrating thermal vapor recompression, our systems conserve up to 50% physical floor space and slash thermal boiling energy consumption by up to 75%.",
    icon: IconFlame,
  },
  {
    number: "03",
    title: "Turnkey Accountability Without Compromise",
    desc: "We don't simply ship crated stainless steel. We design your floor plan, review municipal civil utility loads, supervise mechanical installation, commission recipes on-site, and train your staff until the first pour is certified.",
    icon: IconBuildingFactory2,
  },
  {
    number: "04",
    title: "130+ Validated Beverage Formulations",
    desc: "Our engineering is validated across 130+ distinct styles: from Munich Helles and crisp Pilsners to double dry-hopped IPAs, barrel-aged stouts, kombuchas, and gluten-free craft hard seltzers.",
    icon: IconBeer,
  },
];

const stats = [
  { value: "30+", label: "Years Combined Brewing Experience" },
  { value: "2", label: "Global Engineering Hubs (Germany & India)" },
  { value: "75%", label: "Thermal Wort Boiling Energy Saved" },
  { value: "130+", label: "Catalogued & Proven Beverage Profiles" },
];

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://braumitraa.com/about#webpage",
        "url": "https://braumitraa.com/about",
        "name": "About Us & Founders | Brau Mitraa",
        "description":
          "Three founders, two countries, one standard: build breweries in India the way they are built in Germany.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://braumitraa.com/#website",
          "name": "Brau Mitraa",
          "url": "https://braumitraa.com",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://braumitraa.com/#organization",
        "name": "Brau Mitraa",
        "url": "https://braumitraa.com",
        "logo": "https://braumitraa.com/images/hero-brewery.jpg",
        "slogan": "Brewing Possibilities Together",
        "foundingLocation": [
          {
            "@type": "Place",
            "name": "Germany",
          },
          {
            "@type": "Place",
            "name": "Indore, India",
          },
        ],
        "founders": founders.map((f) => ({
          "@type": "Person",
          "name": f.name,
          "jobTitle": f.role,
          "nationality": f.country,
          "description": f.bio,
          "sameAs": f.linkedInUrl,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://braumitraa.com/about#breadcrumb",
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
            "name": "About Us",
            "item": "https://braumitraa.com/about",
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

      {/* Hero Header Section */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-[#E5DFD5] overflow-hidden bg-gradient-to-b from-[#FAF8F5] to-[#FDFBF7]">
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
              About Us
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EFE6] border border-[#D49B44]/30 text-[#D49B44] text-xs font-bold tracking-widest uppercase">
                <span>Our Heritage & Leadership</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1A1A18] leading-[1.12]">
                Brewing Possibilities Together. <br />
                <span className="italic font-normal text-[#D49B44]">
                  Two Countries, One Standard.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-[#42403B] font-light leading-relaxed max-w-3xl">
                Brau Mitraa was founded on a simple conviction: craft brewers
                worldwide deserve the uncompromising thermal precision of German
                engineering without the inflated costs, prolonged lead times, and
                rigid aloofness of traditional imports.
              </p>
              <p className="text-sm sm:text-base text-[#76736A] leading-relaxed max-w-2xl">
                By uniting Germany’s master brewing lineage with India’s advanced
                sanitary fabrication in Indore, we provide end-to-end turnkey
                solutions that empower visionary brewers from first blueprint to
                first pour.
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#E5DFD5] shadow-sm relative space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-[#D49B44]/15 border border-[#D49B44]/30 flex items-center justify-center text-[#D49B44]">
                  <IconCertificate className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl text-[#1A1A18] font-bold">
                    The &ldquo;Mitraa&rdquo; Promise
                  </h2>
                  <p className="text-xs uppercase tracking-widest text-[#D49B44] font-semibold mt-1">
                    मित्र · Companion & Trusted Partner
                  </p>
                </div>
                <p className="text-xs text-[#76736A] leading-relaxed">
                  In Sanskrit and modern Indian languages, &ldquo;Mitraa&rdquo;
                  means true friend and ally. We don&apos;t just sell equipment;
                  our founders walk your brewdeck, optimize your lautering cycles,
                  and remain your trusted co-pilots for the lifetime of your
                  brewery.
                </p>
                <div className="pt-2 border-t border-[#E5DFD5] flex items-center justify-between text-xs font-semibold text-[#1A1A18]">
                  <span>Headquarters</span>
                  <span className="text-[#D49B44]">Germany &bull; India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Founders Section */}
      <section
        id="founders"
        className="py-20 lg:py-28 border-b border-[#E5DFD5]"
        aria-labelledby="h-founders"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44]">
              Leadership & Craftsmanship
            </span>
            <h2
              id="h-founders"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A18] tracking-tight"
            >
              Who builds your brewery?
            </h2>
            <p className="text-base sm:text-lg text-[#76736A] leading-relaxed">
              Three founders, two countries, one standard: build breweries in
              India the way they are built in Germany.
            </p>
          </div>

          {/* 3 Founders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {founders.map((founder, idx) => {
              const enterDirection =
                idx === 0
                  ? "anim-enter-left"
                  : idx === 1
                  ? "anim-enter-up anim-delay-1"
                  : "anim-enter-right anim-delay-2";
              return (
                <article
                  key={idx}
                  className={`person editorial-card ${enterDirection} bg-[#FAF8F5] rounded-3xl border border-[#E5DFD5] shadow-sm flex flex-col overflow-hidden group`}
                >
                  {/* Photo Container */}
                  <div
                    className={`ph relative w-full ${
                      founder.isRound ? "p-8 pb-4 flex justify-center" : "h-72"
                    } bg-[#F4EFE6] overflow-hidden`}
                  >
                    {founder.isRound ? (
                      /* Round Portrait Style for Rüdiger Stolle */
                      <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-[#FAF8F5] shadow-lg group-hover:scale-105 transition-transform duration-500 bg-[#E8E2D7]">
                        <Image
                          src={founder.image}
                          alt={founder.imageAlt}
                          fill
                          sizes="(max-width: 768px) 176px, 176px"
                          className="object-cover"
                          style={{ objectPosition: founder.objectPosition }}
                        />
                      </div>
                    ) : (
                      /* Full Cover Style for Rainer Kruppa and Abhay Jhaveri */
                      <div className="relative w-full h-full overflow-hidden">
                        <Image
                          src={founder.image}
                          alt={founder.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          style={{ objectPosition: founder.objectPosition }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                      </div>
                    )}

                    {/* Country Pill */}
                    <span className="pill absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FAF8F5]/90 backdrop-blur-md border border-[#E5DFD5] text-[#1A1A18] shadow-sm">
                      <span>{founder.flag}</span>
                      <span>{founder.country}</span>
                    </span>
                  </div>

                  {/* Card Content Body */}
                  <div className="bd p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      {/* Name & Role */}
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-[#1A1A18] tracking-tight group-hover:text-[#D49B44] transition-colors">
                          {founder.name}
                        </h3>
                        <p className="text-xs uppercase tracking-wider font-semibold text-[#D49B44] mt-1 flex items-center gap-1.5">
                          <IconMapPin className="w-3.5 h-3.5" />
                          {founder.role}, {founder.location}
                        </p>
                      </div>

                      {/* Credentials Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {founder.credentials.map((cred, cIdx) => (
                          <span
                            key={cIdx}
                            className="inline-block text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-[#F4EFE6] text-[#42403B] border border-[#E5DFD5]"
                          >
                            {cred}
                          </span>
                        ))}
                      </div>

                      {/* Bio Narrative */}
                      <p className="text-xs sm:text-sm text-[#42403B] leading-relaxed pt-2">
                        {founder.bio}
                      </p>

                      {/* Key Responsibilities */}
                      <div className="pt-2 border-t border-[#E5DFD5]/80 space-y-2">
                        <p className="text-[11px] uppercase tracking-wider font-bold text-[#76736A]">
                          Areas of Mastery:
                        </p>
                        <ul className="space-y-1.5">
                          {founder.responsibilities.map((resp, rIdx) => (
                            <li
                              key={rIdx}
                              className="text-xs text-[#76736A] flex items-start gap-2"
                            >
                              <IconCheck className="w-3.5 h-3.5 text-[#D49B44] shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Social & Contact */}
                    <div className="pt-4 border-t border-[#E5DFD5]">
                      <a
                        href={founder.linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[#1A1A18] hover:text-[#D49B44] transition-colors focus:outline-none"
                      >
                        <span className="w-7 h-7 rounded-full bg-[#F4EFE6] border border-[#E5DFD5] flex items-center justify-center text-[#1A1A18] group-hover:border-[#D49B44] group-hover:text-[#D49B44] transition-colors">
                          <IconBrandLinkedin className="w-4 h-4" />
                        </span>
                        <span>{founder.name} on LinkedIn</span>
                        <IconArrowUpRight className="w-3.5 h-3.5 text-[#76736A]" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* The German-Indian Synergy Deep Dive */}
      <section id="synergy" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44]">
                The Engineering Synergy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A18] tracking-tight leading-[1.15]">
                Why German Design & Indian Fabrication?
              </h2>
              <p className="text-sm sm:text-base text-[#42403B] leading-relaxed">
                Historically, ambitious craft breweries had two bad choices: pay
                crippling import markups for European brewhouses that arrived
                months late, or risk their entire business on local vendors
                unfamiliar with fluid dynamics, dead-leg sanitary rules, and
                thermal recompression.
              </p>
              <p className="text-sm text-[#76736A] leading-relaxed">
                Brau Mitraa was created to abolish this false tradeoff. Rainer and
                Rüdiger design and certify every system to German industrial
                standards, while Abhay oversees meticulous stainless steel
                fabrication in Indore. The result is pure German engineering
                rigor at local manufacturing efficiency.
              </p>

              <div className="pt-2">
                <Link
                  href="/beverages"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A18] hover:text-[#D49B44] transition-colors"
                >
                  <span>Explore the 130+ Beverage Styles We Brew</span>
                  <IconArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* German Side */}
              <div className="bg-[#FDFBF7] rounded-3xl p-6 sm:p-8 border border-[#E5DFD5] space-y-4">
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
              <div className="bg-[#FDFBF7] rounded-3xl p-6 sm:p-8 border border-[#E5DFD5] space-y-4">
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

      {/* 4 Pillars of Engineering Integrity */}
      <section className="py-20 lg:py-28 border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44]">
              Our Guiding Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A18] tracking-tight">
              Four Benchmarks We Never Compromise
            </h2>
            <p className="text-base text-[#76736A] leading-relaxed">
              Every system bearing the Brau Mitraa name adheres to strict
              mechanical, metallurgical, and thermodynamic thresholds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#E5DFD5] space-y-4 hover:border-[#D49B44]/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl text-[#D49B44] font-bold">
                      {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#F4EFE6] border border-[#E5DFD5] flex items-center justify-center text-[#D49B44]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1A1A18]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#76736A] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blueprint & Story Collaborative Section */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E5DFD5] relative h-[380px] sm:h-[460px]">
                <Image
                  src="/images/story-founders.jpg"
                  alt="Brau Mitraa brewing engineers reviewing layout blueprints"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-stone-900/10 pointer-events-none" />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44]">
                From Concept to Commissioning
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A18] tracking-tight leading-[1.2]">
                We Walk Your Floor Before We Cut Any Steel.
              </h2>
              <p className="text-sm text-[#42403B] leading-relaxed">
                No two brewery sites are alike. Whether you are transforming a
                heritage downtown warehouse, retrofitting a high-density urban
                rooftop, or planning a greenfield production brewhouse, our
                founders review your floor load capacity, steam/electric
                utility specs, drain placements, and expansion headroom from day
                one.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#D49B44]/15 text-[#D49B44] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1A1A18]">
                      Custom 2D/3D CAD Layouts & P&ID Blueprints
                    </h4>
                    <p className="text-[11px] text-[#76736A]">
                      Precision ergonomic flow for brewers, cellar hands, and grain handling.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#D49B44]/15 text-[#D49B44] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1A1A18]">
                      Batch Cycle Speed: 2 Brews per 10-Hour Shift
                    </h4>
                    <p className="text-[11px] text-[#76736A]">
                      Parallel mashing and lautering enabled by vertical Braupagode geometry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats By the Numbers */}
      <section className="py-16 border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-[#FAF8F5] rounded-3xl border border-[#E5DFD5]"
              >
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D49B44] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-[#42403B] font-medium mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-[#FDFBF7] to-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44]">
            Direct Founder Access
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1A18] tracking-tight">
            Ready to Build Your Brewery With Us?
          </h2>
          <p className="text-base sm:text-lg text-[#76736A] max-w-2xl mx-auto leading-relaxed">
            Speak directly with Rainer Kruppa, Abhay Jhaveri, and Rüdiger Stolle
            about your proposed capacity, floor plan, and target beverage
            portfolio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D49B44] hover:bg-[#c08a38] text-white text-sm font-semibold px-8 py-4 rounded-full shadow-md transition-all hover:scale-105 focus:outline-none"
            >
              <span>Book a Technical Consultation</span>
              <IconArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/beverages"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#F4EFE6] text-[#1A1A18] border border-[#E5DFD5] text-sm font-semibold px-8 py-4 rounded-full transition-colors focus:outline-none"
            >
              <span>Explore 130+ Beverage Styles</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

