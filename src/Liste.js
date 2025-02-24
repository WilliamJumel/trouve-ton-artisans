import React from "react";
import { Link } from "react-router-dom";
import "./Liste.css";

const artisans = [
  { id: 1, name: "Jean Dupont", rating: 4.5, specialty: "Plombier", location: "Rouen" },
  { id: 2, name: "Marie Lefevre", rating: 5, specialty: "Électricien", location: "Caen" },
  { id: 3, name: "Paul Durand", rating: 4, specialty: "Menuisier", location: "Le Havre" },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {"★".repeat(fullStars)}
      {halfStar && "☆"}
      {"☆".repeat(emptyStars)}
    </>
  );
};

const Liste = () => {
  return (
    <div className="liste-container">
      <h2>Liste des artisans</h2>
      <div className="artisan-list">
        {artisans.map((artisan) => (
          <Link to={`/artisan/${artisan.id}`} key={artisan.id} className="artisan-card">
            <h3>{artisan.name}</h3>
            <p className="stars">{renderStars(artisan.rating)} ({artisan.rating}/5)</p>
            <p><strong>Spécialité :</strong> {artisan.specialty}</p>
            <p><strong>Localisation :</strong> {artisan.location}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Liste;
