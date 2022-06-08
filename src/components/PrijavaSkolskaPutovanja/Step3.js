import React, { useState } from "react";
import { cityData } from "./util/data";

export default function Step3({ setActive, active,step3,setStep3 }) {
  const [city, setCity] = useState();
  const [year, setYear] = useState();
  const [date, setDate] = useState();

  const thisYear = new Date().getFullYear();
  console.log(thisYear, year);
  return (
    <div className="stepContainer2">
      <label>
        Prezime ugovaratelja putovanja (roditelj/staratelj) <b>(obavezno)</b>
      </label>
      <input id="prezimeRoditelj" type="text" />
      <label>
        Ime ugovaratelja putovanja (roditelj/staratelj)<b>(obavezno)</b>
      </label>
      <input id="imeRoditelj" type="text" />{" "}
      <label>
        Mobitel ugovaratelja putovanja <b>(obavezno)</b>
      </label>
      <input id="telRoditelj" type="tel" />{" "}
      <label>
        E-mail ugovaratelja putovanja <b>(obavezno)</b>
      </label>
      <input id="emailRoditelj" type="email" />{" "}
      <label>
        Prezime putnika <b>(obavezno)</b>
      </label>
      <input id="prezimePutnika" type="text" />{" "}
      <label>
        Ime putnika <b>(obavezno)</b>
      </label>
      <input id="imePutnika" type="text" />{" "}
      <label>
        Adresa putnika <b>(obavezno)</b>
      </label>
      <input id="adresaPutnika" type="text" />{" "}
      <label>
        Grad/mjesto putnika <b>(obavezno)</b>
      </label>
      <input
        list="mjesta"
        name="mjesto"
        id="mjesto"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <datalist id="mjesta">
        {cityData.map((item,i) => {
          return <option key={i} value={item} />;
        })}
      </datalist>
      <label>
        Država putnika (ako je drugačije od dolje navedenog - obavezno)
      </label>
      <input id="drzava" type="text" defaultValue={"HRVATSKA"} />{" "}
      <label>Datum rođenja putnika (obavezno)</label>
      <input
      id="datumRodenja"
        type="date"
        onChange={(e) => {
          setYear(Number(e.target.value.slice(0, 4)));
         let date= document.getElementById("datumRodenja").value.split('-')

         setDate(`${date[2]}.${date[1]}.${date[0]}`)
        }}
      />
      <label>Spol (obavezno)</label>
      <input id="spol" type="radio" name="spol" value={"M"} />
      <input id="spol" type="radio" name="spol" value={"Ž"} />
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
          type="submit"
          disabled={cityData.includes(city)&&year<thisYear ? false : true}
          className="nextPrev"
          onClick={() => {
            setStep3({
              RoditeljSkrbnik:`${document.getElementById("imeRoditelj").value} ${document.getElementById("prezimeRoditelj").value}`,
              RoditeljSkrbnikEmail: document.getElementById("emailRoditelj").value,
              RoditeljSkrbnikMob: document.getElementById("telRoditelj").value,
              Adresa: document.getElementById("adresaPutnika").value,
              Spol: document.getElementById("spol").value,
              Mjesto: document.getElementById("mjesta").value,
              Prezime: document.getElementById("prezimePutnika").value,
              DatumRodjenja: date,
              Ime: document.getElementById("imePutnika").value,
            })
            setActive(active + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
