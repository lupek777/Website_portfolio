import Media from "../components/Media";
import { photos } from "../data/photos";
export default function Education() {
  return (
    <section className="edu">
      <h1 className="edu-title">EDUCATION</h1>
      <article className="edu-row">
        <Media src={photos.educationLCI} alt="LCI Barcelona building" ratio="16 / 10" />
        <div>
          <h2>LCI Barcelona</h2>
          <p>Currently pursuing a Master’s in Fashion Marketing, Communication and Event Planning at LCI Barcelona, focusing on the intersection of fashion, brand strategy, creative communication, and event production. Building on my background in business management and hands-on experience in fashion, I aim to deepen my understanding of the industry and develop my skills in bringing creative concepts to life.</p>
        </div>
      </article>
      <article className="edu-row rev">
        <div>
          <h2>Cracow University of Economics</h2>
          <p>Graduated with a BA in Modern Business Management, taught in English. My bachelor’s thesis explored the role of creative leadership and strategic decision-making in luxury fashion, comparing Jonathan Anderson at Loewe and Christian Dior, and examining their impact on brand identity and market success.</p>
        </div>
        <Media src={photos.educationCracow} alt="Cracow University of Economics building" ratio="16 / 10" />
      </article>
    </section>
  );
}
