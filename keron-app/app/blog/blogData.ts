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
      "Explore the most desirable coastal areas, due-diligence priorities, financing considerations, rental potential, and practical negotiation tips for buyers pursuing property in Mombasa.",
    category: "Investment",
    date: "Aug 9, 2026",
    minutes: 9,
    image: "/uploads/bamburi/outside.png",
    sections: [
      {
        type: "paragraph",
        text: "Mombasa remains one of Kenya's most distinctive property markets because it combines a major urban economy with tourism, residential demand, hospitality and a strong coastal lifestyle proposition. For a buyer, that combination creates several routes to value: a family home, a long-term rental, a furnished short-stay unit, a holiday home or a development opportunity. The right choice depends on your budget, intended holding period, target tenant and tolerance for management responsibilities.",
      },
      {
        type: "paragraph",
        text: "Location should be the first filter. Nyali, Bamburi, Shanzu, Mtwapa, Tudor, Kizingo and other established corridors each serve different buyer profiles. A property close to reliable roads, schools, shopping, healthcare, beaches, offices and leisure facilities generally has a broader pool of potential occupants than a property that depends on a single attraction. For investment property, accessibility and everyday convenience often matter as much as the view.",
      },
      {
        type: "list",
        items: [
          "Define the purpose of the purchase before viewing properties: residence, long-term rental, short stay, resale or development.",
          "Compare the total acquisition cost, not only the advertised purchase price. Allow for professional fees, taxes, registration, financing costs, repairs and furnishing where applicable.",
          "Inspect the surrounding neighborhood at different times of day so you understand traffic, security, noise, drainage, access and general activity.",
          "Request and independently verify ownership and property documentation before committing funds.",
          "For apartments and managed developments, review service charges, management rules, sinking-fund arrangements and restrictions on short-stay use.",
        ],
      },
      {
        type: "paragraph",
        text: "Due diligence is where a property purchase becomes an investment decision rather than an emotional purchase. A buyer should work with qualified professionals to verify ownership, encumbrances, the identity and authority of the seller, approved development information where relevant, rates and other obligations, and any restrictions affecting the intended use. Never rely solely on a brochure, online listing or verbal assurance from an intermediary.",
      },
      {
        type: "paragraph",
        text: "Rental economics should also be tested before purchase. Estimate realistic monthly or nightly income rather than using the best-case figure supplied by a seller. Then subtract vacancy, service charges, utilities, cleaning, maintenance, management, marketing, furnishing replacement and other operating costs. A property with a slightly lower headline rent can outperform a more expensive unit if it has better occupancy, lower running costs and stronger tenant retention.",
      },
      {
        type: "list",
        items: [
          "Ask for evidence of comparable rental rates in the same building or immediate neighborhood.",
          "Calculate gross yield and then stress-test the investment using a lower occupancy or rental scenario.",
          "Consider whether the property can switch between long-term and short-stay use if market conditions change.",
          "Check parking, water reliability, power backup, internet availability, security and building maintenance.",
        ],
      },
      {
        type: "paragraph",
        text: "Negotiation is easier when you understand the property rather than simply trying to obtain a discount. Comparable listings, the property's condition, time on the market, required repairs, payment structure and the seller's urgency can all influence an offer. Put commercial terms in writing and make major commitments conditional on satisfactory professional due diligence.",
      },
      {
        type: "paragraph",
        text: "For buyers who live outside Mombasa or outside Kenya, local representation is particularly important. A trusted property professional can coordinate viewings, documentation, inspections, valuation, negotiations and handover. The objective should be a transparent process in which every material assumption is documented and independently checked.",
      },
    ],
    conclusion:
      "Mombasa can offer compelling residential and investment opportunities, but the strongest purchases are built on location discipline, verified documentation, realistic rental mathematics and professional due diligence. Treat the property as an asset first and a lifestyle purchase second, and the decision becomes much easier to evaluate.",
  },
  {
    slug: "land-investment-guide",
    title: "Land Investment: Finding High-Growth Coastal Plots",
    excerpt:
      "Learn how to evaluate coastal land in Kenya by looking beyond the asking price to ownership, access, infrastructure, zoning, development potential and long-term exit value.",
    category: "Land",
    date: "Jul 28, 2026",
    minutes: 9,
    image: "/uploads/bamburi/outside.png",
    sections: [
      {
        type: "paragraph",
        text: "Land can be one of the most attractive long-term property assets because it gives an investor flexibility. A well-located parcel can be held for appreciation, subdivided where legally and technically appropriate, developed into residential or commercial property, or used as part of a larger development strategy. The challenge is that land value is highly dependent on information that may not be obvious from a site visit.",
      },
      {
        type: "paragraph",
        text: "The first question is not whether the plot is cheap. It is why the plot is priced where it is. Look at access, surrounding development, road quality, utilities, nearby employment and tourism nodes, planned infrastructure, topography, drainage and the type of development taking place around the parcel. A plot surrounded by genuine economic activity generally has a stronger investment case than one marketed purely on future promises.",
      },
      {
        type: "list",
        items: [
          "Confirm the exact parcel and compare the physical boundaries with the official property documentation.",
          "Verify ownership and investigate registered encumbrances or restrictions through the appropriate professional channels.",
          "Establish whether the tenure and permitted use fit your investment objective.",
          "Check road access, electricity, water, drainage, telecommunications and other infrastructure requirements.",
          "Understand applicable planning, zoning and development controls before designing a project around the land.",
        ],
      },
      {
        type: "paragraph",
        text: "Location analysis should extend beyond the immediate neighborhood. A coastal plot can benefit from proximity to beaches, resorts, airports, major roads, employment centers, schools and expanding residential communities. However, investors should distinguish between infrastructure that exists, infrastructure that is formally funded or under implementation, and infrastructure that is simply part of a sales pitch.",
      },
      {
        type: "paragraph",
        text: "Physical inspection is essential. Visit the land after rain where possible and assess drainage, access and neighboring activity. Look for boundary disputes, informal access routes, utility corridors, steep gradients, flood exposure and encroachment. Speak to nearby owners and, where appropriate, local professionals who can provide context that does not appear in a listing.",
      },
      {
        type: "paragraph",
        text: "A good land investment also needs an exit strategy. Decide whether your objective is to resell after a defined period, develop, hold for rental income after construction or partner with another investor. This affects the size, location, tenure, financing approach and amount you should be willing to pay. The more clearly you define the exit, the easier it becomes to reject land that does not fit the strategy.",
      },
      {
        type: "list",
        items: [
          "Do not pay a premium simply because a plot is described as beachfront or near the ocean; verify the actual position and applicable restrictions.",
          "Budget separately for site works, fencing, access, professional services and future construction.",
          "Keep a complete transaction file containing searches, agreements, receipts, plans and professional reports.",
          "Use qualified legal, valuation and surveying professionals for material transactions.",
        ],
      },
      {
        type: "paragraph",
        text: "Land transactions reward patient investors. A compelling location with clear ownership and realistic development potential can create significant long-term value, while a cheap parcel with unresolved documentation or weak access can become a costly holding. The best approach is to make the decision from verified facts rather than urgency.",
      },
    ],
    conclusion:
      "The strongest coastal land opportunities combine clear ownership, practical access, credible infrastructure, suitable development potential and a realistic exit strategy. Price matters, but the quality of the underlying land matters more.",
  },
  {
    slug: "why-invest-in-vipingo",
    title: "Why Invest in Vipingo Now",
    excerpt:
      "Vipingo is developing into a distinctive coastal residential and lifestyle destination. Here is how investors can evaluate its rental, lifestyle and long-term growth potential.",
    category: "Market",
    date: "Jul 15, 2026",
    minutes: 8,
    image: "/uploads/kingston-nyali/Outside.png",
    sections: [
      {
        type: "paragraph",
        text: "Vipingo has attracted attention because it offers a different proposition from the dense urban core of Mombasa. The wider area combines residential communities, leisure uses, open space and access to the coast, making it relevant to buyers looking for a lifestyle property as well as investors seeking a longer-term growth story.",
      },
      {
        type: "paragraph",
        text: "The investment case should be approached through fundamentals rather than hype. Investors need to understand the specific development, access routes, available amenities, management arrangements and the type of buyer or tenant the property is designed for. A well-designed development can create an attractive rental product, but the economics still depend on acquisition cost, occupancy, operating expenses and resale demand.",
      },
      {
        type: "list",
        items: [
          "Lifestyle appeal can broaden demand among holiday-home buyers, families and professionals seeking a quieter coastal environment.",
          "Planned communities can offer a more consistent combination of security, landscaping, shared amenities and property management.",
          "Proximity to established coastal attractions and transport corridors can support both owner occupancy and visitor demand.",
          "New development should be evaluated for delivery quality, management capability and long-term maintenance, not only launch pricing.",
        ],
      },
      {
        type: "paragraph",
        text: "For rental investors, the target market should be defined before purchasing. A furnished apartment aimed at weekend and holiday guests will have a different furnishing budget, marketing plan and occupancy pattern from a home aimed at a long-term family tenant. Understanding the guest profile helps determine the right unit size, amenities, price point and management model.",
      },
      {
        type: "paragraph",
        text: "Investors should also compare Vipingo with alternative locations rather than evaluating it in isolation. Compare purchase prices, rental rates, occupancy assumptions, service charges, travel times, amenities and resale liquidity. The purpose is not to prove that one location is always better, but to identify where the risk-adjusted return makes the most sense for your specific strategy.",
      },
      {
        type: "list",
        items: [
          "Request a complete schedule of service charges and understand what those charges cover.",
          "Confirm rules affecting renovations, pets, short stays, subletting and external property management.",
          "Inspect completed units and common areas where possible rather than relying only on renders.",
          "Model income using conservative occupancy assumptions and realistic operating costs.",
        ],
      },
      {
        type: "paragraph",
        text: "A major advantage of a growing destination is the opportunity to enter before a location becomes fully mature. The trade-off is that emerging areas carry execution and timing risk. Investors should therefore prioritize projects with credible developers, transparent documentation, strong access and an amenity base that can support real demand even if market growth takes longer than expected.",
      },
      {
        type: "paragraph",
        text: "For families, the decision can be equally compelling when lifestyle value is part of the objective. Space, security, community facilities and proximity to the coast can make a property attractive even when pure rental yield is not the only consideration. The key is to be explicit about whether you are optimizing for income, appreciation, personal use or a combination of all three.",
      },
    ],
    conclusion:
      "Vipingo deserves attention as a coastal growth market, but the strongest investment is not simply the newest or most heavily marketed property. Focus on access, development quality, management, rental economics and long-term demand before committing capital.",
  },
  {
    slug: "market-trends",
    title: "Real Estate Market Trends for 2026",
    excerpt:
      "A practical look at the forces shaping residential, rental, land and short-stay property decisions across Kenya, with a focus on coastal and Nairobi markets.",
    category: "Insights",
    date: "Jun 30, 2026",
    minutes: 10,
    image: "/uploads/mlolongo/Sitting%20Room.png",
    sections: [
      {
        type: "paragraph",
        text: "Kenya's property market in 2026 continues to reward buyers who are selective about location, quality and cash-flow potential. Rather than one uniform national trend, the market is increasingly segmented. Prime urban neighborhoods, established coastal areas, emerging growth corridors and peripheral land markets behave differently, so investors need to evaluate the local fundamentals behind each opportunity.",
      },
      {
        type: "paragraph",
        text: "One of the most visible changes is the increasing importance of property quality and professional management. Tenants and guests can compare more options online, making presentation, responsiveness, security, cleanliness, maintenance and ease of booking part of the property's commercial value. Owners who treat management as an operating discipline are better positioned to protect occupancy and reviews.",
      },
      {
        type: "list",
        items: [
          "Move-in-ready homes continue to compete strongly because buyers and tenants increasingly value convenience.",
          "Short-stay demand remains important in tourism-linked markets, but operators need realistic occupancy and operating-cost models.",
          "Infrastructure and access remain major drivers of land and residential value in emerging corridors.",
          "Buyers are paying closer attention to documentation, service charges, maintenance and the total cost of ownership.",
          "Professional property management is becoming a competitive advantage for owners who live away from their investment property.",
        ],
      },
      {
        type: "paragraph",
        text: "The coastal market continues to benefit from lifestyle and tourism demand, but buyers are becoming more sophisticated. A sea-facing address alone does not guarantee a strong return. Investors increasingly compare access, building quality, security, amenities, management fees, rental demand and the ability to maintain the property between bookings or tenancies.",
      },
      {
        type: "paragraph",
        text: "In Nairobi and other major urban markets, transport access, employment nodes and neighborhood amenities remain central to rental performance. Smaller, well-located units can be attractive where the tenant pool is deep and the building is professionally managed. Investors should pay particular attention to service charges and vacancy assumptions because these can materially change the net return.",
      },
      {
        type: "paragraph",
        text: "Land remains a long-term play, particularly along growth corridors, but the market increasingly rewards evidence rather than speculation. Investors should look for actual roads, utilities, population growth, commercial activity and development momentum. A story about what an area will become is useful only when supported by credible planning, investment and execution.",
      },
      {
        type: "list",
        items: [
          "Build an investment case using conservative rental, occupancy and appreciation assumptions.",
          "Compare net income rather than headline rent or advertised yield.",
          "Keep adequate reserves for maintenance, vacancy and unexpected property costs.",
          "Review the legal and physical condition of a property before relying on projected returns.",
          "Consider how easily the property could be sold if your investment objective changes.",
        ],
      },
      {
        type: "paragraph",
        text: "Technology is also changing how property is marketed and managed. High-quality photography, virtual viewings, digital enquiries, online booking, automated communication and professional listing information allow owners and agents to reach a wider audience. However, technology cannot compensate for poor property fundamentals. Digital presentation should make a good asset easier to discover, compare and trust.",
      },
      {
        type: "paragraph",
        text: "For investors entering the market in 2026, diversification can be useful. A portfolio might combine a cash-flowing rental property with a longer-term land position, or a personal-use coastal home with an income-producing urban unit. The appropriate mix depends on liquidity requirements, financing, risk tolerance and investment horizon.",
      },
    ],
    conclusion:
      "The 2026 property market favors disciplined buyers. Strong opportunities are being created by real demand, infrastructure, quality construction and professional management—not by marketing claims alone. Investors who verify the numbers, documentation and local fundamentals are better positioned to build resilient property portfolios.",
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
