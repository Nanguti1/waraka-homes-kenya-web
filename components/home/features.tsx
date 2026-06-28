import { Cpu, ShieldCheck, Globe2, Sparkles } from "lucide-react"

const features = [
  {
    icon: Cpu,
    title: "Intelligent matching",
    description: "Our platform learns your taste and surfaces residences engineered around how you actually live.",
  },
  {
    icon: ShieldCheck,
    title: "Discreet representation",
    description: "Private, off-market access with white-glove negotiation and ironclad confidentiality.",
  },
  {
    icon: Globe2,
    title: "Global reach",
    description: "A connected network spanning 18 markets, from coastal villas to metropolitan sky homes.",
  },
  {
    icon: Sparkles,
    title: "Future-ready homes",
    description: "Every listing is vetted for smart systems, sustainability, and architectural significance.",
  },
]

export function Features() {
  return (
    <section className="border-y border-border/60 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">Why Aether</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            A different way to acquire a home
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            We pair human expertise with technology to make buying the extraordinary feel effortless.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-border/60 bg-background/40 p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feature.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-medium">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
