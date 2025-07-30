/* ─────────────────────────
   src/App.tsx
   ───────────────────────── */

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate, 
  useLocation,
} from "react-router-dom";

/* ───── context & providers ───── */
import { LanguageProvider } from "./contexts/LanguageContext";
import { AuthProvider } from "./contexts/AuthContext";
import { PostProvider } from "./contexts/PostContext";
import { SettingsProvider } from "./contexts/SettingsContext";
import { DatabaseProvider } from "./contexts/DatabaseContext";
import { SocialShareProvider } from "./contexts/SocialShareContext";
import LoadingScreen from "./components/LoadingScreen";

/* ───── common layout components ───── */
import Navbar from "./app/Navbar";
import Hero from "./app/Hero";
import Services from "./app/Services";
import Products from "./app/Products";
import Projects from "./app/Projects";
import About from "./app/About";
import BlogSection from "./app/BlogSection";
import Contact from "./app/Contact";
import AdminPanel from "./components/adminwd/AdminPanel";
import Footer from "./app/Footer";

/* ───── page components ───── */
import ServicesPage from "./app/services/page";
import ProductsPage from "./app/products/page";
import ProjectsPage from "./app/projects/page";
import AboutPage from "./app/about/page";
import NewsPage from "./app/news/page";
import ContactPage from "./app/contact/page";
import PostDetailPage from "./app/news-details/page";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductItemDetailPage from "./app/product-item-details/page";
import ProductCataloguePage from "./pages/ProductCataloguePage";
import ProjectCataloguePage from './pages/ProjectCataloguePage';
import CareerCategoryDynamic from "./pages/CareerCategoryDynamic";
import JobDetailPage from "./pages/JobDetailPage"; // adjust path if needed


/* add any other page imports (careers, legal, admin, etc.) here */

/* careers */ 
import CareersPage from "./pages/CareersPages";
// import {
//   CareerEngineering, 
//   CareerManagement,
//   CareerSales, 
//   CareerAdmin, 
//   CareerDesign,
//   CareerInternships,
// } from "./pages/CareerCategoryPage";

/* legal */
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import SitemapPage from "./pages/SitemapPage";

import FireworksDisplay from "./components/FireworksDisplay";

 

function MainWebsite() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => setIsLoading(false);

  if (isLoading) return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Fireworks will auto-check date inside FireworksDisplay */}
      <FireworksDisplay />

      <Navbar />
      <Hero />
      <Services />
      <Products />
      <Projects />
      <About />
      <BlogSection />
      <Contact />
      <Footer />
    </div>
  );
}




/* ─────────────────────────────────────────
   MOCK DATA for each career category
   Replace these with real jobs or fetch
   from API / CMS later.
   ───────────────────────────────────────── */

const jobsEngineering = [
  {
    title: "Site Engineer",
    location: "Vientiane",
    type: "Full-Time",
    description: "Oversee on-site construction activities.",
    fullDescription:
      "You will coordinate with project managers and ensure quality standards are met.",
    tasks: ["Daily site supervision", "QA/QC inspections"],
    requirements: ["Civil Eng. degree", "2+ years experience"],
  },
];

const jobsManagement = [
  {
    title: "Construction Manager",
    location: "Luang Prabang",
    type: "Full-Time",
    description: "Lead multi-disciplinary project teams.",
    fullDescription:
      "Manage budgets, schedules and ensure safety compliance across sites.",
    tasks: ["Budget control", "Team leadership"],
    requirements: ["5+ yrs PM experience", "PMP a plus"],
  },
];

const jobsSales = [
  {
    title: "Business Development Officer",
    location: "Pakse",
    type: "Full-Time",
    description: "Drive sales of construction materials.",
    fullDescription:
      "Identify new opportunities, prepare proposals and close deals.",
    tasks: ["Lead generation", "Client presentations"],
    requirements: ["B2B sales background", "Strong communication"],
  },
];

const jobsAdmin = [
  {
    title: "Office Administrator",
    location: "Vientiane",
    type: "Part-Time",
    description: "Ensure smooth office operations.",
    fullDescription:
      "Handle procurement, travel arrangements and basic accounting support.",
    tasks: ["Document control", "Supplier coordination"],
    requirements: ["Good MS-Office skills", "English fluency"],
  },
];

const jobsDesign = [
  {
    title: "Architectural Designer",
    location: "Vientiane",
    type: "Contract",
    description: "Produce concept designs and 3D renders.",
    fullDescription:
      "Work closely with clients to translate requirements into feasible design solutions.",
    tasks: ["Concept sketches", "Revit/BIM modelling"],
    requirements: ["Architecture degree", "Portfolio required"],
  },
];

