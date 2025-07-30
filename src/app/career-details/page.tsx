"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ApplicationModal from "../../components/admin/ApplicationModal";
import { 
  UploadCloud, 
  Download, 
  MapPin, 
  Calendar, 
  Clock, 
  Briefcase,
  DollarSign,
  ArrowLeft,
  CheckCircle,
  Building2
} from "lucide-react";
import AnimatedSection from "../../components/AnimatedSection";

const JobDetailPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const jobId = searchParams.get('id');
  
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!jobId) {
      setLoading(false);
      return;
    }

    const fetchJob = async () => {
      setLoading(true);
      
      try {
        const { data, error } = await supabase
          .from("jobs")
          .select("*")
          .eq("id", jobId)
          .eq("status", "Open")
          .single();

        if (error) {
          console.error("Error fetching job:", error);
          setJob(null);
        } else {
          // Parse and format job data
          const parsed = {
            ...data,
            tasks: Array.isArray(data.tasks) ? data.tasks : [],
            requirements: Array.isArray(data.requirements) 
              ? data.requirements 
              : typeof data.requirements === "string"
              ? data.requirements.split(/\r?\n/).filter(Boolean)
              : [],
            benefits: Array.isArray(data.benefits)
              ? data.benefits
              : typeof data.benefits === "string"
              ? data.benefits.split(/\r?\n/).filter(Boolean)
              : [],
          };
          setJob(parsed);
        }
      } catch (error) {
        console.error("Error fetching job:", error);
        setJob(null);
      }

      setLoading(false);
    };

    fetchJob();
  }, [jobId]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-[#3d9392] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading job details...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!job) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center py-16">
            <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Job not found</h3>
            <p className="text-gray-500 mb-6">
              This position may no longer be available or the link is invalid.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('/career-catalogue')}
                className="bg-[#3d9392] hover:bg-[#6dbeb0] text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                View All Positions
              </button>
              <button
                onClick={() => router.push('/careers')}
                className="border-2 border-[#3d9392] text-[#3d9392] hover:bg-[#3d9392] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Back to Careers
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero Image Banner */}
      <div
        className="relative w-full h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('${job.hero_image_url || "https://qawxuytlwqmsomsqlrsc.supabase.co/storage/v1/object/public/image//Career-Banner.jpg"}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-4xl">
            <AnimatedSection>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 drop-shadow-2xl">
                {job.title}
              </h1>
              
              <div className="flex flex-wrap gap-6 text-lg text-gray-200">
                <div className="flex items-center">
                  <Building2 className="w-5 h-5 mr-2" />
                  {job.category || job.department}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  {job.location || 'Vientiane, Laos'}
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {job.employment_type || job.job_type || 'Full-time'}
                </div>
                {job.salary_range && (
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 mr-2" />
                    {job.salary_range}
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Job Description */}
                <AnimatedSection animation="fade-up">
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Description</h2>
                    <div className="prose prose-gray max-w-none">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {job.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Key Responsibilities */}
                {job.tasks?.length > 0 && (
                  <AnimatedSection animation="fade-up" delay={100}>
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Responsibilities</h2>
                      <ul className="space-y-3">
                        {job.tasks.map((task: string, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-[#3d9392] mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 leading-relaxed">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>
                )}

                {/* Required Qualifications */}
                {job.requirements?.length > 0 && (
                  <AnimatedSection animation="fade-up" delay={200}>
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Required Qualifications</h2>
                      <ul className="space-y-3">
                        {job.requirements.map((req: string, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-[#3d9392] mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 leading-relaxed">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>
                )}

                {/* Benefits */}
                {job.benefits?.length > 0 && (
                  <AnimatedSection animation="fade-up" delay={300}>
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits & Perks</h2>
                      <ul className="space-y-3">
                        {job.benefits.map((benefit: string, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-[#3d9392] mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  
                  {/* Apply Card */}
                  <AnimatedSection animation="fade-up" delay={100}>
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Apply for this Position</h3>
                      
                      {/* Application Deadline */}
                      {job.application_end && (
                        <div className="mb-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                          <div className="flex items-center text-orange-700">
                            <Clock className="w-5 h-5 mr-2" />
                            <div>
                              <div className="font-semibold">Application Deadline</div>
                              <div className="text-sm">
                                {new Date(job.application_end).toLocaleDateString("en-GB", {
                                  day: "2-digit",
                                  month: "long",
                                  year: "numeric",
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="space-y-3">
                        <button
                          className="w-full bg-[#3d9392] hover:bg-[#6dbeb0] text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                          onClick={() => setModalOpen(true)}
                        >
                          <UploadCloud className="w-5 h-5" />
                          Apply Now
                        </button>

                        {job.pdf_url && (
                          <a
                            href={job.pdf_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                          >
                            <Download className="w-5 h-5" />
                            Download Job Description
                          </a>
                        )}
                      </div>
                    </div>
                  </AnimatedSection>

                  {/* Job Info Card */}
                  <AnimatedSection animation="fade-up" delay={200}>
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Job Information</h3>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Building2 className="w-5 h-5 text-gray-400 mr-3" />
                          <div>
                            <div className="text-sm text-gray-500">Department</div>
                            <div className="font-medium text-gray-400">{job.category || job.department}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                          <div>
                            <div className="text-sm text-gray-500">Location</div>
                            <div className="font-medium text-gray-400">{job.location || 'Vientiane, Laos'}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <Briefcase className="w-5 h-5 text-gray-400 mr-3" />
                          <div>
                            <div className="text-sm text-gray-500">Employment Type</div>
                            <div className="font-medium text-gray-400">{job.employment_type || job.job_type || 'Full-time'}</div>
                          </div>
                        </div>

                        {job.salary_range && (
                          <div className="flex items-center">
                            <DollarSign className="w-5 h-5 text-gray-400 mr-3" />
                            <div>
                              <div className="text-sm text-gray-500">Salary Range</div>
                              <div className="font-medium text-gray-400">{job.salary_range}</div>
                            </div>
                          </div>
                        )}
                        
                        <div className="flex items-center">
                          <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                          <div>
                            <div className="text-sm text-gray-500">Posted Date</div>
                            <div className="font-medium text-gray-400">
                              {new Date(job.created_at).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>

                  {/* Contact Card */}
                  <AnimatedSection animation="fade-up" delay={300}>
                    <div className="bg-gradient-to-br from-[#3d9392] to-[#6dbeb0] rounded-2xl shadow-lg p-6 text-white">
                      <h3 className="text-xl font-bold mb-4">Questions about this role?</h3>
                      <p className="text-blue-100 mb-4 text-sm">
                        Contact our HR team for more information about this position.
                      </p>
                      <button
                        onClick={() => router.push('/contact?source=career-details')}
                        className="w-full bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                      >
                        Contact HR Team
                      </button>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <ApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        jobId={job.id}
        jobTitle={job.title}
      />
    </>
  );
};

export default JobDetailPage;
