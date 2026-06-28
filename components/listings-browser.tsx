"use client"

import { useMemo, useState } from "react"
import { Search, SlidersHorizontal } from "lucide-react"
import { PropertyCard } from "@/components/property-card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { type Property } from "@/lib/properties"

const types = ["All", "House", "Villa", "Penthouse", "Apartment", "Loft"] as const
const statuses = ["All", "For Sale", "For Rent"] as const
const sorts = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "area-desc", label: "Largest" },
] as const

export function ListingsBrowser({
  properties,
  initialQuery = "",
}: {
  properties: Property[]
  initialQuery?: string
}) {
  const [query, setQuery] = useState(initialQuery)
  const [type, setType] = useState<(typeof types)[number]>("All")
  const [status, setStatus] = useState<(typeof statuses)[number]>("All")
  const [sort, setSort] = useState<(typeof sorts)[number]["value"]>("featured")

  const results = useMemo(() => {
    let list = properties.filter((p) => {
      const matchesQuery =
        query.trim() === "" ||
        `${p.title} ${p.location} ${p.city} ${p.type}`.toLowerCase().includes(query.toLowerCase())
      const matchesType = type === "All" || p.type === type
      const matchesStatus = status === "All" || p.status === status
      return matchesQuery && matchesType && matchesStatus
    })

    list = [...list].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price
        case "price-desc":
          return b.price - a.price
        case "area-desc":
          return b.area - a.area
        default:
          return Number(b.featured) - Number(a.featured)
      }
    })
    return list
  }, [properties, query, type, status, sort])

  return (
    <div>
      {/* Filter bar */}
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
              placeholder="Search by city, neighborhood, or style…"
              className="w-full bg-transparent py-2.5 text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>

          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
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

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {types.map((t) => (
            <FilterChip key={t} active={type === t} onClick={() => setType(t)}>
              {t}
            </FilterChip>
          ))}
          <span className="mx-1 hidden h-5 w-px bg-border sm:block" />
          {statuses.map((s) => (
            <FilterChip key={s} active={status === s} onClick={() => setStatus(s)}>
              {s}
            </FilterChip>
          ))}
        </div>
      </div>

      <p className="mb-6 text-sm text-muted-foreground">
        {results.length} {results.length === 1 ? "residence" : "residences"} available
      </p>

      {results.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-border/60 bg-card/40 py-20 text-center">
          <p className="text-lg font-medium">No residences match your search</p>
          <p className="mt-2 text-sm text-muted-foreground">Try adjusting your filters or search terms.</p>
          <Button
            variant="outline"
            className="mt-6 rounded-full"
            onClick={() => {
              setQuery("")
              setType("All")
              setStatus("All")
            }}
          >
            Clear filters
          </Button>
        </div>
      )}
    </div>
  )
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-secondary/40 text-muted-foreground hover:border-primary/40 hover:text-foreground",
      )}
    >
      {children}
    </button>
  )
}
