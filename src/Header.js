import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">🔨 Trouve Ton Artisans</Link>
      </div>
      <nav className="nav-links">
        <Link to="/batiment">Bâtiment</Link>
        <Link to="/services">Services</Link>
        <Link to="/fabrication">Fabrication</Link>
        <Link to="/alimentation">Alimentation</Link>
      </nav>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Rechercher un artisan..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </header>
  );
};

export default Header;
