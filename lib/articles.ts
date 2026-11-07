export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Brewhouse Engineering" | "Brewing Science" | "Planning & ROI" | "Cellar & Sanitation" | "Alternative Beverages";
  author: string;
  authorRole: string;
  authorCountry: string;
  readTime: string;
  publishedDate: string;
  featured?: boolean;
  image: string;
  keyTakeaways: string[];
  fullContent: {
    introduction: string;
    sections: {
      heading: string;
      body: string[];
      highlight?: string;
    }[];
    conclusion: string;
  };
}

export const articles: Article[] = [
  {
    id: "thermal-vapor-recompression",
    slug: "thermal-vapor-recompression-brewhouse-energy",
    title: "The Physics of Thermal Vapor Recompression: Slashing Brewhouse Boiling Energy by 75%",
    excerpt:
      "Wort boiling is traditionally the most energy-intensive process in any brewery. Learn how Kruppa thermal vapor recompression re-energizes kettle steam using live steam injection to cut utility costs drastically.",
    category: "Brewhouse Engineering",
    author: "Rainer Kruppa",
    authorRole: "Diplom-Braumeister & Braupagode Inventor",
    authorCountry: "🇩🇪 Germany",
    readTime: "7 min read",
    publishedDate: "October 2024",
    featured: true,
    image: "/brewery/images/process/process-03-build.jpg",
    keyTakeaways: [
      "Traditional wort boiling requires 8–10% evaporation per hour, consuming massive steam boiler loads.",
      "Vapor recompression recycles kettle steam through a high-efficiency plate heat exchanger.",
      "Reduces primary heating energy consumption to just 25% of conventional brewhouses.",
      "Can be engineered into new Braupagode systems or retrofitted onto existing kettle setups.",
    ],
    fullContent: {
      introduction:
        "In commercial craft brewing, thermal energy is one of the top three ongoing operational expenditures alongside raw malt and cold-side refrigeration. Conventional open-stack boiling releases enormous volumes of latent heat into the atmosphere. Thermal vapor recompression fundamentally changes this equation by transforming exhaust steam back into the primary heating medium.",
      sections: [
        {
          heading: "The Conventional Boiling Dilemma",
          body: [
            "To achieve DMS (dimethyl sulfide) stripping, hop isomerization, and protein coagulation, traditional brewing wisdom mandates a vigorous rolling boil with 8% to 10% total evaporation over a 60–90 minute cycle.",
            "In a standard 1,000L or 2,000L brewhouse, this requires continuous firing of heavy electric heating elements or constant high-pressure steam boiler consumption, resulting in significant utility costs and carbon emissions.",
          ],
          highlight:
            "Over a year of commercial multi-batch brewing, boiling energy accounts for over 45% of a facility's total thermal gas or electric bill.",
        },
        {
          heading: "The Kruppa Vapor Recompression Cycle",
          body: [
            "The Braupagode system captures the rising steam vapor inside the enclosed lower wort kettle. Instead of venting to atmosphere, this vapor is drawn into a precision plate heat exchanger.",
            "By introducing a controlled charge of high-pressure live steam into an internal thermocompressor, the vapor's pressure and temperature are raised above the boiling point of the wort.",
            "This re-energized vapor is then channeled through a specialized distribution screen inside the wort boiler, maintaining an active, rolling boil with only a fraction of fresh primary energy.",
          ],
        },
        {
          heading: "Quantifiable Savings & Capital Payback",
          body: [
            "Because 50% of the generated vapor is continuously compressed and reused for internal heating, the total energy required to boil a batch is reduced to approximately 25% of that demanded by conventional open-stack kettles.",
            "For a production brewery brewing 250 to 500 batches annually, this thermodynamic advantage saves substantial utility costs each month, enabling equipment payback within 18 to 24 months of commissioning.",
          ],
        },
      ],
      conclusion:
        "Thermal vapor recompression represents the gold standard of sustainable German brewhouse engineering. When paired with vertical vessel geometry, it proves that smaller physical footprints can yield superior environmental and economic performance.",
    },
  },
  {
    id: "microbrewery-site-planning",
    slug: "microbrewery-site-planning-floor-load-drainage-utilities",
    title: "Microbrewery Planning Guide: Floor Loads, Ceiling Clearances, Drainage & Utility Sizing",
    excerpt:
      "A complete technical checklist for founders and architects evaluating potential brewpub and production spaces. How to calculate structural loads, sewer slope, and electrical supply.",
    category: "Planning & ROI",
    author: "Abhay Jhaveri",
    authorRole: "Managing Director, Brau Mitraa",
    authorCountry: "🇮🇳 India",
    readTime: "9 min read",
    publishedDate: "October 2024",
    image: "/brewery/images/process/process-01-talk.jpg",
    keyTakeaways: [
      "Fermenters filled with beer require 1,200 to 2,000 kg/m² structural floor load capacity.",
      "Trench drains must be food-grade SS304 with removable sediment baskets and minimum 1:50 fall slope.",
      "Vertical stacked Braupagode brewhouses preserve up to 50% floor area, accommodating lower urban ceilings.",
      "Three-phase electrical drops must factor peak simultaneous brewhouse and chiller compressor starts.",
    ],
    fullContent: {
      introduction:
        "Selecting the right commercial property is the single most critical structural decision in launching a brewery. While an exposed-brick warehouse or high-footfall urban rooftop may look visually appealing, inadequate floor slab rating or insufficient electrical amperage can introduce unexpected civil renovation costs.",
      sections: [
        {
          heading: "1. Floor Loading Calculations (kg/m²)",
          body: [
            "A standard office or retail floor slab is typically rated for 250 to 400 kg/m². However, a 2,000L Unitank filled with fermenting wort, its double-wall stainless steel jacket, and rock-wool insulation weighs well over 2,600 kg concentrated onto four small foot pads.",
            "For safe operation without slab deflection, cellar floors should be reinforced concrete with a minimum load capacity of 1,500 to 2,000 kg/m². Ground-floor locations on slab-on-grade are vastly preferable to suspended mezzanine floors.",
          ],
        },
        {
          heading: "2. Drainage Geometry & Effluent Treatment",
          body: [
            "Brewing is a wet process: making 1 liter of beer typically consumes 4 to 6 liters of process and cleaning water. Standard household round floor drains are completely inadequate and will quickly choke with spent hops and trub.",
            "We mandate stainless steel 304 slotted trench drains with integrated catchment baskets. Drains must incorporate a continuous slope of at least 1:50 towards the sewer interceptor or effluent treatment plant (ETP).",
          ],
          highlight:
            "Acidic spent yeast and caustic CIP chemicals can dissolve standard epoxy coatings. Ensure heavy-duty polyurethane mortar floors (such as Ucrete) are specified.",
        },
        {
          heading: "3. Ceiling Height & Braupagode Advantage",
          body: [
            "Traditional horizontal brewhouse configurations require separate mash, lauter, kettle, and whirlpool vessels lined in a row, demanding 80 to 120 square meters of floor space.",
            "The Braupagode stacks the mash/lauter tun vertically over the wort kettle, reducing the footprint by 50% while operating comfortably within standard 3.8 to 4.2 meter commercial ceiling heights.",
          ],
        },
      ],
      conclusion:
        "Before signing any commercial lease, have our engineering team conduct an initial 2D layout and utility load assessment to ensure your space will pass municipal and excise inspections without costly surprises.",
    },
  },
  {
    id: "ss304-vs-ss316l-metallurgy",
    slug: "ss304-vs-ss316l-brewery-metallurgy-sanitary-finishes",
    title: "SS304 vs. SS316L in Brewing Metallurgy: Understanding Passivation, Corrosion & Sanitary Finishes",
    excerpt:
      "Why metallurgy matters. When AISI 304 is optimal, where molybdenum-bearing AISI 316L is essential (sours and sanitizers), and what IIIc mill finish actually means for microbial prevention.",
    category: "Brewhouse Engineering",
    author: "Rüdiger Stolle",
    authorRole: "Technical Director",
    authorCountry: "🇩🇪 Germany",
    readTime: "6 min read",
    publishedDate: "September 2024",
    image: "/brewery/images/process/process-03-build.jpg",
    keyTakeaways: [
      "SS 1.4301 (AISI 304) is the benchmark standard for hot-side brewhouses and standard fermentation vessels.",
      "SS 1.4404 (AISI 316L) contains 2% molybdenum for superior resistance against pitting and sour-beer acids.",
      "Internal surface roughness must achieve Ra ≤ 0.4 µm (IIIc sanitary mill finish) to eliminate biofilm shelters.",
      "Chemical passivation with nitric or citric acid creates a microscopic chromium oxide protective layer.",
    ],
    fullContent: {
      introduction:
        "Stainless steel is not a single uniform material. In sanitary process engineering, the specific alloy composition, welding gas purity, and surface mechanical polishing determine whether a tank will last 30 years or suffer pitting corrosion after 18 months.",
      sections: [
        {
          heading: "AISI 304 (1.4301) vs. AISI 316L (1.4404)",
          body: [
            "AISI 304 contains roughly 18% chromium and 8% nickel. It provides exceptional corrosion resistance against wort sugars, alcohol, and routine alkaline CIP cleaners at an economical price point.",
            "AISI 316L incorporates an additional 2% to 3% molybdenum. This specific addition dramatically bolsters the alloy against chloride attack, low pH organic acids found in barrel-aged sour beers, and aggressive peracetic acid sanitizers.",
          ],
        },
        {
          heading: "The Critical Importance of Surface Finish (Ra ≤ 0.4 µm)",
          body: [
            "Even the finest alloy will harbor bacteria if its internal surface contains microscopic pits or rough weld beads. Wild yeasts and pediococcus thrive in pits as small as 1 micron.",
            "Brau Mitraa grinds and polishes all internal tank surfaces flush to a IIIc mill finish (Ra ≤ 0.4 µm). This mirror-smooth surface ensures that automated CIP spray balls achieve 100% sterile contact without manual scrubbing.",
          ],
          highlight:
            "Every square centimeter of our internal vessel welds is backed with pure argon gas during TIG welding to prevent 'sugaring' or internal oxidation.",
        },
      ],
      conclusion:
        "Investing in certified food-grade metallurgy with proper passivation guarantees that your beer tastes pure, clean, and uncontaminated for decades of commercial shifts.",
    },
  },
  {
    id: "mastering-cold-lagers",
    slug: "mastering-cold-fermented-lagers-german-brewing-science",
    title: "Mastering Cold-Fermented Lagers: Yeast Pitching Kinetics, Decoction & Diacetyl Protocols",
    excerpt:
      "Munich Helles, Czech Pilsners, and Festbiers offer no hop haze or roast malt to hide flaws. Discover the German brewhouse protocols for clean, crisp, sulphur-free lagering.",
    category: "Brewing Science",
    author: "Rainer Kruppa",
    authorRole: "Diplom-Braumeister",
    authorCountry: "🇩🇪 Germany",
    readTime: "8 min read",
    publishedDate: "September 2024",
    image: "/brewery/images/beer-lagers.jpg",
    keyTakeaways: [
      "Lager yeasts (Saccharomyces pastorianus) require double the pitching rate of ale yeasts (1.5–2.0M cells/mL/°P).",
      "Precision multi-rest step mashing is essential for head retention, clarity, and malt sweetness balance.",
      "A timed 48-hour diacetyl rest at 14°C ensures complete reabsorption of buttery vicinal diketones.",
      "Cold lagering at 0°C to -1°C for 4 to 6 weeks clarifies the beer and rounds out harsh polyphenols.",
    ],
    fullContent: {
      introduction:
        "Lagers are the ultimate testament to a brewer's discipline and brewhouse thermal control. While high-gravity stouts or heavily dry-hopped New England IPAs can mask process deviations, a classic German Helles is completely transparent. Flaws in fermentation control have nowhere to hide.",
      sections: [
        {
          heading: "Mashing Kinetics & Beta-Glucan Rest",
          body: [
            "Producing a crisp, highly attenuated pilsner requires precise enzymatic control. A multi-step mashing regime begins with an acid/beta-glucan rest at 45°C, followed by a maltose rest at 62°C, and saccharification at 72°C.",
            "Our automated PLC control system modulates temperature ramps via multi-zone heating jackets, preventing scorching while ensuring optimal conversion without unfermentable dextrin excess.",
          ],
        },
        {
          heading: "Pitching Rates & Cold Fermentation Control",
          body: [
            "Bottom-fermenting lager yeasts operate at 9°C to 11°C. Because cold kinetic reactions occur more slowly, under-pitching leads to sluggish fermentations, elevated ester production, and noticeable sulfur.",
            "We recommend pitching healthy yeast slurry at 1.5 to 2.0 million cells per milliliter per degree Plato. Glycol jackets must maintain temperature within ±0.2°C to prevent yeast stalling.",
          ],
          highlight:
            "Never crash a lager until gravity is stable and an official VDK (diacetyl) forced heat test shows complete absence of buttery aromas.",
        },
      ],
      conclusion:
        "With precise glycol stratification and gentle lautering, your brewery can produce Bavarian-calibre lagers that build a fiercely loyal customer following.",
    },
  },
  {
    id: "beyond-beer-craft-kombucha-seltzers",
    slug: "beyond-beer-cross-contamination-kombucha-hard-seltzers-cider",
    title: "Beyond Beer: Cross-Contamination Protocols for Craft Kombucha, Hard Seltzers & Hard Ciders",
    excerpt:
      "Modern taproom guests demand gluten-free and functional alternatives. How to safely brew Kombucha, Seltzers, and Ciders in a commercial brewhouse without infecting your beer cellar.",
    category: "Alternative Beverages",
    author: "Rüdiger Stolle",
    authorRole: "Technical Director",
    authorCountry: "🇩🇪 Germany",
    readTime: "8 min read",
    publishedDate: "August 2024",
    image: "/brewery/images/bev-kombucha.jpg",
    keyTakeaways: [
      "Kombucha introduces Acetobacter and wild yeasts which are catastrophic contaminants in beer unitanks.",
      "Dedicated hoses, gaskets, and separate fermentation tanks are mandatory for non-beer fermentations.",
      "Hard seltzers require precise nutrient dosing (diammonium phosphate and zinc) to prevent sulfur notes.",
      "Ciders demand slow, cool fermentation to preserve delicate apple ester aromatics.",
    ],
    fullContent: {
      introduction:
        "Consumer demand is evolving rapidly. Today, over 25% of taproom patrons seek gluten-free, low-calorie, or non-alcoholic options such as hard seltzers, dry craft ciders, and living fermented kombuchas. Incorporating these profitable lines requires strict bio-containment protocols.",
      sections: [
        {
          heading: "The Microbial Barrier: Isolating Kombucha SCOBY",
          body: [
            "A healthy Kombucha SCOBY contains Gluconacetobacter and wild yeasts. If even a microscopic trace enters a traditional beer fermentation, it will convert ethanol into acetic acid, souring an entire batch.",
            "We design dedicated alternative beverage cellars with color-coded sanitary hoses, isolated CIP pumps, and independent cellar manifolds that never interconnect with your main beer cellar lines.",
          ],
        },
        {
          heading: "Hard Seltzer Nutrient Regimes",
          body: [
            "Unlike malt wort, cane sugar wash contains zero free amino nitrogen (FAN), minerals, or vitamins. Without tailored nutrient additions, yeast will become stressed and generate pungent hydrogen sulfide (rotten egg odor).",
            "We supply validated recipes with staggered mineral dosing, rapid carbonation carbonating stones, and inline sterile filtration skids for crystal-clear clarity.",
          ],
          highlight:
            "Producing diversified beverage lines on the same site can increase taproom revenue by up to 35% without requiring a second property lease.",
        },
      ],
      conclusion:
        "By engineering clean physical separation and validated sanitation loops, Brau Mitraa enables you to capture the booming craft beverage market safely.",
    },
  },
  {
    id: "optimizing-lautering-false-bottoms",
    slug: "optimizing-lautering-false-bottom-geometry-raking-kinematics",
    title: "Optimizing Lauter Tun Runoff: Wedge-Wire Screen Geometry & Raking Kinematics",
    excerpt:
      "Slow runoff times and stuck mashes destroy brewhouse throughput. How laser-cut 0.7mm wedge-wire screens and variable speed raking ensure clear wort and faster turns.",
    category: "Cellar & Sanitation",
    author: "Abhay Jhaveri & Rainer Kruppa",
    authorRole: "Co-Founders",
    authorCountry: "🇩🇪 🇮🇳",
    readTime: "5 min read",
    publishedDate: "August 2024",
    image: "/brewery/images/tech-sight-glass.jpg",
    keyTakeaways: [
      "Standard punched sheet metal has only 12–15% open area and frequently blinds with fine grist.",
      "Continuous 0.7mm wedge-wire profile increases open area to over 22% with self-clearing flow.",
      "Multi-point DN40 lautering manifolds draw wort evenly across the entire bed diameter.",
      "Variable frequency raking blades cut grain compaction without disturbing the natural grain filter bed.",
    ],
    fullContent: {
      introduction:
        "Lautering is the operational bottleneck of the brewhouse. A delay of 45 minutes during wort runoff cascades across the entire brew day, limiting daily production and reducing hop utilization consistency.",
      sections: [
        {
          heading: "Punched Plate vs. Laser-Cut Wedge-Wire",
          body: [
            "Many budget brewhouse fabricators use standard perforated stainless sheet metal with round holes. These holes easily plug with malt husk fragments and fine flour particles, forcing brewers to perform harsh underletting.",
            "Brau Mitraa uses triangular wedge-wire screens with precise 0.7mm gaps. The profile widens downward, meaning any particle small enough to enter the top gap falls freely through without wedging.",
          ],
        },
        {
          heading: "Automated Differential Pressure Raking",
          body: [
            "As the grain bed settles during vorlauf and runoff, compaction creates resistance. Our motorized raking machine features infinitely variable frequency inverter control.",
            "Sensors monitor pressure drop across the bed. The raking knives gently lift and slice through compacted layers, opening drainage channels without disturbing the underlying husk filter.",
          ],
          highlight:
            "Optimized lautering geometry allows two complete brews per 10-hour shift in our Braupagode systems, doubling annual plant throughput.",
        },
      ],
      conclusion:
        "Investing in precision false bottom engineering transforms your daily brewing rhythm from a stressful waiting game into a predictable, high-yield operation.",
    },
  },
];

