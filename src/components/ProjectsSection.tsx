import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import AnimatedText from "./AnimatedText";
import projectCampus from "@/assets/project-campus.png";
import projectCalorie from "@/assets/project-calorie.png";
import projectPlatformer from "@/assets/project-platformer.png";
import projectLuka from "@/assets/project-luka.png";
import projectHorror from "@/assets/project-horror.jpg";

const projects = [
  {
    title: "Campus Navigation System",
    subtitle: "UX Research & Prototype",
    description: "Conducted user interviews and research to design a wayfinding system for UTM. Built wireframes in Figma, physical prototypes with 3D printing and laser cutting.",
    tech: ["Figma", "UX Research", "3D Printing", "Prototyping"],
    year: "2025",
    image: projectCampus,
    imageClass: "object-contain bg-muted p-4",
    href: "/projects/campus-navigation",
  },
  {
    title: "Calorie Tracking App",
    subtitle: "Python Desktop Application",
    description: "Full-featured desktop app for tracking meals, calories, and nutrition data with database storage, data visualization charts, and visual progress tracking.",
    tech: ["Python", "Tkinter", "SQLite", "Data Viz"],
    year: "2024–25",
    image: projectCalorie,
    imageClass: "object-contain bg-muted",
  },
  {
    title: "100-Level Platformer",
    subtitle: "Python Game Development",
    description: "Custom-designed platformer game with 100 unique levels, custom sprites and pixel art, player physics, collision detection, and level progression.",
    tech: ["Python", "Pygame", "Pixel Art", "Game Design"],
    year: "2024",
    image: projectPlatformer,
    imageClass: "object-contain bg-muted",
  },
  {
    title: "Luka Dončić Fan Site",
    subtitle: "Web Development Project",
    description: "8-page responsive website showcasing player statistics, achievements, and media with clean navigation and structured layouts.",
    tech: ["HTML", "CSS", "JavaScript", "Web Design"],
    year: "2023–24",
    image: projectLuka,
    imageClass: "object-contain bg-muted",
  },
  {
    title: "3D Horror Game",
    subtitle: "Unity Game Development",
    description: "A small immersive horror experience built in Unity with custom 3D assets created in Maya and Blender. Built environment models, lighting, sound design, movement systems, and interactive elements from scratch.",
    tech: ["Unity", "Maya", "Blender", "Game Design", "3D Modeling"],
    year: "2024–25",
    image: projectHorror,
    imageClass: "object-cover",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative bg-card rounded-2xl overflow-hidden border border-border/50"
    >
      {/* Project screenshot with overlay */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-110 ${project.imageClass}`}
        />
        <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-500" />
        <span className="absolute top-4 right-4 text-xs font-body text-foreground bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full z-10">
          {project.year}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <p className="text-primary text-xs font-body tracking-[0.2em] uppercase mb-2">{project.subtitle}</p>
        <h3 className="font-display font-bold text-xl md:text-2xl mb-3">
          <AnimatedText text={project.title} />
        </h3>
        <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="text-xs font-body text-foreground/60 bg-secondary px-3 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>
        {"href" in project && project.href ? (
          <Link
            to={project.href as string}
            className="inline-flex items-center gap-1 text-sm font-display font-semibold uppercase tracking-wider text-primary hover:underline"
          >
            Read case study →
          </Link>
        ) : null}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-xs font-body tracking-[0.3em] uppercase mb-3">Featured Work</p>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight">
            <AnimatedText text="Projects" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
