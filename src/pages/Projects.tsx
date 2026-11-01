
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Media from "../components/Media";
import ProjectCarousel from "../components/ProjectCarousel";
import { photos } from "../data/photos";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  ["8", "Original looks"],
  [">1 thousand", "People watching the fashion show"],
  [">10 thousand", "Views on the promotion video"],
  ["3 months", "Of designing, sewing and promoting collection"],
];

const events = [
  ["Fashion Night UEK", "2024"],
  ["Fashion Night UEK", "2025"],
  ["Wrocław Fashion Week", "2025"],
];

const g = photos.exhaleGallery;

export default function Projects() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // --------------------------------------------------
      // HERO SECTIONS — CINEMATIC IMAGE AND TEXT REVEAL
      // --------------------------------------------------

      gsap.utils
        .toArray<HTMLElement>(".coll-hero")
        .forEach((hero) => {
          const image = hero.querySelector(".media");
          const title = hero.querySelector("h1");
          const description = hero.querySelector("p");

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: hero,
              start: "top 85%",
              once: true,
            },
          });

          if (image) {
            tl.fromTo(
              image,
              {
                opacity: 0,
                scale: 1.12,
                y: 50,
              },
              {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out",
              }
            );
          }

          if (title) {
            tl.fromTo(
              title,
              {
                opacity: 0,
                y: 90,
                clipPath: "inset(0 0 100% 0)",
              },
              {
                opacity: 1,
                y: 0,
                clipPath: "inset(0 0 0% 0)",
                duration: 1.1,
                ease: "power4.out",
              },
              "-=0.9"
            );
          }

          if (description) {
            tl.fromTo(
              description,
              {
                opacity: 0,
                y: 35,
              },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
              },
              "-=0.65"
            );
          }
        });

      // --------------------------------------------------
      // EXHALE — TWO PHOTOS SLIDE FROM OPPOSITE SIDES
      // --------------------------------------------------

      gsap.utils
        .toArray<HTMLElement>(
          ".project-two-photos:not(.renaissance-photo) .media"
        )
        .forEach((image, index) => {
          gsap.fromTo(
            image,
            {
              x: index === 0 ? -200 : 200,
              y: 70,
              opacity: 0,
              scale: 0.88,
              rotate: index === 0 ? -3 : 3,
            },
            {
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              rotate: 0,
              duration: 1.5,
              ease: "power4.out",
              scrollTrigger: {
                trigger: image,
                start: "top 90%",
                once: true,
              },
            }
          );
        });

      // --------------------------------------------------
      // STATS — HEADING, NUMBERS AND PHOTOS
      // --------------------------------------------------

      gsap.utils.toArray<HTMLElement>(".stats").forEach((section) => {
        const heading = section.querySelector("h2");
        const rows = section.querySelectorAll("dl > div");
        const images = section.querySelectorAll(":scope > .media");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true,
          },
        });

        if (heading) {
          tl.fromTo(
            heading,
            {
              opacity: 0,
              x: -70,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.9,
              ease: "power3.out",
            }
          );
        }

        if (rows.length) {
          tl.fromTo(
            rows,
            {
              opacity: 0,
              y: 55,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              stagger: 0.16,
              ease: "power3.out",
            },
            "-=0.4"
          );
        }

        if (images.length) {
          tl.fromTo(
            images,
            {
              opacity: 0,
              y: 110,
              scale: 0.9,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.2,
              stagger: 0.2,
              ease: "power4.out",
            },
            "-=0.65"
          );
        }
      });

      // --------------------------------------------------
      // RED RENAISSANCE — FULL WIDTH PHOTO
      // --------------------------------------------------

      gsap.fromTo(
        ".renaissance-photo .media",
        {
          y: 200,
          opacity: 0,
          scale: 0.9,
          clipPath: "inset(15% 8% 15% 8%)",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.7,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".renaissance-photo",
            start: "top 85%",
            once: true,
          },
        }
      );

      // --------------------------------------------------
      // CAROUSELS — EDITORIAL REVEAL
      // --------------------------------------------------

      gsap.utils
        .toArray<HTMLElement>(".carousel-sec")
        .forEach((section) => {
          const content = section.firstElementChild;

          if (!content) return;

          gsap.fromTo(
            content,
            {
              opacity: 0,
              y: 100,
              scale: 0.94,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.4,
              ease: "power4.out",
              scrollTrigger: {
                trigger: section,
                start: "top 88%",
                once: true,
              },
            }
          );
        });

      // --------------------------------------------------
      // FASHION EVENTS — TITLE, IMAGE AND EVENT LIST
      // --------------------------------------------------

      gsap.utils.toArray<HTMLElement>(".events").forEach((section) => {
        const heading = section.querySelector("h2");
        const image = section.querySelector(".media");
        const listItems = section.querySelectorAll("ul li");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            once: true,
          },
        });

        if (heading) {
          tl.fromTo(
            heading,
            {
              opacity: 0,
              x: -80,
              letterSpacing: "0.3em",
            },
            {
              opacity: 1,
              x: 0,
              letterSpacing: "normal",
              duration: 1,
              ease: "power4.out",
            }
          );
        }

        if (image) {
          tl.fromTo(
            image,
            {
              opacity: 0,
              scale: 0.88,
              y: 80,
            },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 1.2,
              ease: "power4.out",
            },
            "-=0.5"
          );
        }

        if (listItems.length) {
          tl.fromTo(
            listItems,
            {
              opacity: 0,
              x: 90,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              stagger: 0.2,
              ease: "power3.out",
            },
            "-=0.7"
          );
        }
      });

      // --------------------------------------------------
      // GENERAL SECTION REVEALS
      // --------------------------------------------------

      gsap.utils
        .toArray<HTMLElement>(
          ".coll-hero, .project-two-photos, .stats, .carousel-sec, .events"
        )
        .forEach((section) => {
          gsap.fromTo(
            section,
            {
              backgroundPosition: "50% 10%",
            },
            {
              backgroundPosition: "50% 50%",
              duration: 1.5,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef}>
      {/* FIRST PROJECT — EXHALE OF DYSTOPIA */}

      <section className="coll-hero" id="exhale">
        <Media
          src={photos.exhaleHero}
          alt="Exhale of dystopia — fashion show"
          ratio="16 / 9"
          className="bg"
          eager
        />

        <div className="coll-text">
          <h1>Exhale of dystopia</h1>
          <p>
            A post-apocalyptic-inspired collection exploring contrasts between
            cold metal and soft fabrics, past and future. Each look is
            sculptural, using reclaimed elements as commentary, while a palette
            of grays, metallics, and black evokes a dark, hypnotic beauty.
          </p>
        </div>
      </section>

      <section className="light project-two-photos">
        <Media
          src={g[0]}
          alt="Exhale of dystopia fashion editorial"
          ratio="3 / 2"
          className="project-photo-wide"
        />

        <Media
          src={g[1]}
          alt="Detail of the collection"
          ratio="3 / 2"
          className="project-photo-narrow"
        />
      </section>

      <section className="stats">
        <div>
          <h2>The collection in numbers</h2>

          <dl>
            {stats.map(([v, l]) => (
              <div key={l}>
                <dt>{v}</dt>
                <dd>{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Media
          src={photos.exhaleStat1}
          alt="Models wearing the collection"
          ratio="3 / 4.6"
        />

        <Media
          src={photos.exhaleStat2}
          alt="Black-and-white editorial photograph"
          ratio="3 / 4.6"
          className="lower"
        />
      </section>

      <section className="light carousel-sec">
        <ProjectCarousel
          images={photos.exhaleCarousel}
          label="Exhale of dystopia photographs"
          altPrefix="Exhale of dystopia"
        />
      </section>

      {/* SECOND PROJECT — RED RENAISSANCE */}

      <section className="coll-hero" id="renaissance">
        <Media
          src={photos.renaissanceHero}
          alt="Red Renaissance — fashion show"
          ratio="16 / 9"
          className="bg"
        />

        <div className="coll-text">
          <h1>Red Renaissance</h1>
          <p>
            A modernist take on elegance inspired by black-and-white television.
            Timeless pieces in tulle, denim, and heavy fabrics gain fresh,
            unconventional shapes and details, making each garment feel both
            artistic and timeless.
          </p>
        </div>
      </section>

      {/* RED RENAISSANCE — ONE FULL-WIDTH PHOTO */}

      <section className="light project-two-photos renaissance-photo">
        <Media
          src="/images/Photo_24.JPG"
          alt="Red Renaissance fashion editorial"
          ratio="3 / 2"
          className="renaissance-full-image"
        />
      </section>

      {/* RED RENAISSANCE — PRODUCTION & CREATIVE DIRECTION */}

      <section className="stats renaissance-stats">
        <div>
          <h2>Production & Creative Direction</h2>

          <dl>
            <div>
              <dt>15+</dt>
              <dd>Team Members Coordinated</dd>
              <p>
                Full production team management during fashion shows and
                editorial shoots.
              </p>
            </div>

            <div>
              <dt>100%</dt>
              <dd>On-Time & Within Budget</dd>
              <p>
                Strategic call sheet scheduling, logistics coordination, and
                budget management for fashion events such as Cracow Fashion
                Day.
              </p>
            </div>

            <div>
              <dt>10</dt>
              <dd>Looks on a Runway</dd>
            </div>
          </dl>
        </div>

        <Media
          src={photos.renaissanceComp[1]}
          alt="Red Renaissance collection photograph"
          ratio="3 / 4.6"
        />

        <Media
          src={photos.renaissanceComp[2]}
          alt="Red Renaissance fashion portrait"
          ratio="3 / 4.6"
          className="lower"
        />
      </section>

      <section className="light carousel-sec">
        <ProjectCarousel
          images={photos.renaissanceCarousel}
          label="Red Renaissance photographs"
          altPrefix="Red Renaissance"
        />
      </section>

      {/* EVENTS — ORIGINAL SECTION */}

      <section className="light events">
        <div>
          <h2>FASHION EVENTS</h2>

          <Media
            src={photos.fashionEvents}
            alt="Fashion show"
            ratio="3 / 2"
          />
        </div>

        <ul>
          {events.map(([n, y], i) => (
            <li key={i}>
              <span>{n}</span>
              <time>{y}</time>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}