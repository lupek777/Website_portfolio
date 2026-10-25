import Media from "../components/Media";
import ProjectCarousel from "../components/ProjectCarousel";
import { photos } from "../data/photos";

const stats = [
  ["8", "Original looks"],
  [">1 thousand", "People watching the fashion show"],
  [">10 thousand", "Views on the promotion video"],
  ["3 months", "Of designing, sewing and promoting collection"],
];
const events = [["Fashion Night UEK", "2024"], ["Fashion Night UEK", "2025"], ["Wrocław Fashion Week", "2025"]];
const g = photos.exhaleGallery;

export default function Projects() {
  return (
    <>
      <section className="coll-hero" id="exhale">
        <Media src={photos.exhaleHero} alt="Exhale of dystopia — fashion show" ratio="16 / 9" className="bg" eager />
        <div className="coll-text">
          <h1>Exhale of dystopia</h1>
          <p>A post-apocalyptic-inspired collection exploring contrasts between cold metal and soft fabrics, past and future. Each look is sculptural, using reclaimed elements as commentary, while a palette of grays, metallics, and black evokes a dark, hypnotic beauty.</p>
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
          <dl>{stats.map(([v, l]) => <div key={l}><dt>{v}</dt><dd>{l}</dd></div>)}</dl>
        </div>
        <Media src={photos.exhaleStat1} alt="Models wearing the collection" ratio="3 / 4.6" />
        <Media src={photos.exhaleStat2} alt="Black-and-white editorial photograph" ratio="3 / 4.6" className="lower" />
      </section>

      <section className="light carousel-sec">
        <ProjectCarousel images={photos.exhaleCarousel} label="Exhale of dystopia photographs" altPrefix="Exhale of dystopia" />
      </section>

      <section className="coll-hero" id="renaissance">
        <Media src={photos.renaissanceHero} alt="Red Renaissance — fashion show" ratio="16 / 9" className="bg" />
        <div className="coll-text">
          <h1>Red Renaissance</h1>
          <p>A modernist take on elegance inspired by black-and-white television. Timeless pieces in tulle, denim, and heavy fabrics gain fresh, unconventional shapes and details, making each garment feel both artistic and timeless.</p>
        </div>
      </section>

      <section className="ren-comp">
        <Media src={photos.renaissanceComp[0]} alt="Runway photograph" ratio="3 / 4" className="r1" />
        <div className="process">
          <p>01. Research &amp; Concept Development</p>
          <p>02. Textile &amp; Material Exploration</p>
          <p className="mat"><strong>MATERIALS:</strong><br />Tulle · Denim · Heavy fabrics</p>
          <p>03. Garment Construction</p>
          <p>04. Styling &amp; Final Presentation</p>
        </div>
        <Media src={photos.renaissanceComp[1]} alt="Black-and-white backstage portrait" ratio="3 / 4.4" className="r2" />
        <Media src={photos.renaissanceComp[2]} alt="Fashion portrait from the collection" ratio="3 / 4" className="r3" />
      </section>

      <section className="light carousel-sec">
        <ProjectCarousel images={photos.renaissanceCarousel} label="Red Renaissance photographs" altPrefix="Red Renaissance" />
      </section>

      <section className="light events">
        <div>
          <h2>FASHION EVENTS</h2>
          <Media src={photos.fashionEvents} alt="Fashion show" ratio="3 / 2" />
        </div>
        <ul>{events.map(([n, y], i) => <li key={i}><span>{n}</span><time>{y}</time></li>)}</ul>
      </section>
    </>
  );
}
