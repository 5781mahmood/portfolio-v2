import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedText from "./AnimatedText";

const skills = [
  "Python", "HTML", "CSS", "JavaScript", "React", "Figma",
  "UX Research", "Prototyping", "GitHub", "Data Visualization",
  "Technical Support", "Problem Solving",
];

const experience = [
  {
    role: "Internal Relations Executive",
    company: "UTMMSA",
    period: "Jul 2025 – Apr 2026",
  },
  {
    role: "Technology Mentor",
    company: "Cyber Seniors",
    period: "Jul 2022 – Present",
  },
  {
    role: "Manufacturing Operator",
    company: "Mondelēz International",
    period: "May – Aug 2024",
  },
  {
    role: "Coding Instructor",
    company: "Code Ninjas",
    period: "May – Aug 2023",
  },
  {
    role: "Coding Tutor",
    company: "My Code Club",
    period: "May – Aug 2022",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-xs font-body tracking-[0.3em] uppercase mb-3">Background</p>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight">
            <AnimatedText text="About Me" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-foreground/80 font-body text-lg leading-relaxed mb-6">
              I'm a student at the <span className="text-foreground font-medium">University of Toronto Mississauga</span>, double-majoring in Technology, Coding & Society (TCS) and Culture, Communication, Information & Technology (CCIT).
            </p>
            <p className="text-muted-foreground font-body text-base leading-relaxed mb-8">
              I'm passionate about building functional, well-designed digital experiences. From UX research and prototyping to coding full applications, I bridge the gap between design thinking and technical execution.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.04 }}
                  className="text-sm font-body px-4 py-2 rounded-full bg-secondary text-foreground/70 border border-border/50 hover:border-primary/50 hover:text-primary transition-colors duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display font-bold text-lg mb-6 text-foreground/60 tracking-[0.2em] uppercase text-sm">Experience</h3>
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <div
                  key={i}
                  className="group flex items-start justify-between border-b border-border/30 pb-6 last:border-0"
                >
                  <div>
                    <p className="font-display font-semibold text-base group-hover:text-primary transition-colors duration-300">
                      {exp.role}
                    </p>
                    <p className="text-muted-foreground font-body text-sm">{exp.company}</p>
                  </div>
                  <span className="text-muted-foreground font-body text-xs whitespace-nowrap ml-4">{exp.period}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
