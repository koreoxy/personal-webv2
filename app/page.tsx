import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import ProjectSection2 from "@/components/ProjectSection2";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="px-5 md:px-5 md:max-w-7xl md:mx-auto">
        <HeroSection />
        <div className="block sm:hidden">
          <ProjectSection />
        </div>
        <div className="hidden sm:block">
          <ProjectSection2 />
        </div>
      </div>
    </div>
  );
}
