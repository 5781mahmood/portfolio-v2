import AnimatedText from "./AnimatedText";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 section-padding py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-muted-foreground font-body text-sm">
          © 2025 Mahmood Sultan. All rights reserved.
        </p>

        <div className="flex items-center gap-8">
          <AnimatedText
            text="LinkedIn"
            as="a"
            href="https://www.linkedin.com/in/mahmoodsultan5/"
            className="text-foreground/70 font-display font-semibold text-sm tracking-wider uppercase hover:text-primary transition-colors duration-300"
          />
          <AnimatedText
            text="Email"
            as="a"
            href="mailto:5781mahmood@gmail.com"
            className="text-foreground/70 font-display font-semibold text-sm tracking-wider uppercase hover:text-primary transition-colors duration-300"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
