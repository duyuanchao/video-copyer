import Link from "next/link"
import { MonitorPlay, Sparkles, Zap, MessageSquare } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/20">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <MonitorPlay className="h-6 w-6 text-foreground" />
            <span className="text-xl font-bold tracking-tight">Video Copyer</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
            <Link href="#showcase" className="hover:text-foreground transition-colors">Showcase</Link>
            <Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground">Login</Link>
            <Link href="/dashboard" className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background hover:bg-foreground/90 transition-colors">
              Try for Free
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
          {/* Background Gradients */}
          <div className="absolute top-0 -z-10 h-full w-full bg-[#000000] opacity-100 dark:bg-grid-white/[0.05] bg-grid-black/[0.05]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[100px] rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/20 blur-[80px] rounded-full translate-x-20 translate-y-20" />
          </div>

          <div className="container px-4 text-center">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-foreground backdrop-blur-md mb-8">
              <Sparkles className="mr-2 h-4 w-4 text-yellow-500" />
              <span>AI-Powered Content Creation Engine V2.0</span>
            </div>

            <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl mb-6">
              <span className="block mb-2">When AI Understands</span>
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                "Viral Logic"
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10 leading-relaxed">
              More than just a simple editing tool. Video Copyer decodes the DNA of viral videos,
              from scripts and camera movements to emotional rhythms, helping you replicate million-view hits in one click.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/dashboard" className="h-12 px-8 rounded-full bg-foreground text-background font-medium flex items-center justify-center hover:bg-foreground/90 transition-all text-lg min-w-[160px]">
                Get Started
              </Link>
              <Link href="#demo" className="h-12 px-8 rounded-full border border-border bg-background/50 backdrop-blur-sm text-foreground font-medium flex items-center justify-center hover:bg-accent transition-all text-lg min-w-[160px]">
                Watch Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-24 bg-accent/5">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Three Core Powers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-blue-500/50 transition-all duration-300">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Viral Video Replica</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Just one link needed. AI automatically deconstructs the structure, script, and visual style of the original video. Input a new theme to generate a viral hit replica.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Talking Photos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Upload static portraits or pet photos, input dialogue, and generate video with vivid expressions and precise lip-syncing. Supports multi-character interaction.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-pink-500/50 transition-all duration-300">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/10 text-pink-500">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Intelligent Creation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Assistive creativity from 0 to 1. Input product selling points or creative directions, and AI outputs storyboards and automatically matches footage to create a video.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12 bg-background">
        <div className="container px-4 mx-auto text-center text-muted-foreground text-sm">
          <p>© 2024 Video Copyer AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
