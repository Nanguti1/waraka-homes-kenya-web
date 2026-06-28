"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function PropertyGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0)

  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border/60">
        <Image
          src={images[active] || "/placeholder.svg"}
          alt={`${title} — view ${active + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover"
        />
      </div>
      <div className="mt-4 grid grid-cols-4 gap-3">
        {images.map((img, i) => (
          <button
            key={img + i}
            onClick={() => setActive(i)}
            className={cn(
              "relative aspect-[4/3] overflow-hidden rounded-lg border transition-all",
              active === i ? "border-primary ring-2 ring-primary/40" : "border-border/60 opacity-70 hover:opacity-100",
            )}
            aria-label={`View image ${i + 1}`}
            aria-pressed={active === i}
          >
            <Image src={img || "/placeholder.svg"} alt="" fill sizes="20vw" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
