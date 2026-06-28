import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/properties/hero.png"
          alt="Futuristic luxury mansion at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 py-32 sm:px-6 lg:px-8">
        <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-background/40 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-primary backdrop-blur-md">
          The future of living
        </span>
        <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Architecture that lives <span className="text-primary">ahead</span> of its time.
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Aether curates the world&apos;s most extraordinary residences — glass villas, sky-high penthouses, and
          sculptural estates for those who refuse the ordinary.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/listings">
              Explore Listings <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full border-border bg-background/40 backdrop-blur-md">
            <Link href="/contact">Speak to an advisor</Link>
          </Button>
        </div>

        {/* Quick search bar */}
        <div className="mt-14 w-full max-w-2xl rounded-2xl border border-border/60 bg-background/50 p-2 backdrop-blur-xl">
          <form action="/listings" className="flex flex-col gap-2 sm:flex-row">
            <div className="flex flex-1 items-center gap-2 rounded-xl bg-secondary/60 px-4">
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <label htmlFor="hero-search" className="sr-only">
                Search location or property
              </label>
              <input
                id="hero-search"
                name="q"
                placeholder="Search by city, neighborhood, or style…"
                className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
            <Button type="submit" size="lg" className="rounded-xl">
              Search
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
