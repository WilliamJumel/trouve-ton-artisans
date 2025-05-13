import React from "react";
import { useParams } from "react-router-dom";
import "./Artisan.css";

const artisans = [
  { id: 1, name: "Vallis Bellemare", rating: 4, specialty: "Plombier", location: "Vienne", about: "Lorem ipsum dolor sit amet...", website: "https://plomberie-bellemare.com", email: "v.bellemare@gmail.com" },
  { id: 2, name: "Amitee Lécuyer", rating: 4.5, specialty: "Couturier", location: "Annecy", about: "Lorem ipsum dolor sit amet...", website: "https://lecuyer-couture.com", email: "a.amitee@hotmail.com" },
  { id: 3, name: "Leala Dennis", rating: 3.8, specialty: "Coiffeur", location: "Chambéry", about: "Lorem ipsum dolor sit amet...", website: "https://coiffure-leala-chambery.fr", email: "l.dennos@hotmail.fr" },
  { id: 4, name: "Chocolaterie Labbé", rating: 4.9, specialty: "Chocolatier", location: "Grenoble", about: "Lorem ipsum dolor sit amet...", website: "https://chocolaterie-labbe.fr", email: "chocolaterie-labbe@gmail.com" },
  { id: 5, name: "Claude Quinn", rating: 4.2, specialty: "Bijoutier", location: "Aix-les-bains", about: "Lorem ipsum dolor sit amet...", website: "", email: "claude.quinn@gmail.com" },
  { id: 6, name: "Valérie Laderoute", rating: 4.5, specialty: "Toiletteur", location: "Valence", about: "Lorem ipsum dolor sit amet...", website: "", email: "v-laredoute@gmail.com" },
  { id: 7, name: "Boutot & fils", rating: 4.7, specialty: "Menuisier", location: "Bourg-en-bresse", about: "Lorem ipsum dolor sit amet...", website: "https://boutot-menuiserie.com", email: "boutot-menuiserie@gmail.com" },
  { id: 8, name: "CM Graphisme", rating: 4.4, specialty: "Webdesign", location: "Valence", about: "Lorem ipsum dolor sit amet...", website: "https://cm-graphisme.com", email: "contact@cm-graphisme.com" },
  { id: 9, name: "Orville Salmons", rating: 5, specialty: "Chauffagiste", location: "Evian", about: "Lorem ipsum dolor sit amet...", website: "", email: "o-salmons@live.com" },
  { id: 10, name: "Au pain chaud", rating: 4.8, specialty: "Boulanger", location: "Montélimar", about: "Lorem ipsum dolor sit amet...", website: "", email: "aupainchaud@hotmail.com" },
  { id: 11, name: "Boucherie Dumont", rating: 4.5, specialty: "Boucher", location: "Lyon", about: "Lorem ipsum dolor sit amet...", website: "", email: "boucherie.dumond@gmail.com" },
  { id: 12, name: "Mont Blanc Électricité", rating: 4.5, specialty: "Électricien", location: "Chamonix", about: "Lorem ipsum dolor sit amet...", website: "https://mont-blanc-electricite.com", email: "contact@mont-blanc-electricite.com" },
  { id: 13, name: "Traiteur Truchon", rating: 4.1, specialty: "Traiteur", location: "Privas", about: "Lorem ipsum dolor sit amet...", website: "https://truchon-traiteur.fr", email: "contact@truchon-traiteur.fr" },
  { id: 14, name: "Le monde des fleurs", rating: 4.6, specialty: "Fleuriste", location: "Annonay", about: "Lorem ipsum dolor sit amet...", website: "https://le-monde-des-fleurs-annonay.fr", email: "contact@le-monde-des-fleurs-annonay.fr" },
  { id: 15, name: "Royden Charbonneau", rating: 3.8, specialty: "Carrossier", location: "Saint-Priest", about: "Lorem ipsum dolor sit amet...", website: "", email: "r.charbonneau@gmail.com" },
  { id: 16, name: "Ernest Carignan", rating: 5, specialty: "Ferronier", location: "Le Puy-en-Velay", about: "Lorem ipsum dolor sit amet...", website: "", email: "e-carigan@hotmail.com" },
  { id: 17, name: "C'est sup'hair", rating: 4.1, specialty: "Coiffeur", location: "Romans-sur-Isère", about: "Lorem ipsum dolor sit amet...", website: "https://sup-hair.fr", email: "sup-hair@gmail.com" },
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
          <strong>Site web :</strong>{" "}
          <a href={artisan.website} target="_blank" rel="noopener noreferrer">{artisan.website}</a>
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
