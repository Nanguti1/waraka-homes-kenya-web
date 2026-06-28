import Link from "next/link"
import { Hexagon } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Hexagon className="h-6 w-6 text-primary" aria-hidden="true" />
              <span className="font-mono text-lg font-semibold tracking-tight">AETHER</span>
            </Link>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              Architecturally significant residences for those who live ahead of the curve.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Explore</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><Link href="/listings" className="transition-colors hover:text-primary">All Listings</Link></li>
              <li><Link href="/about" className="transition-colors hover:text-primary">Our Agents</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-primary">Book a Viewing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><span className="cursor-default">Careers</span></li>
              <li><span className="cursor-default">Press</span></li>
              <li><span className="cursor-default">Privacy</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>hello@aether.estate</li>
              <li>+1 (415) 555-0100</li>
              <li>One Market St, San Francisco</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Aether Estate. All rights reserved.</p>
          <p className="font-mono text-xs text-muted-foreground">Designed for the future of living.</p>
        </div>
      </div>
    </footer>
  )
}
