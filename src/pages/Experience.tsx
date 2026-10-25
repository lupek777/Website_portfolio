import { Link } from "react-router-dom";
import Media from "../components/Media";
import VideoPlayer from "../components/VideoPlayer";
import { photos } from "../data/photos";
import { media } from "../data/media";

const hard = ["Fashion Design & Garment Construction","Sewing & Pattern-Making","Fashion Sketching & Concept Development","Fabric Selection & Material Experimentation","Collection Development","Styling & Visual Research","Fashion Event Production","Creative Direction & Photoshoot Planning","Project Coordination & Logistics","Fashion Marketing & Visual Communication"];
const soft = ["Excellent Communication & Interpersonal Skills","Teamwork & Collaboration","Strong Organizational Skills","Creative Problem-Solving","Adaptability & Flexibility","Initiative & Proactive Approach","Time Management & Multitasking","Attention to Detail","Relationship Building & Networking","Working Under Pressure"];

export default function Experience() {
  return (
    <>
      <section className="exp">
        <div className="exp-video"><VideoPlayer src={media.experienceVideo} poster={photos.experienceVideoPoster} /></div>
        <h1 className="exp-title">EXPERIENCE</h1>
        <Media src={photos.experienceFashionImage} alt="Fashion photograph" ratio="4 / 5" className="exp-mid" />
        <div className="exp-right">
          <Media src={photos.experienceStylingImage} alt="Styling photograph" ratio="3 / 4.2" />
          <Link to="/projects" className="btn">SEE THE PROJECTS</Link>
        </div>
      </section>
      <section className="abilities">
        <h2>ABILITIES</h2>
        <div className="panels">
          <div className="panel"><h3>HARD SKILLS</h3><ul>{hard.map((s) => <li key={s}>{s}</li>)}</ul></div>
          <div className="panel"><h3>SOFT SKILLS</h3><ul>{soft.map((s) => <li key={s}>{s}</li>)}</ul></div>
        </div>
      </section>
    </>
  );
}
