import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import { check, dateData } from "./util/check";
import { cityData } from "./util/data";

export default function Step3({ setActive, active, step3, setStep3 }) {
  const [city, setCity] = useState("");

  useEffect(() => {
    setCity(JSON.parse(localStorage.getItem("step3")).Mjesto || "");
  }, []);
  const [day, setday] = useState("");
  const [year, setYear] = useState();
  const [date, setDate] = useState();
  const [month, setmonth] = useState("");
  const thisYear = new Date().getFullYear();

  const [imeRoditelj, setImeRoditelj] = useState("");
  const [prezimeRoditelj, setPrezimeRoditelj] = useState("");
  const [telRoditelj, setTelRoditelj] = useState("");
  const [email, setEmail] = useState("");
  const [prezimePutnika, setPrezimePutnika] = useState("");
  const [imePutnika, setImePutnika] = useState("");
  const [adresaPutnika, setAdresaPutnika] = useState("");
  const [spol, setSpol] = useState();
  useEffect(() => {
    setDate(`${day}.${month}.${year}`);
  }, [year, month, day]);
  const [defData, setDefData] = useState(
    JSON.parse(localStorage.getItem("step3"))
  );
  return (
    <div className="stepContainer2">
      <label>
        Prezime ugovaratelja putovanja (roditelj/staratelj) <b>(obavezno)</b>
      </label>
      <input
        placeholder="Popunite Prezime (npr. Horvat)"
        style={{ textTransform: "capitalize" }}
        defaultValue={defData.RoditeljIme || ""}
        onChange={(e) => {
          setPrezimeRoditelj(e.target.value);
        }}
        id="prezimeRoditelj"
        type="text"
      />
      <span style={{ color: "red", marginTop: -8 }}>
        {check(prezimeRoditelj, "prezimeRoditelj")}
      </span>
      <label>
        Ime ugovaratelja putovanja (roditelj/staratelj)<b>(obavezno)</b>
      </label>
      <input
        placeholder="Popunite Ime (npr. Ante)"
        defaultValue={defData.roditeljPrezime}
        style={{ textTransform: "capitalize" }}
        onChange={(e) => {
          setImeRoditelj(e.target.value);
        }}
        id="imeRoditelj"
        type="text"
      />{" "}
      <span style={{ color: "red", marginTop: -8 }}>
        {check(imeRoditelj, "imeRoditelj")}
      </span>
      <label>
        Mobitel ugovaratelja putovanja <b>(obavezno)</b>
      </label>
      <InputMask
        mask="+385 (0) 99/999/9999"
        id="telRoditelj"
        alwaysShowMask={true}
        onChange={(e) => {
          setTelRoditelj(e.target.value);
        }}
        defaultValue={defData.RoditeljSkrbnikMob}
        type="tel"
      />
      <span style={{ color: "red", marginTop: -8 }}>
        {check(telRoditelj, "telRoditelj")}
      </span>
      <label>
        E-mail ugovaratelja putovanja <b>(obavezno)</b>
      </label>
      <input
        defaultValue={defData.RoditeljSkrbnikEmail}
        id="emailRoditelj"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Popunite E-mail (npr. ivo.ivic@gmail.com)"
        type="email"
      />{" "}
      <span style={{ color: "red", marginTop: -8 }}>
        {check(email, "emailRoditelj")}
      </span>
      <label>
        Prezime putnika <b>(obavezno)</b>
      </label>
      <input
        style={{ textTransform: "uppercase" }}
        defaultValue={defData.Prezime}
        id="prezimePutnika"
        onChange={(e) => {
          setPrezimePutnika(e.target.value);
        }}
        placeholder="Popunite prezime (npr. HORVAT)"
        type="text"
      />{" "}
      <span style={{ color: "red", marginTop: -8, marginBottom: 3 }}>
        {check(prezimePutnika, "prezimePutnika")}
      </span>
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
        onChange={(e) => {
          setImePutnika(e.target.value);
        }}
        placeholder="Popunite ime (npr. ANTE)"
        type="text"
      />{" "}
      <span style={{ color: "red", marginTop: -8, marginBottom: 3 }}>
        {check(imePutnika, "imePutnika")}
      </span>
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
        onChange={(e) => {
          setAdresaPutnika(e.target.value);
        }}
        type="text"
        placeholder="Popunite svoju adresu (npr. Horvatova 1)"
      />{" "}
      <span style={{ color: "red", marginTop: -8 }}>
        {check(adresaPutnika, "adresaPutnika")}
      </span>
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
      <span style={{ color: "red", marginTop: -8, marginBottom: 3 }}>
        {check(city, "mjesto")}
      </span>
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
      <div style={{ display: "flex" }}>
        <select
          style={{ maxWidth: "158px" }}
          id="god"
          onChange={(e) => {
            setYear(e.target.value);
          }}
        >
          <option value={""}>Godina</option>
          {dateData.years.map((item, i) => {
            return (
              <option key={i} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <select
          style={{ maxWidth: "158px" }}
          id="month"
          onChange={(e) => {
            setmonth(e.target.value);
          }}
        >
          <option value={""}>Mjesec</option>
          {year &&
            dateData.months.map((item, i) => {
              return (
                <option key={i} value={item.val}>
                  {item.ime}
                </option>
              );
            })}
        </select>
        <select
          style={{ maxWidth: "158px" }}
          id="day"
          onChange={(e) => {
            setday(e.target.value);
          }}
        >
          <option value={""}>Dan</option>
          {month &&
            month != "02" &&
            (dateData.months31.includes(month)
              ? dateData.days31.map((item, i) => {
                  return (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  );
                })
              : dateData.days30.map((item, i) => {
                  return (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  );
                }))}
          {month &&
            month === "02" &&
            dateData.days31
              .slice(0, dateData.years.includes(year) ? 29 : 28)
              .map((item, i) => {
                return (
                  <option key={i} value={item}>
                    {item}
                  </option>
                );
              })}
        </select>
      </div>
      {!day && (
        <p
          style={{
            color: "red",
            marginTop: -12,
            fontSize: 13.8,
            maxWidth: 490,
          }}
        >
          Prvo odaberite iz izbornika Godinu, zatim Mjesec i onda Dan rođenja.
        </p>
      )}
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
          className="prev"
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
