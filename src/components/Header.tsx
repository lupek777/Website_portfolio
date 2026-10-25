
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav aria-label="Main" className="header-nav">
        <NavLink to="/experience">EXPERIENCE</NavLink>
        <NavLink to="/projects">PROJECTS</NavLink>
        <NavLink to="/education">EDUCATION</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </nav>

      <Link to="/" className="brand">
        MAJA SIUDA
      </Link>
    </header>
  );
}
