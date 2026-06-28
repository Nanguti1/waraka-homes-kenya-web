import { Hero } from "@/components/home/hero"
import { Stats } from "@/components/home/stats"
import { Featured } from "@/components/home/featured"
import { Features } from "@/components/home/features"
import { CTA } from "@/components/home/cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Featured />
      <Features />
      <CTA />
    </>
  )
}
