import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: "Experience",
      description: "1+ Year in UI/UX Design",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.Tech in Computer Science",
    },
    {
      icon: Award,
      title: "Expertise",
      description: "Mobile & Web Design",
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="profilee.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FFF98A]/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-[#FFF98A]/30 rounded-xl -z-10" />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="text-[#22C55E] font-semibold mb-2 text-sm tracking-wider uppercase"></p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About Me
              </h2>
            </div>
            
            <div className="space-y-4 text-normal text-lg leading-relaxed">
              <p>
I’m a UI/UX Designer focused on building scalable, user-centered digital experiences that align user needs with business goals. I specialize in turning complex, ambiguous problems into clear, intuitive design solutions using strong design fundamentals and strategic thinking.</p>              <p>
I work across mobile apps, responsive websites, and web platforms, collaborating closely with product, engineering, and stakeholders to deliver end-to-end, accessible, and future-ready experiences that create meaningful user impact and long-term product value.</p>
            </div>

            {/* Highlights Grid */}
            {/* <div className="grid grid-cols-3 gap-4 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-2xl p-4 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FFF98A]/10 rounded-xl mb-3">
                    <item.icon className="w-6 h-6 text-[#22C55E]" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
