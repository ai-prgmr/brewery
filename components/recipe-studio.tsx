"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import {
  BATCH_L,
  BATCH_GAL,
  KG_TO_LB,
  BOTTLE_ML,
  REC,
  ICONS,
  INGREDIENTS,
  RECIPES,
  STYLE_INFO,
  AGE_LABEL,
  SRM_STOPS,
  RecipeDef,
  MaltItem,
  HopItem,
  YeastItem,
  AdjunctItem,
} from "./recipe-studio-data";

// Helper color routines matching brewing formulas
function hexToRgb(h: string): [number, number, number] {
  return [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16)) as [
    number,
    number,
    number
  ];
}

function rgbToHex(c: [number, number, number]): string {
  return (
    "#" +
    c.map((v) => Math.round(v).toString(16).padStart(2, "0")).join("")
  );
}

function srmColor(srm: number): string {
  if (srm <= SRM_STOPS[0][0]) return SRM_STOPS[0][1];
  for (let i = 1; i < SRM_STOPS.length; i++) {
    const [s1, c1] = SRM_STOPS[i - 1];
    const [s2, c2] = SRM_STOPS[i];
    if (srm <= s2) {
      const t = (srm - s1) / (s2 - s1);
      const a = hexToRgb(c1);
      const b = hexToRgb(c2);
      const interpolated: [number, number, number] = [
        a[0] + (b[0] - a[0]) * t,
        a[1] + (b[1] - a[1]) * t,
        a[2] + (b[2] - a[2]) * t,
      ];
      return rgbToHex(interpolated);
    }
  }
  return SRM_STOPS[SRM_STOPS.length - 1][1];
}

function mixWhite(hex: string, amount: number): string {
  const [r, g, b] = hexToRgb(hex);
  return rgbToHex([
    r + (255 - r) * amount,
    g + (255 - g) * amount,
    b + (255 - b) * amount,
  ]);
}

function beerGradient(srm: number): string {
  const c = srmColor(srm);
  return `linear-gradient(${mixWhite(c, 0.35)}, ${c})`;
}

function beerColorName(srm: number): string {
  return srm < 4
    ? "Pale straw"
    : srm < 8
    ? "Gold"
    : srm < 15
    ? "Amber"
    : srm < 25
    ? "Brown"
    : srm < 40
    ? "Dark brown"
    : "Black";
}

interface ProcessState {
  mashTemp: number;
  boilMin: number;
  fermTemp: number;
  fermDays: number;
  dryHop: number;
  ageMode: "none" | "cold" | "oak";
}

interface CalculatedStyle {
  base: string;
  name: string;
  desc: string;
}

export interface BrewEngineResult {
  style: CalculatedStyle;
  ibu: number;
  abv: number;
  srm: number;
  sweetIdx: number;
  OG: number;
  FG: number;
  notes: string[];
  log: string[];
  warnings: string[];
  bottles: number;
  totalDays: number;
  ingredientList: string[];
  displayName?: string;
  grainKg: number;
  honeyKg: number;
}

