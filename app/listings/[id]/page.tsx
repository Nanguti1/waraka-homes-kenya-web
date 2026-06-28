import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Check, Mail, MapPin, Phone, Ruler, Landmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PropertyGallery } from "@/components/property-gallery"
import { getAgentById, getProperties, getPropertyById, formatPrice, company } from "@/lib/properties"

export function generateStaticParams() {
  return getProperties().map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const property = getPropertyById(id)
  if (!property) return { title: "Property not found — Waraka Homes Kenya" }
  return {
    title: `${property.title} — Waraka Homes Kenya`,
    description: property.description,
  }
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const property = getPropertyById(id)
  if (!property) notFound()

  const agent = getAgentById(property.agentId)

  const specs = [
    { icon: Ruler, label: "Size", value: property.size },
    { icon: Landmark, label: "Category", value: property.category },
    { icon: MapPin, label: "County", value: property.city },
    { icon: Calendar, label: "Title promise", value: "14 working days" },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/listings"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" /> Back to listings
      </Link>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {property.status}
            </span>
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              {property.type}
            </span>
          </div>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{property.title}</h1>
          <p className="mt-2 flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {property.location}, {property.city}
          </p>
        </div>
        <p className="font-mono text-3xl font-semibold text-primary">
          {formatPrice(property.price, property.status)}
        </p>
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <PropertyGallery images={property.gallery} title={property.title} />

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {specs.map((spec) => (
              <div key={spec.label} className="rounded-xl border border-border/60 bg-card/40 p-4">
                <spec.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <p className="mt-3 text-lg font-semibold">{spec.value}</p>
                <p className="text-xs text-muted-foreground">{spec.label}</p>
              </div>
            ))}
          </div>

          <section className="mt-10">
            <h2 className="text-xl font-semibold">About this plot</h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{property.description}</p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold">Highlights</h2>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {property.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Agent / contact sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24 rounded-2xl border border-border/60 bg-card p-6">
            {agent && (
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border border-border/60">
                  <Image src={agent.image || "/placeholder.svg"} alt={agent.name} fill sizes="64px" className="object-cover" />
                </div>
                <div>
                  <p className="font-medium">{agent.name}</p>
                  <p className="text-sm text-muted-foreground">{agent.role}</p>
                </div>
              </div>
            )}

            <div className="mt-6 space-y-3">
              <Button asChild className="w-full rounded-full">
                <Link href="/contact">
                  <Calendar className="mr-1 h-4 w-4" /> Book a site visit
                </Link>
              </Button>
              {agent && (
                <>
                  <Button asChild variant="outline" className="w-full rounded-full">
                    <a href={`tel:${agent.phone.replace(/\s/g, "")}`}>
                      <Phone className="mr-1 h-4 w-4" /> {agent.phone}
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full rounded-full">
                    <a href={`mailto:${agent.email}`}>
                      <Mail className="mr-1 h-4 w-4" /> Email agent
                    </a>
                  </Button>
                </>
              )}
            </div>

            <div className="mt-6 rounded-xl border border-border/60 bg-background/40 p-4 text-sm text-muted-foreground">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">Need help?</p>
              <p className="mt-2">Call {company.phones[0]} or email {company.email}</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
