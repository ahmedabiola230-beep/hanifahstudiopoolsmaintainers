export const site = {
  name: "Cerulea Pools",
  shortName: "Cerulea",
  tagline: "Pool design, build and care, done right the first time",
  phone: "(512) 555 0192",
  phoneHref: "tel:+15125550192",
  email: "hello@ceruleapools.com",
  emailHref: "mailto:hello@ceruleapools.com",
  address: "4201 W Parmer Ln, Austin, TX 78727",
  hours: "Monday to Friday, 8am to 6pm",
  hoursShort: "Mon to Fri 8am to 6pm",
  serviceArea: "Austin and surrounding areas",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const socials = [
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "X", href: "https://x.com", icon: "twitter" },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
  { label: "WhatsApp", href: "https://wa.me/15125550192", icon: "message" },
];

export const heroStats = [
  { value: "12+", label: "Years in the trade" },
  { value: "850+", label: "Pools built and serviced" },
  { value: "98%", label: "Client satisfaction" },
  { value: "100%", label: "Certified technicians" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  image?: string;
};

export const services: Service[] = [
  {
    slug: "design-construction",
    title: "Pool Design & Construction",
    short:
      "Custom pools designed around your yard, your home, and the way you actually live. One crew handles everything from the first sketch to the first swim.",
    description:
      "Every build starts with a walk through your yard and an honest conversation about budget. From there our designer draws your pool in 3D so you can see exactly what you are getting before we break ground. Our own crew handles permits, excavation, steel, plumbing, tile, and finish, so nothing gets lost between contractors. Most builds run nine to fourteen weeks and you get photo updates every Friday.",
    bullets: [
      "3D design and fixed itemized quotes",
      "Permits, engineering, and HOA paperwork handled for you",
      "Gunite, fiberglass, and plunge pool builds",
      "Weekly photo updates during construction",
    ],
    image: "/images/service-construction.webp",
  },
  {
    slug: "maintenance",
    title: "Pool Maintenance Plans",
    short:
      "Clean water, healthy equipment, and a pool that is always ready. Weekly visits from the same tech who learns your pool and treats it like their own.",
    description:
      "A pool should be the easy part of owning a home. Our weekly plans cover cleaning, chemistry, filter care, and a full visual check of your equipment at every visit. You get a photo report after each service so you can see exactly what we saw, and if something looks off we call you before it becomes a repair bill.",
    bullets: [
      "Weekly cleaning, skimming, and vacuuming",
      "Water testing and balancing at every visit",
      "Filter, pump, and skimmer care",
      "Photo report emailed after each service",
    ],
    image: "/images/service-maintenance.webp",
  },
  {
    slug: "water-treatment",
    title: "Water Treatment & Chemistry",
    short:
      "Clear, soft, safe water is a science. We test, balance, and fine tune every pool we care for so it always feels as good as it looks.",
    description:
      "Cloudy water, itchy skin, and that chlorine smell are all signs of water that is out of balance, not water that is dirty. Our techs test for everything from pH and alkalinity to cyanuric acid and phosphates, then correct the chemistry at the source. We also handle green to clean recoveries, phosphate removal, and mineral systems for families who want a softer feel.",
    bullets: [
      "Full panel testing, not just test strips",
      "Green to clean recoveries",
      "Saltwater and mineral system service",
      "Phosphate removal and algae prevention",
    ],
    image: "/images/service-water.webp",
  },
  {
    slug: "renovation-upgrades",
    title: "Renovation & Upgrades",
    short:
      "Old finish, tired tile, outdated gear? We remodel pools of every age, from fresh plaster to smart automation you control from your phone.",
    description:
      "If the shell of your pool is sound, we can usually make it feel brand new for a fraction of a rebuild. Popular projects include resurfacing with modern pebble finishes, new waterline tile, LED lighting conversions, energy efficient variable speed pumps, and full automation that lets you run the whole pool from an app. We will tell you honestly when a remodel makes sense and when it does not.",
    bullets: [
      "Resurfacing, tile, and coping replacement",
      "LED lighting and fire feature upgrades",
      "Variable speed pumps and heaters",
      "Smart automation and app control",
    ],
    image: "/images/service-renovation.webp",
  },
  {
    slug: "inspections-repairs",
    title: "Inspections & Repairs",
    short:
      "Buying a home with a pool, or hearing a sound you do not like? We find the real problem, explain it in plain English, and fix it once.",
    description:
      "Our inspection covers structure, plumbing, equipment, safety features, and surfaces, with a written report you can hand to a realtor or use to plan repairs. For leaks we use pressure testing and electronic detection so we are digging in the right place the first time. No scare tactics, no upselling, just the facts and a fair price to put things right.",
    bullets: [
      "Pre purchase pool inspections with written report",
      "Electronic leak detection and pressure testing",
      "Pump, filter, and heater repair",
      "Honest advice on repair versus replace",
    ],
  },
  {
    slug: "outdoor-features",
    title: "Spas & Outdoor Features",
    short:
      "Spas, waterfalls, fire bowls, and tanning ledges that turn a pool into a full backyard. Designed to match what you already have.",
    description:
      "Sometimes the pool is fine and the backyard just needs more. We design and build attached spas, sheer descent waterfalls, fire bowls, raised walls, and sun shelves that work with your existing pool instead of fighting it. These projects usually wrap in two to four weeks and make the biggest difference in how often you actually use the space.",
    bullets: [
      "Attached spas and spill over spas",
      "Waterfalls, sheer descents, and bubblers",
      "Fire bowls and fire feature walls",
      "Tanning ledges and sun shelves",
    ],
  },
];

export type Project = {
  name: string;
  location: string;
  duration: string;
  description: string;
  image: string;
};

export const projects: Project[] = [
  {
    name: "Willow Creek Retreat",
    location: "Austin, TX",
    duration: "Built in 11 weeks",
    description:
      "A family pool with a wide tanning ledge and an attached spa that gets used every single weekend, wraparound decking included.",
    image: "/images/project-1.webp",
  },
  {
    name: "The Skyline Edge",
    location: "West Lake Hills, TX",
    duration: "Built in 14 weeks",
    description:
      "An infinity edge that turns a tricky hillside lot into the best view on the street, lit for late evenings.",
    image: "/images/project-2.webp",
  },
  {
    name: "Palm Court Lagoon",
    location: "Round Rock, TX",
    duration: "Built in 16 weeks",
    description:
      "Freeform lagoon with a grotto waterfall and a fire wall, built for a household that loves to host.",
    image: "/images/project-3.webp",
  },
  {
    name: "The Garden Pool",
    location: "Hyde Park, Austin, TX",
    duration: "Built in 9 weeks",
    description:
      "A compact plunge pool wrapped in greenery, proving a narrow city yard still deserves its own water.",
    image: "/images/project-4.webp",
  },
  {
    name: "Sunset Terrace",
    location: "Georgetown, TX",
    duration: "Built in 12 weeks",
    description:
      "A raised pool with a stone feature wall and fire bowls, positioned for the best sunset on the property.",
    image: "/images/project-5.webp",
  },
  {
    name: "The Modern Rectangle",
    location: "Bee Cave, TX",
    duration: "Built in 10 weeks",
    description:
      "Clean lines, a deep sapphire finish, and full automation. This one practically runs itself.",
    image: "/images/project-6.webp",
  },
];

export type Plan = {
  name: string;
  price: string;
  period: string;
  blurb: string;
  features: string[];
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Crystal Care",
    price: "$129",
    period: "/month",
    blurb: "Weekly visits that keep your water clear and your equipment healthy.",
    features: [
      "Weekly cleaning and vacuuming",
      "Water testing and balancing",
      "Filter and skimmer care",
      "Basic chemical treatment",
    ],
  },
  {
    name: "Signature Care",
    price: "$229",
    period: "/month",
    blurb: "Everything in Crystal plus equipment checkups and priority scheduling.",
    features: [
      "Everything in Crystal Care",
      "Monthly equipment inspection",
      "Algae prevention program",
      "Priority scheduling",
    ],
    featured: true,
  },
  {
    name: "Estate Care",
    price: "$349",
    period: "/month",
    blurb: "Concierge level care for large pools, spas, and busy homes.",
    features: [
      "Everything in Signature Care",
      "Full system monitoring",
      "Emergency callouts included",
      "Advanced water treatment",
    ],
  },
];

