import React from "react";
import '../styles/pages/Putovanja.css';
import DestinationLayoutGrid from '../components/DestinationLayoutGrid';

function EuropskaDaleka() {
  return (
    <>
      <div id="europska-putovanja" class="ftours-yellow">Europska putovanja</div>
      <DestinationLayoutGrid />
      <div id="daleka-putovanja" class="ftours-red">Daleka putovanja</div>
      <DestinationLayoutGrid />
      <div id="nova-godina" class="ftours-blue">Nova godina</div>
      <DestinationLayoutGrid />
      <div id="krstarenja" class="ftours-purple">Krstarenja</div>
      <DestinationLayoutGrid />
    </>
  );
}

export default EuropskaDaleka;
