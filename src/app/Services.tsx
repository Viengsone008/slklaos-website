"use client";
import React from 'react';
import { Building2, Shield, Layers, CheckCircle, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';
import { useRouter } from 'next/navigation';

const Services = () => {
  const { t } = useLanguage();
  const router = useRouter();

  const services = [
    {
      icon: Building2,
      title: "Design & Construction",
      description: "Complete construction solutions for residential, commercial, and industrial projects. From concept to completion, we handle every aspect of your building needs.",
      features: [
        "Architectural Design & Planning",
        "Structural Engineering",
        "Project Management",
        "Quality Control & Inspection",
        "Interior Design Services",
        "Landscape Architecture"
      ],
      image: "https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=1920"
    },
    {
      icon: Shield,
      title: "Waterproofing Solutions",
      description: "Premium waterproofing solutions to protect your property from water damage. We supply and install high-quality waterproofing materials for all applications.",
      features: [
        "Roof Waterproofing",
        "Foundation Protection",
        "Basement Waterproofing",
        "Bathroom & Kitchen Sealing",
        "Swimming Pool Waterproofing",
        "Industrial Waterproofing"
      ],
      image: "https://qawxuytlwqmsomsqlrsc.supabase.co/storage/v1/object/public/image//WaterproofingService.png"
    },
    {
      icon: Layers,
      title: "Flooring Materials & Installation",
      description: "Extensive range of premium flooring materials for every space. We provide high-quality flooring solutions that combine aesthetics with durability.",
      features: [
        "Ceramic & Porcelain Tiles",
        "Natural Stone Flooring",
        "Hardwood & Laminate",
        "Vinyl & LVT Flooring",
        "Epoxy Floor Coatings",
        "Custom Design Solutions"
      ],
      image: "https://qawxuytlwqmsomsqlrsc.supabase.co/storage/v1/object/public/image//FlooringHomePage.png"
    }
  ];

  const handleLearnMore = (serviceTitle: string) => {
    router.push('/services');
  };

  return (
    <section id="services" className="py-20 bg-[#e5f1f1]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" repeatOnScroll={true} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#3d9392]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive construction and building material solutions for all your needs
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <AnimatedSection 
                key={index}
                animation="fade-up"
                delay={index * 200}
                repeatOnScroll={true}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                {/* Image - Clickable */}
                <AnimatedSection animation="zoom-in" delay={index * 200 + 100} repeatOnScroll={true}>
                  <div 
                    className="relative h-48 overflow-hidden cursor-pointer"
                    onClick={() => handleLearnMore(service.title)}
                  >
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-[#6dbeb0] p-3 rounded-lg">  {/* icon */}
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Content */}
                <div className="p-8">
                  <AnimatedSection animation="fade-up" delay={index * 200 + 200} repeatOnScroll={true}>
                    {/* Title - Clickable */}
                    <h3 
                      className="text-2xl font-bold text-gray-900 mb-4 cursor-pointer hover:text-[#6dbeb0] transition-colors"
                      onClick={() => handleLearnMore(service.title)}
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                  </AnimatedSection>

                  {/* Features */}
                  <AnimatedSection animation="fade-up" delay={index * 200 + 300} repeatOnScroll={true}>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <AnimatedSection 
                          key={featureIndex}
                          animation="fade-right"
                          delay={index * 200 + 400 + (featureIndex * 50)}
                          repeatOnScroll={true}
                        >
                          <li className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        </AnimatedSection>
                      ))}
                    </ul>
                  </AnimatedSection>

                  <AnimatedSection animation="scale" delay={index * 200 + 500} repeatOnScroll={true}>
                    <button 
                      onClick={() => handleLearnMore(service.title)}
                      className="w-full bg-[#1b3d5a] hover:bg-[#1b3d5a]/90 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </AnimatedSection>
                </div>
              </AnimatedSection>
            );
          })}
        </div> 
      </div> 
    </section>
  );
};

export default Services;