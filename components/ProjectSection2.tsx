import Image from "next/image";
import Link from "next/link";

interface GridItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  link: string;
}

const gridItems: GridItem[] = [
  {
    id: 1,
    src: "/project/1.png",
    alt: "image-project-1",
    title: "NutrixSense",
    description:
      "Aplikasi NutrixSense adalah aplikasi berbasis web yang bertujuan untuk menghitung kalori dan nutrisi harian di Indonesia menggunakan deteksi objek dari model YOLOv8. Aplikasi ini juga memungkinkan pengguna untuk menghitung kalori dan nutrisi makanan secara manual. Saat ini, NutrixSense hanya dapat mendeteksi 10 jenis makanan.",
    link: "https://nutrixsense.xyz",
  },
  {
    id: 2,
    src: "/project/2.png",
    alt: "image-project-2",
    title: "Sihati Siswa",
    description:
      "Sistem Informasi Curahan Hati Siswa SMP atau platform digital yang melayani kebutuhan konseling untuk para peserta didik dengan memfasilitasi ruang konseling online.",
    link: "https://sihati-siswa.vercel.app/",
  },
  {
    id: 3,
    src: "/project/3.png",
    alt: "image-project-3",
    title: "Calender Hijriah",
    description:
      "Web tools untuk konversi kalender masehi ke kalender hijriah, bahasa arab dan bahasa aceh ",
    link: "https://calender-hijriah.netlify.app/",
  },
  {
    id: 4,
    src: "/project/4.png",
    alt: "image-project-4",
    title: "GreenWaste",
    description:
      "GreenWaste adlah platfrom yang menyediakan informasi seputar pengolahan limbah. memiliki fitur-fitur unik yang mendukung komitmen ini, termasuk sebuah forum interaktif tempat Anda dapat berdiskusi dan berbagi pengalaman dengan komunitas yang peduli akan lingkungan.",
    link: "https://green-waste.netlify.app/",
  },
  {
    id: 5,
    src: "/project/5.png",
    alt: "image-project-5",
    title: "Todo List App",
    description:
      "Aplikasi Todo List untuk mencatat list-list plan harian yang sedang di kerjakan.",
    link: "https://todolist-app-x.netlify.app/",
  },

  {
    id: 6,
    src: "/project/6.png",
    alt: "image-project-6",
    title: "BMI Calculator",
    description:
      "Aplikasi kalkutalor untuk meghitung index BMI dari berad badan(KG) dan tinggi badan(CM)",
    link: "https://cek-bmi-calculator.netlify.app/",
  },
  {
    id: 7,
    src: "/project/7.png",
    alt: "image-project-7",
    title: "",
    description:
      "Phasellus euismod lacinia felis, in pharetra nisi suscipit non.",
    link: "",
  },
];

const ProjectSection2 = () => {
  return (
    <div className="mt-10">
      <div className="bg-light border border-black p-5 transform rotate-0 skew-x-3 skew-y-[0.1deg] shadow-[10px_10px_black]">
        <h1 className="font-bold text-[28px]">My Project</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5">
        {gridItems.map((item, index) => (
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
