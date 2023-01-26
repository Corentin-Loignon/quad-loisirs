import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <Link to="/" className="footer__logo">
        Quad Loisirs
      </Link>

      <ul className="permalinks">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/randos">Randos</Link>
        </li>
        <li>
          <Link to="/prices">Tarifs</Link>
        </li>
        <li>
          <Link to="/gallery">Galerie</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>


      <div className="footer__copyright">
        <small>&copy; 2023 Corentin Loignon. Tous droits réservés.</small>
      </div>
    </footer>
  );
};

export default Footer;
