export type BlogSection =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  minutes: number;
  image: string;
  sections: BlogSection[];
  conclusion: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "buying-property-in-mombasa",
    title: "Buying Property in Mombasa: A Coastal Investment Guide",
    excerpt:
      "Explore the most desirable seafront areas, legal checks, financing options, and negotiation tips for buyers pursuing coastal homes in Mombasa.",
    category: "Investment",
    date: "Aug 9, 2026",
    minutes: 6,
    image: "/images/hero-gallery.png",
    sections: [
      {
        type: "paragraph",
        text: "Mombasa’s coastal property market is driven by tourism, expatriate demand, and premium lifestyle buyers. The strongest opportunities are in established neighborhoods with good infrastructure, easy beach access, and trusted property management services.",
      },
      {
        type: "list",
        items: [
          "Confirm land title documentation with a local lawyer.",
          "Prioritize gated communities and managed short-stay apartments.",
          "Choose properties with strong year-round rental appeal.",
        ],
      },
      {
        type: "paragraph",
        text: "Work with agents who understand both legal requirements and local resale demand. A well-structured offer and transparent due diligence can make the difference between a safe investment and an expensive mistake.",
      },
    ],
    conclusion:
      "Buying in Mombasa can yield strong returns when you select verified coastal listings, vet every legal document, and focus on properties with proven rental performance.",
  },
  {
    slug: "land-investment-guide",
    title: "Land Investment: Finding High-Growth Coastal Plots",
    excerpt:
      "Learn how to evaluate beachfront and commercial land in Kenya, from title searches to infrastructure, zoning and long-term returns.",
    category: "Land",
    date: "Jul 28, 2026",
    minutes: 5,
    image: "/uploads/bamburi/outside.png",
    sections: [
      {
        type: "paragraph",
        text: "Coastal land investment can offer exceptional upside if you choose the right location and confirm clear titles. Focus on areas with planned infrastructure, strong tourism demand, and sustainable development plans.",
      },
      {
        type: "list",
        items: [
          "Verify whether the land is freehold or leasehold.",
          "Inspect nearby amenities, roads, and utility access.",
          "Understand zoning and future development controls.",
        ],
      },
      {
        type: "paragraph",
        text: "Investing in land near established resorts and major coastal towns gives you flexibility for future resale, development, or joint venture partnerships.",
      },
    ],
    conclusion:
      "The best coastal plot investments combine clear ownership, strong infrastructure plans, and proximity to proven leisure or residential corridors.",
  },
  {
    slug: "why-invest-in-vipingo",
    title: "Why Invest in Vipingo Now",
    excerpt:
      "Vipingo is emerging as one of Kenya’s most promising coastal developments—discover what makes it ideal for rental income and family living.",
    category: "Market",
    date: "Jul 15, 2026",
    minutes: 4,
    image: "/uploads/kingston-nyali/Outside.png",
    sections: [
      {
        type: "paragraph",
        text: "Vipingo’s growth is powered by eco-luxury resorts, gated communities and expanding coastal infrastructure. It is particularly attractive for buyer segments seeking safe, modern lifestyles close to the shoreline.",
      },
      {
        type: "list",
        items: [
          "Fast-rising rental demand from domestic and international visitors.",
          "Planned leisure developments that improve resale value.",
          "A strong rental pool for modern holiday homes.",
        ],
      },
      {
        type: "paragraph",
        text: "Investors should focus on properties with easy access to amenities, strong management options, and a clear path to rental income during peak tourism months.",
      },
    ],
    conclusion:
      "Vipingo is a coastal growth destination where lifestyle, rental appeal and development planning converge to create long-term value.",
  },
  {
    slug: "market-trends",
    title: "Real Estate Market Trends for 2026",
    excerpt:
      "A clear review of rental demand, property values, and short-stay growth in coastal and Nairobi neighborhoods for strategic buyers.",
    category: "Insights",
    date: "Jun 30, 2026",
    minutes: 5,
    image: "/uploads/mlolongo/Sitting%20Room.png",
    sections: [
      {
        type: "paragraph",
        text: "Kenya’s 2026 property market is shaped by a renewed tourism recovery, growing local rental demand, and strong interest from buyers looking for secure coastal investments. Short-stay rentals remain the fastest-moving segment, while residential sales increasingly favor move-in-ready and professionally managed properties.",
      },
      {
        type: "paragraph",
        text: "Coastal destinations like Mombasa and Malindi have rebounded faster than expected. Guests are choosing fully furnished stays with private amenities, which keeps occupancy high and creates solid income potential for owners who offer effortless booking experiences.",
      },
      {
        type: "list",
        items: [
          "Short-stay occupancy rates are leading coastal growth as travelers seek boutique, security-first accommodations.",
          "Urban rental demand in Nairobi is rising for young professionals and small families, especially near the CBD and major transit corridors.",
          "Land and development plots remain compelling, but investors now prioritize proven infrastructure and licensed projects.",
        ],
      },
      {
        type: "paragraph",
        text: "Property values are seeing the strongest gains where quality finishes, professional marketing, and trusted management converge. Buyers are willing to pay a premium for listings that are move-in ready, have transparent pricing, and include concierge-style support.",
      },
      {
        type: "paragraph",
        text: "Funding is easier for properties with documented rental history and clear title. Many investors use hybrid strategies, combining short-stay income with longer-term tenancy during slower months to maximize returns while reducing vacancy risk.",
      },
    ],
    conclusion:
      "The 2026 market rewards buyers who target verified coastal and city properties with strong rental performance, clear ownership, and elevated guest experiences. Smart investors focus on quality, management, and locations that already attract reliable demand.",
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
