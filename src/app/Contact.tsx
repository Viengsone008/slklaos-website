"use client";
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, Clock, Globe, CheckCircle, Sparkles, Calendar, User, X } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [countdown, setCountdown] = useState(15);

  // Countdown timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (success && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (success && countdown === 0) {
      // Auto-close when countdown reaches 0
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setSuccess(false);
      setCountdown(15); // Reset countdown for next time
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [success, countdown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Validate required fields
      if (!formData.name.trim() || !formData.email.trim()) {
        setError('Please fill in all required fields');
        setIsSubmitting(false);
        return;
      }

      console.log('📝 Submitting contact form:', formData);

      // Create comprehensive contact record
      const contactData = {
        // Core form fields
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        service: formData.service,
        message: formData.message.trim(),
        
        // Additional tracking fields
        status: 'new',
        priority: formData.service === 'waterproofing' ? 'high' : 'medium',
        source: 'contact_section',
        preferred_contact: 'email',
        urgency: 'medium',
        
        // Customer profile
        customer_profile: {
          fullName: formData.name.trim(),
          firstName: formData.name.trim().split(' ')[0],
          lastName: formData.name.trim().split(' ').slice(1).join(' ') || '',
          leadScore: Math.floor(Math.random() * 30) + 60,
          qualification: 'warm',
          communicationPreference: formData.phone ? 'phone' : 'email'
        },
        
        // Project context
        project_context: {
          estimatedBudget: getEstimatedBudget(formData.service, formData.message),
          projectType: formData.service || 'general',
          urgency: formData.message.toLowerCase().includes('urgent') ? 'urgent' : 'medium',
          location: extractLocation(formData.message) || 'Laos'
        },
        
        // Internal notes
        internal_notes: {
          assignedTo: getAssignedPerson(formData.service),
          nextAction: getNextAction(formData.service),
          estimatedValue: getEstimatedBudget(formData.service, formData.message),
          conversionProbability: Math.floor(Math.random() * 30) + 50
        }
      };

      // Save to database directly using Supabase client
      const { data: savedRecord, error: insertError } = await supabase
        .from('contacts')
        .insert([contactData])
        .select()
        .single();
      
      if (insertError) {
        console.error('❌ Database insert error:', insertError);
        throw insertError;
      }
      
      console.log('✅ Contact form saved successfully:', {
        id: savedRecord.id,
        name: contactData.name,
        service: contactData.service,
        leadScore: contactData.customer_profile.leadScore
      });

        // Send email notification
      try {
        const response = await fetch('/api/send-contact-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        const result = await response.json();
        console.log('Email API response:', result);
      } catch (emailError) {
        console.error('❌ Email notification error:', emailError);
      } 

      // Show success immediately and start countdown
      setSuccess(true);
      setIsSubmitting(false);
      setCountdown(15); // Start 15-second countdown

    } catch (err) {
      console.error('❌ Error saving contact form:', err);
      setError('Failed to send message. Please try again.');
      setIsSubmitting(false);
    }
  };

  // Helper functions
  const getEstimatedBudget = (service: string, message: string): number => {
    const messageText = message.toLowerCase();
    
    if (messageText.includes('small') || messageText.includes('simple')) return 5000;
    if (messageText.includes('large') || messageText.includes('complex')) return 50000;
    if (messageText.includes('commercial') || messageText.includes('office')) return 30000;
    if (messageText.includes('house') || messageText.includes('home')) return 25000;
    
    switch (service) {
      case 'construction': return 40000;
      case 'waterproofing': return 8000;
      case 'flooring': return 12000;
      case 'consultation': return 2000;
      case 'renovation': return 20000;
      case 'maintenance': return 5000;
      default: return 15000;
    }
  };

  const extractLocation = (message: string): string | null => {
    const messageText = message.toLowerCase();
    const locations = ['vientiane', 'luang prabang', 'savannakhet', 'pakse', 'champasak'];
    
    for (const location of locations) {
      if (messageText.includes(location)) {
        return location.charAt(0).toUpperCase() + location.slice(1);
      }
    }
    return null;
  };

  const getAssignedPerson = (service: string): string => {
    switch (service) {
      case 'construction': return 'Sarah Wilson';
      case 'waterproofing': return 'John Doe';
      case 'flooring': return 'Jane Smith';
      case 'consultation': return 'Mike Johnson';
      default: return 'Lisa Brown';
    }
  };

  const getNextAction = (service: string): string => {
    switch (service) {
      case 'construction': return 'schedule_site_visit';
      case 'waterproofing': return 'send_technical_info';
      case 'flooring': return 'send_material_samples';
      case 'consultation': return 'schedule_consultation';
      default: return 'send_initial_quote';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const handleCloseSuccess = () => {
    setSuccess(false);
    setCountdown(15); // Reset countdown
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      info: "+856 21 773 737",
      subInfo: "+856 20 5443 3151" 
       
    },
    {
      icon: Mail,
      title: "Email Address",
      info: "info@slklaos.la",
      subInfo: "mark@slklaos.la"
    },
    {
      icon: MapPin,
      title: "Office Location",
      info: "Vientiane Capital, Laos",
      subInfo: "Phonekham Village, Sikhottabong District"
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Mon - Fri: 8:00 - 17:00",
      subInfo: "Sat: 8:00 - 12:00"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="text-[#3d9392]">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team for inquiries, quotes, or support
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <AnimatedSection animation="fade-right">
            <div className="bg-gradient-to-br from-light to-white p-8 rounded-2xl border border-gray-200 relative">
              <AnimatedSection animation="fade-up">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h3>
              </AnimatedSection>

              {/* Error Message */}
              {error && (
                <AnimatedSection animation="shake">
                  <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg mb-6">
                    <p className="font-medium">{error}</p>
                  </div>
                </AnimatedSection>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <AnimatedSection animation="fade-right" delay={100}>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting || success}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white disabled:opacity-50"
                        placeholder="Your full name"
                      />
                    </div>
                  </AnimatedSection>
                  
                  <AnimatedSection animation="fade-left" delay={150}>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting || success}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white disabled:opacity-50"
                        placeholder="your@email.com"
                      />
                    </div>
                  </AnimatedSection>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <AnimatedSection animation="fade-right" delay={200}>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting || success}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white disabled:opacity-50"
                        placeholder="+856 20 xxx xxxx"
                      />
                    </div>
                  </AnimatedSection>
                  
                  <AnimatedSection animation="fade-left" delay={250}>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Service Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        disabled={isSubmitting || success}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white disabled:opacity-50"
                      >
                        <option value="">Select a service</option>
                        <option value="construction">Design & Construction</option>
                        <option value="waterproofing">Waterproofing</option>
                        <option value="flooring">Flooring</option>
                        <option value="consultation">Consultation</option>
                        <option value="renovation">Renovation</option>
                        <option value="maintenance">Maintenance</option>
                      </select>
                    </div>
                  </AnimatedSection>
                </div>

                <AnimatedSection animation="fade-up" delay={300}>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      disabled={isSubmitting || success}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none bg-white disabled:opacity-50"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="scale" delay={350}>
                  <button
                    type="submit"
                    disabled={isSubmitting || success}
                    className="w-full bg-[#3d9392] hover:bg-[#3d9392]/80 disabled:bg-primary/50 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:transform-none disabled:shadow-none"
                  >
                    {isSubmitting ? ( 
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Sending Message...
                      </>
                    ) : success ? (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Message Sent Successfully!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </AnimatedSection>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Information */}
          <div>
            <AnimatedSection animation="fade-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h3>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <AnimatedSection
                      key={index}
                      animation="fade-left"
                      delay={index * 100}
                      className="flex items-start"
                    >
                      <AnimatedSection animation="bounce-in" delay={index * 100 + 100}>
                        <div className="bg-primary/10 p-3 rounded-lg mr-4 flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-[#3d9392]" /> 
                        </div>
                      </AnimatedSection>
                      <div>
                        <AnimatedSection animation="fade-up" delay={index * 100 + 150}>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {item.title}
                          </h4>
                          <p className="text-gray-700 mb-1">{item.info}</p>
                          <p className="text-gray-500 text-sm">{item.subInfo}</p>
                        </AnimatedSection>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </AnimatedSection>

           {/* Interactive Google Map */}
            <AnimatedSection animation="scale" delay={400}>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-8">
                <AnimatedSection animation="slide-down">
                  <div className="bg-gradient-to-r from-[#3d9392] to-[#3d9392]/40 text-white p-4">
                    <div className="flex items-center">
                      <MapPin className="w-6 h-6 mr-3" />
                      <div>
                        <h4 className="font-bold text-lg">Our Location</h4>
                        <p className="text-blue-100 text-sm">Vientiane Capital, Laos</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
                
                {/* Google Map Embed */}
                <div className="relative h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.035234013353!2d102.5979300750489!3d17.97086119399556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x312468e2e7e7c2e7%3A0x6e2e7c2e7e7c2e7c!2sSLK%20Trading%20and%20Design-Construction%20Complete%20Sole%20Co%20LTD!5e0!3m2!1sen!2sla!4v1722345678901!5m2!1sen!2sla"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SLK Trading & Design Construction Location in Vientiane, Laos"
                    className="w-full h-full"
                  ></iframe>
                </div>

                {/* Map Overlay with Company Info */}
                <AnimatedSection animation="fade-in" delay={600}>
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-200 max-w-xs">
                    <div className="flex items-center mb-2">
                      <img 
                        src="/SLK-logo.png" 
                        alt="SLK Logo"
                        className="w-8 h- object-contain mr-2"
                      />
                      <div>
                        <h5 className="font-bold text-gray-900 text-sm">SLK Trading</h5>
                        <p className="text-xs text-gray-600">& Design Construction</p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-700">
                      <p className="flex items-center mb-1">
                        <MapPin className="w-3 h-3 mr-1 text-[#6dbeb0]" />
                        Vientiane Capital, Laos 
                      </p>
                      <p className="flex items-center mb-1">
                        <Phone className="w-3 h-3 mr-1 text-[#6dbeb0]" />
                        +856 20 5551 5551     
                      </p>
                      <p className="flex items-center">
                        <Clock className="w-3 h-3 mr-1 text-[#6dbeb0]" />
                        Mon-Fri: 8:00-17:00
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Directions Button */}
                <AnimatedSection animation="scale" delay={700}>
                  <div className="absolute bottom-4 right-4">
                    <a
                      href="https://www.google.com/maps/dir//Vientiane,+Laos/@17.9666648,102.6420784,12z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#3d9392] hover:bg-[#3d9392]/70 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center shadow-lg transition-colors duration-300"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Get Directions
                    </a> 
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection> 

            {/* Quick Contact */}
            <AnimatedSection animation="fade-up" delay={600}>
              <div className="bg-[#417d80] text-white p-6 rounded-2xl">
                <h4 className="font-bold text-lg mb-4">Need Urgent Assistance?</h4>
                <p className="mb-4 text-light">
                  Call our emergency support line for immediate assistance with your construction needs.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    <span className="font-semibold">+856 21 773 737</span>
                  </div>
                  <div className="flex items-center text-sm text-light">
                    <Globe className="w-4 h-4 mr-1" /> 
                    Available 24/7 
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* SUCCESS POPUP MODAL WITH 15-SECOND COUNTDOWN */}
      {success && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm"></div>
          
          {/* Modal */}
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full animate-scale-in">
              {/* Header with Countdown */}
              <div className="bg-gradient-to-r from-primary to-tertiary text-white p-8 rounded-t-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
                
                {/* Countdown Timer */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-bold text-lg">{countdown}</span>
                </div>
                
                <div className="relative z-10 text-center">
                  <div className="bg-white/20 p-4 rounded-full inline-flex mb-4">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2">Message Sent Successfully!</h2>
                  <div className="flex items-center justify-center space-x-2">
                    <Sparkles className="w-5 h-5" />
                    <p className="text-light text-lg">Your inquiry has been received</p>
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 p-4 rounded-xl">
                    <div className="flex items-center text-green-800 mb-2">
                      <User className="w-5 h-5 mr-2" />
                      <span className="font-semibold">Contact Details</span>
                    </div>
                    <p className="text-sm text-green-700">
                      👤 Name: <span className="font-semibold">{formData.name}</span>
                    </p>
                    <p className="text-sm text-green-700">
                      📧 Email: <span className="font-semibold">{formData.email}</span>
                    </p>
                    {formData.company && (
                      <p className="text-sm text-green-700">
                        🏢 Company: <span className="font-semibold">{formData.company}</span>
                      </p>
                    )}
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="flex items-center text-blue-800 mb-2">
                      <Clock className="w-5 h-5 mr-2" />
                      <span className="font-semibold">Response Timeline</span>
                    </div>
                    <p className="text-sm text-blue-700">
                      ⏰ Response time: <span className="font-semibold">{getResponseTime(formData.urgency)}</span>
                    </p>
                    <p className="text-sm text-blue-700">
                      👤 Assigned to: <span className="font-semibold">{getAssignedPerson(formData.service)}</span>
                    </p>
                    <p className="text-sm text-blue-700">
                      📊 Priority: <span className="font-semibold capitalize">{formData.urgency}</span>
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-200 mb-6">
                  <div className="flex items-center text-green-800 mb-3">
                    <Calendar className="w-6 h-6 mr-2" />
                    <span className="text-lg font-bold">What Happens Next?</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-green-700">
                        <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">1</div>
                        <span className="text-sm">Team reviews your message</span>
                      </div>
                      <div className="flex items-center text-green-700">
                        <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">2</div>
                        <span className="text-sm">Prepare detailed response</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-green-700">
                        <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">3</div>
                        <span className="text-sm">Contact you via preferred method</span>
                      </div>
                      <div className="flex items-center text-green-700">
                        <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">4</div>
                        <span className="text-sm">Schedule consultation if needed</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-center text-orange-800 mb-2">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="font-bold">Auto-closing in {countdown} seconds</span>
                    </div>
                    <div className="w-full bg-orange-200 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-linear"
                        style={{ width: `${((15 - countdown) / 15) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleCloseSuccess}
                    className="bg-primary hover:bg-tertiary text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Continue Browsing
                  </button>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={handleCloseSuccess}
                className="absolute top-4 right-16 text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Helper function for response time
const getResponseTime = (urgency: string): string => {
  switch (urgency) {
    case 'urgent': return '2 hours';
    case 'high': return '4 hours';
    case 'medium': return '24 hours';
    case 'low': return '48 hours';
    default: return '24 hours';
  }
};

export default Contact;