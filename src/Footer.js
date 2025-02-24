import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/mentions-legales">Mentions légales</Link>
        <Link to="/donnees-personnelles">Données personnelles</Link>
        <Link to="/accessibilite">Accessibilité</Link>
        <Link to="/cookies">Cookies</Link>
      </div>
      <div className="footer-contact">
        <p>101 cours Charlemagne</p>
        <p>CS 20033</p>
        <p>69269 LYON CEDEX 02, France</p>
        <p>📞 +33 (0)4 26 73 40 00</p>
      </div>
    </footer>
  );
};

export default Footer;
