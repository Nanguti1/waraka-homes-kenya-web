import { ListingsBrowser } from "@/components/listings-browser"
import { getProperties } from "@/lib/properties"

export const metadata = {
  title: "Listings — Aether Estate",
  description: "Browse our curated collection of futuristic luxury residences for sale and rent.",
}

export default async function ListingsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q } = await searchParams
  const properties = getProperties()

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mb-4">
        <span className="font-mono text-xs uppercase tracking-widest text-primary">The collection</span>
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">Available residences</h1>
        <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Every home is hand-selected for architectural significance, technology, and timeless design.
        </p>
      </header>

      <ListingsBrowser properties={properties} initialQuery={q ?? ""} />
    </div>
  )
}
