"use client";
import React, { useEffect, useState } from "react";
import { Shield, Layers, Package, Star, CheckCircle, ArrowRight, Award, Truck, Phone, Search, Filter } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';
import QuoteModal from '../../components/QuoteModal';
import { useLanguage } from '../../contexts/LanguageContext';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase';
import Navbar from '../Navbar';
import Footer from '../Footer';

const ProductsPage = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { t } = useLanguage();
  const router = useRouter();
 
  const [waterproofingProducts, setWaterproofingProducts] = useState<any[]>([]);
  const [flooringProducts, setFlooringProducts] = useState<any[]>([]);
  const [rocksoilProducts, setRocksoilProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchFeatured = async () => {
      const { data, error } = await supabase
        .from("products")
        .select(`
          id,
          name,
          price,
          rating,
          description,
          image,
          specifications,
          is_featured,
          category:categories!fk_category(id, name)
        `)
        .eq("is_featured", true)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Fetch error:", error.message);
        return;
      }

      const formatted = (data ?? []).map((item) => ({
        id: item.id,
        name: item.name,
        category: item.category?.name?.toLowerCase() ?? "uncategorized",
        image: item.image || "https://via.placeholder.com/300x200?text=No+Image",
        price: item.price ? `$${item.price}/sqm` : "Price on Request",
        rating: item.rating ?? 0,
        description: item.description ?? "",
        features:
          item.specifications?.map((s: any) => `${s.name}: ${s.value}`) ?? [],
      }));

      setWaterproofingProducts(
        formatted.filter((p) => p.category === "waterproofing").slice(0, 3)
      );
      setFlooringProducts(
        formatted.filter((p) => p.category === "flooring").slice(0, 3)
      );
      setRocksoilProducts(
        formatted.filter((p) => p.category === "rocksoil").slice(0, 3)
      );
    };

    fetchFeatured();
  }, []);

  const productCategories = [
    { 
      id: 'waterproofing',
      icon: Shield,
      title: "Waterproofing Materials",
      subtitle: "Premium protection solutions",
      description: "Advanced waterproofing systems designed to provide long-lasting protection against moisture damage.",
      image: "https://qawxuytlwqmsomsqlrsc.supabase.co/storage/v1/object/public/image//Product_waterproofing.png",
      products: [
        "Liquid Applied Membranes",
        "Sheet Membranes",
        "Crystalline Waterproofing",
        "Injection Resins",
        "Sealants & Coatings",
        "Drainage Systems"
      ],
      applications: [
        "Roofing Systems",
        "Foundation Protection",
        "Basement Waterproofing",
        "Swimming Pools",
        "Bathrooms & Wet Areas",
        "Industrial Facilities"
      ],
      brands: ["Sika", "BASF", "Mapei", "Fosroc"],
      priceRange: "$25 - $150 per sqm",
      warranty: "10-15 years",
      bgColor: "bg-blue-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      id: 'flooring',
      icon: Layers,
      title: "Flooring Materials",
      subtitle: "Elegant and durable surfaces",
      description: "Comprehensive range of premium flooring materials for residential, commercial, and industrial applications.",
      image: "https://qawxuytlwqmsomsqlrsc.supabase.co/storage/v1/object/public/image//FlooringHomePage.png",
      products: [
        "Ceramic & Porcelain Tiles",
        "Natural Stone",
        "Hardwood Flooring",
        "Laminate Flooring",
        "Vinyl & LVT",
        "Epoxy Coatings"
      ],
      applications: [
        "Residential Homes",
        "Commercial Spaces",
        "Industrial Facilities",
        "Healthcare Centers",
        "Educational Institutions",
        "Hospitality Venues"
      ],
      brands: ["Porcelanosa", "Mohawk", "Armstrong", "Tarkett"],
      priceRange: "$15 - $200 per sqm",
      warranty: "5-25 years",
      bgColor: "bg-orange-500",
      bgGradient: "from-orange-50 to-amber-50"
    },
    {
      id: 'rocksoil',
      icon: Package,
      title: "Rocksoil Materials",
      subtitle: "Geotechnical stability & tunneling support",
      description: "Engineered materials designed for soil stabilization, tunneling, and ground improvement. Our Rocksoil products are trusted in infrastructure, mining, and civil engineering projects.",
      image: "https://qawxuytlwqmsomsqlrsc.supabase.co/storage/v1/object/public/image//RocksoilProduct.png",
      products: [
        "Soil Stabilizers",
        "Rock Bolts & Anchors",
        "Geotextiles & Geogrids",
        "Shotcrete Materials",
        "Tunnel Linings",
        "Grouting Compounds"
      ],
      applications: [
        "Tunnels & Underground Works",
        "Slope Stabilization",
        "Road & Rail Embankments",
        "Mining Operations",
        "Bridge Foundations",
        "Soil Improvement Zones"
      ],
      brands: ["Rocksoil", "Geobrugg", "Maccaferri", "Tensar"],
      priceRange: "$35 - $300 per unit",
      warranty: "5-10 years",
      bgColor: "bg-green-500",
      bgGradient: "from-green-50 to-emerald-50"
    }  
  ];

  const qualityFeatures = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Only the finest materials from trusted international brands"
    },
    {
      icon: Star,
      title: "Expert Selection",
      description: "Carefully curated products tested for Laos climate conditions"
    },
    {
      icon: Truck,
      title: "Reliable Supply",
      description: "Consistent availability with efficient logistics network"
    },
    {
      icon: CheckCircle,
      title: "Technical Support",
      description: "Professional guidance for product selection and application"
    }
  ];

  const handleViewProductCategory = (categoryId: string) => {
    router.push(`/product-catalogue#${categoryId}`);
    setTimeout(() => {
      const el = document.getElementById(categoryId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleViewProductDetail = (productId: string) => {
    router.push(`/products/item/${productId}`);
  };

  const handleDownloadCatalog = () => {
    router.push('/product-catalogue');
  };

  const handleCallExpert = () => {
    window.open('tel:+85621773737', '_self');
  };

  /* ───────── render ───────── */
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">

        {/* ─── Hero ─── */}
        <section className="relative py-32 bg-gradient-to-br from-orange-600 via-orange-500 to-blue-600 text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://qawxuytlwqmsomsqlrsc.supabase.co/storage/v1/object/public/image//Product_waterproofing.png"
              alt="Premium construction materials"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#336675]/80 to-[#3d9392]/80" />
          </div>

          <div className="relative z-10 container mx-auto px-4">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 drop-shadow-2xl">
                Premium <span className="text-[#6dbeb0]">Products</span>
              </h1>
              <p className="text-2xl text-orange-100 mb-8 leading-relaxed drop-shadow-lg">
                High-quality construction materials for lasting results
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-[#3d9392] hover:bg-[#6dbeb0] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Product Quote
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>

                <button
                  onClick={handleDownloadCatalog}
                  className="border-2 border-white/40 hover:bg-white/15 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  Our Product Catalogue
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Product <span className="text-[#3d9392]">Categories</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive range of premium construction materials
              </p>
            </AnimatedSection>

            <div className="space-y-20">
              {productCategories.map((category, index) => {
                const IconComponent = category.icon;
                const isReversed = index % 2 === 1;
                
                return (
                  <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content */}
                    <div className={isReversed ? 'lg:col-start-2' : ''}>
                      <AnimatedSection animation={isReversed ? "fade-left" : "fade-right"}>
                        <div className="mb-6">
                          <div className="flex items-center mb-4">
                            <div className={`${category.bgColor} p-4 rounded-xl mr-4`}>
                              <IconComponent className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <h3 className="text-3xl font-bold text-gray-900">{category.title}</h3>
                              <p className="text-lg text-orange-600 font-medium">{category.subtitle}</p>
                            </div>
                          </div>
                          <p className="text-gray-600 text-lg leading-relaxed mb-8">{category.description}</p>
                        </div>

                        {/* Products & Applications */}
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-4">Product Range:</h4>
                            <div className="space-y-2">
                              {category.products.map((product, productIndex) => (
                                <div key={productIndex} className="flex items-center">
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                                  <span className="text-gray-700">{product}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-4">Applications:</h4>
                            <div className="space-y-2">
                              {category.applications.map((application, appIndex) => (
                                <div key={appIndex} className="flex items-center">
                                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div> 
                                  <span className="text-gray-600">{application}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Product Details */}
                        <div className={`bg-gradient-to-r ${category.bgGradient} p-6 rounded-2xl`}>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Trusted Brands:</h4>
                              <div className="flex flex-wrap gap-2">
                                {category.brands.map((brand, brandIndex) => (
                                  <span key={brandIndex} className="bg-white/80 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                                    {brand}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Price Range:</span>
                                <span className="font-bold text-orange-600">{category.priceRange}</span>
                              </div>  
                              <div className="flex justify-between">
                                <span className="text-gray-600">Warranty:</span>
                                <span className="font-semibold text-gray-900">{category.warranty}</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* View All Products Button */}
                          <div className="mt-6 text-center">
                            <button 
                              onClick={() => handleViewProductCategory(category.id)}
                              className="bg-[#3d9392] hover:bg-[#6dbeb0] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
                            >
                              View All {category.title}
                              <ArrowRight className="w-5 h-5 ml-2" />
                            </button>
                          </div>
                        </div>
                      </AnimatedSection>
                    </div>

                    {/* Image */}
                    <div className={isReversed ? 'lg:col-start-1' : ''}>
                      <AnimatedSection animation={isReversed ? "fade-right" : "fade-left"} delay={200}>
                        <div 
                          className="relative group cursor-pointer"
                          onClick={() => handleViewProductCategory(category.id)}
                        >
                          <img 
                            src={category.image}
                            alt={category.title}
                            className="w-full h-96 object-cover rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
                          <div className="absolute bottom-6 left-6 text-white">
                            <h4 className="text-xl font-bold mb-2">{category.title}</h4>
                            <p className="text-white/90">{category.subtitle}</p>
                          </div>
                        </div>
                      </AnimatedSection>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Featured <span className="text-[#3d9392]">Products</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most popular and trusted construction materials
              </p>
            </AnimatedSection>

            {[
              { title: "Waterproofing", items: waterproofingProducts },
              { title: "Flooring", items: flooringProducts },
              { title: "Rocksoil", items: rocksoilProducts },
            ].map((group, gIdx) =>
              group.items.length ? (
                <div key={gIdx} className="mb-16">
                  <h3 className="text-2xl font-bold text-[#3d9392] mb-6">
                    {group.title}
                  </h3>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {group.items.map((product, i) => (
                      <AnimatedSection
                        key={product.id}
                        animation="fade-up"
                        delay={i * 150}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all
                                   duration-300 transform hover:-translate-y-2 overflow-hidden"
                      >
                        {/* Card links to product-item-details?id by id */}
                        <a
                          href={`/product-item-details?id=${product.id}`}
                          className="block relative h-48 cursor-pointer"
                          style={{ textDecoration: "none" }}
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded-full">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-500 mr-1" />
                              <span className="text-sm font-medium">{product.rating}</span>
                            </div>
                          </div>
                        </a>
                        <div className="p-6">
                          {/* Title links to product-item-details?id by id */}
                          <a
                            href={`/product-item-details?id=${product.id}`}
                            className="text-xl font-bold text-gray-900 mb-2 cursor-pointer hover:text-orange-500 transition-colors block"
                            style={{ textDecoration: "none" }}
                          >
                            {product.name}
                          </a>
                          <p className="text-gray-600 text-sm mb-4">
                            {product.description}
                          </p>

                          <div className="space-y-2 mb-4">
                            {product.features.slice(0, 3).map((f: string, fi: number) => (
                              <div
                                key={fi}
                                className="flex items-center text-sm text-gray-600"
                              >
                                <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                                {f}
                              </div>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-[#6dbeb0]">
                              {product.price}
                            </span>
                            <button
                              onClick={() => setIsQuoteModalOpen(true)}
                              className="bg-[#3d9392] hover:bg-[#6dbeb0] text-white
                                         px-4 py-2 rounded-lg font-medium transition-colors"
                            >
                              Get Quote
                            </button>
                          </div>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              ) : null
            )}
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our <span className="text-[#3d9392]">Products</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Quality assurance and customer satisfaction are our top priorities
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {qualityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <AnimatedSection
                    key={index}
                    animation="scale"
                    delay={index * 150}
                    className="text-center"
                  >
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="bg-orange-100 p-4 rounded-xl inline-flex mb-4">
                        <IconComponent className="w-8 h-8 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* ─── CTA ─── */}
        <section className="py-20 bg-gradient-to-r from-[#3d9392] to-[#6dbeb0] text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center">
              <h2 className="text-4xl font-bold mb-6">
                Need Help Choosing Products?
              </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Our experts are here to help you select the perfect materials for your project
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-white text-[#1b3d5a] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Get Product Quote
                </button>
                {/* Button opens phone dialer on mobile, does nothing on desktop */}
                <button
                  type="button"
                  className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                      if (isMobile) {
                        window.location.href = "tel:+85621773737";
                      }
                    }
                  }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Expert: +856&nbsp;21&nbsp;773&nbsp;737
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div> 

      <Footer />

      {/* ─── Quote Modal ─── */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        source="products_page"
      />
    </>
  );
};

export default ProductsPage;