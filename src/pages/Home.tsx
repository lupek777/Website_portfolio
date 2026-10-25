import { Link } from "react-router-dom";
import Media from "../components/Media";
import Marquee from "../components/Marquee";
import { photos } from "../data/photos";

const projects = [
  { n: "01", t: "Fashion Design", src: photos.homeProject1, ratio: "3 / 4", cls: "p1" },
  { n: "02", t: "Sewing and Patchworking", src: photos.homeProject2, ratio: "4 / 5", cls: "p2" },
  { n: "03", t: "Creative Direction", src: photos.homeProject3, ratio: "3 / 2", cls: "p3" },
  { n: "04", t: "Event Planning", src: photos.homeProject4, ratio: "4 / 5", cls: "p4" },
  { n: "05", t: "Styling", src: photos.homeProject5, ratio: "3 / 4", cls: "p5" },
  { n: "06", t: "Fashion Management", src: photos.homeProject6, ratio: "3 / 2", cls: "p6" },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1 className="mega">MAJA SIUDA</h1>
        <div className="hero-imgs">
          <Media src={photos.homeHeroLeft} alt="Fashion editorial — left" ratio="3 / 4" className="h-side" eager />
          <Media src={photos.homeHeroCenter} alt="Fashion editorial — centre" ratio="3 / 4.6" className="h-center" eager />
          <Media src={photos.homeHeroRight} alt="Fashion editorial — right" ratio="3 / 4" className="h-side" eager />
        </div>
      </section>

      <div className="home-divider" aria-hidden="true" />
      
      <section id="about" className="about">
        <h2>ABOUT ME</h2>
        <p>I’m a fashion creative with a background in business management, currently pursuing a Master’s in Fashion Marketing, Communication and Event Planning at LCI Barcelona.</p>
        <p>My work combines hands-on design and sewing with visual storytelling, creative concepts and project organization.</p>
      </section>

      <Marquee />

      
      <section className="gallery editorial-gallery" aria-label="Creative disciplines">
      <div className="gallery-skills">
      {projects.slice(0, 3).map((p) => (
      <Link to="/projects" key={p.n} className="skill-link">
        <span className="skill-number">{p.n}</span>
        <span className="skill-title">{p.t}</span>
        </Link>
       ))}
       </div>

  {projects.map((p) => (
    <Link
      to="/projects"
      key={p.n}
      className={`g-item editorial-item ${p.cls}`}
      aria-label={`${p.n} ${p.t}`}
    >
      <Media src={p.src} alt={p.t} ratio={p.ratio} />
      <span className="image-number">{p.n}</span>

      {p.n === "01" && (
        <Media
          src={photos.homeProject1b}
          alt="Fashion Design — editorial photograph"
          ratio="3 / 4"
          className="g-extra"
        />
      )}
       </Link>
        ))}
      </section>
    </>
  );
}
