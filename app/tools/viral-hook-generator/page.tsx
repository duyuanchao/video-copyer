import { Metadata } from "next";
import HookGeneratorClient from "./client";

export const metadata: Metadata = {
  title: "Free Viral Hook Generator for TikTok & Reels | Video Copyer",
  description: "Generate thumb-stopping hooks for your short-form videos using proven psychological triggers. Stop the scroll instantly.",
  keywords: ["viral hook generator", "tiktok hooks", "reels hook ideas", "content creation tools"],
};

export default function HookGeneratorPage() {
  return <HookGeneratorClient />;
}
