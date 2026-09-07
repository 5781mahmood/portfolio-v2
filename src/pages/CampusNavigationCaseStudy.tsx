import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import projectCampus from "@/assets/project-campus.png";

const TITLE = "Campus Navigation UX Case Study | Mahmood Sultan";
const DESCRIPTION =
  "UX case study: a four-person team designing a wayfinding system for UTM — research, wireframes, 3D-printed prototyping, and a mobile prototype.";
const URL = "https://mahmoodsultan.com/projects/campus-navigation";
const OG_IMAGE = "https://mahmoodsultan.com/og-campus-navigation.png";

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
      description: head
        .querySelector('meta[name="description"]')
        ?.getAttribute("content"),
      canonical: head
        .querySelector('link[rel="canonical"]')
        ?.getAttribute("href"),
      ogTitle: head
        .querySelector('meta[property="og:title"]')
        ?.getAttribute("content"),
      ogDescription: head
        .querySelector('meta[property="og:description"]')
        ?.getAttribute("content"),
      ogUrl: head
        .querySelector('meta[property="og:url"]')
        ?.getAttribute("content"),
    };

    const prevOgType = head
      .querySelector('meta[property="og:type"]')
      ?.getAttribute("content");
    const prevOgImage = head
      .querySelector('meta[property="og:image"]')
      ?.getAttribute("content");
    const prevTwImage = head
      .querySelector('meta[name="twitter:image"]')
      ?.getAttribute("content");

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
    ld.id = "case-study-jsonld";
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Campus Navigation UX Case Study",
      description: DESCRIPTION,
      author: { "@type": "Person", name: "Mahmood Sultan" },
      mainEntityOfPage: URL,
      url: URL,
      datePublished: "2025-04-01",
    });
    head.appendChild(ld);

    return () => {
      if (prev.title) document.title = prev.title;
      if (prev.description)
        head
          .querySelector('meta[name="description"]')
          ?.setAttribute("content", prev.description);
      if (prev.canonical)
        head
          .querySelector('link[rel="canonical"]')
          ?.setAttribute("href", prev.canonical);
      if (prev.ogTitle)
        head
          .querySelector('meta[property="og:title"]')
          ?.setAttribute("content", prev.ogTitle);
      if (prev.ogDescription)
        head
          .querySelector('meta[property="og:description"]')
          ?.setAttribute("content", prev.ogDescription);
      if (prev.ogUrl)
        head
          .querySelector('meta[property="og:url"]')
          ?.setAttribute("content", prev.ogUrl);
      if (prevOgType)
        head
          .querySelector('meta[property="og:type"]')
          ?.setAttribute("content", prevOgType);
      if (prevOgImage)
        head
          .querySelector('meta[property="og:image"]')
          ?.setAttribute("content", prevOgImage);
      if (prevTwImage)
        head
          .querySelector('meta[name="twitter:image"]')
          ?.setAttribute("content", prevTwImage);
      document.getElementById("case-study-jsonld")?.remove();
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
    <p className="text-primary text-xs font-body tracking-[0.3em] uppercase mb-3">
      {eyebrow}
    </p>
    <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-6">
      {title}
    </h2>
    <div className="space-y-4 text-muted-foreground font-body text-lg leading-relaxed">
      {children}
    </div>
  </section>
);

