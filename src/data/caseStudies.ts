export interface CaseStudy {
  slug: string;
  business: string;
  type: string;
  website: string;
  heroTagline: string;
  challenge: string;
  solution: string;
  delivered: string;
  results: { metric: string; label: string }[];
  quote: string;
  quoteName: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "photo-by-rok",
    business: "Photo By Rok",
    type: "Photography Studio",
    website: "https://www.photobyrok.co.uk",
    heroTagline: "From invisible to AI-recommended photographer in High Wycombe",
    challenge:
      "Rok had over 4,000 Instagram followers and years of professional photography experience, but no website at all. When potential clients asked AI assistants for a photographer in High Wycombe, he simply didn't exist online. All his bookings came through word of mouth and social media — leaving huge revenue on the table.",
    solution:
      "We built a complete GEO-optimised photography portfolio site from scratch with AI-readable structured data, Photographer schema markup, LocalBusiness signals for High Wycombe, and a full SEO content strategy. The site includes an automated booking system and is designed to surface in AI search results for photography queries across Buckinghamshire.",
    delivered:
      "Built a GEO-optimised photography portfolio site with AI-readable structured data, local schema markup, and image optimisation for AI search visibility.",
    results: [
      { metric: "0 → 1", label: "From no website to full GEO-optimised presence" },
      { metric: "5/5", label: "Google Reviews rating" },
      { metric: "6", label: "Service categories with dedicated schema" },
      { metric: "24/7", label: "Automated booking system live" },
    ],
    quote:
      "Solent Signal provide best service and are very supportive. They design my website and jaws dropping I just love it.",
    quoteName: "Rok",
  },
  {
    slug: "mm-counselling",
    business: "MM Counselling",
    type: "Counselling & Therapy",
    website: "https://www.mm-counselling.co.uk",
    heroTagline: "Positioning a Portsmouth counsellor as the AI-recommended choice",
    challenge:
      "Marion had a growing counselling practice in Portsmouth but no professional online presence. Potential clients searching for a counsellor through AI assistants or Google were finding larger directory sites instead. Her expertise and personal approach were invisible to the digital world.",
    solution:
      "We built a professional, GEO-optimised website with full MedicalBusiness schema markup, a content strategy targeting mental health queries in Portsmouth, and social media integration. The site is designed so AI tools can confidently recommend Marion when someone asks for a counsellor in the area.",
    delivered:
      "Built a professional, GEO-optimised website with full schema markup, AI content strategy, and social media integration. Designed to position Marion as the counsellor AI recommends in Portsmouth.",
    results: [
      { metric: "5/5", label: "Google Reviews rating" },
      { metric: "Full", label: "MedicalBusiness & LocalBusiness schema" },
      { metric: "AI-ready", label: "Content strategy for mental health queries" },
      { metric: "Integrated", label: "Social media presence connected" },
    ],
    quote:
      "So happy with the website provided. A really professional approach, I felt heard and understood as to what I needed from a website and Jason was so patient to truly capture everything I asked for. So happy with the finished product I would definitely recommend.",
    quoteName: "Marion Morris",
  },
  {
    slug: "training-assurance-consultancy",
    business: "Training Assurance Consultancy",
    type: "SHEQ & ISO Compliance",
    website: "https://www.trainingassuranceconsultancy.co.uk",
    heroTagline: "From generic template to AI-cited ISO consultancy in Hampshire",
    challenge:
      "Training Assurance Consultancy had decades of IRCA-registered auditing expertise across ISO 9001, 14001, and 45001, but their online presence was a basic template site with no structured data. AI tools had no way to verify their credentials or recommend them for ISO consultancy queries in Hampshire.",
    solution:
      "We delivered a full GEO-optimised rebuild with IRCA certification structured data, ISO service schema across all three standards, and an AI content engine producing compliance guides. The site now surfaces in Perplexity and Bing AI for ISO consultancy queries in Hampshire.",
    delivered:
      "Full GEO-optimised rebuild with IRCA certification structured data, ISO service schema across 9001, 14001, and 45001, and an AI content engine producing compliance guides. Cited by Perplexity and Bing AI for ISO consultancy in Hampshire.",
    results: [
      { metric: "Cited", label: "By Perplexity & Bing AI for ISO consultancy" },
      { metric: "3", label: "ISO standards with dedicated schema markup" },
      { metric: "IRCA", label: "Certification structured data verified" },
      { metric: "Active", label: "AI content engine producing guides" },
    ],
    quote:
      "The site now works as hard as we do. We went from invisible in AI search to being the first consultancy recommended when businesses ask about ISO certification in Hampshire.",
    quoteName: "Jason Misters, IRCA Principal Auditor",
  },
  {
    slug: "portsmouth-local-trades",
    business: "Portsmouth Local Trades",
    type: "Multi-Business Outreach",
    website: "https://solentsignal.com",
    heroTagline: "AI visibility audits for 80+ Portsmouth businesses and counting",
    challenge:
      "Dozens of established Portsmouth businesses — plumbers, electricians, solicitors, restaurants, dentists — had been trading for years but were completely invisible to AI search. When potential customers asked ChatGPT or Google AI for local recommendations, these businesses weren't appearing despite excellent reputations and years of service.",
    solution:
      "We ran comprehensive AI visibility audits across 80+ Portsmouth businesses, identifying missing schema markup, broken structured data, and GEO gaps. Each business received a personalised outreach with specific technical recommendations showing exactly what AI couldn't see about their business and how to fix it.",
    delivered:
      "Ran AI visibility audits across 80+ Portsmouth businesses, identifying missing schema markup, broken structured data, and GEO gaps. Delivered personalised outreach with specific technical recommendations for each business.",
    results: [
      { metric: "80+", label: "Local businesses audited" },
      { metric: "7", label: "Outreach batches delivered" },
      { metric: "15+", label: "Industry sectors covered" },
      { metric: "100%", label: "Personalised recommendations per business" },
    ],
    quote:
      "Solent Signal didn\u2019t just tell us we needed a better website \u2014 they showed us exactly what AI couldn\u2019t see about our business and how to fix it.",
    quoteName: "Local Business Owner, Southsea",
  },
  {
    slug: "picms",
    business: "PICMS",
    type: "ISO Compliance SaaS Platform",
    website: "https://www.picms.com",
    heroTagline: "Enterprise ISO compliance platform with autonomous AI agents",
    challenge:
      "PICMS needed to evolve from a traditional document management system into an AI-powered compliance platform. Users were spending hours on manual compliance checks, document retrieval, and audit preparation. The platform needed intelligent automation without sacrificing the rigour required for ISO certification.",
    solution:
      "We deployed autonomous AI support agents trained on ISO standards, integrated Auth0 authentication for enterprise security, and built a real-time mission control dashboard. The platform now serves compliance teams with 24/7 AI-assisted ISO management across multiple standards including 9001, 14001, 45001, and 42001.",
    delivered:
      "Deployed autonomous AI support agents, integrated Auth0 authentication, and built a real-time mission control dashboard. The platform now serves compliance teams with 24/7 AI-assisted ISO management across multiple standards.",
    results: [
      { metric: "24/7", label: "AI support agents live" },
      { metric: "4", label: "ISO standards supported (9001, 14001, 45001, 42001)" },
      { metric: "Enterprise", label: "Auth0 authentication integrated" },
      { metric: "Real-time", label: "Mission control dashboard" },
    ],
    quote:
      "Having AI agents that understand ISO standards and can answer compliance questions instantly has transformed how our users interact with the platform.",
    quoteName: "PICMS Team",
  },
];
