import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Brand from "/Brand.jpg?url";

const Portfolio = () => {
  const projects = [
    {
      title: "Aayu Mobile App",
      category: "",
      description: "A comprehensive healthcare mobile application designed to connect patients with doctors, manage appointments, and track health records seamlessly.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
      tags: ["Mobile App", "Healthcare", "UI/UX"],
      color: "from-emerald-500/20 to-teal-600/20",
    },
    {
      title: "Health Span Life Span",
      category: "",
      description: "A wellness platform focusing on longevity and healthy living, featuring personalized health insights and lifestyle recommendations.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      tags: ["Web Design", "Mobile", "Health Tech"],
      color: "from-blue-500/20 to-cyan-600/20",
    },
    {
      title: "Branding Logo Design",
      category: "",
      description: "Creative logo design and brand identity projects for various startups and businesses, establishing strong visual foundations.",
      image: Brand,
      tags: ["Branding", "Logo", "Identity"],
      color: "from-purple-500/20 to-pink-600/20",
    },
     {
      title: "Health Span Life Span",
      category: "",
      description: "A wellness platform focusing on longevity and healthy living, featuring personalized health insights and lifestyle recommendations.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      tags: ["Web Design", "Mobile", "Health Tech"],
      color: "from-blue-500/20 to-cyan-600/20",
    },
  ];

  return (
    <section id="works" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#22C55E] font-semibold mb-2 text-sm tracking-wider uppercase"></p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects showcasing my design expertise and problem-solving abilities
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden rounded-3xl ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className={`aspect-[4/3] bg-gradient-to-br ${project.color} p-4`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-4 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <p className="text-[#22C55E] font-medium text-sm">{project.category}</p>
                <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2 pb-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/5 border border-primary/10 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

               <Button
  variant="outline"
  className="mt-8 group/btn border-primary/20 hover:bg-primary hover:text-primary-foreground"
  onClick={() => {
    if (project.title === "Branding Logo Design") {
      window.open("https://www.behance.net/gallery/239601115/Logo-Case-Study", "_blank");
    }
  }}
>
  View Case Study
  <ArrowUpRight
    className="ml-2 w-4 h-4 transition-transform duration-500
               group-hover/btn:rotate-45"
  />
</Button>

              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-primary group/btn hover:bg-primary/90 text-primary-foreground px-8"
          >
            View All Projects
           <ArrowUpRight
    className="ml-2 w-5 h-5 transition-transform duration-500
               group-hover/btn:rotate-45"
  />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
