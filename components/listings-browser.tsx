"use client"

import { useMemo, useState } from "react"
import { Search, SlidersHorizontal } from "lucide-react"
import { PropertyCard } from "@/components/property-card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { type Property } from "@/lib/properties"

const locations = ["All", "Juja Farm", "Joska", "Koma", "Nguluni"] as const
const priceRanges = [
  { value: "all", label: "Any price", min: 0, max: Number.POSITIVE_INFINITY },
  { value: "under-500k", label: "Under Ksh 500,000", min: 0, max: 500000 },
  { value: "500k-800k", label: "Ksh 500,000 – 800,000", min: 500000, max: 800000 },
  { value: "800k-1.2m", label: "Ksh 800,000 – 1,200,000", min: 800000, max: 1200000 },
] as const
const sorts = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
] as const

export function ListingsBrowser({
  properties,
  initialQuery = "",
}: {
  properties: Property[]
  initialQuery?: string
}) {
  const [query, setQuery] = useState(initialQuery)
  const [location, setLocation] = useState<(typeof locations)[number]>("All")
  const [priceRange, setPriceRange] = useState<(typeof priceRanges)[number]["value"]>("all")
  const [sort, setSort] = useState<(typeof sorts)[number]["value"]>("featured")

  const results = useMemo(() => {
    let list = properties.filter((p) => {
      const matchesQuery =
        query.trim() === "" ||
        `${p.title} ${p.location} ${p.city} ${p.category}`.toLowerCase().includes(query.toLowerCase())
      const matchesLocation = location === "All" || p.location === location
      const selectedRange = priceRanges.find((range) => range.value === priceRange) ?? priceRanges[0]
      const matchesPrice = p.price >= selectedRange.min && p.price <= selectedRange.max
      return matchesQuery && matchesLocation && matchesPrice
    })

    list = [...list].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price
        case "price-desc":
          return b.price - a.price
        default:
          return Number(b.featured) - Number(a.featured)
      }
    })
    return list
  }, [properties, query, location, priceRange, sort])

  return (
    <div>
      <div className="sticky top-16 z-30 -mx-4 mb-10 border-b border-border/60 bg-background/80 px-4 py-4 backdrop-blur-xl sm:mx-0 sm:rounded-xl sm:border sm:px-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="flex flex-1 items-center gap-2 rounded-lg bg-secondary/60 px-3">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            <label htmlFor="listing-search" className="sr-only">
              Search listings
            </label>
            <input
              id="listing-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by project, area, or county…"
              className="w-full bg-transparent py-2.5 text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 rounded-lg border border-border bg-secondary/60 px-3 py-2">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <label htmlFor="location" className="sr-only">
                Filter by location
              </label>
              <select
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value as (typeof locations)[number])}
                className="bg-transparent text-sm outline-none"
              >
                {locations.map((option) => (
                  <option key={option} value={option} className="bg-card">
                    {option === "All" ? "All locations" : option}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-border bg-secondary/60 px-3 py-2">
              <label htmlFor="price-range" className="sr-only">
                Filter by price range
              </label>
              <select
                id="price-range"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value as (typeof priceRanges)[number]["value"])}
                className="bg-transparent text-sm outline-none"
              >
                {priceRanges.map((option) => (
                  <option key={option.value} value={option.value} className="bg-card">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <label htmlFor="sort" className="sr-only">
              Sort by
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              className="rounded-lg border border-border bg-secondary/60 px-3 py-2.5 text-sm outline-none"
            >
              {sorts.map((s) => (
                <option key={s.value} value={s.value} className="bg-card">
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <p className="mb-6 text-sm text-muted-foreground">
        {results.length} {results.length === 1 ? "plot" : "plots"} available
      </p>

      {results.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-border/60 bg-card/40 py-20 text-center">
          <p className="text-lg font-medium">No plots match your search</p>
          <p className="mt-2 text-sm text-muted-foreground">Try adjusting your filters or search terms.</p>
          <Button
            variant="outline"
            className="mt-6 rounded-full"
            onClick={() => {
              setQuery("")
              setLocation("All")
              setPriceRange("all")
            }}
          >
            Clear filters
          </Button>
        </div>
      )}
    </div>
  )
}
