import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const TITLE = "Build a UX Portfolio With No Experience | Mahmood Sultan";
const DESCRIPTION =
  "A practical guide to building a UX design portfolio with no experience — use conceptual projects, volunteer work, and process docs to land your first role.";
const URL = "https://mahmoodsultan.lovable.app/blog/ux-portfolio-no-experience";
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
    ld.id = "ux-portfolio-no-experience-jsonld";
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "How to Build a UX Design Portfolio With No Experience",
      description: DESCRIPTION,
      author: { "@type": "Person", name: "Mahmood Sultan" },
      mainEntityOfPage: URL,
      url: URL,
      datePublished: "2026-07-06",
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
      document.getElementById("ux-portfolio-no-experience-jsonld")?.remove();
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

const UxPortfolioNoExperienceGuide = () => {
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
            Guide · UX Design Portfolio
          </p>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight leading-[1.05] mb-6">
            How to Build a UX Design Portfolio With No Experience
          </h1>
          <p className="text-muted-foreground font-body text-lg md:text-xl leading-relaxed">
            You don't need a paid job to build a portfolio hiring managers take seriously. Use
            conceptual projects, volunteer work, and clear process documentation to prove how you
            think.
          </p>
        </motion.header>

        <Section eyebrow="01 — Mindset" title="Hiring managers hire for process, not polish">
          <p>
            The most common myth for entry-level designers is that a portfolio needs shipped, paid
            work to count. It doesn't. Reviewers spend most of their time looking for evidence that
            you can frame a problem, run research, and defend design decisions. A well-documented
            conceptual project beats a beautiful screen with no story behind it.
          </p>
          <p>
            Aim for two to four case studies. Depth wins over volume — one strong end-to-end story
            is worth more than six shallow visual mockups.
          </p>
        </Section>

        <Section eyebrow="02 — Project Sources" title="Where to find real problems to solve">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Volunteer work:</strong> nonprofits, student clubs, and local businesses almost
              always have an outdated site or clunky sign-up flow. Offer to redesign it in exchange
              for a testimonial.
            </li>
            <li>
              <strong>Redesign an existing product:</strong> pick a real app you use, identify a
              genuine usability problem, and treat it like a client brief.
            </li>
            <li>
              <strong>Conceptual briefs:</strong> sites like Sharpen, Briefz, and UX Tools publish
              prompts you can treat as mini clients.
            </li>
            <li>
              <strong>Coursework and hackathons:</strong> university projects count — as long as you
              write them up with the same rigor as a client engagement.
            </li>
          </ul>
        </Section>

        <Section eyebrow="03 — Case Study Structure" title="Translate any project into a case study">
          <p>
            Every case study — conceptual or paid — should walk the reader through the same skeleton.
            This is what recruiters skim for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Context:</strong> who the user is, what problem exists, why it matters.</li>
            <li><strong>Discovery:</strong> interviews, surveys, competitor scans, secondary research.</li>
            <li><strong>Definition:</strong> a clear problem statement and success criteria.</li>
            <li><strong>Wireframing:</strong> sketches and low-fi flows, with the trade-offs you weighed.</li>
            <li><strong>Testing:</strong> what you learned from users and what you changed.</li>
            <li><strong>Outcome:</strong> the final design plus honest reflection on what you'd do next.</li>
          </ul>
          <p>
            Being transparent that a project is conceptual is fine. What matters is that the process
            is real — real users interviewed, real prototypes tested, real iterations documented.
          </p>
        </Section>

        <Section eyebrow="04 — Documenting Process" title="Show the messy middle, not just the final screens">
          <p>
            Hiring managers routinely say the same thing: they want to see how you got from problem
            to solution. That means the "messy middle" — sticky notes, discarded sketches, competitor
            teardown boards, affinity diagrams — is often more valuable than a polished hero image.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Photograph paper sketches before you throw them away.</li>
            <li>Export mid-fi Figma frames alongside the final UI.</li>
            <li>Capture user quotes verbatim from interview notes.</li>
            <li>Explain at least one decision you reversed after testing.</li>
          </ul>
        </Section>

        <Section eyebrow="05 — Visual Presentation" title="Make it easy to skim in 60 seconds">
          <p>
            Recruiters spend roughly a minute per portfolio on their first pass. Design each case
            study so the headline story is legible in that minute — with room to go deeper for anyone
            who scrolls further.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Start with a one-sentence summary of the problem and outcome.</li>
            <li>Use section headers that describe the stage (Research, Ideation, Testing).</li>
            <li>Break up long text with annotated screenshots.</li>
            <li>Keep the visual style clean — the portfolio is not the case study.</li>
          </ul>
        </Section>

        <Section eyebrow="06 — Where to Host It" title="Choose a platform that lets your work breathe">
          <p>
            You don't need a custom-coded site to be taken seriously. What matters is that your work
            loads fast, reads cleanly on mobile, and is easy to update. Common choices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Notion or Framer:</strong> quickest to publish, great for long-form case studies.</li>
            <li><strong>Webflow or Squarespace:</strong> more visual control without touching code.</li>
            <li><strong>Custom site:</strong> only if the craft of building it adds to your story.</li>
          </ul>
          <p>
            Whatever you pick, put a short "About" section up top so a reviewer knows in one line who
            you are, where you're based, and what kind of role you're looking for.
          </p>
        </Section>

        <Section eyebrow="07 — Common Mistakes" title="What to avoid on your first portfolio">
          <ul className="list-disc pl-6 space-y-2">
            <li>Hiding that a project is conceptual — reviewers respect honesty.</li>
            <li>Leading with hero screens and burying the process.</li>
            <li>Using stock jargon like "user-centric" without evidence.</li>
            <li>Including every school project instead of curating your best two to four.</li>
            <li>Forgetting a clear call-to-action — email, LinkedIn, or a contact form.</li>
          </ul>
        </Section>

        <div className="pt-12 border-t border-border/50">
          <Link
            to="/blog/ux-designer-resume-guide"
            className="inline-flex items-center gap-2 text-sm font-display font-semibold uppercase tracking-wider text-primary hover:underline"
          >
            Next: the UX designer resume guide →
          </Link>
        </div>
      </article>
    </main>
  );
};

export default UxPortfolioNoExperienceGuide;
