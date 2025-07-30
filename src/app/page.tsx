import Image from "next/image";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Products from "./Products";
import Projects from "./Projects";
import About from "./About";
import BlogSection from "./BlogSection";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen w-full bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Main Content Sections */}
      <main className="w-full">
        {/* Services Section */}
        <Services />

        {/* Products Section */}
        <Products />

        {/* Projects Section */}
        <Projects />

        {/* About Section */}
        <About />

        {/* News/Blog Section */}
        <BlogSection />

        {/* Contact Section */}
        <section id="contact" className="py-20 px-8 sm:px-20 bg-gray-50">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}