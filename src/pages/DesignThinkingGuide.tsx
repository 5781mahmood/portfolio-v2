import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const TITLE = "Design Thinking Guide for UX Designers | Mahmood Sultan";
const DESCRIPTION =
  "A practical design thinking guide covering the five stages — empathize, define, ideate, prototype, test — and how to apply them to real UX design projects.";
const URL = "https://mahmoodsultan.lovable.app/blog/design-thinking-guide";
const OG_IMAGE = "https://mahmoodsultan.lovable.app/favicon.png";

const useDocumentMeta = () => {
  useEffect(() => {
    const head = document.head;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        const [, name, key] = selector.match(/\[(name|property)="([^"]+)"\]/) || [];
        if (name && key) el.setAttribute(name, key);
        head.appendChild(el);
      }
      el.setAttribute(attr, value);
      return el;
    };

    const setLink = (rel: string, href: string) => {
      let el = head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        head.appendChild(el);
      }
      el.setAttribute("href", href);
      return el;
    };

    const prev = {
      title: document.title,
      description: head.querySelector('meta[name="description"]')?.getAttribute("content"),
      canonical: head.querySelector('link[rel="canonical"]')?.getAttribute("href"),
      ogTitle: head.querySelector('meta[property="og:title"]')?.getAttribute("content"),
      ogDescription: head.querySelector('meta[property="og:description"]')?.getAttribute("content"),
      ogUrl: head.querySelector('meta[property="og:url"]')?.getAttribute("content"),
      ogType: head.querySelector('meta[property="og:type"]')?.getAttribute("content"),
      ogImage: head.querySelector('meta[property="og:image"]')?.getAttribute("content"),
      twImage: head.querySelector('meta[name="twitter:image"]')?.getAttribute("content"),
    };

    document.title = TITLE;
    setMeta('meta[name="description"]', "content", DESCRIPTION);
    setLink("canonical", URL);
    setMeta('meta[property="og:title"]', "content", TITLE);
    setMeta('meta[property="og:description"]', "content", DESCRIPTION);
    setMeta('meta[property="og:url"]', "content", URL);
    setMeta('meta[property="og:type"]', "content", "article");
    setMeta('meta[property="og:image"]', "content", OG_IMAGE);
    setMeta('meta[name="twitter:title"]', "content", TITLE);
    setMeta('meta[name="twitter:description"]', "content", DESCRIPTION);
    setMeta('meta[name="twitter:image"]', "content", OG_IMAGE);

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = "design-thinking-guide-jsonld";
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Design Thinking Guide for UX Designers",
      description: DESCRIPTION,
      author: { "@type": "Person", name: "Mahmood Sultan" },
      mainEntityOfPage: URL,
      url: URL,
      datePublished: "2026-06-21",
    });
    head.appendChild(ld);

    return () => {
      if (prev.title) document.title = prev.title;
      if (prev.description)
        head.querySelector('meta[name="description"]')?.setAttribute("content", prev.description);
      if (prev.canonical)
        head.querySelector('link[rel="canonical"]')?.setAttribute("href", prev.canonical);
      if (prev.ogTitle)
        head.querySelector('meta[property="og:title"]')?.setAttribute("content", prev.ogTitle);
      if (prev.ogDescription)
        head.querySelector('meta[property="og:description"]')?.setAttribute("content", prev.ogDescription);
      if (prev.ogUrl)
        head.querySelector('meta[property="og:url"]')?.setAttribute("content", prev.ogUrl);
      if (prev.ogType)
        head.querySelector('meta[property="og:type"]')?.setAttribute("content", prev.ogType);
      if (prev.ogImage)
        head.querySelector('meta[property="og:image"]')?.setAttribute("content", prev.ogImage);
      if (prev.twImage)
        head.querySelector('meta[name="twitter:image"]')?.setAttribute("content", prev.twImage);
      document.getElementById("design-thinking-guide-jsonld")?.remove();
    };
  }, []);
};

