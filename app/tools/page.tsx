import Link from "next/link";
import { MonitorPlay, Zap, Type, Sparkles } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free AI Video Tools for Creators | Video Copyer",
  description: "A collection of free AI tools to help you create viral videos. Script extractors, hook generators, title optimizers, and more.",
  keywords: ["viral video tools", "tiktok tools", "youtube title generator", "hook generator"],
};

const tools = [
  {
    title: "TikTok Script Extractor",
    description: "Extract text scripts from any TikTok video URL. Analyze structure and keywords instantly.",
    icon: <MonitorPlay className="h-6 w-6" />,
    href: "/tools/tiktok-script-extractor",
    color: "blue"
  },
  {
    title: "Viral Hook Generator",
    description: "Generate 5 thumb-stopping hooks for your niche using proven psychological frameworks.",
    icon: <Zap className="h-6 w-6" />,
    href: "/tools/viral-hook-generator",
    color: "yellow"
  },
  {
    title: "YouTube Title Optimizer",
    description: "Turn boring titles into high-CTR click magnets using MrBeast-style logic.",
    icon: <Type className="h-6 w-6" />,
    href: "/tools/youtube-title-optimizer",
    color: "red"
  }
];

export default function ToolsIndexPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/60 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <MonitorPlay className="h-6 w-6 text-foreground" />
            <span className="text-xl font-bold tracking-tight">Video Copyer</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90 transition-colors">
              Get Pro
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm font-medium text-green-400 mb-6">
              <Sparkles className="mr-2 h-4 w-4" />
              Creator Toolkit
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Free AI Tools to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Go Viral</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stop guessing. Use these data-driven tools to optimize every part of your content creation workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tools.map((tool) => (
              <Link 
                key={tool.title} 
                href={tool.href}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5"
              >
                <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-${tool.color}-500/10 text-${tool.color}-400`}>
                  {tool.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-foreground transition-colors">{tool.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tool.description}
                </p>
                <div className="mt-8 flex items-center text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  Try it now <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
