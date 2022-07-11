import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import { cityData } from "./util/data";

export default function Step3({ setActive, active, step3, setStep3 }) {
  const [city, setCity] = useState();

  const [year, setYear] = useState(
    Number(
      JSON.parse(localStorage.getItem("step3")).DatumRodjenja.split("-")[0]
    ) || 2022
  );
  useEffect(() => {
    setCity(JSON.parse(localStorage.getItem("step3")).Mjesto || "");
  }, []);
  const [date, setDate] = useState();
  const [spol, setSpol] = useState();

  const [defData, setDefData] = useState(
    JSON.parse(localStorage.getItem("step3"))
  );
  const thisYear = new Date().getFullYear();
  return (
    <div className="stepContainer2">
      <label>
        Prezime ugovaratelja putovanja (roditelj/staratelj) <b>(obavezno)</b>
      </label>
      <input
        placeholder="Popunite Prezime (npr. Horvat)"
        style={{ textTransform: "capitalize" }}
        defaultValue={defData.RoditeljIme}
        id="prezimeRoditelj"
        type="text"
      />
      <label>
        Ime ugovaratelja putovanja (roditelj/staratelj)<b>(obavezno)</b>
      </label>
      <input
        placeholder="Popunite Ime (npr. Ante)"
        defaultValue={defData.roditeljPrezime}
        style={{ textTransform: "capitalize" }}
        id="imeRoditelj"
        type="text"
      />{" "}
      <label>
        Mobitel ugovaratelja putovanja <b>(obavezno)</b>
      </label>
      <InputMask
        mask="+(385) 99/999/9999"
        id="telRoditelj"
        alwaysShowMask={true}
        defaultValue={defData.RoditeljSkrbnikMob}
        type="tel"
      />
      <label>
        E-mail ugovaratelja putovanja <b>(obavezno)</b>
      </label>
      <input
        defaultValue={defData.RoditeljSkrbnikEmail}
        id="emailRoditelj"
        placeholder="Popunite E-mail (npr. ivo.ivic@gmail.com)"
        type="email"
      />{" "}
      <label>
        Prezime putnika <b>(obavezno)</b>
      </label>
      <input
        style={{ textTransform: "uppercase" }}
        defaultValue={defData.Prezime}
        id="prezimePutnika"
        placeholder="Popunite prezime (npr. HORVAT)"
        type="text"
      />{" "}
      <p style={{ color: "red", marginTop: -12, fontSize: 13.8 }}>
        Koristite hrvatske dijakritičke znakove (č, ć, dž, đ, š, ž){" "}
      </p>
      <label>
        Ime putnika <b>(obavezno)</b>
      </label>
      <input
        style={{ textTransform: "uppercase" }}
        defaultValue={defData.Ime}
        id="imePutnika"
        placeholder="Popunite ime (npr. ANTE)"
        type="text"
      />{" "}
      <p style={{ color: "red", marginTop: -12, fontSize: 13.8 }}>
        Koristite hrvatske dijakritičke znakove (č, ć, dž, đ, š, ž){" "}
      </p>
      <label>
        Adresa putnika <b>(obavezno)</b>
      </label>
      <input
        style={{ textTransform: "capitalize" }}
        defaultValue={defData.Adresa}
        id="adresaPutnika"
        type="text"
        placeholder="Popunite svoju adresu (npr. Horvatova 1)"
      />{" "}
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
      <p style={{ color: "red", marginTop: -12, fontSize: 13.8 }}>
        Popunite početna slova Grada/Mjesta i onda ga odaberite iz izbornika
      </p>
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
      />{" "}
      <p style={{ color: "red", marginTop: -12, fontSize: 13.8 }}>
        Prvo odaberite iz izbornika Godinu, zatim Mjesec i onda Dan rođenja.
      </p>
      <label>
        Spol <b>(obavezno)</b>
      </label>
      <div style={{ display: "flex" }}>
        <label>M</label>
        <input
          style={{ width: 20, marginTop: "auto" }}
          id="spol"
          name="spol"
          type="radio"
          defaultChecked={spol}
          onChange={() => setSpol("M")}
          value={"M"}
        />
        <label>Ž</label>
        <input
          style={{ width: 20, marginTop: "auto" }}
          id="spol"
          name="spol"
          type="radio"
          defaultChecked={spol}
          onChange={() => setSpol("Ž")}
          value={"Ž"}
        />
      </div>
      <div className="buttonCont">
        <button
          className="nextPrev"
          onClick={() => {
            setActive(active - 1);
          }}
        >
          Prethodni korak
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
            spol &&
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
                Spol: spol,
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
              Spol: spol,
              Mjesto: document.getElementById("mjesto").value,
              Prezime: document.getElementById("prezimePutnika").value,
              DatumRodjenja: date,
              Ime: document.getElementById("imePutnika").value,
            });
            setActive(active + 1);
          }}
        >
          Sljedeći korak
        </button>
      </div>
    </div>
  );
}
