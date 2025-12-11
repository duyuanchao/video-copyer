"use client";

import { useState } from "react";
import Link from "next/link";
import { MonitorPlay, Zap, ArrowRight, Loader2, Copy, Check, Lightbulb } from "lucide-react";

type HookResult = {
  text: string;
  type: string;
  psychology: string;
};

export default function HookGeneratorClient() {
  const [niche, setNiche] = useState("");
  const [topic, setTopic] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<HookResult[] | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!niche || !topic) return;

    setIsLoading(true);
    // Simulate API call with "Smart" logic
    setTimeout(() => {
      setResults([
        {
          text: `Stop doing ${topic} if you want to succeed in ${niche}.`,
          type: "The Negative Constraint",
          psychology: "Attacks a common belief (Pattern Interrupt). Creates immediate curiosity about what NOT to do."
        },
        {
          text: `The 3 things about ${topic} that no one in ${niche} is telling you.`,
          type: "The Insider Secret",
          psychology: "Leverages 'Us vs Them' mentality and fear of missing out (FOMO) on privileged information."
        },
        {
          text: `I tried ${topic} for 30 days and here is what happened...`,
          type: "The Story Gap",
          psychology: "Classic storytelling. Opens a loop that the viewer MUST watch to the end to close (Completion Bias)."
        }
      ]);
      setIsLoading(false);
    }, 1500);
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/60 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <MonitorPlay className="h-6 w-6 text-foreground" />
            <span className="text-xl font-bold tracking-tight">Video Copyer</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/tools" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              All Tools
            </Link>
            <Link href="/dashboard" className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90 transition-colors">
              Get Pro
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          
          {/* Tool Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-sm font-medium text-yellow-400 mb-6">
              <Zap className="mr-2 h-4 w-4" />
              Viral Hook Generator
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Stop The Scroll Instantly
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Generate 3 psychologically proven hooks for your next video in seconds. Based on data from millions of viral views.
            </p>
          </div>

          {/* Input Section */}
          <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl shadow-yellow-500/5 mb-12">
            <form onSubmit={handleGenerate} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Your Niche</label>
                  <input
                    type="text"
                    placeholder="e.g. Real Estate, Fitness, Coding"
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 transition-all"
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Video Topic</label>
                  <input
                    type="text"
                    placeholder="e.g. Buying a house, Keto diet"
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 transition-all"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-xl px-8 py-4 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    Generate Hooks <Zap className="ml-2 h-4 w-4 fill-black" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Result Section */}
          {results && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-xl font-bold text-center mb-8">Your Viral Hooks</h2>
              {results.map((hook, index) => (
                <div key={index} className="bg-card border border-border rounded-xl overflow-hidden group hover:border-yellow-500/30 transition-colors">
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="bg-white/5 rounded-lg px-3 py-1 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                        {hook.type}
                      </div>
                      <button
                        onClick={() => copyToClipboard(hook.text, index)}
                        className="text-muted-foreground hover:text-yellow-400 transition-colors"
                      >
                        {copiedIndex === index ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                      </button>
                    </div>
                    <p className="text-xl font-medium mb-4 leading-snug">
                      "{hook.text}"
                    </p>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg">
                      <Lightbulb className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />
                      <span>{hook.psychology}</span>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6 text-center mt-8">
                <p className="text-sm text-muted-foreground mb-4">
                  Need a full script for one of these hooks?
                </p>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-2 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
                >
                  Generate Full Script
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
