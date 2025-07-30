"use client";
import React, { useEffect, useState } from 'react';
import { ExternalLink, Calendar, MapPin, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';
import { useRouter } from 'next/navigation';
import { supabase } from '../lib/supabase';

interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
}

const Projects = () => {
  const { t } = useLanguage();
  const router = useRouter();
  const [groupedProjects, setGroupedProjects] = useState<Record<string, Project[]>>({});

  const toTitleCase = (str: string) =>
    str
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  // Shuffle utility
  const shuffleArray = (array: Project[]) => {
    return array.sort(() => Math.random() - 0.5);
  };
  
  // Fetch projects from Supabase
  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('year', { ascending: false });

      if (error) {
        console.error('Error fetching projects:', error.message);
        return;
      }

      // Only keep Residential and Commercial category
      const filtered = data?.filter((project: Project) =>
        ['residential', 'commercial'].includes(project.category)
      );  

      // Shuffle before grouping
      const shuffled = shuffleArray(filtered ?? []);

      // Group by category and slice to show 3 projects per category
      const grouped: Record<string, Project[]> = {};
      filtered?.forEach((project: Project) => {
        if (!grouped[project.category]) grouped[project.category] = [];
        if (grouped[project.category].length < 3) {
          grouped[project.category].push(project);
        }
      });
 
      setGroupedProjects(grouped);
    };

    fetchProjects();
  }, []); 

  const handleViewProject = (projectId: string) => {
    // Link to the project-details/page with the project ID as a query param
    router.push(`/project-details?id=${projectId}`);
  };

  const handleViewAllProjects = () => {
    router.push('/projects');
  };

  return (
    <section id="projects" className="py-20 bg-light">
      <div className="max-w-[1540px] mx-auto px-2 sm:px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#3d9392]">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('projects.subtitle', 'Discover our portfolio of successful construction and renovation projects across Laos')}
            </p>
          </div>
        </AnimatedSection>

        {/* Loop through grouped projects */}
        {Object.entries(groupedProjects).map(([category, projects]) => (
          <div key={category} className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-left pl-2">
              {toTitleCase(category)} 
            </h3>
            
             <div className="grid lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <AnimatedSection key={project.id} delay={index * 0.1}>
                  <div
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col h-full overflow-hidden cursor-pointer"
                    onClick={() => handleViewProject(project.id)} // Make the whole card clickable
                  >
                    {/* Image Section */}
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-xl"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                          {project.category}
                        </span>
                      </div>  
                    </div>
              
                    {/* Content Section */}
                    <div className="p-5 flex flex-col justify-between flex-grow rounded-b-xl">
                      <h3
                        className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors"
                      >
                        {project.title}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-1 text-sm">
                        <MapPin className="h-4 w-4 mr-2" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-gray-600 mb-4 text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        {project.year}
                      </div>
                      <p className="text-gray-600 mb-6 line-clamp-2">
                        {project.description}
                      </p>
                      <button
                        type="button"
                        onClick={e => {
                          e.stopPropagation(); // Prevent card click
                          handleViewProject(project.id);
                        }}
                        className="inline-flex items-center text-[#3d9392] hover:text-[#6dbeb0] font-medium group/btn"
                      >
                        {t('Project Details', 'View Details')}
                        <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        ))}

        <AnimatedSection delay={0.6}>
          <div className="text-center mt-12">
            <button
              onClick={handleViewAllProjects}
              className="inline-flex items-center bg-[#3d9392] text-white px-8 py-3 rounded-lg hover:bg-[#6dbeb0] transition-colors font-medium"
            >
              {t('projects.viewAll', 'View All Projects')}
              <ExternalLink className="h-5 w-5 ml-2" />
            </button>
          </div> 
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
