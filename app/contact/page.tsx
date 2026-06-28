import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: "Contact — Aether Estate",
  description: "Get in touch with Aether Estate to book a viewing or speak with a luxury real estate advisor.",
}

const details = [
  { icon: Phone, label: "Phone", value: "+1 (415) 555-0100", href: "tel:+14155550100" },
  { icon: Mail, label: "Email", value: "hello@aether.estate", href: "mailto:hello@aether.estate" },
  { icon: MapPin, label: "Office", value: "One Market St, San Francisco, CA" },
  { icon: Clock, label: "Hours", value: "Mon–Sat, 9:00 – 19:00" },
]

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-widest text-primary">Get in touch</span>
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Let&apos;s start a conversation
        </h1>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          Whether you&apos;re buying, selling, or simply curious, our advisors are ready to help you navigate the
          extraordinary.
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
