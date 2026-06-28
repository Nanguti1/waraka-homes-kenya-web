"use client"

import { useState } from "react"
import { Check, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: POST to your Laravel API, e.g.
    // await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/inquiries`, { method: "POST", body: ... })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border/60 bg-card p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Check className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-xl font-semibold">Message received</h3>
        <p className="mt-2 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
          Thank you for reaching out. One of our advisors will be in touch within 24 hours.
        </p>
        <Button variant="outline" className="mt-6 rounded-full" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" name="firstName" placeholder="Jane" required />
        <Field label="Last name" name="lastName" placeholder="Doe" required />
        <Field label="Email" name="email" type="email" placeholder="jane@email.com" required />
        <Field label="Phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
      </div>

      <div className="mt-5">
        <label htmlFor="interest" className="mb-2 block text-sm font-medium">
          I&apos;m interested in
        </label>
        <select
          id="interest"
          name="interest"
          className="w-full rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm outline-none focus:border-primary"
        >
          <option className="bg-card">Buying a residence</option>
          <option className="bg-card">Renting a residence</option>
          <option className="bg-card">Selling my property</option>
          <option className="bg-card">General inquiry</option>
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about what you're looking for…"
          className="w-full resize-none rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
        />
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full rounded-full sm:w-auto">
        Send message <Send className="ml-1 h-4 w-4" />
      </Button>
    </form>
  )
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
      />
    </div>
  )
}
