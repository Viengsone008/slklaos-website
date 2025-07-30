"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ Changed from "next/router"
import {
  Building2,
  MapPin,
  Calendar,
  Users,
  Search,
  ExternalLink,
  Star,
  CheckCircle,
  ChevronUp,
} from "lucide-react";

import { supabase } from "../../lib/supabase";
import Navbar from "../Navbar";
import Footer from "../Footer";
import QuoteModal from "../../components/QuoteModal";
import AnimatedSection from "../../components/AnimatedSection";

interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  duration: string;
  budget: string;
  client: string;
  status: "completed" | "ongoing";
  image: string;
  description: string;
  features: string[];
  rating: number;
}

const ProjectCataloguePage: React.FC = () => {
  const router = useRouter(); // ✅ Next.js router
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"year" | "budget" | "location">("year");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

 useEffect(() => {
  const fetchProjects = async () => {
    setIsLoading(true);

    let query = supabase
      .from("projects")
      .select("*")
      .eq("is_published", true); // only fetch published

    if (sortBy) {
      query = query.order(sortBy, { ascending: sortOrder === "asc" });
    }

    const { data, error } = await query;

    if (error) setError(error.message);
    else setProjects(data as Project[]);

    setIsLoading(false); 
  };

  fetchProjects();
}, [sortBy, sortOrder]);



  

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    ...Array.from(new Set(projects.map((p) => p.category))).map((cat) => ({
      id: cat,
      name: cat.charAt(0).toUpperCase() + cat.slice(1),
      count: projects.filter((p) => p.category === cat).length,
    })),
  ];

  const filtered = projects.filter((p) => {
    const term = searchTerm.toLowerCase();
    return (
      (selectedCategory === "all" || p.category === selectedCategory) &&
      (p.title.toLowerCase().includes(term) ||
        p.location.toLowerCase().includes(term) ||
        p.client.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term))
    );
  });

  // ✅ Updated navigation function
  const handleViewProject = (id: string) => {
    router.push(`/project-details?id=${id}`);
  };

  // ✅ Updated navigation function
  const handleContactTeam = () => {
    router.push("/contact");
  };

  return (
    <>
      <Navbar />

      <section className="relative py-28 bg-gradient-to-br from-[#1b3d5a] via-[#3d9392] to-[#6dbeb0] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Project catalogue hero"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b3d5a]/80 to-[#3d9392]/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-down">
            <h1 className="text-5xl lg:text-7xl font-bold mb-4 drop-shadow-2xl">
              Project <span className="text-[#6dbeb0]">Catalogue</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              A comprehensive archive of all our construction achievements across Laos
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3d9392] focus:border-transparent"
            />
          </div>

          <div className="flex items-center gap-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "year" | "budget" | "location")}
              className="border rounded px-3 py-2 text-sm"
            >
              <option value="year">Year</option>
              <option value="budget">Budget</option>
              <option value="location">Location</option>
            </select>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
              className="border rounded px-3 py-2 text-sm"
            >
              <option value="desc">Descending</option>
              <option value="asc">Ascending</option>
            </select>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-[#3d9392] text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-[#6dbeb0]"
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>
      </section>

       {isLoading && <div className="text-center py-20 text-gray-600">Loading projects…</div>}
      {error && <div className="text-center py-20 text-red-600">{error}</div>}

      {!isLoading && !error && (
        <section className="py-16 bg-[#eef4f4]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.slice(0, visibleCount).map((project, index) => (
                <AnimatedSection
                  key={project.id}
                  animation="fade-up"
                  delay={index * 100}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#3d9392] text-white px-3 py-1 rounded-full text-sm capitalize">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => handleViewProject(project.id)}
                        className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">{project.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                        Completed in {project.year}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-2 text-orange-500" />
                        {project.client}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-sm font-medium text-gray-900">{project.rating}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Budget</div>
                        <div className="font-bold text-orange-600">{project.budget}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleViewProject(project.id)}
                      className="mt-4 w-full bg-[#3d9392] hover:bg-[#6dbeb0] text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center transition-all duration-300 group"
                    >
                      View Project Details
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {visibleCount < filtered.length && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="bg-[#6dbeb0] hover:bg-[#3d9392] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Load More Projects
                </button>
              </div>
            )}

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="py-20 bg-gradient-to-r from-[#6dbeb0] to-[#336675] text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our satisfied clients and let us bring your vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-[#3d9392] hover:bg-[#6dbeb0] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get a Quote
              </button>
              <button
                onClick={handleContactTeam} // ✅ Updated to use router
                className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Contact Our Team
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 p-3 bg-[#3d9392] text-white rounded-full shadow-lg hover:bg-[#6dbeb0] transition-all duration-300"
          aria-label="Back to Top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        source="project_catalogue_page"
      />
    </>
  );
};

export default ProjectCataloguePage;
