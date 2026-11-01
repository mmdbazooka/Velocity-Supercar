"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Maximize2,
  Plus,
} from "lucide-react";
import {
  SiteHeader,
  ScrollEffects,
  Footer,
  ContactModal,
  Dialog,
  Arrow,
} from "@/components/ui/shared";
import { finishes, specifications } from "@/data/vehicle";
function Tachometer() {
  return (
    <svg
      viewBox="0 0 360 225"
      role="img"
      aria-label="Concept power: 720 horsepower, 800 Newton metres of torque"
    >
      <path
        d="M42 190a145 145 0 0 1 276 0"
        fill="none"
        stroke="#ffffff10"
        strokeWidth="2"
      />
      <path
        d="M62 190a125 125 0 0 1 237-18"
        fill="none"
        stroke="#bf2830"
        strokeWidth="5"
        strokeDasharray="3 5"
      />
      {Array.from({ length: 9 }, (_, i) => {
        const angle = ((195 + i * 19) * Math.PI) / 180;
        const x = 180 + 151 * Math.cos(angle);
        const y = 225 + 151 * Math.sin(angle);
        return (
          <text
            key={i}
            x={x}
            y={y}
            fill={i > 6 ? "#e2444a" : "#777a80"}
            fontSize="9"
            textAnchor="middle"
          >
            {i + 1}
          </text>
        );
      })}
      <text
        x="180"
        y="128"
        textAnchor="middle"
        fill="#e8ebed"
        fontFamily="sans-serif"
        fontSize="56"
        fontWeight="300"
      >
        720
      </text>
      <text
        x="180"
        y="155"
        textAnchor="middle"
        fill="#8d9399"
        fontFamily="monospace"
        fontSize="9"
        letterSpacing="3"
      >
        HORSEPOWER
      </text>
      <path d="m180 178 93-33-86 46-7-13Z" fill="#e34449" />
      <circle cx="180" cy="185" r="7" fill="#111418" stroke="#a9afb7" />
      <text
        x="180"
        y="220"
        textAnchor="middle"
        fill="#7c8087"
        fontFamily="monospace"
        fontSize="7"
        letterSpacing="2"
      >
        ENGINEERED TO FEEL SOMETHING
      </text>
    </svg>
  );
}
export default function VelocityLanding() {
  const [inquiry, setInquiry] = useState(false);
  const [finish, setFinish] = useState(0);
  const [gallery, setGallery] = useState<number | null>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (gallery === null) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setGallery((n) => (n === null ? null : (n + 1) % finishes.length));
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setGallery((n) =>
          n === null ? null : (n + finishes.length - 1) % finishes.length,
        );
      }
    };
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, [gallery]);
  return (
    <>
      <ScrollEffects />
      <SiteHeader
        brand="velocity"
        links={[
          { label: "THE V9", href: "#showroom" },
          { label: "PERFORMANCE", href: "#performance" },
          { label: "DESIGN", href: "#design" },
          { label: "GALLERY", href: "#gallery" },
        ]}
        action="RESERVE A VIEWING"
        onAction={() => setInquiry(true)}
      />
      <main id="main">
        <section className="velocity-hero">
          <span className="v9-watermark" aria-hidden="true">
            V9
          </span>
          <div className="hero-car">
            <Image
              src="/assets/velocity/silver.webp"
              alt="The fictional VELOCITY V9 in liquid silver, its red tail light illuminating a black studio"
              fill
              priority
              sizes="(max-width:760px) 100vw, 80vw"
              className="parallax-image"
            />
          </div>
          <div className="velocity-hero-shade" />
          <div className="velocity-hero-copy">
            <p className="eyebrow">
              <span />
              ENGINEERED BEYOND ORDINARY
            </p>
            <h1>
              THE ART
              <br />
              OF <em>SPEED.</em>
            </h1>
            <p>
              Not just built to move.
              <br />
              Built to move you.
            </p>
            <div className="button-row">
              <a className="button primary" href="#showroom">
                EXPLORE THE V9
                <Arrow />
              </a>
              <a className="hero-detail-link" href="#design">
                A CLOSER LOOK
                <Plus size={15} />
              </a>
            </div>
          </div>
          <span className="car-side-label micro">
            V9 / GRAND TOURING CONCEPT / 2026
          </span>
          <div className="hero-specs">
            <div>
              <span>0–100 KM/H</span>
              <p>
                2.8<small>s</small>
              </p>
            </div>
            <div>
              <span>TOP SPEED</span>
              <p>
                340<small>km/h</small>
              </p>
            </div>
            <div>
              <span>MAXIMUM POWER</span>
              <p>
                720<small>hp</small>
              </p>
            </div>
            <span className="concept-specs-note">
              CONCEPT
              <br />
              SPECIFICATIONS
            </span>
          </div>
          <div className="velocity-hero-bottom">
            <a href="#performance">
              <ArrowDown size={15} />
              SCROLL TO FEEL THE DIFFERENCE
            </a>
            <span>
              01 <i />
              05
            </span>
            <span>A STUDY IN MOTION.</span>
          </div>
        </section>
        <section className="velocity-manifesto section">
          <p className="eyebrow">01 / THE INTENTION</p>
          <h2>
            Some things are measured
            <br />
            in numbers.
            <br />
            <span>Others, in heartbeats.</span>
          </h2>
          <div>
            <p>
              A grand tourer for those who still believe driving is an art.
              Every curve, every material, every fraction of a second —
              considered. The V9 is an exploration of what happens when nothing
              gets in the way of feeling.
            </p>
            <span className="micro">
              VELOCITY / AN INDEPENDENT AUTOMOTIVE CONCEPT
            </span>
          </div>
        </section>
        <section className="velocity-detail-band">
          <Image
            src="/assets/velocity/silver.webp"
            alt="Detail study of the V9 sculpted rear wheel, silver bodywork and carbon diffuser"
            fill
            sizes="100vw"
            className="parallax-image"
          />
          <span className="detail-band-caption">
            <i />
            01.1 / EVERY LINE HAS A PURPOSE.
          </span>
          <svg viewBox="0 0 1440 500" fill="none" aria-hidden="true">
            <path d="M850 315 1030 120h240" stroke="#d9e0e744" />
            <circle cx="850" cy="315" r="5" stroke="#df3b40" />
            <path d="M400 370 270 420H150" stroke="#d9e0e744" />
          </svg>
        </section>
        <section id="performance" className="section velocity-performance">
          <div className="performance-title">
            <p className="eyebrow">02 / PERFORMANCE</p>
            <h2>
              BUILT TO
              <br />
              DEFY <span>LIMITS.</span>
            </h2>
            <p>
              The balance between brute force and absolute control.
              <br />
              An engineering ambition. A visceral idea.
            </p>
          </div>
          <div className="performance-content">
            <div className="tach-stage">
              <Tachometer />
              <span className="micro">4.0 L / TWIN-TURBO V8 CONCEPT</span>
            </div>
            <div className="performance-metrics">
              {[
                {
                  num: "800",
                  unit: "Nm",
                  title: "UNRELENTING TORQUE",
                  desc: "Power that arrives with purpose.",
                },
                {
                  num: "1,420",
                  unit: "kg",
                  title: "NOTHING TO HOLD YOU BACK",
                  desc: "An ambition for a lighter kind of performance.",
                },
                {
                  num: "8",
                  unit: "SPEED",
                  title: "SEAMLESS CONNECTION",
                  desc: "Dual-clutch precision. Pure response.",
                },
              ].map((m, i) => (
                <div key={m.title}>
                  <span className="micro">0{i + 1}</span>
                  <p>
                    {m.num}
                    <small>{m.unit}</small>
                  </p>
                  <div>
                    <h3>{m.title}</h3>
                    <p>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="concept-note">
            Concept specifications. Illustrative engineering targets, not
            independently tested performance claims.
          </p>
        </section>
        <section id="showroom" className="velocity-showroom">
          <div className="section showroom-heading">
            <div>
              <p className="eyebrow">03 / THE STUDIO COLLECTION</p>
              <h2>
                YOUR INSTINCT.
                <br />
                <span>YOUR EXPRESSION.</span>
              </h2>
            </div>
            <p>
              Three finishes. Three points of view.
              <br />
              Explore the V9 concept studies.
            </p>
          </div>
          <div className="showroom-stage">
            <span className="showroom-watermark" aria-hidden="true">
              V9
            </span>
            <motion.div
              key={finish}
              className="showroom-car"
              initial={reduced ? false : { opacity: 0.4, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={finishes[finish].image}
                alt={finishes[finish].alt}
                fill
                sizes="(max-width:760px) 100vw, 85vw"
              />
            </motion.div>
            <span className="showroom-view micro">
              {finishes[finish].view} / CONCEPT STUDY
            </span>
            <button
              className="expand-image"
              onClick={() => setGallery(finish)}
              aria-label={`Open ${finishes[finish].name} image`}
            >
              <Maximize2 size={17} />
            </button>
          </div>
          <div className="section showroom-controls">
            <div className="finish-selector" aria-label="Vehicle finish">
              {finishes.map((f, i) => (
                <button
                  key={f.key}
                  aria-pressed={finish === i}
                  onClick={() => setFinish(i)}
                >
                  <i style={{ background: f.color }} />
                  {f.name}
                </button>
              ))}
            </div>
            <div aria-live="polite">
              <h3>{finishes[finish].name}</h3>
              <p>{finishes[finish].description}</p>
            </div>
          </div>
          <p className="gallery-disclosure">
            Original concept renders, each with its own view and design study.
            Image gallery, not an interactive 360° model.
          </p>
        </section>
        <section id="design" className="section velocity-design">
          <div className="design-intro">
            <p className="eyebrow">04 / DESIGN DNA</p>
            <h2>
              LESS DECORATION.
              <br />
              <span>MORE INTENTION.</span>
            </h2>
          </div>
          <article className="design-editorial reveal-block">
            <div className="design-photo">
              <Image
                src="/assets/velocity/obsidian.webp"
                alt="A low obsidian grand touring silhouette in a dark studio"
                fill
                sizes="(max-width:760px) 100vw, 58vw"
                className="parallax-image"
              />
              <span className="design-callout">
                01 / AERODYNAMIC SILHOUETTE
                <i />
              </span>
            </div>
            <div>
              <span className="micro">FORM, WITH PURPOSE.</span>
              <h3>
                Written by the wind.
                <br />
                Finished by instinct.
              </h3>
              <p>
                A silhouette with nothing to prove. A low, uninterrupted line
                draws the eye from the forward stance to the sculpted rear — an
                idea of balance that feels inevitable.
              </p>
              <span className="design-coordinate">V9.01 / EXTERIOR STUDY</span>
            </div>
          </article>
          <article className="design-editorial reverse reveal-block">
            <div className="design-photo">
              <Image
                src="/assets/velocity/crimson.webp"
                alt="Crimson V9 front end showing aerodynamic bodywork and sharply drawn headlamps"
                fill
                sizes="(max-width:760px) 100vw, 58vw"
                className="parallax-image"
              />
              <span className="design-callout">
                02 / PRECISION LIGHT SIGNATURE
                <i />
              </span>
            </div>
            <div>
              <span className="micro">PRECISION IN EVERY DETAIL.</span>
              <h3>
                Presence.
                <br />
                Without excess.
              </h3>
              <p>
                A single line of light. A carefully resolved surface. A material
                chosen for the way it feels as much as the way it performs.
                Nothing here is an afterthought.
              </p>
              <span className="design-coordinate">
                V9.02 / MATERIAL & LIGHT STUDY
              </span>
            </div>
          </article>
        </section>
        <section id="gallery" className="section velocity-gallery">
          <div className="section-head">
            <div>
              <p className="eyebrow">IN A DIFFERENT LIGHT</p>
              <h2>
                EVERY ANGLE.
                <br />
                <span>ANOTHER FEELING.</span>
              </h2>
            </div>
            <p>
              Enter the studio.
              <br />
              Select a frame for a closer look.
            </p>
          </div>
          <div className="velocity-gallery-grid">
            {finishes.map((f, i) => (
              <button
                key={f.key}
                onClick={() => setGallery(i)}
                aria-label={`View ${f.name} gallery image`}
              >
                <Image
                  src={f.image}
                  alt={f.alt}
                  fill
                  sizes={
                    i === 0
                      ? "(max-width:760px) 100vw, 60vw"
                      : "(max-width:760px) 100vw, 35vw"
                  }
                />
                <span className="micro">
                  0{i + 1} / {f.view}
                </span>
                <span className="gallery-plus">
                  <Plus size={22} />
                </span>
              </button>
            ))}
          </div>
        </section>
        <section
          id="specifications"
          className="section velocity-specifications"
        >
          <div>
            <p className="eyebrow">05 / BY THE NUMBERS</p>
            <h2>
              THE DETAILS.
              <br />
              <span>WITHOUT DISTRACTION.</span>
            </h2>
            <p className="concept-note">
              Concept specifications · Fictional vehicle
            </p>
          </div>
          <dl>
            {specifications.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section id="contact" className="section velocity-finale">
          <span className="finale-redline" />
          <p className="eyebrow">THE NEXT CHAPTER IS YOURS.</p>
          <h2>
            EVERY SECOND
            <br />
            <span>COUNTS.</span>
          </h2>
          <div>
            <p>
              A different kind of grand tourer.
              <br />
              An invitation to imagine what comes next.
            </p>
            <button className="button primary" onClick={() => setInquiry(true)}>
              REQUEST A PRIVATE PREVIEW
              <Arrow />
            </button>
          </div>
        </section>
      </main>
      <Footer
        brand="velocity"
        links={[
          { label: "The V9", href: "#showroom" },
          { label: "Specifications", href: "#specifications" },
          { label: "Gallery", href: "#gallery" },
        ]}
      />
      <ContactModal
        open={inquiry}
        onClose={() => setInquiry(false)}
        kind="inquiry"
        title="A closer look. A new perspective."
      />
      <Dialog
        open={gallery !== null}
        onClose={() => setGallery(null)}
        title="The V9 studio gallery"
      >
        {gallery !== null && (
          <div className="gallery-dialog-content">
            <Image
              src={finishes[gallery].image}
              alt={finishes[gallery].alt}
              width={1536}
              height={1024}
            />
            <p className="micro">
              {finishes[gallery].name} / {finishes[gallery].view}
            </p>
            <p>
              Original fictional concept view. Use the arrow buttons or your
              keyboard to explore the collection.
            </p>
            <div>
              <button
                className="button ghost"
                onClick={() =>
                  setGallery((gallery + finishes.length - 1) % finishes.length)
                }
                aria-label="Previous gallery image"
              >
                <ArrowLeft size={18} />
              </button>
              <span className="micro">0{gallery + 1} / 03</span>
              <button
                className="button ghost"
                onClick={() => setGallery((gallery + 1) % finishes.length)}
                aria-label="Next gallery image"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}
      </Dialog>
    </>
  );
}
