import Link from "next/link"
import { Home } from "lucide-react"
import { company } from "@/lib/properties"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-6 w-6 text-primary" aria-hidden="true" />
              <span className="font-mono text-lg font-semibold tracking-tight">WARAKA</span>
            </Link>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              {company.slogan}. Affordable, genuine land with ready title deeds and guided site visits in Kenya.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Explore</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><Link href="/listings" className="transition-colors hover:text-primary">All Plots</Link></li>
              <li><Link href="/about" className="transition-colors hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-primary">Book a Site Visit</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><a href={company.facebook} target="_blank" rel="noreferrer" className="transition-colors hover:text-primary">Facebook</a></li>
              <li><a href={company.buyRentKenya} target="_blank" rel="noreferrer" className="transition-colors hover:text-primary">BuyRentKenya</a></li>
              <li><span className="cursor-default">Freehold Titles</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><a href={`mailto:${company.email}`} className="transition-colors hover:text-primary">{company.email}</a></li>
              <li><a href={`tel:${company.phones[0].replace(/\s/g, "")}`} className="font-semibold text-foreground transition-colors hover:text-primary">{company.phones[0]}</a></li>
              <li><a href={`tel:${company.phones[1].replace(/\s/g, "")}`} className="font-semibold text-foreground transition-colors hover:text-primary">{company.phones[1]}</a></li>
              <li>{company.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="font-mono text-xs text-muted-foreground">{company.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
