import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Media from "../components/Media";
import { photos } from "../data/photos";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".edu-title", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.utils.toArray<HTMLElement>(".edu-row").forEach((row, index) => {
        const image = row.querySelector(".media");
        const text = row.querySelector("div");

        if (image) {
          gsap.fromTo(
            image,
            {
              x: index % 2 === 0 ? -100 : 100,
              opacity: 0,
              scale: 0.92,
            },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: row,
                start: "top 80%",
                once: true,
              },
            }
          );
        }

        if (text) {
          gsap.fromTo(
            text,
            {
              y: 65,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              delay: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: row,
                start: "top 80%",
                once: true,
              },
            }
          );
        }
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="edu" ref={pageRef}>
      <h1 className="edu-title">EDUCATION</h1>

      <article className="edu-row">
        <Media
          src={photos.educationLCI}
          alt="LCI Barcelona building"
          ratio="16 / 10"
        />

        <div className="edu-copy">
          <p className="edu-index">01 / CURRENT STUDIES</p>
          <h2>LCI Barcelona</h2>
          <p>
            Currently pursuing a Master’s in Fashion Marketing, Communication
            and Event Planning at LCI Barcelona, focusing on the intersection
            of fashion, brand strategy, creative communication, and event
            production. Building on my background in business management and
            hands-on experience in fashion, I aim to deepen my understanding
            of the industry and develop my skills in bringing creative
            concepts to life.
          </p>
        </div>
      </article>

      <article className="edu-row rev">
        <div className="edu-copy">
          <p className="edu-index">02 / BACHELOR'S DEGREE</p>
          <h2>Cracow University of Economics</h2>
          <p>
            Graduated with a BA in Modern Business Management, taught in
            English. My bachelor’s thesis explored the role of creative
            leadership and strategic decision-making in luxury fashion,
            comparing Jonathan Anderson at Loewe and Christian Dior, and
            examining their impact on brand identity and market success.
          </p>
        </div>

        <Media
          src={photos.educationCracow}
          alt="Cracow University of Economics building"
          ratio="16 / 10"
        />
      </article>
    </main>
  );
}