import React from "react";
import '../styles/pages/EuropskaDaleka.css';
import GridLayout from '../components/GridLayout';

function EuropskaDaleka() {
  return (
    <>
      <div class="container4">Europska putovanja</div>
      <GridLayout />
      <div class="container5">Daleka putovanja</div>
      <GridLayout />
      <div class="container6">Nova godina</div>
      <GridLayout />
      <div class="container7">Krstarenja</div>
      <GridLayout />
    </>
  );
}

export default EuropskaDaleka;
