"use client";
import React, { useState, useEffect } from 'react';
import { Building2, Shield, Layers, CheckCircle, ArrowRight, Star, Award, Users, Clock } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';
import QuoteModal from '../../components/QuoteModal';
import { useLanguage } from '../../contexts/LanguageContext';
import { useRouter, useSearchParams } from 'next/navigation';
import Navbar from '../Navbar';
import Footer from '../Footer';

const ServicesPage = () => { 
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const { t } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();

  const slugify = (str: string) =>
    str.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-');

  useEffect(() => {
    const serviceTitle = searchParams.get('service');
    if (serviceTitle) {
      const id = slugify(serviceTitle);
      const el = document.getElementById(id);

      if (el) {
        // Run after 2 animation frames to ensure render is complete
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
        });
      }
    }
  }, [searchParams]);

  const services = [
    {
      icon: Building2,
      title: "Design & Construction",
      subtitle: "Complete construction solutions from concept to completion",
      description: "Our comprehensive design and construction services cover everything from initial planning to final handover. We specialize in residential, commercial, and industrial projects.",
      image: "https://qawxuytlwqmsomsqlrsc.supabase.co/storage/v1/object/public/image/Services/design01.jpg", 
      features: [
        "Architectural Design & Planning",
        "Structural Engineering",
        "Project Management",
        "Quality Control & Inspection",
        "Interior Design Services",
        "Landscape Architecture"
      ],
      benefits: [
        "15+ years of experience",
        "Licensed professionals",
        "On-time delivery guarantee",
        "Comprehensive warranty"
      ],
      pricing: "Starting from $50,000",
      timeline: "3-12 months",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      icon: Shield,
      title: "Waterproofing Solutions",
      subtitle: "Advanced waterproofing systems for lasting protection",
      description: "Protect your investment with our state-of-the-art waterproofing solutions. We use premium materials and proven techniques to ensure long-lasting protection.",
      image: "https://qawxuytlwqmsomsqlrsc.supabase.co/storage/v1/object/public/image//WaterproofingService.png",
      features: [
        "Roof Waterproofing",
        "Foundation Protection",
        "Basement Waterproofing",
        "Bathroom & Kitchen Sealing",
        "Swimming Pool Waterproofing",
        "Industrial Waterproofing"
      ],
      benefits: [
        "10-year warranty",
        "Premium materials",
        "Expert installation",
        "Maintenance support"
      ],
      pricing: "Starting from $5,000",
      timeline: "1-4 weeks",
      bgGradient: "from-cyan-50 to-blue-50"
    },
    {
      icon: Layers,
      title: "Flooring Materials & Installation",
      subtitle: "Premium flooring solutions for every space",
      description: "Transform your spaces with our extensive range of premium flooring materials. From luxury tiles to hardwood, we have the perfect solution for your needs.",
      image: "https://qawxuytlwqmsomsqlrsc.supabase.co/storage/v1/object/public/image//ServiceFloor.png",
      features: [
        "Ceramic & Porcelain Tiles",
        "Natural Stone Flooring",
        "Hardwood & Laminate",
        "Vinyl & LVT Flooring",
        "Epoxy Floor Coatings",
        "Custom Design Solutions"
      ],
      benefits: [
        "Wide material selection",
        "Professional installation",
        "Competitive pricing",
        "After-sales service"
      ],
      pricing: "Starting from $15/sqm",
      timeline: "1-3 weeks",
      bgGradient: "from-orange-50 to-amber-50"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Free initial consultation to understand your needs and requirements",
      icon: Users
    },
    {
      step: "02",
      title: "Planning",
      description: "Detailed planning and design phase with 3D visualizations",
      icon: Building2
    },
    {
      step: "03",
      title: "Execution",
      description: "Professional execution with regular progress updates",
      icon: CheckCircle
    },
    {
      step: "04",
      title: "Completion",
      description: "Final inspection, handover, and ongoing support",
      icon: Award
    }
  ];

  const handleViewPortfolio = () => {
    router.push('/projects');
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-[#6dbeb0] to-[#417d80] text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://qawxuytlwqmsomsqlrsc.supabase.co/storage/v1/object/public/image//Services.jpg"
              alt="Construction services background"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#3d9392]/80 to-[#1b3d5a]/80"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 drop-shadow-2xl">
                Our <span className="text-[#6dbeb0]">Services</span>
              </h1>
              <p className="text-2xl text-blue-100 mb-8 leading-relaxed drop-shadow-lg">
                Comprehensive construction solutions tailored to your needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-[#3d9392] hover:bg-[#6dbeb0] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button 
                  onClick={handleViewPortfolio}
                  className="border-2 border-white/40 hover:bg-white/15 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  View Portfolio
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What We <span className="text-[#3d9392]">Offer</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From design to completion, we provide end-to-end construction solutions
              </p>
            </AnimatedSection>

            <div className="space-y-20">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const isReversed = index % 2 === 1;
                
                return (
                  <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content */}
                    <div className={isReversed ? 'lg:col-start-2' : ''}>
                      <AnimatedSection animation={isReversed ? "fade-left" : "fade-right"}>
                        <div className="mb-6">
                          <div className="flex items-center mb-4">
                            <div className="bg-orange-500 p-4 rounded-xl mr-4">
                              <IconComponent className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                              <p className="text-lg text-orange-600 font-medium">{service.subtitle}</p>
                            </div>
                          </div>
                          <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.description}</p>
                        </div>

                        {/* Features */}
                        <div className="mb-8">
                          <h4 className="text-xl font-semibold text-gray-900 mb-4">Services Include:</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Benefits & Pricing */}
                        <div className={`bg-gradient-to-r ${service.bgGradient} p-6 rounded-2xl`}>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                              <ul className="space-y-2">
                                {service.benefits.map((benefit, benefitIndex) => (
                                  <li key={benefitIndex} className="flex items-center text-gray-700">
                                    <Star className="w-4 h-4 text-orange-500 mr-2" />
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <div className="bg-white/80 p-4 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-gray-600">Starting Price:</span>
                                  <span className="font-bold text-orange-600">{service.pricing}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-gray-600">Timeline:</span>
                                  <span className="font-semibold text-gray-900">{service.timeline}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </AnimatedSection>
                    </div>

                    {/* Image */}
                    <div className={isReversed ? 'lg:col-start-1' : ''}>
                      <AnimatedSection animation={isReversed ? "fade-right" : "fade-left"} delay={200}>
                        <div className="relative group">
                          <img 
                            src={service.image}
                            alt={service.title}
                            className="w-full h-96 object-cover rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
                          <div className="absolute bottom-6 left-6 text-white">
                            <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                            <p className="text-white/90">{service.subtitle}</p>
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

       {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-[#3d9392]">Process</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A streamlined approach to deliver exceptional results
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <AnimatedSection
                    key={index}
                    animation="fade-up"
                    delay={index * 150}
                    className="text-center"
                  >
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-orange-600" />
                      </div>
                      <div className="text-3xl font-bold text-orange-500 mb-2">{step.step}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

       {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#3d9392] to-[#6dbeb0] text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get in touch with our experts for a free consultation and detailed quote & to discuss your project needs and discover how we can help you achieve your construction goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-[#3d9392] hover:bg-[#6dbeb0] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Quote
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
                  Call Us Now +856 21 773 737
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>

      <Footer />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        source="services_page"
      />
    </>
  );
};

export default ServicesPage;