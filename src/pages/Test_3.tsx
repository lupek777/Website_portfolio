
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    number: "01",
    label: "CRAFTSMANSHIP",
    title: "GARMENT DESIGN & CRAFTSMANSHIP",
    image: "/images/BLACK.PNG",
    imageAlt: "Black fashion editorial look",
    side: "left",
    description:
      "Turning conceptual ideas into distinctive garments through fashion design, pattern-making, draping and sewing. Exploring unconventional materials, textures and construction techniques.",
    skills: [
      "Collection concept & moodboarding",
      "Pattern drafting & draping",
      "Textile selection & garment construction",
    ],
  },
  {
    number: "02",
    label: "RUNWAY & PRODUCTION",
    title: "RUNWAY & EVENT PRODUCTION",
    image: "/images/WHITE.PNG",
    imageAlt: "White fashion editorial look",
    side: "right",
    description:
      "Bringing fashion presentations to life through runway planning, event coordination and production. Connecting creative vision with precise organisation and backstage execution.",
    skills: [
      "Runway planning & show coordination",
      "Event logistics & scheduling",
      "Backstage and team management",
    ],
  },
  {
    number: "03",
    label: "BRAND MANAGEMENT",
    title: "BUSINESS & BRAND MANAGEMENT",
    image: "/images/Photo_3.PNG",
    imageAlt: "Fashion editorial look 3",
    side: "left",
    description:
      "Building distinctive fashion identities through brand strategy, visual communication and market research. Aligning creative concepts with a clear and consistent brand image.",
    skills: [
      "Brand identity & positioning",
      "Fashion marketing & communication",
      "Trend research & brand development",
    ],
  },
  {
    number: "04",
    label: "ART DIRECTION",
    title: "EDITORIAL & SHOOT ART DIRECTION",
    image: "/images/Photo_4.PNG",
    imageAlt: "Fashion editorial look 4",
    side: "right",
    description:
      "Developing visual narratives for fashion editorials and photoshoots. Combining references, styling, composition and creative direction into a cohesive visual concept.",
    skills: [
      "Editorial concept & moodboards",
      "Photoshoot planning & styling",
      "Visual storytelling & art direction",
    ],
  },
];

