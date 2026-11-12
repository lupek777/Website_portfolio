import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {

    const element = root.current;

    if (!element) return;

    const ctx = gsap.context(() => {

      const hero = gsap.timeline({

        defaults: { ease: "power3.out" },

      });

      // Keep the PORTFOLIO heading visible immediately. It is intentionally
      // not included in the GSAP timeline so it never disappears while loading.
      hero
        .fromTo(

          ".hero-model",

          { opacity: 0, y: 70 },

          { opacity: 1, y: 0, duration: 1.2 },

          "-=0.8"

        )

        .fromTo(

          ".hero-bottomline",

          { opacity: 0, y: 20 },

          { opacity: 1, y: 0, duration: 0.8 },

          "-=0.7"

        );

      gsap.fromTo(

        ".intro-copy > *",

        { opacity: 0, x: -45 },

        {

          opacity: 1,

          x: 0,

          stagger: 0.12,

          ease: "none",

          scrollTrigger: {

            trigger: ".intro-section",

            start: "top 65%",

            end: "top 15%",

            scrub: 0.8,

          },

        }

      );

      gsap.fromTo(

        ".intro-video",

        { opacity: 0, scale: 0.65 },

        {

          opacity: 1,

          scale: 1,

          ease: "none",

          scrollTrigger: {

            trigger: ".intro-section",

            start: "top 75%",

            end: "top 20%",

            scrub: 0.8,

          },

        }

      );

      gsap.fromTo(

        ".intro-model",

        { opacity: 0, y: 90 },

        {

          opacity: 1,

          y: 0,

          ease: "none",

          scrollTrigger: {

            trigger: ".intro-section",

            start: "top 70%",

            end: "top 10%",

            scrub: 0.8,

          },

        }

      );

      gsap.fromTo(

        ".intro-footer",

        { opacity: 0, y: 20 },

        {

          opacity: 1,

          y: 0,

          ease: "none",

          scrollTrigger: {

            trigger: ".intro-section",

            start: "top 40%",

            end: "top top",

            scrub: 0.8,

          },

        }

      );

      ScrollTrigger.refresh();

    }, element);

    return () => ctx.revert();

  }, []);

  return (

    <main className="portfolio-home" ref={root}>

      <style>{`

        .portfolio-home {

          width: 100%;

          background: #080808;

          color: #f5f5f5;

          font-family: "Inter", sans-serif;

          overflow: hidden;

        }

        /* =====================================

           SECTION 01 — HERO / COVER

        ===================================== */

        .hero-section {

          position: relative;

          width: 100%;

          height: 100vh;

          height: 100svh;

          min-height: 650px;

          overflow: hidden;

          isolation: isolate;

          background-image:

            linear-gradient(

              180deg,

              rgba(0,0,0,.52) 0%,

              rgba(0,0,0,.08) 35%,

              rgba(0,0,0,.28) 75%,

              rgba(0,0,0,.75) 100%

            ),

            url("/images/dark_silver_motion_blur_hero.jpg");

          background-size: cover;

          background-position: center;

          background-color: #111;

        }

        .hero-section::after {

          content: "";

          position: absolute;

          inset: 0;

          z-index: 0;

          background: linear-gradient(

            90deg,

            rgba(0,0,0,.25),

            transparent 40%,

            rgba(0,0,0,.15)

          );

          pointer-events: none;

        }

        .hero-title {

          opacity: 1;
          visibility: visible;
          position: absolute;

          z-index: 1;

          left: 50%;

          top: 48%;

          transform: translate(-50%, -50%);

          width: max-content;

          max-width: 110%;

          margin: 0;

          font-family: "Bebas Neue", sans-serif;

          font-size: clamp(130px, 28vw, 500px);

          font-weight: 400;

          line-height: .72;

          letter-spacing: -.025em;

          color: #650700;

          white-space: nowrap;

          text-align: center;

          text-transform: uppercase;

          pointer-events: none;

        }

        .hero-model-wrap {

          position: absolute;

          z-index: 3;

          bottom: 0;

          left: 50%;

          transform: translateX(-50%);

          width: min(58vw, 850px);

          height: 91%;

          display: flex;

          justify-content: center;

          align-items: flex-end;

          pointer-events: none;

        }

        .hero-model {

          display: block;

          width: 100%;

          height: 100%;

          object-fit: contain;

          object-position: bottom center;

          filter: drop-shadow(0 10px 35px rgba(0,0,0,.45));

        }

        .hero-bottomline {

          position: absolute;

          z-index: 4;

          bottom: 0;

          left: 0;

          width: 100%;

          padding: 24px 4.7vw 35px;

          display: flex;

          justify-content: center;

          align-items: flex-end;

        }

        .hero-scroll {

          position: absolute;

          z-index: 5;

          left: 50%;

          bottom: 35px;

          transform: translateX(-50%);

          color: rgba(255,255,255,.75);

          font-size: 9px;

          letter-spacing: .18em;

          text-transform: uppercase;

          white-space: nowrap;

        }

        /* =====================================

           SECTION 02 — INTRODUCTION

        ===================================== */

        .intro-section {

          position: relative;

          width: 100%;

          height: 100vh;

          height: 100svh;

          min-height: 680px;

          overflow: hidden;

          isolation: isolate;

          background:

            radial-gradient(

              ellipse at 75% 50%,

              #171717 0%,

              #0b0b0b 50%,

              #060606 100%

            );

        }

        .intro-topline {

          position: absolute;

          z-index: 5;

          top: 0;

          left: 0;

          width: 100%;

          padding: 32px 4.7vw;

          display: flex;

          justify-content: space-between;

          align-items: center;

        }

        .intro-meta {

          font-size: 11px;

          letter-spacing: .04em;

          color: #c8c8c8;

          text-transform: uppercase;

        }

        /* Match the cleaner intro layout in the latest reference */

        .intro-topline,

        .intro-footer {

          display: none;

        }

        .intro-grid {

          position: relative;

          z-index: 2;

          width: 100%;

          height: 100%;

          display: grid;

          grid-template-columns: 56% 44%;

          align-items: center;

          padding: 58px 4.4vw 52px;

        }

        .intro-copy {

          position: relative;

          z-index: 4;

          align-self: center;

          max-width: 900px;

          padding: 0 1.5vw 12px 0;

        }

        .intro-kicker {

          margin: 0 0 30px;

          color: #999;

          font-size: 11px;

          letter-spacing: .2em;

          text-transform: uppercase;

        }

        .intro-title {

          margin: 0 0 42px;

          color: #f5f5f5;

          font-family: "Bebas Neue", sans-serif;

          font-size: clamp(86px, 9.5vw, 158px);

          font-weight: 400;

          line-height: .79;

          letter-spacing: -.015em;

          text-transform: uppercase;

        }

        .intro-title span {

          display: block;

        }

        .intro-title .name-line {

          white-space: nowrap;

          letter-spacing: -.035em;

          font-size: .96em;

        }

        .intro-description {

          max-width: 690px;

          margin: 0;

          color: #c2c2c2;

          font-size: clamp(14px, 1.12vw, 18px);

          line-height: 1.75;

          letter-spacing: .005em;

        }

        .intro-visual {

          position: relative;

          align-self: stretch;

          min-width: 0;

          display: flex;

          justify-content: center;

          align-items: flex-end;

        }

        /* Soft burgundy fade behind the video — no visible rectangle */

        .intro-visual::before {

          content: "";

          position: absolute;

          z-index: 0;

          width: min(49vw, 680px);

          height: min(76vw, 900px);

          left: 50%;

          top: 48%;

          transform: translate(-50%, -50%);

          background: radial-gradient(

            ellipse at center,

            rgba(101, 7, 0, .48) 0%,

            rgba(101, 7, 0, .30) 34%,

            rgba(101, 7, 0, .13) 57%,

            rgba(101, 7, 0, .04) 72%,

            transparent 82%

          );

          filter: blur(28px);

          pointer-events: none;

        }

        /* VIDEO REPLACES THE BURGUNDY CIRCLE */

        .intro-video {

          position: absolute;

          z-index: 0;

          width: min(30vw, 480px);

          max-height: 82svh;

          height: auto;

          aspect-ratio: 9 / 16;

          object-fit: cover;

          border-radius: 0;

          left: 50%;

          top: 48%;

          transform: translate(-50%, -50%);

          background: #111;

        }

        .intro-model-wrap {

          position: relative;

          z-index: 2;

          width: 100%;

          height: 94%;

          display: flex;

          justify-content: center;

          align-items: flex-end;

        }

        .intro-model {

          display: block;

          width: 100%;

          height: 100%;

          object-fit: contain;

          object-position: bottom center;

          filter: drop-shadow(0 12px 32px rgba(0,0,0,.38));

        }

        .intro-footer {

          position: absolute;

          z-index: 5;

          left: 4.7vw;

          right: 4.7vw;

          bottom: 28px;

          display: grid;

          grid-template-columns: 1fr 1fr 1fr;

          align-items: center;

          gap: 20px;

          border-top: 1px solid rgba(255,255,255,.28);

          padding-top: 15px;

        }

        .intro-footer span {

          color: #aaa;

          font-size: 9px;

          letter-spacing: .12em;

          text-transform: uppercase;

        }

        .intro-footer span:nth-child(2) {

          text-align: center;

        }

        .intro-footer span:nth-child(3) {

          text-align: right;

        }

        /* =====================================

           TABLET

        ===================================== */

        @media (max-width: 900px) {

          .hero-title {

            font-size: clamp(120px, 30vw, 300px);

          }

          .hero-model-wrap {

            width: 75vw;

          }

          .intro-grid {

            grid-template-columns: 54% 46%;

            padding: 55px 4vw 45px;

          }

          .intro-title {

            font-size: clamp(62px, 8vw, 100px);

          }

          .intro-description {

            font-size: clamp(13px, 1.35vw, 16px);

          }

          .intro-description {

            max-width: 90%;

          }

          .intro-video {

            width: 40vw;

            max-height: 72svh;

            height: auto;

            aspect-ratio: 9 / 16;

          }

        }

        /* =====================================

           MOBILE

        ===================================== */

        @media (max-width: 600px) {

          .hero-section {

            min-height: 650px;

            background-position: center;

          }

          .hero-title {

            top: 43%;

            font-size: clamp(90px, 25vw, 170px);

          }

          .hero-model-wrap {

            width: 100%;

            height: 78%;

          }

          .hero-bottomline {

            padding: 18px 20px 28px;

          }

          .hero-scroll {

            bottom: 35px;

          }

          .intro-section {

            height: auto;

            min-height: 0;

          }

          .intro-topline {

            padding: 24px 20px;

          }

          .intro-meta {

            font-size: 9px;

          }

          .intro-grid {

            min-height: 0;

            height: auto;

            display: flex;

            flex-direction: column;

            align-items: stretch;

            justify-content: flex-start;

            padding: 105px 20px 35px;

            gap: 0;

          }

          .intro-copy {

            position: relative;

            z-index: 4;

            flex: 0 0 auto;

            width: 100%;

            max-width: none;

            padding: 0;

          }

          .intro-kicker {

            margin-bottom: 20px;

          }

          .intro-title {

            font-size: clamp(44px, 10.5vw, 68px);

            line-height: .8;

            margin-bottom: 24px;

          }

          .intro-description {

            max-width: 100%;

            font-size: 12px;

            line-height: 1.65;

          }

          .intro-visual {

            position: relative;

            z-index: 1;

            width: 100%;

            height: min(145vw, 560px);

            min-height: 360px;

            flex: 0 0 auto;

            margin-top: 32px;

            overflow: visible;

          }

          .intro-visual::before {

            width: min(88vw, 390px);

            height: min(125vw, 560px);

            top: 50%;

            filter: blur(24px);

          }

          .intro-model-wrap {

            position: relative;

            z-index: 2;

            width: 100%;

            height: 100%;

          }

          .intro-video {

            position: absolute;

            z-index: 0;

            width: min(58vw, 280px);

            height: auto;

            max-height: 100%;

            aspect-ratio: 9 / 16;

            object-fit: cover;

            border-radius: 0;

            left: 50%;

            top: 50%;

            transform: translate(-50%, -50%);

          }

          .intro-footer {

            position: relative;

            left: auto;

            right: auto;

            bottom: auto;

            margin: 0 20px 20px;

            grid-template-columns: 1fr 1fr;

            gap: 12px;

          }

          .intro-footer span {

            font-size: 8px;

          }

          .intro-footer span:nth-child(2) {

            text-align: right;

          }

          .intro-footer span:nth-child(3) {

            display: none;

          }

        }

        @media (max-width: 380px) {

          .intro-grid {

            padding-left: 16px;

            padding-right: 16px;

          }

          .intro-title {

            font-size: clamp(40px, 10vw, 52px);

          }

          .intro-description {

            font-size: 12px;

          }

          .intro-visual {

            height: 490px;

            min-height: 0;

          }

          .intro-video {

            width: min(62vw, 250px);

          }

        }

        /* Hide the top metadata and the bottom labels/rule on the intro screen. */

        .intro-topline,

        .intro-footer {

          display: none !important;

        }

        @media (prefers-reduced-motion: reduce) {

          .portfolio-home * {

            scroll-behavior: auto !important;

          }

        }

      `}</style>

      {/* SCREEN 01 — HERO */}

      <section className="hero-section">

        <h1 className="hero-title">PORTFOLIO</h1>

        <div className="hero-model-wrap">

          <img

            className="hero-model"

            src="/images/Photo_3_no_bg.png"

            alt="Maja Siuda — fashion portrait"

            onError={(event) => {

              event.currentTarget.style.visibility = "hidden";

              console.warn("Hero portrait not found. Check image path.");

            }}

          />

        </div>

        <div className="hero-bottomline" />

        <div className="hero-scroll">

          SCROLL TO EXPLORE ↓

        </div>

      </section>

      {/* SCREEN 02 — INTRODUCTION */}

      <section className="intro-section">

        <div className="intro-topline">

          <span className="intro-meta">

            CREATIVE PORTFOLIO

          </span>

          <span className="intro-meta">

            MAJA SIUDA / 2026

          </span>

        </div>

        <div className="intro-grid">

          <div className="intro-copy">

            <p className="intro-kicker">

              ABOUT THE DESIGNER / 01

            </p>

            <h2 className="intro-title">

              <span>HELLO, I'M</span>

              <span className="name-line">MAJA SIUDA</span>

            </h2>

            <p className="intro-description">

              I’m a fashion creative with a background in business

              management, currently pursuing a Master’s in Fashion

              Marketing, Communication and Event Planning at LCI

              Barcelona.

              <br />

              <br />

              My work combines hands-on design and sewing with visual

              storytelling, creative concepts and project organization.

            </p>

          </div>

          <div className="intro-visual">

            <video

              className="intro-video"

              src="/images/video_1.mp4"

              autoPlay

              muted

              loop

              playsInline

              aria-label="Decorative fashion video"

            />

            <div className="intro-model-wrap">

              <img

                className="intro-model"

                src="/images/Photo_4_no_bg.png"

                alt="Maja Siuda — editorial portrait"

                onError={(event) => {

                  event.currentTarget.style.visibility = "hidden";

                  console.warn("Introduction portrait not found. Check image path.");

                }}

              />

            </div>

          </div>

        </div>

        <div className="intro-footer">

          <span>GARMENT DESIGN</span>

          <span>CREATIVE DIRECTION</span>

          <span>EDITORIAL / FASHION</span>

        </div>

      </section>

    </main>

  );

}
