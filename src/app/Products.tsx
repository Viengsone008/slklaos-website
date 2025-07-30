"use client";
import React, { useState } from 'react';
import { Building2, Shield, Layers, CheckCircle, ArrowRight, Star, Award, Truck, Package } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import QuoteModal from '../components/QuoteModal';
import { useLanguage } from '../contexts/LanguageContext';
import { useRouter } from 'next/navigation';

const Products = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const { t } = useLanguage();
  const router = useRouter();

  const productCategories = [
    {
      id: 'waterproofing',
      icon: Shield,
      title: "Waterproofing Materials",
      subtitle: "Premium protection solutions",
      description: "Advanced waterproofing systems designed to provide long-lasting protection against moisture damage. Our products are sourced from leading international manufacturers.",
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
      features: [
        "UV Resistant",
        "Crack Bridging",
        "Easy Application",
        "Long-lasting Protection"
      ],
      bgGradient: "from-light to-white",
      iconColor: "text-primary",
      accentColor: "bg-primary"
    },
    {
      id: 'flooring',
      icon: Layers,
      title: "Flooring Materials",
      subtitle: "Elegant and durable surfaces",
      description: "Comprehensive range of premium flooring materials for residential, commercial, and industrial applications. We offer a wide selection of high-quality options.",
      image: "https://qawxuytlwqmsomsqlrsc.supabase.co/storage/v1/object/public/image//FlooringProduct.png", 
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
      features: [ 
        "Slip Resistant",
        "Stain Proof",
        "Low Maintenance",
        "Durable Construction"
      ],
      bgGradient: "from-light to-white",
      iconColor: "text-tertiary",
      accentColor: "bg-tertiary"
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
  features: [
    "High Load-Bearing Capacity",
    "Corrosion Resistant",
    "Fast Application",
    "Certified Performance"
  ],
        bgGradient: "from-light to-white",
      iconColor: "text-primary",
      accentColor: "bg-primary"
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
    }
  ];  

const handleViewProductDetails = (categoryId: string) => {
    router.push(`/product-catalogue#${categoryId}`);
};



