import React from "react";
import '../styles/pages/Putovanja.css';
import DestinationLayoutGrid from "../components/DestinationLayoutGrid";

function SkolskaPutovanja() {
  
  return (
    <>
    <div id="izleti" class="ftours-yellow">
      Izleti
    </div>
      <DestinationLayoutGrid />
    <div id="osnovne-skole" class="ftours-red">
      Osnovne škole
    </div>
      <DestinationLayoutGrid />
    <div id="srednje-skole" class="ftours-purple">
      Srednje škole
    </div>
      <DestinationLayoutGrid />
    </>
  );
}

export default SkolskaPutovanja;