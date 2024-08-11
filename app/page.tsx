import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="px-5 md:px-5 md:max-w-7xl md:mx-auto">
        <HeroSection />
        <ProjectSection />
      </div>
    </div>
  );
}
