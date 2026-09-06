import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import AnimatedText from "./AnimatedText";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:5781mahmood@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-xs font-body tracking-[0.3em] uppercase mb-3">Get in Touch</p>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mb-4">
            <AnimatedText text="Let's Connect" />
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Have a question or want to work together? Drop me a message.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              aria-label="Your name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-6 py-4 bg-secondary border border-border/50 rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              aria-label="Your email address"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-6 py-4 bg-secondary border border-border/50 rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors duration-300"
            />
          </div>
          <textarea
            placeholder="Your Message"
            aria-label="Your message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-6 py-4 bg-secondary border border-border/50 rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors duration-300 resize-none"
          />
          <div className="text-center">
            <button
              type="submit"
              className="px-10 py-4 bg-primary text-primary-foreground font-display font-semibold text-sm tracking-wider uppercase rounded-full hover:scale-105 transition-transform duration-300 glow-primary"
            >
              Send Message
            </button>
            <p className="mt-3 text-xs font-body text-muted-foreground/70">
              Opens your default email app with this message pre-filled.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
