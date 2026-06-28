import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/property-card"
import { getFeaturedProperties } from "@/lib/properties"

export function Featured() {
  const featured = getFeaturedProperties()

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-primary">Featured collection</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Signature residences
          </h2>
        </div>
        <Button asChild variant="ghost" className="text-primary hover:text-primary">
          <Link href="/listings">
            View all listings <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  )
}
