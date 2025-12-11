import Link from "next/link";
import { MonitorPlay, ArrowRight, LayoutTemplate, Star, TrendingUp } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Viral Video Template Library | Video Copyer",
  description: "Browse our collection of proven viral video templates. Replicate the structure of top creators like Alex Hormozi, MrBeast, and more.",
};

const templates = [
  {
    title: "The Value Framework",
    creator: "Alex Hormozi Style",
    description: "A contrarian hook followed by a value reframe and a soft CTA. Perfect for business coaching and B2B.",
    tags: ["Business", "Educational", "High Conversions"],
    slug: "alex-hormozi-value-framework",
    color: "blue"
  },
  {
    title: "The Silent Vlog",
    creator: "Lifestyle Aesthetic",
    description: "ASMR-style cuts with text overlays. No talking required. Ideal for product showcases and 'Day in the Life'.",
    tags: ["Lifestyle", "Product", "No Face"],
    slug: "#",
    color: "pink"
  },
  {
    title: "The 'Storytime' Hook",
    creator: "Narrative Style",
    description: "Starts with 'I almost lost everything...' to grab attention, then unfolds a transformation story.",
    tags: ["Storytelling", "Personal Brand", "Emotional"],
    slug: "#",
    color: "purple"
  }
];

export default function TemplatesPage() {
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
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-400 mb-6">
              <LayoutTemplate className="mr-2 h-4 w-4" />
              Template Library
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Proven Structures for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Viral Growth</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't guess what works. Use proven script structures and visual patterns that have generated millions of views.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {templates.map((template) => (
              <Link 
                key={template.title} 
                href={`/templates/${template.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card p-6 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-${template.color}-500/10 text-${template.color}-400`}>
                  <Star className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{template.title}</h3>
                <div className="text-xs font-medium text-muted-foreground mb-4 uppercase tracking-wider">{template.creator}</div>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                  {template.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {template.tags.map(tag => (
                    <span key={tag} className="text-xs bg-white/5 text-white/60 px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                  <ArrowRight className="h-5 w-5 text-foreground" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
