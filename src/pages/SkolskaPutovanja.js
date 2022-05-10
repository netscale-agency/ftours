import React from "react";
import '../styles/pages/SkolskaPutovanja.css';
import GridLayout from "../components/GridLayout";

function SkolskaPutovanja() {
  return (
    <>
    <div class="container1">
      Izleti
    </div>
      <GridLayout />
    <div class="container2">
      Osnovne škole
    </div>
      <GridLayout />
    <div class="container3">
      Srednje škole
    </div>
      <GridLayout />
    </>
  );
}

export default SkolskaPutovanja;