import React from "react";
import '../styles/pages/Putovanja.css';
import DestinationLayoutGrid from '../components/DestinationLayoutGrid';

function EuropskaDaleka() {
  return (
    <>
      <div id="europska-putovanja" className="ftours-yellow">Europska putovanja</div>
      <DestinationLayoutGrid />
      <div id="daleka-putovanja" className="ftours-red">Daleka putovanja</div>
      <DestinationLayoutGrid />
      <div id="nova-godina" className="ftours-blue">Nova godina</div>
      <DestinationLayoutGrid />
      <div id="krstarenja" className="ftours-purple">Krstarenja</div>
      <DestinationLayoutGrid />
    </>
  );
}

export default EuropskaDaleka;
