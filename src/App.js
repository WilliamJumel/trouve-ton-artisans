import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Artisan from "./artisan"; // Attention : sans majuscule
import Liste from "./Liste";
import Header from "./Header";
import Footer from "./Footer";
import NotFound from "./NotFound"; // Vérifie bien le chemin du fichier

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <Header onSearch={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liste" element={<Liste searchQuery={searchQuery} />} />
        <Route path="/artisan/:id" element={<Artisan />} />
        <Route path="/mentions-legales" element={<div>Mentions légales</div>} />
        <Route path="/donnees-personnelles" element={<div>Données personnelles</div>} />
        <Route path="/accessibilite" element={<div>Accessibilité</div>} />
        <Route path="/cookies" element={<div>Cookies</div>} />

        {/* Capture toutes les routes non définies et affiche la page 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

