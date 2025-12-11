"use client";

import { useState } from "react";
import Link from "next/link";
import { MonitorPlay, ArrowRight, Loader2, Copy, Check, FileText, Download } from "lucide-react";

export default function ScriptExtractorClient() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{
    script: string;
    hashtags: string[];
    duration: string;
    analysis?: {
      hookScore: string;
      pacing: string;
      keywords: string[];
      structure: string;
    };
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const handleExtract = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setIsLoading(true);
    // Simulate API call with high-value educational demo data
    setTimeout(() => {
      setResult({
        script: `[00:00] [HOOK - Face Close up]\nSpeaker: "Stop trying to get rich. Start trying to provide value."\n\n[00:03] [Visual: Fast cuts of business charts / money]\nSpeaker: "Most people think money is the goal. It's not. Money is just the receipt for the value you provided to the marketplace."\n\n[00:09] [Visual: Alex drawing on whiteboard]\nSpeaker: "If you want to make $1,000,000, you don't need a better scheme. You need a better skill."\n\n[00:14] [CTA - Text Overlay]\nSpeaker: "I broke down exactly how I learned these skills in my new free course. Link in bio."`,
        hashtags: ["#entrepreneur", "#businessmindset", "#alexhormozi", "#wealth", "#growth"],
        duration: "00:19",
        analysis: {
          hookScore: "9.5/10",
          pacing: "Fast (Cut every 2.4s)",
          keywords: ["Rich", "Value", "Money", "Skill"],
          structure: "Contrarian Hook -> Reframe -> Actionable Insight -> Soft CTA"
        }
      });
      setIsLoading(false);
    }, 2000);
  };

  const copyToClipboard = () => {
    if (!result) return;
    navigator.clipboard.writeText(result.script);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
            <Link href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
              Sign In
            </Link>
            <Link href="/dashboard" className="hidden sm:block rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90 transition-colors">
              Get Pro
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Tool Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 mb-6">
              Free AI Tool
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              TikTok Script Extractor
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Paste any TikTok video link below to instantly extract the spoken script, captions, and analyze the content structure.
            </p>
          </div>

          {/* Input Section */}
          <div className="bg-card border border-border rounded-2xl p-2 md:p-4 shadow-2xl shadow-blue-500/5 mb-12">
            <form onSubmit={handleExtract} className="flex flex-col md:flex-row gap-3">
              <input
                type="url"
                placeholder="Paste TikTok video URL here (e.g., https://www.tiktok.com/@user/video/...)"
                className="flex-1 bg-background/50 border border-white/10 rounded-xl px-5 py-4 text-base outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-muted-foreground/50"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-8 py-4 font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px]"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    Extract <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Result Section */}
          {result && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Script Card */}
                <div className="md:col-span-2 bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="border-b border-border bg-muted/30 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-blue-400" />
                      <span className="font-medium text-sm">Extracted Script</span>
                    </div>
                    <button
                      onClick={copyToClipboard}
                      className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                      {copied ? "Copied" : "Copy Text"}
                    </button>
                  </div>
                  <div className="p-6 bg-background/50">
                    <pre className="whitespace-pre-wrap font-mono text-sm text-muted-foreground leading-relaxed">
                      {result.script}
                    </pre>
                  </div>
                </div>

                {/* Metadata Card */}
                <div className="space-y-6">
                  <div className="bg-card border border-border rounded-2xl p-6">
                    <h3 className="text-sm font-medium text-muted-foreground mb-4">Viral Analysis</h3>
                    <div className="space-y-4">
                       <div>
                        <div className="text-xs text-muted-foreground/70 mb-1">Hook Score</div>
                        <div className="font-mono text-lg text-green-400">{result.analysis?.hookScore || "N/A"}</div>
                      </div>
                       <div>
                        <div className="text-xs text-muted-foreground/70 mb-1">Structure</div>
                        <div className="text-xs font-medium text-purple-300">{result.analysis?.structure || "N/A"}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground/70 mb-1">Pacing</div>
                        <div className="font-mono text-sm">{result.analysis?.pacing || "N/A"}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground/70 mb-2">Keywords</div>
                        <div className="flex flex-wrap gap-2">
                          {result.analysis?.keywords?.map((tag: string) => (
                            <span key={tag} className="text-xs bg-white/5 text-white/80 px-2 py-1 rounded-md">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                       <div className="pt-4 border-t border-white/5">
                        <div className="text-xs text-muted-foreground/70 mb-2">Hashtags</div>
                        <div className="flex flex-wrap gap-2">
                          {result.hashtags.map((tag) => (
                            <span key={tag} className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded-md">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-6 text-center">
                    <h3 className="font-bold text-lg mb-2">Want to remake this?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Use Video Copyer to generate a new unique video based on this script structure.
                    </p>
                    <Link
                      href="/dashboard"
                      className="block w-full bg-foreground text-background rounded-xl py-3 text-sm font-medium hover:bg-foreground/90 transition-colors"
                    >
                      Try for Free
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SEO Content Block (Important for ranking) */}
          <div className="prose prose-invert prose-lg max-w-none mt-20 border-t border-white/5 pt-12">
            <h3>How to extract a script from a TikTok video?</h3>
            <p className="text-muted-foreground">
              Extracting the script from a viral TikTok video is the first step to understanding why it performed so well. 
              Our tool uses advanced speech-to-text technology to transcribe the audio, giving you a clear text version 
              of the video's content.
            </p>
            
            <h3>Why analyze viral video scripts?</h3>
            <ul className="text-muted-foreground">
              <li><strong>Identify Hooks:</strong> See exactly what words were used in the first 3 seconds.</li>
              <li><strong>Analyze Structure:</strong> Understand the pacing and flow of the narrative.</li>
              <li><strong>Content Replica:</strong> Use the structure as a template for your own niche content.</li>
            </ul>
          </div>

        </div>
      </main>
    </div>
  );
}
