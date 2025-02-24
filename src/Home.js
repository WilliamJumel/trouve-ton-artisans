import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap ici
import "./Home.css";

const artisans = [
  { id: 1, name: "Jean Dupont", rating: 4.5, specialty: "Plombier", location: "Rouen" },
  { id: 2, name: "Marie Lefevre", rating: 5, specialty: "Électricien", location: "Caen" },
  { id: 3, name: "Paul Durand", rating: 4, specialty: "Menuisier", location: "Le Havre" },
];

const Home = () => {
  return (
    <div className="container my-4">
      <h1 className="text-center">Bienvenue sur Trouve Ton Artisans</h1>

      <section className="how-it-works my-4 p-4 bg-light rounded">
        <h2>Comment trouver mon artisan ?</h2>
        <ol className="list-group list-group-numbered">
          <li className="list-group-item">Choisir la catégorie d’artisanat dans le menu.</li>
          <li className="list-group-item">Choisir un artisan.</li>
          <li className="list-group-item">Le contacter via le formulaire de contact.</li>
          <li className="list-group-item">Une réponse sera apportée sous 48h.</li>
          <li className="list-group-item">
            <Link to="/liste" className="text-primary fw-bold">
              Voici notre liste complète d'artisans agréés
            </Link>
          </li>
        </ol>
      </section>

      <section className="top-artisans">
        <h2 className="text-center">Nos artisans du mois</h2>
        <div className="row">
          {artisans.map((artisan) => (
            <div className="col-md-4" key={artisan.id}>
              <Link to={`/artisan/${artisan.id}`} className="card text-dark text-decoration-none shadow-sm mb-4">
                <div className="card-body text-center">
                  <h5 className="card-title">{artisan.name}</h5>
                  <p className="card-text"><strong>Spécialité :</strong> {artisan.specialty}</p>
                  <p className="card-text"><strong>Localisation :</strong> {artisan.location}</p>
                  <p className="card-text"><strong>Note :</strong> {"⭐".repeat(Math.round(artisan.rating))}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
