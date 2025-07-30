"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import {
  Phone,
  Droplet,
  Layers,
  Mountain,
  Building2,
  Dribbble,
  Home,
  ChevronDown,
  ChevronUp, 
  Search, 
} from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import AnimatedSection from "../../components/AnimatedSection";
import ProductCard from "../../components/ProductCard";
import QuoteModal from "../../components/QuoteModal";
import { supabase } from "../../lib/supabase";

/* ────────────────────
   ▸ TYPE & CONSTANTS
   ──────────────────── */
type BaseSub = "sport" | "commercial" | "interior-exterior";

type CommercialSub =
  | "Heterogeneous general use floors"
  | "SPC"
  | "Heterogeneous semi-objective floors"
  | "Vinyl floor tiles & planks"
  | "Sports floors – Heterogeneous"
  | "Sports parquet floor systems"
  | "Parquet floors"
  | "Homogeneous flooring"
  | "Heterogeneous hard floors"
  | "Heterogeneous show floors"
  | "General-use vinyl floors"
  | "Heterogeneous non-slip floors";

type Subcategory = BaseSub | CommercialSub;

interface Product {
  id: string;
  name: string;
  category: "waterproofing" | "flooring" | "rocksoil";
  subcategory?: Subcategory;
  categoryName: string;
  commercial_subcategory?: string;
  image: string;
  price: string;
  description: string;
  rating: number;
  features: string[];
  badge?: string;
  pdfUrl?: string; 
}

const categories = ["waterproofing", "flooring", "rocksoil"] as const;
const subcategories: BaseSub[] = [
  "sport",
  "commercial",
  "interior-exterior",
];
const commercialSubcats: CommercialSub[] = [
  "Heterogeneous general use floors",
  "SPC",
  "Heterogeneous semi-objective floors",
  "Vinyl floor tiles & planks",
  "Sports floors – Heterogeneous",
  "Sports parquet floor systems",
  "Parquet floors",
  "Homogeneous flooring",
  "Heterogeneous hard floors",
  "Heterogeneous show floors",
  "General-use vinyl floors",
  "Heterogeneous non-slip floors",
];

const commercialLabels: Record<CommercialSub, string> = {
  "Heterogeneous general use floors": "Heterogeneous general use floors",
  SPC: "SPC",
  "Heterogeneous semi-objective floors": "Heterogeneous semi-objective floors",
  "Vinyl floor tiles & planks": "Vinyl floor tiles & planks",
  "Sports floors – Heterogeneous": "Sports floors – Heterogeneous",
  "Sports parquet floor systems": "Sports parquet floor systems",
  "Parquet floors": "Parquet floors",
  "Homogeneous flooring": "Homogeneous flooring",
  "Heterogeneous hard floors": "Heterogeneous hard floors",
  "Heterogeneous show floors": "Heterogeneous show floors",
  "General-use vinyl floors": "General-use vinyl floors",
  "Heterogeneous non-slip floors": "Heterogeneous non-slip floors",
};

/* ────────────────────
   ▸  ICONS
   ──────────────────── */
const icons: Record<string, JSX.Element> = {
  waterproofing: <Droplet className="w-4 h-4 mr-2" />,
  flooring: <Layers className="w-4 h-4 mr-2" />,
  rocksoil: <Mountain className="w-4 h-4 mr-2" />,
};

const subIcons: Record<Subcategory, JSX.Element> = {
  sport: <Dribbble className="w-5 h-5 mr-2 text-blue-600" />,
  commercial: <Building2 className="w-5 h-5 mr-2 text-green-600" />,
  "interior-exterior": <Home className="w-5 h-5 mr-2 text-yellow-600" />,
  "Heterogeneous general use floors": <Building2 className="w-4 h-4 mr-2 text-green-500" />,
  SPC: <Building2 className="w-4 h-4 mr-2 text-green-500" />,
  "Heterogeneous semi-objective floors": <Building2 className="w-4 h-4 mr-2 text-green-500" />,
  "Vinyl floor tiles & planks": <Building2 className="w-4 h-4 mr-2 text-green-500" />,
  "Sports floors – Heterogeneous": <Building2 className="w-4 h-4 mr-2 text-green-500" />,
  "Sports parquet floor systems": <Building2 className="w-4 h-4 mr-2 text-green-500" />,
  "Parquet floors": <Building2 className="w-4 h-4 mr-2 text-green-500" />,
  "Homogeneous flooring": <Building2 className="w-4 h-4 mr-2 text-green-500" />,
  "Heterogeneous hard floors": <Building2 className="w-4 h-4 mr-2 text-green-500" />,
  "Heterogeneous show floors": <Building2 className="w-4 h-4 mr-2 text-green-500" />,
  "General-use vinyl floors": <Building2 className="w-4 h-4 mr-2 text-green-500" />,
  "Heterogeneous non-slip floors": <Building2 className="w-4 h-4 mr-2 text-green-500" />,
};