const handleDownloadCatalog = () => {
    router.push('/product-catalogue');
  };

  return (
    <>
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <AnimatedSection animation="fade-up" className="text-center mb-16">
           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#3d9392]">Products</span>
          </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              High-quality construction materials for lasting results
            </p>
          </AnimatedSection>

          {/* Product Categories */}
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
                        <AnimatedSection animation="bounce-in" delay={200}>
                          <div className="flex items-center mb-4">
                            <div className={`${category.accentColor} p-3 rounded-xl mr-4`}>
                              <IconComponent className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <h3 className="text-3xl font-bold text-gray-900">
                                {category.title}
                              </h3>
                              <p className={`text-lg ${category.iconColor} font-medium`}>
                                {category.subtitle}
                              </p>
                            </div>
                          </div>
                        </AnimatedSection>
                        
                        <AnimatedSection animation="fade-up" delay={300}>
                          <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {category.description}
                          </p>
                        </AnimatedSection>
                      </div>

                      {/* Product Types */}
                      <AnimatedSection animation={isReversed ? "fade-left" : "fade-right"} delay={400}>
                        <div className="mb-8">
                          <h4 className="text-xl font-semibold text-gray-900 mb-4">Product Range:</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {category.products.map((product, productIndex) => (
                              <AnimatedSection 
                                key={productIndex}
                                animation="fade-right"
                                delay={500 + (productIndex * 50)}
                              >
                                <div className="flex items-center">
                                  <CheckCircle className={`w-5 h-5 ${category.iconColor} mr-3 flex-shrink-0`} />
                                  <span className="text-gray-700">{product}</span>
                                </div>
                              </AnimatedSection>
                            ))}
                          </div>
                        </div>
                      </AnimatedSection>

                      {/* Applications */}
                      <AnimatedSection animation={isReversed ? "fade-left" : "fade-right"} delay={600}>
                        <div className="mb-8">
                          <h4 className="text-xl font-semibold text-gray-900 mb-4">Applications:</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {category.applications.map((application, appIndex) => (
                              <AnimatedSection 
                                key={appIndex}
                                animation="fade-right"
                                delay={700 + (appIndex * 50)}
                              >
                                <div className="flex items-center">
                                  <div className={`w-2 h-2 ${category.accentColor} rounded-full mr-3 flex-shrink-0`}></div>
                                  <span className="text-gray-600">{application}</span>
                                </div>
                              </AnimatedSection>
                            ))}
                          </div>
                        </div>
                      </AnimatedSection>

                      {/* Key Features */}
                      <AnimatedSection animation="scale" delay={800}>
                        <div className={`bg-gradient-to-r${category.bgGradient} backdrop-blur-sm p-6 rounded-2xl border border-white/20`}>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                          <div className="grid grid-cols-2 gap-4">
                            {category.features.map((feature, featureIndex) => (
                              <AnimatedSection 
                                key={featureIndex}
                                animation="fade-up"
                                delay={900 + (featureIndex * 50)}
                              >
                                <div className="flex items-center">
                                  <Star className={`w-4 h-4 ${category.iconColor} mr-2 flex-shrink-0`} />
                                  <span className="text-gray-700 text-sm font-medium">{feature}</span>
                                </div>
                              </AnimatedSection>
                            ))}
                          </div>
                          
                          {/* View Details Button */}
                          <div className="mt-6 text-center">
                            <button 
                              onClick={() => handleViewProductDetails(category.id)}
                              className={`${category.accentColor} text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:opacity-90 transform hover:scale-105 flex items-center mx-auto`}
                            >
                              View Product Details
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                          </div>
                        </div>
                      </AnimatedSection>
                    </AnimatedSection>
                  </div>

                  {/* Image */}
                  <div className={isReversed ? 'lg:col-start-1' : ''}>
                    <AnimatedSection animation={isReversed ? "fade-right" : "fade-left"} delay={200}>
                      <div 
                        className="relative group cursor-pointer" 
                        onClick={() => handleViewProductDetails(category.id)}
                      >
                        <img 
                          src={category.image}
                          alt={category.title}
                          className="w-full h-96 object-cover rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl transition-all duration-500 group-hover:from-black/40"></div>
                        
                        {/* Floating Badge */}
                        <AnimatedSection animation="bounce-in" delay={400}>
                          <div className="absolute top-6 left-6 transition-all duration-500 group-hover:scale-110">
                            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                              <span className={`text-sm font-semibold ${category.iconColor}`}>
                                Premium Quality
                              </span>
                            </div>
                          </div>
                        </AnimatedSection>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/0 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                          <AnimatedSection animation="zoom-in" delay={0}>
                            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                              <div className="text-center text-white">
                                <IconComponent className="w-12 h-12 mx-auto mb-3 text-primary" />
                                <h4 className="text-lg font-bold mb-2">{category.title}</h4>
                                <p className="text-sm text-white/90">{category.subtitle}</p>
                              </div>
                            </div>
                          </AnimatedSection>
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quality Assurance Section */}
          <AnimatedSection animation="fade-up" delay={400} className="mt-20">
            <div className="bg-gradient-to-br from-light to-white rounded-3xl p-12 border border-gray-200">
              <AnimatedSection animation="fade-up" className="text-center mb-12">
                 <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Quality <span className="text-[#3d9392]">Assurance</span>
          </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  We partner with leading manufacturers to bring you the best construction materials
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-3 gap-8">
                {qualityFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <AnimatedSection
                      key={index}
                      animation="scale"
                      delay={index * 150}
                      className="text-center"
                    >
                      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <AnimatedSection animation="bounce-in" delay={index * 150 + 200}>
                          <div className="bg-primary/10 p-4 rounded-xl inline-flex mb-4">
                            <IconComponent className="w-8 h-8 text-primary" />
                          </div>
                        </AnimatedSection>
                        <AnimatedSection animation="fade-up" delay={index * 150 + 300}>
                          <h4 className="text-xl font-bold text-gray-900 mb-3">
                            {feature.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </AnimatedSection>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>

          {/* CTA Section */}
          <AnimatedSection animation="fade-up" delay={600} className="text-center mt-16">
            <div className="bg-[#6dbeb0] text-white p-12 rounded-3xl">
              <AnimatedSection animation="fade-up">
                <h3 className="text-3xl font-bold mb-4">
                  Need Construction Materials?
                </h3>
                <p className="text-xl text-light mb-8 max-w-2xl mx-auto">
                  Contact us for premium waterproofing and flooring materials with expert advice
                </p>
              </AnimatedSection>
              <AnimatedSection animation="scale" delay={200}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="bg-[#1b3d5a] hover:bg-tertiary text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Get Product Quote
                  </button>
                  <button 
                    onClick={handleDownloadCatalog}
                    className="bg-[#e5f1f1] border-2 border-white/30 hover:bg-white/10 text-[#1b3d5a] px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                  >
                   Our Products Catalogue
                  </button>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)}
        source="products_get_product_quote"
      />
    </>
  );
};

export default Products;