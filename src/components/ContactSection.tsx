import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:5781mahmood@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
  };

  return (
    <section id="contact" className="section-padding">
      <div className="page-width" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Contact
          </h2>
          <p className="mt-3 max-w-md text-base text-muted-foreground">
            Have a question or want to work together? Drop me a message — or email{" "}
            <a
              href="mailto:5781mahmood@gmail.com"
              className="text-foreground underline underline-offset-2 hover:text-primary"
            >
              5781mahmood@gmail.com
            </a>
            .
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.06 }}
          onSubmit={handleSubmit}
          className="mt-10 max-w-md space-y-4"
        >
          <label className="block">
            <span className="mb-1.5 block text-sm text-muted-foreground">Name</span>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm text-muted-foreground">Email</span>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm text-muted-foreground">Message</span>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full resize-y border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </label>
          <button
            type="submit"
            className="bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Send message
          </button>
          <p className="text-xs text-muted-foreground">
            Opens your default email app with this message pre-filled.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