export default function Test_3() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const element = root.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const panels =
        gsap.utils.toArray<HTMLElement>(".test3-ability");

      panels.forEach((panel) => {
        const image = panel.querySelector<HTMLElement>(".test3-model");
        const content =
          panel.querySelector<HTMLElement>(".test3-content");
        const label =
          panel.querySelector<HTMLElement>(".test3-index");
        const title =
          panel.querySelector<HTMLElement>(".test3-title");
        const description =
          panel.querySelector<HTMLElement>(".test3-description");
        const items = panel.querySelectorAll<HTMLElement>(
          ".test3-list li"
        );

        const fromLeft = panel.classList.contains("test3-left");

        gsap.fromTo(
          image,
          {
            x: fromLeft ? -160 : 160,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top 85%",
              end: "top 30%",
              scrub: 1,
            },
          }
        );

        gsap.fromTo(
          content,
          {
            x: fromLeft ? 70 : -70,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top 82%",
              end: "top 35%",
              scrub: 1,
            },
          }
        );

        gsap.fromTo(
          [label, title],
          {
            y: 35,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top 78%",
              end: "top 45%",
              scrub: 1,
            },
          }
        );

        gsap.fromTo(
          description,
          {
            y: 24,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top 70%",
              end: "top 40%",
              scrub: 1,
            },
          }
        );

        gsap.fromTo(
          items,
          {
            x: 24,
            opacity: 0.2,
          },
          {
            x: 0,
            opacity: 1,
            stagger: 0.04,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top 62%",
              end: "bottom 70%",
              scrub: 0.6,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, element);

    return () => ctx.revert();
  }, []);

  return (
    <main className="test3-page" ref={root}>
      <style>{`
        .test3-page {
          width: 100%;
          overflow: hidden;
          background: #050505;
          color: #f5f5f5;
          font-family: "Inter", sans-serif;
        }

        .test3-ability {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
          align-items: center;
          gap: clamp(28px, 5vw, 90px);
          min-height: 100vh;
          padding: 7vh 5.5vw;
          background: #050505;
          border-bottom: 1px solid #151515;
        }

        .test3-model-wrap {
          position: relative;
          min-width: 0;
          height: 78vh;
          max-height: 850px;
          overflow: hidden;
          background: #050505;
        }

        .test3-model {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          will-change: transform, opacity;
        }

        .test3-content {
          width: 100%;
          min-width: 0;
          max-width: 1100px;
          padding: 5vh 0;
          align-self: center;
          will-change: transform, opacity;
        }

        .test3-index {
          margin: 0 0 28px;
          color: #929292;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          will-change: transform, opacity;
        }

        .test3-title {
          font-family: "Bebas Neue", sans-serif;
          font-size: clamp(48px, 6vw, 100px);
          font-weight: 400;
          font-style: normal;
          letter-spacing: 0.015em;
          line-height: 0.98;
          text-transform: uppercase;
          overflow-wrap: anywhere;
          margin: 0 0 36px;
          color: #f5f5f5;
          will-change: transform, opacity;
        }

        .test3-description {
          margin: 0 0 36px;
          color: #bdbdbd;
          font-size: clamp(18px, 1.65vw, 27px);
          font-weight: 400;
          line-height: 1.65;
          letter-spacing: -0.025em;
          will-change: transform, opacity;
        }

        .test3-list {
          padding: 0;
          margin: 0;
          list-style: none;
          border-top: 1px solid #383838;
        }

        .test3-list li {
          display: grid;
          grid-template-columns: 34px minmax(0, 1fr);
          align-items: center;
          gap: 12px;
          min-height: 58px;
          padding: 13px 0;
          border-bottom: 1px solid #383838;
          color: #f0f0f0;
          font-size: clamp(13px, 1.1vw, 18px);
          font-weight: 400;
          line-height: 1.5;
          will-change: transform, opacity;
        }

        .test3-number {
          color: #888;
          font-size: 13px;
          font-variant-numeric: tabular-nums;
        }

        .test3-right {
          grid-template-columns: minmax(0, 1.18fr) minmax(0, 0.82fr);
        }

        .test3-right .test3-model-wrap {
          grid-column: 2;
          grid-row: 1;
        }

        .test3-right .test3-content {
          grid-column: 1;
          grid-row: 1;
        }

        .test3-caption {
          position: absolute;
          left: 14px;
          bottom: 14px;
          margin: 0;
          color: #999;
          font-size: 9px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        @media (max-width: 1100px) {
          .test3-ability,
          .test3-ability.test3-right {
            gap: 28px;
            padding: 5vh 4vw;
          }

          .test3-title {
            font-size: clamp(42px, 5.4vw, 70px);
          }

          .test3-description {
            font-size: clamp(17px, 1.8vw, 22px);
          }

          .test3-index {
            margin-bottom: 22px;
          }

          .test3-title {
            margin-bottom: 26px;
          }

          .test3-list li {
            min-height: 50px;
            font-size: 13px;
          }
        }

        @media (max-width: 600px) {
          .test3-ability,
          .test3-ability.test3-right {
            min-height: auto;
            grid-template-columns: minmax(0, 1fr);
            gap: 24px;
            padding: 32px 20px 48px;
          }

          .test3-model-wrap,
          .test3-right .test3-model-wrap {
            grid-column: 1;
            grid-row: 1;
            height: 48vh;
            max-height: 520px;
          }

          .test3-content,
          .test3-right .test3-content {
            grid-column: 1;
            grid-row: 2;
            padding: 12px 0;
          }

          .test3-index {
            font-size: 10px;
            margin-bottom: 20px;
          }

          .test3-title {
            font-size: clamp(46px, 12vw, 72px);
            line-height: 0.98;
            margin-bottom: 24px;
          }

          .test3-description {
            font-size: 18px;
            line-height: 1.6;
            margin-bottom: 28px;
          }

          .test3-list li {
            grid-template-columns: 28px minmax(0, 1fr);
            gap: 10px;
            min-height: 52px;
            padding: 12px 0;
            font-size: 13px;
          }

          .test3-number {
            font-size: 12px;
          }

          .test3-caption {
            left: 8px;
            bottom: 8px;
            font-size: 7px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .test3-model,
          .test3-content,
          .test3-index,
          .test3-title,
          .test3-description,
          .test3-list li {
            will-change: auto;
          }
        }
      `}</style>

      {sections.map((section) => (
        <section
          className={`test3-ability ${
            section.side === "right" ? "test3-right" : "test3-left"
          }`}
          key={section.number}
        >
          <div className="test3-model-wrap">
            <img
              className="test3-model"
              src={section.image}
              alt={section.imageAlt}
            />
            <p className="test3-caption">
              MAJA SIUDA — FASHION PORTFOLIO
            </p>
          </div>

          <div className="test3-content">
            <p className="test3-index">
              {section.number} / {section.label}
            </p>

            <h2 className="test3-title">{section.title}</h2>

            <p className="test3-description">
              {section.description}
            </p>

            <ul className="test3-list">
              {section.skills.map((skill, index) => (
                <li key={skill}>
                  <span className="test3-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </main>
  );
}
