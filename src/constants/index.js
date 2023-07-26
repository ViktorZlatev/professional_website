import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Team",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Safety",
    icon: web,
  },
  {
    title: "Quality",
    icon: mobile,
  },
  {
    title: "Creativity",
    icon: backend,
  },
  {
    title: "Experience",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Vlado",
    company_name: "Manager",
    icon: starbucks,
    iconBg: "#383E56",
    points: [
      "Collaborating with architects, engineers, and subcontractors to create project schedules, set milestones, and ensure that work progresses efficiently.",
      "Ensuring the quality of construction work and adhering to safety standards are critical responsibilities for Vlado.They implement quality control measures to monitor workmanship and construction processes. ",
      "Vlado plays a vital role in maintaining strong relationships with clients. He communicates with clients regularly, addresses their concerns, and keeps them updated on project progress. ",
    ],
  },
  {
    title: "Ivo",
    company_name: "Interior designer",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
      "He analyzes the available space and creates efficient floor plans that optimizes the use of space while considering the client's needs and preferences. ",
      "Collaborates with various professionals, including architects, contractors, and vendors, to bring the design to life.Works closely with these stakeholders to ensure that the design is executed as planned.",
      "Selects appropriate materials, furniture and decor items for the project. Ivo considers factors such as durability, sustainability, and budget constraints.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    points: [
      "Project Planning and Execution: Collaborating with architects, engineers, and subcontractors to create project schedules, set milestones, and ensure that work progresses efficiently.",
      "Quality Control and Safety Compliance: Ensuring the quality of construction work and adhering to safety standards are critical responsibilities.They implement quality control measures to monitor workmanship and construction processes. ",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with SimoNik was a breeze! Their attention to detail, and timely execution exceeded our expectations!",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "SimoNik transformed our clinic into a modern, functional workplace thanks to their innovative design solutions",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "From the very beggining to project completion, SimoNik displayed a level of professionalism that made us confident in their abilities.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "denta house",
    description:
      "one of our biggest projects namely the dental clinic Denta house done with great taste and style as always",
    tags: [
      {
        name: "dentahouse",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.facebook.com/dentahouse.bg",
  },
  {
    name: "Opticlasa",
    description:
      "The new Opticlasa center has opened its doors and we are proud to say that the shop is one of our regular customers!",
    tags: [
      {
        name: "opticlasa",
        color: "blue-text-gradient",
      },

    ],
    image: jobit,
    source_code_link: "https://www.facebook.com/opticlasa",
  },
  {
    name: "Showroom Asics",
    description:
      "Тhe famous asics showroom, made very fashionably and modern looking, by the skilled team of SimoNik",
    tags: [
      {
        name: "asics",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://www.facebook.com/asicsbul",
  },
];

export { services, technologies, experiences, testimonials, projects };