/* ────────────────────
   ▸ HELPERS 
   ──────────────────── */
const formatPrice = (price: string) => {
  const num = parseFloat(price.replace(/[^0-9.]/g, ""));
  return isNaN(num)
    ? price
    : new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(num);
};

const ProductSkeleton = () => (
  <div className="animate-pulse bg-white shadow rounded-lg p-4">
    <div className="h-40 bg-gray-200 rounded mb-4" />
    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
    <div className="h-4 bg-gray-300 rounded w-1/2" />
  </div>
);

/* ────────────────────
   ▸ PAGE COMPONENT
   ──────────────────── */
const ProductCataloguePage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Products from Supabase
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // UI state
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  const toggleSection = (key: string) =>
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ✅ UPDATED FUNCTION - Navigate to product-item-details page
  const handleProductClick = (productId: string) => {
    router.push(`/product-item-details?id=${productId}`);
  };

  /* ────────── Fetch products from Supabase on mount ────────── */
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select(`
          *,
          category:categories!fk_category(name),
          subcategory:subcategories!fk_subcategory(name),
          commercial_sub:commercial_subcategories!fk_commercial_subcategory(name)
        `);

      if (error) {
        console.error("Supabase fetch error:", error.message);
        setLoading(false);
        return;
      }

      // Resolve signed image URLs
      const withImages: Product[] = await Promise.all(
        (data as Product[]).map(async (prod) => {
          if (prod.image?.startsWith("http")) return prod;

          try {
            const { data: signed } = await supabase.storage
              .from("product-images")
              .createSignedUrl(prod.image, 60 * 60);
            if (signed?.signedUrl) return { ...prod, image: signed.signedUrl };
          } catch (_) {}
          return prod;
        })
      );

      setProducts(
        withImages.map((p) => ({
          ...p,
          category: (p as any)?.category?.name ?? (p as any).category,
          subcategory: (p as any)?.subcategory?.name ?? (p as any).subcategory,
          commercial_subcategory: (p as any)?.commercial_sub?.name ?? (p as any).commercial_sub,
          categoryName: p?.category?.name ?? p.category,
          price: formatPrice(String(p.price ?? "")),
        }))
      );

      setLoading(false);
    };

    fetchProducts();
  }, []);

  // Handle URL hash scrolling
  useEffect(() => {
    if (!loading) {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.slice(1);
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }
      }
    }
  }, [loading]);

  /* scroll-spy */
  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = categories
        .map((cat) => {
          const el = document.getElementById(cat);
          return el ? { id: cat, offset: el.offsetTop } : null;
        })
        .filter(Boolean) as { id: string; offset: number }[];

      const scrollY = window.scrollY + 200;
      const current = sectionOffsets.reverse().find((s) => scrollY >= s.offset);
      setActiveCategory(current?.id ?? null);

      // Show back to top button
      setShowBackToTop(window.scrollY > 300);
    };
     
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Back-to-Top helper */
  const BackToTop: React.FC = () => (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-[#417d80] hover:bg-[#356b6d] text-white px-4 py-3 rounded-full shadow-lg transition-all"
    >
      <ChevronUp className="w-4 h-4" /> 
    </button>
  );

  /* ─────────────────── render ─────────────────── */
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 scroll-smooth">
        {/* HERO */}
        <section className="relative py-32 bg-gradient-to-br from-blue-700 via-indigo-600 to-orange-500 text-white overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://qawxuytlwqmsomsqlrsc.supabase.co/storage/v1/object/public/image//Products_Hero.jpg" 
              alt="SLK Trading Products"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#3d9392]/80 to-[#1b3d5a]/80"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 drop-shadow-2xl">
                Products <span className="text-[#6dbeb0]">Catalogue</span>
              </h1>
              <p className="text-2xl text-blue-100 mb-8 leading-relaxed drop-shadow-lg">
                Premium construction materials for your next project
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-[#3d9392] hover:bg-[#6dbeb0] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Product Quote
                </button>
                <button 
                  onClick={() => router.push('/contact')}
                  className="border-2 border-white/40 hover:bg-white/15 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Contact Our Experts
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* MAIN LAYOUT */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* ───── Sidebar */}
            <aside className="lg:w-1/4">
              <div className="sticky top-24 bg-white/80 backdrop-blur shadow-md rounded-xl p-4 space-y-4">
                {/* search */}
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search products..."
                    className="pl-9 pr-3 py-2 w-full border rounded-full shadow-sm focus:outline-none focus:ring focus:border-blue-300 text-sm"
                  />
                </div>

                {/* category quick-links */}
                {categories.map((cat) => (
                  <a
                    key={cat}
                    href={`#${cat}`}
                    className={`flex items-center justify-center gap-2 w-full text-center rounded-full px-4 py-3 text-sm font-semibold transition-all border shadow-md uppercase ${
                      activeCategory === cat
                        ? "bg-[#417d80] text-white border-[#6dbeb0]"
                        : "bg-gradient-to-r from-[#6dbeb0] to-blue-50 text-blue-700 hover:from-[#3d9392] hover:to-blue-100 border-blue-200"
                    }`}
                  >
                    {icons[cat]} {cat}
                  </a>
                ))}
              </div>
            </aside>

            {/* ───── Catalogue */}
            <main className="lg:w-3/4">
              {categories.map((mainCategory) => (
                <section
                  id={mainCategory}
                  key={mainCategory}
                  className="mb-12 scroll-mt-32"
                >
                  <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2 uppercase">
                    {(products.find((p) => p.category === mainCategory)?.categoryName ??
                      mainCategory).toUpperCase()}
                  </h2>

                  {/* FLOORING */}
                  {mainCategory === "flooring" ? (
                    subcategories.map((sub) => {
                      const topProducts = filteredProducts.filter(
                        (p) => p.category === "flooring" && p.subcategory === sub
                      ); 

                      const isCommercial = sub === "commercial";

                      return (
                        <div key={sub} className="mb-8">
                          {/* accordion button */}
                          <button
                            onClick={() => toggleSection(sub)}
                            className="flex items-center w-full text-left font-bold text-gray-700 border-b pb-2 uppercase"
                          >
                            {subIcons[sub]} {sub.replace("-", " ")} Flooring
                            {openSections[sub] ? (
                              <ChevronUp className="ml-auto" />
                            ) : (
                              <ChevronDown className="ml-auto" />
                            )}
                          </button>

                          {/* content */}
                          {openSections[sub] && (
                            <>
                              {/* SPORT & INTERIOR/EXTERIOR – grid */}
                              {!isCommercial && (
                                <div className="mt-4">
                                  {loading ? (
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                      {[...Array(3)].map((_, i) => (
                                        <ProductSkeleton key={i} />
                                      ))}
                                    </div>
                                  ) : topProducts.length ? (
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                      {topProducts.map((p) => (
                                        <ProductCard
                                          key={p.id}
                                          product={p}
                                          onClick={() => handleProductClick(p.id)}
                                        />
                                      ))}
                                    </div>
                                  ) : (
                                    <p className="text-sm text-gray-500 mt-4">
                                      No products yet.
                                    </p>
                                  )}
                                </div>
                              )}

                              {/* COMMERCIAL – nested accordion */}
                              {isCommercial &&
                                commercialSubcats.map((cSub) => {
                                  const cProducts = filteredProducts.filter(
                                    (p) =>
                                      p.category === "flooring" && p.commercial_subcategory === cSub
                                  );
                                  return (
                                    <div key={cSub} className="mt-6">
                                      <button
                                        onClick={() => toggleSection(cSub)}
                                        className="flex items-center w-full text-left font-medium text-gray-600 border-b pb-1"
                                      >
                                        {subIcons[cSub]} {commercialLabels[cSub]}
                                        {openSections[cSub] ? (
                                          <ChevronUp className="ml-auto w-4 h-4" />
                                        ) : (
                                          <ChevronDown className="ml-auto w-4 h-4" />
                                        )}
                                      </button>
                                      {openSections[cSub] && (
                                        <div className="mt-3">
                                          {loading ? (
                                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                              {[...Array(3)].map((_, i) => (
                                                <ProductSkeleton key={i} />
                                              ))}
                                            </div>
                                          ) : cProducts.length ? (
                                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                              {cProducts.map((p) => (
                                                <ProductCard
                                                  key={p.id}
                                                  product={p}
                                                  onClick={() => handleProductClick(p.id)}
                                                />
                                              ))}
                                            </div>
                                          ) : (
                                            <p className="text-sm text-gray-500">
                                              No products yet.
                                            </p>
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  );
                                })}
                            </>
                          )}
                        </div>
                      );
                    })
                  ) : (
                    /* WATERPROOFING / ROCKSOIL */
                    loading ? (
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(3)].map((_, i) => (
                          <ProductSkeleton key={i} />
                        ))}
                      </div>
                    ) : (
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts
                          .filter((p) => p.category === mainCategory)
                          .map((p) => (
                            <ProductCard
                              key={p.id}
                              product={p}
                              onClick={() => handleProductClick(p.id)}
                            />
                          ))}
                      </div>
                    )
                  )}
                </section>
              ))}
            </main>
          </div>
        </div>

        {/* Back-to-Top */}
        {showBackToTop && <BackToTop />}

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#3d9392] to-[#6dbeb0] text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center">
              <h2 className="text-4xl font-bold mb-6">
                Need Help Choosing Products?
              </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Our experts are here to help you select the perfect materials for
                your project
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-white text-[#1b3d5a] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  Get Product Quote
                </button>
                <a 
                  href="tel:+85621773737"
                  className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" /> Call Expert: +856 21 773 737
                </a>
              </div>
            </AnimatedSection>
          </div> 
        </section>
      </div>

      <Footer />

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        source="product_catalogue_page"
      />
    </>
  );
};

export default ProductCataloguePage;