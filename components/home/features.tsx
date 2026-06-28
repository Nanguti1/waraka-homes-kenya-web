import { Landmark, ShieldCheck, MapPin, Sparkles } from "lucide-react"

const features = [
  {
    icon: Landmark,
    title: "Affordable, genuine plots",
    description: "We specialize in compliant residential and commercial land in Nairobi, Kiambu, and Machakos.",
  },
  {
    icon: ShieldCheck,
    title: "Freehold title guarantee",
    description: "Every plot comes with an individually ready freehold title deed, transferred safely within 14 working days.",
  },
  {
    icon: MapPin,
    title: "Guided site visits",
    description: "Free weekly visits are organized directly from our Kamakis office so you can inspect plots with confidence.",
  },
  {
    icon: Sparkles,
    title: "Transparent buying process",
    description: "Buy directly, build immediately, and enjoy a clear pathway from selection to ownership.",
  },
]

export function Features() {
  return (
    <section className="border-y border-border/60 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">Why Waraka Homes</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            A simpler way to own land in Kenya
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            We combine local expertise, clear legal support, and practical guidance so your land purchase feels secure from the first visit.
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
