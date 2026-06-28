// Mock data layer. Replace these functions with calls to your Laravel API later.
// e.g. fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/properties`)

export const company = {
  name: "Waraka Homes Kenya",
  slogan: "Dreams are valid",
  tagline: "Pata Ploti, Pata Title",
  yearFounded: 2023,
  address: "2nd Floor, Naivas Building, along Eastern Bypass-Kamakis, Ruiru, Kenya",
  phones: ["+254 795 999 444", "+254 743 595 959"],
  email: "info@waraka.homes",
  hours: "Mon–Fri: 7:30 AM – 5:00 PM | Sat: 8:00 AM – 2:00 PM | Sun: Closed",
  facebook: "https://www.facebook.com/warakahomeskenya/",
  buyRentKenya: "https://www.buyrentkenya.com/estate-agent/waraka-homes-kenya",
}

export type Property = {
  id: string
  title: string
  location: string
  city: string
  price: number
  beds: number
  baths: number
  area: number // sqft
  size: string
  category: string
  type: "Residential Land" | "Speculative Land" | "Speculative/Residential Land"
  status: "For Sale" | "For Rent"
  featured: boolean
  image: string
  gallery: string[]
  description: string
  features: string[]
  yearBuilt: number
  agentId: string
}

export type Agent = {
  id: string
  name: string
  role: string
  phone: string
  email: string
  image: string
  bio: string
  listings: number
  sales: string
}

export const agents: Agent[] = [
  {
    id: "a1",
    name: "Asha Mwangi",
    role: "Sales & Site Visits",
    phone: "+254 795 999 444",
    email: "info@waraka.homes",
    image: "/agents/a1.png",
    bio: "Asha helps buyers choose the right plot and organizes free guided site visits straight from our Kamakis office.",
    listings: 5,
    sales: "Fast-moving",
  },
  {
    id: "a2",
    name: "Daniel Njoroge",
    role: "Legal & Documentation",
    phone: "+254 743 595 959",
    email: "info@waraka.homes",
    image: "/agents/a2.png",
    bio: "Daniel oversees title verification and transfer support, keeping every transaction transparent and compliant.",
    listings: 5,
    sales: "Title-ready",
  },
  {
    id: "a3",
    name: "Njeri Kamau",
    role: "Customer Care",
    phone: "+254 795 999 444",
    email: "info@waraka.homes",
    image: "/agents/a3.png",
    bio: "Njeri helps clients compare investment opportunities and makes the buying process clear from first inquiry to handover.",
    listings: 5,
    sales: "Trusted",
  },
]

export const properties: Property[] = [
  {
    id: "juja-farm-phase-9",
    title: "Juja Farm Phase 9",
    location: "Juja Farm",
    city: "Kiambu County",
    price: 1199000,
    beds: 0,
    baths: 0,
    area: 5000,
    size: "50 x 100 ft",
    category: "Residential Land",
    type: "Residential Land",
    status: "For Sale",
    featured: true,
    image: "/properties/p1.png",
    gallery: ["/properties/p1.png", "/properties/p5.png", "/properties/p2.png", "/properties/p3.png"],
    description:
      "A rapidly developing residential hub just 150 meters from Athi town, ideal for buyers seeking a ready-to-build plot with easy access and strong neighborhood growth.",
    features: ["Near Athi Town", "Ready-to-build", "Accessible access roads", "Water & Electricity nearby", "Secure neighborhood", "Rapidly developing residential hub"],
    yearBuilt: 2023,
    agentId: "a1",
  },
  {
    id: "joska-mutalia-plots",
    title: "Joska Mutalia Plots",
    location: "Joska",
    city: "Machakos County",
    price: 950000,
    beds: 0,
    baths: 0,
    area: 5000,
    size: "50 x 100 ft",
    category: "Residential Land",
    type: "Residential Land",
    status: "For Sale",
    featured: true,
    image: "/properties/p2.png",
    gallery: ["/properties/p2.png", "/properties/p6.png", "/properties/p5.png", "/properties/p1.png"],
    description:
      "Set in a gated environment along Kangundo Road, this plot is a strong option for long-term speculation or immediate settlement with freehold title support.",
    features: ["Gated setup", "Rapidly developing area", "Freehold Title Deed", "Ideal for long-term speculation or immediate settlement"],
    yearBuilt: 2023,
    agentId: "a2",
  },
  {
    id: "joska-city-sunshine",
    title: "Joska City Sunshine",
    location: "Joska",
    city: "Machakos County",
    price: 645000,
    beds: 0,
    baths: 0,
    area: 5000,
    size: "50 x 100 ft",
    category: "Speculative/Residential Land",
    type: "Speculative/Residential Land",
    status: "For Sale",
    featured: true,
    image: "/properties/p3.png",
    gallery: ["/properties/p3.png", "/properties/p5.png", "/properties/p1.png", "/properties/p6.png"],
    description:
      "An affordable entry point into a high-potential growth corridor, with a beaconed layout and a 14-day title processing promise for quick ownership.",
    features: ["Budget-friendly entry", "High appreciation value", "Beaconed layout", "14-day title processing"],
    yearBuilt: 2023,
    agentId: "a3",
  },
  {
    id: "stawi-gardens-koma",
    title: "Stawi Gardens Koma",
    location: "Koma",
    city: "Machakos County",
    price: 450000,
    beds: 0,
    baths: 0,
    area: 5000,
    size: "50 x 100 ft",
    category: "Residential Land",
    type: "Residential Land",
    status: "For Sale",
    featured: false,
    image: "/properties/p4.png",
    gallery: ["/properties/p4.png", "/properties/p2.png", "/properties/p5.png", "/properties/p1.png"],
    description:
      "Located off Kangundo Road, this level land offers a practical start for homeowners and investors looking for ready development potential.",
    features: ["Prime location off Kangundo Road", "Level land ready for development", "Water table accessible", "Gated property community vibe"],
    yearBuilt: 2023,
    agentId: "a1",
  },
  {
    id: "stawi-gardens-nguluni",
    title: "Stawi Gardens Nguluni",
    location: "Nguluni",
    city: "Machakos County",
    price: 395000,
    beds: 0,
    baths: 0,
    area: 5000,
    size: "50 x 100 ft",
    category: "Speculative Land",
    type: "Speculative Land",
    status: "For Sale",
    featured: false,
    image: "/properties/p6.png",
    gallery: ["/properties/p6.png", "/properties/p5.png", "/properties/p2.png", "/properties/p3.png"],
    description:
      "A cost-effective investment parcel with a strong portfolio-growth case, excellent neighborhood security, and ready title transfer support.",
    features: ["Affordable pricing entry point", "Perfect for long term portfolio growth", "Ready title transfer", "Excellent neighborhood security"],
    yearBuilt: 2023,
    agentId: "a2",
  },
]

export function getProperties() {
  return properties
}

export function getFeaturedProperties() {
  return properties.filter((p) => p.featured)
}

export function getPropertyById(id: string) {
  return properties.find((p) => p.id === id)
}

export function getAgentById(id: string) {
  return agents.find((a) => a.id === id)
}

export function formatPrice(price: number, status?: Property["status"]) {
  const formatted = new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(price)
  return status === "For Rent" ? `${formatted}/mo` : formatted
}
