import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { company } from "@/lib/properties"

export const metadata = {
  title: "Contact — Waraka Homes Kenya",
  description: "Reach Waraka Homes Kenya to book a free site visit or enquire about land plots in Kenya.",
}

const details = [
  { icon: Phone, label: "Phone", value: company.phones[0], href: `tel:${company.phones[0].replace(/\s/g, "")}` },
  { icon: Phone, label: "Phone", value: company.phones[1], href: `tel:${company.phones[1].replace(/\s/g, "")}` },
  { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
  { icon: MapPin, label: "Office", value: company.address },
  { icon: Clock, label: "Hours", value: company.hours },
]

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-widest text-primary">Get in touch</span>
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Let&apos;s talk about your next plot
        </h1>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          Whether you&apos;re planning to build, invest, or secure a family home, we&apos;ll help you find a genuine plot with transparent legal support.
        </p>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {details.map((d) => {
              const content = (
                <div className="flex items-start gap-4 rounded-xl border border-border/60 bg-card/40 p-5 transition-colors hover:border-primary/40">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <d.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{d.label}</p>
                    <p className="mt-1 font-medium">{d.value}</p>
                  </div>
                </div>
              )
              return d.href ? (
                <a key={d.label} href={d.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={d.label}>{content}</div>
              )
            })}
          </div>
        </div>

        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