const CampusNavigationCaseStudy = () => {
  useDocumentMeta();

  return (
    <main className="min-h-screen bg-background">
      <article className="max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-xs font-body tracking-[0.3em] uppercase mb-4">
            UX Case Study · 2025
          </p>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight leading-[1.05] mb-6">
            Campus Navigation: A UX Case Study
          </h1>
          <p className="text-muted-foreground font-body text-lg md:text-xl leading-relaxed">
            A four-person team project designing a wayfinding system for the
            University of Toronto Mississauga — from field research to
            interactive mobile prototype.
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/50 bg-muted mb-16"
        >
          <img
            src={projectCampus}
            alt="Campus Navigation mobile prototype preview"
            className="w-full h-full object-contain p-4"
            width={1200}
            height={900}
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 pb-16 border-b border-border/50">
          {[
            { label: "Role", value: "UX Researcher & Designer" },
            { label: "Timeline", value: "Sep–Nov 2025" },
            { label: "Team", value: "4-person student team" },
            { label: "Tools", value: "Figma, 3D Print, Laser Cut" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-xs font-body tracking-[0.2em] uppercase text-primary mb-2">
                {item.label}
              </p>
              <p className="font-display font-semibold text-sm md:text-base">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <Section eyebrow="01 — The Problem" title="Finding your way on a sprawling campus">
          <p>
            New students, visitors, and even returning members of the University
            of Toronto Mississauga community routinely struggle to find their
            way between buildings, lecture halls, and shared spaces. Existing
            campus maps are static, dense with information, and rarely match the
            mental model of someone standing at a fork in the path with minutes
            to spare before class.
          </p>
          <p>
            Our team set out to redesign the wayfinding experience from the
            ground up — starting with how people actually move through campus,
            not the map artifacts they're handed at orientation.
          </p>
        </Section>

        <Section eyebrow="02 — User Research" title="Talking to people on the path">
          <p>
            We conducted semi-structured user interviews with first-year
            students, transfer students, and campus visitors, paired with
            on-site shadowing early in the term. A few insights shaped the rest
            of the project:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              People decide where to turn at landmarks, not at coordinates.
            </li>
            <li>
              Building codes (DH, IB, MN) mean nothing to a newcomer holding a
              printed schedule.
            </li>
            <li>
              Time-to-arrival matters more than distance, especially across the
              hilly north end of campus.
            </li>
          </ul>
        </Section>

        <Section eyebrow="03 — Wireframing" title="From paper sketches to Figma flows">
          <p>
            We started with low-fidelity paper sketches focused on one job:
            "Get me to my next class on time." Early prototypes prioritized a
            single primary action — a search bar that accepted either a course
            code or a building name — over the cluttered "everything map"
            pattern of the existing tool.
          </p>
          <p>
            Mid-fidelity Figma wireframes added turn-by-turn cards, landmark
            cues ("turn right at the Davis Building atrium"), and an estimated
            walking time that adjusted for elevation. We iterated through
            several rounds of internal critique before testing.
          </p>
        </Section>

        <Section eyebrow="04 — Physical Prototyping" title="3D printing the campus, literally">
          <p>
            To pressure-test our wayfinding model against the real campus, we
            laser-cut a topographic base of the UTM grounds and 3D-printed
            scaled building volumes. Participants in our usability sessions
            could trace a route with their finger while we observed which
            landmarks they actually used to orient themselves — and which ones
            the digital prototype was missing.
          </p>
        </Section>

        <Section eyebrow="05 — Final Prototype" title="A mobile-first wayfinding companion">
          <p>
            The final interactive Figma prototype focused on a small set of
            screens: a search-first home, a turn-by-turn route view anchored to
            landmarks rather than street names, and a "you've arrived"
            confirmation that doubled as a room-level guide for unfamiliar
            buildings.
          </p>
          <p>
            In post-test sessions, most participants completed a cold-start
            "find this lecture hall" task noticeably faster than with the
            existing campus map, and described the landmark-based directions as
            easier to trust when they were unsure of their location.
          </p>
        </Section>

        <Section eyebrow="06 — What I Learned" title="Reflections on the process">
          <p>
            Wayfinding is a problem about people, not maps. Every research
            session reinforced that confidence — knowing you're on the right
            path — matters more than raw accuracy. The biggest design wins
            came from removing information, not adding it.
          </p>
          <p>
            If I were to take this project further, I'd invest in indoor
            positioning for the largest buildings and explore a community-edited
            landmark layer so the system stays accurate as the campus evolves.
          </p>
        </Section>

        <div className="pt-12 border-t border-border/50">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-sm font-display font-semibold uppercase tracking-wider text-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            See more projects
          </Link>
        </div>
      </article>
    </main>
  );
};

export default CampusNavigationCaseStudy;
