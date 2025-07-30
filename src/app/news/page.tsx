"use client";
import React, { useState, useEffect } from 'react';
import {
  Calendar,
  User,
  ArrowRight,
  Tag,
  Search,
  Filter,
  Clock,
  Eye,
  MessageCircle,
  Share2,
  Mail,
  CheckCircle,
  Loader,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';
import { useLanguage } from '../../contexts/LanguageContext';
import { supabase } from '../../lib/supabase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import Navbar from '../Navbar';
import Footer from '../Footer';

const NewsPage = () => {
  const { t } = useLanguage();
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const postsPerPage = 6;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoadingPosts(true);
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (error) {
        console.error('Error fetching posts:', error);
        toast.error('Failed to load news posts.');
      } else {
        const mappedPosts = data.map(post => ({
          ...post,
          featuredImage: post.featured_image,
          publishedAt: post.published_at,
          viewCount: post.view_count ?? Math.floor(Math.random() * 1000) + 500,
          tags: post.tags ?? [],
          readTime: Math.max(2, Math.round(post.content.split(' ').length / 200)) + ' min read'
        }));
        setPosts(mappedPosts);
      }
      setLoadingPosts(false);
    };

    fetchPosts();
  }, []);

  const allPosts = [...posts];
  const slideshowPosts = allPosts.slice(0, 5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slideshowPosts.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slideshowPosts.length]);

  const categories = [
    { id: 'all', name: 'All News', count: allPosts.length },
    { id: 'news', name: 'News', count: allPosts.filter(p => p.category === 'news').length },
    { id: 'project', name: 'Projects', count: allPosts.filter(p => p.category === 'project').length },
    { id: 'announcement', name: 'Announcements', count: allPosts.filter(p => p.category === 'announcement').length },
    { id: 'blog', name: 'Blog', count: allPosts.filter(p => p.category === 'blog').length }
  ];

  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);
  const featuredPost = allPosts[0];
  const recentPosts = allPosts.slice(1, 4);

  // Updated liquid glass category badge function
  const getCategoryBadge = (category: string) => {
    const baseClasses = "px-3 py-1.5 rounded-full text-sm font-semibold capitalize backdrop-blur-lg border border-white/20 shadow-lg transition-all duration-300 hover:scale-105";
    
    switch (category) {
      case 'news': 
        return `${baseClasses} bg-gradient-to-r from-blue-500/80 to-blue-600/80 text-white shadow-blue-500/25 hover:from-blue-500/90 hover:to-blue-600/90 hover:shadow-blue-500/40`;
      case 'project': 
        return `${baseClasses} bg-gradient-to-r from-green-500/80 to-green-600/80 text-white shadow-green-500/25 hover:from-green-500/90 hover:to-green-600/90 hover:shadow-green-500/40`;
      case 'announcement': 
        return `${baseClasses} bg-gradient-to-r from-orange-500/80 to-orange-600/80 text-white shadow-orange-500/25 hover:from-orange-500/90 hover:to-orange-600/90 hover:shadow-orange-500/40`;
      case 'blog': 
        return `${baseClasses} bg-gradient-to-r from-purple-500/80 to-purple-600/80 text-white shadow-purple-500/25 hover:from-purple-500/90 hover:to-purple-600/90 hover:shadow-purple-500/40`;
      default: 
        return `${baseClasses} bg-gradient-to-r from-gray-500/80 to-gray-600/80 text-white shadow-gray-500/25 hover:from-gray-500/90 hover:to-gray-600/90 hover:shadow-gray-500/40`;
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscriberEmail.trim()) return toast.error('Please enter your email address');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(subscriberEmail)) return toast.error('Please enter a valid email');
    setIsSubscribing(true);
    try {
      const { error } = await supabase.from('newsletter_subscribers').insert({
        email: subscriberEmail.trim().toLowerCase(),
        status: 'active',
        source: 'news_page',
        preferences: { news: true, projects: true, announcements: true, blog: true }
      });
      if (error) {
        if (error.code === '23505' || error.message.includes('duplicate')) {
          toast.error('Email already subscribed');
        } else {
          toast.error('Failed to subscribe');
        }
      } else {
        setSubscribeSuccess(true);
        setSubscriberEmail('');
        toast.success('Subscribed successfully!');
      }
    } catch (err) {
      toast.error('Subscription failed. Try again later.');
    } finally {
      setIsSubscribing(false);
    }
  };

  // Updated function to handle navigation to news details
  const handleReadMore = (postId: string) => {
    router.push(`/news-details?id=${postId}`);
  };

  // Updated function to handle card clicks
  const handleCardClick = (postId: string) => {
    router.push(`/news-details?id=${postId}`);
  };

  // New function to handle image clicks specifically
  const handleImageClick = (postId: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation(); // Prevent card click if needed
    }
    router.push(`/news-details?id=${postId}`);
  };

  const openSubscribeModal = () => {
    setShowSubscribeModal(true);
    setSubscribeSuccess(false);
  };

  const closeSubscribeModal = () => {
    setShowSubscribeModal(false);
    setSubscriberEmail('');
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev === slideshowPosts.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slideshowPosts.length - 1 : prev - 1));
  const goToSlide = (index: number) => setCurrentSlide(index);

  if (loadingPosts) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center text-gray-500">
          <Loader className="w-6 h-6 mr-2 animate-spin" /> Loading news...
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-[#3d9392] via-[#6dbeb0] to-[#1b3d5a] text-white overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://qawxuytlwqmsomsqlrsc.supabase.co/storage/v1/object/public/image//News_Hero.jpg" 
              alt="Latest news and updates"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#3d9392]/80 to-[#1b3d5a]/80"></div> 
          </div>
          
          <div className="relative z-10 container mx-auto px-4">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 drop-shadow-2xl">
                Latest <span className="text-[#6dbeb0]">News</span>
              </h1> 
              <p className="text-2xl text-blue-100 mb-8 leading-relaxed drop-shadow-lg">
                Stay updated with our latest projects, announcements, and industry insights
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={openSubscribeModal}
                  className="bg-[#3d9392] hover:bg-[#6dbeb0] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Subscribe to Updates
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button 
                  onClick={() => router.push('/projects')}
                  className="border-2 border-white/40 hover:bg-white/15 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  View Our Projects
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Filters & Search */}
        <section className="py-12 bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6dbeb0]" />
                <input 
                  type="text"
                  placeholder="Search news..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3d9392] focus:border-transparent"   
                /> 
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setCurrentPage(1);
                    }}
                    className={`px-4 py-2 rounded-full font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-[#3d9392] text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-[#6dbeb0] hover:text-white' 
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Slideshow */}
        {slideshowPosts.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <AnimatedSection className="text-center mb-10">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Featured <span className="text-[#3d9392]">Stories</span>
                </h2>
              </AnimatedSection>

              <AnimatedSection animation="fade-up">
                <div className="relative">
                  {/* Slideshow Container */}
                  <div className="relative overflow-hidden rounded-2xl shadow-xl h-[400px]">
                    {slideshowPosts.map((post, index) => (
                      <div 
                        key={post.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                          index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                      >
                        <div className="grid md:grid-cols-2 h-full">
                          {/* Image Side */}
                          <div 
                            className="relative h-full cursor-pointer group" 
                            onClick={() => handleImageClick(post.id)}
                          >
                            <img 
                              src={post.featuredImage || post.featured_image}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent group-hover:from-black/50 transition-all duration-300"></div>
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                            
                            {/* Liquid Glass Category Badge */}
                            <div className="absolute top-6 left-6">
                              <span className={getCategoryBadge(post.category)}>
                                {post.category} 
                              </span>
                            </div>
                          </div>
                          
                          {/* Content Side */}
                          <div className="p-8 flex flex-col justify-center bg-white">
                            <div className="flex items-center text-sm text-gray-500 mb-3">
                              <Calendar className="w-4 h-4 mr-2" />
                              {new Date(post.published_at || post.created_at).toLocaleDateString()}
                              <span className="mx-2">•</span>
                              <User className="w-4 h-4 mr-1" />
                              {post.author}
                              <span className="mx-2">•</span>
                              <Clock className="w-4 h-4 mr-1" />
                              {post.readTime || '5 min read'}
                            </div>
                            
                            {/* Updated title with click handler */}
                            <h3 
                              className="text-3xl font-bold text-gray-900 mb-4 cursor-pointer hover:text-[#3d9392] transition-colors"
                              onClick={() => handleCardClick(post.id)}
                            >
                              {post.title}
                            </h3>
                            
                            <p className="text-gray-600 mb-6 line-clamp-3">
                              {post.excerpt}
                            </p>

                            {/* Tags */}
                            {post.tags && post.tags.length > 0 && (
                              <div className="flex flex-wrap gap-2 mb-6">
                                {post.tags.slice(0, 3).map((tag, tagIndex) => (
                                  <span
                                    key={tagIndex}
                                    className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                                  >
                                    <Tag className="w-3 h-3 mr-1" />
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}

                            <div className="flex items-center justify-between mt-auto">
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <div className="flex items-center">
                                  <Eye className="w-4 h-4 mr-1" />
                                  {post.viewCount || Math.floor(Math.random() * 1000) + 500}
                                </div>
                                <div className="flex items-center">
                                  <MessageCircle className="w-4 h-4 mr-1" />
                                  {Math.floor(Math.random() * 20) + 5}
                                </div>
                              </div>
                              <button 
                                onClick={() => handleReadMore(post.id)}
                                className="bg-[#3d9392] hover:bg-[#6dbeb0] text-white px-5 py-2 rounded-lg font-medium flex items-center transition-colors"
                              >
                                Read Full Story
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-colors"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-colors"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Slide Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
                    {slideshowPosts.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentSlide ? 'bg-[#3d9392]' : 'bg-white/50 hover:bg-white/80'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Recent Posts */}
        {recentPosts.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <AnimatedSection className="text-center mb-10">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Recent <span className="text-[#3d9392]">Posts</span>
                </h2>
              </AnimatedSection>

              <div className="grid md:grid-cols-3 gap-8">
                {recentPosts.map((post, index) => (
                  <AnimatedSection
                    key={post.id}
                    animation="fade-up"
                    delay={index * 150}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
                    onClick={() => handleCardClick(post.id)}
                  >
                    {/* Post Image */}
                    <div 
                      className="relative h-48 overflow-hidden cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleImageClick(post.id);
                      }}
                    >
                      <img 
                        src={post.featuredImage || post.featured_image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/50 transition-all duration-300"></div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                      
                      {/* Liquid Glass Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={getCategoryBadge(post.category)}>
                          {post.category}
                        </span>
                      </div>

                      {/* Liquid Glass Reading Time Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-lg bg-black/20 text-white border border-white/20 shadow-lg">
                          {post.readTime || '5 min read'}
                        </span>
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(post.published_at || post.created_at).toLocaleDateString()}
                        <span className="mx-2">•</span>
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      
                      {/* Updated clickable title */}
                      <h3 
                        className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-[#3d9392] transition-colors cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardClick(post.id);
                        }}
                      >
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Post Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {post.viewCount || Math.floor(Math.random() * 1000) + 500}
                          </div>
                        </div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleReadMore(post.id);
                          }}
                          className="text-[#3d9392] hover:text-[#6dbeb0] font-medium text-sm flex items-center transition-colors"
                        >
                          Read Full Story
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All News Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                All <span className="text-[#3d9392]">News</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Browse our complete collection of news, projects, and insights
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedPosts.map((post, index) => (
                <AnimatedSection
                  key={post.id}
                  animation="fade-up"
                  delay={index * 150}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
                  onClick={() => handleCardClick(post.id)}
                >
                  {/* Post Image */}
                  <div 
                    className="relative h-48 overflow-hidden cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleImageClick(post.id);
                    }}
                  >
                    <img 
                      src={post.featuredImage || post.featured_image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/50 transition-all duration-300"></div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                    
                    {/* Liquid Glass Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={getCategoryBadge(post.category)}>
                        {post.category}
                      </span>
                    </div>

                    {/* Liquid Glass Reading Time Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-lg bg-black/20 text-white border border-white/20 shadow-lg">
                        {post.readTime || '5 min read'}
                      </span>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.published_at || post.created_at).toLocaleDateString()}
                      <span className="mx-2">•</span>
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    
                    {/* Updated clickable title */}
                    <h3 
                      className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-[#3d9392] transition-colors cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(post.id);
                      }}
                    >
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 text-justify line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Post Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {post.viewCount || Math.floor(Math.random() * 1000) + 500}
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {Math.floor(Math.random() * 20) + 5}
                        </div>
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleReadMore(post.id);
                        }}
                        className="text-[#3d9392] hover:text-[#6dbeb0] font-medium text-sm flex items-center transition-colors"
                      >
                        Read Full Story
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-[#3d9392] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Previous
                  </button>
                  
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        currentPage === index + 1
                          ? 'bg-[#3d9392] text-white'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-[#3d9392] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No news found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-[#6dbeb0] to-[#3d9392] text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
              <p className="text-xl text-blue-100 mb-8">
                Subscribe to our newsletter and never miss important updates
              </p>
              <button
                onClick={openSubscribeModal}
                className="bg-white hover:bg-gray-100 text-[#1b3d5a] px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center mx-auto transform hover:scale-105"
              > 
                <Mail className="w-5 h-5 mr-2" />
                Subscribe to Updates
              </button>
              <p className="text-sm text-blue-100 mt-4 opacity-80">
                Join our community of {Math.floor(Math.random() * 500) + 500} subscribers
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Subscribe Modal */}
        {showSubscribeModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
              <button 
                onClick={closeSubscribeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
              
              {subscribeSuccess ? (
                <div className="text-center py-8">
                  <div className="bg-green-100 p-3 rounded-full inline-flex mb-4">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You for Subscribing!</h3>
                  <p className="text-gray-600 mb-6">
                    You've been added to our newsletter. We'll keep you updated with the latest news and announcements.
                  </p>
                  <button
                    onClick={closeSubscribeModal}
                    className="bg-[#3d9392] hover:bg-[#6dbeb0] text-white px-6 py-3 rounded-lg font-medium"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <div className="text-center mb-6">
                    <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
                      <Mail className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Subscribe to Our Newsletter</h3>
                    <p className="text-gray-600">
                      Stay updated with our latest news, projects, and announcements
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={subscriberEmail}
                        onChange={(e) => setSubscriberEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3d9392] focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
                      By subscribing, you agree to receive our newsletter and marketing emails. You can unsubscribe at any time.
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubscribing}
                      className="w-full bg-[#3d9392] hover:bg-[#6dbeb0] disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center"
                    >
                      {isSubscribing ? (
                        <>
                          <Loader className="w-5 h-5 mr-2 animate-spin" />
                          Subscribing...
                        </>
                      ) : (
                        <>
                          <Mail className="w-5 h-5 mr-2" />
                          Subscribe Now
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        )}
        
        <ToastContainer position="bottom-right" />
      </div>
      <Footer />
    </>
  );
};
 
export default NewsPage;