export type Testimonial = {
  name: string;
  date: string;
  quote: string;
  rating: number;
  initials: string;
  color: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Danielle R.",
    date: "14 March 2026",
    quote:
      "Cerulea rebuilt our nineties pool and it honestly looks better than the day it was poured. They showed up when they said they would, which alone puts them ahead of every contractor we have ever hired.",
    rating: 5,
    initials: "DR",
    color: "bg-[#0C3A64]",
  },
  {
    name: "Marcus T.",
    date: "2 February 2026",
    quote:
      "Great experience from the first phone call. They explained every option with real numbers and never pushed us into anything. The water has been crystal clear since day one.",
    rating: 5,
    initials: "MT",
    color: "bg-[#1B7FA8]",
  },
  {
    name: "Priya S.",
    date: "9 January 2026",
    quote:
      "We are on the weekly maintenance plan and it is worth every cent. Same tech every visit, knows our pool by heart, and the deck is always spotless when he leaves.",
    rating: 5,
    initials: "PS",
    color: "bg-[#22A8C6]",
  },
  {
    name: "Jordan K.",
    date: "18 December 2025",
    quote:
      "They found and fixed a leak that two other companies missed completely. Fair price, clean work, and someone actually answers the phone when you call.",
    rating: 5,
    initials: "JK",
    color: "bg-[#0C3A64]",
  },
  {
    name: "Elena M.",
    date: "5 November 2025",
    quote:
      "Our infinity edge came out better than the drawings. The crew sent photos every Friday during the build so we never had to wonder what was happening in the backyard.",
    rating: 5,
    initials: "EM",
    color: "bg-[#1B7FA8]",
  },
  {
    name: "Tom W.",
    date: "21 October 2025",
    quote:
      "Fast, tidy, and straight about the timeline. The renovation took three weeks exactly like they promised, and the new lighting completely changed the backyard at night.",
    rating: 5,
    initials: "TW",
    color: "bg-[#22A8C6]",
  },
];

