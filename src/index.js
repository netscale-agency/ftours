import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalNav from "./components/Navbar/GlobalNav";
//import App from './App';
import Naslovnica from "./pages/Naslovnica";
import SkolskaPutovanja from "./pages/SkolskaPutovanja";
import EuropskaDaleka from "./pages/EuropskaDaleka";
import ONama from "./pages/ONama";
import Kontakt from "./pages/Kontakt";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalNav />
    <Routes>
      <Route index element={<Naslovnica />} />
      <Route path="/skolska-putovanja" element={<SkolskaPutovanja />} />
      <Route path="europska-i-daleka-putovanja" element={<EuropskaDaleka />} />
      <Route path="o-nama" element={<ONama />} />
      <Route path="kontakt" element={<Kontakt />} />
    </Routes>
  </BrowserRouter>
);
