import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experience = [
  { role: "Curriculum Developer & Junior Backend Developer", company: "My Code Club", period: "Jul 2026 – Present" },
  { role: "Operations & Customer Experience Lead", company: "Riipen Labs — IlluminEd Tutoring Inc.", period: "Aug 2026" },
  { role: "Web Developer & UX (CCT341 client project)", company: "Turtle Island Charity", period: "Jul – Aug 2026" },
  { role: "Internal Relations Executive", company: "UTMMSA", period: "Jul 2025 – Apr 2026" },
  { role: "Technology Mentor", company: "Cyber Seniors", period: "Jul 2022 – Present" },
  { role: "Manufacturing Operator", company: "Mondelēz International", period: "May – Aug 2024" },
  { role: "Coding Instructor", company: "Code Ninjas", period: "May – Aug 2023" },
  { role: "Coding Tutor", company: "My Code Club", period: "May – Aug 2022" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" className="section-padding border-b border-border">
      <div className="page-width" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            About
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/85">
            I'm a student at the University of Toronto Mississauga, double-majoring in
            Technology, Coding &amp; Society (TCS) and Culture, Communication, Information
            &amp; Technology (CCIT).
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            I'm passionate about building functional, well-designed digital experiences.
            From UX research and prototyping to coding full applications, I bridge the gap
            between design thinking and technical execution.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="mt-12"
        >
          <h3 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Experience
          </h3>
          <ul className="mt-4 divide-y divide-border border-y border-border">
            {experience.map((item) => (
              <li
                key={`${item.role}-${item.company}-${item.period}`}
                className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <div>
                  <p className="font-medium text-foreground">{item.role}</p>
                  <p className="text-sm text-muted-foreground">{item.company}</p>
                </div>
                <p className="shrink-0 text-sm text-muted-foreground">{item.period}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
