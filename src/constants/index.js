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
  freelancers,
  maplinlogo,
  nxb,
  ecomin,
  threejs,
  maplinstudio,
  maplinhome,
  maplineng,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "React Js Developer",
    company_name: "Fiver/Upwork",
    icon: freelancers,
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Js Developer",
    company_name: "Maplin Engineering",
    icon: maplinlogo,
    iconBg: "#383E56",
    date: "September 2022 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Mern Stack Internship",
    company_name: "Ecomminn Pvt",
    icon: ecomin,
    iconBg: "#E6DEDD",
    date: "May 2022 - July 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Mern Stack certification",
    company_name: "NexusBerry Training & Solutions",
    icon: nxb,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - April 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "He is a very hardworking and dedicated person. He has shown comittment and intrest towards learning web development and be a highly proffesional",
    name: "Rana Ajmal",
    designation: "Director",
    company: "Nexusberry training & solutions",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Hamza is very concerned about his product and quality of delivery. Throughout his internship period he learnt and developed skillset which led him to be a good problem solver and imporve work quality.",
    name: "Zeeshan khawar",
    designation: "Project Manager",
    company: "Ecommin pvt",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    testimonial:
      "Hamza has delivered both, as a sole and collaborative team effort. He delivered quality product and has been found to be highly committed.",
    name: "Bilal Baig",
    designation: "Senior developer / Project manager",
    company: "Maplin Engineering",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
];

const projects = [
  {
    name: "Maplin Studio",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "material UI",
        color: "pink-text-gradient",
      },
    ],
    image: maplinstudio,
    source_code_link: "https://www.maplinstudio.com/",
  },
  {
    name: "Maplin Engineering",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: maplineng,
    source_code_link: "https://maplinengineering.com/",
  },
  {
    name: "Maplin Homes",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css/sass",
        color: "pink-text-gradient",
      },
    ],
    image: maplinhome,
    source_code_link: "https://www.maplinhomes.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
