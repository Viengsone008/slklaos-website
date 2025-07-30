"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
  languages: Language[];
  isLoading: boolean;
}

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'lo', name: 'Lao', nativeName: 'ລາວ', flag: '🇱🇦' },
  { code: 'th', name: 'Thai', nativeName: 'ไทย', flag: '🇹🇭' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'hu', name: 'Hungarian', nativeName: 'Magyar', flag: '🇭🇺' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' }
];

// Translation data - keeping all your existing translations
const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      services: 'Services',
      products: 'Products',
      projects: 'Projects',
      about: 'About',
      news: 'News',
      contact: 'Contact',
      admin: 'Admin'
    },

    // Hero Section
    hero: {
      title: {
        line1: 'Building Excellence',
        line2: 'in Laos'
      },
      badge: 'Leading Construction Company in Laos',
      description: 'Professional construction services, premium waterproofing solutions, and quality flooring materials for residential, commercial, and industrial projects.',
      service1: 'Design & Construction',
      service2: 'Waterproofing',
      service3: 'Flooring Materials',
      cta: {
        quote: 'Get Free Quote',
        projects: 'View Projects'
      },
      stats: {
        years: '15+',
        experience: 'Years Experience',
        projects: '200+',
        completed: 'Projects Completed',
        client: '100%',
        satisfaction: 'Client Satisfaction',
        support: '24/7',
        available: 'Support Available'
      }
    },

    // Services Section
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive construction solutions tailored to your needs',
      learnMore: 'Learn More',
      construction: {
        title: 'Design & Construction',
        description: 'Complete construction solutions from concept to completion with professional project management.',
        features: [
          'Architectural Design & Planning',
          'Structural Engineering',
          'Project Management',
          'Quality Control & Inspection',
          'Interior Design Services',
          'Landscape Architecture'
        ]
      },
      waterproofing: {
        title: 'Waterproofing Solutions',
        description: 'Advanced waterproofing systems for lasting protection against moisture damage.',
        features: [
          'Roof Waterproofing',
          'Foundation Protection',
          'Basement Waterproofing',
          'Bathroom & Kitchen Sealing',
          'Swimming Pool Waterproofing',
          'Industrial Waterproofing'
        ]
      },
      flooring: {
        title: 'Flooring Materials',
        description: 'Premium flooring solutions including tiles, hardwood, and specialized industrial flooring.',
        features: [
          'Ceramic & Porcelain Tiles',
          'Natural Stone Flooring',
          'Hardwood & Laminate',
          'Vinyl & LVT Flooring',
          'Epoxy Floor Coatings',
          'Custom Design Solutions'
        ]
      }
    },

    // Products Section
    products: {
      title: 'Premium Products',
      subtitle: 'High-quality construction materials for lasting results',
      waterproofing: {
        title: 'Waterproofing Materials',
        subtitle: 'Premium protection solutions',
        description: 'Advanced waterproofing systems designed to provide long-lasting protection against moisture damage.',
        products: [
          'Liquid Applied Membranes',
          'Sheet Membranes',
          'Crystalline Waterproofing',
          'Injection Resins',
          'Sealants & Coatings',
          'Drainage Systems'
        ],
        applications: [
          'Roofing Systems',
          'Foundation Protection',
          'Basement Waterproofing',
          'Swimming Pools',
          'Bathrooms & Wet Areas',
          'Industrial Facilities'
        ],
        features: [
          'UV Resistant',
          'Crack Bridging',
          'Easy Application',
          'Long-lasting',
          'Eco-friendly',
          'Professional Grade'
        ]
      },
      flooring: {
        title: 'Flooring Materials',
        subtitle: 'Elegant and durable surfaces',
        description: 'Comprehensive range of premium flooring materials for residential, commercial, and industrial applications.',
        products: [
          'Ceramic & Porcelain Tiles',
          'Natural Stone',
          'Hardwood Flooring',
          'Laminate Flooring',
          'Vinyl & LVT',
          'Epoxy Coatings'
        ],
        applications: [
          'Residential Homes',
          'Commercial Spaces',
          'Industrial Facilities',
          'Healthcare Centers',
          'Educational Institutions',
          'Hospitality Venues'
        ],
        features: [
          'Slip Resistant',
          'Stain Proof',
          'Low Maintenance',
          'Durable',
          'Aesthetic',
          'Cost-effective'
        ]
      },
      quality: {
        title: 'Quality Assurance',
        subtitle: 'Committed to excellence in every product we supply',
        premium: {
          title: 'Premium Quality',
          description: 'Only the finest materials from trusted international brands'
        },
        expert: {
          title: 'Expert Selection',
          description: 'Carefully curated products tested for Laos climate conditions'
        },
        reliable: {
          title: 'Reliable Supply',
          description: 'Consistent availability with efficient logistics network'
        }
      },
      cta: {
        title: 'Need Product Information?',
        subtitle: 'Get detailed specifications and pricing for our premium materials',
        quote: 'Get Product Quote',
        catalog: 'Download Catalog'
      }
    },

    // Projects Section
    projects: {
      title: 'Our Projects',
      subtitle: 'Showcasing excellence in construction across various sectors',
      completed: 'Completed in',
      viewAll: 'View All Projects',
      categories: {
        commercial: 'Commercial',
        residential: 'Residential',
        industrial: 'Industrial',
        hospitality: 'Hospitality',
        education: 'Education',
        healthcare: 'Healthcare'
      }
    },

    // About Section
    about: {
      title: 'About SLK Trading',
      description1: 'With over 10 years of experience in the construction industry, SLK Trading & Design Construction has established itself as a leading provider of comprehensive construction solutions in Laos.',
      description2: 'We specialize in design and construction services, premium waterproofing materials, and high-quality flooring solutions for residential, commercial, and industrial projects.',
      stats: {
        years: '15+',
        yearsDesc: 'Years of Excellence',
        projects: '200+',
        projectsDesc: 'Projects Completed',
        satisfaction: '100%',
        satisfactionDesc: 'Client Satisfaction',
        support: '24/7',
        supportDesc: 'Support Available'
      },
      values: {
        quality: {
          title: 'Quality Excellence',
          description: 'We never compromise on quality, ensuring every project meets the highest standards.'
        },
        expert: {
          title: 'Expert Team',
          description: 'Our skilled professionals bring years of experience to every project.'
        },
        delivery: {
          title: 'Timely Delivery',
          description: 'We understand deadlines and consistently deliver projects on time.'
        }
      }
    },

    // Blog Section
    blog: {
      title: 'Latest News',
      subtitle: 'Stay updated with our latest projects and industry insights',
      readMore: 'Read More',
      viewAll: 'View All News'
    },

    // Contact Section
    contact: {
      title: 'Get In Touch',
      subtitle: 'Ready to start your project? Contact our experts for professional consultation.',
      form: {
        title: 'Send Us a Message',
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        service: 'Service Interest',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message Sent Successfully!',
        services: {
          construction: 'Design & Construction',
          waterproofing: 'Waterproofing Solutions',
          flooring: 'Flooring Materials',
          consultation: 'Project Consultation',
          renovation: 'Renovation Services',
          maintenance: 'Maintenance Support'
        }
      },
      info: {
        title: 'Contact Information',
        phone: 'Phone Numbers',
        email: 'Email Addresses',
        address: 'Office Location',
        hours: 'Business Hours'
      },
      map: {
        title: 'Find Us on Map',
        directions: 'Get Directions'
      },
      emergency: {
        title: 'Emergency Support',
        description: 'Need immediate assistance? Our emergency support team is available.',
        available: '24/7 Available'
      }
    },

    // Footer
    footer: {
      description: 'Leading construction company in Laos offering design construction, waterproofing materials, and flooring materials. Professional building solutions you can trust.',
      services: 'Services',
      company: 'Company',
      contact: 'Contact',
      copyright: 'SLK Trading & Design Construction Co., Ltd. All rights reserved.',
      quickQuote: {
        title: 'Get Quick Quote',
        description: 'Start your project with us today',
        button: 'Contact Now'
      },
      links: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        sitemap: 'Sitemap'
      }
    },

    // Loading Screen
    loading: {
      title: 'SLK Trading & Design Construction',
      subtitle: 'Your Trusted Partner in Construction & Materials Supply',
      badge: 'Leading Construction Company in Laos',
      steps: {
        database: 'Initializing Database Systems',
        auth: 'Loading Authentication Protocols',
        interface: 'Preparing Multi-User Interface',
        portal: 'Finalizing Login Portal'
      },
      waiting: 'Building your construction experience...',
      status: {
        secure: 'Secure',
        professional: 'Professional',
        multiAccess: 'Multi-Access'
      },
      preparing: 'Preparing your premium construction portal...',
      powered: 'Powered by SLK Trading & Design Construction'
    },

    // Admin Panel
    admin: {
      login: {
        title: 'SLK Webmaster Admin Login',
        subtitle: 'Full system administration access',
        email: 'Email Address',
        password: 'Password',
        rememberMe: 'Remember Me',
        forgotPassword: 'Forgot Password?',
        signIn: 'Sign In',
        signingIn: 'Signing In...',
        invalidCredentials: 'Invalid email or password',
        loginFailed: 'Login failed. Please try again.'
      }
    },

    // Common
    common: {
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      cancel: 'Cancel',
      save: 'Save',
      edit: 'Edit',
      delete: 'Delete',
      confirm: 'Confirm',
      close: 'Close',
      next: 'Next',
      previous: 'Previous',
      submit: 'Submit',
      search: 'Search',
      filter: 'Filter',
      all: 'All',
      none: 'None',
      yes: 'Yes',
      no: 'No'
    }
  },

  lo: {
    // Navigation
    nav: {
      home: 'ໜ້າຫຼັກ',
      services: 'ບໍລິການ',
      products: 'ຜະລິດຕະພັນ',
      projects: 'ໂຄງການ',
      about: 'ກ່ຽວກັບ',
      news: 'ຂ່າວສານ',
      contact: 'ຕິດຕໍ່',
      admin: 'ຜູ້ດູແລລະບົບ'
    },

    // Hero Section
    hero: {
      title: {
        line1: 'ສ້າງຄວາມເປັນເລີດ',
        line2: 'ໃນລາວ'
      },
      badge: 'ບໍລິສັດກໍ່ສ້າງຊັ້ນນໍາໃນລາວ',
      description: 'ບໍລິການກໍ່ສ້າງມືອາຊີບ, ວິທີການກັນນ້ໍາຊັ້ນດີ, ແລະວັດສະດຸພື້ນທີ່ມີຄຸນນະພາບສໍາລັບໂຄງການທີ່ຢູ່ອາໄສ, ການຄ້າ, ແລະອຸດສາຫະກໍາ.',
      service1: 'ການອອກແບບ ແລະ ກໍ່ສ້າງ',
      service2: 'ການກັນນ້ໍາ',
      service3: 'ວັດສະດຸພື້ນ',
      cta: {
        quote: 'ຂໍໃບເສນີລາຄາຟຣີ',
        projects: 'ເບິ່ງໂຄງການ'
      },
      stats: {
        years: '15+',
        experience: 'ປີປະສົບການ',
        projects: '200+',
        completed: 'ໂຄງການສໍາເລັດ',
        client: '100%',
        satisfaction: 'ຄວາມພໍໃຈຂອງລູກຄ້າ',
        support: '24/7',
        available: 'ສະຫນັບສະຫນູນ'
      }
    },

    // Services Section
    services: {
      title: 'ບໍລິການຂອງພວກເຮົາ',
      subtitle: 'ການແກ້ໄຂການກໍ່ສ້າງທີ່ຄົບຖ້ວນທີ່ເໝາະສົມກັບຄວາມຕ້ອງການຂອງທ່ານ',
      learnMore: 'ຮຽນຮູ້ເພີ່ມເຕີມ',
      construction: {
        title: 'ການອອກແບບ ແລະ ກໍ່ສ້າງ',
        description: 'ການແກ້ໄຂການກໍ່ສ້າງທີ່ສົມບູນແບບຈາກແນວຄວາມຄິດໄປສູ່ການສໍາເລັດດ້ວຍການຄຸ້ມຄອງໂຄງການມືອາຊີບ.',
        features: [
          'ການອອກແບບສະຖາປັດຕະຍະກໍາ ແລະ ການວາງແຜນ',
          'ວິສະວະກໍາໂຄງສ້າງ',
          'ການຄຸ້ມຄອງໂຄງການ',
          'ການຄວບຄຸມຄຸນນະພາບ ແລະ ການກວດສອບ',
          'ບໍລິການອອກແບບພາຍໃນ',
          'ສະຖາປັດຕະຍະກໍາພູມສັນຖານ'
        ]
      },
      waterproofing: {
        title: 'ການແກ້ໄຂການກັນນ້ໍາ',
        description: 'ລະບົບການກັນນ້ໍາທີ່ກ້າວຫນ້າສໍາລັບການປົກປ້ອງທີ່ຍືນຍົງຕໍ່ກັບຄວາມເສຍຫາຍຈາກຄວາມຊຸ່ມ.',
        features: [
          'ການກັນນ້ໍາຫຼັງຄາ',
          'ການປົກປ້ອງພື້ນຖານ',
          'ການກັນນ້ໍາຫ້ອງໃຕ້ດິນ',
          'ການປິດຜະນຶກຫ້ອງນ້ໍາ ແລະ ຫ້ອງຄົວ',
          'ການກັນນ້ໍາສະລອນ',
          'ການກັນນ້ໍາອຸດສາຫະກໍາ'
        ]
      },
      flooring: {
        title: 'ວັດສະດຸພື້ນ',
        description: 'ການແກ້ໄຂພື້ນທີ່ມີຄຸນນະພາບສູງລວມທັງກະເບື້ອງ, ໄມ້ແຂງ, ແລະພື້ນອຸດສາຫະກໍາພິເສດ.',
        features: [
          'ກະເບື້ອງເຊລາມິກ ແລະ ປໍເຊເລນ',
          'ພື້ນຫີນທໍາມະຊາດ',
          'ໄມ້ແຂງ ແລະ ລາມິເນດ',
          'ໄວນິວ ແລະ LVT',
          'ການເຄືອບອີພັອກຊີ',
          'ການແກ້ໄຂການອອກແບບແບບກໍາຫນົດເອງ'
        ]
      }
    },

    // Products Section
    products: {
      title: 'ຜະລິດຕະພັນພຣີມຽມ',
      subtitle: 'ວັດສະດຸກໍ່ສ້າງທີ່ມີຄຸນນະພາບສູງສໍາລັບຜົນໄດ້ຮັບທີ່ຍືນຍົງ',
      waterproofing: {
        title: 'ວັດສະດຸກັນນ້ໍາ',
        subtitle: 'ການແກ້ໄຂການປົກປ້ອງພຣີມຽມ',
        description: 'ລະບົບການກັນນ້ໍາທີ່ກ້າວຫນ້າທີ່ອອກແບບມາເພື່ອໃຫ້ການປົກປ້ອງທີ່ຍືນຍົງຕໍ່ກັບຄວາມເສຍຫາຍຈາກຄວາມຊຸ່ມ.',
        products: [
          'ເມັມເບຣນທີ່ນໍາໃຊ້ແບບແຫຼວ',
          'ເມັມເບຣນແຜ່ນ',
          'ການກັນນ້ໍາແບບຄຣິສຕັນ',
          'ເຣຊິນສີດ',
          'ສານປິດຜະນຶກ ແລະ ການເຄືອບ',
          'ລະບົບລະບາຍນ້ໍາ'
        ],
        applications: [
          'ລະບົບຫຼັງຄາ',
          'ການປົກປ້ອງພື້ນຖານ',
          'ການກັນນ້ໍາຫ້ອງໃຕ້ດິນ',
          'ສະລອນ',
          'ຫ້ອງນ້ໍາ ແລະ ພື້ນທີ່ເປຍກ',
          'ສິ່ງອໍານວຍຄວາມສະດວກອຸດສາຫະກໍາ'
        ],
        features: [
          'ທົນທານຕໍ່ແສງ UV',
          'ການເຊື່ອມຕໍ່ຮອຍແຕກ',
          'ການນໍາໃຊ້ງ່າຍ',
          'ຍືນຍົງ',
          'ເປັນມິດກັບສິ່ງແວດລ້ອມ',
          'ລະດັບມືອາຊີບ'
        ]
      },
      flooring: {
        title: 'ວັດສະດຸພື້ນ',
        subtitle: 'ພື້ນຜິວທີ່ສະຫງ່າງາມ ແລະ ທົນທານ',
        description: 'ຊ່ວງທີ່ຄົບຖ້ວນຂອງວັດສະດຸພື້ນທີ່ມີຄຸນນະພາບສູງສໍາລັບການນໍາໃຊ້ທີ່ຢູ່ອາໄສ, ການຄ້າ, ແລະອຸດສາຫະກໍາ.',
        products: [
          'ກະເບື້ອງເຊລາມິກ ແລະ ປໍເຊເລນ',
          'ຫີນທໍາມະຊາດ',
          'ພື້ນໄມ້ແຂງ',
          'ພື້ນລາມິເນດ',
          'ໄວນິວ ແລະ LVT',
          'ການເຄືອບອີພັອກຊີ'
        ],
        applications: [
          'ບ້ານພັກອາໄສ',
          'ພື້ນທີ່ການຄ້າ',
          'ສິ່ງອໍານວຍຄວາມສະດວກອຸດສາຫະກໍາ',
          'ສູນການແພດ',
          'ສະຖາບັນການສຶກສາ',
          'ສະຖານທີ່ບໍລິການ'
        ],
        features: [
          'ທົນທານຕໍ່ການລື່ນ',
          'ກັນຮອຍເປື້ອນ',
          'ບໍາລຸງຮັກສາຕ່ໍາ',
          'ທົນທານ',
          'ສວຍງາມ',
          'ປະຫຍັດຄ່າໃຊ້ຈ່າຍ'
        ]
      },
      quality: {
        title: 'ການຮັບປະກັນຄຸນນະພາບ',
        subtitle: 'ມຸ່ງໝັ້ນສູ່ຄວາມເປັນເລີດໃນທຸກຜະລິດຕະພັນທີ່ພວກເຮົາສະໜອງ',
        premium: {
          title: 'ຄຸນນະພາບພຣີມຽມ',
          description: 'ມີພຽງແຕ່ວັດສະດຸທີ່ດີທີ່ສຸດຈາກຍີ່ຫໍ້ສາກົນທີ່ເຊື່ອຖືໄດ້'
        },
        expert: {
          title: 'ການເລືອກຜູ້ຊ່ຽວຊານ',
          description: 'ຜະລິດຕະພັນທີ່ຄັດເລືອກຢ່າງລະມັດລະວັງທີ່ທົດສອບສໍາລັດສະພາບອາກາດລາວ'
        },
        reliable: {
          title: 'ການສະໜອງທີ່ເຊື່ອຖືໄດ້',
          description: 'ຄວາມພ້ອມໃຊ້ທີ່ສອດຄ່ອງກັບເຄືອຂ່າຍການຂົນສົ່ງທີ່ມີປະສິດທິພາບ'
        }
      },
      cta: {
        title: 'ຕ້ອງການຂໍ້ມູນຜະລິດຕະພັນບໍ?',
        subtitle: 'ຮັບຂໍ້ກໍາຫນົດລາຍລະອຽດ ແລະ ລາຄາສໍາລັບວັດສະດຸພຣີມຽມຂອງພວກເຮົາ',
        quote: 'ຂໍໃບເສນີລາຄາຜະລິດຕະພັນ',
        catalog: 'ດາວໂຫລດແຄັດຕາລັອກ'
      }
    },

    // Projects Section
    projects: {
      title: 'ໂຄງການຂອງພວກເຮົາ',
      subtitle: 'ສະແດງຄວາມເປັນເລີດໃນການກໍ່ສ້າງໃນຂະແໜງການຕ່າງໆ',
      completed: 'ສໍາເລັດໃນ',
      viewAll: 'ເບິ່ງໂຄງການທັງໝົດ',
      categories: {
        commercial: 'ການຄ້າ',
        residential: 'ທີ່ຢູ່ອາໄສ',
        industrial: 'ອຸດສາຫະກໍາ',
        hospitality: 'ການບໍລິການ',
        education: 'ການສຶກສາ',
        healthcare: 'ການແພດ'
      }
    },

    // About Section
    about: {
      title: 'ກ່ຽວກັບ SLK Trading',
      description1: 'ດ້ວຍປະສົບການຫຼາຍກວ່າ 15 ປີໃນອຸດສາຫະກໍ່ສ້າງ, SLK Trading & Design Construction ໄດ້ສ້າງຕັ້ງຕົນເອງເປັນຜູໃຫ້ບໍລິການຊັ້ນນໍາຂອງການແກ້ໄຂການກໍ່ສ້າງທີ່ຄົບຖ້ວນໃນລາວ.',
      description2: 'ພວກເຮົາມີຄວາມຊ່ຽວຊານໃນບໍລິການການອອກແບບ ແລະ ການກໍ່ສ້າງ, ວັດສະດຸກັນນ້ໍາພຣີມຽມ, ແລະການແກ້ໄຂພື້ນທີ່ມີຄຸນນະພາບສູງສໍາລັບໂຄງການທີ່ຢູ່ອາໄສ, ການຄ້າ, ແລະອຸດສາຫະກໍາ.',
      stats: {
        years: '15+',
        yearsDesc: 'ປີແຫ່ງຄວາມເປັນເລີດ',
        projects: '200+',
        projectsDesc: 'ໂຄງການສໍາເລັດ',
        satisfaction: '100%',
        satisfactionDesc: 'ຄວາມພໍໃຈຂອງລູກຄ້າ',
        support: '24/7',
        supportDesc: 'ສະຫນັບສະຫນູນທີ່ມີ'
      },
      values: {
        quality: {
          title: 'ຄວາມເປັນເລີດດ້ານຄຸນນະພາບ',
          description: 'ພວກເຮົາບໍ່ເຄີຍປະນີປະນອມ, ຮັບປະກັນວ່າທຸກໂຄງການບັນລຸມາດຕະຖານສູງສຸດ.'
        },
        expert: {
          title: 'ທີມງານຜູ້ຊ່ຽວຊານ',
          description: 'ມືອາຊີບທີ່ມີທັກສະຂອງພວກເຮົານໍາປະສົບການຫຼາຍປີມາສູ່ທຸກໂຄງການ.'
        },
        delivery: {
          title: 'ການສົ່ງມອບທັນເວລາ',
          description: 'ພວກເຮົາເຂົ້າໃຈຄວາມສໍາຄັນຂອງກໍານົດເວລາ ແລະ ສົ່ງມອບຢ່າງສະໝໍ່າສະເໝອ.'
        }
      }
    },

    // Blog Section
    blog: {
      title: 'ຂ່າວສານຫຼ້າສຸດ',
      subtitle: 'ຕິດຕາມຂ່າວສານກັບໂຄງການຫຼ້າສຸດ ແລະ ຂໍ້ມູນອຸດສາຫະກໍາຂອງພວກເຮົາ',
      readMore: 'ອ່ານເພີ່ມເຕີມ',
      viewAll: 'ເບິ່ງຂ່າວທັງໝົດ'
    },

    // Contact Section
    contact: {
      title: 'ຕິດຕໍ່ ພວກເຮົາ',
      subtitle: 'ພ້ອມທີ່ຈະເລີ່ມໂຄງການຂອງທ່ານບໍ? ຕິດຕໍ່ຜູ້ຊ່ຽວຊານຂອງພວກເຮົາສໍາລັບການປຶກສາມືອາຊີບ.',
      form: {
        title: 'ສົ່ງຂໍ້ຄວາມຫາພວກເຮົາ',
        name: 'ຊື່ເຕັມ',
        email: 'ທີ່ຢູ່ອີເມວ',
        phone: 'ເບີໂທລະສັບ',
        service: 'ຄວາມສົນໃຈໃນບໍລິການ',
        message: 'ຂໍ້ຄວາມ',
        send: 'ສົ່ງຂໍ້ຄວາມ',
        sending: 'ກໍາລັງສົ່ງ...',
        success: 'ສົ່ງຂໍ້ຄວາມສໍາເລັດແລ້ວ!',
        services: {
          construction: 'ການອອກແບບ ແລະ ກໍ່ສ້າງ',
          waterproofing: 'ການແກ້ໄຂການກັນນ້ໍາ',
          flooring: 'ວັດສະດຸພື້ນ',
          consultation: 'ການປຶກສາໂຄງການ',
          renovation: 'ບໍລິການປັບປຸງ',
          maintenance: 'ການສະຫນັບສະຫນູນການບໍາລຸງຮັກສາ'
        }
      },
      info: {
        title: 'ຂໍ້ມູນການຕິດຕໍ່',
        phone: 'ເບີໂທລະສັບ',
        email: 'ທີ່ຢູ່ອີເມວ',
        address: 'ທີ່ຕັ້ງຫ້ອງການ',
        hours: 'ຊົ່ວໂມງເຮັດວຽກ'
      },
      map: {
        title: 'ຊອກຫາພວກເຮົາໃນແຜນທີ່',
        directions: 'ຂໍເສັ້ນທາງ'
      },
      emergency: {
        title: 'ການສະຫນັບສະຫນູນສຸກເສີນ',
        description: 'ຕ້ອງການຄວາມຊ່ວຍເຫຼືອທັນທີບໍ? ທີມງານສະຫນັບສະຫນູນສຸກເສີນຂອງພວກເຮົາມີໃຫ້.',
        available: 'ມີໃຫ້ 24/7'
      }
    },

    // Footer
    footer: {
      description: 'ບໍລິສັດກໍ່ສ້າງຊັ້ນນໍາໃນລາວທີ່ສະເຫນີການອອກແບບກໍ່ສ້າງ, ວັດສະດຸກັນນ້ໍາ, ແລະວັດສະດຸພື້ນ. ການແກ້ໄຂການກໍ່ສ້າງມືອາຊີບທີ່ທ່ານສາມາດໄວ້ວາງໃຈໄດ້.',
      services: 'ບໍລິການ',
      company: 'ບໍລິສັດ',
      contact: 'ຕິດຕໍ່',
      copyright: 'SLK Trading & Design Construction Co., Ltd. ສະຫງວນລິຂະສິດທັງໝົດ.',
      quickQuote: {
        title: 'ຂໍໃບເສນີລາຄາດ່ວນ',
        description: 'ເລີ່ມໂຄງການຂອງທ່ານກັບພວກເຮົາໃນມື້ນີ້',
        button: 'ຕິດຕໍ່ດຽວນີ້'
      },
      links: {
        privacy: 'ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ',
        terms: 'ເງື່ອນໄຂການໃຫ້ບໍລິການ',
        sitemap: 'ແຜນຜັງເວັບໄຊທ໌'
      }
    },

    // Loading Screen
    loading: {
      title: 'SLK Trading',
      subtitle: 'ພໍໂທລການຖານຂໍ້ມູນຫຼາຍການເຂົ້າເຖິງ',
      badge: 'ບໍລິສັດກໍ່ສ້າງຊັ້ນນໍາໃນລາວ',
      steps: {
        database: 'ກໍາລັງເລີ່ມຕົ້ນລະບົບຖານຂໍ້ມູນ',
        auth: 'ກໍາລັງໂຫຼດໂປຣໂຕຄອນການພິສູດຕົວຕົນ',
        interface: 'ກໍາລັງກະກຽມສ່ວນຕໍ່ປະສານຜູ້ໃຊ້ຫຼາຍຄົນ',
        portal: 'ກໍາລັງສໍາເລັດພໍໂທລການເຂົ້າສູ່ລະບົບ'
      },
      waiting: 'ກໍາລັງສ້າງປະສົບການການກໍ່ສ້າງຂອງທ່ານ...',
      status: {
        secure: 'ປອດໄພ',
        professional: 'ມືອາຊີບ',
        multiAccess: 'ຫຼາຍການເຂົ້າເຖິງ'
      },
      preparing: 'ກໍາລັງກະກຽມພໍໂທລການກໍ່ສ້າງພຣີມຽມຂອງທ່ານ...',
      powered: 'ຂັບເຄື່ອນໂດຍ SLK Trading & Design Construction'
    },

    // Admin Panel
    admin: {
      login: {
        title: 'ເຂົ້າສູ່ລະບົບຜູ້ດູແລເວັບໄຊທ໌ SLK',
        subtitle: 'ການເຂົ້າເຖິງການບໍລິຫານລະບົບເຕັມຮູບແບບ',
        email: 'ທີ່ຢູ່ອີເມວ',
        password: 'ລະຫັດຜ່ານ',
        rememberMe: 'ຈື່ຂ້ອຍ',
        forgotPassword: 'ລືມລະຫັດຜ່ານ?',
        signIn: 'ເຂົ້າສູ່ລະບົບ',
        signingIn: 'ກໍາລັງເຂົ້າສູ່ລະບົບ...',
        invalidCredentials: 'ອີເມວ ຫຼື ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ',
        loginFailed: 'ການເຂົ້າສູ່ລະບົບລົ້ມເຫລວ. ກະລຸນາລອງອີກຄັ້ງ.'
      }
    },

    // Common
    common: {
      loading: 'ກໍາລັງໂຫຼດ...',
      error: 'ຂໍ້ຜິດພາດ',
      success: 'ສໍາເລັດ',
      cancel: 'ຍົກເລີກ',
      save: 'ບັນທຶກ',
      edit: 'ແກ້ໄຂ',
      delete: 'ລຶບ',
      confirm: 'ຢືນຢັນ',
      close: 'ປິດ',
      next: 'ຕໍ່ໄປ',
      previous: 'ກ່ອນຫນ້າ',
      submit: 'ສົ່ງ',
      search: 'ຄົ້ນຫາ',
      filter: 'ກັ່ນຕອງ',
      all: 'ທັງໝົດ',
      none: 'ບໍ່ມີ',
      yes: 'ແມ່ນ',
      no: 'ບໍ່'
    }
  },

  th: {
    // Navigation
    nav: {
      home: 'หน้าแรก',
      services: 'บริการ',
      products: 'สินค้า',
      projects: 'โครงการ',
      about: 'เกี่ยวกับเรา',
      news: 'ข่าวสาร',
      contact: 'ติดต่อ',
      admin: 'ผู้ดูแลระบบ'
    },

    // Hero Section
    hero: {
      title: {
        line1: 'สร้างความเป็นเลิศ',
        line2: 'ในลาว'
      },
      badge: 'บริษัทก่อสร้างชั้นนำในลาว',
      description: 'บริการก่อสร้างมืออาชีพ, โซลูชั่นกันซึมระดับพรีเมียม, และวัสดุปูพื้นคุณภาพสำหรับโครงการที่อยู่อาศัย, พาณิชย์, และอุตสาหกรรม',
      service1: 'ออกแบบและก่อสร้าง',
      service2: 'ระบบกันซึม',
      service3: 'วัสดุปูพื้น',
      cta: {
        quote: 'ขอใบเสนอราคาฟรี',
        projects: 'ดูโครงการ'
      },
      stats: {
        years: '15+',
        experience: 'ปีประสบการณ์',
        projects: '200+',
        completed: 'โครงการสำเร็จ',
        client: '100%',
        satisfaction: 'ความพึงพอใจลูกค้า',
        support: '24/7',
        available: 'บริการสนับสนุน'
      }
    },

    // Services Section
    services: {
      title: 'บริการของเรา',
      subtitle: 'โซลูชั่นก่อสร้างครบวงจรที่ปรับให้เหมาะกับความต้องการของคุณ',
      learnMore: 'เรียนรู้เพิ่มเติม',
      construction: {
        title: 'ออกแบบและก่อสร้าง',
        description: 'โซลูชั่นก่อสร้างครบวงจรตั้งแต่แนวคิดจนถึงการเสร็จสิ้นด้วยการจัดการโครงการมืออาชีพ',
        features: [
          'ออกแบบสถาปัตยกรรมและวางแผน',
          'วิศวกรรมโครงสร้าง',
          'การจัดการโครงการ',
          'การควบคุมคุณภาพและตรวจสอบ',
          'บริการออกแบบภายใน',
          'ภูมิสถาปัตยกรรม'
        ]
      },
      waterproofing: {
        title: 'โซลูชั่นกันซึม',
        description: 'ระบบกันซึมขั้นสูงสำหรับการป้องกันที่ยาวนานจากความเสียหายจากความชื้น',
        features: [
          'กันซึมหลังคา',
          'ป้องกันฐานราก',
          'กันซึมห้องใต้ดิน',
          'ซีลห้องน้ำและครัว',
          'กันซึมสระว่ายน้ำ',
          'กันซึมอุตสาหกรรม'
        ]
      },
      flooring: {
        title: 'วัสดุปูพื้น',
        description: 'โซลูชั่นปูพื้นระดับพรีเมียมรวมถึงกระเบื้อง, ไม้แข็ง, และพื้นอุตสาหกรรมเฉพาะทาง',
        features: [
          'กระเบื้องเซรามิกและพอร์ซเลน',
          'พื้นหินธรรมชาติ',
          'ไม้แข็งและลามิเนต',
          'ไวนิลและ LVT',
          'เคลือบอีพ็อกซี่',
          'โซลูชั่นออกแบบเฉพาะ'
        ]
      }
    },

    // Products Section
    products: {
      title: 'สินค้าพรีเมียม',
      subtitle: 'วัสดุก่อสร้างคุณภาพสูงสำหรับผลลัพธ์ที่ยาวนาน',
      waterproofing: {
        title: 'วัสดุกันซึม',
        subtitle: 'โซลูชั่นป้องกันระดับพรีเมียม',
        description: 'ระบบกันซึมขั้นสูงที่ออกแบบมาเพื่อให้การป้องกันที่ยาวนานจากความเสียหายจากความชื้น',
        products: [
          'เมมเบรนชนิดเหลว',
          'เมมเบรนชนิดแผ่น',
          'กันซึมแบบคริสตัล',
          'เรซินฉีด',
          'วัสดุซีลและเคลือบ',
          'ระบบระบายน้ำ'
        ],
        applications: [
          'ระบบหลังคา',
          'ป้องกันฐานราก',
          'กันซึมห้องใต้ดิน',
          'สระว่ายน้ำ',
          'ห้องน้ำและพื้นที่เปียก',
          'สิ่งอำนวยความสะดวกอุตสาหกรรม'
        ],
        features: [
          'ทนต่อรังสี UV',
          'เชื่อมรอยแตก',
          'ใช้งานง่าย',
          'ยาวนาน',
          'เป็นมิตรกับสิ่งแวดล้อม',
          'เกรดมืออาชีพ'
        ]
      },
      flooring: {
        title: 'วัสดุปูพื้น',
        subtitle: 'พื้นผิวที่สวยงามและทนทาน',
        description: 'วัสดุปูพื้นคุณภาพสูงครบวงจรสำหรับการใช้งานที่อยู่อาศัย, พาณิชย์, และอุตสาหกรรม',
        products: [
          'กระเบื้องเซรามิกและพอร์ซเลน',
          'หินธรรมชาติ',
          'พื้นไม้แข็ง',
          'พื้นลามิเนต',
          'ไวนิลและ LVT',
          'เคลือบอีพ็อกซี่'
        ],
        applications: [
          'บ้านพักอาศัย',
          'พื้นที่พาณิชย์',
          'สิ่งอำนวยความสะดวกอุตสาหกรรม',
          'ศูนย์สุขภาพ',
          'สถาบันการศึกษา',
          'สถานที่ให้บริการ'
        ],
        features: [
          'กันลื่น',
          'กันคราบ',
          'ดูแลรักษาง่าย',
          'ทนทาน',
          'สวยงาม',
          'คุ้มค่า'
        ]
      },
      quality: {
        title: 'การรับประกันคุณภาพ',
        subtitle: 'มุ่งมั่นสู่ความเป็นเลิศในทุกผลิตภัณฑ์ที่เราจัดหา',
        premium: {
          title: 'คุณภาพพรีเมียม',
          description: 'เฉพาะวัสดุชั้นเยี่ยมจากแบรนด์นานาชาติที่เชื่อถือได้'
        },
        expert: {
          title: 'การคัดเลือกโดยผู้เชี่ยวชาญ',
          description: 'ผลิตภัณฑ์ที่คัดสรรอย่างพิถีพิถันทดสอบสำหรับสภาพอากาศลาว'
        },
        reliable: {
          title: 'การจัดหาที่เชื่อถือได้',
          description: 'ความพร้อมใช้งานอย่างสม่ำเสมอด้วยเครือข่ายโลจิสติกส์ที่มีประสิทธิภาพ'
        }
      },
      cta: {
        title: 'ต้องการข้อมูลผลิตภัณฑ์?',
        subtitle: 'รับข้อมูลจำเพาะและราคาโดยละเอียดสำหรับวัสดุพรีเมียมของเรา',
        quote: 'ขอใบเสนอราคาผลิตภัณฑ์',
        catalog: 'ดาวน์โหลดแคตตาล็อก'
      }
    },

    // Projects Section
    projects: {
      title: 'โครงการของเรา',
      subtitle: 'แสดงความเป็นเลิศในการก่อสร้างในหลากหลายภาคส่วน',
      completed: 'เสร็จสิ้นใน',
      viewAll: 'ดูโครงการทั้งหมด',
      categories: {
        commercial: 'พาณิชย์',
        residential: 'ที่อยู่อาศัย',
        industrial: 'อุตสาหกรรม',
        hospitality: 'การบริการ',
        education: 'การศึกษา',
        healthcare: 'การแพทย์'
      }
    },

    // About Section
    about: {
      title: 'เกี่ยวกับ SLK Trading',
      description1: 'ด้วยประสบการณ์มากกว่า 15 ปีในอุตสาหกรรมก่อสร้าง, SLK Trading & Design Construction ได้สร้างตัวเองให้เป็นผู้ให้บริการชั้นนำของโซลูชั่นก่อสร้างครบวงจรในลาว',
      description2: 'เราเชี่ยวชาญในบริการออกแบบและก่อสร้าง, วัสดุกันซึมระดับพรีเมียม, และโซลูชั่นปูพื้นคุณภาพสูงสำหรับโครงการที่อยู่อาศัย, พาณิชย์, และอุตสาหกรรม',
      stats: {
        years: '15+',
        yearsDesc: 'ปีแห่งความเป็นเลิศ',
        projects: '200+',
        projectsDesc: 'โครงการสำเร็จ',
        satisfaction: '100%',
        satisfactionDesc: 'ความพึงพอใจลูกค้า',
        support: '24/7',
        supportDesc: 'บริการสนับสนุน'
      },
      values: {
        quality: {
          title: 'ความเป็นเลิศด้านคุณภาพ',
          description: 'เราไม่เคยประนีประนอมเรื่องคุณภาพ, รับประกันว่าทุกโครงการบรรลุมาตรฐานสูงสุด'
        },
        expert: {
          title: 'ทีมผู้เชี่ยวชาญ',
          description: 'มืออาชีพที่มีทักษะของเรานำประสบการณ์หลายปีมาสู่ทุกโครงการ'
        },
        delivery: {
          title: 'การส่งมอบตรงเวลา',
          description: 'เราเข้าใจความสำคัญของกำหนดเวลาและส่งมอบโครงการตรงเวลาอย่างสม่ำเสมอ'
        }
      }
    },

    // Blog Section
    blog: {
      title: 'ข่าวสารล่าสุด',
      subtitle: 'ติดตามข่าวสารล่าสุดเกี่ยวกับโครงการและข้อมูลอุตสาหกรรมของเรา',
      readMore: 'อ่านเพิ่มเติม',
      viewAll: 'ดูข่าวทั้งหมด'
    },

    // Contact Section
    contact: {
      title: 'ติดต่อ เรา',
      subtitle: 'พร้อมที่จะเริ่มโครงการของคุณ? ติดต่อผู้เชี่ยวชาญของเราสำหรับการปรึกษามืออาชีพ',
      form: {
        title: 'ส่งข้อความถึงเรา',
        name: 'ชื่อเต็ม',
        email: 'อีเมล',
        phone: 'เบอร์โทรศัพท์',
        service: 'บริการที่สนใจ',
        message: 'ข้อความ',
        send: 'ส่งข้อความ',
        sending: 'กำลังส่ง...',
        success: 'ส่งข้อความสำเร็จ!',
        services: {
          construction: 'ออกแบบและก่อสร้าง',
          waterproofing: 'โซลูชั่นกันซึม',
          flooring: 'วัสดุปูพื้น',
          consultation: 'ปรึกษาโครงการ',
          renovation: 'บริการปรับปรุง',
          maintenance: 'บริการซ่อมบำรุง'
        }
      },
      info: {
        title: 'ข้อมูลการติดต่อ',
        phone: 'เบอร์โทรศัพท์',
        email: 'อีเมล',
        address: 'ที่ตั้งสำนักงาน',
        hours: 'เวลาทำการ'
      },
      map: {
        title: 'ค้นหาเราบนแผนที่',
        directions: 'ขอเส้นทาง'
      },
      emergency: {
        title: 'บริการฉุกเฉิน',
        description: 'ต้องการความช่วยเหลือทันที? ทีมสนับสนุนฉุกเฉินของเราพร้อมให้บริการ',
        available: 'พร้อมให้บริการ 24/7'
      }
    },

    // Footer
    footer: {
      description: 'บริษัทก่อสร้างชั้นนำในลาวที่ให้บริการออกแบบก่อสร้าง, วัสดุกันซึม, และวัสดุปูพื้น โซลูชั่นการก่อสร้างมืออาชีพที่คุณไว้วางใจได้',
      services: 'บริการ',
      company: 'บริษัท',
      contact: 'ติดต่อ',
      copyright: 'SLK Trading & Design Construction Co., Ltd. สงวนลิขสิทธิ์ทั้งหมด',
      quickQuote: {
        title: 'ขอใบเสนอราคาด่วน',
        description: 'เริ่มโครงการของคุณกับเราวันนี้',
        button: 'ติดต่อเดี๋ยวนี้'
      },
      links: {
        privacy: 'นโยบายความเป็นส่วนตัว',
        terms: 'เงื่อนไขการให้บริการ',
        sitemap: 'แผนผังเว็บไซต์'
      }
    },

    // Loading Screen
    loading: {
      title: 'SLK Trading',
      subtitle: 'พอร์ทัลฐานข้อมูลหลายการเข้าถึง',
      badge: 'บริษัทก่อสร้างชั้นนำในลาว',
      steps: {
        database: 'กำลังเริ่มต้นระบบฐานข้อมูล',
        auth: 'กำลังโหลดโปรโตคอลการพิสูจน์ตัวตน',
        interface: 'กำลังเตรียมส่วนต่อประสานผู้ใช้หลายคน',
        portal: 'กำลังเสร็จสิ้นพอร์ทัลการเข้าสู่ระบบ'
      },
      waiting: 'กำลังสร้างประสบการณ์การก่อสร้างของคุณ...',
      status: {
        secure: 'ปลอดภัย',
        professional: 'มืออาชีพ',
        multiAccess: 'หลายการเข้าถึง'
      },
      preparing: 'กำลังเตรียมพอร์ทัลการก่อสร้างระดับพรีเมียมของคุณ...',
      powered: 'ขับเคลื่อนโดย SLK Trading & Design Construction'
    },

    // Admin Panel
    admin: {
      login: {
        title: 'เข้าสู่ระบบผู้ดูแลเว็บไซต์ SLK',
        subtitle: 'การเข้าถึงการบริหารระบบเต็มรูปแบบ',
        email: 'อีเมล',
        password: 'รหัสผ่าน',
        rememberMe: 'จำฉัน',
        forgotPassword: 'ลืมรหัสผ่าน?',
        signIn: 'เข้าสู่ระบบ',
        signingIn: 'กำลังเข้าสู่ระบบ...',
        invalidCredentials: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง',
        loginFailed: 'เข้าสู่ระบบล้มเหลว โปรดลองอีกครั้ง'
      }
    },

    // Common
    common: {
      loading: 'กำลังโหลด...',
      error: 'ข้อผิดพลาด',
      success: 'สำเร็จ',
      cancel: 'ยกเลิก',
      save: 'บันทึก',
      edit: 'แก้ไข',
      delete: 'ลบ',
      confirm: 'ยืนยัน',
      close: 'ปิด',
      next: 'ถัดไป',
      previous: 'ก่อนหน้า',
      submit: 'ส่ง',
      search: 'ค้นหา',
      filter: 'กรอง',
      all: 'ทั้งหมด',
      none: 'ไม่มี',
      yes: 'ใช่',
      no: 'ไม่'
    }
  },

  zh: {
    // Navigation
    nav: {
      home: '首页',
      services: '服务',
      products: '产品',
      projects: '项目',
      about: '关于我们',
      news: '新闻',
      contact: '联系我们',
      admin: '管理员'
    },

    // Hero Section
    hero: {
      title: {
        line1: '在老挝建设',
        line2: '卓越工程'
      },
      badge: '老挝领先建筑公司',
      description: '专业建筑服务、优质防水解决方案和高品质地板材料，适用于住宅、商业和工业项目。',
      service1: '设计与建筑',
      service2: '防水工程',
      service3: '地板材料',
      cta: {
        quote: '获取免费报价',
        projects: '查看项目'
      },
      stats: {
        years: '15+',
        experience: '年经验',
        projects: '200+',
        completed: '已完成项目',
        client: '100%',
        satisfaction: '客户满意度',
        support: '24/7',
        available: '全天候支持'
      }
    },

    // Services Section
    services: {
      title: '我们的服务',
      subtitle: '量身定制的全面建筑解决方案',
      learnMore: '了解更多',
      construction: {
        title: '设计与建筑',
        description: '从概念到完工的全面建筑解决方案，配合专业项目管理。',
        features: [
          '建筑设计与规划',
          '结构工程',
          '项目管理',
          '质量控制与检查',
          '室内设计服务',
          '景观建筑'
        ]
      },
      waterproofing: {
        title: '防水解决方案',
        description: '先进的防水系统，提供持久保护，防止湿气损害。',
        features: [
          '屋顶防水',
          '基础保护',
          '地下室防水',
          '浴室和厨房密封',
          '游泳池防水',
          '工业防水'
        ]
      },
      flooring: {
        title: '地板材料',
        description: '优质地板解决方案，包括瓷砖、硬木和专业工业地板。',
        features: [
          '陶瓷和瓷砖',
          '天然石材地板',
          '硬木和复合地板',
          '乙烯基和LVT地板',
          '环氧地板涂料',
          '定制设计解决方案'
        ]
      }
    },

    // Products Section
    products: {
      title: '优质产品',
      subtitle: '高品质建筑材料，持久效果',
      waterproofing: {
        title: '防水材料',
        subtitle: '优质保护解决方案',
        description: '先进的防水系统，设计用于提供持久保护，防止湿气损害。',
        products: [
          '液体应用膜',
          '片材防水膜',
          '结晶防水',
          '注射树脂',
          '密封剂和涂料',
          '排水系统'
        ],
        applications: [
          '屋顶系统',
          '基础保护',
          '地下室防水',
          '游泳池',
          '浴室和湿区',
          '工业设施'
        ],
        features: [
          '抗UV',
          '桥接裂缝',
          '易于应用',
          '持久耐用',
          '环保',
          '专业级别'
        ]
      },
      flooring: {
        title: '地板材料',
        subtitle: '优雅耐用的表面',
        description: '全面的优质地板材料，适用于住宅、商业和工业应用。',
        products: [
          '陶瓷和瓷砖',
          '天然石材',
          '硬木地板',
          '复合地板',
          '乙烯基和LVT',
          '环氧涂料'
        ],
        applications: [
          '住宅',
          '商业空间',
          '工业设施',
          '医疗中心',
          '教育机构',
          '酒店场所'
        ],
        features: [
          '防滑',
          '防污',
          '低维护',
          '耐用',
          '美观',
          '成本效益'
        ]
      },
      quality: {
        title: '质量保证',
        subtitle: '致力于我们提供的每一种产品的卓越品质',
        premium: {
          title: '优质品质',
          description: '仅使用来自可信国际品牌的最优质材料'
        },
        expert: {
          title: '专家选择',
          description: '精心挑选的产品，经过老挝气候条件测试'
        },
        reliable: {
          title: '可靠供应',
          description: '通过高效物流网络保持一致的可用性'
        }
      },
      cta: {
        title: '需要产品信息？',
        subtitle: '获取我们优质材料的详细规格和价格',
        quote: '获取产品报价',
        catalog: '下载目录'
      }
    },

    // Projects Section
    projects: {
      title: '我们的项目',
      subtitle: '展示各个领域的建筑卓越',
      completed: '完成于',
      viewAll: '查看所有项目',
      categories: {
        commercial: '商业',
        residential: '住宅',
        industrial: '工业',
        hospitality: '酒店',
        education: '教育',
        healthcare: '医疗'
      }
    },

    // About Section
    about: {
      title: '关于 SLK Trading',
      description1: '凭借超过15年的建筑行业经验，SLK Trading & Design Construction已成为老挝领先的综合建筑解决方案提供商。',
      description2: '我们专注于设计和建筑服务、优质防水材料和高品质地板解决方案，适用于住宅、商业和工业项目。',
      stats: {
        years: '15+',
        yearsDesc: '年卓越经验',
        projects: '200+',
        projectsDesc: '已完成项目',
        satisfaction: '100%',
        satisfactionDesc: '客户满意度',
        support: '24/7',
        supportDesc: '全天候支持'
      },
      values: {
        quality: {
          title: '质量卓越',
          description: '我们从不在质量上妥协，确保每个项目都达到最高标准。'
        },
        expert: {
          title: '专家团队',
          description: '我们技术熟练的专业人员为每个项目带来多年经验。'
        },
        delivery: {
          title: '按时交付',
          description: '我们理解截止日期的重要性，始终按时交付项目。'
        }
      }
    },

    // Blog Section
    blog: {
      title: '最新消息',
      subtitle: '了解我们最新的项目和行业见解',
      readMore: '阅读更多',
      viewAll: '查看所有新闻'
    },

    // Contact Section
    contact: {
      title: '联系 我们',
      subtitle: '准备开始您的项目？联系我们的专家进行专业咨询。',
      form: {
        title: '给我们发送消息',
        name: '全名',
        email: '电子邮件',
        phone: '电话号码',
        service: '感兴趣的服务',
        message: '消息',
        send: '发送消息',
        sending: '发送中...',
        success: '消息发送成功！',
        services: {
          construction: '设计与建筑',
          waterproofing: '防水解决方案',
          flooring: '地板材料',
          consultation: '项目咨询',
          renovation: '翻新服务',
          maintenance: '维护支持'
        }
      },
      info: {
        title: '联系信息',
        phone: '电话号码',
        email: '电子邮件',
        address: '办公地点',
        hours: '营业时间'
      },
      map: {
        title: '在地图上找到我们',
        directions: '获取路线'
      },
      emergency: {
        title: '紧急支持',
        description: '需要立即帮助？我们的紧急支持团队全天候可用。',
        available: '24/7 可用'
      }
    },

    // Footer
    footer: {
      description: '老挝领先的建筑公司，提供设计建筑、防水材料和地板材料。您可以信赖的专业建筑解决方案。',
      services: '服务',
      company: '公司',
      contact: '联系',
      copyright: 'SLK Trading & Design Construction Co., Ltd. 版权所有。',
      quickQuote: {
        title: '获取快速报价',
        description: '今天就开始您的项目',
        button: '立即联系'
      },
      links: {
        privacy: '隐私政策',
        terms: '服务条款',
        sitemap: '网站地图'
      }
    },

    // Loading Screen
    loading: {
      title: 'SLK Trading',
      subtitle: '多访问数据库门户',
      badge: '老挝领先建筑公司',
      steps: {
        database: '初始化数据库系统',
        auth: '加载认证协议',
        interface: '准备多用户界面',
        portal: '完成登录门户'
      },
      waiting: '构建您的建筑体验...',
      status: {
        secure: '安全',
        professional: '专业',
        multiAccess: '多重访问'
      },
      preparing: '准备您的高级建筑门户...',
      powered: '由 SLK Trading & Design Construction 提供支持'
    },

    // Admin Panel
    admin: {
      login: {
        title: 'SLK 网站管理员登录',
        subtitle: '完整系统管理访问',
        email: '电子邮件',
        password: '密码',
        rememberMe: '记住我',
        forgotPassword: '忘记密码？',
        signIn: '登录',
        signingIn: '登录中...',
        invalidCredentials: '无效的电子邮件或密码',
        loginFailed: '登录失败。请重试。'
      }
    },

    // Common
    common: {
      loading: '加载中...',
      error: '错误',
      success: '成功',
      cancel: '取消',
      save: '保存',
      edit: '编辑',
      delete: '删除',
      confirm: '确认',
      close: '关闭',
      next: '下一步',
      previous: '上一步',
      submit: '提交',
      search: '搜索',
      filter: '筛选',
      all: '全部',
      none: '无',
      yes: '是',
      no: '否'
    }
  },

  vi: {
    // Navigation
    nav: {
      home: 'Trang chủ',
      services: 'Dịch vụ',
      products: 'Sản phẩm',
      projects: 'Dự án',
      about: 'Giới thiệu',
      news: 'Tin tức',
      contact: 'Liên hệ',
      admin: 'Quản trị'
    },

    // Hero Section
    hero: {
      title: {
        line1: 'Xây dựng Chất lượng',
        line2: 'tại Lào'
      },
      badge: 'Công ty Xây dựng Hàng đầu tại Lào',
      description: 'Dịch vụ xây dựng chuyên nghiệp, giải pháp chống thấm cao cấp và vật liệu sàn chất lượng cho các dự án dân dụng, thương mại và công nghiệp.',
      service1: 'Thiết kế & Xây dựng',
      service2: 'Chống thấm',
      service3: 'Vật liệu Sàn',
      cta: {
        quote: 'Nhận Báo giá Miễn phí',
        projects: 'Xem Dự án'
      },
      stats: {
        years: '15+',
        experience: 'Năm Kinh nghiệm',
        projects: '200+',
        completed: 'Dự án Hoàn thành',
        client: '100%',
        satisfaction: 'Sự Hài lòng của Khách hàng',
        support: '24/7',
        available: 'Hỗ trợ Sẵn có'
      }
    },

    // Services Section
    services: {
      title: 'Dịch vụ của Chúng tôi',
      subtitle: 'Giải pháp xây dựng toàn diện được điều chỉnh theo nhu cầu của bạn',
      learnMore: 'Tìm hiểu thêm',
      construction: {
        title: 'Thiết kế & Xây dựng',
        description: 'Giải pháp xây dựng toàn diện từ khái niệm đến hoàn thành với quản lý dự án chuyên nghiệp.',
        features: [
          'Thiết kế & Quy hoạch Kiến trúc',
          'Kỹ thuật Kết cấu',
          'Quản lý Dự án',
          'Kiểm soát & Kiểm tra Chất lượng',
          'Dịch vụ Thiết kế Nội thất',
          'Kiến trúc Cảnh quan'
        ]
      },
      waterproofing: {
        title: 'Giải pháp Chống thấm',
        description: 'Hệ thống chống thấm tiên tiến cho bảo vệ lâu dài chống lại hư hỏng do ẩm ướt.',
        features: [
          'Chống thấm Mái',
          'Bảo vệ Nền móng',
          'Chống thấm Tầng hầm',
          'Phòng tắm & Bếp',
          'Chống thấm Hồ bơi',
          'Chống thấm Công nghiệp'
        ]
      },
      flooring: {
        title: 'Vật liệu Sàn',
        description: 'Giải pháp sàn cao cấp bao gồm gạch, sàn gỗ cứng và sàn công nghiệp chuyên dụng.',
        features: [
          'Gạch Ceramic & Porcelain',
          'Sàn Đá tự nhiên',
          'Sàn gỗ cứng & Laminate',
          'Sàn Vinyl & LVT',
          'Phủ Epoxy',
          'Giải pháp Thiết kế Tùy chỉnh'
        ]
      }
    },

    // Products Section
    products: {
      title: 'Sản phẩm Cao cấp',
      subtitle: 'Vật liệu xây dựng chất lượng cao cho kết quả bền lâu',
      waterproofing: {
        title: 'Vật liệu Chống thấm',
        subtitle: 'Giải pháp bảo vệ cao cấp',
        description: 'Hệ thống chống thấm tiên tiến được thiết kế để cung cấp bảo vệ lâu dài chống lại hư hỏng do ẩm ướt.',
        products: [
          'Màng Lỏng',
          'Màng Tấm',
          'Chống thấm Tinh thể',
          'Nhựa Tiêm',
          'Chất Bịt kín & Phủ',
          'Hệ thống Thoát nước'
        ],
        applications: [
          'Hệ thống Mái',
          'Bảo vệ Nền móng',
          'Chống thấm Tầng hầm',
          'Hồ bơi',
          'Phòng tắm & Khu vực Ẩm ướt',
          'Cơ sở Công nghiệp'
        ],
        features: [
          'Chống UV',
          'Bắc cầu Vết nứt',
          'Dễ Thi công',
          'Bền lâu',
          'Thân thiện Môi trường',
          'Cấp độ Chuyên nghiệp'
        ]
      },
      flooring: {
        title: 'Vật liệu Sàn',
        subtitle: 'Bề mặt thanh lịch và bền bỉ',
        description: 'Phạm vi toàn diện các vật liệu sàn cao cấp cho ứng dụng dân dụng, thương mại và công nghiệp.',
        products: [
          'Gạch Ceramic & Porcelain',
          'Đá Tự nhiên',
          'Sàn gỗ Cứng',
          'Sàn Laminate',
          'Vinyl & LVT',
          'Phủ Epoxy'
        ],
        applications: [
          'Nhà ở',
          'Không gian Thương mại',
          'Cơ sở Công nghiệp',
          'Trung tâm Y tế',
          'Cơ sở Giáo dục',
          'Địa điểm Khách sạn'
        ],
        features: [
          'Chống Trượt',
          'Chống Vết bẩn',
          'Bảo trì Thấp',
          'Bền bỉ',
          'Thẩm mỹ',
          'Hiệu quả Chi phí'
        ]
      },
      quality: {
        title: 'Đảm bảo Chất lượng',
        subtitle: 'Cam kết sự xuất sắc trong mọi sản phẩm chúng tôi cung cấp',
        premium: {
          title: 'Chất lượng Premium',
          description: 'Chỉ những vật liệu tốt nhất từ các thương hiệu quốc tế đáng tin cậy'
        },
        expert: {
          title: 'Lựa chọn Chuyên gia',
          description: 'Sản phẩm được tuyển chọn cẩn thận đã được kiểm nghiệm cho điều kiện khí hậu Lào'
        },
        reliable: {
          title: 'Cung cấp Đáng tin cậy',
          description: 'Tính sẵn có nhất quán với mạng lưới hậu cần hiệu quả'
        }
      },
      cta: {
        title: 'Cần Thông tin Sản phẩm?',
        subtitle: 'Nhận thông số kỹ thuật chi tiết và giá cả cho vật liệu cao cấp của chúng tôi',
        quote: 'Nhận Báo giá Sản phẩm',
        catalog: 'Tải xuống Catalog'
      }
    },

    // Projects Section
    projects: {
      title: 'Dự án của Chúng tôi',
      subtitle: 'Thể hiện sự xuất sắc trong xây dựng trên nhiều lĩnh vực',
      completed: 'Hoàn thành vào',
      viewAll: 'Xem Tất cả Dự án',
      categories: {
        commercial: 'Thương mại',
        residential: 'Dân cư',
        industrial: 'Công nghiệp',
        hospitality: 'Khách sạn',
        education: 'Giáo dục',
        healthcare: 'Y tế'
      }
    },

    // About Section
    about: {
      title: 'Giới thiệu về SLK Trading',
      description1: 'Với hơn 15 năm kinh nghiệm trong ngành xây dựng, SLK Trading & Design Construction đã thiết lập mình là nhà cung cấp hàng đầu các giải pháp xây dựng toàn diện tại Lào.',
      description2: 'Chúng tôi chuyên về dịch vụ thiết kế và xây dựng, vật liệu chống thấm cao cấp và giải pháp sàn chất lượng cao cho các dự án dân dụng, thương mại và công nghiệp.',
      stats: {
        years: '15+',
        yearsDesc: 'Năm Xuất sắc',
        projects: '200+',
        projectsDesc: 'Dự án Hoàn thành',
        satisfaction: '100%',
        satisfactionDesc: 'Sự Hài lòng của Khách hàng',
        support: '24/7',
        supportDesc: 'Hỗ trợ Sẵn có'
      },
      values: {
        quality: {
          title: 'Chất lượng Xuất sắc',
          description: 'Chúng tôi không bao giờ thỏa hiệp về chất lượng, đảm bảo mọi dự án đều đạt tiêu chuẩn cao nhất.'
        },
        expert: {
          title: 'Đội ngũ Chuyên gia',
          description: 'Các chuyên gia có kỹ năng của chúng tôi mang nhiều năm kinh nghiệm đến mọi dự án.'
        },
        delivery: {
          title: 'Giao hàng Đúng hẹn',
          description: 'Chúng tôi hiểu tầm quan trọng của thời hạn và luôn giao dự án đúng thời gian.'
        }
      }
    },

    // Blog Section
    blog: {
      title: 'Tin tức Mới nhất',
      subtitle: 'Cập nhật với các dự án mới nhất và thông tin ngành của chúng tôi',
      readMore: 'Đọc thêm',
      viewAll: 'Xem Tất cả Tin tức'
    },

    // Contact Section
    contact: {
      title: 'Liên hệ Chúng tôi',
      subtitle: 'Sẵn sàng bắt đầu dự án của bạn? Liên hệ với các chuyên gia của chúng tôi để được tư vấn chuyên nghiệp',
      form: {
        title: 'Gửi Tin nhắn cho Chúng tôi',
        name: 'Họ tên',
        email: 'Địa chỉ Email',
        phone: 'Số Điện thoại',
        service: 'Dịch vụ Quan tâm',
        message: 'Tin nhắn',
        send: 'Gửi Tin nhắn',
        sending: 'Đang gửi...',
        success: 'Gửi Tin nhắn Thành công!',
        services: {
          construction: 'Thiết kế & Xây dựng',
          waterproofing: 'Giải pháp Chống thấm',
          flooring: 'Vật liệu Sàn',
          consultation: 'Tư vấn Dự án',
          renovation: 'Dịch vụ Cải tạo',
          maintenance: 'Hỗ trợ Bảo trì'
        }
      },
      info: {
        title: 'Thông tin Liên hệ',
        phone: 'Số Điện thoại',
        email: 'Địa chỉ Email',
        address: 'Địa điểm Văn phòng',
        hours: 'Giờ Làm việc'
      },
      map: {
        title: 'Tìm Chúng tôi trên Bản đồ',
        directions: 'Nhận Chỉ đường'
      },
      emergency: {
        title: 'Hỗ trợ Khẩn cấp',
        description: 'Cần hỗ trợ ngay lập tức? Đội ngũ hỗ trợ khẩn cấp của chúng tôi luôn sẵn sàng.',
        available: 'Sẵn sàng 24/7'
      }
    },

    // Footer
    footer: {
      description: 'Công ty xây dựng hàng đầu tại Lào cung cấp thiết kế xây dựng, vật liệu chống thấm và vật liệu sàn. Giải pháp xây dựng chuyên nghiệp bạn có thể tin tưởng.',
      services: 'Dịch vụ',
      company: 'Công ty',
      contact: 'Liên hệ',
      copyright: 'SLK Trading & Design Construction Co., Ltd. Bản quyền đã được bảo hộ.',
      quickQuote: {
        title: 'Nhận Báo giá Nhanh',
        description: 'Bắt đầu dự án của bạn với chúng tôi ngay hôm nay',
        button: 'Liên hệ Ngay'
      },
      links: {
        privacy: 'Chính sách Bảo mật',
        terms: 'Điều khoản Dịch vụ',
        sitemap: 'Sơ đồ Trang web'
      }
    },

    // Loading Screen
    loading: {
      title: 'SLK Trading',
      subtitle: 'Cổng Cơ sở Dữ liệu Đa Truy cập',
      badge: 'Công ty Xây dựng Hàng đầu tại Lào',
      steps: {
        database: 'Khởi tạo Hệ thống Cơ sở Dữ liệu',
        auth: 'Đang tải Giao thức Xác thực',
        interface: 'Chuẩn bị Giao diện Đa Người dùng',
        portal: 'Hoàn thiện Cổng Đăng nhập'
      },
      waiting: 'Đang xây dựng trải nghiệm xây dựng của bạn...',
      status: {
        secure: 'An toàn',
        professional: 'Chuyên nghiệp',
        multiAccess: 'Đa Truy cập'
      },
      preparing: 'Đang chuẩn bị cổng xây dựng cao cấp của bạn...',
      powered: 'Được cung cấp bởi SLK Trading & Design Construction'
    },

    // Admin Panel
    admin: {
      login: {
        title: 'Đăng nhập Quản trị Trang web SLK',
        subtitle: 'Truy cập quản trị hệ thống đầy đủ',
        email: 'Địa chỉ Email',
        password: 'Mật khẩu',
        rememberMe: 'Ghi nhớ Tôi',
        forgotPassword: 'Quên Mật khẩu?',
        signIn: 'Đăng nhập',
        signingIn: 'Đang đăng nhập...',
        invalidCredentials: 'Email hoặc mật khẩu không hợp lệ',
        loginFailed: 'Đăng nhập thất bại. Vui lòng thử lại.'
      }
    },

    // Common
    common: {
      loading: 'Đang tải...',
      error: 'Lỗi',
      success: 'Thành công',
      cancel: 'Hủy',
      save: 'Lưu',
      edit: 'Chỉnh sửa',
      delete: 'Xóa',
      confirm: 'Xác nhận',
      close: 'Đóng',
      next: 'Tiếp theo',
      previous: 'Trước',
      submit: 'Gửi',
      search: 'Tìm kiếm',
      filter: 'Lọc',
      all: 'Tất cả',
      none: 'Không có',
      yes: 'Có',
      no: 'Không'
    }
  },

  hu: {
    // Navigation
    nav: {
      home: 'Kezdőlap',
      services: 'Szolgáltatások',
      products: 'Termékek',
      projects: 'Projektek',
      about: 'Rólunk',
      news: 'Hírek',
      contact: 'Kapcsolat',
      admin: 'Admin'
    },

    // Hero Section
    hero: {
      title: {
        line1: 'Kiváló építkezés',
        line2: 'Laoszban'
      },
      badge: 'Vezető építőipari vállalat Laoszban',
      description: 'Professzionális építési szolgáltatások, prémium vízszigetelési megoldások és minőségi padlóburkolati anyagok lakossági, kereskedelmi és ipari projektekhez.',
      service1: 'Tervezés és Építés',
      service2: 'Vízszigetelés',
      service3: 'Padlóburkolati Anyagok',
      cta: {
        quote: 'Ingyenes Árajánlat',
        projects: 'Projektek Megtekintése'
      },
      stats: {
        years: '15+',
        experience: 'Év Tapasztalat',
        projects: '200+',
        completed: 'Befejezett Projekt',
        client: '100%',
        satisfaction: 'Ügyfélelégedettség',
        support: '24/7',
        available: 'Elérhető Támogatás'
      }
    },

    // Services Section
    services: {
      title: 'Szolgáltatásaink',
      subtitle: 'Átfogó építési megoldások az Ön igényeire szabva',
      learnMore: 'Tudjon meg többet',
      construction: {
        title: 'Tervezés és Építés',
        description: 'Teljes körű építési megoldások a koncepciótól a befejezésig professzionális projektmenedzsmenttel.',
        features: [
          'Építészeti Tervezés és Tervezés',
          'Szerkezeti Mérnöki Munka',
          'Projektmenedzsment',
          'Minőségellenőrzés és Felügyelet',
          'Belsőépítészeti Szolgáltatások',
          'Tájépítészet'
        ]
      },
      waterproofing: {
        title: 'Vízszigetelési Megoldások',
        description: 'Fejlett vízszigetelési rendszerek a nedvesség okozta károk elleni tartós védelemért.',
        features: [
          'Tetőszigetelés',
          'Alapvédelem',
          'Pinceszigetelés',
          'Fürdőszoba és Konyha Szigetelés',
          'Úszómedence Vízszigetelés',
          'Ipari Vízszigetelés'
        ]
      },
      flooring: {
        title: 'Padlóburkolati Anyagok',
        description: 'Prémium padlóburkolati megoldások, beleértve a csempéket, keményfa és speciális ipari padlóburkolatokat.',
        features: [
          'Kerámia és Porcelán Csempék',
          'Természetes Kő Padlóburkolat',
          'Keményfa és Laminált Padló',
          'Vinyl és LVT Padlóburkolat',
          'Epoxi Padlóbevonatok',
          'Egyedi Tervezési Megoldások'
        ]
      }
    },

    // Products Section
    products: {
      title: 'Prémium Termékek',
      subtitle: 'Kiváló minőségű építőanyagok tartós eredményekért',
      waterproofing: {
        title: 'Vízszigetelő Anyagok',
        subtitle: 'Prémium védelmi megoldások',
        description: 'Fejlett vízszigetelési rendszerek, amelyeket a nedvesség okozta károk elleni tartós védelem biztosítására terveztek.',
        products: [
          'Folyékony Felhordású Membránok',
          'Lemezes Membránok',
          'Kristályos Vízszigetelés',
          'Injektáló Gyanták',
          'Tömítőanyagok és Bevonatok',
          'Vízelvezető Rendszerek'
        ],
        applications: [
          'Tetőrendszerek',
          'Alapvédelem',
          'Pinceszigetelés',
          'Úszómedencék',
          'Fürdőszobák és Nedves Területek',
          'Ipari Létesítmények'
        ],
        features: [
          'UV-álló',
          'Repedésáthidaló',
          'Könnyű Alkalmazás',
          'Hosszú élettartamú',
          'Környezetbarát',
          'Professzionális Minőség'
        ]
      },
      flooring: {
        title: 'Padlóburkolati Anyagok',
        subtitle: 'Elegáns és tartós felületek',
        description: 'Átfogó prémium padlóburkolati anyagok lakossági, kereskedelmi és ipari alkalmazásokhoz.',
        products: [
          'Kerámia és Porcelán Csempék',
          'Természetes Kő',
          'Keményfa Padlóburkolat',
          'Laminált Padló',
          'Vinyl és LVT',
          'Epoxi Bevonatok'
        ],
        applications: [
          'Lakóházak',
          'Kereskedelmi Terek',
          'Ipari Létesítmények',
          'Egészségügyi Központok',
          'Oktatási Intézmények',
          'Vendéglátóipari Helyszínek'
        ],
        features: [
          'Csúszásmentes',
          'Folttaszító',
          'Alacsony Karbantartási Igény',
          'Tartós',
          'Esztétikus',
          'Költséghatékony'
        ]
      },
      quality: {
        title: 'Minőségbiztosítás',
        subtitle: 'Elkötelezettség a kiválóság mellett minden általunk szállított termékben',
        premium: {
          title: 'Prémium-Qualität',
          description: 'Nur die feinsten Materialien von vertrauenswürdigen internationalen Marken'
        },
        expert: {
          title: 'Expertenauswahl',
          description: 'Sorgfältig kuratierte Produkte, getestet für laotische Klimabedingungen'
        },
        reliable: {
          title: 'Zuverlässige Lieferung',
          description: 'Konsistente Verfügbarkeit mit effizientem Logistiknetzwerk'
        }
      },
      cta: {
        title: 'Termékinformációra van szüksége?',
        subtitle: 'Kapjon részletes specifikációkat és árakat prémium anyagainkhoz',
        quote: 'Kérjen Termék Árajánlatot',
        catalog: 'Katalógus Letöltése'
      }
    },

    // Projects Section
    projects: {
      title: 'Projektjeink',
      subtitle: 'Építési kiválóság bemutatása különböző szektorokban',
      completed: 'Befejezett',
      viewAll: 'Összes Projekt Megtekintése',
      categories: {
        commercial: 'Kereskedelmi',
        residential: 'Lakossági',
        industrial: 'Ipari',
        hospitality: 'Vendéglátás',
        education: 'Oktatás',
        healthcare: 'Egészségügy'
      }
    },

    // About Section
    about: {
      title: 'Az SLK Trading-ről',
      description1: 'Több mint 15 éves építőipari tapasztalattal az SLK Trading & Design Construction Laosz vezető átfogó építési megoldásokat nyújtó szolgáltatójává vált.',
      description2: 'Tervezési és építési szolgáltatásokra, prémium vízszigetelő anyagokra és kiváló minőségű padlóburkolati megoldásokra specializálódtunk lakossági, kereskedelmi és ipari projektekhez.',
      stats: {
        years: '15+',
        yearsDesc: 'Év Kiválóság',
        projects: '200+',
        projectsDesc: 'Befejezett Projekt',
        satisfaction: '100%',
        satisfactionDesc: 'Ügyfélelégedettség',
        support: '24/7',
        supportDesc: 'Elérhető Támogatás'
      },
      values: {
        quality: {
          title: 'Minőségi Kiválóság',
          description: 'Soha nem kötünk kompromisszumot a minőség terén, biztosítva, hogy minden projekt megfeleljen a legmagasabb szabványoknak.'
        },
        expert: {
          title: 'Szakértő Csapat',
          description: 'Képzett szakembereink sokéves tapasztalatot hoznak minden projektbe.'
        },
        delivery: {
          title: 'Időben Történő Szállítás',
          description: 'Megértjük a határidők fontosságát, és következetesen időben szállítunk.'
        }
      }
    },

    // Blog Section
    blog: {
      title: 'Legfrissebb Hírek',
      subtitle: 'Maradjon naprakész legújabb projektjeinkkel és iparági betekintéseinkkel',
      readMore: 'Tovább olvasom',
      viewAll: 'Összes Hír Megtekintése'
    },

    // Contact Section
    contact: {
      title: 'Kapcsolat',
      subtitle: 'Készen áll projektje elindítására? Vegye fel a kapcsolatot szakértőinkkel professzionális konzultációért.',
      form: {
        title: 'Küldjön Üzenetet',
        name: 'Teljes Név',
        email: 'Email Cím',
        phone: 'Telefonszám',
        service: 'Érdeklődés Szolgáltatás',
        message: 'Üzenet',
        send: 'Üzenet Küldése',
        sending: 'Küldés...',
        success: 'Üzenet Sikeresen Elküldve!',
        services: {
          construction: 'Tervezés és Építés',
          waterproofing: 'Vízszigetelési Megoldások',
          flooring: 'Padlóburkolati Anyagok',
          consultation: 'Projekt Konzultáció',
          renovation: 'Felújítási Szolgáltatások',
          maintenance: 'Karbantartási Támogatás'
        }
      },
      info: {
        title: 'Kapcsolati Információk',
        phone: 'Telefonszámok',
        email: 'Email Címek',
        address: 'Iroda Helyszíne',
        hours: 'Nyitvatartási Idő'
      },
      map: {
        title: 'Találjon Meg Minket a Térképen',
        directions: 'Útvonaltervezés'
      },
      emergency: {
        title: 'Sürgősségi Támogatás',
        description: 'Azonnali segítségre van szüksége? Sürgősségi támogató csapatunk elérhető.',
        available: '24/7 Elérhető'
      }
    },

    // Footer
    footer: {
      description: 'Vezető építőipari vállalat Laoszban, amely tervezési és építési szolgáltatásokat, vízszigetelő anyagokat és padlóburkolati anyagokat kínál. Professzionális építési megoldások, amelyekben megbízhat.',
      services: 'Szolgáltatások',
      company: 'Vállalat',
      contact: 'Kapcsolat',
      copyright: 'SLK Trading & Design Construction Co., Ltd. Minden jog fenntartva.',
      quickQuote: {
        title: 'Gyors Árajánlat',
        description: 'Indítsa el projektjét velünk még ma',
        button: 'Kapcsolat Most'
      },
      links: {
        privacy: 'Adatvédelmi Irányelvek',
        terms: 'Szolgáltatási Feltételek',
        sitemap: 'Oldaltérkép'
      }
    },

    // Loading Screen
    loading: {
      title: 'SLK Trading',
      subtitle: 'Többszörös Hozzáférésű Adatbázis Portál',
      badge: 'Vezető Építőipari Vállalat Laoszban',
      steps: {
        database: 'Adatbázis Rendszerek Inicializálása',
        auth: 'Hitelesítési Protokollok Betöltése',
        interface: 'Többfelhasználós Felület Előkészítése',
        portal: 'Bejelentkezési Portál Véglegesítése'
      },
      waiting: 'Építési élményének létrehozása...',
      status: {
        secure: 'Biztonságos',
        professional: 'Professzionális',
        multiAccess: 'Többszörös Hozzáférés'
      },
      preparing: 'Prémium építési portáljának előkészítése...',
      powered: 'Az SLK Trading & Design Construction támogatásával'
    },

    // Admin Panel
    admin: {
      login: {
        title: 'SLK Weboldal Admin Bejelentkezés',
        subtitle: 'Teljes rendszeradminisztrációs hozzáférés',
        email: 'Email Cím',
        password: 'Jelszó',
        rememberMe: 'Emlékezz Rám',
        forgotPassword: 'Jelszó elfelejtve?',
        signIn: 'Bejelentkezés',
        signingIn: 'Bejelentkezés...',
        invalidCredentials: 'Érvénytelen email vagy jelszó',
        loginFailed: 'Bejelentkezés sikertelen. Kérjük, próbálja újra.'
      }
    },

    // Common
    common: {
      loading: 'Betöltés...',
      error: 'Hiba',
      success: 'Siker',
      cancel: 'Mégse',
      save: 'Mentés',
      edit: 'Szerkesztés',
      delete: 'Törlés',
      confirm: 'Megerősítés',
      close: 'Bezárás',
      next: 'Következő',
      previous: 'Előző',
      submit: 'Beküldés',
      search: 'Keresés',
      filter: 'Szűrés',
      all: 'Összes',
      none: 'Nincs',
      yes: 'Igen',
      no: 'Nem'
    }
  },

  de: {
    // Navigation
    nav: {
      home: 'Startseite',
      services: 'Dienstleistungen',
      products: 'Produkte',
      projects: 'Projekte',
      about: 'Über uns',
      news: 'Neuigkeiten',
      contact: 'Kontakt',
      admin: 'Admin'
    },

    // Hero Section
    hero: {
      title: {
        line1: 'Bauexzellenz',
        line2: 'in Laos'
      },
      badge: 'Führendes Bauunternehmen in Laos',
      description: 'Professionelle Baudienstleistungen, erstklassige Abdichtungslösungen und hochwertige Bodenbelagsmaterialien für Wohn-, Gewerbe- und Industrieprojekte.',
      service1: 'Design & Konstruktion',
      service2: 'Abdichtung',
      service3: 'Bodenbelagsmaterialien',
      cta: {
        quote: 'Kostenloses Angebot',
        projects: 'Projekte ansehen'
      },
      stats: {
        years: '15+',
        experience: 'Jahre Erfahrung',
        projects: '200+',
        completed: 'Abgeschlossene Projekte',
        client: '100%',
        satisfaction: 'Kundenzufriedenheit',
        support: '24/7',
        available: 'Support verfügbar'
      }
    },

    // Services Section
    services: {
      title: 'Unsere Dienstleistungen',
      subtitle: 'Umfassende Baulösungen, maßgeschneidert für Ihre Bedürfnisse',
      learnMore: 'Mehr erfahren',
      construction: {
        title: 'Design & Konstruktion',
        description: 'Umfassende Baulösungen vom Konzept bis zur Fertigstellung mit professionellem Projektmanagement.',
        features: [
          'Architektonisches Design & Planung',
          'Bauingenieurwesen',
          'Projektmanagement',
          'Qualitätskontrolle & Inspektion',
          'Innenarchitektur-Dienstleistungen',
          'Landschaftsarchitektur'
        ]
      },
      waterproofing: {
        title: 'Abdichtungslösungen',
        description: 'Fortschrittliche Abdichtungssysteme für langanhaltenden Schutz gegen Feuchtigkeitsschäden.',
        features: [
          'Dachabdichtung',
          'Fundamentschutz',
          'Kellerabdichtung',
          'Bad- & Küchenabdichtung',
          'Schwimmbadabdichtung',
          'Industrieabdichtung'
        ]
      },
      flooring: {
        title: 'Bodenbelagsmaterialien',
        description: 'Erstklassige Bodenbelagslösungen einschließlich Fliesen, Hartholz und spezialisierte Industrieböden.',
        features: [
          'Keramik- & Porzellanfliesen',
          'Natursteinböden',
          'Hartholz- & Laminatböden',
          'Vinyl- & LVT-Böden',
          'Epoxidbodenbeschichtungen',
          'Maßgeschneiderte Designlösungen'
        ]
      }
    },

    // Products Section
    products: {
      title: 'Premium Produkte',
      subtitle: 'Hochwertige Baumaterialien für dauerhafte Ergebnisse',
      waterproofing: {
        title: 'Abdichtungsmaterialien',
        subtitle: 'Premium-Schutzlösungen',
        description: 'Fortschrittliche Abdichtungssysteme, die entwickelt wurden, um langanhaltenden Schutz gegen Feuchtigkeitsschäden zu bieten.',
        products: [
          'Flüssig aufgetragene Membranen',
          'Bahnenmembranen',
          'Kristalline Abdichtung',
          'Injektionsharze',
          'Dichtstoffe & Beschichtungen',
          'Entwässerungssysteme'
        ],
        applications: [
          'Dachsysteme',
          'Fundamentschutz',
          'Kellerabdichtung',
          'Schwimmbäder',
          'Badezimmer & Nassbereiche',
          'Industrieanlagen'
        ],
        features: [
          'UV-beständig',
          'Rissüberbrückend',
          'Einfache Anwendung',
          'Langlebig',
          'Umweltfreundlich',
          'Professionelle Qualität'
        ]
      },
      flooring: {
        title: 'Bodenbelagsmaterialien',
        subtitle: 'Elegante und dauerhafte Oberflächen',
        description: 'Umfassendes Sortiment an Premium-Bodenbelagsmaterialien für Wohn-, Gewerbe- und Industrieanwendungen.',
        products: [
          'Keramik- & Porzellanfliesen',
          'Naturstein',
          'Hartholzböden',
          'Laminatböden',
          'Vinyl & LVT',
          'Epoxidbeschichtungen'
        ],
        applications: [
          'Wohnhäuser',
          'Gewerbeflächen',
          'Industrieanlagen',
          'Gesundheitszentren',
          'Bildungseinrichtungen',
          'Gastgewerbestandorte'
        ],
        features: [
          'Rutschfest',
          'Fleckenbeständig',
          'Wartungsarm',
          'Langlebig',
          'Ästhetisch',
          'Kosteneffizient'
        ]
      },
      quality: {
        title: 'Qualitätssicherung',
        subtitle: 'Verpflichtet zu Exzellenz in jedem Produkt, das wir liefern',
        premium: {
          title: 'Premium-Qualität',
          description: 'Nur die feinsten Materialien von vertrauenswürdigen internationalen Marken'
        },
        expert: {
          title: 'Expertenauswahl',
          description: 'Sorgfältig kuratierte Produkte, getestet für laotische Klimabedingungen'
        },
        reliable: {
          title: 'Zuverlässige Lieferung',
          description: 'Konsistente Verfügbarkeit mit effizientem Logistiknetzwerk'
        }
      },
      cta: {
        title: 'Benötigen Sie Produktinformationen?',
        subtitle: 'Erhalten Sie detaillierte Spezifikationen und Preise für unsere Premium-Materialien',
        quote: 'Produktangebot anfordern',
        catalog: 'Katalog herunterladen'
      }
    },

    // Projects Section
    projects: {
      title: 'Unsere Projekte',
      subtitle: 'Exzellenz im Bauwesen in verschiedenen Sektoren',
      completed: 'Abgeschlossen in',
      viewAll: 'Alle Projekte ansehen',
      categories: {
        commercial: 'Commercial',
        residential: 'Residential',
        industrial: 'Industrial',
        hospitality: 'Hospitality',
        education: 'Education',
        healthcare: 'Healthcare'
      }
    },

    // About Section
    about: {
      title: 'Über SLK Trading',
      description1: 'Mit über 10 Jahren Erfahrung in der Baubranche hat sich SLK Trading & Design Construction als führender Anbieter umfassender Baulösungen in Laos etabliert.',
      description2: 'Wir sind spezialisiert auf Design- und Baudienstleistungen, Premium-Abdichtungsmaterialien und hochwertige Bodenbelagslösungen für Wohn-, Gewerbe- und Industrieprojekte.',
      stats: {
        years: '15+',
        yearsDesc: 'Jahre Exzellenz',
        projects: '200+',
        projectsDesc: 'Abgeschlossene Projekte',
        satisfaction: '100%',
        satisfactionDesc: 'Kundenzufriedenheit',
        support: '24/7',
        supportDesc: 'Verfügbarer Support'
      },
      values: {
        quality: {
          title: 'Qualitätsexzellenz',
          description: 'Wir machen niemals Kompromisse bei der Qualität und stellen sicher, dass jedes Projekt die höchsten Standards erfüllt.'
        },
        expert: {
          title: 'Expertenteam',
          description: 'Unsere qualifizierten Fachleute bringen jahrelange Erfahrung in jedes Projekt ein.'
        },
        delivery: {
          title: 'Pünktliche Lieferung',
          description: 'Wir verstehen die Wichtigkeit von Fristen und liefern Projekte konsequent pünktlich.'
        }
      }
    },

    // Blog Section
    blog: {
      title: 'Neueste Nachrichten',
      subtitle: 'Bleiben Sie auf dem Laufenden mit unseren neuesten Projekten und Brancheneinblicken',
      readMore: 'Weiterlesen',
      viewAll: 'Alle Nachrichten ansehen'
    },

    // Contact Section
    contact: {
      title: 'Kontaktieren Sie Uns',
      subtitle: 'Bereit, Ihr Projekt zu starten? Kontaktieren Sie unsere Experten für eine professionelle Beratung.',
      form: {
        title: 'Senden Sie uns eine Nachricht',
        name: 'Vollständiger Name',
        email: 'E-Mail-Adresse',
        phone: 'Telefonnummer',
        service: 'Interessierte Dienstleistung',
        message: 'Nachricht',
        send: 'Nachricht senden',
        sending: 'Signing In...',
        success: 'Nachricht erfolgreich gesendet!',
        services: {
          construction: 'Design & Konstruktion',
          waterproofing: 'Abdichtungslösungen',
          flooring: 'Bodenbelagsmaterialien',
          consultation: 'Projektberatung',
          renovation: 'Renovierungsdienstleistungen',
          maintenance: 'Wartungsunterstützung'
        }
      },
      info: {
        title: 'Kontaktinformationen',
        phone: 'Telefonnummern',
        email: 'E-Mail-Adressen',
        address: 'Bürostandort',
        hours: 'Geschäftszeiten'
      },
      map: {
        title: 'Finden Sie uns auf der Karte',
        directions: 'Wegbeschreibung erhalten'
      },
      emergency: {
        title: 'Notfallunterstützung',
        description: 'Benötigen Sie sofortige Hilfe? Unser Notfallteam ist verfügbar.',
        available: '24/7 Verfügbar'
      }
    },

    // Footer
    footer: {
      description: 'Führendes Bauunternehmen in Laos, das Design-Konstruktion, Abdichtungsmaterialien und Bodenbelagsmaterialien anbietet. Professionelle Baulösungen, denen Sie vertrauen können.',
      services: 'Dienstleistungen',
      company: 'Unternehmen',
      contact: 'Kontakt',
      copyright: 'SLK Trading & Design Construction Co., Ltd. Alle Rechte vorbehalten.',
      quickQuote: {
        title: 'Schnelles Angebot erhalten',
        description: 'Starten Sie Ihr Projekt mit uns noch heute',
        button: 'Jetzt kontaktieren'
      },
      links: {
        privacy: 'Datenschutzrichtlinie',
        terms: 'Nutzungsbedingungen',
        sitemap: 'Seitenübersicht'
      }
    },

    // Loading Screen
    loading: {
      title: 'SLK Trading',
      subtitle: 'Multi-Access-Datenbankportal',
      badge: 'Führendes Bauunternehmen in Laos',
      steps: {
        database: 'Datenbanksysteme werden initialisiert',
        auth: 'Authentifizierungsprotokolle werden geladen',
        interface: 'Multi-Benutzer-Schnittstelle wird vorbereitet',
        portal: 'Login-Portal wird fertiggestellt'
      },
      waiting: 'Ihr Bauerlebnis wird erstellt...',
      status: {
        secure: 'Sicher',
        professional: 'Professionell',
        multiAccess: 'Multi-Zugang'
      },
      preparing: 'Ihr Premium-Bauportal wird vorbereitet...',
      powered: 'Unterstützt von SLK Trading & Design Construction'
    },

    // Admin Panel
    admin: {
      login: {
        title: 'SLK Website Admin-Login',
        subtitle: 'Vollständiger Systemadministrationszugriff',
        email: 'E-Mail-Adresse',
        password: 'Passwort',
        rememberMe: 'Angemeldet bleiben',
        forgotPassword: 'Passwort vergessen?',
        signIn: 'Anmelden',
        signingIn: 'Anmeldung läuft...',
        invalidCredentials: 'Ungültige E-Mail oder Passwort',
        loginFailed: 'Anmeldung fehlgeschlagen. Bitte versuchen Sie es erneut.'
      }
    },

    // Common
    common: {
      loading: 'Wird geladen...',
      error: 'Fehler',
      success: 'Erfolg',
      cancel: 'Abbrechen',
      save: 'Speichern',
      edit: 'Bearbeiten',
      delete: 'Löschen',
      confirm: 'Bestätigen',
      close: 'Schließen',
      next: 'Weiter',
      previous: 'Zurück',
      submit: 'Absenden',
      search: 'Suchen',
      filter: 'Filtern',
      all: 'Alle',
      none: 'Keine',
      yes: 'Ja',
      no: 'Nein'
    }
  },

  it: {
    // Navigation
    nav: {
      home: 'Home',
      services: 'Servizi',
      products: 'Prodotti',
      projects: 'Progetti',
      about: 'Chi siamo',
      news: 'Notizie',
      contact: 'Contatti',
      admin: 'Admin'
    },

    // Hero Section
    hero: {
      title: {
        line1: 'Costruzione Eccellente',
        line2: 'in Laos'
      },
      badge: 'Azienda di Costruzioni Leader in Laos',
      description: 'Servizi di costruzione professionali, soluzioni di impermeabilizzazione premium e materiali per pavimentazione di qualità per progetti residenziali, commerciali e industriali.',
      service1: 'Design & Costruzione',
      service2: 'Impermeabilizzazione',
      service3: 'Materiali per Pavimentazione',
      cta: {
        quote: 'Ottieni Preventivo Gratuito',
        projects: 'Visualizza Progetti'
      },
      stats: {
        years: '15+',
        experience: 'Anni di Esperienza',
        projects: '200+',
        completed: 'Progetti Completati',
        client: '100%',
        satisfaction: 'Soddisfazione Cliente',
        support: '24/7',
        available: 'Supporto Disponibile'
      }
    },

    // Services Section
    services: {
      title: 'I Nostri Servizi',
      subtitle: 'Soluzioni di costruzione complete su misura per le tue esigenze',
      learnMore: 'Scopri di più',
      construction: {
        title: 'Design & Costruzione',
        description: 'Soluzioni di costruzione complete dal concetto al completamento con gestione professionale del progetto.',
        features: [
          'Design & Pianificazione Architettonica',
          'Ingegneria Strutturale',
          'Gestione Progetti',
          'Controllo Qualità & Ispezione',
          'Servizi di Design d\'Interni',
          'Architettura del Paesaggio'
        ]
      },
      waterproofing: {
        title: 'Soluzioni di Impermeabilizzazione',
        description: 'Sistemi di impermeabilizzazione avanzati per una protezione duratura contro i danni dell\'umidità.',
        features: [
          'Impermeabilizzazione Tetti',
          'Protezione Fondamenta',
          'Impermeabilizzazione Seminterrati',
          'Sigillatura Bagni & Cucine',
          'Impermeabilizzazione Piscine',
          'Impermeabilizzazione Industriale'
        ]
      },
      flooring: {
        title: 'Materiali per Pavimentazione',
        description: 'Soluzioni premium per pavimentazione incluse piastrelle, legno duro e pavimentazione industriale specializzata.',
        features: [
          'Piastrelle Ceramiche & Porcellana',
          'Pavimentazione in Pietra Naturale',
          'Pavimenti in Legno & Laminato',
          'Pavimentazione Vinilica & LVT',
          'Rivestimenti Epossidici',
          'Soluzioni di Design Personalizzate'
        ]
      }
    },

    // Products Section
    products: {
      title: 'Prodotti Premium',
      subtitle: 'Materiali da costruzione di alta qualità per risultati duraturi',
      waterproofing: {
        title: 'Materiali di Impermeabilizzazione',
        subtitle: 'Soluzioni di protezione premium',
        description: 'Sistemi di impermeabilizzazione avanzati progettati per fornire protezione duratura contro i danni dell\'umidità.',
        products: [
          'Membrane Applicate Liquide',
          'Membrane in Fogli',
          'Impermeabilizzazione Cristallina',
          'Resine per Iniezione',
          'Sigillanti & Rivestimenti',
          'Sistemi di Drenaggio'
        ],
        applications: [
          'Sistemi di Copertura',
          'Protezione Fondamenta',
          'Impermeabilizzazione Seminterrati',
          'Piscine',
          'Bagni & Aree Umide',
          'Strutture Industriali'
        ],
        features: [
          'Resistente ai Raggi UV',
          'Ponte su Crepe',
          'Facile Applicazione',
          'Lunga Durata',
          'Ecologico',
          'Qualità Professionale'
        ]
      },
      flooring: {
        title: 'Materiali per Pavimentazione',
        subtitle: 'Superfici eleganti e durevoli',
        description: 'Gamma completa di materiali premium per pavimentazione per applicazioni residenziali, commerciali e industriali.',
        products: [
          'Piastrelle Ceramiche & Porcellana',
          'Pietra Naturale',
          'Pavimentazione in Legno',
          'Pavimenti in Laminato',
          'Vinile & LVT',
          'Rivestimenti Epossidici'
        ],
        applications: [
          'Abitazioni Residenziali',
          'Spazi Commerciali',
          'Strutture Industriali',
          'Centri Sanitari',
          'Istituti Educativi',
          'Luoghi di Ospitalità'
        ],
        features: [
          'Resistente allo Scivolamento',
          'Antimacchia',
          'Bassa Manutenzione',
          'Durevole',
          'Estetico',
          'Conveniente'
        ]
      },
      quality: {
        title: 'Garanzia di Qualità',
        subtitle: 'Impegnati per l\'eccellenza in ogni prodotto che forniamo',
        premium: {
          title: 'Qualità Premium',
          description: 'Solo i materiali più pregiati da marchi internazionali affidabili'
        },
        expert: {
          title: 'Selezione Esperta',
          description: 'Prodotti accuratamente selezionati testati per le condizioni climatiche del Laos'
        },
        reliable: {
          title: 'Fornitura Affidabile',
          description: 'Disponibilità costante con rete logistica efficiente'
        }
      },
      cta: {
        title: 'Hai bisogno di informazioni sui prodotti?',
        subtitle: 'Ottieni specifiche dettagliate e prezzi per i nostri materiali premium',
        quote: 'Richiedi Preventivo Prodotto',
        catalog: 'Scarica Catalogo'
      }
    },

    // Projects Section
    projects: {
      title: 'I Nostri Progetti',
      subtitle: 'Mostrando l\'eccellenza nella costruzione in vari settori',
      completed: 'Completato in',
      viewAll: 'Visualizza Tutti i Progetti',
      categories: {
        commercial: 'Commerciale',
        residential: 'Residenziale',
        industrial: 'Industriale',
        hospitality: 'Ospitalità',
        education: 'Educazione',
        healthcare: 'Sanitario'
      }
    },

    // About Section
    about: {
      title: 'Chi è SLK Trading',
      description1: 'Con oltre 15 anni di esperienza nel settore delle costruzioni, SLK Trading & Design Construction si è affermata come fornitore leader di soluzioni di costruzione complete in Laos.',
      description2: 'Siamo specializzati in servizi di design e costruzione, materiali di impermeabilizzazione premium e soluzioni di pavimentazione di alta qualità per progetti residenziali, commerciali e industriali.',
      stats: {
        years: '15+',
        yearsDesc: 'Anni di Eccellenza',
        projects: '200+',
        projectsDesc: 'Progetti Completati',
        satisfaction: '100%',
        satisfactionDesc: 'Soddisfazione Cliente',
        support: '24/7',
        supportDesc: 'Supporto Disponibile'
      },
      values: {
        quality: {
          title: 'Eccellenza Qualitativa',
          description: 'Non scendiamo mai a compromessi sulla qualità, assicurando che ogni progetto soddisfi i più alti standard.'
        },
        expert: {
          title: 'Team di Esperti',
          description: 'I nostri professionisti qualificati portano anni di esperienza in ogni progetto.'
        },
        delivery: {
          title: 'Consegna Puntuale',
          description: 'Comprendiamo l\'importanza delle scadenze e consegniamo costantemente in tempo.'
        }
      }
    },

    // Blog Section
    blog: {
      title: 'Ultime Notizie',
      subtitle: 'Rimani aggiornato con i nostri ultimi progetti e approfondimenti del settore',
      readMore: 'Leggi di più',
      viewAll: 'Visualizza Tutte le Notizie'
    },

    // Contact Section
    contact: {
      title: 'Contattaci',
      subtitle: 'Pronto a iniziare il tuo progetto? Contatta i nostri esperti per una consulenza professionale.',
      form: {
        title: 'Inviaci un Messaggio',
        name: 'Nome Completo',
        email: 'Indirizzo Email',
        phone: 'Numero di Telefono',
        service: 'Servizio di Interesse',
        message: 'Messaggio',
        send: 'Invia Messaggio',
        sending: 'Signing In...',
        success: 'Messaggio Inviato con Successo!',
        services: {
          construction: 'Design & Costruzione',
          waterproofing: 'Soluzioni di Impermeabilizzazione',
          flooring: 'Materiali per Pavimentazione',
          consultation: 'Consulenza Progetto',
          renovation: 'Servizi di Ristrutturazione',
          maintenance: 'Supporto Manutenzione'
        }
      },
      info: {
        title: 'Informazioni di Contatto',
        phone: 'Numeri di Telefono',
        email: 'Indirizzi Email',
        address: 'Ubicazione Ufficio',
        hours: 'Orari di Lavoro'
      },
      map: {
        title: 'Trovaci sulla Mappa',
        directions: 'Ottieni Indicazioni'
      },
      emergency: {
        title: 'Supporto di Emergenza',
        description: 'Hai bisogno di assistenza immediata? Il nostro team di supporto di emergenza è disponibile.',
        available: 'Disponibile 24/7'
      }
    },

    // Footer
    footer: {
      description: 'Azienda di costruzioni leader in Laos che offre design costruzione, materiali impermeabilizzanti e materiali per pavimentazione. Soluzioni di costruzione professionali di cui puoi fidarti.',
      services: 'Servizi',
      company: 'Azienda',
      contact: 'Contatti',
      copyright: 'SLK Trading & Design Construction Co., Ltd. Tutti i diritti riservati.',
      quickQuote: {
        title: 'Ottieni Preventivo Rapido',
        description: 'Inizia il tuo progetto con noi oggi',
        button: 'Contatta Ora'
      },
      links: {
        privacy: 'Politica sulla Privacy',
        terms: 'Termini di Servizio',
        sitemap: 'Mappa del Sito'
      }
    },

    // Loading Screen
    loading: {
      title: 'SLK Trading',
      subtitle: 'Portale Database Multi-Accesso',
      badge: 'Azienda di Costruzioni Leader in Laos',
      steps: {
        database: 'Inizializzazione Sistemi Database',
        auth: 'Caricamento Protocolli di Autenticazione',
        interface: 'Preparazione Interfaccia Multi-Utente',
        portal: 'Finalizzazione Portale di Accesso'
      },
      waiting: 'Costruendo la tua esperienza di costruzione...',
      status: {
        secure: 'Sicuro',
        professional: 'Professionale',
        multiAccess: 'Multi-Accesso'
      },
      preparing: 'Preparando il tuo portale di costruzione premium...',
      powered: 'Alimentato da SLK Trading & Design Construction'
    },

    // Admin Panel
    admin: {
      login: {
        title: 'Accesso Admin Sito Web SLK',
        subtitle: 'Accesso completo all\'amministrazione del sistema',
        email: 'Indirizzo Email',
        password: 'Password',
        rememberMe: 'Ricordami',
        forgotPassword: 'Password dimenticata?',
        signIn: 'Accedi',
        signingIn: 'Accesso in corso...',
        invalidCredentials: 'Email o password non validi',
        loginFailed: 'Accesso fallito. Per favore riprova.'
      }
    },

    // Common
    common: {
      loading: 'Caricamento...',
      error: 'Errore',
      success: 'Successo',
      cancel: 'Annulla',
      save: 'Salva',
      edit: 'Modifica',
      delete: 'Elimina',
      confirm: 'Conferma',
      close: 'Chiudi',
      next: 'Avanti',
      previous: 'Indietro',
      submit: 'Invia',
      search: 'Cerca',
      filter: 'Filtra',
      all: 'Tutti',
      none: 'Nessuno',
      yes: 'Sì',
      no: 'No'
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  // Client-side hydration check
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const initializeLanguage = () => {
      try {
        // Load saved language preference from localStorage
        const savedLanguage = localStorage.getItem('slk_language');
        
        if (savedLanguage && languages.some(lang => lang.code === savedLanguage)) {
          setCurrentLanguage(savedLanguage);
        } else {
          // Try to detect browser language
          const browserLang = navigator.language.split('-')[0];
          if (languages.some(lang => lang.code === browserLang)) {
            setCurrentLanguage(browserLang);
          }
        }
      } catch (error) {
        console.warn('Failed to load language preference:', error);
        // Fallback to English
        setCurrentLanguage('en');
      } finally {
        setIsLoading(false);
      }
    };

    // Small delay to ensure proper hydration
    const timer = setTimeout(initializeLanguage, 100);
    
    return () => clearTimeout(timer);
  }, [isClient]);

  const setLanguage = (language: string) => {
    if (!languages.some(lang => lang.code === language)) {
      console.warn(`Language ${language} is not supported`);
      return;
    }

    setCurrentLanguage(language);
    
    if (isClient) {
      try {
        localStorage.setItem('slk_language', language);
      } catch (error) {
        console.warn('Failed to save language preference:', error);
      }
    }
  };

  const t = (key: string): string => {
    if (!key) return '';
    
    const keys = key.split('.');
    let value: any = translations[currentLanguage as keyof typeof translations];
    
    // Navigate through the translation object
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if translation not found
        let fallbackValue: any = translations.en;
        for (const fk of keys) {
          if (fallbackValue && typeof fallbackValue === 'object' && fk in fallbackValue) {
            fallbackValue = fallbackValue[fk];
          } else {
            // Return the key itself if not found in fallback
            console.warn(`Translation missing for key: ${key} in language: ${currentLanguage}`);
            return key;
          }
        }
        return typeof fallbackValue === 'string' ? fallbackValue : key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  const value: LanguageContextType = {
    currentLanguage,
    setLanguage,
    t,
    languages,
    isLoading
  };

  // Don't render children until client-side hydration is complete
  if (!isClient || isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Language Settings...</p>
        </div>
      </div>
    );
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;