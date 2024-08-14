import { DataProject } from "@/lib/DataProject";
import Image from "next/image";
import Link from "next/link";

const ProjectSection2 = () => {
  const data = DataProject;
  return (
    <div className="mt-10">
      <div className="bg-light border border-black p-5 transform rotate-0 skew-x-3 skew-y-[0.1deg] shadow-[10px_10px_black]">
        <h1 className="font-bold text-[28px]">My Project</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`relative group bg-light border border-black p-1 transform rotate-0 -skew-x-3 skew-y-[0.1deg] shadow-[10px_10px_black] ${
              index === 0 || index === 6 ? "col-span-2" : ""
            } ${index === 6 ? "col-span-2" : ""}`}
          >
            <div className="relative w-full h-24 border border-black overflow-hidden">
              <Image
                src={item.src}
                layout="fill"
                objectFit="cover"
                alt={item.alt}
                className="object-cover grayscale transition-transform duration-300 ease-in-out group-hover:grayscale-0"
              />
              {/* Overlay with "See Details" */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <Link
                  href={item.link}
                  className="bg-black text-white py-2 px-4 text-center text-sm font-semibold transform scale-90 transition-transform duration-300 ease-in-out group-hover:scale-100"
                >
                  See Details
                </Link>
              </div>
            </div>
            <div className="mt-2 p-2">
              <h1 className="font-bold">{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection2;
