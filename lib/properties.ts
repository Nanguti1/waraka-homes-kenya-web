// Mock data layer. Replace these functions with calls to your Laravel API later.
// e.g. fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/properties`)

export type Property = {
  id: string
  title: string
  location: string
  city: string
  price: number
  beds: number
  baths: number
  area: number // sqft
  type: "House" | "Penthouse" | "Villa" | "Apartment" | "Loft"
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
    name: "Elena Voss",
    role: "Principal Broker",
    phone: "+1 (415) 555-0148",
    email: "elena@aether.estate",
    image: "/agents/a1.png",
    bio: "Specializing in architecturally significant homes, Elena has closed over $1.2B in luxury transactions across coastal markets.",
    listings: 24,
    sales: "$1.2B+",
  },
  {
    id: "a2",
    name: "Marcus Chen",
    role: "Senior Advisor",
    phone: "+1 (415) 555-0192",
    email: "marcus@aether.estate",
    image: "/agents/a2.png",
    bio: "A data-driven negotiator focused on penthouse and new-development sales in major metropolitan skylines.",
    listings: 18,
    sales: "$640M+",
  },
  {
    id: "a3",
    name: "Sofia Reyes",
    role: "Luxury Specialist",
    phone: "+1 (415) 555-0173",
    email: "sofia@aether.estate",
    image: "/agents/a3.png",
    bio: "Sofia pairs design sensibility with sharp market insight to match discerning buyers with one-of-a-kind estates.",
    listings: 31,
    sales: "$890M+",
  },
]

export const properties: Property[] = [
  {
    id: "horizon-glass-villa",
    title: "Horizon Glass Villa",
    location: "Bel Air Crest",
    city: "Los Angeles, CA",
    price: 12500000,
    beds: 5,
    baths: 6,
    area: 8400,
    type: "Villa",
    status: "For Sale",
    featured: true,
    image: "/properties/p1.png",
    gallery: ["/properties/p1.png", "/properties/p5.png", "/properties/p2.png", "/properties/p3.png"],
    description:
      "A statement of restraint and light, Horizon Glass Villa dissolves the boundary between interior and landscape. Floor-to-ceiling glass frames uninterrupted canyon views while cantilevered volumes float above an infinity-edge pool.",
    features: ["Infinity Pool", "Home Cinema", "Smart Home System", "Wine Cellar", "4-Car Garage", "Solar Array"],
    yearBuilt: 2023,
    agentId: "a1",
  },
  {
    id: "skyline-penthouse",
    title: "Skyline Penthouse 4201",
    location: "Financial District",
    city: "New York, NY",
    price: 8900000,
    beds: 3,
    baths: 4,
    area: 4200,
    type: "Penthouse",
    status: "For Sale",
    featured: true,
    image: "/properties/p2.png",
    gallery: ["/properties/p2.png", "/properties/p6.png", "/properties/p5.png", "/properties/p1.png"],
    description:
      "Perched on the 42nd floor, this corner penthouse delivers 270-degree skyline panoramas through silent floor-to-ceiling glazing. A private elevator opens directly into the gallery foyer.",
    features: ["Private Elevator", "Floor-to-Ceiling Glass", "Concierge", "Rooftop Terrace", "Gym Access"],
    yearBuilt: 2022,
    agentId: "a2",
  },
  {
    id: "forest-concrete-house",
    title: "Forest Concrete House",
    location: "Mill Valley",
    city: "Marin County, CA",
    price: 6400000,
    beds: 4,
    baths: 4,
    area: 5100,
    type: "House",
    status: "For Sale",
    featured: true,
    image: "/properties/p3.png",
    gallery: ["/properties/p3.png", "/properties/p5.png", "/properties/p1.png", "/properties/p6.png"],
    description:
      "Nestled into a redwood grove, this concrete-and-warm-oak residence balances brutalist geometry with organic softness. Expansive glazing invites the forest in from every room.",
    features: ["Radiant Floors", "Outdoor Kitchen", "Studio Annex", "EV Charging", "Skylights"],
    yearBuilt: 2021,
    agentId: "a3",
  },
  {
    id: "azure-beachfront",
    title: "Azure Beachfront Residence",
    location: "Paradise Cove",
    city: "Malibu, CA",
    price: 18750000,
    beds: 6,
    baths: 7,
    area: 9800,
    type: "Villa",
    status: "For Sale",
    featured: false,
    image: "/properties/p4.png",
    gallery: ["/properties/p4.png", "/properties/p2.png", "/properties/p5.png", "/properties/p1.png"],
    description:
      "Direct sand frontage with a glass facade that opens entirely to the Pacific. An infinity pool merges with the horizon as the sun sets over private beach access.",
    features: ["Private Beach", "Infinity Pool", "Guest House", "Spa & Sauna", "Boat Dock", "Smart Glass"],
    yearBuilt: 2024,
    agentId: "a1",
  },
  {
    id: "atrium-loft",
    title: "Atrium Sky Loft",
    location: "Arts District",
    city: "Los Angeles, CA",
    price: 3200000,
    beds: 2,
    baths: 2,
    area: 2600,
    type: "Loft",
    status: "For Rent",
    featured: false,
    image: "/properties/p6.png",
    gallery: ["/properties/p6.png", "/properties/p5.png", "/properties/p2.png", "/properties/p3.png"],
    description:
      "An industrial shell reimagined with smart glass, exposed steel, and a double-height atrium. Floods with city light by day and glows above the skyline by night.",
    features: ["Double-Height Ceilings", "Smart Glass", "Exposed Steel", "Rooftop Access", "Pet Friendly"],
    yearBuilt: 2020,
    agentId: "a2",
  },
  {
    id: "luminance-estate",
    title: "Luminance Estate",
    location: "Hillsborough",
    city: "San Francisco, CA",
    price: 9750000,
    beds: 5,
    baths: 5,
    area: 7200,
    type: "House",
    status: "For Sale",
    featured: false,
    image: "/properties/p5.png",
    gallery: ["/properties/p5.png", "/properties/p1.png", "/properties/p3.png", "/properties/p2.png"],
    description:
      "A double-height living gallery anchors this light-filled estate, where curated proportions and warm minimalism create a sense of calm grandeur throughout.",
    features: ["Gallery Living Room", "Chef's Kitchen", "Library", "Heated Pool", "Wellness Suite"],
    yearBuilt: 2022,
    agentId: "a3",
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
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price)
  return status === "For Rent" ? `${formatted}/mo` : formatted
}
