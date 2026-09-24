export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  concept: string;
  materials: string[];
  dimensions?: string;
  year?: string;
  location?: string;
  image: string;
  gallery: string[];
}

export interface Service {
  id: string;
  title: string;
  iconName: 'Home' | 'Building2' | 'Sparkles' | 'Armchair';
  description: string;
  longDescription: string;
  deliverables: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  attribution: string;
  role: string;
  location: string;
  projectType: string;
}

export interface StatItem {
  value: string;
  numericVal: number;
  suffix: string;
  label: string;
  detail: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  timeline: string;
}

export const HERO_DATA = {
  eyebrow: "SPACES DESIGNED WITH INTENTION",
  headingLine1: "Elevate Your Space.",
  headingLine2: "Live in Timeless Luxury.",
  supportingText: "Thoughtfully crafted interiors that bring together architectural precision, exceptional materials, and the art of comfortable living.",
  primaryCta: "Explore Our Projects",
  secondaryCta: "Discover Our Studio",
  microCopy: "Residential · Commercial · Bespoke Interiors",
  image: "/src/assets/images/hero_luxury_living_1790149626323.jpg"
};

export const SERVICES_DATA: Service[] = [
  {
    id: "residential",
    title: "Residential Interiors",
    iconName: "Home",
    description: "Personalized homes designed around your lifestyle, with thoughtful layouts, refined materials, and enduring comfort.",
    longDescription: "Complete architectural interior planning for luxury residences, private villas, and penthouses. We balance spatial harmony with bespoke joinery, tactile surfaces, and functional family living.",
    deliverables: ["Custom Millwork & Spatial Layouts", "Comprehensive Finishes Palette", "Kitchen & Bath Architectural Design", "Turnkey Procurement & Installation"],
    image: "/src/assets/images/service_residential_1790149708447.jpg"
  },
  {
    id: "commercial",
    title: "Commercial Spaces",
    iconName: "Building2",
    description: "Purposeful workplaces and commercial environments that express your brand and enhance everyday experiences.",
    longDescription: "From boutique corporate headquarters to high-end hospitality venues, we craft environments that elevate company culture, foster connection, and leave an indelible impression on clients.",
    deliverables: ["Workplace Strategy & Flow", "Executive Suites & Client Lounges", "Brand-Integrated Architectural Millwork", "Acoustic Engineering & Lighting"],
    image: "/src/assets/images/service_commercial_1790149729787.jpg"
  },
  {
    id: "lighting",
    title: "Architectural Lighting",
    iconName: "Sparkles",
    description: "Layered lighting concepts that reveal architectural details and create the perfect atmosphere throughout the day.",
    longDescription: "Lighting is the soul of spatial design. We engineer custom lighting controls, concealed architectural coves, and sculptural focal fixtures to sculpt volume, shadow, and evening serenity.",
    deliverables: ["Layered Lux Calculations & CCT Tuning", "Concealed Architectural Cove Detailing", "Custom Sculptural Fixture Specification", "Intelligent Smart Lighting Automation"],
    image: "/src/assets/images/service_lighting_1790149742821.jpg"
  },
  {
    id: "furniture",
    title: "Furniture & Styling",
    iconName: "Armchair",
    description: "Carefully selected furniture, finishes, textures, and accessories that bring a cohesive design vision to life.",
    longDescription: "Curated procurement sourcing from Europe's most revered ateliers alongside bespoke upholstery crafted specifically to your dimensions. Each object is selected with sculptural rigor.",
    deliverables: ["Bespoke Upholstery & Case Goods", "Rare Vintage & Atelier Sourcing", "Tactile Drapery & Custom Rug Design", "Curated Art & Object Curation"],
    image: "/src/assets/images/service_furniture_1790149773596.jpg"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "oak-residence",
    title: "The Oak Residence",
    category: "RESIDENTIAL",
    description: "A warm contemporary home defined by natural oak, sculptural furniture, and carefully layered light.",
    concept: "Conceived as a sanctuary of quiet luxury, this residence balances monolithic oiled oak architectural paneling with deep charcoal accents. The spatial sequence prioritizes uninterrupted sightlines to the surrounding gardens while fostering intimate gathering nooks with textured boucle and honed limestone.",
    materials: ["Fumed European White Oak", "Honed Roman Travertine", "Charcoal Bouclé Textiles", "Brushed Champagne Brass"],
    dimensions: "6,800 sq ft",
    year: "2025",
    location: "Pacific Palisades, CA",
    image: "/src/assets/images/project_oak_residence_1790149638063.jpg",
    gallery: [
      "/src/assets/images/project_oak_residence_1790149638063.jpg",
      "/src/assets/images/hero_luxury_living_1790149626323.jpg",
      "/src/assets/images/studio_philosophy_detail_1790149676860.jpg"
    ]
  },
  {
    id: "atelier-kitchen",
    title: "The Atelier Kitchen",
    category: "KITCHEN DESIGN",
    description: "A refined culinary space where minimal forms meet expressive stone and exceptional craftsmanship.",
    concept: "Designed for both effortless culinary precision and relaxed entertaining. A monolithic 14-foot waterfall island in deep veined marble anchors the room, framed by concealed fluted cabinetry and integrated bronze linear glow channels.",
    materials: ["Nero Marquina & Graphite Quartzite", "Dark Ebonized Oak Veneer", "Custom Patinated Bronze Hardware", "Smoked Bronze Glass"],
    dimensions: "950 sq ft",
    year: "2025",
    location: "Tribeca, New York",
    image: "/src/assets/images/project_atelier_kitchen_1790149651368.jpg",
    gallery: [
      "/src/assets/images/project_atelier_kitchen_1790149651368.jpg",
      "/src/assets/images/cta_dining_interior_1790149692369.jpg",
      "/src/assets/images/studio_philosophy_detail_1790149676860.jpg"
    ]
  },
  {
    id: "meridian-suite",
    title: "The Meridian Suite",
    category: "BEDROOM DESIGN",
    description: "A serene private retreat combining tactile materials, architectural simplicity, and soft atmospheric lighting.",
    concept: "The master suite explores tactile serenity. Fluted walnut wall paneling conceals flush wardrobe doors, while indirect 2400K architectural coves gently wash textured Belgian linen wall coverings. Custom low-profile bed with integrated stone bedside pedestals.",
    materials: ["Hand-Finished American Walnut", "Belgian Natural Flax Linen", "Brushed Bronze Joinery", "Suede & Silk Wool Rugs"],
    dimensions: "1,200 sq ft",
    year: "2024",
    location: "Bel Air, CA",
    image: "/src/assets/images/project_meridian_suite_1790149665253.jpg",
    gallery: [
      "/src/assets/images/project_meridian_suite_1790149665253.jpg",
      "/src/assets/images/service_residential_1790149708447.jpg",
      "/src/assets/images/service_lighting_1790149742821.jpg"
    ]
  },
  // Expanded collection projects for "View All Projects"
  {
    id: "horizon-penthouse",
    title: "The Horizon Penthouse",
    category: "RESIDENTIAL",
    description: "A sky-high panoramic residence celebrating sculptural silhouettes, warm metallic tones, and expansive light.",
    concept: "Perched 42 stories above the city, the penthouse is defined by continuous curved plaster walls that mirror natural light patterns. Custom Italian seating pieces anchor conversational salons facing floor-to-ceiling glass.",
    materials: ["Venetian Stucco", "Brushed Champagne Brass", "Cast Bronze", "Silk Velvet"],
    dimensions: "5,400 sq ft",
    year: "2024",
    location: "Miami Beach, FL",
    image: "/src/assets/images/service_residential_1790149708447.jpg",
    gallery: [
      "/src/assets/images/service_residential_1790149708447.jpg",
      "/src/assets/images/hero_luxury_living_1790149626323.jpg"
    ]
  },
  {
    id: "veritas-headquarters",
    title: "Veritas Executive Suites",
    category: "COMMERCIAL",
    description: "An understated boutique workspace designed for a private investment firm, pairing acoustic refinement with executive privacy.",
    concept: "Subtle architectural luxury replaces corporate convention. Acoustic fluted wood walls, custom boardroom tables in monolithic smoked oak, and warm residential-grade lighting establish an atmosphere of calm discretion.",
    materials: ["Smoked European Oak", "Acoustic Wool Felt", "Dark Patina Steel", "Saddle Leather"],
    dimensions: "8,500 sq ft",
    year: "2024",
    location: "Chicago, IL",
    image: "/src/assets/images/service_commercial_1790149729787.jpg",
    gallery: [
      "/src/assets/images/service_commercial_1790149729787.jpg",
      "/src/assets/images/project_oak_residence_1790149638063.jpg"
    ]
  },
  {
    id: "kyoto-gallery-lounge",
    title: "The Kyoto Gallery Lounge",
    category: "FURNITURE & STYLING",
    description: "A private collector's lounge celebrating tactile Japanese wabi-sabi aesthetics and curated Nordic modernism.",
    concept: "A dialogue between raw and refined. Low-slung custom seating in unbleached bouclé sits upon hand-knotted wool, accompanied by raw-edge travertine tables and rare vintage lighting.",
    materials: ["Raw Travertine Plinths", "Natural Bouclé", "Charred Hinoki Cypress", "Washi Paper Lighting"],
    dimensions: "1,800 sq ft",
    year: "2023",
    location: "San Francisco, CA",
    image: "/src/assets/images/service_furniture_1790149773596.jpg",
    gallery: [
      "/src/assets/images/service_furniture_1790149773596.jpg",
      "/src/assets/images/service_lighting_1790149742821.jpg"
    ]
  }
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    number: "01",
    title: "Thoughtful Design",
    description: "Every decision begins with the people who will experience the space, balancing ergonomics, ritual, and daily joy."
  },
  {
    number: "02",
    title: "Material Integrity",
    description: "We select materials for their honesty, tactile beauty, natural patina, and enduring physical resilience."
  },
  {
    number: "03",
    title: "Enduring Craft",
    description: "We value the precise joinery, shadow gaps, and finishing details that make a space feel considered and complete."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "We begin with a conversation about your lifestyle, goals, preferences, and the possibilities of your space.",
    timeline: "Weeks 1–2"
  },
  {
    number: "02",
    title: "Concept",
    description: "We develop the creative direction, spatial approach, materials palette, and initial design vision.",
    timeline: "Weeks 3–5"
  },
  {
    number: "03",
    title: "Design",
    description: "We refine the details through layouts, finishes, lighting concepts, furniture selections, and design documentation.",
    timeline: "Weeks 6–10"
  },
  {
    number: "04",
    title: "Deliver",
    description: "We coordinate the final stages with care, helping bring the approved design to life.",
    timeline: "Implementation"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    quote: "The entire process felt thoughtful and personal. Every detail came together beautifully, and our home finally feels like a true reflection of us.",
    attribution: "Residential Design Client",
    role: "Private Villa Owner",
    location: "Pacific Palisades",
    projectType: "Full Residence Renovation"
  },
  {
    id: "test-2",
    quote: "The team understood how our workspace needed to function while giving it a distinctive and welcoming identity.",
    attribution: "Commercial Design Client",
    role: "Managing Director, Investment Firm",
    location: "Manhattan",
    projectType: "Flagship Office Suite"
  },
  {
    id: "test-3",
    quote: "What impressed us most was the attention to materials, lighting, and the little details that make such a meaningful difference.",
    attribution: "Interior Styling Client",
    role: "Private Collector",
    location: "Bel Air",
    projectType: "Penthouse Curation"
  }
];