export const whyChooseUs = [
  {
    title: "Certified Pool Technicians",
    text: "Our techs are CPO certified and trained in house. The person testing your water actually knows what the numbers mean and what to do about them.",
  },
  {
    title: "Honest, Upfront Pricing",
    text: "Every quote is itemized and every care plan is flat rate. If something changes mid project, you hear it from us first, never on the invoice.",
  },
  {
    title: "One Crew, Start to Finish",
    text: "The same team that sketches your pool builds it and services it afterward. Nothing gets lost in translation between contractors.",
  },
  {
    title: "Premium Materials Only",
    text: "We build with finishes and equipment we would put in our own backyards, backed by warranties we actually honor.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Consultation",
    text: "We walk your yard, talk budget honestly, and sketch what is possible before anything gets signed.",
    icon: "chat",
  },
  {
    step: "02",
    title: "Design & 3D Plans",
    text: "You get a detailed 3D design and a fixed quote. We revise until it feels right, then handle the permits.",
    icon: "pencil",
  },
  {
    step: "03",
    title: "Construction",
    text: "One dedicated crew builds your pool with photo updates every Friday, so you always know where things stand.",
    icon: "hammer",
  },
  {
    step: "04",
    title: "Handover & Care",
    text: "We balance the water, teach you the system, and stay on for service if you want us. Most of our clients do.",
    icon: "waves",
  },
];

export const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "Everything a pool needs across its whole life: design and construction, weekly maintenance, water treatment, leak detection and repairs, renovations, and smart upgrades like automation and LED lighting. If it involves a pool, we have almost certainly done it this year.",
  },
  {
    question: "How much does a new pool cost?",
    answer:
      "Most of our builds land between $65,000 and $150,000 depending on size, finishes, and how difficult the yard is to access. After the first site visit you get a fixed, itemized quote, and that number does not move on you halfway through.",
  },
  {
    question: "How long does a pool project take?",
    answer:
      "A typical build runs nine to fourteen weeks from breaking ground to first swim, and you get a week by week schedule before we start. Central Texas weather can shift things, and when it does we tell you right away instead of going quiet.",
  },
  {
    question: "Do you handle renovations and upgrades?",
    answer:
      "Yes. Resurfacing, new tile and coping, LED lighting, energy efficient pumps, heaters, and full automation. If your pool shell is structurally sound, we can usually make it feel brand new for a fraction of a rebuild.",
  },
  {
    question: "What is included in a maintenance plan?",
    answer:
      "Cleaning, chemistry, filter care, and a visual check of all equipment at every visit, plus a photo report after each service so you can see exactly what we saw. Signature and Estate plans add equipment inspections, algae prevention, and priority scheduling.",
  },
  {
    question: "Is the first consultation really free?",
    answer:
      "Always. The first site visit and estimate cost you nothing and there is no pressure at the end of it. We would rather earn your project with good information than talk you into something on the spot.",
  },
];
