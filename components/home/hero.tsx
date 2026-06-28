import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  { title: "1. Select Plot & Free Site Visit", description: "Pick the right plot and tour it with our team." },
  { title: "2. Transparent Legal Verification", description: "We verify ownership, compliance, and title readiness." },
  { title: "3. Get Your Freehold Title in 14 Days", description: "Your paperwork is processed safely and quickly." },
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/properties/hero.png"
          alt="Land plots in Kenya with a clear development pathway"
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
          Dreams are valid
        </span>
        <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Own Prime, Affordable Plots in Kenya with Ready Title Deeds.
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Waraka Homes Kenya helps families and investors secure genuine residential and commercial land in Nairobi, Kiambu, and Machakos with transparent guidance and freehold title support.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="rounded-full">
            <Link href="https://wa.me/254795999444?text=Hello%20Waraka%20Homes%20Kenya%2C%20I%20would%20like%20to%20book%20a%20free%20site%20visit.">
              Book a free site visit <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full border-border bg-background/40 backdrop-blur-md">
            <Link href="/listings">Browse available plots</Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-3 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="rounded-2xl border border-primary/20 bg-background/60 p-4 backdrop-blur-md">
              <p className="text-sm font-semibold text-primary">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 w-full max-w-2xl rounded-2xl border border-border/60 bg-background/50 p-2 backdrop-blur-xl">
          <form action="/listings" className="flex flex-col gap-2 sm:flex-row">
            <div className="flex flex-1 items-center gap-2 rounded-xl bg-secondary/60 px-4">
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <label htmlFor="hero-search" className="sr-only">
                Search location or property
              </label>
              <input
                id="hero-search"
                name="q"
                placeholder="Search by project, area, or county…"
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