const Section = ({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mb-16">
    <p className="text-primary text-xs font-body tracking-[0.3em] uppercase mb-3">{eyebrow}</p>
    <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-6">{title}</h2>
    <div className="space-y-4 text-muted-foreground font-body text-lg leading-relaxed">{children}</div>
  </section>
);

const DesignThinkingGuide = () => {
  useDocumentMeta();

  return (
    <main className="min-h-screen bg-background">
      <article className="max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-xs font-body tracking-[0.3em] uppercase mb-4">
            Guide · UX Methodology
          </p>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight leading-[1.05] mb-6">
            The Design Thinking Guide for UX Designers
          </h1>
          <p className="text-muted-foreground font-body text-lg md:text-xl leading-relaxed">
            Design thinking is a problem-solving framework that puts real people at the center of every
            decision. Learn the five stages and how to run them on your next UX project.
          </p>
        </motion.header>

        <Section eyebrow="01 — Empathize" title="Understand the people you are designing for">
          <p>
            Empathy is the foundation of design thinking. Before you sketch a screen or write a user
            story, spend time with the people who will actually use the product. Your goal is to
            understand their behaviors, frustrations, goals, and context — not to confirm what you
            already believe.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Run user interviews with open-ended questions.</li>
            <li>Observe users in their real environment when possible.</li>
            <li>Build an empathy map: what they say, think, do, and feel.</li>
          </ul>
          <p>
            In a UX project, this stage replaces assumptions with evidence. It gives you the quotes,
            stories, and pain points that make the rest of the process defensible.
          </p>
        </Section>

        <Section eyebrow="02 — Define" title="Turn insights into a clear problem statement">
          <p>
            After research, synthesis is what separates noise from direction. Cluster your findings
            into themes, then reframe the most promising theme as a problem statement written from the
            user's point of view.
          </p>
          <p>
            A good problem statement is specific enough to guide design and broad enough to allow
            multiple solutions. Use this format:
          </p>
          <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">
            [User type] needs [need] because [insight].
          </blockquote>
          <p>
            For example: <em>"New students need a faster way to find campus resources because current
            signage is inconsistent and increases first-week stress."</em>
          </p>
        </Section>

        <Section eyebrow="03 — Ideate" title="Generate many ideas before committing to one">
          <p>
            Ideation is about quantity first, quality second. The goal is to explore the solution space
            widely so you are not emotionally attached to the first idea that appears.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Crazy Eights:</strong> sketch eight concepts in eight minutes.</li>
            <li><strong>How Might We:</strong> turn problems into opportunity questions.</li>
            <li><strong>Mind mapping:</strong> branch out from the core problem to related features and flows.</li>
          </ul>
          <p>
            In UX, ideation usually produces a shortlist of user flows, feature ideas, or interaction
            patterns. Vote as a team, then pick a manageable set to prototype.
          </p>
        </Section>

        <Section eyebrow="04 — Prototype" title="Build just enough to learn">
          <p>
            A prototype is a cheap, testable version of your idea. It can be a paper sketch, a clickable
            wireframe, or a high-fidelity mockup — whatever gets the concept in front of users fastest.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Start low-fidelity to test structure and flow.</li>
            <li>Increase fidelity only when the concept is validated.</li>
            <li>Prototype the riskiest assumption, not the entire product.</li>
          </ul>
          <p>
            For students and junior designers, this is where Figma becomes your best friend. Keep
            components simple, reuse patterns, and remember that polish is not the point — learning is.
          </p>
        </Section>

        <Section eyebrow="05 — Test" title="Validate with real users, then iterate">
          <p>
            Testing turns prototypes into lessons. Watch users complete tasks, listen to where they
            hesitate, and ask neutral follow-up questions. Record sessions when possible so you can
            share evidence instead of opinions.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Test with 5 users to catch the majority of usability issues.</li>
            <li>Give users realistic scenarios, not step-by-step instructions.</li>
            <li>Prioritize fixes by impact and effort.</li>
          </ul>
          <p>
            Design thinking is rarely linear. Test results often send you back to empathy, definition,
            or ideation. Treat each loop as progress, not failure.
          </p>
        </Section>

        <Section eyebrow="06 — Apply" title="Running design thinking on a UX project">
          <p>
            Here is how the five stages map to a typical UX case study, like the campus navigation
            project on this portfolio:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Empathize:</strong> interview students who get lost on campus.</li>
            <li><strong>Define:</strong> frame the problem around wayfinding stress and missed appointments.</li>
            <li><strong>Ideate:</strong> brainstorm map views, AR markers, and real-time shuttle tracking.</li>
            <li><strong>Prototype:</strong> build clickable wireframes of the most promising flow.</li>
            <li><strong>Test:</strong> run usability sessions and refine the navigation hierarchy.</li>
          </ul>
          <p>
            Document each stage in your portfolio. Hiring managers want to see how you think, not just
            what you shipped.
          </p>
        </Section>

        <Section eyebrow="07 — Common Mistakes" title="What to avoid as a junior designer">
          <ul className="list-disc pl-6 space-y-2">
            <li>Skipping empathy and jumping straight to UI.</li>
            <li>Defining the problem around business goals instead of user needs.</li>
            <li>Stopping after the first good idea during ideation.</li>
            <li>Prototyping everything at high fidelity before testing.</li>
            <li>Treating test feedback as personal criticism rather than design data.</li>
          </ul>
        </Section>

        <div className="pt-12 border-t border-border/50">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-display font-semibold uppercase tracking-wider text-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </article>
    </main>
  );
};

export default DesignThinkingGuide;
