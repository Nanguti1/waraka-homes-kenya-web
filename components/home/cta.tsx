import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card px-6 py-16 text-center sm:px-12 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 0%, color-mix(in oklch, var(--primary) 40%, transparent), transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to secure a plot with a clear title path?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Let our team guide you through the best affordable plots in Juja, Joska, Koma, and Nguluni with transparent legal support.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full">
              <Link href="https://wa.me/254795999444?text=Hello%20Waraka%20Homes%20Kenya%2C%20I%20would%20like%20to%20book%20a%20free%20site%20visit.">
                Book a site visit <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link href="/listings">Browse listings</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
