import React, { useState } from "react";
import { cityData } from "./util/data";

export default function Step3({ setActive, active }) {
  const [city, setCity] = useState();
  const [year, setYear] = useState();
  const thisYear = new Date().getFullYear();
  console.log(thisYear, year);
  return (
    <div className="stepContainer2">
      <label>
        Prezime ugovaratelja putovanja (roditelj/staratelj) <b>(obavezno)</b>
      </label>
      <input type="text" />
      <label>
        Ime ugovaratelja putovanja (roditelj/staratelj)<b>(obavezno)</b>
      </label>
      <input type="text" required />{" "}
      <label>
        Mobitel ugovaratelja putovanja <b>(obavezno)</b>
      </label>
      <input type="tel" />{" "}
      <label>
        E-mail ugovaratelja putovanja <b>(obavezno)</b>
      </label>
      <input type="email" />{" "}
      <label>
        Prezime putnika <b>(obavezno)</b>
      </label>
      <input type="text" />{" "}
      <label>
        Ime putnika <b>(obavezno)</b>
      </label>
      <input type="text" />{" "}
      <label>
        Adresa putnika <b>(obavezno)</b>
      </label>
      <input type="text" />{" "}
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
      <input type="text" defaultValue={"HRVATSKA"} />{" "}
      <label>Datum rođenja putnika (obavezno)</label>
      <input
        type="date"
        onChange={(e) => {
          setYear(Number(e.target.value.slice(0, 4)));
        }}
      />
      <label>Spol (obavezno)</label>
      <input type="radio" name="spol" value={"M"} />
      <input type="radio" name="spol" value={"Ž"} />
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
            setActive(active + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
