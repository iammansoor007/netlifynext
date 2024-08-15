export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/landingpage1.jpg",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/landingpage12.jpg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/landingpage16.jpg",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/landingpage4.jpg",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/landingpage5.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/landingpage6.jpg",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/landingpage7.jpg",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/landingpage8.jpg",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/landingpage9.jpg",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "/landingpage10.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/landingpage11.jpg",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "/landingpage12.jpg",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/landingpage13.jpg",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/landingpage14.jpg",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "/landingpage18.jpg",
  },
];

export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  desc: string;
  image: string;
  categoryId: number;
}
export const categories: Category[] = [
  { id: 1, name: "HTML | CSS | JavaScript| TAILWIND" },
  { id: 2, name: "REACT | CSS | TAILWIND | UI" },

  { id: 3, name: "NEXT.JS | CSS | TAILWIND | UI" },
  // Add more categories here
];

export const work: Product[] = [
  {
    id: 1,
    name: "FG Institute",
    desc: "A website for educational institute made with the help of React.js , CSS and MongoDB  ",
    image: "/mobile-1.jpg",
    categoryId: 1,
  },
  {
    id: 4,
    name: "Ecommerce Shopping Website",
    desc: "A full fledge Ecommerce website where user can easily buy items also the website can be handel by Admin dashboard made with React.js ",
    image: "/laptop-1.jpg",
    categoryId: 2,
  },
  {
    id: 6,
    name: "Gemini clone",
    desc: "A perfect clone of gemini Ai with the help of Google API  ",
    image: "/laptop-3.jpg",
    categoryId: 3,
  },
  {
    id: 2,
    name: "Chat gbt clone",
    desc: "A perfect clone of gemini Ai with the help of Google API. ",
    image: "/mobile-2.jpg",
    categoryId: 1,
  },
  {
    id: 3,
    name: "Food website",
    desc: "Food menu website where user can easily check the available menu of restraunant  ",
    image: "/mobile-3.jpg",
    categoryId: 1,
  },
  {
    id: 5,
    name: "Music School Library",
    desc: "A website for Music school where they can show there courses to students ",
    image: "/laptop-2.jpg",
    categoryId: 3,
  },
  {
    id: 5,
    name: "Portfolio",
    desc: "A portfolio to attract the client . ",
    image: "/laptop-2.jpg",
    categoryId: 1,
  },
];

export const skills = [
  {
    name: "HTML",
    percentage: "99%",
    image: "/html-5.png",
  },
  {
    name: "CSS",
    percentage: "99%",
    image: "/css-3.png",
  },
  {
    name: "Javascript",
    percentage: "75%",
    image: "/js.svg",
  },
  {
    name: "React js",
    percentage: "55%",
    image: "/react.svg",
  },

  {
    name: "Wordpress",
    percentage: "75%",
    image: "/wp.svg",
  },
  {
    name: "Tailwind",
    percentage: "70%",
    image: "/Tailwind CSS.png",
  },
  {
    name: "Bootstrap",
    percentage: "90%",
    image: "/bootstrap.png",
  },
  {
    name: "Git",
    percentage: "70%",
    image: "/social.png",
  },
  {
    name: "GitHub",
    percentage: "70%",
    image: "/github.png",
  },
  {
    name: "WooCommerce",
    percentage: "70%",
    image: "/woocommerce.png",
  },
  {
    name: "Material UI",
    percentage: "75%",
    image: "/Material UI.png",
  },
  {
    name: "Aceternity UI",
    percentage: "90%",
    image: "/aceternty ui.webp",
  },
];

export const experience = [
  {
    id: 1,
    startDate: "2018",
    endDate: "2023",
    title: "Matriculation",
    description:
      "Successfully passed the matric exam from the Federal Board of Pakistan with an A grade. This achievement laid a strong foundation in my educational journey, enhancing my skills in various subjects.",
  },
  {
    id: 2,
    startDate: "2023",
    endDate: "2025",
    title: "Inter in Computer Science",
    description:
      "Currently pursuing my intermediate studies in Computer Science from the Federal Board of Pakistan. This program is helping me deepen my knowledge and skills in computing, programming, and problem-solving.",
  },
  {
    id: 3,
    startDate: "2021",
    endDate: "2022",
    title: "Diploma in English Language",
    description:
      "Completed a 7-month diploma in English from the Eureka Institute. This course significantly improved my communication skills, enabling me to effectively interact with clients in English.",
  },
];


