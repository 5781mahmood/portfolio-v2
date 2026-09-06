import { motion } from "framer-motion";
import ParallaxPhoto from "./ParallaxPhoto";
import AnimatedText from "./AnimatedText";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center section-padding overflow-hidden">
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-muted-foreground font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4"
          >
            UX/UI Design · Web Development · IT
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.95] mb-6"
          >
            <span className="block whitespace-nowrap">
              <AnimatedText text="Mahmood" autoPlay />
            </span>
            <span className="block whitespace-nowrap">
              <AnimatedText text="Sultan" autoPlay autoPlayDelay={400} />
            </span>
            <span className="sr-only"> — UX/UI Designer &amp; Web Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-muted-foreground font-body text-lg md:text-xl max-w-md mx-auto lg:mx-0 mb-8"
          >
            Building clean digital experiences and simple, functional products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground font-display font-semibold text-sm tracking-wider uppercase rounded-full hover:scale-105 transition-transform duration-300 glow-primary"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-foreground/20 text-foreground font-display font-semibold text-sm tracking-wider uppercase rounded-full hover:border-primary hover:text-primary transition-colors duration-300"
            >
              Contact
            </a>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <ParallaxPhoto />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
