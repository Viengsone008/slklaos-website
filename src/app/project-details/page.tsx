"use client";
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Users,
  CheckCircle,
  Star,
  Building2,
  Clock,
  DollarSign,
  FileText,
  Download, 
  Facebook,
  Linkedin,
  Mail,
  Instagram,
  Loader2,
} from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import AnimatedSection from '../../components/AnimatedSection';
import QuoteModal from '../../components/QuoteModal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { supabase } from '../../lib/supabase';

interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  duration: string;
  budget: string;
  client: string;
  status: 'completed' | 'ongoing';
  image: string;
  description: string;
  challenge: string;
  solution: string;
  features: string[];
  rating: number;
  key_features?: string;
  brochure_url?: string;
  specifications?: { key: string; value: string }[];
  materials?: { key: string; value: string }[];
  gallery?: string[];
  testimonial?: string;
  clientName?: string;
  clientPosition?: string;
}

const ProjectDetailPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const projectId = searchParams.get('id');

  const [project, setProject] = useState<Project | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeGalleryImage, setActiveGalleryImage] = useState(0);

  const handleRelatedProjectClick = (relatedProjectId: string) => {
    router.push(`/project-details?id=${relatedProjectId}`);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    router.push('/projects');
  };

  const handleShare = (platform: 'facebook' | 'instagram' | 'linkedin' | 'email') => {
    if (!project) return;
    const url = `${window.location.origin}/project-details?id=${project.id}`;
    const title = encodeURIComponent(project.title);
    const description = encodeURIComponent(project.description);

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${title}`,
      instagram: '',
      email: `mailto:?subject=${title}&body=Check out this project: ${url}`
    };

    if (platform === 'instagram') {
      toast.info("Instagram sharing would open the app.");
    } else {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  const handleDownloadBrochure = () => {
    if (!project?.brochure_url) {
      toast.error("No brochure available.");
      return;
    }

    const link = document.createElement("a");
    link.href = project.brochure_url;
    link.download = `${project.title}_brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data: projectsFromDb, error: projectsError } = await supabase
          .from('projects')
          .select('*');

        if (projectsError) throw projectsError;

        const transformed = (projectsFromDb ?? []).map((p: any) => ({
          ...p,
          features: typeof p.key_features === 'string'
            ? p.key_features.split('\n').map((f: string) => f.trim()).filter(Boolean)
            : [],
        }));

        const found = transformed.find((p) => p.id === projectId) || null;
        setProject(found);

        if (found) {
          const related = transformed
            .filter((p) => p.category === found.category && p.id !== found.id)
            .slice(0, 3);
          setRelatedProjects(related);
        }
      } catch (err: any) {
        console.error('❌ Error fetching project:', err.message);
        setError(err.message || 'Unable to load project');
      } finally {
        setIsLoading(false);
      }
    };

    if (projectId) fetchData();
  }, [projectId]);

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#f9e7d2]">
          <div className="text-center">
            <Loader2 className="w-12 h-12 animate-spin text-[#336675] mx-auto mb-4" />
            <p className="text-gray-600">Loading project details...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !project) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#f9e7d2]">
          <div className="py-20">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Project Not Found</h1>
            <p className="text-gray-600 mb-8 max-w-md">
              {error || "The project you're looking for doesn't exist or has been removed."}
            </p>
            <button
              onClick={handleBack}
              className="bg-[#336675] hover:bg-[#6dbeb0] text-white px-6 py-3 rounded-lg font-medium flex items-center mx-auto transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Projects
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#f9e7d2]">
        {/* Back Button */}
        <div className="container mx-auto px-4 pt-12">
          <AnimatedSection animation="fade-right" className="mb-8">
            <button
              onClick={handleBack}
              className="flex items-center mt-14 text-gray-600 hover:text-[#336675] transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Projects
            </button>
          </AnimatedSection>   
        </div>

        {/* Hero */}
        <AnimatedSection animation="fade-up" className="mb-12 container mx-auto px-4">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="bg-[#336675] text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                {project.category}
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-white/90">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-[#336675]" />
                  {project.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-[#336675]" />
                  Completed in {project.year}
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-[#336675]" />
                  Duration: {project.duration}
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-[#336675]" />
                  Client: {project.client}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Key Features */}
        <div className="container mx-auto px-4 pb-12">
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 pb-12 grid lg:grid-cols-3 gap-8">
          {/* Content left side (2/3) */}
          <div className="lg:col-span-2">
            {/* Project Overview */}
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Building2 className="w-6 h-6 mr-3 text-orange-500" />
                  Project Overview
                </h2>
                <p className="text-gray-700 text-justify leading-relaxed mb-6">{project.description}</p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">The Challenge</h3>
                    <p className="text-gray-700 text-justify">{project.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Our Solution</h3>
                    <p className="text-gray-700 text-justify">{project.solution}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Specifications & Materials */}
            <AnimatedSection animation="fade-up" delay={300}>
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-blue-600" />
                  Project Specifications
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Technical Specifications */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Technical Details</h3>
                    <div className="space-y-3">
                      {project.specifications && project.specifications.length > 0 ? (
                        project.specifications.map((item, index) => (
                          <div key={index} className="flex justify-between py-1 border-b border-gray-200 text-sm">
                            <span className="text-gray-600">{item.key}</span>
                            <span className="text-gray-800 font-medium">{item.value}</span>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-500 text-sm">Technical specifications not available.</p>
                      )}
                    </div>
                  </div>

                  {/* Materials Used */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Materials Used</h3>
                    <div className="space-y-3">
                      {project.materials && project.materials.length > 0 ? (
                        project.materials.map((item, index) => (
                          <div key={index} className="flex justify-between py-1 border-b border-gray-200 text-sm">
                            <span className="text-gray-600">{item.key}</span>
                            <span className="text-gray-800 font-medium">{item.value}</span>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-500 text-sm">Materials information not available.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Gallery */}
            <AnimatedSection animation="fade-up" delay={350}>
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h2>
                
                {project.gallery && project.gallery.length > 0 ? (
                  <>
                    {/* main image */}
                    <div className="mb-4 relative rounded-xl overflow-hidden">
                      <img
                        src={project.gallery[activeGalleryImage]}
                        alt={`${project.title} - Featured`}
                        className="w-full h-96 object-cover"
                      />
                    </div>
                    {/* thumbnails */}
                    <div className="grid grid-cols-3 gap-4">
                      {project.gallery.map((img, idx) => (
                        <div
                          key={idx}
                          className={`rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                            activeGalleryImage === idx
                              ? 'border-orange-500 shadow-lg'
                              : 'border-transparent'
                          }`}
                          onClick={() => setActiveGalleryImage(idx)}
                        >
                          <img
                            src={img}
                            alt={`${project.title} thumb ${idx + 1}`}
                            className="w-full h-24 object-cover hover:opacity-90 transition-opacity"
                          />
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <p>No additional images available for this project.</p>
                  </div>
                )}
              </div>
            </AnimatedSection>

            {/* Testimonial */}
            {project.testimonial && (
              <AnimatedSection animation="fade-up" delay={400}>
                <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Star className="w-6 h-6 mr-3 text-yellow-500" />
                    Client Testimonial
                  </h2>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(project.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="ml-2 text-gray-700 font-medium">{project.rating}/5</span>
                    </div>
                    <blockquote className="text-gray-700 italic mb-4">"{project.testimonial}"</blockquote>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{project.clientName || project.client}</p>
                      <p className="text-sm text-gray-600">{project.clientPosition || 'Project Client'}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <AnimatedSection animation="fade-left" delay={300}>
              {/* Project Details */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-600">Category</span>
                    <span className="font-medium text-gray-900">{project.category}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-600">Status</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium flex items-center">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {project.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-600">Client</span>
                    <span className="font-medium text-gray-900">{project.client}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-600">Location</span>
                    <span className="font-medium text-gray-900">{project.location}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-600">Completion</span>
                    <span className="font-medium text-gray-900">{project.year}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium text-gray-900">{project.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Budget</span>
                    <span className="font-medium text-gray-900">{project.budget}</span>
                  </div>
                </div>
              </div>

              {/* Share & Download */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Share & Download</h3>
                <div className="mb-6">
                  <p className="text-gray-600 mb-3">Share this project:</p>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleShare('facebook')}
                      className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleShare('instagram')}
                      className="bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-lg transition-colors"
                      aria-label="Share on Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="bg-blue-700 hover:bg-blue-800 text-white p-2 rounded-lg transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleShare('email')}
                      className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-lg transition-colors"
                      aria-label="Share via Email"
                    >
                      <Mail className="w-5 h-5" />
                    </button>
                  </div>
                </div>
             
                {project.brochure_url && (
                  <div className="mt-4">
                    <a
                      href={project.brochure_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Download Project Brochure
                    </a>
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="bg-[#336675] rounded-2xl shadow-lg p-6 text-white mb-8">
                <h3 className="text-xl font-semibold mb-4">Interested in a Similar Project?</h3>
                <p className="text-blue-100 mb-6">
                  Contact us to discuss your project requirements and get a detailed quote.
                </p>
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full bg-[#336675] hover:bg-[#6dbeb0] text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  Get a Free Quote
                </button>
              </div>

              {/* Related Projects */}
              {relatedProjects.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Projects</h3>
                  <div className="space-y-4">
                    {relatedProjects.map((rp) => (
                      <div
                        key={rp.id}
                        className="flex items-start cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                        onClick={() => handleRelatedProjectClick(rp.id)}
                      >
                        <img
                          src={rp.image}
                          alt={rp.title}
                          className="w-20 h-20 object-cover rounded-lg mr-3"
                        />
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1">{rp.title}</h4>
                          <p className="text-xs text-gray-500">{rp.category}</p>
                          <p className="text-xs text-gray-500">{rp.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </AnimatedSection>
          </div>
        </div>
      </div>

      <Footer />
      
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        source="project_detail_page"
      />
      
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default ProjectDetailPage;
