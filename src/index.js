import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SubNav from "./components/Navbar/SubNav";
import GlobalNav from "./components/Navbar/GlobalNav";
//import App from './App';
import Naslovnica from "./pages/Naslovnica";
import SkolskaPutovanja from "./pages/SkolskaPutovanja";
import EuropskaDaleka from "./pages/EuropskaDaleka";
import ONama from "./pages/ONama";
import Kontakt from "./pages/Kontakt";
import Footer from "./components/Footer";
import SingleDestination from "./components/SingleDestination";
import OpciPodaci from "./pages/OpciPodaci";
import OpciUvjeti from "./pages/OpciUvjeti";
import PravilaPrivatnosti from "./pages/PravilaPrivatnosti";
import PodnosenjaPrigovora from "./pages/PodnosenjaPrigovora";
import PolitikaKolacica from "./pages/PolitikaKolacica";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SubNav />
    <GlobalNav />
    <Routes>
      <Route index element={<Naslovnica />} />
      <Route path="/skolska-putovanja" element={<SkolskaPutovanja />} />
      <Route path="europska-i-daleka-putovanja" element={<EuropskaDaleka />} />
      <Route path="single-destination" element={<SingleDestination />} />
      <Route path="o-nama" element={<ONama />} />
      <Route path="kontakt" element={<Kontakt />} />
      <Route path="opci-podaci-o-agenciji" element={<OpciPodaci />} />
      <Route path="opci-uvjeti-poslovanja" element={<OpciUvjeti />} />
      <Route path="pravila-privatnosti" element={<PravilaPrivatnosti />} />
      <Route path="podnosenja-prigovora" element={<PodnosenjaPrigovora />} />
      <Route path="politika-kolacica" element={<PolitikaKolacica />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
