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
        <section
          className={`
          velocity-hero relative min-h-[900px] h-[100svh] max-h-[1200px] overflow-hidden isolate
          [&_h1]:text-[length:clamp(85px,_8.7vw,_145px)] [&_h1]:font-semibold [&_h1]:tracking-[-0.07em]
          [&_h1]:leading-[0.94] [&_h1_em]:not-italic [&_h1_em]:text-[#e8ebed]
          [@media(max-width:_1100px)]:[&_h1]:text-[length:10.8vw] [@media(max-width:_760px)]:h-auto
          [@media(max-width:_760px)]:min-h-[900px] [@media(max-width:_760px)]:max-h-none
          [@media(max-width:_760px)]:[&_h1]:text-[length:20vw] [@media(max-width:_760px)]:[&_h1]:leading-[0.95]
        `}
        >
          <span
            className={`
            v9-watermark absolute right-[6%] top-[45px] font-[family-name:var(--font-display)] font-semibold
            text-[length:38vw] leading-[1] tracking-[-0.1em] text-[#161719] z-[-3] select-none
            [@media(max-width:_760px)]:top-[280px] [@media(max-width:_760px)]:right-[8%]
            [@media(max-width:_760px)]:text-[length:72vw]
          `}
            aria-hidden="true"
          >
            V9
          </span>
          <div
            className={`
            hero-car absolute right-[-2%] top-[110px] w-[82%] h-[76%] z-[-2]
            [mask-image:linear-gradient(_90deg,_transparent,_#000_18%,_#000_96%,_transparent_)] [&>img]:object-contain
            [&>img]:[mix-blend-mode:lighten] [@media(max-width:_1100px)]:right-[-9%] [@media(max-width:_1100px)]:w-[96%]
            [@media(max-width:_1100px)]:top-[160px] [@media(max-width:_1100px)]:h-[70%]
            [@media(max-width:_760px)]:top-[290px] [@media(max-width:_760px)]:right-[-20%]
            [@media(max-width:_760px)]:w-[140%] [@media(max-width:_760px)]:h-[400px]
            [@media(max-width:_760px)]:[&>img]:[object-position:50%_center]
            [@media(max-width:_760px)]:[&>img]:object-contain
            [@media(max-width:_760px)]:[&>img]:[mask-image:linear-gradient(_0deg,_transparent,_#000_15%,_#000_87%,_transparent_)]
          `}
          >
            <Image
              src="/assets/velocity/silver.webp"
              alt="The fictional VELOCITY V9 in liquid silver, its red tail light illuminating a black studio"
              fill
              priority
              sizes="(max-width:760px) 100vw, 80vw"
              className={`parallax-image [@media(prefers-reduced-motion:_reduce)]:[transform:none]!`}
            />
          </div>
          <div
            className={`
            velocity-hero-shade absolute inset-0
            bg-[image:linear-gradient(_90deg,_#060708_0%,_#060708bd_17%,_#06070838_38%,_transparent_58%_),_linear-gradient(0deg,_#060708_0%,_transparent_23%,_transparent_80%)]
            z-[-1]
            [@media(max-width:_760px)]:bg-[image:linear-gradient(_0deg,_#060708_9%,_transparent_30%,_#06070800_45%,_#06070877_65%,_#060708_90%_)]
          `}
          />
          <div
            className={`
            velocity-hero-copy relative pt-[205px] px-[var(--gutter)] pb-[190px] z-[2] max-w-[1680px] m-auto
            [&>.eyebrow]:text-[8px] [&>.eyebrow]:tracking-[0.2em] [&>.eyebrow]:text-[#b5b7bc] [&>.eyebrow]:mb-[30px]
            [&>.eyebrow>span]:w-[25px] [&>.eyebrow>span]:h-[2px] [&>.eyebrow>span]:bg-[#dc303a]
            [&>p:not(.eyebrow)]:text-[12px] [&>p:not(.eyebrow)]:text-[#999da2] [&>p:not(.eyebrow)]:my-[27px]
            [&>p:not(.eyebrow)]:mx-0 [&>p:not(.eyebrow)]:leading-[1.8] [&>.button-row]:gap-[28px]
            [@media(max-width:_1100px)]:pt-[215px] [@media(max-width:_760px)]:pt-[135px] [@media(max-width:_760px)]:pb-0
            [@media(max-width:_760px)]:[&>.eyebrow]:tracking-[0.12em] [@media(max-width:_760px)]:[&>.eyebrow]:mb-[25px]
            [@media(max-width:_760px)]:[&>.eyebrow]:gap-[9px] [@media(max-width:_760px)]:[&>.eyebrow]:text-[7px]
            [@media(max-width:_760px)]:[&>.eyebrow>span]:w-[18px]
            [@media(max-width:_760px)]:[&>p:not(.eyebrow)]:text-[11px]
            [@media(max-width:_760px)]:[&>p:not(.eyebrow)]:mt-[22px] [@media(max-width:_760px)]:[&>p:not(.eyebrow)]:mx-0
            [@media(max-width:_760px)]:[&>p:not(.eyebrow)]:mb-[23px] [@media(max-width:_760px)]:[&>.button-row]:gap-[17px]
            [@media(max-width:_760px)]:[&_.button]:text-[8px] [@media(max-width:_760px)]:[&_.button]:gap-[13px]
            [@media(max-width:_760px)]:[&_.button]:py-[13px] [@media(max-width:_760px)]:[&_.button]:px-[15px]
            [@media(max-width:_760px)]:[&_.button]:min-h-[43px]
          `}
          >
            <p
              className={`
              eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
              text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
              [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
              [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
            `}
            >
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
            <div
              className={`button-row flex gap-[15px] items-center flex-wrap`}
            >
              <a
                className={`
                button min-h-[49px] inline-flex items-center justify-center gap-[25px] font-semibold
                [border:1px_solid_var(--line)] bg-[transparent] [transition:background_0.2s,_transform_0.2s,_border-color_0.2s]
                whitespace-nowrap text-[10px] tracking-[0.07em] py-[16px] px-[22px] [&:hover]:[transform:translateY(-2px)]
                [&:hover]:[border-color:var(--text)] [&.primary]:bg-[var(--accent)] [&.primary]:[border-color:var(--accent)]
                [&.primary]:text-[#fff] [&.primary:hover]:bg-[color-mix(in_srgb,_var(--accent)_82%,_white)]
                [&.primary:hover]:[border-color:transparent] [&.light]:bg-[var(--text)] [&.light]:text-[var(--bg)]
                [&.ghost:hover]:bg-[rgba(255,_255,_255,_0.05)] [@media(max-width:_760px)]:gap-[20px] primary
              `}
                href="#showroom"
              >
                EXPLORE THE V9
                <Arrow />
              </a>
              <a
                className={`
                hero-detail-link flex items-center gap-[15px] text-[8px] tracking-[0.1em] [&>svg]:text-[#d12c36]
                [@media(max-width:_760px)]:text-[7px] [@media(max-width:_760px)]:gap-[9px]
              `}
                href="#design"
              >
                A CLOSER LOOK
                <Plus size={15} />
              </a>
            </div>
          </div>
          <span
            className={`
            car-side-label absolute right-[24px] top-[32%] [writing-mode:vertical-rl] text-[7px] tracking-[0.17em]
            text-[#7a7e86] [@media(max-width:_760px)]:top-[500px] [@media(max-width:_760px)]:right-[12px]
            [@media(max-width:_760px)]:text-[6px] micro font-medium uppercase leading-[1.6]
          `}
          >
            V9 / GRAND TOURING CONCEPT / 2026
          </span>
          <div
            className={`
            hero-specs absolute left-[var(--gutter)] right-[var(--gutter)] bottom-[95px] flex items-center gap-[65px] z-[2]
            [&>div]:pt-[15px] [&>div]:[border-top:1px_solid_#ffffff24] [&>div]:min-w-[130px]
            [&>div>span]:font-[family-name:monospace] [&>div>span]:text-[7px] [&>div>span]:tracking-[0.15em]
            [&>div>span]:text-[#777c85] [&_p]:font-[family-name:var(--font-display)] [&_p]:text-[40px]
            [&_p]:tracking-[-0.05em] [&_p]:leading-[1.4] [&_small]:text-[10px] [&_small]:text-[#a4a8af] [&_small]:ml-[8px]
            [&_small]:font-[family-name:var(--font-body)] [&_small]:tracking-normal [@media(max-width:_1100px)]:gap-[45px]
            [@media(max-width:_1100px)]:[&>div]:min-w-[110px] [@media(max-width:_760px)]:left-[var(--gutter)]
            [@media(max-width:_760px)]:right-[var(--gutter)] [@media(max-width:_760px)]:gap-[20px]
            [@media(max-width:_760px)]:bottom-[98px] [@media(max-width:_760px)]:flex-wrap
            [@media(max-width:_760px)]:justify-between [@media(max-width:_760px)]:[&>div]:min-w-[75px]
            [@media(max-width:_760px)]:[&>div]:[flex:1] [@media(max-width:_760px)]:[&>div]:pt-[10px]
            [@media(max-width:_760px)]:[&>div>span]:text-[5px] [@media(max-width:_760px)]:[&>div>span]:tracking-[0.1em]
            [@media(max-width:_760px)]:[&_p]:text-[30px] [@media(max-width:_760px)]:[&_p]:mt-[4px]
            [@media(max-width:_760px)]:[&_small]:text-[7px] [@media(max-width:_760px)]:[&_small]:ml-[4px]
          `}
          >
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
            <span
              className={`
              concept-specs-note font-[family-name:monospace] text-[6px] tracking-[0.14em] leading-[1.8] ml-auto
              [align-self:flex-end] pb-[10px] text-[#8b96a5] [@media(max-width:_760px)]:w-full
              [@media(max-width:_760px)]:text-left [@media(max-width:_760px)]:p-0
              [@media(max-width:_760px)]:tracking-[0.12em] [@media(max-width:_760px)]:ml-0
              [@media(max-width:_760px)]:text-[7px] [@media(max-width:_760px)]:[&>br]:hidden
            `}
            >
              CONCEPT
              <br />
              SPECIFICATIONS
            </span>
          </div>
          <div
            className={`
            velocity-hero-bottom absolute bottom-0 left-[var(--gutter)] right-[var(--gutter)] h-[65px]
            [border-top:1px_solid_var(--line)] flex justify-between items-center font-[family-name:monospace] text-[7px]
            tracking-[0.12em] text-[#858b91] gap-[30px] [&>a]:flex [&>a]:items-center [&>a]:gap-[15px]
            [&>a>svg]:text-[#cf3038] [&>span:first-of-type]:flex [&>span:first-of-type]:gap-[12px]
            [&>span:first-of-type]:items-center [&>span:first-of-type]:ml-auto [&>span:first-of-type]:mr-[15px]
            [&>span:first-of-type]:text-[#c9cdd2] [&_i]:w-[70px] [&_i]:h-[1px]
            [&_i]:bg-[image:linear-gradient(90deg,_#d42e37_20%,_#ffffff22_20%)] [&>span:last-child]:text-[#8b96a5]
            [@media(max-width:_760px)]:h-[62px] [@media(max-width:_760px)]:gap-[10px] [@media(max-width:_760px)]:text-[5px]
            [@media(max-width:_760px)]:tracking-[0.06em] [@media(max-width:_760px)]:[&>a]:gap-[8px]
            [@media(max-width:_760px)]:[&>a>svg]:w-[12px] [@media(max-width:_760px)]:[&>span:first-of-type]:mr-0
            [@media(max-width:_760px)]:[&>span:first-of-type]:gap-[8px] [@media(max-width:_760px)]:[&_i]:w-[35px]
            [@media(max-width:_760px)]:[&>span:last-child]:hidden
          `}
          >
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
        <section
          className={`
          velocity-manifesto grid [grid-template-columns:1fr_1.15fr_0.7fr] gap-[45px] [align-items:start] pt-[120px]
          pb-[120px] [&>.eyebrow]:text-[8px] [&>.eyebrow]:mt-[7px] [&>h2]:text-[length:clamp(30px,_3.1vw,_48px)]
          [&>h2]:leading-[1.22] [&>h2]:tracking-[-0.045em] [&>h2]:whitespace-nowrap [&_h2>span]:text-[#6e737b]
          [&>div>p]:text-[12px] [&>div>p]:text-[#91979f] [&>div>p]:leading-[1.9]
          [&>div>.micro]:font-[family-name:monospace] [&>div>.micro]:block [&>div>.micro]:text-[6px]
          [&>div>.micro]:mt-[30px] [&>div>.micro]:tracking-[0.1em] [&>div>.micro]:text-[#8b96a5]
          [@media(max-width:_1100px)]:[grid-template-columns:0.5fr_1.3fr] [@media(max-width:_1100px)]:gap-[35px]
          [@media(max-width:_1100px)]:[&>div]:[grid-column:2] [@media(max-width:_1100px)]:[&>h2]:text-[length:4.5vw]
          [@media(max-width:_760px)]:block [@media(max-width:_760px)]:pt-[65px] [@media(max-width:_760px)]:pb-[65px]
          [@media(max-width:_760px)]:[&>.eyebrow]:mb-[30px] [@media(max-width:_760px)]:[&>h2]:leading-[1.25]
          [@media(max-width:_760px)]:[&>h2]:whitespace-normal [@media(max-width:_760px)]:[&>h2]:text-[length:7.8vw]
          [@media(max-width:_760px)]:[&>div]:mt-[30px] [@media(max-width:_760px)]:[&>div]:max-w-[350px]
          [@media(max-width:_760px)]:[&>div>p]:text-[12px] [@media(max-width:_760px)]:[&>div>.micro]:text-[6px]
          [@media(max-width:_760px)]:[&>div>.micro]:mt-[22px] section py-[110px] px-[var(--gutter)] max-w-[1680px] m-auto
        `}
        >
          <p
            className={`
            eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
            text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
            [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
            [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
          `}
          >
            01 / THE INTENTION
          </p>
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
            <span
              className={`micro text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6]`}
            >
              VELOCITY / AN INDEPENDENT AUTOMOTIVE CONCEPT
            </span>
          </div>
        </section>
        <section
          className={`
          velocity-detail-band h-[450px] relative overflow-hidden [border-top:1px_solid_var(--line)]
          [border-bottom:1px_solid_var(--line)] [&>img]:object-cover [&>img]:[object-position:60%_56%]
          [&>img]:[filter:brightness(0.65)] [&>img]:w-full [&>img]:h-full [&>svg]:absolute [&>svg]:inset-0 [&>svg]:w-full
          [&>svg]:h-full [&>svg]:pointer-events-none [@media(max-width:_760px)]:h-[290px]
          [@media(max-width:_760px)]:[&>img]:[object-position:57%_center] [@media(max-width:_760px)]:[&>svg]:w-[900px]
          [@media(max-width:_760px)]:[&>svg]:max-w-none [@media(max-width:_760px)]:[&>svg]:left-[-240px]
        `}
        >
          <Image
            src="/assets/velocity/silver.webp"
            alt="Detail study of the V9 sculpted rear wheel, silver bodywork and carbon diffuser"
            fill
            sizes="100vw"
            className={`parallax-image [@media(prefers-reduced-motion:_reduce)]:[transform:none]!`}
          />
          <span
            className={`
            detail-band-caption absolute left-[var(--gutter)] bottom-[35px] flex items-center gap-[13px]
            font-[family-name:monospace] text-[8px] tracking-[0.13em] [&>i]:w-[6px] [&>i]:h-[6px] [&>i]:bg-[#d42e37]
            [@media(max-width:_760px)]:text-[6px] [@media(max-width:_760px)]:gap-[8px]
            [@media(max-width:_760px)]:bottom-[20px]
          `}
          >
            <i />
            01.1 / EVERY LINE HAS A PURPOSE.
          </span>
          <svg viewBox="0 0 1440 500" fill="none" aria-hidden="true">
            <path d="M850 315 1030 120h240" stroke="#d9e0e744" />
            <circle cx="850" cy="315" r="5" stroke="#df3b40" />
            <path d="M400 370 270 420H150" stroke="#d9e0e744" />
          </svg>
        </section>
        <section
          id="performance"
          className={`
          section py-[110px] px-[var(--gutter)] max-w-[1680px] m-auto velocity-performance pt-[110px] pb-[110px]
          [&>.concept-note]:text-[8px] [&>.concept-note]:mt-[55px] [&>.concept-note]:text-right
          [&>.concept-note]:text-[#8b96a5] [@media(max-width:_760px)]:pt-[70px] [@media(max-width:_760px)]:pb-[70px]
          [@media(max-width:_760px)]:[&>.concept-note]:text-left [@media(max-width:_760px)]:[&>.concept-note]:text-[7px]
          [@media(max-width:_760px)]:[&>.concept-note]:leading-[1.8]
          [@media(max-width:_760px)]:[&>.concept-note]:mt-[25px]
        `}
        >
          <div
            className={`
            performance-title [&>.eyebrow]:font-[family-name:monospace] [&>.eyebrow]:text-[8px] [&>.eyebrow]:text-[#9ca1a8]
            [&>h2]:text-[length:clamp(50px,_6.8vw,_105px)] [&>h2]:leading-[0.98] [&>h2]:font-semibold
            [&>h2]:tracking-[-0.065em] [&>h2>span]:text-[#6a6f77] [&>p:not(.eyebrow)]:text-[12px]
            [&>p:not(.eyebrow)]:text-[var(--muted)] [&>p:not(.eyebrow)]:mt-[28px]
            [@media(max-width:_760px)]:[&>h2]:text-[length:13vw] [@media(max-width:_760px)]:[&>h2]:leading-[1]
            [@media(max-width:_760px)]:[&>p:not(.eyebrow)]:text-[11px]
            [@media(max-width:_760px)]:[&>p:not(.eyebrow)]:mt-[23px]
          `}
          >
            <p
              className={`
              eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
              text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
              [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
              [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
            `}
            >
              02 / PERFORMANCE
            </p>
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
          <div
            className={`
            performance-content grid [grid-template-columns:1fr_1.25fr] gap-[100px] mt-[65px] items-center
            [@media(max-width:_1100px)]:gap-[50px] [@media(max-width:_760px)]:grid-cols-[1fr]
            [@media(max-width:_760px)]:gap-[35px] [@media(max-width:_760px)]:mt-[40px]
          `}
          >
            <div
              className={`
              tach-stage max-w-[430px] w-full m-auto text-center [&>svg]:w-full [&>svg]:h-auto [&>svg]:max-w-[430px]
              [&>.micro]:font-[family-name:monospace] [&>.micro]:text-[7px] [&>.micro]:mt-[20px] [&>.micro]:block
              [&>.micro]:text-[#8b96a5] [@media(max-width:_760px)]:max-w-[330px]
              [@media(max-width:_760px)]:[&>.micro]:text-[6px] [@media(max-width:_760px)]:[&>.micro]:mt-[15px]
            `}
            >
              <Tachometer />
              <span
                className={`micro text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6]`}
              >
                4.0 L / TWIN-TURBO V8 CONCEPT
              </span>
            </div>
            <div
              className={`
              performance-metrics [&>div]:flex [&>div]:items-center [&>div]:gap-[25px]
              [&>div]:[border-top:1px_solid_var(--line)] [&>div]:py-[27px] [&>div]:px-0
              [&>div>span]:font-[family-name:monospace] [&>div>span]:text-[7px] [&>div>span]:text-[#cf3038]
              [&>div>p]:text-[50px] [&>div>p]:tracking-[-0.05em] [&>div>p]:font-[family-name:var(--font-display)]
              [&>div>p]:leading-[1.2] [&>div>p]:min-w-[165px] [&_small]:font-[family-name:monospace] [&_small]:text-[9px]
              [&_small]:tracking-normal [&_small]:text-[#858d97] [&_small]:ml-[7px] [&_h3]:font-[family-name:var(--font-body)]
              [&_h3]:text-[8px] [&_h3]:tracking-[0.07em] [&>div>div>p]:text-[10px] [&>div>div>p]:text-[#78818c]
              [&>div>div>p]:mt-[8px] [&>div>div>p]:leading-[1.7] [@media(max-width:_1100px)]:[&>div]:gap-[15px]
              [@media(max-width:_1100px)]:[&>div>p]:text-[40px] [@media(max-width:_1100px)]:[&>div>p]:min-w-[130px]
              [@media(max-width:_1100px)]:[&_h3]:text-[7px] [@media(max-width:_1100px)]:[&>div>div>p]:text-[9px]
              [@media(max-width:_760px)]:[&>div]:gap-[16px] [@media(max-width:_760px)]:[&>div]:py-[23px]
              [@media(max-width:_760px)]:[&>div]:px-0 [@media(max-width:_760px)]:[&>div>p]:text-[40px]
              [@media(max-width:_760px)]:[&>div>p]:min-w-[125px] [@media(max-width:_760px)]:[&_small]:text-[7px]
              [@media(max-width:_760px)]:[&_small]:ml-[5px] [@media(max-width:_760px)]:[&_h3]:text-[6px]
              [@media(max-width:_760px)]:[&_h3]:tracking-[0.04em] [@media(max-width:_760px)]:[&>div>div>p]:text-[9px]
              [&>div>.micro]:text-[#e88489]
            `}
            >
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
                  <span
                    className={`micro text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6]`}
                  >
                    0{i + 1}
                  </span>
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
          <p className={`concept-note text-[10px] text-[var(--muted)]`}>
            Concept specifications. Illustrative engineering targets, not
            independently tested performance claims.
          </p>
        </section>
        <section
          id="showroom"
          className={`
          velocity-showroom relative bg-[image:radial-gradient(ellipse_at_50%_40%,_#25262b24,_transparent_70%)]
          [border-top:1px_solid_var(--line)] [border-bottom:1px_solid_var(--line)] overflow-hidden
        `}
        >
          <div
            className={`
            section py-[110px] px-[var(--gutter)] max-w-[1680px] m-auto showroom-heading flex justify-between items-end
            pb-0 pt-[85px] [&_h2]:text-[length:clamp(44px,_4.8vw,_72px)] [&_h2]:leading-[1.02] [&_h2]:font-semibold
            [&_h2]:tracking-[-0.055em] [&_h2>span]:text-[#6c737c] [&>p]:text-[12px] [&>p]:text-[#949ba5]
            [&_.eyebrow]:font-[family-name:monospace] [&_.eyebrow]:text-[8px] [@media(max-width:_760px)]:block
            [@media(max-width:_760px)]:pt-[65px] [@media(max-width:_760px)]:[&_h2]:text-[length:10.7vw]
            [@media(max-width:_760px)]:[&>p]:text-[11px] [@media(max-width:_760px)]:[&>p]:mt-[25px]
          `}
          >
            <div>
              <p
                className={`
                eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
                text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
                [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
                [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
              `}
              >
                03 / THE STUDIO COLLECTION
              </p>
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
          <div
            className={`
            showroom-stage relative h-[590px] max-w-[1440px] my-0 mx-auto isolate [@media(max-width:_1100px)]:h-[490px]
            [@media(max-width:_760px)]:h-[310px] [@media(max-width:_760px)]:mt-[5px] [@media(max-width:_760px)]:mx-0
            [@media(max-width:_760px)]:mb-0 [@media(max-width:_760px)]:[&_.showroom-view]:max-w-[70%]
            [@media(max-width:_760px)]:[&_.showroom-view]:leading-[1.8]
          `}
          >
            <span
              className={`
              showroom-watermark absolute font-[family-name:var(--font-display)] text-[420px] tracking-[-0.1em] leading-[1]
              right-[20%] top-[10px] text-[#202124] z-[-2] opacity-[0.7] [@media(max-width:_1100px)]:text-[350px]
              [@media(max-width:_760px)]:text-[210px] [@media(max-width:_760px)]:top-[25px]
              [@media(max-width:_760px)]:right-[18%]
            `}
              aria-hidden="true"
            >
              V9
            </span>
            <motion.div
              key={finish}
              className={`
                showroom-car absolute [inset:-20px_5%_0] z-[-1] [&>img]:object-contain [&>img]:[mix-blend-mode:lighten]
                [&>img]:[mask-image:linear-gradient(_0deg,_transparent,_#000_8%,_#000_93%,_transparent_)]
                [@media(max-width:_760px)]:[inset:0_-12%_0] [@media(max-width:_760px)]:max-w-none
                [@media(max-width:_760px)]:[&>img]:object-contain
              `}
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
            <span
              className={`
              showroom-view absolute left-[var(--gutter)] bottom-[10px] font-[family-name:monospace] text-[7px]
              text-[#8b96a5] [@media(max-width:_760px)]:bottom-[12px] [@media(max-width:_760px)]:text-[7px] micro font-medium
              tracking-[0.15em] uppercase leading-[1.6]
            `}
            >
              {finishes[finish].view} / CONCEPT STUDY
            </span>
            <button
              className={`
                expand-image absolute right-[var(--gutter)] bottom-[5px] w-[42px] h-[42px] [border:1px_solid_#ffffff20]
                bg-[#0a0c0f88] grid place-items-center text-[#9ca5b1] [@media(max-width:_760px)]:w-[32px]
                [@media(max-width:_760px)]:h-[32px] [@media(max-width:_760px)]:bottom-[6px]
              `}
              onClick={() => setGallery(finish)}
              aria-label={`Open ${finishes[finish].name} image`}
            >
              <Maximize2 size={17} />
            </button>
          </div>
          <div
            className={`
            section py-[110px] px-[var(--gutter)] max-w-[1680px] m-auto showroom-controls pt-[40px] pb-[25px] flex
            items-center justify-between gap-[60px] [&>div:last-child]:max-w-[350px]
            [&>div:last-child]:[border-left:1px_solid_#b02e35] [&>div:last-child]:pl-[24px] [&_h3]:text-[22px]
            [&_h3]:tracking-[-0.03em] [&>div:last-child>p]:text-[11px] [&>div:last-child>p]:text-[#7f8a97]
            [&>div:last-child>p]:mt-[7px] [@media(max-width:_1100px)]:gap-[35px]
            [@media(max-width:_1100px)]:[&>div:last-child]:max-w-[280px] [@media(max-width:_760px)]:block
            [@media(max-width:_760px)]:pt-[28px] [@media(max-width:_760px)]:pb-[10px]
            [@media(max-width:_760px)]:[&>div:last-child]:mt-[28px] [@media(max-width:_760px)]:[&>div:last-child]:pl-[16px]
            [@media(max-width:_760px)]:[&>div:last-child]:max-w-full
            [@media(max-width:_760px)]:[&>div:last-child]:min-h-[80px] [@media(max-width:_760px)]:[&_h3]:text-[22px]
            [@media(max-width:_760px)]:[&>div:last-child>p]:text-[11px]
          `}
          >
            <div
              className={`
              finish-selector flex gap-[28px] [&>button]:flex [&>button]:items-center [&>button]:gap-[10px]
              [&>button]:bg-[transparent] [&>button]:py-[10px] [&>button]:px-0 [&>button]:text-[#78818c]
              [&>button]:text-[10px] [&_i]:w-[22px] [&_i]:h-[22px] [&_i]:rounded-full [&_i]:[border:4px_solid_#101113]
              [&_i]:[outline:1px_solid_#ffffff22] [&_i]:[box-shadow:inset_1px_1px_3px_#ffffff22]
              [&>button[aria-pressed="true"]]:text-[#e5e8ed] [&>button[aria-pressed="true"]>i]:[outline-color:#d3d7e0]
              [@media(max-width:_1100px)]:gap-[18px] [@media(max-width:_1100px)]:[&>button]:text-[9px]
              [@media(max-width:_1100px)]:[&>button]:gap-[8px] [@media(max-width:_760px)]:justify-between
              [@media(max-width:_760px)]:gap-[12px] [@media(max-width:_760px)]:[&>button]:text-[8px]
              [@media(max-width:_760px)]:[&>button]:gap-[7px] [@media(max-width:_760px)]:[&_i]:w-[20px]
              [@media(max-width:_760px)]:[&_i]:h-[20px] [@media(max-width:_760px)]:[&_i]:[border-width:3px]
            `}
              aria-label="Vehicle finish"
            >
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
          <p
            className={`
            gallery-disclosure font-[family-name:monospace] text-[7px] tracking-[0.015em] text-center pt-[25px]
            px-[var(--gutter)] pb-[45px] text-[#8b96a5] [@media(max-width:_760px)]:leading-[1.8]
            [@media(max-width:_760px)]:pt-[15px] [@media(max-width:_760px)]:pb-[35px] [@media(max-width:_760px)]:text-[7px]
          `}
          >
            Original concept renders, each with its own view and design study.
            Image gallery, not an interactive 360° model.
          </p>
        </section>
        <section
          id="design"
          className={`
          section py-[110px] px-[var(--gutter)] max-w-[1680px] m-auto velocity-design pt-[110px] pb-[30px]
          [@media(max-width:_760px)]:pt-[70px] [@media(max-width:_760px)]:pb-0
        `}
        >
          <div
            className={`
            design-intro mb-[65px] [&>.eyebrow]:font-[family-name:monospace] [&>.eyebrow]:text-[8px]
            [&>h2]:text-[length:clamp(45px,_5vw,_76px)] [&>h2]:font-semibold [&>h2]:leading-[1] [&_h2>span]:text-[#6a727c]
            [@media(max-width:_760px)]:mb-[40px] [@media(max-width:_760px)]:[&>h2]:text-[length:10.1vw]
            [@media(max-width:_760px)]:[&>h2]:leading-[1.05]
          `}
          >
            <p
              className={`
              eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
              text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
              [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
              [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
            `}
            >
              04 / DESIGN DNA
            </p>
            <h2>
              LESS DECORATION.
              <br />
              <span>MORE INTENTION.</span>
            </h2>
          </div>
          <article
            className={`
            design-editorial grid [grid-template-columns:1.5fr_1fr] gap-[8%] items-center mb-[100px]
            [&>div:last-child>.micro]:font-[family-name:monospace] [&>div:last-child>.micro]:text-[7px]
            [&>div:last-child>.micro]:text-[#a7afb9] [&>div:last-child>.micro]:tracking-[0.15em]
            [&_h3]:text-[length:clamp(30px,_3.3vw,_48px)] [&_h3]:leading-[1.12] [&_h3]:my-[22px] [&_h3]:mx-0
            [&_h3]:tracking-[-0.04em] [&>div:last-child>p]:text-[12px] [&>div:last-child>p]:text-[#858e9a]
            [&>div:last-child>p]:max-w-[340px] [&>div:last-child>p]:leading-[1.9]
            [&.reverse]:[grid-template-columns:1fr_1.5fr] [&.reverse>.design-photo]:order-[2]
            [@media(max-width:_1100px)]:gap-[6%] [@media(max-width:_1100px)]:[&>div:last-child>p]:text-[11px]
            [@media(max-width:_760px)]:grid-cols-[1fr] [@media(max-width:_760px)]:gap-[30px]
            [@media(max-width:_760px)]:mb-[55px] [@media(max-width:_760px)]:[&.reverse]:grid-cols-[1fr]
            [@media(max-width:_760px)]:[&.reverse]:gap-[30px] [@media(max-width:_760px)]:[&.reverse]:mb-[55px]
            [@media(max-width:_760px)]:[&.reverse>.design-photo]:order-0
            [@media(max-width:_760px)]:[&>div:last-child>.micro]:text-[6px] [@media(max-width:_760px)]:[&_h3]:text-[34px]
            [@media(max-width:_760px)]:[&_h3]:my-[17px] [@media(max-width:_760px)]:[&_h3]:mx-0
            [@media(max-width:_760px)]:[&>div:last-child>p]:text-[12px]
            [@media(max-width:_760px)]:[&>div:last-child>p]:max-w-[350px] reveal-block
          `}
          >
            <div
              className={`
              design-photo relative aspect-[1.3] overflow-hidden bg-[#0c0e11] [&>img]:object-cover [&>img]:object-[center]
              [&>img]:[filter:brightness(0.85)] [@media(max-width:_760px)]:aspect-[1.2]
            `}
            >
              <Image
                src="/assets/velocity/obsidian.webp"
                alt="A low obsidian grand touring silhouette in a dark studio"
                fill
                sizes="(max-width:760px) 100vw, 58vw"
                className={`parallax-image [@media(prefers-reduced-motion:_reduce)]:[transform:none]!`}
              />
              <span
                className={`
                design-callout absolute bottom-[25px] left-[25px] font-[family-name:monospace] text-[7px] tracking-[0.1em]
                text-[#bec7d3] flex items-center gap-[15px] [&>i]:w-[60px] [&>i]:h-[1px] [&>i]:bg-[#d42e3766]
                [@media(max-width:_760px)]:bottom-[18px] [@media(max-width:_760px)]:left-[16px]
                [@media(max-width:_760px)]:text-[6px] [@media(max-width:_760px)]:gap-[10px]
                [@media(max-width:_760px)]:[&>i]:w-[30px]
              `}
              >
                01 / AERODYNAMIC SILHOUETTE
                <i />
              </span>
            </div>
            <div>
              <span
                className={`micro text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6]`}
              >
                FORM, WITH PURPOSE.
              </span>
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
              <span
                className={`
                design-coordinate font-[family-name:monospace] text-[7px] block mt-[35px] tracking-[0.1em] text-[#e88489]
                [@media(max-width:_1100px)]:text-[6px] [@media(max-width:_760px)]:mt-[22px]
                [@media(max-width:_760px)]:text-[6px]
              `}
              >
                V9.01 / EXTERIOR STUDY
              </span>
            </div>
          </article>
          <article
            className={`
            design-editorial grid [grid-template-columns:1.5fr_1fr] gap-[8%] items-center mb-[100px]
            [&>div:last-child>.micro]:font-[family-name:monospace] [&>div:last-child>.micro]:text-[7px]
            [&>div:last-child>.micro]:text-[#a7afb9] [&>div:last-child>.micro]:tracking-[0.15em]
            [&_h3]:text-[length:clamp(30px,_3.3vw,_48px)] [&_h3]:leading-[1.12] [&_h3]:my-[22px] [&_h3]:mx-0
            [&_h3]:tracking-[-0.04em] [&>div:last-child>p]:text-[12px] [&>div:last-child>p]:text-[#858e9a]
            [&>div:last-child>p]:max-w-[340px] [&>div:last-child>p]:leading-[1.9]
            [&.reverse]:[grid-template-columns:1fr_1.5fr] [&.reverse>.design-photo]:order-[2]
            [@media(max-width:_1100px)]:gap-[6%] [@media(max-width:_1100px)]:[&>div:last-child>p]:text-[11px]
            [@media(max-width:_760px)]:grid-cols-[1fr] [@media(max-width:_760px)]:gap-[30px]
            [@media(max-width:_760px)]:mb-[55px] [@media(max-width:_760px)]:[&.reverse]:grid-cols-[1fr]
            [@media(max-width:_760px)]:[&.reverse]:gap-[30px] [@media(max-width:_760px)]:[&.reverse]:mb-[55px]
            [@media(max-width:_760px)]:[&.reverse>.design-photo]:order-0
            [@media(max-width:_760px)]:[&>div:last-child>.micro]:text-[6px] [@media(max-width:_760px)]:[&_h3]:text-[34px]
            [@media(max-width:_760px)]:[&_h3]:my-[17px] [@media(max-width:_760px)]:[&_h3]:mx-0
            [@media(max-width:_760px)]:[&>div:last-child>p]:text-[12px]
            [@media(max-width:_760px)]:[&>div:last-child>p]:max-w-[350px] reverse reveal-block
          `}
          >
            <div
              className={`
              design-photo relative aspect-[1.3] overflow-hidden bg-[#0c0e11] [&>img]:object-cover [&>img]:object-[center]
              [&>img]:[filter:brightness(0.85)] [@media(max-width:_760px)]:aspect-[1.2]
            `}
            >
              <Image
                src="/assets/velocity/crimson.webp"
                alt="Crimson V9 front end showing aerodynamic bodywork and sharply drawn headlamps"
                fill
                sizes="(max-width:760px) 100vw, 58vw"
                className={`parallax-image [@media(prefers-reduced-motion:_reduce)]:[transform:none]!`}
              />
              <span
                className={`
                design-callout absolute bottom-[25px] left-[25px] font-[family-name:monospace] text-[7px] tracking-[0.1em]
                text-[#bec7d3] flex items-center gap-[15px] [&>i]:w-[60px] [&>i]:h-[1px] [&>i]:bg-[#d42e3766]
                [@media(max-width:_760px)]:bottom-[18px] [@media(max-width:_760px)]:left-[16px]
                [@media(max-width:_760px)]:text-[6px] [@media(max-width:_760px)]:gap-[10px]
                [@media(max-width:_760px)]:[&>i]:w-[30px]
              `}
              >
                02 / PRECISION LIGHT SIGNATURE
                <i />
              </span>
            </div>
            <div>
              <span
                className={`micro text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6]`}
              >
                PRECISION IN EVERY DETAIL.
              </span>
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
              <span
                className={`
                design-coordinate font-[family-name:monospace] text-[7px] block mt-[35px] tracking-[0.1em] text-[#e88489]
                [@media(max-width:_1100px)]:text-[6px] [@media(max-width:_760px)]:mt-[22px]
                [@media(max-width:_760px)]:text-[6px]
              `}
              >
                V9.02 / MATERIAL & LIGHT STUDY
              </span>
            </div>
          </article>
        </section>
        <section
          id="gallery"
          className={`
          section py-[110px] px-[var(--gutter)] max-w-[1680px] m-auto [@media(max-width:_1000px)]:pb-[85px]
          [@media(max-width:_760px)]:pb-[70px] velocity-gallery pt-[30px]
          [&_.section-head_h2]:text-[length:clamp(43px,_4.7vw,_70px)] [&_.section-head_h2]:font-semibold
          [&_.section-head_h2]:leading-[1.02] [&_h2>span]:text-[#747d89]
          [&_.section-head_.eyebrow]:font-[family-name:monospace] [&_.section-head_.eyebrow]:text-[8px]
          [&_.section-head>p]:text-[12px] [@media(max-width:_760px)]:pt-[30px]
          [@media(max-width:_760px)]:[&_.section-head_h2]:text-[length:10.5vw]
          [@media(max-width:_760px)]:[&_.section-head>p]:text-[11px]
        `}
        >
          <div
            className={`
            section-head flex items-end justify-between gap-[35px] mb-[50px] [&_h2]:text-[length:clamp(38px,_4.5vw,_68px)]
            [&_h2]:leading-[1.08] [&>p]:text-[var(--muted)] [&>p]:max-w-[340px] [&>p]:text-[14px] [&_.eyebrow]:mb-[18px]
            [@media(max-width:_1000px)]:gap-[25px] [@media(max-width:_1000px)]:[&>p]:max-w-[270px]
            [@media(max-width:_760px)]:block [@media(max-width:_760px)]:mb-[35px]
            [@media(max-width:_760px)]:[&>p]:mt-[22px] [@media(max-width:_760px)]:[&>p]:max-w-[400px]
          `}
          >
            <div>
              <p
                className={`
                eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
                text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
                [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
                [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
              `}
              >
                IN A DIFFERENT LIGHT
              </p>
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
          <div
            className={`
            velocity-gallery-grid grid [grid-template-columns:1.4fr_1fr] [grid-template-rows:240px_240px] gap-[18px]
            [&>button]:relative [&>button]:w-full [&>button]:h-full [&>button]:overflow-hidden [&>button]:bg-[#101217]
            [&>button]:text-left [&>button:first-child]:[grid-row:span_2] [&_img]:object-cover
            [&_img]:[transition:transform_0.5s] [&>button:hover_img]:[transform:scale(1.035)]
            [&>button:first-child_img]:[object-position:55%_center] [&_.micro]:absolute [&_.micro]:left-[22px]
            [&_.micro]:bottom-[23px] [&_.micro]:font-[family-name:monospace] [&_.micro]:text-[7px]
            [&_.micro]:text-[#bbc4d1] [@media(max-width:_1100px)]:[grid-template-rows:210px_210px]
            [@media(max-width:_1100px)]:[&_.micro]:text-[6px] [@media(max-width:_760px)]:grid-cols-[1fr]
            [@media(max-width:_760px)]:[grid-template-rows:260px_220px_220px] [@media(max-width:_760px)]:gap-[12px]
            [@media(max-width:_760px)]:[&>button:first-child]:[grid-row:auto]
            [@media(max-width:_760px)]:[&_.micro]:text-[6px] [@media(max-width:_760px)]:[&_.micro]:left-[16px]
            [@media(max-width:_760px)]:[&_.micro]:bottom-[19px]
          `}
          >
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
                <span
                  className={`micro text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6]`}
                >
                  0{i + 1} / {f.view}
                </span>
                <span
                  className={`
                  gallery-plus absolute right-[20px] bottom-[20px] w-[32px] h-[32px] grid place-items-center
                  [border:1px_solid_#ffffff33] text-[#d8dee6] bg-[#06070866] [@media(max-width:_760px)]:right-[15px]
                  [@media(max-width:_760px)]:bottom-[15px] [@media(max-width:_760px)]:w-[28px]
                  [@media(max-width:_760px)]:h-[28px]
                `}
                >
                  <Plus size={22} />
                </span>
              </button>
            ))}
          </div>
        </section>
        <section
          id="specifications"
          className={`
            section py-[110px] px-[var(--gutter)] max-w-[1680px] m-auto velocity-specifications grid
            [grid-template-columns:1fr_1.1fr] gap-[90px] [border-top:1px_solid_var(--line)] pt-[95px] pb-[95px]
            [&_.eyebrow]:font-[family-name:monospace] [&_.eyebrow]:text-[8px] [&_h2]:text-[length:clamp(34px,_3.8vw,_57px)]
            [&_h2]:font-semibold [&_h2]:leading-[1.08] [&_h2]:tracking-[-0.045em] [&_h2>span]:text-[#727c88]
            [&_.concept-note]:font-[family-name:monospace] [&_.concept-note]:text-[7px] [&_.concept-note]:tracking-[0.06em]
            [&_.concept-note]:mt-[30px] [&_.concept-note]:text-[#8b96a5] [&_dl]:m-0 [&_dl>div]:flex [&_dl>div]:items-center
            [&_dl>div]:justify-between [&_dl>div]:[border-bottom:1px_solid_var(--line)] [&_dl>div]:py-[18px]
            [&_dl>div]:px-0 [&_dl>div]:gap-[20px] [&_dl>div:first-child]:[border-top:1px_solid_var(--line)]
            [&_dt]:font-[family-name:monospace] [&_dt]:text-[8px] [&_dt]:tracking-[0.05em] [&_dt]:text-[#788492]
            [&_dd]:text-[11px] [&_dd]:m-0 [&_dd]:text-[#bcc6d2] [&_dd]:text-right [@media(max-width:_1100px)]:gap-[45px]
            [@media(max-width:_760px)]:grid-cols-[1fr] [@media(max-width:_760px)]:gap-[35px]
            [@media(max-width:_760px)]:pt-[65px] [@media(max-width:_760px)]:pb-[65px]
            [@media(max-width:_760px)]:[&_h2]:text-[length:9vw] [@media(max-width:_760px)]:[&_.concept-note]:mt-[20px]
            [@media(max-width:_760px)]:[&_.concept-note]:text-[6px] [@media(max-width:_760px)]:[&_dl>div]:py-[17px]
            [@media(max-width:_760px)]:[&_dl>div]:px-0 [@media(max-width:_760px)]:[&_dt]:text-[7px]
            [@media(max-width:_760px)]:[&_dd]:text-[10px]
          `}
        >
          <div>
            <p
              className={`
              eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
              text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
              [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
              [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
            `}
            >
              05 / BY THE NUMBERS
            </p>
            <h2>
              THE DETAILS.
              <br />
              <span>WITHOUT DISTRACTION.</span>
            </h2>
            <p className={`concept-note text-[10px] text-[var(--muted)]`}>
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
        <section
          id="contact"
          className={`
          section py-[110px] px-[var(--gutter)] max-w-[1680px] m-auto velocity-finale [border-top:1px_solid_var(--line)]
          pt-[110px] pb-[100px] relative isolate overflow-hidden [&>.eyebrow]:font-[family-name:monospace]
          [&>.eyebrow]:text-[8px] [&>h2]:text-[length:clamp(66px,_9.4vw,_145px)] [&>h2]:font-semibold
          [&>h2]:leading-[0.94] [&>h2]:tracking-[-0.065em] [&>h2>span]:text-[#a02c36] [&>div]:mt-[40px] [&>div]:flex
          [&>div]:items-end [&>div]:justify-between [&>div]:gap-[25px] [&>div>p]:text-[12px] [&>div>p]:text-[#8b99ab]
          [@media(max-width:_1100px)]:[&_.button]:text-[9px] [@media(max-width:_760px)]:pt-[65px]
          [@media(max-width:_760px)]:pb-[70px] [@media(max-width:_760px)]:[&>.eyebrow]:text-[7px]
          [@media(max-width:_760px)]:[&>h2]:text-[length:14vw] [@media(max-width:_760px)]:[&>div]:block
          [@media(max-width:_760px)]:[&>div]:mt-[28px] [@media(max-width:_760px)]:[&>div>p]:text-[11px]
          [@media(max-width:_760px)]:[&_.button]:text-[8px] [@media(max-width:_760px)]:[&_.button]:mt-[25px]
          [@media(max-width:_760px)]:[&_.button]:gap-[20px]
        `}
        >
          <span
            className={`
            finale-redline absolute left-[15%] right-[-10%] h-[1px] top-[65%]
            bg-[image:linear-gradient(90deg,_transparent,_#e92d3988,_#e92d39)] [transform:rotate(-9deg)]
            [box-shadow:0_0_30px_4px_#d12c3629] z-[-1]
          `}
          />
          <p
            className={`
            eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
            text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
            [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
            [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
          `}
          >
            THE NEXT CHAPTER IS YOURS.
          </p>
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
            <button
              className={`
              button min-h-[49px] inline-flex items-center justify-center gap-[25px] font-semibold
              [border:1px_solid_var(--line)] bg-[transparent] [transition:background_0.2s,_transform_0.2s,_border-color_0.2s]
              whitespace-nowrap text-[10px] tracking-[0.07em] py-[16px] px-[22px] [&:hover]:[transform:translateY(-2px)]
              [&:hover]:[border-color:var(--text)] [&.primary]:bg-[var(--accent)] [&.primary]:[border-color:var(--accent)]
              [&.primary]:text-[#fff] [&.primary:hover]:bg-[color-mix(in_srgb,_var(--accent)_82%,_white)]
              [&.primary:hover]:[border-color:transparent] [&.light]:bg-[var(--text)] [&.light]:text-[var(--bg)]
              [&.ghost:hover]:bg-[rgba(255,_255,_255,_0.05)] [@media(max-width:_760px)]:gap-[20px] primary
            `}
              onClick={() => setInquiry(true)}
            >
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
          <div
            className={`
            gallery-dialog-content [&>img]:w-full [&>img]:block [&>img]:mt-[25px] [&>img]:mx-0 [&>img]:mb-[20px]
            [&>img]:max-h-[60vh] [&>img]:object-contain [&>.micro]:text-[9px] [&>.micro]:text-[#a2aebb] [&>div]:flex
            [&>div]:items-center [&>div]:justify-between [&>div]:gap-[25px] [&>div>span]:text-[10px]
            [&>div>span]:text-[#9aa8b8] [&>div>.button]:min-h-[40px] [&>div>.button]:py-[10px] [&>div>.button]:px-[16px]
            [@media(max-width:_760px)]:[&>.micro]:text-[8px]
          `}
          >
            <Image
              src={finishes[gallery].image}
              alt={finishes[gallery].alt}
              width={1536}
              height={1024}
            />
            <p
              className={`micro text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6]`}
            >
              {finishes[gallery].name} / {finishes[gallery].view}
            </p>
            <p>
              Original fictional concept view. Use the arrow buttons or your
              keyboard to explore the collection.
            </p>
            <div>
              <button
                className={`
                  button min-h-[49px] inline-flex items-center justify-center gap-[25px] font-semibold
                  [border:1px_solid_var(--line)] bg-[transparent] [transition:background_0.2s,_transform_0.2s,_border-color_0.2s]
                  whitespace-nowrap text-[10px] tracking-[0.07em] py-[16px] px-[22px] [&:hover]:[transform:translateY(-2px)]
                  [&:hover]:[border-color:var(--text)] [&.primary]:bg-[var(--accent)] [&.primary]:[border-color:var(--accent)]
                  [&.primary]:text-[#fff] [&.primary:hover]:bg-[color-mix(in_srgb,_var(--accent)_82%,_white)]
                  [&.primary:hover]:[border-color:transparent] [&.light]:bg-[var(--text)] [&.light]:text-[var(--bg)]
                  [&.ghost:hover]:bg-[rgba(255,_255,_255,_0.05)] [@media(max-width:_760px)]:gap-[20px] ghost
                `}
                onClick={() =>
                  setGallery((gallery + finishes.length - 1) % finishes.length)
                }
                aria-label="Previous gallery image"
              >
                <ArrowLeft size={18} />
              </button>
              <span
                className={`micro text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6]`}
              >
                0{gallery + 1} / 03
              </span>
              <button
                className={`
                  button min-h-[49px] inline-flex items-center justify-center gap-[25px] font-semibold
                  [border:1px_solid_var(--line)] bg-[transparent] [transition:background_0.2s,_transform_0.2s,_border-color_0.2s]
                  whitespace-nowrap text-[10px] tracking-[0.07em] py-[16px] px-[22px] [&:hover]:[transform:translateY(-2px)]
                  [&:hover]:[border-color:var(--text)] [&.primary]:bg-[var(--accent)] [&.primary]:[border-color:var(--accent)]
                  [&.primary]:text-[#fff] [&.primary:hover]:bg-[color-mix(in_srgb,_var(--accent)_82%,_white)]
                  [&.primary:hover]:[border-color:transparent] [&.light]:bg-[var(--text)] [&.light]:text-[var(--bg)]
                  [&.ghost:hover]:bg-[rgba(255,_255,_255,_0.05)] [@media(max-width:_760px)]:gap-[20px] ghost
                `}
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
