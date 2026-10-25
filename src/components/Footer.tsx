import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <nav aria-label="Footer" className="footer-nav">
          <Link to="/experience">EXPERIENCE</Link>
          <Link to="/education">EDUCATION</Link>
          <Link to="/projects">PROJECTS</Link>
          <Link to="/contact">CONTACT</Link>
          <Link to="/#about">ABOUT</Link>
        </nav>
        <SocialLinks />
        <p className="footer-name" aria-hidden="true">MAJA SIUDA</p>
      </div>
    </footer>
  );
}
