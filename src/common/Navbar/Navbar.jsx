import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="container nav-container">
          <NavLink exact to="/" className="nav-logo">
            <h1>Quad Loisirs</h1>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Accueil
                
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/randos"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Randos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/prices"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Tarifs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/gallery"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Galerie
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
