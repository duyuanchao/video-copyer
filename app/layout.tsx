import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "./analytics";
import "./globals.css";
import JsonLd from "@/components/seo/json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://video-copyer.com"),
  title: {
    default: "Video Copyer - AI Viral Video Replica",
    template: "%s | Video Copyer",
  },
  description:
    "Replicate viral hits in seconds. The AI-powered video content creation engine that helps you analyze, understand, and recreate popular short videos.",
  keywords: [
    "AI video generator",
    "viral video replica",
    "content creation tool",
    "short video maker",
    "TikTok video analyzer",
    "video script generator",
    "AI video editor",
  ],
  authors: [{ name: "Video Copyer Team" }],
  creator: "Video Copyer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://video-copyer.com",
    title: "Video Copyer - AI Viral Video Replica",
    description:
      "Replicate viral hits in seconds. The AI-powered video content creation engine.",
    siteName: "Video Copyer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Copyer - AI Viral Video Replica",
    description:
      "Replicate viral hits in seconds. The AI-powered video content creation engine.",
    creator: "@videocopyer",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Analytics />
        <JsonLd />
      </body>
    </html>
  );
}
