import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import { check, dateData } from "./util/check";
import { cityData } from "./util/data";

export default function Step3({ setActive, active, step3, setStep3 }) {
  const [city, setCity] = useState(step3.Mjesto || "");

  useEffect(() => {
    setCity(JSON.parse(localStorage.getItem("step3")).Mjesto || "");
  }, []);
  const [day, setday] = useState(step3.DatumRodjenja.split(".")[0]);
  const [year, setYear] = useState(step3.DatumRodjenja.split(".")[2]);
  const [month, setmonth] = useState(step3.DatumRodjenja.split(".")[1]);
  const [date, setDate] = useState();
  const thisYear = new Date().getFullYear();

  const [imeRoditelj, setImeRoditelj] = useState(
    step3.RoditeljSkrbnik.split(" ")[0] || undefined
  );
  const [prezimeRoditelj, setPrezimeRoditelj] = useState(
    step3.RoditeljSkrbnik.split(" ")[1] || undefined
  );
  const [telRoditelj, setTelRoditelj] = useState(
    step3.RoditeljSkrbnikMob || undefined
  );
  const [email, setEmail] = useState(step3.RoditeljSkrbnikEmail || undefined);
  const [prezimePutnika, setPrezimePutnika] = useState(
    step3.Prezime || undefined
  );
  const [imePutnika, setImePutnika] = useState(step3.Ime || undefined);
  const [adresaPutnika, setAdresaPutnika] = useState(step3.Adresa || undefined);
  const [spol, setSpol] = useState(step3.Spol || undefined);
  useEffect(() => {
    setDate(`${day}.${month}.${year}`);
  }, [year, month, day]);
  const [defData, setDefData] = useState(
    JSON.parse(localStorage.getItem("step3"))
  );
  return (
    <div className="stepContainer2">
      <label>
        Prezime ugovaratelja putovanja (roditelj/staratelj){" "}
        <b style={{ color: "#B11F23" }}>(obavezno)</b>
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
      <span style={{ color: "red", marginTop: -16, fontSize: 14 }}>
        {prezimeRoditelj !== undefined &&
          (!defData.RoditeljIme || prezimeRoditelj === "") &&
          check(prezimeRoditelj, "prezimeRoditelj")}
      </span>
      <label>
        Ime ugovaratelja putovanja (roditelj/staratelj){" "}
        <b style={{ color: "#B11F23" }}>(obavezno)</b>
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
      <span style={{ color: "red", marginTop: -16, fontSize: 14 }}>
        {imeRoditelj !== undefined &&
          (!defData.roditeljPrezime || imeRoditelj === "") &&
          check(imeRoditelj, "imeRoditelj")}
      </span>
      <label>
        Mobitel ugovaratelja putovanja{" "}
        <b style={{ color: "#B11F23" }}>(obavezno)</b>
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
      <span style={{ color: "red", marginTop: -16, fontSize: 14 }}>
        {telRoditelj !== undefined &&
          (!defData.RoditeljSkrbnikMob || telRoditelj === "") &&
          check(telRoditelj, "telRoditelj")}
      </span>
      <label>
        E-mail ugovaratelja putovanja{" "}
        <b style={{ color: "#B11F23" }}>(obavezno)</b>
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
      <span style={{ color: "red", marginTop: -16, fontSize: 14 }}>
        {email !== undefined &&
          (!defData.RoditeljSkrbnikEmail || email === "") &&
          check(email, "emailRoditelj")}
      </span>
      <br />
      <br />
      <label>
        Prezime putnika <b style={{ color: "#B11F23" }}>(obavezno)</b>
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
      {prezimePutnika !== undefined &&
        (!defData.Prezime || prezimePutnika === "") && (
          <span
            style={{
              color: "red",
              marginTop: -16,
              fontSize: 14,
              marginBottom: 3,
            }}
          >
            {check(prezimePutnika, "prezimePutnika")}
          </span>
        )}
      <p
        style={{
          color: "#0d6efd",
          marginTop:
            prezimePutnika !== undefined &&
            (defData.Prezime || prezimePutnika !== "")
              ? 0
              : -10,
          marginBottom: 0,

          fontSize: 13.8,
        }}
      >
        Koristite hrvatske dijakritičke znakove (č, ć, dž, đ, š, ž){" "}
      </p>
      <label>
        Ime putnika <b style={{ color: "#B11F23" }}>(obavezno)</b>
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
      {imePutnika !== undefined && (!defData.Ime || imePutnika === "") && (
        <span
          style={{
            color: "red",
            marginTop: -16,
            fontSize: 14,
            marginBottom: 3,
          }}
        >
          {check(imePutnika, "imePutnika")}
        </span>
      )}
      <p
        style={{
          color: "#0d6efd",
          marginTop:
            imePutnika !== undefined && (defData.Ime || imePutnika !== "")
              ? 0
              : -10,
          marginBottom: 0,
          fontSize: 13.8,
        }}
      >
        Koristite hrvatske dijakritičke znakove (č, ć, dž, đ, š, ž){" "}
      </p>
      <label>
        Adresa putnika <b style={{ color: "#B11F23" }}>(obavezno)</b>
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
      <span style={{ color: "red", marginTop: -16, fontSize: 14 }}>
        {adresaPutnika !== undefined &&
          (!defData.Adresa || adresaPutnika === "") &&
          check(adresaPutnika, "adresaPutnika")}
      </span>
      <label>
        Grad/mjesto putnika <b style={{ color: "#B11F23" }}>(obavezno)</b>
      </label>
      <input
        style={{ maxWidth: "300px", textTransform: "capitalize" }}
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
      {city !== undefined && (!defData.Mjesto || city === "") && (
        <span
          style={{
            color: "red",
            marginTop: -16,
            fontSize: 14,
            marginBottom: 3,
          }}
        >
          {check(city, "mjesto")}
        </span>
      )}
      {!cityData.includes(city) && (
        <p
          style={{
            color: "#0d6efd",
            marginTop:
              city !== undefined && (defData.Mjesto || city !== "") ? 0 : -10,
            fontSize: 13.8,
          }}
        >
          Popunite početna slova Grada/Mjesta i onda ga odaberite iz izbornika
        </p>
      )}
      <label style={{ maxWidth: 300 }}>
        Država putnika <b>(ako je drugačije od dolje navedenog - obavezno)</b>
      </label>
      <input
        style={{ maxWidth: "300px" }}
        id="drzava"
        type="text"
        defaultValue={"HRVATSKA"}
      />{" "}
      <label>
        Datum rođenja putnika <b style={{ color: "#B11F23" }}>(obavezno)</b>
      </label>
      <div style={{ display: "flex" }}>
        <select
          defaultValue={year}
          style={{ maxWidth: "100px" }}
          id="god"
          onChange={(e) => {
            setYear(e.target.value);
          }}
        >
          <option style={{ backgroundColor: "lightgray" }} value={""}>
            Godina
          </option>
          {dateData.years.map((item, i) => {
            return (
              <option key={i} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <select
          defaultValue={month}
          style={{ maxWidth: "100px" }}
          id="month"
          onChange={(e) => {
            setmonth(e.target.value);
          }}
        >
          <option style={{ backgroundColor: "lightgray" }} value={""}>
            Mjesec
          </option>
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
          defaultValue={day}
          style={{ maxWidth: "100px" }}
          id="day"
          onChange={(e) => {
            setday(e.target.value);
          }}
        >
          <option style={{ backgroundColor: "lightgray" }} value={""}>
            Dan
          </option>
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
            marginTop: -10,
            fontSize: 13.8,
            maxWidth: 300,
          }}
        >
          Prvo odaberite iz izbornika Godinu, zatim Mjesec i onda Dan rođenja.
        </p>
      )}
      {(year === "2022" || year === "2021" || year === "2020") && (
        <p
          style={{
            color: "red",
            marginTop: -10,
            fontSize: 13.8,
            maxWidth: 300,
          }}
        >
          Provjerite godinu rođenja
        </p>
      )}
      <label>
        Spol <b style={{ color: "#B11F23" }}>(obavezno)</b>
      </label>
      <div style={{ display: "flex" }}>
        <label style={{ marginTop: "auto", marginBottom: "auto" }}>M</label>
        <input
          style={{ width: 20, marginTop: "auto", marginBottom: "auto" }}
          id="spol"
          name="spol"
          type="radio"
          defaultChecked={spol === "M" ? true : false}
          onClick={() => setSpol("M")}
          value={"M"}
        />
        <label
          style={{ marginLeft: 16, marginTop: "auto", marginBottom: "auto" }}
        >
          Ž
        </label>
        <input
          style={{ width: 20, marginTop: "auto", marginBottom: "auto" }}
          id="spol"
          name="spol"
          type="radio"
          defaultChecked={spol === "Ž" ? true : false}
          onClick={() => setSpol("Ž")}
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
            imeRoditelj &&
            day &&
            prezimeRoditelj &&
            email &&
            telRoditelj &&
            adresaPutnika &&
            spol &&
            prezimePutnika &&
            imePutnika
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
                DatumRodjenja: date,
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
