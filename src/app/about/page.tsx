"use client";
import React, { useState, useRef } from 'react';
import { Award, Users, Target, Clock, Building2, Shield, Layers, Star, CheckCircle, ArrowRight, Heart, Globe, Zap } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';
import QuoteModal from '../../components/QuoteModal';
import { useLanguage } from '../../contexts/LanguageContext';
import { useRouter } from 'next/navigation';
import Navbar from '../Navbar';
import Footer from '../Footer';

const AboutPage = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const { t } = useLanguage();
  const router = useRouter();

  const storyRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);

  const scrollToStory = () => {
    storyRef.current?.scrollIntoView({ behavior: 'smooth' });
  }; 

  const scrollToTeam = () => {
    teamRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToJourney = () => {
    journeyRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigateToContact = () => {
    router.push('/contact');
  };

  const stats = [
    {
      icon: Award, 
      number: "10+",
      label: "Years of Excellence",
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
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We listen, understand, and deliver solutions that exceed expectations.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Globe,
      title: "Sustainable Practices",
      description: "We're committed to environmentally responsible construction practices for a better future.",
      bgColor: "bg-emerald-100",
      iconColor: "text-emerald-600"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace new technologies and methods to provide cutting-edge construction solutions.",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600"
    }
  ];

  const team = [
    {
      name: "Mark Janos Juhasz",
      position: "Founder & CEO",
      image: "https://qawxuytlwqmsomsqlrsc.supabase.co/storage/v1/object/public/image//Mr.%20Mark%20Janos%20Juhasz.JPG",
      description: "With over 20 years in construction, Mark founded SLK Trading with a vision to transform Laos' construction industry.",
      specialties: ["Strategic Planning", "Business Development", "Industry Relations"]
    },
    { 
      name: "Chitpaseut Somlith",  
      position: "Founder & CEO", 
      image: "https://qawxuytlwqmsomsqlrsc.supabase.co/storage/v1/object/public/image//Mr.%20Chitpaseut%20Somlith.JPG",
      description: "Leading our technical team with expertise in structural engineering and project management.",
      specialties: ["Structural Engineering", "Project Management", "Quality Control"]
    },
    {
      name: "Khamla Sisavath",
      position: "Operations Director",
      image: "https://images.pexels.com/photos/3862347/pexels-photo-3862347.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Ensuring smooth operations and maintaining our high standards across all projects.",
      specialties: ["Operations Management", "Supply Chain", "Team Leadership"]
    },
    {
      name: "Viengxay Chanthabouly",
      position: "Design Manager",
      image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Creative visionary behind our innovative designs and architectural solutions.",
      specialties: ["Architectural Design", "3D Modeling", "Interior Design"]
    }
  ];

  const milestones = [
    {
      year: "2008",
      title: "Company Founded",
      description: "SLK Trading & Design Construction was established with a mission to provide quality construction services in Laos."
    },
    {
      year: "2012",
      title: "First Major Project",
      description: "Completed our first major commercial project, establishing our reputation for quality and reliability."
    },
    {
      year: "2015",
      title: "Expansion",
      description: "Expanded our services to include premium waterproofing and flooring materials supply."
    },
    {
      year: "2018",
      title: "100 Projects Milestone",
      description: "Celebrated completing our 100th project, marking a significant achievement in our growth."
    },
    {
      year: "2020",
      title: "Technology Integration",
      description: "Integrated advanced project management and design technologies to enhance our services."
    },
    {
      year: "2023",
      title: "Industry Leadership",
      description: "Recognized as one of the leading construction companies in Laos with 200+ completed projects."
    }
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System",
      icon: Award
    },
    {
      name: "ISO 14001:2015",
      description: "Environmental Management",
      icon: Globe
    },
    {
      name: "OHSAS 18001",
      description: "Occupational Health & Safety",
      icon: Shield
    },
    {
      name: "Lao Construction License",
      description: "Grade A Construction License",
      icon: Building2
    }
  ]; 

  return ( 
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-blue-800 via-indigo-700 to-orange-600 text-white overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://qawxuytlwqmsomsqlrsc.supabase.co/storage/v1/object/public/image//About_Hero.png"  
              alt="SLK Trading team at work"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#6dbeb0]/80 to-[#1b3d5a]/80"></div>
          </div>
           
          <div className="relative z-10 container mx-auto px-4">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 drop-shadow-2xl">
                About <span className="text-[#6dbeb0]">SLK Trading & Design Construction</span>
              </h1>
              <p className="text-2xl text-blue-100 mb-8 leading-relaxed drop-shadow-lg">
                Building Laos' future with quality, innovation, and excellence
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-[#1b3d5a] hover:bg-[#336675] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Work With Us
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>

                <button 
                  onClick={scrollToStory}
                  className="border-2 border-white/40 hover:bg-white/15 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Our Story
                </button>

                <button 
                  onClick={scrollToJourney}
                  className="border-2 border-white/40 hover:bg-white/15 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Our Journey
                </button>

                <button 
                  onClick={scrollToTeam}
                  className="border-2 border-white/40 hover:bg-white/15 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Meet Our Team
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-[#3d9392]">Achievements</span> 
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Numbers that reflect our commitment to excellence
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <AnimatedSection
                    key={index}
                    animation="scale"
                    delay={index * 100}
                    className="text-center"
                  >
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="bg-orange-100 p-4 rounded-xl inline-flex mb-4">
                        <IconComponent className="w-8 h-8 text-orange-600" />
                      </div>
                      <div className="text-4xl font-bold text-gray-900 mb-2">
                        {stat.number}
                      </div>
                      <div className="font-semibold text-gray-700 mb-2">
                        {stat.label}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat.description}
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Story */} 
        <section ref={storyRef} className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection animation="fade-right">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our <span className="text-[#3d9392]">Story</span>
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg">
                    Founded in 2008, SLK Trading & Design Construction began with a simple yet ambitious vision: 
                    to transform the construction landscape in Laos through quality, innovation, and unwavering 
                    commitment to excellence.
                  </p>
                  <p>
                    What started as a small construction company has grown into one of Laos' most trusted names 
                    in construction and building materials supply. Our journey has been marked by continuous 
                    learning, adaptation, and an relentless pursuit of perfection.
                  </p>
                  <p>
                    Today, we stand proud as a company that has not only built structures but has also built 
                    lasting relationships with our clients, partners, and the communities we serve. Every project 
                    we undertake is a testament to our values and our commitment to building a better Laos.
                  </p>
                </div>
                <div className="mt-8">
                  <button 
                    onClick={scrollToJourney}
                    className="bg-[#3d9392] hover:bg-[#6dbeb0] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Learn More About Our Journey
                  </button>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-left">
                <div className="relative">
                  <img 
                    src="https://qawxuytlwqmsomsqlrsc.supabase.co/storage/v1/object/public/image//Services.jpg" 
                    alt="SLK Trading construction team"
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-xl font-bold mb-2">Building Excellence Since 2008</h4>
                    <p className="text-white/90">Committed to quality and innovation</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-[#3d9392]">Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <AnimatedSection
                    key={index}
                    animation="fade-up"
                    delay={index * 150}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className={`${value.bgColor} p-4 rounded-xl inline-flex mb-4`}>
                      <IconComponent className={`w-8 h-8 ${value.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section ref={teamRef} className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Meet Our <span className="text-[#3d9392]">Team</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The experts behind our success
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <AnimatedSection
                  key={index}
                  animation="fade-up"
                  delay={index * 150}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className="relative h-64">
                    <img  
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-[#3d9392] font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                      <div className="space-y-1">
                        {member.specialties.map((specialty, specialtyIndex) => (
                          <div key={specialtyIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            {specialty}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section ref={journeyRef} className="py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-[#3d9392]">Journey</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Key milestones in our growth and development
              </p>
            </AnimatedSection>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#6dbeb0]"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <AnimatedSection
                    key={index}
                    animation={index % 2 === 0 ? "fade-right" : "fade-left"}
                    delay={index * 200}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <div className="text-2xl font-bold text-[#3d9392] mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="relative z-10 w-4 h-4 bg-[#3d9392] rounded-full border-4 border-white shadow-lg"></div>
                    
                    <div className="w-1/2"></div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Certifications & <span className="text-[#3d9392]">Licenses</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our commitment to quality and compliance
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <AnimatedSection
                    key={index}
                    animation="scale"
                    delay={index * 150}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                  >
                    <div className="bg-orange-100 p-4 rounded-xl inline-flex mb-4">
                      <IconComponent className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
                    <p className="text-gray-600 text-sm">{cert.description}</p>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#6dbeb0] to-[#336675] text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Join our family of satisfied clients and experience the SLK Trading difference
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-white text-[#1b3d5a] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                </button>
                <button 
                  onClick={handleNavigateToContact}
                  className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Contact Our Team
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
        source="about_page"
      />
    </>
  );
};

export default AboutPage;