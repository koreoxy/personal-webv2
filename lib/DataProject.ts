interface DataProjectProps {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  link: string;
}

export const DataProject: DataProjectProps[] = [
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
    title: "Aplikasi Sistem Pakar",
    description:
      "Aplikasi Desktop diagnosa penyakit kulit menggunakan menggunakan bahasa pemograman python dan library GUI PySimpleGUI ",
    link: "https://github.com/koreoxy/aplikasi-sistem-pakar",
  },
];
