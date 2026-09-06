import { useRef, useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "a" | "p";
  href?: string;
  autoPlay?: boolean;
  autoPlayDelay?: number;
}

const AnimatedText = ({ text, className = "", as: Tag = "span", href, autoPlay = false, autoPlayDelay = 0 }: AnimatedTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const letters = text.split("");

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setTimeout(() => {
      setIsAutoPlaying(true);
      // Reset after animation completes
      const resetTimer = setTimeout(() => {
        setIsAutoPlaying(false);
      }, 350 + letters.length * 20 + 400);
      return () => clearTimeout(resetTimer);
    }, autoPlayDelay);
    return () => clearTimeout(timer);
  }, [autoPlay, autoPlayDelay, letters.length]);

  const content = (
    <>
      <span
        ref={containerRef}
        aria-hidden="true"
        className={`group inline-flex flex-nowrap whitespace-nowrap cursor-pointer ${isAutoPlaying ? "auto-animate" : ""}`}
      >
        {letters.map((letter, i) => (
          <span
            key={i}
            className="relative inline-block overflow-hidden"
            style={{ lineHeight: 1.1 }}
          >
            {/* Hidden spacer */}
            <span className="invisible">{letter === " " ? "\u00A0" : letter}</span>
            {/* Top (default visible) */}
            <span
              className={`absolute inset-0 transition-transform ease-out group-hover:-translate-y-full ${isAutoPlaying ? "-translate-y-full" : ""}`}
              style={{ 
                transitionDuration: "0.35s",
                transitionDelay: `${i * 0.02}s` 
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
            {/* Bottom (slides up on hover) */}
            <span
              className={`absolute inset-0 translate-y-full text-primary transition-transform ease-out group-hover:translate-y-0 ${isAutoPlaying ? "!translate-y-0" : ""}`}
              style={{ 
                transitionDuration: "0.35s",
                transitionDelay: `${i * 0.02}s` 
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          </span>
        ))}
      </span>
      <span className="sr-only">{text}</span>
    </>
  );

  if (Tag === "a" && href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} aria-label={text}>
        {content}
      </a>
    );
  }

  return <Tag className={className}>{content}</Tag>;
};

export default AnimatedText;
