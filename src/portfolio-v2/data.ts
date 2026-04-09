import type { FeaturedProject, ToolName } from "./types";

export const heroTape = [
  "UI Design",
  "Wireframes",
  "Prototyping",
  "User Research",
  "Micro Interactions",
  "User Flow Design",
  "Web Experiences",
  "Figma make",  "Goggle Stitch",  "Motiff",  "UX pilot" 
];

export const featuredProjects: FeaturedProject[] = [
  {
    year: "",
    title: "Aayu Mobile App",
    category: "",
    image: "/projects/Aayu (3).jpg.jpeg",
    summary:
      "Helps users express emotions through voice and chat.Designed for a calm and supportive experience.",
    deliverables: ["Mobile App", "Healthcare", "UI/UX"],
    href: "https://www.behance.net/gallery/247057879/Aayu-Mobile-App",
    tools: ["Figma", "Adobe XD", "Lottie"],
    orbitIcon: "smartphone",
  },
  {
    year: "",
    title: "Health Hub Web Mobile",
    category: "",
    image: "/projects/HSLS (2).jpg.jpeg",
    summary:"Organizes health content based on age and needs.Makes information easy to find and understand.",
    deliverables: ["Web Design", "Mobile", "Health Tech"],
    href: "https://www.behance.net/gallery/247120695/Health-Hub-Web-Mobile",
    tools: ["Figma", "Photoshop"],
    orbitIcon: "heart",
  },
  {
    year: "",
    title: "Branding Logo Design",
    category: "",
    image: "/projects/Brand Identity (1).jpg.jpeg",
    summary:"A modern brand identity focused on growth and direction.From concept to final logo design.",
    deliverables: ["Branding", "Logo", "Identity"],
    href: "https://www.behance.net/gallery/239601115/Logo-Case-Study",
    tools: ["Photoshop", "Adobe XD", "Figma"],
    orbitIcon: "pen",
  },
  {
    year: "",
    title: "Glowly Landing Page UI Design",
    category: "",
    image: "/projects/Glowly (4).jpg.jpeg",
    summary:"A beauty salon landing page to explore and book services.Clean, simple, and easy to use.",
    deliverables: ["Landing Page", "UI Design", "Visual Design"],
    href: "https://www.behance.net/gallery/246910359/Glowly-Landing-Page-UI-Design",
    tools: [ "Figma"],
    orbitIcon: "layout",
  },
];

export const services = [
  {
    index: "01",
    title: "Interface Design",
    description:
      "Crafting intuitive and visually engaging user interfaces with a focus on clarity and usability.",
  },
  {
    index: "02",
    title: "Mobile & Web Design",
    description:
"Designing responsive, user-centered experiences across mobile and web platforms.",  },
  {
    index: "03",
    title: "Prototyping & Micro-interactions",
    description:
"Creating interactive prototypes and meaningful micro-interactions to improve usability and engagement."  },
];

export const stats = [
  { value: "1+", label: "Year in UI/UX design" },
  { value: "MCA", label: "Computer Science background" },
  { value: "End-to-End", label: "Mobile and web design focus" },
];

export const aboutCopy = [
"I’m a UI/UX Designer with 1+ year of experience creating user-centered digital experiences that solve real-world problems. I turn complex ideas into clear, intuitive, and effective design solutions.",
"I work across mobile apps and websites, collaborating with cross-functional teams to deliver user-friendly, accessible, and impactful digital products."];

export const skills = [
  { icon: "/Figma.svg", label: "Figma" },
  { icon: "/adobe-xd.svg", label: "Adobe XD" },
  { icon: "/photoshop.svg", label: "Photoshop" },
  { icon: "/lottiefiles.svg", label: "Lottie" },
  { icon: "/html.svg", label: "HTML" },
  { icon: "/css.svg", label: "CSS" },
];

export const processSteps = [
  {
    num: "01",
    title: "Research",
    desc: "The process begins with understanding user needs, business goals, and the target audience through research and competitor analysis.",
  },
  {
    num: "02",
    title: "Define",
    desc: "Research insights are organized into clear problem statements, user personas, and user journeys to guide the design direction.",
  },
  {
    num: "03",
    title: "Wireframe",
    desc: "Low-fidelity wireframes are created to map user flows and validate structure and usability early.",
  },
  {
    num: "04",
    title: "Design",
    desc: "High-fidelity interfaces are designed in Figma, focusing on clarity, consistency, and modern UI.",
  },
  {
    num: "05",
    title: "Prototype",
    desc: "Interactive prototypes are developed to simulate real user interactions and validate flows.",
  },
  {
    num: "06",
    title: "Test & Iterate",
    desc: "Feedback is gathered through usability testing, and designs are continuously refined to improve the overall user experience.",
  },
];
export const contactInfo = [
  { label: "Email", value: "satishchikkala97@gmail.com", href: "mailto:satishchikkala97@gmail.com" },
  { label: "Phone", value: "+91 8096949567", href: "tel:+918096949567" },
  { label: "Location", value: "Amalapuram, India" },
  { label: "LinkedIn", value: "linkedin.com/in/murthy-chikkala", href: "https://www.linkedin.com/in/murthy-chikkala/" },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/murthy-chikkala/" },
  { label: "Behance", href: "https://www.behance.net/satyanachikkala" },
  { label: "Dribbble", href: "https://dribbble.com/satish-chikkala" },
  { label: "GitHub", href: "https://github.com/satishchikkala97-oss" },
];

export const toolIcons: Record<ToolName, string> = {
  Figma: "/Figma.svg",
  "Adobe XD": "/adobe-xd.svg",
  Photoshop: "/photoshop.svg",
  Lottie: "/lottiefiles.svg",
  HTML: "/html.svg",
};

export const toolStack = [
  {
    label: "Figma",
    caption: "Design Systems",
    src: "/Figma.svg",
    position: { left: "2%", top: "12%" },
  },
  {
    label: "HTML",
    caption: "Structure",
    src: "/html.svg",
    position: { left: "60%", top: "8%" },
  },
  {
    label: "CSS",
    caption: "Styling",
    src: "/css.svg",
    position: { left: "70%", top: "42%" },
  },
  {
    label: "Adobe XD",
    caption: "Design Tool",
    src: "/adobe-xd.svg",
    position: { left: "6%", top: "58%" },
  },
  {
    label: "Photoshop",
    caption: "Visuals",
    src: "/photoshop.svg",
    position: { left: "50%", top: "78%" },
  },
  {
    label: "Lottie",
    caption: "Motion",
    src: "/lottiefiles.svg",
    position: { left: "14%", top: "84%" },
  },
];
