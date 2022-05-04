import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalNav from "./components/Navbar/GlobalNav";
//import App from './App';
import Naslovnica from "./pages/Naslovnica";
//Dropdown Školska putovanja elementi
import SkolskaPutovanja from "./pages/SkolskaPutovanja";
import Izleti from "./pages/Izleti";
import OsnovneSkole from "./pages/OsnovneSkole";
import SrednjeSkole from "./pages/SrednjeSkole";
//Dropdown Europska i daleka putovanja elementi
import EuropskaDaleka from "./pages/EuropskaDaleka";
import Europska from "./pages/Europska";
import Daleka from "./pages/Daleka";
import NovaGodina from "./pages/NovaGodina";
import Krstarenja from "./pages/Krstarenja";
import ONama from "./pages/ONama";
import Kontakt from "./pages/Kontakt";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalNav />
    <Routes>
      <Route index element={<Naslovnica />} />
      <Route path="/skolska-putovanja" element={<SkolskaPutovanja />}>
        <Route path="izleti" element={<Izleti />} />
        <Route
          path="osnovne-skole"
          element={<OsnovneSkole />}
        />
        <Route
          path="srednje-skole"
          element={<SrednjeSkole />}
        />
      </Route>
      <Route path="europska-i-daleka-putovanja" element={<EuropskaDaleka />}>
      <Route
        path="europska-i-daleka-putovanja/europska-putovanja"
        element={<Europska />}
      />
      <Route
        path="europska-i-daleka-putovanja/daleka-putovanja"
        element={<Daleka />}
      />
      <Route
        path="europska-i-daleka-putovanja/nova-godina"
        element={<NovaGodina />}
      />
      <Route
        path="europska-i-daleka-putovanja/krstarenja"
        element={<Krstarenja />}
      />
      </Route>
      <Route path="o-nama" element={<ONama />} />
      <Route path="kontakt" element={<Kontakt />} />
    </Routes>
  </BrowserRouter>
);
