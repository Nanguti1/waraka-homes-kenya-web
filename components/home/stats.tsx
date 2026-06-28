const stats = [
  { value: "5", label: "Active projects" },
  { value: "14 days", label: "Title processing" },
  { value: "Free", label: "Weekly site visits" },
  { value: "3", label: "Key counties" },
]

export function Stats() {
  return (
    <section className="border-y border-border/60 bg-card/30">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="px-2 py-10 text-center md:py-14">
            <p className="font-mono text-3xl font-semibold text-primary sm:text-4xl">{stat.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
