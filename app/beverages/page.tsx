"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconSearch,
  IconArrowRight,
  IconFilter,
  IconInfoCircle,
} from "@tabler/icons-react";

interface Category {
  id: string;
  name: string;
  subtitle: string;
  note?: string;
  image: string;
  styles: string[];
}

const categories: Category[] = [
  {
    id: "lagers",
    name: "Lagers and pilsners",
    subtitle: "Crisp. Clean. Cold-fermented precision.",
    image: "/images/beer-lagers.jpg",
    styles: [
      "Munich Helles",
      "Czech Pilsner",
      "German Pilsner",
      "Vienna Lager",
      "Märzen",
      "Festbier",
      "Kellerbier",
      "Munich Dunkel",
      "Schwarzbier",
      "Doppelbock",
      "Eisbock",
      "Maibock",
      "Rauchbier",
      "India Pale Lager",
      "Cold Lager",
      "California Common",
    ],
  },
  {
    id: "ales",
    name: "Ales and IPAs",
    subtitle: "Hops, malt balance, and expressive top-fermenting yeast.",
    image: "/images/beer-ales.jpg",
    styles: [
      "Blonde Ale",
      "Golden Ale",
      "American Pale Ale",
      "Kölsch",
      "Belgian Pale",
      "Bière de Garde",
      "English IPA",
      "West Coast IPA",
      "New England IPA",
      "Hazy IPA",
      "Double IPA",
      "Session IPA",
      "Black IPA",
      "Milkshake IPA",
      "Brut IPA",
      "Amber Ale",
      "Irish Red",
      "Brown Ale",
      "ESB",
      "Altbier",
      "Barleywine",
      "Saison",
      "Dubbel",
      "Tripel",
      "Quadrupel",
      "Witbier",
    ],
  },
  {
    id: "wheat",
    name: "Wheat beers",
    subtitle: "Silky texture, clove & banana esters, and refreshing grain profile.",
    image: "/images/beer-wheat.jpg",
    styles: [
      "Hefeweizen",
      "Kristallweizen",
      "Dunkelweizen",
      "Weizenbock",
      "American Wheat",
      "Belgian Witbier",
      "Berliner Weisse",
      "Wheat IPA",
      "Wheatwine",
      "Fruit Wheat",
    ],
  },
  {
    id: "stouts",
    name: "Stouts and porters",
    subtitle: "Roasted barley, dark chocolate, coffee depth, and barrel complexity.",
    image: "/images/beer-stouts.jpg",
    styles: [
      "Dry Irish Stout",
      "Sweet Stout",
      "Milk Stout",
      "Oatmeal Stout",
      "Tropical Stout",
      "Foreign Extra",
      "Imperial Stout",
      "Russian Imperial",
      "Oyster Stout",
      "Pastry Stout",
      "White Stout",
      "English Porter",
      "Robust Porter",
      "Baltic Porter",
      "Smoked Porter",
      "Barrel-Aged",
    ],
  },
  {
    id: "sours",
    name: "Sours and fruit beers",
    subtitle: "Acidic bite, wild fermentation, barrel aging, and fresh fruit integration.",
    image: "/images/beer-sours.jpg",
    styles: [
      "Gose",
      "Lambic",
      "Gueuze",
      "Flanders Red",
      "Oud Bruin",
      "Kettle Sour",
      "Mixed-Fermentation",
      "Brettanomyces",
      "Sour IPA",
      "Fruited Sour",
      "Pastry Sour",
    ],
  },
  {
    id: "kombucha",
    name: "Kombucha and fermented botanicals",
    subtitle: "Live SCOBY culture, probiotic acids, and sparkling botanical infusions.",
    note: "Kombucha utilizes an aerobic primary fermentation followed by pressurized conditioning. Because of live acetic acid bacteria (Acetobacter), we engineer dedicated cellar piping and isolated vessels to prevent any cross-contact with clean malt fermentations.",
    image: "/images/bev-kombucha.jpg",
    styles: [
      "Classic Black Tea Kombucha",
      "Green Tea & Jasmine",
      "Ginger-Lemon Zing",
      "Berry-Hibiscus Sparkler",
      "Butterfly Pea & Lavender",
      "Hop-Infused Kombucha (Citra / Mosaic)",
      "Jun Tea (Green Tea & Raw Honey)",
      "Passionfruit & Turmeric",
      "Sparkling Cascara Kombucha",
      "Botanical Tonic Kombucha",
    ],
  },
  {
    id: "cider",
    name: "Hard ciders and perries",
    subtitle: "Heritage apple & pear fermentation—naturally gluten-free craft excellence.",
    note: "Cider relies on 100% fruit must fermentation without boiling. It utilizes our temperature-controlled glycol jacketed tanks, carbonation stones, and sterile filtration to produce bone-dry traditional or fruit-forward dessert profiles.",
    image: "/images/bev-cider.jpg",
    styles: [
      "English Dry Cider",
      "French Cidre Bouché",
      "Crisp Gala & Honeycrisp Cider",
      "Traditional Pear Perry",
      "Dry-Hopped Apple Cider",
      "Spiced Cinnamon-Clove Winter Cider",
      "Blackberry & Currant Cider",
      "Bourbon Barrel-Aged Cider",
      "Rosé Apple Cider",
    ],
  },
  {
    id: "seltzers",
    name: "Hard seltzers and hop waters",
    subtitle: "Pure effervescence, zero sugar options, and high-margin turnaround.",
    note: "Hard seltzers ferment a neutral dextrose wash polished through carbon blocks for clean clarity before natural fruit essence dosing (2.8–3.2 vols CO2). Hop waters provide zero-alcohol (0.0% ABV) aromatic draft pours straight from bright beer tanks.",
    image: "/images/bev-seltzers.jpg",
    styles: [
      "Meyer Lemon & Sea Salt Seltzer",
      "Wild Black Cherry Seltzer",
      "Ruby Red Grapefruit Seltzer",
      "Passionfruit-Guava Seltzer",
      "Yuzu & Fresh Mint Seltzer",
      "Mango & Habanero Seltzer",
      "Citra Sparkling Hop Water (0.0% ABV)",
      "Centennial-Grapefruit Hop Water (0.0% ABV)",
      "Botanical Hibiscus Seltzer",
    ],
  },
  {
    id: "coldbrew",
    name: "Cold brew coffee and nitro tonics",
    subtitle: "Steeped craft botanicals and silky nitrogen-infused draught pours.",
    note: "Our bright beer tanks easily adapt for coarse-grind steeping and micro-filtration, dispensing velvety nitrogenated pours at the tap without requiring secondary dedicated brewhouses.",
    image: "/images/bev-coldbrew.jpg",
    styles: [
      "Classic Nitro Cold Brew",
      "Single-Origin Ethiopian Cold Brew",
      "Chicory & Vanilla Nitro Draft",
      "Cascara & Orange Blossom Tea",
      "Smoked Maple Cold Brew",
      "Nitro Craft Root Beer",
      "Spiced Craft Ginger Beer",
    ],
  },
  {
    id: "mead",
    name: "Mead and braggot",
    subtitle: "Ancient honey fermentation meets modern brewing innovation.",
    note: "Mead is fermented honey, not beer. We keep it in its own family rather than quietly filing it with the lagers, because any brewer you hire will know the difference. A braggot is the genuine hybrid of the two.",
    image: "/images/beer-mead.jpg",
    styles: [
      "Traditional Mead",
      "Hydromel",
      "Sack Mead",
      "Melomel",
      "Metheglin",
      "Cyser",
      "Pyment",
      "Bochet",
      "Hopped Mead",
      "Braggot",
    ],
  },
  {
    id: "experimental",
    name: "Flavoured and experimental",
    subtitle: "Botanicals, local fruits, spices, and contemporary crowd-pleasers.",
    note: "These are flavour concepts rather than recognised styles, and we say so. They are also what sells on a Saturday.",
    image: "/images/beer-flavoured.jpg",
    styles: [
      "Cola Lager",
      "Mango Lager",
      "Guava Pale Ale",
      "Watermelon-Mint Ale",
      "Tamarind-Chilli Sour",
      "Kokum-Lime Gose",
      "Espresso Stout",
      "Peanut Butter Porter",
      "Chilli-Chocolate Stout",
      "Rose-Cardamom Wheat",
      "Ginger-Lime Lager",
    ],
  },
];

