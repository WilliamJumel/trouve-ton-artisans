import React from "react";
import { Link } from "react-router-dom";
import "./Liste.css";

const artisans = [
  { id: 1, name: "Vallis Bellemare", rating: 4, specialty: "Plombier", location: "Vienne" },
  { id: 2, name: "Amitee Lécuyer", rating: 4.5, specialty: "Couturier", location: "Annecy" },
  { id: 3, name: "Leala Dennis", rating: 3.8, specialty: "Coiffeur", location: "Chambéry" },
  { id: 4, name: "Chocolaterie Labbé", rating: 4.9, specialty: "Chocolatier", location: "Grenoble" },
  { id: 5, name: "Claude Quinn", rating: 4.2, specialty: "Bijoutier", location: "Aix-les-bains" },
  { id: 6, name: "Valérie Laderoute", rating: 4.5, specialty: "Toiletteur", location: "Valence" },
  { id: 7, name: "Boutot & fils", rating: 4.7, specialty: "Menuisier", location: "Bourg-en-bresse" },
  { id: 8, name: "CM Graphisme", rating: 4.4, specialty: "Webdesign", location: "Valence" },
  { id: 9, name: "Orville Salmons", rating: 5, specialty: "Chauffagiste", location: "Evian" },
  { id: 10, name: "Au pain chaud", rating: 4.8, specialty: "Boulanger", location: "Montélimar" },
  { id: 11, name: "Boucherie Dumont", rating: 4.5, specialty: "Boucher", location: "Lyon" },
  { id: 12, name: "Mont Blanc Électricité", rating: 4.5, specialty: "Électricien", location: "Chamonix" },
  { id: 13, name: "Traiteur Truchon", rating: 4.1, specialty: "Traiteur", location: "Privas" },
  { id: 14, name: "Le monde des fleurs", rating: 4.6, specialty: "Fleuriste", location: "Annonay" },
  { id: 15, name: "Royden Charbonneau", rating: 3.8, specialty: "Carrossier", location: "Saint-Priest" },
  { id: 16, name: "Ernest Carignan", rating: 5, specialty: "Ferronier", location: "Le Puy-en-Velay" },
  { id: 17, name: "C'est sup'hair", rating: 4.1, specialty: "Coiffeur", location: "Romans-sur-Isère" },
];

const Liste = ({ searchQuery }) => {
  const filteredArtisans = artisans.filter(
    (artisan) =>
      artisan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artisan.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artisan.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="liste-container">
      <h2>Liste des artisans</h2>
      <div className="artisan-list">
        {filteredArtisans.length > 0 ? (
          filteredArtisans.map((artisan) => (
            <Link to={`/artisan/${artisan.id}`} key={artisan.id} className="artisan-card">
              <h3>{artisan.name}</h3>
              <p><strong>Spécialité :</strong> {artisan.specialty}</p>
              <p><strong>Localisation :</strong> {artisan.location}</p>
              <p><strong>Note :</strong> {artisan.rating} / 5</p>
            </Link>
          ))
        ) : (
          <p>Aucun artisan ne correspond à votre recherche.</p>
        )}
      </div>
    </div>
  );
};

export default Liste;
