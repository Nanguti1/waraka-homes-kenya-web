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
            Ready to find a home that&apos;s ahead of its time?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Tell us how you want to live. Our advisors will curate a private selection within 48 hours.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">
                Book a consultation <ArrowRight className="ml-1 h-4 w-4" />
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
