import { motion } from "framer-motion";
// import { 
//   Figma, 
//   Palette, 
//   Layout, 
//   Smartphone, 
//   PenTool, 
//   Layers,
//   Monitor,
//   Lightbulb
// } from "lucide-react";
import FigmaIcon from "/Figma.svg?url";
import PenToolIcon from "/adobe-xd.svg?url";
import LayersIcon from "/photoshop.svg?url";
import SmartphoneIcon from "/lottiefiles.svg?url";
import MonitorIcon from "/html.svg?url";
import LightbulbIcon from "/css.svg?url";
import workImage from "/work.jpg?url";

const Skills = () => {
  const skills = [
    { icon: FigmaIcon, label: "Figma", description: "", level: 95 },
    { icon: PenToolIcon, label: "Adobe XD", description: "", level: 90 },
    
    { icon: LayersIcon, label: "Photoshop", description: "", level: 88 },
    { icon: SmartphoneIcon, label: "Lottie", description: "", level: 92 },
    { icon: MonitorIcon, label: "HTML", description: "", level: 90 },
    { icon: LightbulbIcon, label: "CSS", description: "", level: 85 },

  ];

  const softSkills = [
    "User Research",
    "Design Thinking",
    "Prototyping",
    "Usability Testing",
    "Information Architecture",
    "Interaction Design",
    "Visual Design",
    "Responsive Design",
  ];

  return (
    <section id="skills" className="section-padding dark-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#FFF98A] font-semibold mb-2 text-sm tracking-wider uppercase"></p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </motion.div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16 max-w-[900px] mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className=" max-w-[300px] group bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-[#FFF98A]/30"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#FFF98A]/10 rounded-xl mb-4 group-hover:bg-[#FFF98A]/20 transition-colors">
                <img src={skill.icon} alt={skill.label} className="w-7 h-7" style={{ filter: "brightness(0) invert(1)" }} />
              </div>
              <h3 className="text-lg font-semibold mb-1 text-white">{skill.label}</h3>
              {/* <p className="text-sm text-white/60 mb-3">{skill.description}</p> */}
              
              {/* Skill Bar */}
              {/* <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-[#FFF98A] to-[#22C55E] rounded-full"
                />
              </div> */}
            </motion.div>
          ))}
        </div>

        {/* Work Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
          className="text-center pt-4"
        >
          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Work Process</h3>
            <p className="text-white/60 text-lg">" From research to reality — my creative workflow "</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Image Collage */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="md:sticky  md:top-24 relative bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center"
            >
              <div className="grid grid-cols-2 gap-3 w-full">
                {/* {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white/10 rounded-xl aspect-video flex items-center justify-center border border-white/5">
                    <span className="text-white/30 text-sm">Project {i}</span>
                  </div>
                ))} */}
                <img src={workImage} alt="Work Process" className="w-full sticky h-auto rounded-xl col-span-2" />
              </div>
            </motion.div>
            
            {/* Right: Process Steps */}
            <div className="space-y-8">
              {[
                { num: 1, title: "Research", desc: "I begin by understanding the user's needs, project goals, and target audience. This stage involves collecting insights, studying competitors, and defining key problems to solve." },
                { num: 2, title: "Wireframe", desc: "Next, I create low-fidelity sketches and layouts to map out user flows. This helps visualize the structure and ensure every element supports usability and function." },
                { num: 3, title: "Design", desc: "Using Figma and design systems, I bring ideas to life with clean visuals, color palettes, and typography — focusing on clarity, consistency, and modern aesthetics." },
                { num: 4, title: "Feedback", desc: "I collaborate with teammates and mentors to review designs, refine user journeys, and improve visual hierarchy based on feedback and usability insights." },
                { num: 5, title: "Prototype", desc: "Finally, I create interactive prototypes to simulate real user experiences. These help test interactions, improve engagement, and prepare the design for development handoff." },
              ].map((step, index) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex flex-col gap-3 items-start">
                  <span className="text-3xl font-bold text-[#FFF98A] mb-1 block">{step.num}</span>
                  <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
 <p className="text-white/60 text-sm  text-left md:text-left">
  {step.desc}
</p>


</div>
                  
                </motion.div>
              ))}
            </div>
            </div>
          {/* <h3 className="text-xl font-semibold mt-10 mb-6 text-white/90">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {softSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/80 hover:bg-[#FFF98A]/10 hover:border-[#FFF98A]/30 hover:text-[#FFF98A] transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
