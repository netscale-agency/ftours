import React from "react";
import '../styles/pages/Putovanja.css';
import DestinationLayoutGrid from "../components/DestinationLayoutGrid";

function SkolskaPutovanja() {
  return (
    <>
    <div class="ftours-yellow">
      Izleti
    </div>
      <DestinationLayoutGrid />
    <div class="ftours-red">
      Osnovne škole
    </div>
      <DestinationLayoutGrid />
    <div class="ftours-purple">
      Srednje škole
    </div>
      <DestinationLayoutGrid />
    </>
  );
}

export default SkolskaPutovanja;