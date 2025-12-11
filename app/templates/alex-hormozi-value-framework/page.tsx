import Link from "next/link";
import { MonitorPlay, Check, Clock, TrendingUp } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alex Hormozi 'Value Framework' Script Template | Video Copyer",
  description: "Replicate Alex Hormozi's viral video structure. A step-by-step breakdown of the Hook-Retain-Reward framework for business content.",
};

export default function HormoziTemplatePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/60 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <MonitorPlay className="h-6 w-6 text-foreground" />
            <span className="text-xl font-bold tracking-tight">Video Copyer</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/templates" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Back to Library
            </Link>
            <Link href="/dashboard" className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90 transition-colors">
              Use this Template
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Template Hero */}
          <div className="mb-12">
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <TrendingUp className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Viral Structure Breakdown</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">The "Value Framework"</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Popularized by Alex Hormozi, this structure focuses on high-density value delivery. It strips away fluff, starts with a contrarian opinion or hard truth, and delivers a solution immediately.
            </p>
          </div>

          {/* Video Structure Timeline */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-blue-500/20 text-blue-400 font-mono text-xs px-2 py-1 rounded">00:00 - 00:03</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">The Contrarian Hook</h3>
                    <p className="text-muted-foreground text-sm mb-3">Stop the scroll by stating something that challenges the viewer's current belief.</p>
                    <div className="bg-white/5 rounded-lg p-3 text-sm font-mono text-white/80">
                      "Stop trying to get rich. Start trying to provide value."
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-purple-500/20 text-purple-400 font-mono text-xs px-2 py-1 rounded">00:03 - 00:15</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">The Reframe (Retain)</h3>
                    <p className="text-muted-foreground text-sm mb-3">Explain WHY their belief is wrong and provide the new, correct perspective (the "Value"). Keep cuts fast.</p>
                    <div className="bg-white/5 rounded-lg p-3 text-sm font-mono text-white/80">
                      "Money is just the receipt for the value you provided... You don't need a better scheme, you need a better skill."
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-green-500/20 text-green-400 font-mono text-xs px-2 py-1 rounded">00:15 - 00:20</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">The Soft CTA (Reward)</h3>
                    <p className="text-muted-foreground text-sm mb-3">Direct them to a free resource or next step that helps them implement the value.</p>
                    <div className="bg-white/5 rounded-lg p-3 text-sm font-mono text-white/80">
                      "I broke down these skills in my free course. Link in bio."
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Stats */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-bold mb-4">Why it works</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span><strong>Pattern Interrupt:</strong> No "Hey guys", starts immediately with content.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span><strong>Authority Bias:</strong> Confident tone establishes expertise quickly.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span><strong>High WPM:</strong> Fast speaking pace retains attention (approx 150-160 words per minute).</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-600 rounded-2xl p-6 text-center">
                <h3 className="font-bold text-white text-lg mb-2">Use this Template</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Our AI can rewrite your topic into this exact framework instantly.
                </p>
                <Link href="/dashboard" className="block w-full bg-white text-blue-600 rounded-xl py-3 font-bold hover:bg-blue-50 transition-colors">
                  Generate Script
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
