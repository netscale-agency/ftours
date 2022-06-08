import React, { useState } from "react";

export default function Step2({
  data,
  aran,
  setActive,
  active,
  step2,
  setStep2,
}) {
  const [checked, setChecked] = useState(false);
  const [pickedRazred, setPickedRazred] = useState("");
  const skole = data.GrupeSkole.filter((item) => item.GrupaId === aran);
  const [pickedSchool, setPickedSchool] = useState(
    skole.length === 1 && skole[0].skolaId
  );
  console.log(skole.filter((item)=>item.skole===step2.skolaId).skolaId,step2,)

  const aranData = data.GrupeRezervacije.filter(
    (item) => item.GrupaId === aran
  );
  const razredi = data.GrupeRazredi.filter((item) => item.GrupaId === aran);
  return (
    <div className="stepContainer2 ">
      <label>Škola</label>
      <select
        id="skola"
        onChange={(e) => {
          setPickedSchool(e.target.value);
        }}
      >
        {skole.length > 1 && <option>---</option>}
        {skole.map((item, i) => {
          return (
            <option key={i}  value={item.skolaId}>
              {item.skola}
            </option>
          );
        })}
      </select>
      <label>Aranžman / odredište</label>
      <select>
        {aranData.map((item, i) => {
          return (
            <option key={i} value={item.OpisAranzmana}>
              {item.OpisAranzmana}
            </option>
          );
        })}
      </select>
      <label>
        Razred <b>(obavezno)</b>
      </label>
      <select
        id="razred"
        onChange={(e) => {
          setPickedRazred(e.target.value);
        }}
      >
        {<option>---</option>}
        {razredi.map((item, i) => {
          if (item.skolaId === pickedSchool)
            return (
              <option key={i} value={item.Razred}>
                {item.Razred}
              </option>
            );
        })}
      </select>
      <label>Razrednik / voditelj</label>
      <select id="razrednik">
        {data.GrupeKontaktOsobe.map((item, i) => {
          if (item.skolaId === pickedSchool && item.Razred === pickedRazred)                                                 
            return (
              <option key={i} value={item.KontaktOsobaId}>
                {item.KontaktOsoba}
              </option>
            );
        })}
      </select>
      <span>Označite polje i pročitajte/preuzmite program putovanja</span>
      <input
        onChange={() => {
          setChecked(!checked);
        }}
        type="checkbox"
      />
      {checked && <i className="fa-pdf" />}
      <div className="buttonCont">
        <button
          className="nextPrev"
          onClick={() => {
            setActive(active - 1);
          }}
        >
          Prev
        </button>
        <button
          disabled={checked && pickedRazred !== "" ? false : true}
          className="nextPrev"
          onClick={() => {
            setStep2({
              KontaktOsobaId: Number(
                document.getElementById("razrednik").value
              ),
              Razred: document.getElementById("razred").value,
            });
            
            setActive(active + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
