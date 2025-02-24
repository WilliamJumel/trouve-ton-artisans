import React from "react";
import "./NotFound.css"; // Assure-toi d'avoir un fichier CSS si nécessaire

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Erreur 404</h1>
      <p>La page que vous cherchez n'existe pas.</p>
    </div>
  );
};

export default NotFound; // Vérifie que l'export est bien en "default"

