"use client";
import React, { useEffect, useState } from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';
import { useRouter } from 'next/navigation';
import { supabase } from '../lib/supabase';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  featured_image: string;
  created_at: string;
  category: string;
  tags: string[];
  author: string;
}

const BlogSection = () => {
  const { t } = useLanguage();
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false })
        .limit(3);

      if (error) {
        console.error('❌ Error fetching posts:', error.message);
        return;
      }

      console.log('✅ Fetched posts:', data);
      setPosts(data as Post[]);
    };

    fetchPosts();
  }, []);

  const handleReadMore = (postId: string) => {
    router.push(`/news-details?id=${postId}`);
  };

  const handleViewAllPosts = () => {
    router.push('/news');
  };

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up" repeatOnScroll={true}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
            Latest <span className="text-[#6dbeb0]">News</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center">
            Stay updated with our latest projects, announcements, and industry insights
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-12">
          {posts.map((post, index) => (
            <AnimatedSection
              key={post.id}
              animation="fade-up"
              delay={index * 150}
              repeatOnScroll={true}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
              onClick={() => handleReadMore(post.id)} // Make the whole card clickable
            >
              <AnimatedSection animation="zoom-in" delay={index * 150 + 100}>
                <div
                  className="relative h-48 overflow-hidden cursor-pointer"
                  onClick={e => {
                    e.stopPropagation();
                    handleReadMore(post.id);
                  }}
                >
                  <img
                    src={post.featured_image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  <AnimatedSection animation="slide-down" delay={index * 150 + 200}>
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#6dbeb0] text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                        {post.category}
                      </span>
                    </div>
                  </AnimatedSection>
                </div>
              </AnimatedSection>

              <div className="p-6">
                <AnimatedSection animation="fade-up" delay={index * 150 + 200}>
                  <h3
                    className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 cursor-pointer hover:text-[#6dbeb0] transition-colors"
                    onClick={e => {
                      e.stopPropagation();
                      handleReadMore(post.id);
                    }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                </AnimatedSection>

                <AnimatedSection animation="fade-right" delay={index * 150 + 300}>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.created_at).toLocaleDateString()}
                    </div>
                  </div>
                </AnimatedSection>

                {post.tags && post.tags.length > 0 && (
                  <AnimatedSection animation="fade-up" delay={index * 150 + 350}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <AnimatedSection
                          key={tagIndex}
                          animation="scale"
                          delay={index * 150 + 400 + tagIndex * 50}
                        >
                          <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        </AnimatedSection>
                      ))}
                    </div>
                  </AnimatedSection>
                )}

                <AnimatedSection animation="scale" delay={index * 150 + 450}>
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      handleReadMore(post.id);
                    }}
                    className="w-full bg-[#3d9392] hover:bg-[#3d9392]/80 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center transition-all duration-300 group transform hover:scale-105"
                  >
                    Read Full Story
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </AnimatedSection>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="scale" delay={600} className="text-center">
          <button
            onClick={handleViewAllPosts}
            className="bg-[#6dbeb0] hover:bg-[#5ca99b] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All News
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BlogSection;
