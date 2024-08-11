import { CardProject } from "@/components/CardProject";

const ProjectSection = () => {
  return (
    <div className="mt-10">
      <div className="bg-light border border-black p-5 transform rotate-0 skew-x-3 skew-y-[0.1deg] shadow-[10px_10px_black]">
        <h1 className="font-bold text-[28px]">My Project</h1>
      </div>

      <div className="p-5">
        <CardProject />
      </div>
    </div>
  );
};

export default ProjectSection;
