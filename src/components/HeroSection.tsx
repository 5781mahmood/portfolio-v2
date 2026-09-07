import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="section-padding relative flex min-h-[100svh] items-center border-b border-border pt-20"
    >
      <div className="page-width">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-sm text-muted-foreground"
        >
          University of Toronto Mississauga · CCIT &amp; TCS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
        >
          Mahmood Sultan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="mt-5 max-w-lg text-lg leading-relaxed text-foreground/80"
        >
          Third-year student building clean digital experiences and functional products.
          Open to tech internships and co-ops in software, UX, and IT.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
            className="inline-flex bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Selected work
          </a>
          <a
            href="#contact"
            className="inline-flex border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/40"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
