import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import useLenis from "@/hooks/useLenis";

const Index = () => {
  useLenis();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
