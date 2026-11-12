import type { Metadata } from "next";
import { RecipeStudio } from "@/components/recipe-studio";

export const metadata: Metadata = {
  title:
    "Interactive Recipe Studio & Brewhouse Formulation Lab | Brau Mitraa",
  description:
    "Formulate, calculate, and simulate craft beer recipes with Brau Mitraa's interactive brewhouse lab. Test grain bills, hop alpha acid utilisation, SRM color, and fermentation attenuation.",
  keywords: [
    "brewery recipe studio",
    "beer recipe formulation",
    "brewhouse simulator",
    "beer formulation tool",
    "Tinseth IBU calculator",
    "Morey SRM color",
    "brewhouse gravity calculator",
    "craft beer recipe design",
    "commercial brewing simulator",
    "Brau Mitraa recipe lab",
  ],
  openGraph: {
    title:
      "Interactive Recipe Studio & Brewhouse Formulation Lab | Brau Mitraa",
    description:
      "Formulate, calculate, and simulate craft beer recipes with Brau Mitraa's interactive brewhouse lab. Test grain bills, hop alpha acid utilisation, SRM color, and fermentation attenuation.",
    type: "website",
    url: "https://ai-prgmr.github.io/brewery/recipe-studio",
    images: [
      {
        url: "/brewery/brau-mitraa-logo.png",
        width: 1200,
        height: 630,
        alt: "Brau Mitraa Interactive Recipe Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Interactive Recipe Studio & Brewhouse Formulation Lab | Brau Mitraa",
    description:
      "Formulate, calculate, and simulate craft beer recipes with Brau Mitraa's interactive brewhouse lab.",
    images: ["/brewery/brau-mitraa-logo.png"],
  },
};

export default function RecipeStudioPage() {
  return <RecipeStudio />;
}
