import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";

const TITLE = "UX Designer Resume Guide | Mahmood Sultan";
const DESCRIPTION =
  "A practical UX designer resume guide: ATS optimization, keyword strategy from real job descriptions, portfolio pairing, and a free downloadable template.";
const URL = "https://mahmoodsultan.lovable.app/blog/ux-designer-resume-guide";
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
    ld.id = "resume-guide-jsonld";
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "UX Designer Resume Guide",
      description: DESCRIPTION,
      author: { "@type": "Person", name: "Mahmood Sultan" },
      mainEntityOfPage: URL,
      url: URL,
      datePublished: "2026-06-20",
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
      document.getElementById("resume-guide-jsonld")?.remove();
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

const UxDesignerResumeGuide = () => {
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
            Guide · UX Careers
          </p>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight leading-[1.05] mb-6">
            The UX Designer Resume Guide
          </h1>
          <p className="text-muted-foreground font-body text-lg md:text-xl leading-relaxed">
            How to write a UX designer resume that gets past ATS filters, mirrors the keywords
            recruiters actually search for, and pairs cleanly with a strong UX design portfolio.
          </p>
        </motion.header>

        <a
          href="/ux-designer-resume-template.txt"
          download
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-primary-foreground font-display font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity mb-16"
        >
          <Download className="w-4 h-4" />
          Download the free resume template
        </a>

        <Section eyebrow="01 — Start Here" title="What recruiters actually look for">
          <p>
            A UX designer resume has roughly six seconds to clear a recruiter's first pass and an
            invisible ATS gate before that. The winning resumes are not the most beautifully
            designed — they are the most legible to both systems. Lead with outcomes
            (&ldquo;cut onboarding drop-off by 34%&rdquo;), not responsibilities (&ldquo;responsible
            for onboarding flow&rdquo;).
          </p>
          <p>
            Your portfolio is where craft is judged. Your resume's job is to earn the click that
            opens it.
          </p>
        </Section>

        <Section eyebrow="02 — ATS Optimization" title="Pass the applicant tracking system">
          <p>
            Most mid-size and enterprise companies route every application through an Applicant
            Tracking System. ATS software parses your file into plain text and matches it against
            the job description. A resume that looks gorgeous in Figma but renders as a wall of
            mojibake gets filtered out before a human ever sees it.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use a single-column layout. No tables, text boxes, columns, or icons inside text.</li>
            <li>Stick to standard section headings: Summary, Skills, Experience, Education.</li>
            <li>Submit as PDF unless the form asks for .docx. Avoid image-based PDFs.</li>
            <li>Embed standard fonts (Inter, Helvetica, Arial, Georgia). Skip custom display fonts.</li>
            <li>Spell out acronyms once: &ldquo;Information Architecture (IA)&rdquo;.</li>
          </ul>
        </Section>

        <Section eyebrow="03 — Keyword Strategy" title="Mine the job description, not your imagination">
          <p>
            Open three job postings for the role you want. Paste them into a single document and
            highlight every verb and noun that repeats. Those repeated terms — &ldquo;user
            research&rdquo;, &ldquo;design system&rdquo;, &ldquo;Figma&rdquo;, &ldquo;cross-functional&rdquo;,
            &ldquo;A/B testing&rdquo; — are your keyword set. They are also what the ATS is scoring.
          </p>
          <p>
            Weave them into your Summary, Skills, and Experience sections in the exact phrasing the
            posting uses. Don't keyword-stuff. Replace generic words (&ldquo;helped&rdquo;,
            &ldquo;worked on&rdquo;) with the specific verbs the role uses (&ldquo;led&rdquo;,
            &ldquo;facilitated&rdquo;, &ldquo;synthesized&rdquo;, &ldquo;shipped&rdquo;).
          </p>
        </Section>

        <Section eyebrow="04 — Structure" title="The one-page UX resume skeleton">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Header</strong> — name, role, city, email, LinkedIn, portfolio URL.</li>
            <li><strong>Summary</strong> — 2–3 sentences naming your years of experience, domain, and a headline outcome.</li>
            <li><strong>Core skills</strong> — a single line of comma-separated keywords matched to the job.</li>
            <li><strong>Experience</strong> — reverse chronological, 3–5 bullets per role, each starting with a verb and ending with a metric.</li>
            <li><strong>Education / certifications</strong> — degree, institution, year; NN/g or Google UX certifications if relevant.</li>
          </ul>
        </Section>

        <Section eyebrow="05 — Portfolio Pairing" title="Your resume is the trailer, your portfolio is the film">
          <p>
            A strong UX design portfolio does the persuasion your resume can't. Link directly to two
            or three case studies that mirror the role's domain — not your full archive. Each case
            study should answer four questions: what was the problem, what did you do, what changed
            because of you, and what would you do differently next time.
          </p>
          <p>
            On your resume, put the portfolio URL in the header and again as a clickable line under
            each role: &ldquo;Case study: portfolio.com/project-name&rdquo;. Recruiters skim; make
            the click obvious.
          </p>
        </Section>

        <Section eyebrow="06 — Common Mistakes" title="Things that quietly kill UX resumes">
          <ul className="list-disc pl-6 space-y-2">
            <li>Listing tools without outcomes (&ldquo;Figma, Sketch, Miro&rdquo; — and?).</li>
            <li>Describing the team's work as your own. Use &ldquo;I&rdquo; bullets, not &ldquo;we&rdquo;.</li>
            <li>Skipping metrics. &ldquo;Improved usability&rdquo; without a number is invisible.</li>
            <li>Two pages for under 8 years of experience. Cut, then cut again.</li>
            <li>A portfolio link that 404s. Test it on incognito before every submission.</li>
          </ul>
        </Section>

        <Section eyebrow="07 — Template" title="A free downloadable starter">
          <p>
            The template below is plain-text, ATS-safe, and intentionally boring. Paste it into
            Google Docs or Word, fill in your details, then style lightly — keep it one column,
            one font family, and one accent colour.
          </p>
          <a
            href="/ux-designer-resume-template.txt"
            download
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary text-primary font-display font-semibold text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors mt-2"
          >
            <Download className="w-4 h-4" />
            Download the template (.txt)
          </a>
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

export default UxDesignerResumeGuide;
