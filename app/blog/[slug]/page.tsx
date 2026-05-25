import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BlogDetailsView } from '@/components/blog/BlogDetailsView';
import { DetailedBlogPost } from '@/app/types/blog-details';

// 1. COMPLIANT MOCK DATABASE DATABASE MAP FOR RUNTIME EXTRACTION
// app/blog/[slug]/page.tsx

// app/blog/[slug]/page.tsx

// 1. DYNAMIC ARTICLE REPOSITORY WITH HIGH-FIDELITY LUXURY DATA STRUCTURES
const DETAILED_POSTS_DB: Record<string, DetailedBlogPost> = {
  "four-best-places-vacation-october": {
    slug: "four-best-places-vacation-october",
    title: "The Four Best Places for Vacation in October",
    category: "Destination",
    date: "19 Jul 2026",
    readTime: "5 min to read",
    authorName: "Richard James",
    authorRole: "Senior Concierge Editor",
    authorAvatar: "/images/suite_bed_front.png",
    coverImage: "/images/hero-bg.jpg",
    sections: [
      { type: 'text', value: "Whether you are looking for a vibrant cultural experience in Abuja, a relaxing stay near the scenic Jabi Lake, golden afternoons at Millennium Park, or an adventurous hike up Zuma Rock, October is the ideal month to explore the capital. Azusa Hotels stands ready as the perfect base for your premium Nigerian getaway." }
    ]
  }, // FIXED: Injected the critical missing trailing comma right here

  "auckland-tips-local": {
    slug: "auckland-tips-local",
    title: "Auckland Tips from a Local",
    category: "Destination",
    date: "20 Jul 2026",
    readTime: "5 min to read",
    authorName: "Sarah Jenkins",
    authorRole: "Contributing Travel Journalist",
    authorAvatar: "/images/suite_bed_side.png",
    coverImage: "/images/azusa2.jpg",
    sections: [
      { type: 'text', value: "Exploring the City of Sails requires dropping standard tourist templates and embracing local coastal rhythms. From hidden beach paths in Devonport to premium culinary enclaves across Britomart, Auckland delivers unmatched boutique maritime lifestyle layers." }
    ]
  }, // FIXED: Injected comma here too to keep the structure fully compliant

  "carbon-removal-credits": {
    slug: "carbon-removal-credits",
    title: "What are carbon removal credits?",
    category: "#LifeAtRadisson",
    date: "21 Jul 2026",
    readTime: "5 min to read",
    authorName: "Marcus Vance",
    authorRole: "Sustainability Operations Director",
    authorAvatar: "/images/suite_bed_front.png",
    coverImage: "/images/suite_main.png",
    sections: [
      { type: 'text', value: "In the evolving global landscape of climate compliance, carbon removal credits represent a rigorous validation framework." }
    ]
  },
  "discovering-lyon-journey": {
    slug: "discovering-lyon-journey",
    title: "Discovering Lyon: A Journey Through History, Silk, and Cour des Loges Lyon, ...",
    category: "Destination",
    date: "22 Jul 2026",
    readTime: "5 min to read",
    authorName: "Chantal Dubois",
    authorRole: "European Culture Writer",
    authorAvatar: "/images/suite_bed_side.png",
    coverImage: "/images/suite_bed_side.png",
    sections: [
      { type: 'text', value: "Lyon stands as France's absolute epicurean heart, where renaissance architecture mirrors a deep history of silk craftsmanship. Walking through the mysterious traboules of Vieux Lyon reveals century-old passages filled with timeless design elements." },
      { type: 'heading', value: "The Gastronomic Legacy of the Traboules" },
      { type: 'text', value: "Savoring traditional boutique culinary craft in local bouchons showcases the historic preservation of tastes that make Lyon an architectural and sensory paradise." }
    ]
  },
  "kebabs-india-flavourful-journey": {
    slug: "kebabs-india-flavourful-journey",
    title: "Kebabs in India: A Flavourful Journey Through Time, Tradition & Taste",
    category: "Food & Drink",
    date: "23 Jul 2026",
    readTime: "7 min to read",
    authorName: "Rohan Mehra",
    authorRole: "Culinary Heritage Specialist",
    authorAvatar: "/images/suite_bed_front.png",
    coverImage: "/images/suite_bed_front.png",
    sections: [
      { type: 'text', value: "From ancient royal tandoors to bustling midnight culinary tracks, India's skewered meat craft represents a delicate mastery of aromatic spice layers and wood-fire smoking techniques that have evolved across centuries of heritage." },
      { type: 'heading', value: "The Magic of Royal Mughlai Tandoors" },
      { type: 'text', value: "Savoring the melt-in-the-mouth texture of Galouti or Kakori kebabs highlights an intricate preparation process involving secret botanical marinades perfected over generations." }
    ]
  },
  "noida-international-airport": {
    slug: "noida-international-airport",
    title: "Noida International Airport: India's New Global Gateway Taking Shape",
    category: "Destination",
    date: "24 Jul 2026",
    readTime: "6 min to read",
    authorName: "Vikram Mehta",
    authorRole: "Aviation Infrastructure Analyst",
    authorAvatar: "/images/suite_bed_front.png",
    coverImage: "/images/hero-bg.jpg",
    sections: [
      { type: 'text', value: "The massive structural engineering currently taking shape at Jewar represents India's next digital aviation milestone. Engineered as a net-zero emission terminal, Noida International Airport seamlessly integrates massive smart infrastructure grids with clean flight path geometries." },
      { type: 'heading', value: "Bridges of Next-Gen Connectivity" },
      { type: 'text', value: "This mega hub is built to manage massive passenger transits smoothly, completely transforming commercial and luxury connectivity tracks throughout Northern India." }
    ]
  },
  "top-10-cricket-stadiums-india": {
    slug: "top-10-cricket-stadiums-india",
    title: "Top 10 Cricket Stadiums in India Every Fan Should Visit At least Once",
    category: "#LifeAtRadisson",
    date: "25 Jul 2026",
    readTime: "7 min to read",
    authorName: "Aarav Sharma",
    authorRole: "Global Sports Travel Editor",
    authorAvatar: "/images/suite_bed_front.png",
    coverImage: "/images/azusa2.jpg",
    sections: [
      { type: 'text', value: "Cricket in India is not merely a sport; it is a shared heartbeat, a cultural phenomenon that unites millions. Visiting these massive architectural arenas offers an unparalleled look into the sheer energy of the game." },
      { type: 'heading', value: "The Grand Arenas of the Subcontinent" },
      { type: 'text', value: "From the world's largest stadium in Ahmedabad featuring cutting-edge multi-layer structures, to the historic stands of Eden Gardens in Kolkata, each ground tells an extraordinary story of sportsmanship and history." },
      { type: 'quote', value: "Standing inside a stadium packed with over a hundred thousand roaring fans is an experience that stays with you forever.", subValue: "Radisson Sports Travel Review" }
    ]
  },
  "less-is-more-net-zero-hotels": {
    slug: "less-is-more-net-zero-hotels",
    title: "Less is more: Verified Net Zero Hotels embrace minimal waste operations",
    category: "#LifeAtRadisson",
    date: "26 Jul 2026",
    readTime: "5 min to read",
    authorName: "Elena Rostova",
    authorRole: "Boutique Hospitality Architect",
    authorAvatar: "/images/suite_bed_side.png",
    coverImage: "/images/suite_main.png",
    sections: [
      { type: 'text', value: "Premium hotel operations are discarding old plastic-heavy parameters in favor of circular, localized material streams. True eco-luxury spaces emphasize zero-waste architecture without shifting a single millimeter away from world-class guest comfort." },
      { type: 'heading', value: "The Elimination of Hospitality Resource Waste" },
      { type: 'text', value: "By incorporating real-time thermal indexing and onsite composting cycles, net-zero hotels prove that true hospitality sophistication thrives when waste is completely engineered out." }
    ]
  },
  "day-trips-amsterdam-hidden-gems": {
    slug: "day-trips-amsterdam-hidden-gems",
    title: "Day trips from Amsterdam: discover hidden gems",
    category: "Destination",
    date: "27 Jul 2026",
    readTime: "5 min to read",
    authorName: "Dirk de Groot",
    authorRole: "Netherlands Travel Concierge",
    authorAvatar: "/images/suite_bed_front.png",
    coverImage: "/images/suite_bed_side.png",
    sections: [
      { type: 'text', value: "While the central canal rings retain their classic allure, escaping past the city borders reveals pristine historic gems. From the historic windmill networks of Zaanse Schans to the stunning historic architecture of Haarlem, Netherlandic beauty shines brightest on the open road." },
      { type: 'heading', value: "Exploring Medieval Castles and Coastal Slopes" },
      { type: 'text', value: "Taking brief luxury rail transits out to Muiderslot Castle allows travelers to explore rich historic defense walls and classical gardens completely detached from city crowds." }
    ]
  }
};




