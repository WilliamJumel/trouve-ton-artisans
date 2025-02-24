import React from "react";
import { useParams } from "react-router-dom";
import "./Artisan.css";

const artisans = [
  { id: 1, name: "Jean Dupont", rating: 4.5, specialty: "Plombier", location: "Rouen", about: "Jean Dupont est un artisan expérimenté.", website: "https://www.artisan-fictif.com", email: "jean.dupont@example.com" },
  { id: 2, name: "Marie Lefevre", rating: 5, specialty: "Électricien", location: "Caen", about: "Marie Lefevre est une électricienne certifiée.", website: "https://www.artisan-fictif.com", email: "marie.lefevre@example.com" },
  { id: 3, name: "Paul Durand", rating: 4, specialty: "Menuisier", location: "Le Havre", about: "Paul Durand réalise des meubles sur mesure.", website: "", email: "paul.durand@example.com" },
];

const Artisan = () => {
  const { id } = useParams();
  const artisan = artisans.find((art) => art.id === parseInt(id));

  if (!artisan) return <p>Artisan introuvable.</p>;

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

  return (
    <div className="artisan-container">
      <h2>{artisan.name}</h2>
      <p className="stars">{renderStars(artisan.rating)} ({artisan.rating}/5)</p>
      <p><strong>Spécialité :</strong> {artisan.specialty}</p>
      <p><strong>Localisation :</strong> {artisan.location}</p>

      <div className="about">
        <h3>À propos</h3>
        <p>{artisan.about}</p>
      </div>

      {artisan.website && (
        <p>
          <strong>Site web :</strong> <a href={artisan.website} target="_blank" rel="noopener noreferrer">{artisan.website}</a>
        </p>
      )}

      <div className="contact-form">
        <h3>Contacter {artisan.name}</h3>
        <form action={`mailto:${artisan.email}`} method="post" encType="text/plain">
          <label>Nom :</label>
          <input type="text" name="name" required />

          <label>Objet :</label>
          <input type="text" name="subject" required />

          <label>Message :</label>
          <textarea name="message" required></textarea>

          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Artisan;
