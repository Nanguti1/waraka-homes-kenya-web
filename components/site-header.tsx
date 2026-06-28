"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Hexagon, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/listings", label: "Listings" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Hexagon className="h-6 w-6 text-primary" aria-hidden="true" />
          <span className="font-mono text-lg font-semibold tracking-tight">AETHER</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  active ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="rounded-full">
            <Link href="/contact">Book a Viewing</Link>
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {navItems.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2 text-base font-medium transition-colors",
                    active ? "bg-secondary text-primary" : "text-muted-foreground hover:bg-secondary/60",
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
            <Button asChild className="mt-2 rounded-full">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Book a Viewing
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