// 2. GENERATE METADATA PARAMS FOR AUTOMATIC SEARCH SEARCH PREVIEW CONFIGURATION
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = DETAILED_POSTS_DB[resolvedParams.slug];
  
  if (!post) return { title: "Article Not Found | Azusa Blog" };

  return {
    title: `${post.title} | Azusa Luxury Editorial`,
    description: `Read our comprehensive editorial review covering ${post.title}. Authored by the specialized hospitality concierge lines at Azusa Hotels.`,
    alternates: { canonical: `/blog/${post.slug}` }
  };
}

// 3. MAIN DYNAMIC RENDERING INTERACTIVE CONTAINER ASSEMBLY
export default async function DynamicBlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const activePost = DETAILED_POSTS_DB[resolvedParams.slug];

  // Fail-safe router fallback path if slugs don't map to database records
  if (!activePost) {
    notFound();
  }

  // Structured Article metadata generation schema injection 
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": activePost.title,
    "image": activePost.coverImage,
    "datePublished": "2026-07-19",
    "author": {
      "@type": "Person",
      "name": activePost.authorName,
      "jobTitle": activePost.authorRole
    },
    "publisher": {
      "@type": "Organization",
      "name": "Azusa Hotels & Luxury Apartments"
    }
  };

  return (
    <main className="min-h-screen bg-white w-full flex flex-col overflow-x-hidden relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      <Header />
      <BlogDetailsView article={activePost} />
      <Footer />
    </main>
  );
}
