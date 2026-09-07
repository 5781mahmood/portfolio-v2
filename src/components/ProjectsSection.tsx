import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

type CaseStudy = {
  title: string;
  meta: string;
  description: string;
  href?: string;
};

type OtherProject = {
  title: string;
  meta: string;
  description: string;
};

const caseStudies: CaseStudy[] = [
  {
    title: "My Code Club",
    meta: "Curriculum Developer & Junior Backend Developer · Jul 2026–Present",
    description:
      "Backend and curriculum work on a live learning platform — architecture contributions, payments debugging, and security hardening.",
  },
  {
    title: "Campus Navigation System",
    meta: "4-person team UX project · Sep–Nov 2025",
    description:
      "Team project designing a wayfinding system for UTM — user interviews and research, wireframes in Figma, and physical prototypes built with 3D printing and laser cutting.",
    href: "/projects/campus-navigation",
  },
  {
    title: "Turtle Island Charity",
    meta: "CCT341 team project · Jul–Aug 2026",
    description:
      "Consulting engagement focused on the client Services page and gallery — iteration, collaboration, and delivery with the project team.",
  },
];

const otherProjects: OtherProject[] = [
  {
    title: "Calorie Tracking App",
    meta: "Python Desktop Application · 2024–25",
    description:
      "Full-featured desktop app for tracking meals, calories, and nutrition data with database storage, data visualization charts, and visual progress tracking.",
  },
  {
    title: "100-Level Platformer",
    meta: "Python Game Development · 2024",
    description:
      "Custom-designed platformer game with 100 unique levels, custom sprites and pixel art, player physics, collision detection, and level progression.",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="work" className="section-padding border-b border-border">
      <div className="page-width" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Selected work
          </h2>
          <p className="mt-3 max-w-xl text-base text-muted-foreground">
            Three case studies. Full write-ups for MCC and Turtle Island are next; Campus
            Navigation is live.
          </p>
        </motion.div>

        <ul className="mt-10 divide-y divide-border border-y border-border">
          {caseStudies.map((project, index) => {
            const body = (
              <>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.meta}</p>
                </div>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                {project.href ? (
                  <span className="mt-3 inline-block text-sm font-medium text-primary">
                    Read case study →
                  </span>
                ) : (
                  <span className="mt-3 inline-block text-sm text-muted-foreground">
                    Case study coming next
                  </span>
                )}
              </>
            );

            return (
              <motion.li
                key={project.title}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.06 * index }}
              >
                {project.href ? (
                  <Link to={project.href} className="block py-6 transition-opacity hover:opacity-80">
                    {body}
                  </Link>
                ) : (
                  <div className="py-6">{body}</div>
                )}
              </motion.li>
            );
          })}
        </ul>

        <div className="mt-14">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">Other projects</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Shorter builds. CCT416 will be added once its description is ready.
          </p>
          <ul className="mt-6 space-y-6">
            {otherProjects.map((project) => (
              <li key={project.title}>
                <p className="font-medium text-foreground">{project.title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{project.meta}</p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