const jobsIntern = [
  {
    title: "Engineering Intern",
    location: "Vientiane",
    type: "Internship",
    description: "Assist senior engineers with site surveys.",
    fullDescription:
      "Great opportunity for final-year students to gain practical exposure.",
    tasks: ["Data collection", "AutoCAD drawings"],
    requirements: ["Studying civil engineering", "Eager to learn"],
  },
];

 
/* ───────────────────────── helpers ───────────────────────── */
function PageWrap({ Component }: { Component: React.ComponentType }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Component />
      <Footer />
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/* ────────────── inline LandingPage ────────────── */
const LandingPage: React.FC = () => (
  <>
    <Navbar />
    <Hero />
    <Services />
    <Products />
    <Projects />
    <About />
    <BlogSection />
    <Contact />
    <Footer />
  </>
);

/* ───────────────────────── App ───────────────────────── */
function App() {
  return (
    <LanguageProvider>
      <SettingsProvider>
        <AuthProvider>
          <DatabaseProvider>
            <PostProvider>
              <SocialShareProvider>
                <Router>
                  <ScrollToTop />

                  <Routes>

  {/* Main homepage */}
                  <Route path="/" element={<MainWebsite />} />
                    
                    
              {/* Individual landing pages */}
                  <Route path="/services" element={
                    <div className="min-h-screen">
                      <Navbar />
                      <ServicesPage />
                      <Footer />
                    </div>
                  } /> 

                    
                    {/* Standard pages */}
                    <Route
                      path="/services"
                      element={<PageWrap Component={ServicesPage} />}
                    />
                    <Route
                      path="/products"
                      element={<PageWrap Component={ProductsPage} />}
                    />
                    <Route
                      path="/projects"
                      element={<PageWrap Component={ProjectsPage} />}
                    />
                    <Route path="/projects/all" element={<ProjectCataloguePage />} />
                    <Route
                      path="/about"
                      element={<PageWrap Component={AboutPage} />}
                    />
                    <Route
                      path="/news"
                      element={<PageWrap Component={NewsPage} />}
                    />
                    <Route
                      path="/contact"
                      element={<PageWrap Component={ContactPage} />}
                    />

                    {/* Product routes */}
                    <Route
                      path="/products/:category"
                      element={<ProductDetailPage />}
                    />
                    <Route
                      path="/products/item/:productId"
                      element={<ProductItemDetailPage />}
                    />
                    <Route
                      path="/product-catalogue"                // ← route matches the button / Link
                      element={<ProductCataloguePage />}
                    />

                    {/* Blog posts, project details, etc. */}
                    <Route
                      path="/news/:postId"
                      element={<PostDetailPage />}
                    />
                    <Route
                      path="/projects/:projectId"
                      element={<ProjectDetailPage />}
                    />

{/* careers overview */} 
                    <Route path="/careers" element={<PageWrap Component={CareersPage} />} />

                    {/* career categories (passing props) */}

                    <Route path="/careers/:categorySlug" element={<CareerCategoryDynamic />} />

                    <Route path="/careers/job/:jobId" element={<JobDetailPage />} />

                     
                    
                    {/* <Route
                      path="/careers/engineering"
                      element={
                        <CareerEngineering
                          title="Engineering"
                          jobs={jobsEngineering} 
                        />
                      }
                    />
                    <Route
                      path="/careers/management"
                      element={
                        <CareerManagement
                          title="Construction Management"
                          jobs={jobsManagement}
                        />
                      }
                    />
                    <Route
                      path="/careers/sales"
                      element={
                        <CareerSales
                          title="Sales & Marketing"
                          jobs={jobsSales}
                        />
                      }
                    />
                    <Route
                      path="/careers/admin"
                      element={<CareerAdmin title="Administrative" jobs={jobsAdmin} />}
                    />
                    <Route
                      path="/careers/design"
                      element={
                        <CareerDesign
                          title="Architecture & Design"
                          jobs={jobsDesign}
                        />
                      }
                    />
                    <Route
                      path="/careers/internships"
                      element={
                        <CareerInternships
                          title="Internships"
                          jobs={jobsIntern}
                        />
                      }
                    /> */}

{/* legal */}
                    <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                    <Route path="/terms-of-service" element={<TermsOfServicePage />} />
                    <Route path="/sitemap" element={<SitemapPage />} />



{/* admin */}
                    <Route path="/admin/*" element={<AdminPanel />} /> 
                    

                    {/* Fallback */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </Router>
              </SocialShareProvider>
            </PostProvider>
          </DatabaseProvider>
        </AuthProvider>
      </SettingsProvider>
    </LanguageProvider>
  );
}

export default App;