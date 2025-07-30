"use client";
import React from 'react';
import { Award, Users, Target, Clock } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';
import { useRouter } from 'next/navigation';

const About = () => {
  const { t } = useLanguage();
  const router = useRouter();

  const stats = [
    {
      icon: Award,
      number: "10+",
      label: "Years of Experience",
      description: "Proven track record in Laos construction industry"
    },
    {
      icon: Users,
      number: "200+",
      label: "Projects Completed",
      description: "Successfully delivered across various sectors"
    },
    {
      icon: Target,
      number: "100%",
      label: "Client Satisfaction",
      description: "Committed to exceeding expectations"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Support Available",
      description: "Always here when you need us"
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We never compromise on quality. Every project reflects our commitment to superior craftsmanship and attention to detail.",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-500"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our skilled professionals bring years of experience and continuous training to deliver exceptional results.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Target,
      title: "Timely Delivery",
      description: "We understand the importance of deadlines and consistently deliver projects on time and within budget.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    }
  ];

  const handleLearnMore = () => {
    router.push('/about');
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <AnimatedSection animation="fade-right" repeatOnScroll={true}>
              <div className="mb-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  About <span className="text-[#3d9392]">SLK Trading & Design Construction</span>
                </h2>
                <AnimatedSection animation="fade-up" delay={200} repeatOnScroll={true}>
                  <p className="text-xl text-gray-600 leading-relaxed mb-6">
                    SLK Trading & Design Construction Co., Ltd is a leading construction company in Laos, specializing in design construction, waterproofing materials, and flooring materials.
                  </p>
                </AnimatedSection>
                <AnimatedSection animation="fade-up" delay={300} repeatOnScroll={true}>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    With over 15 years of experience, we have successfully completed more than 200 projects across various sectors. Our commitment to quality, innovation, and customer satisfaction has made us a trusted partner for all construction needs in Laos.
                  </p>
                </AnimatedSection>
                
                {/* Learn More Button */}
                <AnimatedSection animation="scale" delay={350} repeatOnScroll={true}>
                  <button 
                    onClick={handleLearnMore}
                    className="bg-[#3d9392] hover:bg-[#3d9392]/80 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Learn More About Us
                  </button>
                </AnimatedSection>
              </div>
            </AnimatedSection>

            {/* Key Values */}
            <div className="space-y-4">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <AnimatedSection 
                    key={index}
                    animation="fade-right"
                    delay={400 + (index * 150)}
                    repeatOnScroll={true}
                    className="flex items-start"
                  >
                    <AnimatedSection animation="bounce-in" delay={500 + (index * 150)} repeatOnScroll={true}>
                      <div className={`${value.bgColor} p-3 rounded-lg mr-4 flex-shrink-0`}>
                        <IconComponent className={`w-6 h-6 ${value.iconColor}`} />
                      </div>
                    </AnimatedSection>
                    <div>
                      <AnimatedSection animation="fade-up" delay={550 + (index * 150)} repeatOnScroll={true}>
                        <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                        <p className="text-sm text-gray-600">{value.description}</p>
                      </AnimatedSection>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div>
            <AnimatedSection animation="fade-left" repeatOnScroll={true}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <AnimatedSection
                      key={index}
                      animation="scale"
                      delay={index * 100}
                      repeatOnScroll={true}
                      className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
                    >
                      <AnimatedSection animation="bounce-in" delay={index * 100 + 200} repeatOnScroll={true}>
                        <div className="bg-white p-4 rounded-xl inline-flex mb-4 shadow-sm">
                          <IconComponent className="w-8 h-8 text-orange-500" />
                        </div>
                      </AnimatedSection>
                      <AnimatedSection animation="fade-up" delay={index * 100 + 300} repeatOnScroll={true}>
                        <div className="text-3xl font-bold text-gray-900 mb-2">
                          {stat.number}
                        </div>
                        <div className="font-semibold text-gray-700 mb-2">
                          {stat.label}
                        </div>
                        <div className="text-sm text-gray-600">
                          {stat.description}
                        </div>
                      </AnimatedSection>
                    </AnimatedSection>
                  );
                })}
              </div>
            </AnimatedSection>

            {/* Bottom Image */}
            <AnimatedSection animation="fade-up" delay={600} repeatOnScroll={true}>
              <div className="mt-8 relative">
                <img 
                  src="https://qawxuytlwqmsomsqlrsc.supabase.co/storage/v1/object/public/image//Services.jpg" 
                  alt="SLK Construction team at work"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-2xl"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;