import Link from "next/link"
import Image from "next/image"
import { MapPin, Ruler, Landmark } from "lucide-react"
import { type Property, formatPrice } from "@/lib/properties"

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      href={`/listings/${property.id}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_40px_-12px] hover:shadow-primary/30"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 rounded-full border border-primary/30 bg-background/70 px-3 py-1 text-xs font-medium text-primary backdrop-blur-md">
          {property.status}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-background/70 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-md">
          {property.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-balance font-medium leading-tight transition-colors group-hover:text-primary">
            {property.title}
          </h3>
        </div>
        <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {property.location}, {property.city}
        </p>

        <p className="mt-4 font-mono text-xl font-semibold text-primary">
          {formatPrice(property.price, property.status)}
        </p>

        <div className="mt-4 flex items-center gap-4 border-t border-border/60 pt-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Ruler className="h-4 w-4" aria-hidden="true" /> {property.size}
          </span>
          <span className="flex items-center gap-1.5">
            <Landmark className="h-4 w-4" aria-hidden="true" /> {property.category}
          </span>
        </div>
      </div>
    </Link>
  )
}
