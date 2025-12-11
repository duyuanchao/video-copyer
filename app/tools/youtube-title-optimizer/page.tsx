import { Metadata } from "next";
import TitleOptimizerClient from "./client";

export const metadata: Metadata = {
  title: "Free YouTube Title Optimizer & Generator | Video Copyer",
  description: "Improve your YouTube click-through rate (CTR) instantly. Rewrite your titles using the same logic as MrBeast and top creators.",
  keywords: ["youtube title generator", "clickbait title maker", "increase youtube ctr", "title optimizer"],
};

export default function TitleOptimizerPage() {
  return <TitleOptimizerClient />;
}