export const STATS_DATA: StatItem[] = [
  {
    value: "200+",
    numericVal: 200,
    suffix: "+",
    label: "Design Concepts & Spaces",
    detail: "Curated residential and commercial spaces completed across 8 metropolitan cities."
  },
  {
    value: "15+",
    numericVal: 15,
    suffix: "+",
    label: "Years Combined Experience",
    detail: "Decades of architectural expertise, master craftsmanship, and bespoke design direction."
  },
  {
    value: "98%",
    numericVal: 98,
    suffix: "%",
    label: "Illustrative Satisfaction Target",
    detail: "Unwavering commitment to client vision, precision documentation, and flawless finish."
  },
  {
    value: "4",
    numericVal: 4,
    suffix: "",
    label: "Core Design Specialties",
    detail: "Residential Architecture, Commercial Interiors, Lighting Scenography, and Custom Furniture."
  }
];

export const PROJECT_TYPES = [
  "Residential Interior Design",
  "Commercial Interior Design",
  "Kitchen Design",
  "Bedroom Design",
  "Lighting Design",
  "Furniture & Styling",
  "Full Property Renovation",
  "Other"
];

export const BUDGET_OPTIONS = [
  "Prefer to discuss",
  "Under $10,000",
  "$10,000–$25,000",
  "$25,000–$50,000",
  "$50,000–$100,000",
  "$100,000+"
];

export const CONSULTATION_METHODS = [
  "In-Person Studio Meeting",
  "On-Site Property Walkthrough",
  "Virtual Video Consultation",
  "Phone Call Discussion"
];