export function RecipeStudio() {
  // Ingredient selections
  const [selectedMalts, setSelectedMalts] = useState<Record<string, number>>({});
  const [selectedHops, setSelectedHops] = useState<Record<string, number>>({});
  const [selectedYeast, setSelectedYeast] = useState<string | null>(null);
  const [selectedAdjuncts, setSelectedAdjuncts] = useState<Record<string, number>>({});

  // Process settings
  const [process, setProcess] = useState<ProcessState>({
    mashTemp: 65,
    boilMin: 60,
    fermTemp: 18,
    fermDays: 14,
    dryHop: 0,
    ageMode: "none",
  });

  // Brewhouse simulation & state
  const [isBrewing, setIsBrewing] = useState(false);
  const [stageIndex, setStageIndex] = useState(-1);
  const [stageLabel, setStageLabel] = useState("Ready when you are");
  const [liquidHeightPct, setLiquidHeightPct] = useState(0);
  const [liquidBackground, setLiquidBackground] = useState(
    "linear-gradient(#f5b942aa, #d9822b)"
  );
  const [hasSteam, setHasSteam] = useState(false);
  const [hasBubbles, setHasBubbles] = useState(false);
  const [fallingEmojis, setFallingEmojis] = useState<
    Array<{ id: number; emoji: string; left: number }>
  >([]);

  // Assistant & feedback
  const [speech, setSpeech] = useState(
    "Load a recipe from the library below, or assemble your custom grain bill and yeast."
  );
  const [highlightMissing, setHighlightMissing] = useState(false);

  // Results & views
  const [result, setResult] = useState<BrewEngineResult | null>(null);
  const [customNameInput, setCustomNameInput] = useState("");
  const [savedMsg, setSavedMsg] = useState("");
  const [activeModal, setActiveModal] = useState<"none" | "product" | "sheet">("none");

  // Local storage recipes
  const [myRecipes, setMyRecipes] = useState<RecipeDef[]>([]);

  const sceneRef = useRef<HTMLDivElement>(null);

  // Load custom recipes on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("brewmaster.myRecipes");
      if (saved) {
        setMyRecipes(JSON.parse(saved));
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  // Sync assistant speech when ingredients change
  useEffect(() => {
    if (isBrewing) return;
    const hasMalt = Object.keys(selectedMalts).length > 0;
    const hasYeast = selectedYeast !== null;

    if (!hasMalt && !hasYeast) {
      setSpeech("Pick at least one malt and one yeast, or load a recipe from the library.");
    } else if (!hasMalt) {
      setSpeech("Yeast strain selected! Now add malt varieties to supply fermentable sugars.");
    } else if (!hasYeast) {
      setSpeech("Grain bill active! Now select a yeast strain to define fermentation character.");
    } else {
      setSpeech("Recipe formulated! Adjust your brewhouse parameters, then click Run Brew Simulation.");
    }
  }, [selectedMalts, selectedYeast, isBrewing]);

  // Stepper handlers
  const handleToggleMalt = (id: string) => {
    setHighlightMissing(false);
    setSelectedMalts((prev) => {
      const next = { ...prev };
      if (next[id] !== undefined) {
        delete next[id];
      } else {
        next[id] = 2.0; // default 2 kg
      }
      return next;
    });
  };

  const handleAdjustMalt = (id: string, delta: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedMalts((prev) => {
      const curr = prev[id] || 0;
      const nextVal = Math.round((curr + delta * 0.5) * 10) / 10;
      if (nextVal <= 0) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      return { ...prev, [id]: Math.min(6.0, Math.max(0.5, nextVal)) };
    });
  };

  const handleToggleHop = (id: string) => {
    setSelectedHops((prev) => {
      const next = { ...prev };
      if (next[id] !== undefined) {
        delete next[id];
      } else {
        next[id] = 30; // default 30 g
      }
      return next;
    });
  };

  const handleAdjustHop = (id: string, delta: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedHops((prev) => {
      const curr = prev[id] || 0;
      const nextVal = curr + delta * 5;
      if (nextVal <= 0) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      return { ...prev, [id]: Math.min(150, Math.max(5, nextVal)) };
    });
  };

  const handleSelectYeast = (id: string) => {
    setHighlightMissing(false);
    setSelectedYeast((prev) => (prev === id ? null : id));
  };

  const handleToggleAdjunct = (id: string) => {
    setSelectedAdjuncts((prev) => {
      const next = { ...prev };
      if (next[id] !== undefined) {
        delete next[id];
      } else {
        next[id] = 0.5; // default 0.5 kg
      }
      return next;
    });
  };

  const handleAdjustAdjunct = (id: string, delta: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedAdjuncts((prev) => {
      const curr = prev[id] || 0;
      const nextVal = Math.round((curr + delta * 0.2) * 10) / 10;
      if (nextVal <= 0) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      return { ...prev, [id]: Math.min(6.0, Math.max(0.2, nextVal)) };
    });
  };

  // Load a recipe
  const handleLoadRecipe = (r: RecipeDef) => {
    const cleanMalts: Record<string, number> = {};
    Object.entries(r.malts).forEach(([id, kg]) => {
      if (kg !== undefined && kg > 0) cleanMalts[id] = kg;
    });
    const cleanHops: Record<string, number> = {};
    Object.entries(r.hops).forEach(([id, g]) => {
      if (g !== undefined && g > 0) cleanHops[id] = g;
    });
    const cleanAdj: Record<string, number> = {};
    Object.entries(r.adj).forEach(([id, kg]) => {
      if (kg !== undefined && kg > 0) cleanAdj[id] = kg;
    });

    setSelectedMalts(cleanMalts);
    setSelectedHops(cleanHops);
    setSelectedYeast(r.yeast);
    setSelectedAdjuncts(cleanAdj);
    setProcess({
      mashTemp: r.proc.mashTemp,
      boilMin: r.proc.boilMin,
      fermTemp: r.proc.fermTemp,
      fermDays: r.proc.fermDays,
      dryHop: r.proc.dryHop,
      ageMode: (r.proc.ageMode as "none" | "cold" | "oak") || "none",
    });
    setResult(null);
    setLiquidHeightPct(0);
    setStageLabel("Ready when you are");
    setSpeech(`Loaded ${r.name}. ${r.blurb} Check the settings, then click Run Brew Simulation!`);
    sceneRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  // Reset all
  const handleResetAll = () => {
    setSelectedMalts({});
    setSelectedHops({});
    setSelectedYeast(null);
    setSelectedAdjuncts({});
    setProcess({
      mashTemp: 65,
      boilMin: 60,
      fermTemp: 18,
      fermDays: 14,
      dryHop: 0,
      ageMode: "none",
    });
    setResult(null);
    setLiquidHeightPct(0);
    setStageLabel("Ready when you are");
    setSpeech("Pick at least one malt and one yeast, or load a recipe from the library.");
  };

  // Style classifier calculations
  const calculateEngine = (): BrewEngineResult => {
    const { mashTemp, boilMin, fermTemp, fermDays, dryHop, ageMode } = process;
    const malts = Object.entries(selectedMalts).map(([id, kg]) => ({
      ...INGREDIENTS.malts.find((m) => m.id === id)!,
      kg,
    }));
    const hops = Object.entries(selectedHops).map(([id, g]) => ({
      ...INGREDIENTS.hops.find((h) => h.id === id)!,
      g,
    }));
    const primaryYeast =
      INGREDIENTS.yeasts.find((y) => y.id === selectedYeast) || INGREDIENTS.yeasts[0];
    const adjuncts = Object.entries(selectedAdjuncts).map(([id, kg]) => ({
      ...INGREDIENTS.adjuncts.find((a) => a.id === id)!,
      kg,
    }));

    const grainKg = malts.reduce((s, m) => s + m.kg, 0);
    const honeyKg = adjuncts
      .filter((a) => a.id === "honey")
      .reduce((s, a) => s + a.kg, 0);
    const crystalKg = malts
      .filter((m) => m.id === "crystal")
      .reduce((s, m) => s + m.kg, 0);
    const oatsKg = adjuncts
      .filter((a) => a.id === "oats")
      .reduce((s, a) => s + a.kg, 0);
    const wheatKg = malts
      .filter((m) => m.id === "wheat")
      .reduce((s, m) => s + m.kg, 0);
    const hasRoast = malts.some((m) => m.id === "roast");

    const log: string[] = [];

    // 1. Mash
    const attFrac = Math.max(0.5, Math.min(0.92, 0.78 - (mashTemp - 66) * 0.02));
    const mashWord =
      mashTemp < 64
        ? "dry, highly fermentable"
        : mashTemp > 68
        ? "full-bodied, sweet dextrins"
        : "balanced fermentability";
    log.push(
      `MASH at ${mashTemp}°C: ${mashWord}. Fermentable extract share: ${Math.round(
        attFrac * 100
      )}%.`
    );

    // 2. Gravity
    let extractPts = 0;
    malts.forEach((m) => {
      extractPts += (m.kg * m.fermentable * 300) / BATCH_L;
    });
    adjuncts.forEach((a) => {
      extractPts += (a.kg * a.fermentable * 300) / BATCH_L;
    });
    const OG = 1 + extractPts / 1000;
    log.push(
      `WORT: Original Gravity (OG) ${OG.toFixed(3)} derived from ${grainKg.toFixed(
        1
      )} kg grain${honeyKg ? " and " + honeyKg.toFixed(1) + " kg honey" : ""}.`
    );

    // 3. Boil & IBU (Tinseth)
    const fGrav = 1.65 * Math.pow(0.000125, OG - 1);
    const fTime = (1 - Math.exp(-0.04 * boilMin)) / 4.15;
    const util = fGrav * fTime;
    let ibu = 0;
    hops.forEach((h) => {
      ibu += ((h.g * (h.alpha / 100) * util * 1000) / BATCH_L);
    });
    ibu = Math.min(120, ibu);
    log.push(
      hops.length
        ? `BOIL ${boilMin} min: Hop utilisation factor ${Math.round(
            util * 100
          )}%, yielding ${Math.round(ibu)} IBU.`
        : `BOIL ${boilMin} min: Zero hop additions, resulting in 0 IBU.`
    );

    // 4. Colour (Morey)
    let mcu = 0;
    malts.forEach((m) => {
      mcu += m.kg * KG_TO_LB * m.colorSRM;
    });
    adjuncts.forEach((a) => {
      mcu += a.kg * KG_TO_LB * (a.colorSRM || 0);
    });
    mcu /= BATCH_GAL;
    const srm = mcu > 0 ? Math.min(60, 1.4922 * Math.pow(mcu, 0.6859)) : 2;
    log.push(`COLOUR: ${srm.toFixed(1)} SRM via Morey spectral equation.`);

    // 5. Fermentation & FG
    const yAtt = primaryYeast.attenuation;
    const tempFactor = Math.max(0.3, 1 + (fermTemp - 18) * 0.04);
    const effDays = fermDays * tempFactor;
    const completion = Math.min(1, effDays / primaryYeast.days);
    const apparent = Math.min(0.95, yAtt * (attFrac / 0.78)) * completion;
    const FG = OG - (OG - 1) * apparent;
    const abv = Math.min(14, (OG - FG) * 131.25);
    log.push(
      `FERMENTATION: ${primaryYeast.name} at ${fermTemp}°C for ${fermDays} days. Cycle completion: ${Math.round(
        completion * 100
      )}%.`
    );
    log.push(
      `FINAL GRAVITY (FG) ${FG.toFixed(3)}: ${Math.round(
        apparent * 100
      )}% apparent attenuation.`
    );

    // 6. Dry hop & aging
    if (dryHop > 0 && hops.length) {
      log.push(
        `DRY HOP at ${dryHop} g/L: Enhanced essential terpene aromas from ${hops
          .map((h) => h.name)
          .join(", ")}.`
      );
    }
    const agingDays = ageMode === "cold" ? 28 : ageMode === "oak" ? 90 : 0;
    if (ageMode === "cold")
      log.push("LAGERING: 4 weeks cold lagering at 0-2°C for particulate clarity and crisp drinkability.");
    if (ageMode === "oak")
      log.push("BARREL MATURATION: 3 months oak conditioning imparts vanillin, lactones, and delicate tannins.");
    if (ageMode === "none") log.push("PACKAGING: Packaged fresh for immediate aromatic brightness.");

    // 7. Sweetness
    const residualPts = (FG - 1) * 1000;
    const sweetIdx = Math.max(
      0,
      Math.min(10, residualPts / 4 + crystalKg * 1.5 + honeyKg * 0.6 + oatsKg * 0.4)
    );

    // 8. Flavour notes
    const rawNotes: string[] = [];
    malts.forEach((m) => rawNotes.push(m.flavour));
    adjuncts.forEach((a) => {
      if (a.flavour && a.kg > 0 && a.flavour !== "salty") rawNotes.push(a.flavour);
    });
    const YEAST_NOTE: Record<string, string> = {
      ale: fermTemp >= 18 ? "fruity esters" : "clean, subtle stone fruit",
      lager: "clean, crisp sulfur balance",
      wbrew: fermTemp >= 17 ? "ripe banana & clove esters" : "delicate clove phenolics",
      wild: "funky rustic barnyard complexity",
      lacto: "crisp lactic tartness",
      champ: "bone-dry neutral finish",
    };
    rawNotes.push(YEAST_NOTE[primaryYeast.id] || "clean fermentation profile");
    if (hops.length) {
      if (ibu >= 40) rawNotes.push("pronounced hop bitterness");
      else if (ibu >= 20) rawNotes.push("moderate balanced bitterness");
      else rawNotes.push("soft floral hop presence");
    }
    if (dryHop > 0 && hops.length) {
      rawNotes.push(...hops.map((h) => `${h.aroma} dry-hop aromatics`));
    }
    if (ageMode === "oak") rawNotes.push("toasted oak & vanilla");
    if (ageMode === "cold") rawNotes.push("smoother refined palate");
    if (sweetIdx >= 6) rawNotes.push("caramel sweetness");
    if (primaryYeast.id === "lacto") rawNotes.push("refreshing acidity");

    const notes = [
      ...new Set(
        rawNotes.flatMap((n) => n.split(",").map((x) => x.trim()))
      ),
    ];

    // 9. Warnings
    const warnings: string[] = [];
    if (primaryYeast.type === "lager" && fermTemp > 14) {
      warnings.push("Warm lager fermentation may induce elevated diacetyl or fusel alcohols.");
    }
    if (primaryYeast.type === "ale" && fermTemp < 12) {
      warnings.push("Cold ale fermentation slows yeast kinetics. Extend fermentation cycle.");
    }
    if (primaryYeast.id === "champ" && fermTemp > 22) {
      warnings.push("High temperature champagne yeast fermentation risks harsh solvent phenolics.");
    }
    if (primaryYeast.id === "wild" && fermTemp > 24) {
      warnings.push("Elevated Brettanomyces temperature may produce excessive acetic acid.");
    }
    if (dryHop > 0 && !hops.length) {
      warnings.push("Dry hop setting active with zero hop varieties selected.");
    }
    if (hops.length && boilMin < 30) {
      warnings.push("Brief boil reduces alpha acid isomerisation, providing minimal bittering.");
    }
    if (mashTemp >= 70) {
      warnings.push("High mash temperature deactivates beta-amylase, leading to dextrinous final gravity.");
    }
    if (mashTemp <= 62) {
      warnings.push("Low mash temperature maximises fermentability at the expense of mouthfeel.");
    }
    if (completion < 0.9) {
      warnings.push(
        `Fermentation stopped prematurely at ${Math.round(
          completion * 100
        )}% completion. Residual sweetness will remain high.`
      );
    }

    // 10. Style Classification
    const oakPrefix = ageMode === "oak" ? "Barrel-Aged " : "";
    const fitsStyle = (styleData: (typeof STYLE_INFO)[keyof typeof STYLE_INFO]) => {
      const off = (v: number, rg: [number, number] | number[]) => {
        const tol = Math.max((rg[1] - rg[0]) * 0.6, 1);
        if (v < rg[0]) return rg[0] - v > tol;
        if (v > rg[1]) return v - rg[1] > tol;
        return false;
      };
      return (
        !off(abv, styleData.abv) &&
        !off(ibu, styleData.ibu) &&
        !off(srm, styleData.srm)
      );
    };

    let calculatedBase = "Golden ale";
    let calculatedDesc = "Light, crisp, refreshing session ale.";

    if (honeyKg >= 1 && (grainKg <= 1 || honeyKg >= 2 * grainKg)) {
      calculatedBase = "Mead";
      calculatedDesc = "Fermented honey and natural water elixir.";
    } else if (
      honeyKg >= 0.5 &&
      grainKg >= 1.5 &&
      primaryYeast.type === "ale" &&
      primaryYeast.id !== "champ"
    ) {
      calculatedBase = "Braggot";
      calculatedDesc = "Historic union of artisanal honey and barley malt.";
    } else if (primaryYeast.id === "lacto") {
      calculatedBase =
        abv < 4.5 ? "Berliner Weisse-style sour" : "Sour ale";
      calculatedDesc =
        abv < 4.5
          ? "Delicate, refreshingly tart wheat beer."
          : "Tart craft ale featuring clean lactic fermentation.";
    } else if (primaryYeast.id === "wild") {
      calculatedBase = "Brett wild ale";
      calculatedDesc = "Complex farmhouse ale aged with rustic Brettanomyces strains.";
    } else if (primaryYeast.id === "wbrew" && wheatKg >= grainKg * 0.4) {
      calculatedBase = "Hefeweizen";
      calculatedDesc = "Bavarian classic with signature banana and clove aromatic bouquet.";
    } else if (wheatKg >= grainKg * 0.4) {
      calculatedBase = "Wheat ale";
      calculatedDesc = "Soft, hazy wheat ale with smooth pillowy head retention.";
    } else if (primaryYeast.type === "lager" || primaryYeast.id === "lager") {
      if (abv >= 7) {
        calculatedBase = "Bock";
        calculatedDesc = "Rich, malty German winter lager.";
      } else if (srm >= 12) {
        calculatedBase = "Dark lager";
        calculatedDesc = "Smooth continental dark lager with subtle roast and bread crust notes.";
      } else if (ibu >= 45) {
        calculatedBase = "Hoppy lager";
        calculatedDesc = "Modern crisp lager paired with assertive dry-hop presence.";
      } else if (ibu >= 18) {
        calculatedBase = "Pilsner";
        calculatedDesc = "Crisp, snappy lager showcasing noble hops and crackery malt.";
      } else {
        calculatedBase = "Helles lager";
        calculatedDesc = "Golden, malt-accented Bavarian everyday drinking lager.";
      }
    } else if (primaryYeast.id === "champ" && abv >= 7) {
      calculatedBase = "Strong dry ale";
      calculatedDesc = "High-gravity, effervescent ale attenuated with champagne yeast.";
    } else if (srm >= 30 && hasRoast) {
      calculatedBase = abv >= 7 ? "Imperial stout" : "Stout";
      calculatedDesc =
        abv >= 7
          ? "Massive, viscous dark ale with espresso and dark chocolate intensity."
          : "Classic roasted barley ale displaying dark cocoa and coffee tones.";
    } else if (srm >= 18) {
      calculatedBase = "Porter";
      calculatedDesc = "Historic London dark ale rich in caramel, biscuit, and roasted malts.";
    } else if (abv >= 7.5 && srm < 12 && ibu < 35) {
      calculatedBase = "Belgian strong ale";
      calculatedDesc = "Complex, golden, alcohol-warming ale with fruity Belgian yeast aromatics.";
    } else if (ibu >= 50) {
      calculatedBase = abv >= 7 ? "Double IPA" : "IPA";
      calculatedDesc =
        abv >= 7
          ? "Uncompromising double IPA overflowing with resinous and tropical hop oils."
          : "Aromatic India Pale Ale featuring punchy citrus and pine character.";
    } else if (ibu >= 25) {
      calculatedBase = "Pale ale";
      calculatedDesc = "Balanced craft flagship with vibrant citrus hops and biscuit backbone.";
    } else if (srm >= 8) {
      calculatedBase = "Amber ale";
      calculatedDesc = "Toffee and caramel malt ale offset by earthy bittering hops.";
    }

    // Check if within classic BJCP limits
    let finalStyle: CalculatedStyle;
    const knownInfo = STYLE_INFO[calculatedBase as keyof typeof STYLE_INFO];
    if (knownInfo && fitsStyle(knownInfo)) {
      const honeyPrefix =
        honeyKg >= 0.5 && calculatedBase !== "Mead" && calculatedBase !== "Braggot"
          ? "Honey "
          : "";
      finalStyle = {
        base: calculatedBase,
        name: `${oakPrefix}${honeyPrefix}${calculatedBase}`,
        desc: calculatedDesc,
      };
    } else {
      // Experimental custom formulation!
      const strength =
        abv < 4 ? "Session" : abv < 6 ? "Standard" : abv < 9 ? "Imperial" : "High-Gravity";
      const col =
        srm < 8 ? "Pale" : srm < 18 ? "Amber" : srm < 30 ? "Copper-Brown" : "Onyx";
      const bit = ibu < 18 ? "Mild" : ibu < 45 ? "Balanced" : "Assertive";
      const fam =
        primaryYeast.id === "lacto"
          ? "Sour"
          : primaryYeast.id === "wild"
          ? "Wild Ale"
          : primaryYeast.type === "lager"
          ? "Lager"
          : honeyKg >= 0.5
          ? "Honey Ale"
          : "Ale";

      finalStyle = {
        base: "Experimental",
        name: `${oakPrefix}${strength} ${col} ${bit} ${fam} (Bespoke Formula)`,
        desc: "Custom brewhouse formulation. A distinct recipe engineered outside standard BJCP bounds.",
      };
    }

    const bottles = Math.floor((BATCH_L * 1000) / BOTTLE_ML);
    const totalDays = 1 + fermDays + agingDays;
    const ingredientList = [
      ...malts.map((m) => `${m.kg} kg ${m.name}`),
      ...hops.map((h) => `${h.g} g ${h.name}`),
      `${primaryYeast.name} (1 commercial pitch)`,
      ...adjuncts.map((a) => `${a.kg} kg ${a.name}`),
    ];

    return {
      style: finalStyle,
      ibu,
      abv,
      srm,
      sweetIdx,
      OG,
      FG,
      notes,
      log,
      warnings,
      bottles,
      totalDays,
      ingredientList,
      grainKg,
      honeyKg,
    };
  };

  // Run brew simulation
  const handleRunBrew = () => {
    if (isBrewing) return;
    const hasMalt = Object.keys(selectedMalts).length > 0;
    const hasYeast = selectedYeast !== null;

    if (!hasMalt || !hasYeast) {
      setHighlightMissing(true);
      setSpeech("Please select at least one malt and one yeast strain before brewing!");
      setTimeout(() => setHighlightMissing(false), 4000);
      return;
    }

    setIsBrewing(true);
    setResult(null);
    setSavedMsg("");
    setSpeech("Brewing cycle initiated! Running continuous multi-vessel simulation...");
    sceneRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });

    const stages = [
      {
        label: "Stage 1: Infusion Mashing in Lauter Tun...",
        duration: 1600,
        height: 25,
        color: "linear-gradient(#e0a24f, #b86a1f)",
        steam: false,
        bubbles: false,
      },
      {
        label: "Stage 2: Wort Boiling & Hop Kettle Isomerisation...",
        duration: 1800,
        height: 55,
        color: "linear-gradient(#c97b2e, #8b4513)",
        steam: true,
        bubbles: false,
      },
      {
        label: "Stage 3: Heat Exchanger Cooling & Yeast Pitching...",
        duration: 1200,
        height: 70,
        color: "linear-gradient(#d9a24a, #a0561d)",
        steam: false,
        bubbles: false,
      },
      {
        label: "Stage 4: Primary Unitank Fermentation & Attenuation...",
        duration: 2200,
        height: 85,
        color: "linear-gradient(#f5b942aa, #d9822b)",
        steam: false,
        bubbles: true,
      },
      {
        label: "Stage 5: Final Clarification, Conditioning & Kegging...",
        duration: 1200,
        height: 100,
        color: "linear-gradient(#f5b942, #d9822b)",
        steam: false,
        bubbles: false,
      },
    ];

    let current = 0;
    const runNext = () => {
      if (current >= stages.length) {
        const engResult = calculateEngine();
        setResult(engResult);
        setIsBrewing(false);
        setStageIndex(-1);
        setStageLabel("Batch Ready! Analysis Completed.");
        setLiquidBackground(beerGradient(engResult.srm));
        setLiquidHeightPct(100);
        setHasSteam(false);
        setHasBubbles(false);
        setSpeech(
          `Batch completed: ${engResult.style.name}! Review chemical telemetry and production specs below.`
        );

        // Falling celebration emojis
        const emojiSet = ["🍺", "🌾", "🌿", "✨", "🍻", "🥇"];
        const ems = Array.from({ length: 8 }, (_, i) => ({
          id: Date.now() + i,
          emoji: emojiSet[Math.floor(Math.random() * emojiSet.length)],
          left: 10 + Math.random() * 80,
        }));
        setFallingEmojis(ems);
        setTimeout(() => setFallingEmojis([]), 4000);
        return;
      }

      const st = stages[current];
      setStageIndex(current);
      setStageLabel(st.label);
      setLiquidHeightPct(st.height);
      setLiquidBackground(st.color);
      setHasSteam(st.steam);
      setHasBubbles(st.bubbles);
      current++;
      setTimeout(runNext, st.duration);
    };

    runNext();
  };

  // Save custom invention
  const handleSaveCustomRecipe = () => {
    const trimmed = customNameInput.trim();
    if (!trimmed) {
      setSavedMsg("Please provide a name for your custom brew.");
      return;
    }
    if (!result) return;

    const newDef: RecipeDef = {
      name: trimmed,
      blurb: `${result.style.name} · ${result.abv.toFixed(1)}% ABV · ${Math.round(
        result.ibu
      )} IBU`,
      malts: { ...selectedMalts },
      hops: { ...selectedHops },
      yeast: selectedYeast || "ale",
      adj: { ...selectedAdjuncts },
      proc: { ...process },
    };

    const updated = myRecipes.filter((r) => r.name !== trimmed);
    updated.push(newDef);
    setMyRecipes(updated);
    try {
      localStorage.setItem("brewmaster.myRecipes", JSON.stringify(updated));
    } catch {
      // ignore
    }
    setSavedMsg(`Saved "${trimmed}" to your Brewhouse Recipe Library!`);
    setResult({ ...result, displayName: trimmed });
  };

  // Liquid vessel transform calculation
  // 0% = y: 280px (bottom), 100% = y: 44px (top)
  const liquidY = 280 - (liquidHeightPct / 100) * 236;

  // Selected counts
  const totalMaltsKg = Object.values(selectedMalts).reduce((a, b) => a + b, 0);
  const totalHopsG = Object.values(selectedHops).reduce((a, b) => a + b, 0);
  const totalAdjKg = Object.values(selectedAdjuncts).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A18] pb-24 selection:bg-[#D49B44]/20">
      {/* Schema Markup for SearchFit-SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Brau Mitraa Interactive Recipe Studio & Brewhouse Lab",
            applicationCategory: "DesignApplication",
            operatingSystem: "Web Browser",
            description:
              "Professional virtual brewery lab and recipe formulation suite. Design grain bills, calculate Tinseth IBU, Morey SRM, Original Gravity, and simulate commercial brewhouse operations.",
            provider: {
              "@type": "Organization",
              name: "Brau Mitraa",
              url: "https://ai-prgmr.github.io/brewery",
            },
          }),
        }}
      />

      {/* Header Breadcrumbs & Title */}
      <div className="border-b border-[#E5DFD5] bg-[#F4EFE6]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-[#76736A] mb-4"
          >
            <Link href="/" className="hover:text-[#D49B44] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/beverages" className="hover:text-[#D49B44] transition-colors">
              Beverages
            </Link>
            <span>/</span>
            <span className="text-[#1A1A18] font-medium">Recipe Studio</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D49B44]/10 text-[#B8822B] text-xs font-semibold tracking-wider uppercase mb-3">
                <span className="w-2 h-2 rounded-full bg-[#D49B44] animate-pulse"></span>
                Pilot Plant Simulator · 20L Scaled Engine
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A18] tracking-tight">
                Virtual Brewhouse Formulation Studio
              </h1>
              <p className="text-sm sm:text-base text-[#42403B] max-w-2xl mt-2 leading-relaxed">
                Engineer custom grain bills, test hop isomerization kinetics, balance residual
                sweetness, and formulate market-ready craft recipes with Brau Mitraa’s technical
                brewing calculations.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleResetAll}
                className="px-4 py-2.5 rounded-lg border border-[#E5DFD5] bg-white text-xs font-semibold uppercase tracking-wider text-[#42403B] hover:bg-[#F4EFE6] hover:text-[#1A1A18] transition-all shadow-sm"
              >
                Reset Brewhouse
              </button>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-lg bg-[#1A1A18] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#D49B44] transition-all shadow-sm flex items-center gap-2"
              >
                Discuss Commercial Batch
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Studio Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Ingredient Shelves & Process Controls (7 cols) */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 space-y-8">
            {/* Shelf 1: Malts */}
            <section
              className={`bg-white rounded-2xl border p-6 sm:p-7 shadow-sm transition-all duration-300 ${
                highlightMissing && Object.keys(selectedMalts).length === 0
                  ? "border-[#D49B44] ring-2 ring-[#D49B44]/20"
                  : "border-[#E5DFD5]"
              }`}
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#E5DFD5] mb-5">
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl text-[#1A1A18]">
                    1. Grist & Malt Bill
                  </h2>
                  <p className="text-xs text-[#76736A] mt-0.5">
                    Select base & specialty grains (kg per 20 L batch)
                  </p>
                </div>
                <div className="text-xs font-semibold text-[#1A1A18] bg-[#F4EFE6] px-3 py-1.5 rounded-full">
                  Total: {totalMaltsKg.toFixed(1)} kg
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {INGREDIENTS.malts.map((item: MaltItem) => {
                  const isSelected = selectedMalts[item.id] !== undefined;
                  const amt = selectedMalts[item.id] || 0;
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleToggleMalt(item.id)}
                      className={`cursor-pointer rounded-xl border p-3.5 transition-all text-left flex flex-col justify-between ${
                        isSelected
                          ? "border-[#D49B44] bg-[#FAF8F5] ring-1 ring-[#D49B44]/30 shadow-sm"
                          : "border-[#E5DFD5] bg-[#FCFBF9] hover:border-[#D49B44]/60 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="w-10 h-10 shrink-0 rounded-lg bg-white border border-[#E5DFD5] flex items-center justify-center p-1 overflow-hidden"
                          dangerouslySetInnerHTML={{
                            __html: ICONS[item.id] || `<span>${item.emoji}</span>`,
                          }}
                        />
                        <div className="min-w-0 flex-1">
                          <div className="font-semibold text-sm text-[#1A1A18] leading-tight">
                            {item.name}
                          </div>
                          <div className="text-xs text-[#76736A] truncate mt-0.5">
                            {item.sub}
                          </div>
                          <div className="text-[11px] text-[#B8822B] font-medium mt-1">
                            Rec: {REC[item.id as keyof typeof REC] || "1-5 kg"}
                          </div>
                        </div>
                      </div>

                      {/* Stepper */}
                      <div className="mt-3 pt-2.5 border-t border-[#E5DFD5]/60 flex items-center justify-between">
                        <span className="text-xs font-bold text-[#1A1A18]">
                          {amt > 0 ? `${amt.toFixed(1)} kg` : "0 kg"}
                        </span>
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            disabled={!isSelected}
                            onClick={(e) => handleAdjustMalt(item.id, -1, e)}
                            className="w-7 h-7 rounded bg-[#EFE9DF] hover:bg-[#E5DFD5] active:scale-95 text-[#1A1A18] font-bold text-sm flex items-center justify-center transition-all disabled:opacity-30 disabled:pointer-events-none"
                            aria-label={`Decrease ${item.name}`}
                          >
                            &minus;
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              if (!isSelected) {
                                handleToggleMalt(item.id);
                              } else {
                                handleAdjustMalt(item.id, 1, e);
                              }
                            }}
                            className="w-7 h-7 rounded bg-[#D49B44] hover:bg-[#B8822B] text-white active:scale-95 font-bold text-sm flex items-center justify-center transition-all"
                            aria-label={`Increase ${item.name}`}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Shelf 2: Hops */}
            <section className="bg-white rounded-2xl border border-[#E5DFD5] p-6 sm:p-7 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-[#E5DFD5] mb-5">
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl text-[#1A1A18]">
                    2. Hop Additions
                  </h2>
                  <p className="text-xs text-[#76736A] mt-0.5">
                    Bittering & aroma additions (grams per 20 L batch)
                  </p>
                </div>
                <div className="text-xs font-semibold text-[#1A1A18] bg-[#F4EFE6] px-3 py-1.5 rounded-full">
                  Total: {totalHopsG} g
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {INGREDIENTS.hops.map((item: HopItem) => {
                  const isSelected = selectedHops[item.id] !== undefined;
                  const amt = selectedHops[item.id] || 0;
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleToggleHop(item.id)}
                      className={`cursor-pointer rounded-xl border p-3.5 transition-all text-left flex flex-col justify-between ${
                        isSelected
                          ? "border-[#D49B44] bg-[#FAF8F5] ring-1 ring-[#D49B44]/30 shadow-sm"
                          : "border-[#E5DFD5] bg-[#FCFBF9] hover:border-[#D49B44]/60 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="w-10 h-10 shrink-0 rounded-lg bg-white border border-[#E5DFD5] flex items-center justify-center p-1 overflow-hidden"
                          dangerouslySetInnerHTML={{
                            __html: ICONS[item.id] || `<span>${item.emoji}</span>`,
                          }}
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-sm text-[#1A1A18]">
                              {item.name}
                            </span>
                            <span className="text-[11px] font-mono font-semibold text-[#B8822B] bg-[#D49B44]/10 px-1.5 py-0.5 rounded">
                              {item.alpha}% α
                            </span>
                          </div>
                          <div className="text-xs text-[#76736A] truncate mt-0.5">
                            {item.sub}
                          </div>
                          <div className="text-[11px] text-[#B8822B] font-medium mt-1">
                            Rec: {REC[item.id as keyof typeof REC] || "15-40 g"}
                          </div>
                        </div>
                      </div>

                      {/* Stepper */}
                      <div className="mt-3 pt-2.5 border-t border-[#E5DFD5]/60 flex items-center justify-between">
                        <span className="text-xs font-bold text-[#1A1A18]">
                          {amt > 0 ? `${amt} g` : "0 g"}
                        </span>
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            disabled={!isSelected}
                            onClick={(e) => handleAdjustHop(item.id, -1, e)}
                            className="w-7 h-7 rounded bg-[#EFE9DF] hover:bg-[#E5DFD5] active:scale-95 text-[#1A1A18] font-bold text-sm flex items-center justify-center transition-all disabled:opacity-30 disabled:pointer-events-none"
                            aria-label={`Decrease ${item.name}`}
                          >
                            &minus;
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              if (!isSelected) {
                                handleToggleHop(item.id);
                              } else {
                                handleAdjustHop(item.id, 1, e);
                              }
                            }}
                            className="w-7 h-7 rounded bg-[#D49B44] hover:bg-[#B8822B] text-white active:scale-95 font-bold text-sm flex items-center justify-center transition-all"
                            aria-label={`Increase ${item.name}`}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Shelf 3: Yeast Strains */}
            <section
              className={`bg-white rounded-2xl border p-6 sm:p-7 shadow-sm transition-all duration-300 ${
                highlightMissing && !selectedYeast
                  ? "border-[#D49B44] ring-2 ring-[#D49B44]/20"
                  : "border-[#E5DFD5]"
              }`}
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#E5DFD5] mb-5">
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl text-[#1A1A18]">
                    3. Fermentation Strain
                  </h2>
                  <p className="text-xs text-[#76736A] mt-0.5">
                    Select a pure brewing culture (1 commercial pitch per batch)
                  </p>
                </div>
                <div className="text-xs font-semibold text-[#1A1A18] bg-[#F4EFE6] px-3 py-1.5 rounded-full">
                  {selectedYeast
                    ? INGREDIENTS.yeasts.find((y) => y.id === selectedYeast)?.name
                    : "None selected"}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {INGREDIENTS.yeasts.map((item: YeastItem) => {
                  const isSelected = selectedYeast === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleSelectYeast(item.id)}
                      className={`cursor-pointer rounded-xl border p-3.5 transition-all text-left flex items-start gap-3.5 ${
                        isSelected
                          ? "border-[#D49B44] bg-[#FAF8F5] ring-2 ring-[#D49B44]/40 shadow-sm"
                          : "border-[#E5DFD5] bg-[#FCFBF9] hover:border-[#D49B44]/60 hover:bg-white"
                      }`}
                    >
                      <div
                        className="w-10 h-10 shrink-0 rounded-lg bg-white border border-[#E5DFD5] flex items-center justify-center p-1 overflow-hidden"
                        dangerouslySetInnerHTML={{
                          __html: ICONS[item.id] || `<span>${item.emoji}</span>`,
                        }}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm text-[#1A1A18]">
                            {item.name}
                          </span>
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                              isSelected
                                ? "bg-[#D49B44] text-white"
                                : "bg-[#EFE9DF] text-[#76736A]"
                            }`}
                          >
                            {isSelected ? "Active" : "Select"}
                          </span>
                        </div>
                        <div className="text-xs text-[#76736A] mt-0.5">
                          {item.sub}
                        </div>
                        <div className="flex items-center gap-2 mt-1.5 text-[11px] text-[#B8822B]">
                          <span>Att: {Math.round(item.attenuation * 100)}%</span>
                          <span>·</span>
                          <span>Cycle: {item.days}d</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Shelf 4: Adjuncts & Botanicals */}
            <section className="bg-white rounded-2xl border border-[#E5DFD5] p-6 sm:p-7 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-[#E5DFD5] mb-5">
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl text-[#1A1A18]">
                    4. Adjuncts & Botanicals
                  </h2>
                  <p className="text-xs text-[#76736A] mt-0.5">
                    Natural sweeteners, roasted elements & spices (kg)
                  </p>
                </div>
                <div className="text-xs font-semibold text-[#1A1A18] bg-[#F4EFE6] px-3 py-1.5 rounded-full">
                  Total: {totalAdjKg.toFixed(1)} kg
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {INGREDIENTS.adjuncts.map((item: AdjunctItem) => {
                  const isSelected = selectedAdjuncts[item.id] !== undefined;
                  const amt = selectedAdjuncts[item.id] || 0;
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleToggleAdjunct(item.id)}
                      className={`cursor-pointer rounded-xl border p-3.5 transition-all text-left flex flex-col justify-between ${
                        isSelected
                          ? "border-[#D49B44] bg-[#FAF8F5] ring-1 ring-[#D49B44]/30 shadow-sm"
                          : "border-[#E5DFD5] bg-[#FCFBF9] hover:border-[#D49B44]/60 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="w-10 h-10 shrink-0 rounded-lg bg-white border border-[#E5DFD5] flex items-center justify-center p-1 overflow-hidden"
                          dangerouslySetInnerHTML={{
                            __html: ICONS[item.id] || `<span>${item.emoji}</span>`,
                          }}
                        />
                        <div className="min-w-0 flex-1">
                          <div className="font-semibold text-sm text-[#1A1A18]">
                            {item.name}
                          </div>
                          <div className="text-xs text-[#76736A] truncate mt-0.5">
                            {item.sub}
                          </div>
                          <div className="text-[11px] text-[#B8822B] font-medium mt-1">
                            Rec: {REC[item.id as keyof typeof REC] || "0.2–1 kg"}
                          </div>
                        </div>
                      </div>

                      {/* Stepper */}
                      <div className="mt-3 pt-2.5 border-t border-[#E5DFD5]/60 flex items-center justify-between">
                        <span className="text-xs font-bold text-[#1A1A18]">
                          {amt > 0
                            ? amt < 0.1
                              ? `${Math.round(amt * 1000)} g`
                              : `${amt.toFixed(1)} kg`
                            : "0"}
                        </span>
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            disabled={!isSelected}
                            onClick={(e) => handleAdjustAdjunct(item.id, -1, e)}
                            className="w-7 h-7 rounded bg-[#EFE9DF] hover:bg-[#E5DFD5] active:scale-95 text-[#1A1A18] font-bold text-sm flex items-center justify-center transition-all disabled:opacity-30 disabled:pointer-events-none"
                            aria-label={`Decrease ${item.name}`}
                          >
                            &minus;
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              if (!isSelected) {
                                handleToggleAdjunct(item.id);
                              } else {
                                handleAdjustAdjunct(item.id, 1, e);
                              }
                            }}
                            className="w-7 h-7 rounded bg-[#D49B44] hover:bg-[#B8822B] text-white active:scale-95 font-bold text-sm flex items-center justify-center transition-all"
                            aria-label={`Increase ${item.name}`}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Section 5: Process Control Parameters */}
            <section className="bg-white rounded-2xl border border-[#E5DFD5] p-6 sm:p-7 shadow-sm">
              <div className="pb-4 border-b border-[#E5DFD5] mb-6">
                <h2 className="font-serif text-xl sm:text-2xl text-[#1A1A18]">
                  5. Process & Brewhouse Parameters
                </h2>
                <p className="text-xs text-[#76736A] mt-0.5">
                  Tune enzymatic conversion, boil length, and temperature kinetics
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Mash Temp */}
                <div>
                  <div className="flex justify-between items-center mb-1.5 text-xs font-semibold text-[#1A1A18]">
                    <span>Single-Infusion Mash Temp</span>
                    <span className="font-mono text-[#D49B44] text-sm">
                      {process.mashTemp}°C
                    </span>
                  </div>
                  <input
                    type="range"
                    min="62"
                    max="72"
                    step="1"
                    value={process.mashTemp}
                    onChange={(e) =>
                      setProcess({ ...process, mashTemp: Number(e.target.value) })
                    }
                    className="w-full accent-[#D49B44] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#76736A] mt-1">
                    <span>62°C (Dry, Attenuative)</span>
                    <span>72°C (Full Body)</span>
                  </div>
                </div>

                {/* Boil Duration */}
                <div>
                  <div className="flex justify-between items-center mb-1.5 text-xs font-semibold text-[#1A1A18]">
                    <span>Kettle Boil Duration</span>
                    <span className="font-mono text-[#D49B44] text-sm">
                      {process.boilMin} min
                    </span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="90"
                    step="5"
                    value={process.boilMin}
                    onChange={(e) =>
                      setProcess({ ...process, boilMin: Number(e.target.value) })
                    }
                    className="w-full accent-[#D49B44] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#76736A] mt-1">
                    <span>30 min (Light IBU)</span>
                    <span>90 min (Max Isomerisation)</span>
                  </div>
                </div>

                {/* Ferm Temp */}
                <div>
                  <div className="flex justify-between items-center mb-1.5 text-xs font-semibold text-[#1A1A18]">
                    <span>Fermentation Temperature</span>
                    <span className="font-mono text-[#D49B44] text-sm">
                      {process.fermTemp}°C
                    </span>
                  </div>
                  <input
                    type="range"
                    min="8"
                    max="26"
                    step="1"
                    value={process.fermTemp}
                    onChange={(e) =>
                      setProcess({ ...process, fermTemp: Number(e.target.value) })
                    }
                    className="w-full accent-[#D49B44] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#76736A] mt-1">
                    <span>8°C (Cold Lager)</span>
                    <span>26°C (Expressive Saison)</span>
                  </div>
                </div>

                {/* Ferm Days */}
                <div>
                  <div className="flex justify-between items-center mb-1.5 text-xs font-semibold text-[#1A1A18]">
                    <span>Unitank Residence Time</span>
                    <span className="font-mono text-[#D49B44] text-sm">
                      {process.fermDays} days
                    </span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="35"
                    step="1"
                    value={process.fermDays}
                    onChange={(e) =>
                      setProcess({ ...process, fermDays: Number(e.target.value) })
                    }
                    className="w-full accent-[#D49B44] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#76736A] mt-1">
                    <span>3 days (Fast Ale)</span>
                    <span>35 days (Slow Lagering)</span>
                  </div>
                </div>

                {/* Dry Hopping */}
                <div>
                  <div className="flex justify-between items-center mb-1.5 text-xs font-semibold text-[#1A1A18]">
                    <span>Cellar Dry Hopping Dosage</span>
                    <span className="font-mono text-[#D49B44] text-sm">
                      {process.dryHop === 0 ? "None" : `${process.dryHop} g/L`}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="8"
                    step="1"
                    value={process.dryHop}
                    onChange={(e) =>
                      setProcess({ ...process, dryHop: Number(e.target.value) })
                    }
                    className="w-full accent-[#D49B44] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#76736A] mt-1">
                    <span>0 g/L (Traditional)</span>
                    <span>8 g/L (Hazy DDH Bomb)</span>
                  </div>
                </div>

                {/* Vessel Aging */}
                <div>
                  <label className="block text-xs font-semibold text-[#1A1A18] mb-2">
                    Conditioning & Maturation Style
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { key: "none", label: "Fresh" },
                      { key: "cold", label: "Cold 4w" },
                      { key: "oak", label: "Oak 3m" },
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() =>
                          setProcess({
                            ...process,
                            ageMode: opt.key as "none" | "cold" | "oak",
                          })
                        }
                        className={`py-2 px-2 text-xs font-semibold rounded-lg border transition-all text-center ${
                          process.ageMode === opt.key
                            ? "bg-[#1A1A18] text-white border-[#1A1A18]"
                            : "bg-[#F4EFE6] text-[#42403B] border-[#E5DFD5] hover:bg-[#EFE9DF]"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Animated Brewhouse Tank & Live Telemetry (5 cols) */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            {/* Visual Tank Simulation Scene */}
            <div
              ref={sceneRef}
              className="relative rounded-2xl overflow-hidden border-2 border-[#1A1A18] bg-gradient-to-b from-[#FAF1E4] to-[#F1DFC0] p-6 h-[380px] shadow-lg flex flex-col items-center justify-between"
            >
              {/* Stage Status Badge */}
              <div className="w-full flex items-center justify-between z-10">
                <div className="inline-flex items-center gap-2 bg-[#1A1A18]/85 text-[#FFF4DC] px-3.5 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm shadow-sm max-w-[85%] truncate">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isBrewing ? "bg-[#D49B44] animate-ping" : "bg-emerald-400"
                    }`}
                  />
                  <span className="truncate">{stageLabel}</span>
                </div>
                <div className="text-[11px] font-mono font-bold text-[#76736A] bg-white/70 px-2.5 py-1 rounded-md">
                  20 L PILOT
                </div>
              </div>

              {/* Falling Celebration Emojis */}
              {fallingEmojis.map((f) => (
                <div
                  key={f.id}
                  className="absolute top-0 text-2xl pointer-events-none animate-bounce"
                  style={{ left: `${f.left}%`, animationDuration: "2.5s" }}
                >
                  {f.emoji}
                </div>
              ))}

              {/* Brewhouse Vessel SVG */}
              <div className="relative w-[170px] h-[300px] flex-shrink-0">
                {/* Base Shadow */}
                <svg
                  viewBox="0 0 170 300"
                  width="170"
                  height="300"
                  className="absolute inset-0"
                >
                  <path
                    d="M24 52 Q24 44 36 44 L134 44 Q146 44 146 52 L146 218 L110 266 Q85 280 60 266 L24 218 Z"
                    fill="#1A1A18"
                  />
                </svg>

                {/* Clipped Liquid Interior */}
                <div
                  className="absolute inset-0 w-[170px] h-[300px] overflow-hidden"
                  style={{
                    clipPath:
                      'path("M24 52 Q24 44 36 44 L134 44 Q146 44 146 52 L146 218 L110 266 Q85 280 60 266 L24 218 Z")',
                  }}
                >
                  <div
                    className="absolute inset-0 w-[170px] h-[300px] transition-all ease-out"
                    style={{
                      transform: `translateY(${liquidY}px)`,
                      background: liquidBackground,
                      transitionDuration: "1200ms",
                    }}
                  >
                    {/* Bubbles during fermentation */}
                    {hasBubbles && (
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute bottom-2 left-6 w-2 h-2 rounded-full bg-white/80 animate-ping" />
                        <div
                          className="absolute bottom-4 left-16 w-1.5 h-1.5 rounded-full bg-white/70 animate-ping"
                          style={{ animationDelay: "300ms" }}
                        />
                        <div
                          className="absolute bottom-10 left-24 w-2 h-2 rounded-full bg-white/80 animate-ping"
                          style={{ animationDelay: "600ms" }}
                        />
                        <div
                          className="absolute bottom-16 left-12 w-2 h-2 rounded-full bg-white/90 animate-ping"
                          style={{ animationDelay: "900ms" }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Stainless Steel Tank Architecture SVG */}
                <svg
                  viewBox="0 0 170 300"
                  width="170"
                  height="300"
                  className="absolute inset-0 pointer-events-none"
                >
                  <defs>
                    <linearGradient id="vesselSteel" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="#4b5160" />
                      <stop offset="25%" stopColor="#b9c1cc" />
                      <stop offset="40%" stopColor="#eef2f6" />
                      <stop offset="60%" stopColor="#9aa3af" />
                      <stop offset="100%" stopColor="#3f4550" />
                    </linearGradient>
                    <linearGradient id="vesselGloss" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="#fff" stopOpacity="0" />
                      <stop offset="50%" stopColor="#fff" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Supporting Tri-Clamp Legs */}
                  <g stroke="#3b4450" strokeWidth="5" strokeLinecap="round">
                    <line x1="40" y1="266" x2="32" y2="292" />
                    <line x1="66" y1="272" x2="62" y2="292" />
                    <line x1="104" y1="272" x2="108" y2="292" />
                    <line x1="130" y1="266" x2="138" y2="292" />
                  </g>
                  <ellipse
                    cx="85"
                    cy="295"
                    rx="70"
                    ry="4"
                    fill="#000"
                    opacity="0.25"
                  />
                  <rect
                    x="80"
                    y="278"
                    width="10"
                    height="14"
                    rx="2"
                    fill="url(#vesselSteel)"
                    stroke="#3b4450"
                    strokeWidth="1.5"
                  />

                  {/* Outer Vessel Wall Outline */}
                  <path
                    d="M24 52 Q24 44 36 44 L134 44 Q146 44 146 52 L146 218 L110 266 Q85 280 60 266 L24 218 Z"
                    fill="none"
                    stroke="url(#vesselSteel)"
                    strokeWidth="7"
                    strokeLinejoin="round"
                  />
                  {/* Domed Manway Head */}
                  <path
                    d="M22 54 Q22 12 85 12 Q148 12 148 54 Z"
                    fill="url(#vesselSteel)"
                    stroke="#3b4450"
                    strokeWidth="1.5"
                  />

                  {/* Specular Light Reflection */}
                  <rect
                    x="30"
                    y="60"
                    width="10"
                    height="150"
                    fill="url(#vesselGloss)"
                  />
                  <g stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1.2">
                    <line x1="26" y1="96" x2="144" y2="96" />
                    <line x1="26" y1="150" x2="144" y2="150" />
                    <line x1="26" y1="200" x2="144" y2="200" />
                  </g>

                  {/* Borosilicate Sight Glass */}
                  <circle
                    cx="85"
                    cy="128"
                    r="12"
                    fill="url(#vesselSteel)"
                    stroke="#3b4450"
                    strokeWidth="2"
                  />
                  <circle
                    cx="85"
                    cy="128"
                    r="6"
                    fill="#2b1a0e"
                    opacity="0.7"
                  />
                  {/* Top TC Ferrule */}
                  <rect
                    x="78"
                    y="2"
                    width="14"
                    height="12"
                    rx="2"
                    fill="url(#vesselSteel)"
                    stroke="#3b4450"
                    strokeWidth="1.5"
                  />

                  {/* Pressure Dial Gauge */}
                  <rect
                    x="118"
                    y="40"
                    width="6"
                    height="8"
                    fill="url(#vesselSteel)"
                    stroke="#3b4450"
                    strokeWidth="1"
                  />
                  <circle
                    cx="121"
                    cy="30"
                    r="10"
                    fill="#f7f3e8"
                    stroke="#3b4450"
                    strokeWidth="3"
                  />
                  <line
                    x1="121"
                    y1="30"
                    x2="127"
                    y2="24"
                    stroke="#c0392b"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  {/* Level Sight Tube */}
                  <rect
                    x="152"
                    y="96"
                    width="9"
                    height="110"
                    rx="3"
                    fill="#d9f0ff"
                    fillOpacity="0.35"
                    stroke="#3b4450"
                    strokeWidth="2"
                  />
                  <rect
                    x="149"
                    y="90"
                    width="15"
                    height="6"
                    rx="2"
                    fill="url(#vesselSteel)"
                    stroke="#3b4450"
                    strokeWidth="1"
                  />
                  <rect
                    x="149"
                    y="206"
                    width="15"
                    height="6"
                    rx="2"
                    fill="url(#vesselSteel)"
                    stroke="#3b4450"
                    strokeWidth="1"
                  />
                </svg>
              </div>

              {/* Steam Emitters */}
              {hasSteam && (
                <div className="absolute top-12 right-16 flex gap-2 pointer-events-none">
                  <div className="w-3 h-6 rounded-full bg-white/70 animate-ping" />
                  <div
                    className="w-4 h-7 rounded-full bg-white/60 animate-ping"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              )}

              {/* Bottom Brewhouse CTA Bar */}
              <div className="w-full flex items-center justify-between z-10 pt-2 border-t border-[#1A1A18]/10">
                <span className="text-xs text-[#42403B] font-medium">
                  {liquidHeightPct > 0 ? `${liquidHeightPct}% Full` : "Vessel Empty"}
                </span>
                <button
                  type="button"
                  disabled={isBrewing}
                  onClick={handleRunBrew}
                  className="px-6 py-2.5 rounded-full bg-[#1A1A18] hover:bg-[#D49B44] text-white text-xs font-bold uppercase tracking-wider shadow-md active:scale-95 transition-all disabled:opacity-50 disabled:pointer-events-none flex items-center gap-2"
                >
                  {isBrewing ? (
                    <>
                      <span className="w-3 h-3 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      Brewing...
                    </>
                  ) : (
                    <>
                      <span>Run Brew Simulation</span>
                      <span>&rarr;</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Master Brewer Assistant Feedback Box */}
            <div className="bg-white rounded-xl border border-[#E5DFD5] p-4 sm:p-5 shadow-sm flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#D49B44]/10 border border-[#D49B44]/30 flex items-center justify-center shrink-0 text-base">
                🎙️
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-wider text-[#B8822B]">
                  Brewhouse Assistant
                </div>
                <p className="text-xs sm:text-sm text-[#42403B] mt-0.5 leading-relaxed">
                  {speech}
                </p>
              </div>
            </div>

            {/* Live Chemical & Sensory Telemetry Panel */}
            {result && (
              <div className="bg-white rounded-2xl border border-[#E5DFD5] p-6 shadow-sm space-y-5 animate-in fade-in-50 duration-500">
                {/* Header */}
                <div className="border-b border-[#E5DFD5] pb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#D49B44]">
                      Chemical Analysis Completed
                    </span>
                    <span className="font-mono text-xs text-[#76736A]">
                      OG {result.OG.toFixed(3)} &rarr; FG {result.FG.toFixed(3)}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#1A1A18] mt-1 font-bold">
                    {result.displayName || result.style.name}
                  </h3>
                  <p className="text-xs text-[#76736A] mt-0.5 leading-relaxed">
                    {result.style.desc}
                  </p>

                  {/* SRM Color Bar */}
                  <div className="flex items-center gap-2.5 mt-3 pt-3 border-t border-[#E5DFD5]/60">
                    <span
                      className="w-5 h-5 rounded-full border border-[#1A1A18]/20 shrink-0 shadow-inner"
                      style={{ background: srmColor(result.srm) }}
                    />
                    <span className="text-xs font-medium text-[#1A1A18]">
                      {beerColorName(result.srm)} ({result.srm.toFixed(1)} SRM)
                    </span>
                  </div>
                </div>

                {/* Experimental Invention Name Box */}
                {result.style.base === "Experimental" && (
                  <div className="bg-gradient-to-r from-[#FAF8F5] to-[#F4EFE6] border border-[#D49B44]/40 rounded-xl p-4 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#B8822B]">
                      <span>✨</span>
                      <span>Bespoke Innovation Unlocked!</span>
                    </div>
                    <p className="text-xs text-[#42403B]">
                      This formulation defies standard commercial constraints. Give your invention an official brand name:
                    </p>
                    <div className="flex gap-2 pt-1">
                      <input
                        type="text"
                        value={customNameInput}
                        onChange={(e) => setCustomNameInput(e.target.value)}
                        placeholder="e.g. Mitraa Heritage Gold"
                        className="flex-1 text-xs border border-[#E5DFD5] rounded-lg px-3 py-2 bg-white text-[#1A1A18] focus:outline-none focus:ring-2 focus:ring-[#D49B44]"
                      />
                      <button
                        type="button"
                        onClick={handleSaveCustomRecipe}
                        className="px-4 py-2 bg-[#D49B44] hover:bg-[#B8822B] text-white text-xs font-bold rounded-lg transition-all shrink-0"
                      >
                        Save
                      </button>
                    </div>
                    {savedMsg && (
                      <p className="text-[11px] font-semibold text-emerald-700 mt-1">
                        {savedMsg}
                      </p>
                    )}
                  </div>
                )}

                {/* 4 Key Dial Meters */}
                <div className="space-y-3">
                  {/* Bitterness IBU */}
                  <div>
                    <div className="flex justify-between text-xs font-medium mb-1">
                      <span className="text-[#42403B]">Bitterness (IBU)</span>
                      <span className="font-bold text-[#1A1A18]">
                        {Math.round(result.ibu)} IBU
                      </span>
                    </div>
                    <div className="h-2 w-full bg-[#EFE9DF] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#D49B44] rounded-full transition-all duration-700"
                        style={{
                          width: `${Math.min(100, (result.ibu / 100) * 100)}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Alcohol ABV */}
                  <div>
                    <div className="flex justify-between text-xs font-medium mb-1">
                      <span className="text-[#42403B]">Alcohol by Volume</span>
                      <span className="font-bold text-[#1A1A18]">
                        {result.abv.toFixed(1)}% ABV
                      </span>
                    </div>
                    <div className="h-2 w-full bg-[#EFE9DF] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#B8822B] rounded-full transition-all duration-700"
                        style={{
                          width: `${Math.min(100, (result.abv / 14) * 100)}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Color SRM */}
                  <div>
                    <div className="flex justify-between text-xs font-medium mb-1">
                      <span className="text-[#42403B]">Spectral Color</span>
                      <span className="font-bold text-[#1A1A18]">
                        {result.srm.toFixed(1)} SRM
                      </span>
                    </div>
                    <div className="h-2 w-full bg-[#EFE9DF] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-800 rounded-full transition-all duration-700"
                        style={{
                          width: `${Math.min(100, (result.srm / 60) * 100)}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Sweetness */}
                  <div>
                    <div className="flex justify-between text-xs font-medium mb-1">
                      <span className="text-[#42403B]">Palate Balance</span>
                      <span className="font-bold text-[#1A1A18]">
                        {result.sweetIdx >= 6
                          ? "Sweet & Dextrinous"
                          : result.sweetIdx >= 3
                          ? "Balanced Crispness"
                          : "Dry & Attenuated"}
                      </span>
                    </div>
                    <div className="h-2 w-full bg-[#EFE9DF] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#1A1A18] rounded-full transition-all duration-700"
                        style={{
                          width: `${Math.min(100, (result.sweetIdx / 10) * 100)}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Flavour Notes Badges */}
                <div>
                  <div className="text-[11px] uppercase font-bold tracking-wider text-[#76736A] mb-2">
                    Sensory Profile
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {result.notes.map((note, i) => (
                      <span
                        key={i}
                        className="text-xs bg-[#F4EFE6] text-[#42403B] px-2.5 py-1 rounded-md border border-[#E5DFD5]"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Warnings if any */}
                {result.warnings.length > 0 && (
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl space-y-1">
                    <div className="text-xs font-bold text-amber-800 flex items-center gap-1.5">
                      <span>⚠️</span>
                      <span>Brewmaster Advisory</span>
                    </div>
                    {result.warnings.map((w, idx) => (
                      <p key={idx} className="text-xs text-amber-700 leading-snug">
                        {w}
                      </p>
                    ))}
                  </div>
                )}

                {/* Action Buttons: Product Page & Print Sheet */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveModal("product")}
                    className="w-full py-2.5 rounded-lg border border-[#1A1A18] bg-white text-[#1A1A18] text-xs font-bold uppercase tracking-wider hover:bg-[#F4EFE6] transition-all"
                  >
                    Product Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveModal("sheet")}
                    className="w-full py-2.5 rounded-lg bg-[#1A1A18] hover:bg-[#D49B44] text-white text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Print Spec Sheet
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ========================================================= */}
        {/* PART 1: The Commercial Recipe Library / Preset Book       */}
        {/* ========================================================= */}
        <section className="mt-16 sm:mt-24 pt-12 border-t border-[#E5DFD5]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44] mb-2">
                RECIPE REPERTOIRE
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A18] tracking-tight">
                Benchmark Craft Formulations
              </h2>
              <p className="text-sm text-[#76736A] mt-1 max-w-xl">
                Load proven commercial recipe templates instantly into your virtual
                brewhouse to analyze their grain bills and brewing parameters.
              </p>
            </div>
            <div className="text-xs font-semibold text-[#76736A]">
              15 Pre-configured Styles + Saved Recipes
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {/* Custom Saved Recipes first */}
            {myRecipes.map((r, i) => (
              <button
                key={`my-${i}`}
                type="button"
                onClick={() => handleLoadRecipe(r)}
                className="p-4 rounded-xl border border-[#D49B44] bg-[#FAF8F5] text-left hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#B8822B] mb-1">
                    <span>★</span>
                    <span>Custom Creation</span>
                  </div>
                  <h4 className="font-serif font-bold text-lg text-[#1A1A18] group-hover:text-[#D49B44] transition-colors">
                    {r.name}
                  </h4>
                  <p className="text-xs text-[#76736A] mt-1 line-clamp-2">
                    {r.blurb}
                  </p>
                </div>
                <div className="text-[11px] font-bold text-[#D49B44] uppercase tracking-wider mt-4 flex items-center gap-1">
                  <span>Load Into Brewhouse</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </div>
              </button>
            ))}

            {/* Benchmark Library Recipes */}
            {RECIPES.map((r, i) => (
              <button
                key={`stock-${i}`}
                type="button"
                onClick={() => handleLoadRecipe(r)}
                className="p-4 rounded-xl border border-[#E5DFD5] bg-white text-left hover:border-[#D49B44] hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-[#1A1A18] group-hover:text-[#D49B44] transition-colors">
                    {r.name}
                  </h4>
                  <p className="text-xs text-[#76736A] mt-1 leading-relaxed">
                    {r.blurb}
                  </p>
                </div>
                <div className="text-[11px] font-bold text-[#1A1A18] uppercase tracking-wider mt-4 flex items-center gap-1 group-hover:text-[#D49B44]">
                  <span>Load Recipe</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* ========================================================= */}
      {/* MODAL 1: Retail Product Presentation View                 */}
      {/* ========================================================= */}
      {activeModal === "product" && result && (
        <div className="fixed inset-0 z-50 bg-[#1A1A18]/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full border border-[#E5DFD5] shadow-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setActiveModal("none")}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#F4EFE6] hover:bg-[#E5DFD5] text-[#1A1A18] font-bold flex items-center justify-center transition-all"
            >
              ✕
            </button>

            <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44] mb-2">
              Commercial Product Presentation
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A18]">
              {result.displayName || result.style.name}
            </h2>
            <p className="text-sm text-[#76736A] mt-1 mb-6">
              {result.style.desc}
            </p>

            {/* Spec Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <div className="p-3 bg-[#FAF8F5] border border-[#E5DFD5] rounded-xl text-center">
                <span className="text-[11px] text-[#76736A] uppercase font-semibold block">
                  Alcohol
                </span>
                <span className="font-serif text-xl font-bold text-[#1A1A18]">
                  {result.abv.toFixed(1)}%
                </span>
              </div>
              <div className="p-3 bg-[#FAF8F5] border border-[#E5DFD5] rounded-xl text-center">
                <span className="text-[11px] text-[#76736A] uppercase font-semibold block">
                  Bitterness
                </span>
                <span className="font-serif text-xl font-bold text-[#1A1A18]">
                  {Math.round(result.ibu)} IBU
                </span>
              </div>
              <div className="p-3 bg-[#FAF8F5] border border-[#E5DFD5] rounded-xl text-center">
                <span className="text-[11px] text-[#76736A] uppercase font-semibold block">
                  Colour
                </span>
                <span className="font-serif text-xl font-bold text-[#1A1A18]">
                  {result.srm.toFixed(1)} SRM
                </span>
              </div>
              <div className="p-3 bg-[#FAF8F5] border border-[#E5DFD5] rounded-xl text-center">
                <span className="text-[11px] text-[#76736A] uppercase font-semibold block">
                  Final Gravity
                </span>
                <span className="font-serif text-xl font-bold text-[#1A1A18]">
                  {result.FG.toFixed(3)}
                </span>
              </div>
            </div>

            {/* Sensory & Serving Information */}
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-4 bg-[#F4EFE6]/50 rounded-xl border border-[#E5DFD5]">
                <h4 className="font-bold text-[#1A1A18] mb-1">Sensory Flavour Notes</h4>
                <p className="text-[#42403B]">{result.notes.join(", ")}.</p>
              </div>

              {STYLE_INFO[result.style.base as keyof typeof STYLE_INFO] && (
                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E5DFD5] space-y-2">
                  <h4 className="font-bold text-[#1A1A18]">Heritage & Service</h4>
                  <p className="text-[#42403B]">
                    <b>Origin:</b>{" "}
                    {STYLE_INFO[result.style.base as keyof typeof STYLE_INFO].origin}
                  </p>
                  <p className="text-[#42403B]">
                    <b>Serving Temperature:</b>{" "}
                    {STYLE_INFO[result.style.base as keyof typeof STYLE_INFO].serve}
                  </p>
                  <p className="text-[#42403B]">
                    <b>Recommended Glassware:</b>{" "}
                    {STYLE_INFO[result.style.base as keyof typeof STYLE_INFO].glass}
                  </p>
                  <p className="text-[#42403B]">
                    <b>Culinary Pairings:</b>{" "}
                    {STYLE_INFO[result.style.base as keyof typeof STYLE_INFO].food}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveModal("none")}
                className="px-5 py-2.5 rounded-lg border border-[#E5DFD5] text-xs font-semibold text-[#42403B] hover:bg-[#F4EFE6]"
              >
                Close View
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveModal("sheet");
                }}
                className="px-5 py-2.5 rounded-lg bg-[#D49B44] text-white text-xs font-semibold hover:bg-[#B8822B]"
              >
                Open Brew Sheet
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 2: Brew-Day Printable Batch Sheet (20 L Scale)     */}
      {/* ========================================================= */}
      {activeModal === "sheet" && result && (
        <div className="fixed inset-0 z-50 bg-[#1A1A18]/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full border border-[#E5DFD5] shadow-2xl p-6 sm:p-10 relative max-h-[92vh] overflow-y-auto print:p-0 print:border-none print:shadow-none print:max-w-none">
            {/* Action Bar (hidden when printing) */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E5DFD5] print:hidden">
              <button
                type="button"
                onClick={() => setActiveModal("none")}
                className="px-4 py-2 rounded-lg border border-[#E5DFD5] text-xs font-semibold text-[#42403B] hover:bg-[#F4EFE6]"
              >
                &larr; Back to Brewhouse
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="px-5 py-2 rounded-lg bg-[#1A1A18] hover:bg-[#D49B44] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <span>🖨️ Print / Save as PDF</span>
              </button>
            </div>

            {/* Sheet Paper Content */}
            <article className="space-y-6 text-[#1A1A18]">
              <div className="flex justify-between items-start border-b-2 border-[#1A1A18] pb-4">
                <div>
                  <div className="text-[11px] uppercase tracking-widest font-bold text-[#D49B44]">
                    Brau Mitraa · Official Brew Sheet
                  </div>
                  <h1 className="font-serif text-3xl sm:text-4xl font-bold mt-1">
                    {result.displayName || result.style.name}
                  </h1>
                  <p className="text-xs text-[#76736A] mt-1">
                    {result.style.name} — {result.style.desc}
                  </p>
                </div>
                <div className="text-right text-xs font-mono text-[#76736A]">
                  <div>Batch: 20 L Pilot</div>
                  <div>Bottles: ~{result.bottles} (330ml)</div>
                  <div>Turnaround: {result.totalDays} Days</div>
                </div>
              </div>

              {/* Chemical Telemetry Table */}
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 bg-[#FAF8F5] p-3 rounded-lg border border-[#E5DFD5] text-center text-xs">
                <div>
                  <span className="text-[#76736A] block text-[10px] uppercase">OG</span>
                  <b>{result.OG.toFixed(3)}</b>
                </div>
                <div>
                  <span className="text-[#76736A] block text-[10px] uppercase">FG</span>
                  <b>{result.FG.toFixed(3)}</b>
                </div>
                <div>
                  <span className="text-[#76736A] block text-[10px] uppercase">ABV</span>
                  <b>{result.abv.toFixed(1)}%</b>
                </div>
                <div>
                  <span className="text-[#76736A] block text-[10px] uppercase">IBU</span>
                  <b>{Math.round(result.ibu)}</b>
                </div>
                <div>
                  <span className="text-[#76736A] block text-[10px] uppercase">SRM</span>
                  <b>{result.srm.toFixed(1)}</b>
                </div>
                <div>
                  <span className="text-[#76736A] block text-[10px] uppercase">Sweetness</span>
                  <b>{result.sweetIdx >= 6 ? "Sweet" : result.sweetIdx >= 3 ? "Balanced" : "Dry"}</b>
                </div>
              </div>

              {/* Ingredients Table */}
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider text-[#1A1A18] mb-2 pb-1 border-b border-[#E5DFD5]">
                  Bill of Materials (20 L Batch)
                </h3>
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-[#E5DFD5] text-[#76736A]">
                      <th className="py-2">Category</th>
                      <th className="py-2">Item</th>
                      <th className="py-2 text-right">Dosage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5DFD5]/60">
                    {Object.entries(selectedMalts).map(([id, kg]) => (
                      <tr key={id}>
                        <td className="py-2 font-medium text-[#76736A]">Grain</td>
                        <td className="py-2 font-bold text-[#1A1A18]">
                          {INGREDIENTS.malts.find((m) => m.id === id)?.name || id}
                        </td>
                        <td className="py-2 text-right font-mono">{kg.toFixed(1)} kg</td>
                      </tr>
                    ))}
                    {Object.entries(selectedHops).map(([id, g]) => (
                      <tr key={id}>
                        <td className="py-2 font-medium text-[#76736A]">Hop</td>
                        <td className="py-2 font-bold text-[#1A1A18]">
                          {INGREDIENTS.hops.find((h) => h.id === id)?.name || id}
                        </td>
                        <td className="py-2 text-right font-mono">{g} g</td>
                      </tr>
                    ))}
                    {selectedYeast && (
                      <tr>
                        <td className="py-2 font-medium text-[#76736A]">Yeast</td>
                        <td className="py-2 font-bold text-[#1A1A18]">
                          {INGREDIENTS.yeasts.find((y) => y.id === selectedYeast)?.name}
                        </td>
                        <td className="py-2 text-right font-mono">1 pitch pack</td>
                      </tr>
                    )}
                    {Object.entries(selectedAdjuncts).map(([id, kg]) => (
                      <tr key={id}>
                        <td className="py-2 font-medium text-[#76736A]">Adjunct</td>
                        <td className="py-2 font-bold text-[#1A1A18]">
                          {INGREDIENTS.adjuncts.find((a) => a.id === id)?.name || id}
                        </td>
                        <td className="py-2 text-right font-mono">
                          {kg < 0.1 ? `${Math.round(kg * 1000)} g` : `${kg.toFixed(1)} kg`}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Brewhouse Process Parameters */}
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider text-[#1A1A18] mb-2 pb-1 border-b border-[#E5DFD5]">
                  Brewhouse Process Schedule
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-2.5 bg-[#FAF8F5] rounded border border-[#E5DFD5]">
                    <span className="text-[#76736A] block">Mash Temperature:</span>
                    <b>{process.mashTemp}°C</b>
                  </div>
                  <div className="p-2.5 bg-[#FAF8F5] rounded border border-[#E5DFD5]">
                    <span className="text-[#76736A] block">Boil Duration:</span>
                    <b>{process.boilMin} min</b>
                  </div>
                  <div className="p-2.5 bg-[#FAF8F5] rounded border border-[#E5DFD5]">
                    <span className="text-[#76736A] block">Fermentation Temp:</span>
                    <b>{process.fermTemp}°C</b>
                  </div>
                  <div className="p-2.5 bg-[#FAF8F5] rounded border border-[#E5DFD5]">
                    <span className="text-[#76736A] block">Fermentation Duration:</span>
                    <b>{process.fermDays} days</b>
                  </div>
                  <div className="p-2.5 bg-[#FAF8F5] rounded border border-[#E5DFD5]">
                    <span className="text-[#76736A] block">Cellar Dry Hopping:</span>
                    <b>{process.dryHop > 0 ? `${process.dryHop} g/L` : "None"}</b>
                  </div>
                  <div className="p-2.5 bg-[#FAF8F5] rounded border border-[#E5DFD5]">
                    <span className="text-[#76736A] block">Maturation Mode:</span>
                    <b>{AGE_LABEL[process.ageMode]}</b>
                  </div>
                </div>
              </div>

              {/* Sensory & Notes */}
              <div className="pt-2 text-xs text-[#76736A] border-t border-[#E5DFD5]">
                <p>
                  <b>Sensory Expectations:</b> {result.notes.join(", ")}.
                </p>
                <p className="mt-2 text-[10px] italic">
                  Generated via Brau Mitraa Virtual Brewhouse Formulation Studio. Scalable to commercial 500L – 5,000L turnkey equipment systems.
                </p>
              </div>
            </article>
          </div>
        </div>
      )}
    </div>
  );
}
