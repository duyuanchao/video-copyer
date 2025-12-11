"use client";

import { useState } from "react";
import Link from "next/link";
import { MonitorPlay, Type, Loader2, Copy, Check, TrendingUp, AlertCircle } from "lucide-react";

type TitleResult = {
  text: string;
  style: string;
  score: number;
};

export default function TitleOptimizerClient() {
  const [draft, setDraft] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<TitleResult[] | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleOptimize = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!draft) return;

    setIsLoading(true);
    // Simulate API logic
    setTimeout(() => {
      setResults([
        {
          text: `I ${draft.replace(/how to|learn|guide/gi, "").trim()} for 30 Days`,
          style: "The 'Challenge' Framework (MrBeast Style)",
          score: 94
        },
        {
          text: `Stop ${draft.replace(/how to|learn|guide/gi, "").trim()} (Do This Instead)`,
          style: "The 'Warning' Framework",
          score: 88
        },
        {
          text: `Why 99% of People Fail at ${draft.replace(/how to|learn|guide/gi, "").trim()}`,
          style: "The 'Statistic' Framework",
          score: 91
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
            <div className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm font-medium text-red-400 mb-6">
              <Type className="mr-2 h-4 w-4" />
              YouTube Title Optimizer
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Get More Clicks (Free)
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform boring titles into viral click magnets. Analyze your headline against high-CTR patterns used by top creators.
            </p>
          </div>

          {/* Input Section */}
          <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl shadow-red-500/5 mb-12">
            <form onSubmit={handleOptimize} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Your Draft Title</label>
                <input
                  type="text"
                  placeholder="e.g. How to make money online, Fitness tips"
                  className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-4 text-lg outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all placeholder:text-muted-foreground/50"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl px-8 py-4 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    Optimize Title <TrendingUp className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Result Section */}
          {results && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Optimized Variations</h2>
                <div className="text-xs text-muted-foreground">Based on CTR analysis</div>
              </div>
              
              {results.map((item, index) => (
                <div key={index} className="bg-card border border-border rounded-xl overflow-hidden group hover:border-red-500/30 transition-colors relative">
                  <div className="p-6 pr-24">
                    <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                      {item.style}
                    </div>
                    <p className="text-lg font-bold mb-0 group-hover:text-red-400 transition-colors">
                      {item.text}
                    </p>
                    
                    <button
                      onClick={() => copyToClipboard(item.text, index)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
                    >
                      {copiedIndex === index ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                    </button>

                    <div className="absolute top-4 right-4 flex flex-col items-center">
                       <div className={`text-xl font-bold ${item.score > 90 ? 'text-green-500' : 'text-yellow-500'}`}>
                         {item.score}
                       </div>
                       <div className="text-[10px] text-muted-foreground uppercase">CTR Score</div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-muted/30 rounded-xl p-4 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong>Pro Tip:</strong> Titles with brackets `(like this)` or specific numbers often see a 20-30% higher click-through rate.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
