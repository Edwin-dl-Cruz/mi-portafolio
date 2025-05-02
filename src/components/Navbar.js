import { Link } from "react-router-dom";
//import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container">
        <Link className="navbar-brand" to="/">
          MiPortafolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                smooth
                to="/About"
                className="nav-link"
                scroll={(el) =>
                  el.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  })
                }
              >
                Sobre mí
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth to="/Skills" className="nav-link">
                Habilidades
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth to="/Projects" className="nav-link">
                Proyectos
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth to="/Hobbies" className="nav-link">
                Hobbies
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth to="/Contact" className="nav-link">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
