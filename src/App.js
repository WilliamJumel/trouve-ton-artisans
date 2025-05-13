import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Artisan from "./artisan"; 
import Liste from "./Liste";
import Header from "./Header";
import Footer from "./Footer";
import NotFound from "./NotFound"; 

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <Header onSearch={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liste" element={<Liste searchQuery={searchQuery} />} />
        <Route path="/artisan/:id" element={<Artisan />} />

        {/* Routes manuelles vers chaque artisan */}
        <Route path="/fiche/vallis-bellemare" element={<Artisan />} />
        <Route path="/fiche/amitee-lecuyer" element={<Artisan />} />
        <Route path="/fiche/leala-dennis" element={<Artisan />} />
        <Route path="/fiche/chocolaterie-labbe" element={<Artisan />} />
        <Route path="/fiche/claude-quinn" element={<Artisan />} />
        <Route path="/fiche/valerie-laderoute" element={<Artisan />} />
        <Route path="/fiche/boutot-et-fils" element={<Artisan />} />
        <Route path="/fiche/cm-graphisme" element={<Artisan />} />
        <Route path="/fiche/orville-salmons" element={<Artisan />} />
        <Route path="/fiche/au-pain-chaud" element={<Artisan />} />
        <Route path="/fiche/boucherie-dumont" element={<Artisan />} />
        <Route path="/fiche/mont-blanc-electricite" element={<Artisan />} />
        <Route path="/fiche/traiteur-truchon" element={<Artisan />} />
        <Route path="/fiche/le-monde-des-fleurs" element={<Artisan />} />
        <Route path="/fiche/royden-charbonneau" element={<Artisan />} />
        <Route path="/fiche/ernest-carignan" element={<Artisan />} />
        <Route path="/fiche/cest-suphair" element={<Artisan />} />

        {/* Légales */}
        <Route path="/mentions-legales" element={<div>Mentions légales</div>} />
        <Route path="/donnees-personnelles" element={<div>Données personnelles</div>} />
        <Route path="/accessibilite" element={<div>Accessibilité</div>} />
        <Route path="/cookies" element={<div>Cookies</div>} />

        {/* Page 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


