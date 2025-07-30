"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, Building2, Shield, Layers } from 'lucide-react';
import QuoteModal from '../components/QuoteModal';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth > 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  return (
    <>
      <section id="home" className="relative min-h-screen text-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Modern house construction and design background"
            className={`w-full h-full object-cover object-center ${isDesktop ? 'bg-zoom-animate' : ''}`}
            style={{
              transform: !isDesktop ? 'scale(1.05)' : undefined
            }}
          />
          {/* Enhanced overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-black/30"></div>
          {/* Subtle animated overlay - only on desktop */}
          <div className={`absolute inset-0 bg-gradient-to-br from-[#1b3d5a]/20 via-transparent to-[#3d9392]/20 ${
            window.innerWidth > 768 ? 'animate-background-pulse' : ''
          }`}></div>
        </div>

        {/* Simplified Floating Particles - Reduced for Mobile */}
        <div className="particles-container">
          {[...Array(window.innerWidth > 768 ? 15 : 8)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                background: `rgba(255, 255, 255, ${0.1 + Math.random() * 0.2})`,
                borderRadius: '50%',
                position: 'absolute',
                pointerEvents: 'none',
                animation: window.innerWidth > 768 
                  ? `particle-float ${8 + Math.random() * 4}s ease-in-out infinite`
                  : `particle-float ${12 + Math.random() * 6}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 8}s`
              }}
            />
          ))}
        </div>
        
        {/* Main Content Container with Mobile-Safe Padding */}
        <div className="relative z-10 container mx-auto px-4 pt-20 pb-16 lg:pt-8 lg:pb-16">
          <div className="flex flex-col items-start min-h-[calc(100vh-6rem)] lg:min-h-[65vh] relative">
            {/* Main Content - All Left Aligned */}
            <div className="w-full flex flex-col justify-start z-10 max-w-4xl">
              <div className="mb-6">
                {/* Main Title */}
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 mt-12 lg:mt-46 animate-fade-in">
                  <span className="block text-white drop-shadow-2xl">SLK Trading & Design</span>
                  <span className="block text-[#6dbeb0] drop-shadow-2xl">Construction</span>
                </h1>
                {/* Company Badge */}
                <div className="inline-flex items-center glass-morphism text-[#e5f1f1] px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse border border-[#6dbeb0]/30 shadow-glow">
                  <Building2 className="w-4 h-4 mr-2" />
                  Leading Construction Company in Laos
                </div>
                {/* Description */}
                <p className="text-xl text-white/95 mb-8 leading-relaxed max-w-xl drop-shadow-lg">
                  Your Trusted Partner in Construction & Materials Supply. Specializing in construction, waterproofing, and flooring solutions with over 10 years of experience in Laos.
                </p>
                <p className="text-xl text-white/95 mb-8 leading-relaxed max-w-xl drop-shadow-lg">
                  We deliver quality design, durable construction, and top-grade waterproofing solutions across Laos.
                </p>
              </div>
              {/* Key Services Icons */}
              <div className="flex flex-wrap gap-4 lg:gap-6 mb-8">
                <div className="flex items-center text-white/90 glass-morphism px-3 py-2 rounded-lg text-sm lg:text-base border border-white/20 shadow-glow-white">
                  <Building2 className="w-5 h-5 lg:w-6 lg:h-6 mr-2 text-[#6dbeb0]" />
                  <span>Design & Construction</span>
                </div>
                <div className="flex items-center text-white/90 glass-morphism px-3 py-2 rounded-lg text-sm lg:text-base border border-white/20 shadow-glow-white">
                  <Shield className="w-5 h-5 lg:w-6 lg:h-6 mr-2 text-[#6dbeb0]" />
                  <span>Waterproofing Materials</span>
                </div>
                <div id="flooring-materials-card" className="flex items-center text-white/90 glass-morphism px-3 py-2 rounded-lg text-sm lg:text-base border border-white/20 shadow-glow-white min-w-[185px] justify-center">
                  <Layers className="w-5 h-5 lg:w-6 lg:h-6 mr-2 text-[#6dbeb0]" />
                  <span>Flooring Materials</span>
                </div>
              </div>
              {/* CTA Buttons */}
              <div className="flex flex-row gap-3 items-center mb-8">
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-[#6dbeb0] hover:bg-[#3d9392] text-white px-4 lg:px-5 py-2 lg:py-2.5 rounded-md font-semibold flex items-center justify-center text-sm lg:text-base transition-all duration-300 transform hover:scale-105 shadow-glow hover:shadow-glow w-auto min-w-[250px]"
                >
                  Get Free Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <button 
                  onClick={() => {
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="border-2 border-white/40 hover:bg-white/15 glass-morphism hover:border-white text-white px-4 lg:px-5 py-2 lg:py-2.5 rounded-md font-semibold text-sm lg:text-base transition-all duration-300 shadow-glow-white w-auto min-w-[250px]"
                >
                  Our Projects
                </button>
              </div>
            </div>

            {/* Right Content - Stats Cards */}
            <div className="w-full lg:w-auto lg:absolute lg:top-1/2 lg:right-0 lg:-translate-y-1/2 flex justify-right lg:justify-end z-20">
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                {/* Experience Card */}
                <div className="glass-morphism p-8 lg:p-6 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 shadow-glow-white min-w-[250px] lg:min-w-[420px] lg:w-[320px]">
                  <div className="text-3xl lg:text-4xl font-bold text-[#6dbeb0] mb-2 drop-shadow-lg">10+</div>
                  <div className="text-white/95 font-medium text-sm lg:text-base drop-shadow-md">Years of Experience</div>
                  <div className="text-white/80 text-xs lg:text-sm drop-shadow-md">In Construction Industry</div>
                </div>
                {/* Projects Card */}
                <div className="glass-morphism p-8 lg:p-6 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 shadow-glow-white min-w-[250px] lg:min-w-[420px] lg:w-[320px]">
                  <div className="text-3xl lg:text-4xl font-bold text-[#6dbeb0] mb-2 drop-shadow-lg">200+</div>
                  <div className="text-white/95 font-medium text-sm lg:text-base drop-shadow-md">Projects Completed</div>
                  <div className="text-white/80 text-xs lg:text-sm drop-shadow-md">Across Various Sectors</div>
                </div>
                {/* Satisfaction Card */}
                <div className="glass-morphism p-8 lg:p-6 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 shadow-glow-white min-w-[250px] lg:min-w-[420px] lg:w-[320px]">
                  <div className="text-3xl lg:text-4xl font-bold text-[#6dbeb0] mb-2 drop-shadow-lg">100%</div>
                  <div className="text-white/95 font-medium text-sm lg:text-base drop-shadow-md">Client Satisfaction</div>
                  <div className="text-white/80 text-xs lg:text-sm drop-shadow-md">Exceeding Expectations</div>
                </div>
                {/* Support Card */}
                <div className="glass-morphism p-8 lg:p-6 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 shadow-glow-white min-w-[250px] lg:min-w-[420px] lg:w-[320px]">
                  <div className="text-3xl lg:text-4xl font-bold text-[#6dbeb0] mb-2 drop-shadow-lg">24/7</div>
                  <div className="text-white/95 font-medium text-sm lg:text-base drop-shadow-md">Support Available</div>
                  <div className="text-white/80 text-xs lg:text-sm drop-shadow-md">Always Here For You</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
          </div>  
        </div>
      </section>

      

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)}
        source="hero_get_free_quote"
      />
    </>
  );
};

export default Hero;