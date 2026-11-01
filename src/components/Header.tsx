import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const isTransparentPage =
    location.pathname === "/" || location.pathname === "/projects";

  return (
    <header className={`header ${isTransparentPage ? "header--hero" : ""}`}>
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
