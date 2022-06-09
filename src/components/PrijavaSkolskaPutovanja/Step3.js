import React, { useEffect, useState } from "react";
import { cityData } from "./util/data";

export default function Step3({ setActive, active, step3, setStep3 }) {
  const [city, setCity] = useState();

  const [year, setYear] = useState(
    JSON.parse(localStorage.getItem("step3")).DatumRodjenja.split("-")[0]
  );
  useEffect(() => {
    setCity(JSON.parse(localStorage.getItem("step3")).Mjesto || "");
  }, []);
  const [date, setDate] = useState();
  const [defData, setDefData] = useState(
    JSON.parse(localStorage.getItem("step3"))
  );
  console.log(JSON.parse(localStorage.getItem("step3")).Mjesto, "ddd");
  const thisYear = new Date().getFullYear();
  return (
    <div className="stepContainer2">
      <label>
        Prezime ugovaratelja putovanja (roditelj/staratelj) <b>(obavezno)</b>
      </label>
      <input
        defaultValue={defData.RoditeljIme}
        id="prezimeRoditelj"
        type="text"
      />
      <label>
        Ime ugovaratelja putovanja (roditelj/staratelj)<b>(obavezno)</b>
      </label>
      <input
        defaultValue={defData.roditeljPrezime}
        id="imeRoditelj"
        type="text"
      />{" "}
      <label>
        Mobitel ugovaratelja putovanja <b>(obavezno)</b>
      </label>
      <input
        defaultValue={defData.RoditeljSkrbnikMob}
        id="telRoditelj"
        type="tel"
      />{" "}
      <label>
        E-mail ugovaratelja putovanja <b>(obavezno)</b>
      </label>
      <input
        defaultValue={defData.RoditeljSkrbnikEmail}
        id="emailRoditelj"
        type="email"
      />{" "}
      <label>
        Prezime putnika <b>(obavezno)</b>
      </label>
      <input defaultValue={defData.Prezime} id="prezimePutnika" type="text" />{" "}
      <label>
        Ime putnika <b>(obavezno)</b>
      </label>
      <input defaultValue={defData.Ime} id="imePutnika" type="text" />{" "}
      <label>
        Adresa putnika <b>(obavezno)</b>
      </label>
      <input defaultValue={defData.Adresa} id="adresaPutnika" type="text" />{" "}
      <label>
        Grad/mjesto putnika <b>(obavezno)</b>
      </label>
      <input
        defaultValue={defData.Mjesto}
        list="mjesta"
        name="mjesto"
        id="mjesto"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <datalist id="mjesta">
        {cityData.map((item, i) => {
          return <option key={i} value={item} />;
        })}
      </datalist>
      <label>
        Država putnika <b>(ako je drugačije od dolje navedenog - obavezno)</b>
      </label>
      <input id="drzava" type="text" defaultValue={"HRVATSKA"} />{" "}
      <label>
        Datum rođenja putnika <b>(obavezno)</b>
      </label>
      <input
        defaultValue={defData.DatumRodjenja}
        id="datumRodenja"
        type="date"
        onChange={(e) => {
          setYear(Number(e.target.value.slice(0, 4)));
          let date = document.getElementById("datumRodenja").value.split("-");

          setDate(`${date[2]}.${date[1]}.${date[0]}`);
        }}
      />
      <label>
        Spol <b>(obavezno)</b>
      </label>
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
          disabled={
            cityData.includes(city) &&
            year < thisYear &&
            document.getElementById("imeRoditelj").value &&
            document.getElementById("prezimeRoditelj").value &&
            document.getElementById("emailRoditelj").value &&
            document.getElementById("telRoditelj").value &&
            document.getElementById("adresaPutnika").value &&
            document.getElementById("spol").value &&
            document.getElementById("prezimePutnika").value &&
            document.getElementById("imePutnika").value
              ? false
              : true
          }
          className="nextPrev"
          onClick={() => {
            localStorage.setItem(
              "step3",
              JSON.stringify({
                RoditeljIme: document.getElementById("imeRoditelj").value,
                roditeljPrezime: document.getElementById("prezimeRoditelj")
                  .value,
                RoditeljSkrbnikEmail: document.getElementById("emailRoditelj")
                  .value,
                RoditeljSkrbnikMob: document.getElementById("telRoditelj")
                  .value,
                Adresa: document.getElementById("adresaPutnika").value,
                Spol: document.getElementById("spol").value,
                Mjesto: document.getElementById("mjesto").value,
                Prezime: document.getElementById("prezimePutnika").value,
                DatumRodjenja: document.getElementById("datumRodenja").value,
                Ime: document.getElementById("imePutnika").value,
              })
            );
            setStep3({
              RoditeljSkrbnik: `${
                document.getElementById("imeRoditelj").value
              } ${document.getElementById("prezimeRoditelj").value}`,
              RoditeljSkrbnikEmail: document.getElementById("emailRoditelj")
                .value,
              RoditeljSkrbnikMob: document.getElementById("telRoditelj").value,
              Adresa: document.getElementById("adresaPutnika").value,
              Spol: document.getElementById("spol").value,
              Mjesto: document.getElementById("mjesto").value,
              Prezime: document.getElementById("prezimePutnika").value,
              DatumRodjenja: date,
              Ime: document.getElementById("imePutnika").value,
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
