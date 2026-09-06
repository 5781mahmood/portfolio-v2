import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedText from "./AnimatedText";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/30" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-16 md:h-20">
          <a href="#hero" className="font-display font-extrabold text-lg tracking-tight">
            MS<span className="text-primary">.</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-display font-semibold text-sm tracking-wider uppercase text-foreground/70 hover:text-primary transition-colors duration-300"
              >
                <AnimatedText text={link.label} />
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-[2px] bg-foreground transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
            <span className={`w-6 h-[2px] bg-foreground transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-[2px] bg-foreground transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display font-extrabold text-3xl tracking-tight text-foreground hover:text-primary transition-colors duration-300"
              >
                <AnimatedText text={link.label} />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
