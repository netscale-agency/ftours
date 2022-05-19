import React from "react";
import '../styles/pages/Putovanja.css';
import DestinationLayoutGrid from '../components/DestinationLayoutGrid';

function EuropskaDaleka() {
  return (
    <>
      <div class="ftours-yellow">Europska putovanja</div>
      <DestinationLayoutGrid />
      <div class="ftours-red">Daleka putovanja</div>
      <DestinationLayoutGrid />
      <div class="ftours-blue">Nova godina</div>
      <DestinationLayoutGrid />
      <div class="ftours-purple">Krstarenja</div>
      <DestinationLayoutGrid />
    </>
  );
}

export default EuropskaDaleka;
