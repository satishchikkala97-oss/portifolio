import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Linkedin, Send, Github, Dribbble } from "lucide-react";

const Contact = () => {
  const socialIcons = {
    linkedin: Linkedin,
    behance: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4.7625 8.38967C4.73624 8.38967 4.71023 8.39484 4.68596 8.4049C4.6617 8.41495 4.63965 8.42968 4.62108 8.44825C4.60251 8.46682 4.58778 8.48887 4.57772 8.51313C4.56767 8.5374 4.5625 8.56341 4.5625 8.58967V10.9647C4.5625 11.0747 4.6525 11.1647 4.7625 11.1647H7.5165C7.88462 11.1647 8.23766 11.0184 8.49796 10.7581C8.75826 10.4978 8.9045 10.1448 8.9045 9.77667C8.9045 9.40855 8.75826 9.05551 8.49796 8.79521C8.23766 8.53491 7.88462 8.38867 7.5165 8.38867L4.7625 8.38967ZM4.7625 12.9447C4.73624 12.9447 4.71023 12.9498 4.68596 12.9599C4.6617 12.9699 4.63965 12.9847 4.62108 13.0033C4.60251 13.0218 4.58778 13.0439 4.57772 13.0681C4.56767 13.0924 4.5625 13.1184 4.5625 13.1447V16.0187C4.5625 16.1287 4.6525 16.2187 4.7625 16.2187H7.6945C8.12866 16.2187 8.54504 16.0462 8.85203 15.7392C9.15903 15.4322 9.3315 15.0158 9.3315 14.5817C9.3315 14.1475 9.15903 13.7311 8.85203 13.4241C8.54504 13.1171 8.12866 12.9447 7.6945 12.9447H4.7625ZM16.1375 13.0867C16.1143 13.0862 16.0922 13.0767 16.0758 13.0603C16.0594 13.0439 16.05 13.0219 16.0495 12.9987C16.0495 12.0247 16.8385 11.2357 17.8115 11.2357H18.2015C19.1745 11.2357 19.9635 12.0257 19.9635 12.9987C19.9635 13.0467 19.9235 13.0867 19.8755 13.0867H16.1375Z" fill="currentColor"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M12.57 11.9933C12.5064 11.9127 12.4396 11.8347 12.37 11.7593C12.803 11.0763 13.023 10.2793 13.002 9.47226C13.0207 8.77715 12.8815 8.08685 12.595 7.45326C12.3153 6.82375 11.8698 6.28211 11.306 5.88626L11.295 5.87826C10.7624 5.51335 10.159 5.26462 9.524 5.14826C8.9139 5.02201 8.29199 4.96167 7.669 4.96826H2C1.60218 4.96826 1.22064 5.1263 0.93934 5.4076C0.658035 5.68891 0.5 6.07044 0.5 6.46826V18.4253C0.5 18.8231 0.658035 19.2046 0.93934 19.4859C1.22064 19.7672 1.60218 19.9253 2 19.9253H7.8C8.458 19.9253 9.112 19.8423 9.748 19.6773C10.4017 19.5089 11.021 19.2276 11.578 18.8463L11.585 18.8413C12.1405 18.4556 12.6019 17.9498 12.935 17.3613C13.1545 17.7831 13.426 18.1758 13.743 18.5303C14.281 19.1103 14.943 19.5603 15.679 19.8523L15.697 19.8593C16.453 20.1452 17.2557 20.2876 18.064 20.2793C19.227 20.3086 20.3738 20.002 21.367 19.3963C21.3957 19.3783 21.424 19.3593 21.452 19.3393C22.4981 18.5977 23.2522 17.5139 23.584 16.2753C23.6488 16.0332 23.6519 15.7788 23.593 15.5353C23.705 15.3423 23.776 15.1223 23.793 14.8863C23.8497 14.0939 23.7819 13.2976 23.592 12.5263L23.59 12.5203C23.3965 11.7466 23.0578 11.0166 22.592 10.3693L22.577 10.3473C22.0761 9.67853 21.4294 9.13272 20.686 8.75126C19.8864 8.35988 19.0062 8.16124 18.116 8.17126C17.3025 8.16882 16.4966 8.32649 15.744 8.63526L15.734 8.63926C15.0269 8.93698 14.3858 9.37205 13.848 9.91926L13.836 9.93026C13.297 10.4928 12.8791 11.1599 12.608 11.8903L12.607 11.8923L12.57 11.9933ZM9.828 11.9233C10.5019 12.0857 11.0935 12.4881 11.492 13.0553C11.52 13.0979 11.547 13.1413 11.573 13.1853C11.89 13.7193 12.051 14.3333 12.034 14.9553C12.0505 15.4999 11.9295 16.0398 11.682 16.5253C11.459 16.9583 11.132 17.3303 10.732 17.6083C10.3178 17.8918 9.8572 18.1006 9.371 18.2253C8.85816 18.3577 8.33066 18.4249 7.801 18.4253H2V6.46826H7.678C8.20198 6.46201 8.72508 6.51298 9.238 6.62026C9.671 6.69726 10.083 6.86626 10.446 7.11526C10.788 7.35526 11.058 7.68326 11.226 8.06526C11.426 8.50626 11.52 8.98826 11.501 9.47226C11.5213 10.0029 11.3785 10.5271 11.092 10.9743C10.78 11.3943 10.312 11.7223 9.828 11.9233ZM16.002 14.9943C15.9982 14.923 15.9982 14.8515 16.002 14.7803H22.297C22.3441 14.144 22.2894 13.5043 22.135 12.8853C21.9878 12.2954 21.7299 11.7389 21.375 11.2453C21.017 10.7661 20.5551 10.3743 20.024 10.0993C19.4323 9.80973 18.7807 9.66346 18.122 9.67226C17.5028 9.66883 16.8891 9.78777 16.316 10.0223C15.791 10.2433 15.316 10.5653 14.918 10.9703C14.5215 11.3839 14.2139 11.8743 14.014 12.4113C13.801 12.9907 13.6949 13.604 13.701 14.2213C13.691 14.8473 13.794 15.4703 14.005 16.0603C14.185 16.5943 14.469 17.0873 14.842 17.5103C15.228 17.9253 15.702 18.2493 16.23 18.4573C16.8192 18.6802 17.4451 18.7898 18.075 18.7803C18.9584 18.8074 19.8306 18.5767 20.585 18.1163C21.3453 17.5772 21.8936 16.7895 22.135 15.8893H20.033C19.9204 16.1871 19.7136 16.4399 19.444 16.6093C19.078 16.8507 18.6463 16.9733 18.208 16.9603C17.9178 16.9902 17.6245 16.9602 17.3463 16.8722C17.0682 16.7841 16.8111 16.6398 16.591 16.4483C16.2338 16.0458 16.0255 15.5329 16.001 14.9953" fill="currentColor"/>
        <path d="M20.45 6.396C20.4489 6.29061 20.4063 6.18989 20.3314 6.11574C20.2565 6.04159 20.1554 5.99999 20.05 6H16.025C15.9189 6 15.8172 6.04214 15.7422 6.11716C15.6671 6.19217 15.625 6.29391 15.625 6.4V7.47C15.625 7.52253 15.6353 7.57454 15.6554 7.62307C15.6756 7.6716 15.705 7.7157 15.7422 7.75284C15.7793 7.78999 15.8234 7.81945 15.8719 7.83955C15.9205 7.85965 15.9725 7.87 16.025 7.87H20.061C20.1139 7.87 20.1662 7.85953 20.215 7.83917C20.2638 7.81882 20.3081 7.789 20.3453 7.75143C20.3825 7.71386 20.4118 7.6693 20.4317 7.6203C20.4516 7.57131 20.4615 7.51886 20.461 7.466L20.45 6.396Z" fill="currentColor"/>
      </svg>
    ),
    dribbble: Dribbble,
    github: Github,
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "satishchikkala97@gmail.com",
      href: "mailto:satishchikkala97@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8096949567",
      href: "tel:+918096949567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Amalapuram, India",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/satyanarayana",
      href: "https://linkedin.com",
    },
  ];

  return (
    <section id="contact" className="section-padding dark-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#FFF98A] font-semibold mb-2 text-sm tracking-wider uppercase"></p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Talk for </h2>
             <h2 className="text-4xl md:text-5xl font-bold mb-4">Something Special</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2  gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8 order-2"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Contact Information</h3>
              <p className="text-white/70 leading-relaxed">
              
              </p>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#FFF98A]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFF98A]/20 transition-colors">
                    <item.icon className="w-5 h-5 text-[#FFF98A]" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-white hover:text-[#FFF98A] transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-white/50 text-sm mb-4">Follow me on</p>
              <div className="flex gap-3">
                {["linkedin", "behance", "dribbble", "github"].map((social) => {
                  const IconComponent = socialIcons[social];
                  const links = {
                    linkedin: "https://linkedin.com/in/satish-chikkala",
                    behance: "https://behance.net",
                    dribbble: "https://dribbble.com",
                    github: "https://github.com",
                  };
                  return (
                    <a
                      key={social}
                      href={links[social]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 bg-white/5 hover:bg-[#FFF98A]/20 rounded-xl flex items-center justify-center transition-colors group border border-white/10 hover:border-[#FFF98A]/30"
                    >
                      {typeof IconComponent === "function" ? (
                        <IconComponent className="w-5 h-5 text-white/60 group-hover:text-[#FFF98A]" />
                      ) : (
                        <IconComponent />
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 order-1"
          >
            <h3 className="text-xl font-bold mb-6 text-white">Send a Message</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#FFF98A]/50"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#FFF98A]/50"
                />
              </div>
              <Input
                placeholder="Subject"
                className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#FFF98A]/50"
              />
              <Textarea
                placeholder="Your Message"
                className="min-h-[140px] bg-white/5 border-white/10 text-white placeholder:text-white/40 resize-none focus:border-[#FFF98A]/50"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#FFF98A] hover:bg-[#FFF98A]/90 text-primary font-semibold"
              >
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-white/50 text-sm">
            © 2026 Satish C. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
