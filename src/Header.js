import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); 
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const slug = searchTerm
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") 
      .replace(/&/g, "et")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    if (slug) {
      navigate(`/fiche/${slug}`);
    }
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
      <form className="search-bar" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Rechercher un artisan..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </form>
    </header>
  );
};

export default Header;
