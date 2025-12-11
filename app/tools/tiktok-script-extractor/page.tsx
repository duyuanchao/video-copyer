import { Metadata } from "next";
import ScriptExtractorClient from "./client";

export const metadata: Metadata = {
  title: "Free TikTok Script Extractor | Video Copyer",
  description: "Extract scripts, captions, and hashtags from any TikTok video instantly. Analyze viral content structure for free with our AI tool.",
  keywords: ["TikTok script downloader", "extract tiktok caption", "viral video analyzer", "tiktok transcript generator"],
  openGraph: {
    title: "Free TikTok Script Extractor | Video Copyer",
    description: "Extract scripts and analyze viral structure from TikTok videos instantly.",
  }
};

export default function ScriptExtractorPage() {
  return <ScriptExtractorClient />;
}
