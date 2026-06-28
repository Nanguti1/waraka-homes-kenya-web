import Image from "next/image"
import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { agents } from "@/lib/properties"

export const metadata = {
  title: "About — Aether Estate",
  description: "Meet the advisors behind Aether Estate and learn about our approach to futuristic luxury living.",
}

const values = [
  { title: "Design-first", description: "We champion architecture that pushes boundaries and stands the test of time." },
  { title: "Radically discreet", description: "Privacy and trust are the foundation of every relationship we build." },
  { title: "Technology-led", description: "Smart tools and data give our clients an unfair advantage in any market." },
]

export default function AboutPage() {
  return (
    <div>
      {/* Intro */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <span className="font-mono text-xs uppercase tracking-widest text-primary">Who we are</span>
        <h1 className="mt-3 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          We represent the homes of tomorrow, today.
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Aether Estate was founded on a simple belief: that where you live should reflect where the world is going.
          We partner with visionary architects, developers, and owners to bring the most forward-thinking residences
          to a discerning global clientele.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="rounded-xl border border-border/60 bg-card/40 p-6">
              <h2 className="font-medium text-primary">{value.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Agents */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">The team</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Meet our advisors</h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent) => (
              <article key={agent.id} className="overflow-hidden rounded-2xl border border-border/60 bg-background/40">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={agent.image || "/placeholder.svg"}
                    alt={agent.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium">{agent.name}</h3>
                  <p className="text-sm text-primary">{agent.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{agent.bio}</p>

                  <div className="mt-4 flex gap-4 border-t border-border/60 pt-4 text-sm">
                    <span className="text-muted-foreground">
                      <span className="font-semibold text-foreground">{agent.listings}</span> listings
                    </span>
                    <span className="text-muted-foreground">
                      <span className="font-semibold text-foreground">{agent.sales}</span> sold
                    </span>
                  </div>

                  <div className="mt-5 flex gap-2">
                    <Button asChild size="sm" variant="outline" className="rounded-full">
                      <a href={`tel:${agent.phone.replace(/\s/g, "")}`} aria-label={`Call ${agent.name}`}>
                        <Phone className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="rounded-full">
                      <a href={`mailto:${agent.email}`} aria-label={`Email ${agent.name}`}>
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight">
          Let&apos;s find your next address.
        </h2>
        <Button asChild size="lg" className="mt-8 rounded-full">
          <Link href="/contact">Get in touch</Link>
        </Button>
      </section>
    </div>
  )
}
