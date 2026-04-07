import type { FeaturedProject, ToolName } from "./types";

export const heroTape = [
  "Product Designer",
  "UI Systems",
  "Motion Direction",
  "Web Experiences",
  "Brand Storytelling",
  "GSAP Transitions",
  "3D Scroll Depth",
];

export const featuredProjects: FeaturedProject[] = [
  {
    year: "2025",
    title: "Aayu Mobile App",
    category: "Mobile App / Healthcare / UI UX",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&h=1200&fit=crop",
    summary:
      "A comprehensive healthcare mobile application designed to connect patients with doctors, manage appointments, and track health records seamlessly.",
    deliverables: ["Mobile App", "Healthcare", "UI/UX"],
    tools: ["Figma", "Adobe XD", "Lottie"],
    orbitIcon: "smartphone",
  },
  {
    year: "2024",
    title: "Health Span Life Span",
    category: "Web Design / Mobile / Health Tech",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&h=1200&fit=crop",
    summary:
      "A wellness platform focusing on longevity and healthy living, featuring personalized health insights and lifestyle recommendations.",
    deliverables: ["Web Design", "Mobile", "Health Tech"],
    tools: ["Figma", "HTML", "Photoshop"],
    orbitIcon: "heart",
  },
  {
    year: "2024",
    title: "Branding Logo Design",
    category: "Branding / Logo / Identity",
    image: "/Brand.jpg",
    summary:
      "Creative logo design and brand identity projects for various startups and businesses, establishing strong visual foundations.",
    deliverables: ["Branding", "Logo", "Identity"],
    href: "https://www.behance.net/gallery/239601115/Logo-Case-Study",
    tools: ["Photoshop", "Adobe XD", "Figma"],
    orbitIcon: "pen",
  },
  {
    year: "2024",
    title: "Health Span Life Span",
    category: "Web Design / Mobile / Health Tech",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&h=1200&fit=crop",
    summary:
      "A second concept direction exploring the same wellness space through responsive storytelling, product pacing, and conversion-friendly UX decisions.",
    deliverables: ["Responsive UX", "Visual Design", "Product Thinking"],
    tools: ["HTML", "Figma", "Lottie"],
    orbitIcon: "layout",
  },
];

export const services = [
  {
    index: "01",
    title: "Interface Design",
    description:
      "Clear, intentional product screens built around hierarchy, usability, and a strong visual rhythm.",
  },
  {
    index: "02",
    title: "Mobile & Web Design",
    description:
      "Responsive experiences for mobile apps, websites, and platforms designed to feel intuitive across every touchpoint.",
  },
  {
    index: "03",
    title: "Prototyping & Systems",
    description:
      "Interactive flows, scalable components, and thoughtful handoff that help ideas move smoothly into development.",
  },
];

export const stats = [
  { value: "1+", label: "Year in UI/UX design" },
  { value: "B.Tech", label: "Computer Science background" },
  { value: "End-to-End", label: "Mobile and web design focus" },
];

export const aboutCopy = [
  "I’m a UI/UX Designer focused on building scalable, user-centered digital experiences that align user needs with business goals. I specialize in turning complex, ambiguous problems into clear, intuitive design solutions using strong design fundamentals and strategic thinking.",
  "I work across mobile apps, responsive websites, and web platforms, collaborating closely with product, engineering, and stakeholders to deliver end-to-end, accessible, and future-ready experiences that create meaningful user impact and long-term product value.",
];

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
    desc: "I begin by understanding the user's needs, project goals, and target audience. This stage involves collecting insights, studying competitors, and defining key problems to solve.",
  },
  {
    num: "02",
    title: "Wireframe",
    desc: "Next, I create low-fidelity sketches and layouts to map out user flows. This helps visualize the structure and ensure every element supports usability and function.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Using Figma and design systems, I bring ideas to life with clean visuals, color palettes, and typography, focusing on clarity, consistency, and modern aesthetics.",
  },
  {
    num: "04",
    title: "Feedback",
    desc: "I collaborate with teammates and mentors to review designs, refine user journeys, and improve visual hierarchy based on feedback and usability insights.",
  },
  {
    num: "05",
    title: "Prototype",
    desc: "Finally, I create interactive prototypes to simulate real user experiences. These help test interactions, improve engagement, and prepare the design for development handoff.",
  },
];

export const contactInfo = [
  { label: "Email", value: "satishchikkala97@gmail.com", href: "mailto:satishchikkala97@gmail.com" },
  { label: "Phone", value: "+91 8096949567", href: "tel:+918096949567" },
  { label: "Location", value: "Amalapuram, India" },
  { label: "LinkedIn", value: "linkedin.com/in/satish-chikkala", href: "https://linkedin.com/in/satish-chikkala" },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/satish-chikkala" },
  { label: "Behance", href: "https://behance.net" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "GitHub", href: "https://github.com" },
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
    caption: "Systems",
    src: "/Figma.svg",
    position: { left: "2%", top: "12%" },
  },
  {
    label: "HTML",
    caption: "Structure",
    src: "/html.svg",
    position: { left: "72%", top: "8%" },
  },
  {
    label: "CSS",
    caption: "Styling",
    src: "/css.svg",
    position: { left: "78%", top: "42%" },
  },
  {
    label: "XD",
    caption: "Concepts",
    src: "/adobe-xd.svg",
    position: { left: "6%", top: "58%" },
  },
  {
    label: "Photoshop",
    caption: "Visuals",
    src: "/photoshop.svg",
    position: { left: "66%", top: "78%" },
  },
  {
    label: "Lottie",
    caption: "Motion",
    src: "/lottiefiles.svg",
    position: { left: "14%", top: "84%" },
  },
];