export default function BeveragePortfolioPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Filter categories and styles based on user search
  const filteredCategories = categories
    .filter((cat) => selectedFilter === "all" || cat.id === selectedFilter)
    .map((cat) => {
      if (!searchQuery.trim()) return cat;
      const q = searchQuery.toLowerCase();
      const matchingStyles = cat.styles.filter((style) =>
        style.toLowerCase().includes(q)
      );
      const matchesCategory =
        cat.name.toLowerCase().includes(q) ||
        cat.subtitle.toLowerCase().includes(q) ||
        (cat.note && cat.note.toLowerCase().includes(q));

      if (matchesCategory) return cat;
      if (matchingStyles.length > 0) {
        return {
          ...cat,
          styles: matchingStyles,
        };
      }
      return null;
    })
    .filter(Boolean) as Category[];

  const totalStylesCount = categories.reduce(
    (acc, cat) => acc + cat.styles.length,
    0
  );

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      {/* JSON-LD for SearchFit-SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Brau Mitraa Extended Beverage Portfolio & Recipe Catalogue",
            description:
              "Explore craft beer styles, artisanal kombucha, hard ciders, hard seltzers, hop waters, and meads compatible with Brau Mitraa turnkey brewing systems.",
            numberOfItems: totalStylesCount,
            itemListElement: categories.map((cat, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: cat.name,
              description: cat.subtitle,
            })),
          }),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-[#76736A] mb-8"
        >
          <Link href="/" className="hover:text-[#D49B44] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#1A1A18] font-medium">Beverage Portfolio</span>
        </nav>

        {/* Hero Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44] mb-3">
            THE CATALOGUE · {totalStylesCount} PROFILES ACROSS {categories.length} FAMILIES
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1A18] tracking-tight leading-[1.08] mb-6">
            Beyond traditional beer: what will you brew?
          </h1>
          <p className="text-base sm:text-lg text-[#42403B] leading-relaxed">
            From heritage German lagers and hazy IPAs to probiotic kombucha,
            heritage hard ciders, sparkling hop waters, and fermented meads.
            Brau Mitraa designs and equips multi-beverage facilities with the
            exact isolation valves, thermal controls, and aeration systems
            needed for multi-category production.
          </p>
        </div>

        {/* Interactive Search & Filter Controls */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-[#E5DFD5] shadow-sm mb-12 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <IconSearch className="w-5 h-5 text-[#76736A] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search styles (e.g. Kombucha, Helles, Seltzer, Perry, Gose...)"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] text-sm text-[#1A1A18] placeholder-[#76736A] focus:outline-none focus:border-[#D49B44] focus:ring-1 focus:ring-[#D49B44] transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#76736A] hover:text-[#1A1A18]"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="text-xs text-[#76736A]">
              Showing <span className="font-semibold text-[#1A1A18]">{filteredCategories.length}</span> families
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#E5DFD5]/60">
            <span className="text-xs font-semibold text-[#76736A] flex items-center gap-1 mr-1">
              <IconFilter className="w-3.5 h-3.5" /> Filter:
            </span>
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                selectedFilter === "all"
                  ? "bg-[#D49B44] text-white shadow-sm"
                  : "bg-[#FAF8F5] text-[#42403B] hover:bg-[#F4EFE6] border border-[#E5DFD5]"
              }`}
            >
              All Families ({categories.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                  selectedFilter === cat.id
                    ? "bg-[#D49B44] text-white shadow-sm"
                    : "bg-[#FAF8F5] text-[#42403B] hover:bg-[#F4EFE6] border border-[#E5DFD5]"
                }`}
              >
                {cat.name} ({cat.styles.length})
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {filteredCategories.length === 0 ? (
            <div className="col-span-full text-center py-16 bg-white rounded-3xl border border-[#E5DFD5]">
              <p className="font-serif text-2xl text-[#1A1A18] mb-2">
                No styles found matching &quot;{searchQuery}&quot;
              </p>
              <p className="text-sm text-[#76736A] mb-4">
                Try searching for another style or reset your filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedFilter("all");
                }}
                className="inline-flex items-center gap-2 bg-[#D49B44] text-white text-xs font-semibold px-5 py-2.5 rounded-full"
              >
                Reset Search
              </button>
            </div>
          ) : (
            filteredCategories.map((category, idx) => {
              const enterDirection =
                idx % 2 === 0 ? "anim-enter-left" : "anim-enter-right anim-delay-1";
              return (
                <article
                  key={category.id}
                  id={category.id}
                  className={`editorial-card ${enterDirection} bg-white rounded-3xl border border-[#E5DFD5] overflow-hidden shadow-sm flex flex-col justify-between group`}
                >
                {/* Section Header with Featured Image */}
                <div>
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-stone-900">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

                    {/* Style Counter Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[#D49B44] border border-[#D49B44]/30 shadow-xs">
                        {category.styles.length} styles
                      </span>
                    </div>

                    {/* Section Titles over Image */}
                    <div className="absolute bottom-4 left-5 right-5 text-white z-10">
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight leading-tight drop-shadow-sm">
                        {category.name}
                      </h2>
                      <p className="text-xs sm:text-sm text-stone-200 mt-1 font-normal line-clamp-1">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Section Content & Notes */}
                  <div className="p-6 sm:p-7 space-y-5">
                    {/* Editorial Note if provided */}
                    {category.note && (
                      <div className="p-4 rounded-xl bg-[#F4EFE6] border-l-4 border-[#D49B44] text-[#42403B] text-xs sm:text-sm leading-relaxed flex items-start gap-3">
                        <IconInfoCircle className="w-4 h-4 text-[#D49B44] shrink-0 mt-0.5" />
                        <p className="italic">{category.note}</p>
                      </div>
                    )}

                    {/* Styles List */}
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#76736A]">
                          Catalogue Styles
                        </span>
                        <span className="text-[11px] text-[#76736A]">
                          {category.styles.length} curated profiles
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.styles.map((style, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#E5DFD5] text-xs font-medium text-[#1A1A18] hover:border-[#D49B44] hover:text-[#D49B44] transition shadow-2xs"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D49B44]" />
                            {style}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="px-6 pb-6 pt-2 border-t border-[#E5DFD5]/50 flex items-center justify-between text-xs text-[#76736A]">
                  <span className="font-mono text-[11px] text-[#76736A]">
                    Category: {category.id.toUpperCase()}
                  </span>
                  <Link
                    href="#engineering"
                    className="inline-flex items-center gap-1 font-semibold text-[#D49B44] hover:text-[#BE8532] transition"
                  >
                    View System Setup <IconArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            );
          })
        )}
        </div>

        {/* Brewery Multi-Category Engineering Callout */}
        <section
          id="engineering"
          className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-[#F4EFE6] border border-[#E5DFD5] relative overflow-hidden"
        >
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44]">
              MULTI-CATEGORY BREWHOUSE ENGINEERING
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#1A1A18] tracking-tight">
              One facility. Zero flavor cross-contamination.
            </h3>
            <p className="text-sm text-[#42403B] leading-relaxed">
              Brewing kombucha, hard seltzers, and wild sours alongside crisp German
              helles requires dedicated process separation. Brau Mitraa designs
              turnkey setups with dedicated hygienic diaphragm valves, isolated CIP
              circuits, and automated oxygen control to protect every batch.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/#solutions"
                className="inline-flex items-center gap-2 bg-[#D49B44] hover:bg-[#BE8532] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition shadow-sm"
              >
                Explore Brewing Systems
                <IconArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 border border-[#D49B44] text-[#D49B44] hover:bg-[#D49B44] hover:text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition"
              >
                Consult on Multi-Category Setup
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
