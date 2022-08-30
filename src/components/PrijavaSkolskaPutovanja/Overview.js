import React, { useEffect, useState } from "react";
import { check, checkPlacanje, dateData, putovnicaYears } from "./util/check";
import { cityData } from "./util/data";
import { postData } from "./util/post";
import InputMask from "react-input-mask";
import emailjs from "@emailjs/browser";

export default function Overview(data) {
  const [day, setday] = useState(
    (data.data.DatumRodjenja !== undefined &&
      data.data.DatumRodjenja.split(".")[0]) ||
      ""
  );
  const [year, setYear] = useState(
    (data.data.DatumRodjenja !== undefined &&
      data.data.DatumRodjenja.split(".")[2]) ||
      ""
  );
  const [month, setmonth] = useState(
    data.data.DatumRodjenja !== undefined &&
      data.data.DatumRodjenja.split(".")[1]
  );
  const [dayDoc, setdayDoc] = useState(
    (data.data.PutnaIspravaVrijediDo !== undefined &&
      data.data.PutnaIspravaVrijediDo.split(".")[0]) ||
      ""
  );
  const today = new Date();

  const [yearDoc, setYearDoc] = useState(
    (data.data.PutnaIspravaVrijediDo !== undefined &&
      data.data.PutnaIspravaVrijediDo.split(".")[2]) ||
      ""
  );
  const [monthDoc, setmonthDoc] = useState(
    (data.data.PutnaIspravaVrijediDo !== undefined &&
      data.data.PutnaIspravaVrijediDo.split(".")[1]) ||
      ""
  );
  const [spol, setSpol] = useState(data.data.Spol);
  const [dokument, setDokument] = useState(data.data.VrstaPutneIsprave);
  const [date, setDate] = useState();
  const [dateDoc, setDateDoc] = useState();

  const [city, setCity] = useState(data.data.Mjesto || "");
  const [price, setPrice] = useState(data.data.NacinPlacanja);
  const [uredi1, seturedi1] = useState(false);
  const [uredi2, seturedi2] = useState(false);
  const [uredi3, seturedi3] = useState(false);
  const [uredi4, seturedi4] = useState(false);
  const [uredi5, seturedi5] = useState(false);
  const [uredi6, seturedi6] = useState(false);
  const [uredi7, seturedi7] = useState(false);
  const [uredi8, seturedi8] = useState(false);
  const [uredi9, seturedi9] = useState(false);
  const [uredi10, seturedi10] = useState(false);
  const [uredi11, seturedi11] = useState(false);
  const [uredi12, seturedi12] = useState(false);
  const [uredi13, seturedi13] = useState(false);
  const [uredi14, seturedi14] = useState(false);
  const [uredi15, seturedi15] = useState(false);
  const [uredi16, seturedi16] = useState(false);
  const [uredi17, seturedi17] = useState(false);
  const [uredi18, seturedi18] = useState(false);

  const thisYear = new Date().getFullYear();
  const NacinPlacanja = (str) => {
    if (str === "A") {
      return activeAran.CijenaA;
    } else if (str === "B") {
      return activeAran.CijenaB;
    } else {
      return activeAran.CijenaB;
    }
  };

  const [imeRoditelj, setImeRoditelj] = useState(
    data.data.RoditeljSkrbnik && data.data.RoditeljSkrbnik.split(" ")[0]
  );

  const activeAran = data.contentData.filter(
    (item) => item.GrupaId === data.aran
  )[0];
  const dateA = activeAran.DatumZaCijenuA.split(".");
  const dateB = activeAran.DatumZaCijenuB.split(".");
  const dateC = activeAran.DatumZaCijenuC.split(".");
  const [prezimeRoditelj, setPrezimeRoditelj] = useState(
    data.data.RoditeljSkrbnik && data.data.RoditeljSkrbnik.split(" ")[1]
  );
  const [telRoditelj, setTelRoditelj] = useState(
    data.data.RoditeljSkrbnikMob || ""
  );

  const [email, setEmail] = useState(data.data.RoditeljSkrbnikEmail || "");
  const [prezimePutnika, setPrezimePutnika] = useState(data.data.Prezime || "");
  const [imePutnika, setImePutnika] = useState(data.data.Ime || "");
  const [adresaPutnika, setAdresaPutnika] = useState(data.data.Adresa || "");
  const [submit, setsubmit] = useState(false);
  useEffect(() => {
    setDate(`${day}.${month}.${year}`);
    setDateDoc(`${dayDoc}.${monthDoc}.${yearDoc}`);
  }, [year, month, day, yearDoc, monthDoc, dayDoc]);
  useEffect(() => {
    if (window) {
      window.scrollTo(0, 0);
    }
  }, []);
  useEffect(() => {
    if (submit === true) {
      postData({
        zaglavlje: {
          Adresa: data.data.Adresa,
          BrojPutneIsprave: data.data.BrojPutneIsprave,
          Cijena: data.data.Cijena,
          DatumRodjenja: data.data.DatumRodjenja,
          Drzava: "HR",
          Email: data.data.Email,
          FotoVideoSuglasnost: data.data.FotoVideoSuglasnost,
          GrupaId: data.data.GrupaId,
          Ime: data.data.Ime,
          KontaktOsobaId: data.data.KontaktOsobaId,
          Mjesto: data.data.Mjesto,
          Mob:
            data.data.Mob[data.data.Mob.length - 2] != "_"
              ? data.data.Mob.replace("(0) ", "").replace("_", "")
              : "",
          NacinPlacanja: data.data.NacinPlacanja,
          Prezime: data.data.Prezime,
          PutnaIspravaVrijediDo: data.data.PutnaIspravaVrijediDo.includes(
            "undefined"
          )
            ? ""
            : data.data.PutnaIspravaVrijediDo,
          Razred: data.data.Razred,
          RoditeljSkrbnik: data.data.RoditeljSkrbnik,
          RoditeljSkrbnikEmail: data.data.RoditeljSkrbnikEmail,
          RoditeljSkrbnikMob:
            data.data.RoditeljSkrbnikMob[
              data.data.RoditeljSkrbnikMob.length - 2
            ] != "_"
              ? data.data.RoditeljSkrbnikMob.replace("(0) ", "").replace(
                  "_",
                  ""
                )
              : "",
          Signature: data.data.Signature,
          Spol: data.data.Spol,
          Tel:
            data.data.Tel[data.data.Tel.length - 2] != "_"
              ? data.data.Tel.replace("(0) ", "").replace("_", "")
              : "",
          VrstaPutneIsprave: data.data.VrstaPutneIsprave,
        },
      });
      emailjs
        .send(
          "service_650o6of",
          "template_9cj5ue9",
          {
            aran: data.SchoolMailData.aranIme,
            adresa: data.data.Adresa,
            brPutne: data.data.BrojPutneIsprave,
            placanje: `${data.data.NacinPlacanja} ${checkPlacanje(
              data.data.NacinPlacanja,
              {
                a: activeAran.CijenaA,
                b: activeAran.CijenaB,
                c: activeAran.CijenaC,
                aD: activeAran.DatumZaCijenuA,
                bD: activeAran.DatumZaCijenuB,
                cD: activeAran.DatumZaCijenuC,
              }
            )}`,
            skola: data.SchoolMailData.skola,
            datumRodjenja: data.data.DatumRodjenja,
            drzava: "Hrvatska",
            emailPutnik: data.data.Email,
            fotoSugl: data.data.FotoVideoSuglasnost,
            imePutnika: imePutnika,
            voditelj: data.SchoolMailData.razrednik,
            grad: data.data.Mjesto,
            brMobPutnik: data.data.Mob,
            prezimePutnika: prezimePutnika,
            ispravaVrijediDo: data.data.PutnaIspravaVrijediDo,
            razred: data.data.Razred,
            prezimeUgovaratelja: prezimeRoditelj,
            imeUgovaratelja: imeRoditelj,
            emailUgovaratelja: data.data.RoditeljSkrbnikEmail,
            mobitelUgovaratelja: data.data.RoditeljSkrbnikMob,
            spol: data.data.Spol,
            brTelPutnik: data.data.Tel,
            vrstaPutne: data.data.VrstaPutneIsprave,
            potpis: data.data.Signature,
          },
          "86zfbFOOLfvWJuFWM"
        )
        .then(
          function(response) {
            console.log("SUCCESS!", response.status, response.text);
            data.setIsErr(false);
          },
          function(error) {
            console.log("FAILED...", error);
            data.setIsErr(true);
          }
        );
      emailjs
        .send(
          "service_650o6of",
          "template_hkdcyir",
          {
            aran: data.SchoolMailData.aranIme,
            skola: data.SchoolMailData.skola,
            adresa: data.data.Adresa,
            brPutne: `${data.data.BrojPutneIsprave}`,
            placanje: data.data.NacinPlacanja,
            datumRodjenja: data.data.DatumRodjenja,
            drzava: "Hrvatska",
            emailPutnik: data.data.Email,
            fotoSugl: data.data.FotoVideoSuglasnost,
            imePutnika: `${imePutnika}`,
            voditelj: data.SchoolMailData.razrednik,
            grad: data.data.Mjesto,
            brMobPutnik: data.data.Mob,
            prezimePutnika: `${prezimePutnika}`,
            ispravaVrijediDo: `${data.data.PutnaIspravaVrijediDo}`,
            razred: data.data.Razred,
            prezimeUgovaratelja: prezimeRoditelj,
            imeUgovaratelja: imeRoditelj,
            emailUgovaratelja: data.data.RoditeljSkrbnikEmail,
            mobitelUgovaratelja: data.data.RoditeljSkrbnikMob,
            spol: data.data.Spol,
            brTelPutnik: data.data.Tel,
            vrstaPutne: data.data.VrstaPutneIsprave,
            potpis: data.data.Signature,
          },
          "86zfbFOOLfvWJuFWM"
        )
        .then(
          function(response) {
            console.log("SUCCESS!", response.status, response.text);
            data.setIsErr(false);
          },
          function(error) {
            console.log("FAILED...", error);
            data.setIsErr(true);
          }
        );
      data.setisOpen(true);
    }
  }, [submit]);

  if (data)
    return (
      <div
        style={{ display: "flex", alignItems: "center" }}
        className="contOver"
      >
        <div className="tekst">
          <div
            style={{
              marginTop: 100,
              display: "flex",
              flexDirection: "column",
              maxWidth: "800px",
            }}
          >
            <h2>PROVJERA PODATAKA</h2>
            <br />
            <p>
              <b>
                *Ugovaratelj/Putnik je odgovoran za ispravnost popunjenih
                podataka*
              </b>
              <p
                style={{
                  color: "#0d6efd",
                  maxWidth: "75%",
                }}
              >
                Molimo Vas provjerite ispravnost prethodno popunjenih podataka.
              </p>
              <p style={{ color: "red" }}>
                Ako neki od podataka nije ispravan možete ga izmijeniti
                koristeći{" "}
                <i
                  style={{ color: "black" }}
                  class="fa fa-pencil"
                  aria-hidden="true"
                ></i>
                , <br />
                zatim podatak izmijenite i odmah ga pohranite na{" "}
                <i style={{ color: "black" }} class="fa fa-save"></i>{" "}
                pripadajućeg polja.
              </p>
            </p>

            <p style={{ color: "#0d6efd" }}>
              Ako ste suglasni sa popunjenim podacima označite na dnu stranice
              Pošalji prijavu.{" "}
            </p>
          </div>
          <div style={{ maxWidth: 655 }}>
            <label>
              Prezime ugovaratelja putovanja (roditelj/staratelj){" "}
              <b style={{ color: "#B11F23" }}>(obavezno)</b>
            </label>
            <div className="inputContOver">
              {" "}
              <input
                disabled={uredi1 ? false : true}
                className="inputOver"
                placeholder="Popunite Prezime (npr. Horvat)"
                style={{ textTransform: "capitalize", fontSize: 13 }}
                defaultValue={prezimeRoditelj}
                onChange={(e) => {
                  setPrezimeRoditelj(e.target.value);
                }}
                id="prezimeRoditelj"
                type="text"
              />
              <button onClick={() => seturedi1(true)}>
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
              <button onClick={() => seturedi1(false)}>
                <i class="fa fa-save"></i>
              </button>
            </div>
            <span style={{ color: "red", marginTop: -16, fontSize: 14 }}>
              {(!data.data.RoditeljIme || prezimeRoditelj === "") &&
                check(prezimeRoditelj, "prezimeRoditelj")}
            </span>
            <label>
              Ime ugovaratelja putovanja (roditelj/staratelj){" "}
              <b style={{ color: "#B11F23" }}>(obavezno)</b>
            </label>
            <div className="inputContOver">
              <input
                placeholder="Popunite Ime (npr. Ante)"
                className="inputOver"
                disabled={uredi2 ? false : true}
                defaultValue={imeRoditelj}
                style={{ textTransform: "capitalize", fontSize: 13 }}
                onChange={(e) => {
                  setImeRoditelj(e.target.value);
                }}
                id="imeRoditelj"
                type="text"
              />{" "}
              <button onClick={() => seturedi2(true)}>
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
              <button onClick={() => seturedi2(false)}>
                <i class="fa fa-save"></i>
              </button>
            </div>
            <span style={{ color: "red", marginTop: -16, fontSize: 14 }}>
              {(!data.data.roditeljPrezime || imeRoditelj === "") &&
                check(imeRoditelj, "imeRoditelj")}
            </span>
            <label>
              Mobitel ugovaratelja putovanja{" "}
              <b style={{ color: "#B11F23" }}>(obavezno)</b>
            </label>
            <div className="inputContOver">
              <InputMask
                mask="+385 (0) 99/999/9999"
                id="telRoditelj"
                disabled={uredi3 ? false : true}
                className="inputOver"
                alwaysShowMask={true}
                style={{ fontSize: 13 }}
                onChange={(e) => {
                  setTelRoditelj(e.target.value);
                }}
                defaultValue={data.data.RoditeljSkrbnikMob}
                type="tel"
              />
              <button onClick={() => seturedi3(true)}>
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
              <button onClick={() => seturedi3(false)}>
                <i class="fa fa-save"></i>
              </button>
            </div>
            <span style={{ color: "red", marginTop: -16, fontSize: 14 }}>
              {(!data.data.RoditeljSkrbnikMob || telRoditelj === "") &&
                check(telRoditelj, "telRoditelj")}
            </span>
            <label>
              E-mail ugovaratelja putovanja{" "}
              <b style={{ color: "#B11F23" }}>(obavezno)</b>
            </label>
            <div className="inputContOver">
              <input
                className="inputOver"
                style={{ fontSize: 13 }}
                disabled={uredi4 ? false : true}
                defaultValue={data.data.RoditeljSkrbnikEmail}
                id="emailRoditelj"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Popunite E-mail (npr. ivo.ivic@gmail.com)"
                type="email"
              />{" "}
              <button onClick={() => seturedi4(true)}>
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
              <button onClick={() => seturedi4(false)}>
                <i class="fa fa-save"></i>
              </button>
            </div>
            <span style={{ color: "red", marginTop: -16, fontSize: 14 }}>
              {(!data.data.RoditeljSkrbnikEmail || email === "") &&
                check(email, "emailRoditelj")}
            </span>
            <br />
            <br />
            <label>
              Prezime putnika <b style={{ color: "#B11F23" }}>(obavezno)</b>
            </label>
            <div className="inputContOver">
              <input
                style={{
                  textTransform: "uppercase",
                  fontSize: 13,
                  marginBottom: 0,
                }}
                defaultValue={data.data.Prezime}
                id="prezimePutnika"
                className="inputOver"
                disabled={uredi5 ? false : true}
                onChange={(e) => {
                  setPrezimePutnika(e.target.value);
                }}
                placeholder="Popunite prezime (npr. HORVAT)"
                type="text"
              />{" "}
              <button onClick={() => seturedi5(true)}>
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
              <button onClick={() => seturedi5(false)}>
                <i class="fa fa-save"></i>
              </button>
            </div>
            <span
              style={{
                color: "red",
                marginTop: -16,
                fontSize: 14,
                marginBottom: 3,
              }}
            >
              {(!data.data.Prezime || prezimePutnika === "") &&
                check(prezimePutnika, "prezimePutnika")}
            </span>
            <p
              style={{
                color: "#0d6efd",
                marginTop: data.data.Prezime || prezimePutnika !== "" ? 0 : -10,
                fontSize: 13.8,
              }}
            >
              Koristite hrvatske dijakritičke znakove (č, ć, dž, đ, š, ž){" "}
            </p>
            <label>
              Ime putnika <b style={{ color: "#B11F23" }}>(obavezno)</b>
            </label>
            <div className="inputContOver">
              <input
                style={{
                  textTransform: "uppercase",
                  fontSize: 13,
                  marginBottom: 0,
                }}
                defaultValue={data.data.Ime}
                className="inputOver"
                disabled={uredi6 ? false : true}
                id="imePutnika"
                onChange={(e) => {
                  setImePutnika(e.target.value);
                }}
                placeholder="Popunite ime (npr. ANTE)"
                type="text"
              />{" "}
              <button onClick={() => seturedi6(true)}>
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
              <button onClick={() => seturedi6(false)}>
                <i class="fa fa-save"></i>
              </button>
            </div>
            <span
              style={{
                color: "red",
                marginTop: -16,
                fontSize: 14,
                marginBottom: 3,
              }}
            >
              {(!data.data.Ime || imePutnika === "") &&
                check(imePutnika, "imePutnika")}
            </span>
            <p
              style={{
                color: "#0d6efd",
                marginTop: data.data.Ime || imePutnika !== "" ? 0 : -10,
                fontSize: 13.8,
              }}
            >
              Koristite hrvatske dijakritičke znakove (č, ć, dž, đ, š, ž){" "}
            </p>
            <label>
              Adresa putnika <b style={{ color: "#B11F23" }}>(obavezno)</b>
            </label>
            <div className="inputContOver">
              <input
                style={{ textTransform: "capitalize", fontSize: 13 }}
                defaultValue={data.data.Adresa}
                className="inputOver"
                id="adresaPutnika"
                disabled={uredi7 ? false : true}
                onChange={(e) => {
                  setAdresaPutnika(e.target.value);
                }}
                type="text"
                placeholder="Popunite svoju adresu (npr. Horvatova 1)"
              />
              <button onClick={() => seturedi7(true)}>
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
              <button onClick={() => seturedi7(false)}>
                <i class="fa fa-save"></i>
              </button>
            </div>
            <span style={{ color: "red", marginTop: -16, fontSize: 14 }}>
              {(!data.data.Adresa || adresaPutnika === "") &&
                check(adresaPutnika, "adresaPutnika")}
            </span>
            <label>
              Grad/mjesto putnika <b style={{ color: "#B11F23" }}>(obavezno)</b>
            </label>
            <div className="inputContOver">
              <input
                style={{ maxWidth: "300px", fontSize: 13 }}
                defaultValue={data.data.Mjesto}
                list="mjesta"
                className="inputOver"
                disabled={uredi8 ? false : true}
                name="mjesto"
                id="mjesto"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
              <button onClick={() => seturedi8(true)}>
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
              <button onClick={() => seturedi8(false)}>
                <i class="fa fa-save"></i>
              </button>
              <datalist id="mjesta">
                {cityData.map((item, i) => {
                  return <option key={i} value={item} />;
                })}
              </datalist>
            </div>
            <span
              style={{
                color: "red",
                marginTop: -16,
                fontSize: 14,
                marginBottom: 3,
              }}
            >
              {(!data.data.Mjesto || city === "") && check(city, "mjesto")}
            </span>
            {!cityData.includes(city) && (
              <p style={{ color: "#0d6efd", marginTop: -12, fontSize: 13.8 }}>
                Popunite početna slova Grada/Mjesta i onda ga odaberite iz
                izbornika
              </p>
            )}
            <label>
              Država putnika{" "}
              <b>(ako je drugačije od dolje navedenog - obavezno)</b>
            </label>
            <div className="inputContOver">
              <input
                style={{ maxWidth: "300px", fontSize: 13 }}
                id="drzava"
                type="text"
                disabled={uredi9 ? false : true}
                className="inputOver"
                defaultValue={"HRVATSKA"}
              />{" "}
              <button onClick={() => seturedi9(true)}>
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
              <button onClick={() => seturedi9(false)}>
                <i class="fa fa-save"></i>
              </button>
            </div>
            <label>
              Datum rođenja putnika{" "}
              <b style={{ color: "#B11F23" }}>(obavezno)</b>
            </label>
            <div className="inputContOver" style={{ display: "flex" }}>
              <select
                className="selectOver"
                defaultValue={year}
                disabled={uredi10 ? false : true}
                style={{ maxWidth: "100px", fontSize: 13 }}
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
                style={{ maxWidth: "100px", fontSize: 13 }}
                className="selectOver"
                id="month"
                disabled={uredi10 ? false : true}
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
                className="selectOver"
                style={{ maxWidth: "100px", fontSize: 13 }}
                id="day"
                disabled={uredi10 ? false : true}
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

              <button onClick={() => seturedi10(true)}>
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
              <button onClick={() => seturedi10(false)}>
                <i class="fa fa-save"></i>
              </button>
            </div>
            <label>
              Spol <b style={{ color: "#B11F23" }}>(obavezno)</b>
            </label>
            <div className="inputContOver" style={{ display: "flex" }}>
              <label
                style={{
                  fontSize: 13,
                  fontWeight: uredi1 === false ? 600 : 400,
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                M
              </label>
              <input
                style={{ width: 20, marginTop: "auto", marginBottom: "auto" }}
                id="spol"
                name="spol"
                disabled={uredi11 ? false : true}
                className="inputOver"
                type="radio"
                defaultChecked={spol === "M" ? true : false}
                onClick={() => setSpol("M")}
                value={"M"}
              />
              <label
                style={{
                  fontSize: 13,
                  marginLeft: 32,
                  fontWeight: uredi11 === false ? 600 : 400,
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                Ž
              </label>
              <input
                style={{ width: 20, marginTop: "auto", marginBottom: "auto" }}
                id="spol"
                name="spol"
                className="inputOver"
                disabled={uredi11 ? false : true}
                type="radio"
                defaultChecked={spol === "Ž" ? true : false}
                onClick={() => setSpol("Ž")}
                value={"Ž"}
              />
              <button onClick={() => seturedi11(true)}>
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
              <button onClick={() => seturedi11(false)}>
                <i class="fa fa-save"></i>
              </button>
            </div>
            <label>Vrsta putne isprave putnika</label>
            <div className="inputContOver" style={{ display: "flex" }}>
              <label
                style={{
                  fontSize: 12,
                  fontWeight: uredi12 === false ? 600 : 400,
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                Osobna iskaznica
              </label>
              <input
                style={{ width: 20, marginTop: "auto", marginBottom: "auto" }}
                id="dokument"
                className="inputOver"
                disabled={uredi12 ? false : true}
                name="dokument"
                type="radio"
                onClick={() => setDokument("Osobna iskaznica")}
                defaultChecked={dokument === "Osobna iskaznica" ? true : false}
                value={"Osobna iskaznica"}
              />
              <label
                style={{
                  fontSize: 12,
                  marginLeft: 16,
                  fontWeight: uredi12 === false ? 600 : 400,
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                Putovnica
              </label>
              <input
                style={{ width: 20, marginTop: "auto", marginBottom: "auto" }}
                id="dokument"
                name="dokument"
                type="radio"
                disabled={uredi12 ? false : true}
                onClick={() => setDokument("Putovnica")}
                className="inputOver"
                value={"Putovnica"}
                defaultChecked={dokument === "Putovnica" ? true : false}
              />
              <button onClick={() => seturedi12(true)}>
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
              <button onClick={() => seturedi12(false)}>
                <i class="fa fa-save"></i>
              </button>
            </div>
            <label>Broj putne isprave putnika</label>
            <div className="inputContOver">
              <input
                id="docBroj"
                type="text"
                name="dokument"
                className="inputOver"
                style={{ maxWidth: 218.59, fontSize: 13 }}
                disabled={uredi13 ? false : true}
                defaultValue={data.data.BrojPutneIsprave}
                placeholder="Popunite broj putne isprave"
              />{" "}
              <button onClick={() => seturedi13(true)}>
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
              <button onClick={() => seturedi13(false)}>
                <i class="fa fa-save"></i>
              </button>
            </div>

            <label>Putna isprava vrijedi do</label>
            <div
              id="docTrajanje"
              className="inputContOver"
              style={{ display: "flex" }}
            >
              <select
                className="selectOver"
                disabled={uredi14 ? false : true}
                style={{ maxWidth: "100px", fontSize: 13 }}
                id="god"
                defaultValue={yearDoc}
                onChange={(e) => {
                  setYearDoc(e.target.value);
                }}
              >
                <option value={""}>Godina</option>
                {putovnicaYears.map((item, i) => {
                  return (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
              <select
                className="selectOver"
                disabled={uredi14 ? false : true}
                style={{ maxWidth: "100px", fontSize: 13 }}
                id="month"
                defaultValue={monthDoc}
                onChange={(e) => {
                  setmonthDoc(e.target.value);
                }}
              >
                <option value={""}>Mjesec</option>
                {yearDoc &&
                  dateData.months.map((item, i) => {
                    return (
                      <option key={i} value={item.val}>
                        {item.ime}
                      </option>
                    );
                  })}
              </select>
              <select
                className="selectOver"
                disabled={uredi14 ? false : true}
                style={{ maxWidth: "100px", fontSize: 13 }}
                id="day"
                defaultValue={dayDoc}
                onChange={(e) => {
                  setdayDoc(e.target.value);
                }}
              >
                <option value={""}>Dan</option>
                {monthDoc &&
                  monthDoc != "02" &&
                  (dateData.months31.includes(monthDoc)
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
                {monthDoc &&
                  monthDoc === "02" &&
                  dateData.days31
                    .slice(0, dateData.years.includes(yearDoc) ? 29 : 28)
                    .map((item, i) => {
                      return (
                        <option key={i} value={item}>
                          {item}
                        </option>
                      );
                    })}
              </select>
              <button onClick={() => seturedi14(true)}>
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
              <button onClick={() => seturedi14(false)}>
                <i class="fa fa-save"></i>
              </button>
            </div>
            {!dayDoc && (
              <p
                style={{
                  color: "red",
                  marginTop: -12,
                  fontSize: 13.8,
                }}
              >
                Prvo odaberite iz izbornika Godinu, zatim Mjesec i onda Dan do
                kada vrijedi putna isprava.
              </p>
            )}
            <label>Telefon putnika</label>
            <div className="inputContOver">
              <InputMask
                disabled={uredi15 ? false : true}
                style={{ maxWidth: 300, fontSize: 13 }}
                mask="+385 (0) 99/999/9999"
                defaultValue={data.data.Tel}
                className="inputOver"
                id="telPutnika"
                alwaysShowMask={true}
                type="tel"
              />
              <button onClick={() => seturedi15(true)}>
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
              <button onClick={() => seturedi15(false)}>
                <i class="fa fa-save"></i>
              </button>
            </div>
            <label>
              Mobitel putnika <b style={{ color: "#B11F23" }}>(obavezno)</b>
            </label>
            <div className="inputContOver">
              <InputMask
                disabled={uredi16 ? false : true}
                mask="+385 (0) 99/999/9999"
                style={{ maxWidth: 300, fontSize: 13 }}
                id="MobPutnika"
                defaultValue={data.data.Mob}
                className="inputOver"
                alwaysShowMask={true}
                type="tel"
              />
              <button onClick={() => seturedi16(true)}>
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>{" "}
              <button onClick={() => seturedi16(false)}>
                <i class="fa fa-save"></i>
              </button>
            </div>
            <label>
              E-mail putnika <b style={{ color: "#B11F23" }}>(obavezno)</b>
            </label>
            <div className="inputContOver">
              <input
                disabled={uredi17 ? false : true}
                style={{
                  textTransform: "none",
                  fontSize: 13,
                  fontWeight: uredi17 === false ? 600 : 400,
                }}
                placeholder="Popunite E-mail (npr. ivo.ivic@gmail.com)"
                id="emailPutnika"
                type="email"
                className="inputOver"
                defaultValue={data.data.Email}
              />{" "}
              <button onClick={() => seturedi17(true)}>
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
              <button onClick={() => seturedi17(false)}>
                <i class="fa fa-save"></i>
              </button>
            </div>
            <label>
              Način plaćanja <b style={{ color: "#B11F23" }}>(obavezno)</b>
            </label>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {activeAran.CijenaAWebPrikaz === "True" && (
                <span
                  style={{ fontWeight: price === "A" ? 600 : 400 }}
                  className="priceExpl"
                >
                  A (cijena s popustom) -Uplata cjelokupnog iznosa aranžmana
                  jednokratno novčanicama, internet/mobilnim bankarstvom ili
                  uplatnicom koju dostavlja agencija (elektronskom poštom) s
                  datumom dospijeća naznačenim na aranžmanu
                  <br />{" "}
                </span>
              )}
              {activeAran.CijenaBWebPrikaz === "True" && (
                <span
                  style={{ fontWeight: `${price === "B" ? 600 : 400}` }}
                  className="priceExpl"
                >
                  B (cijena s popustom) -Uplata rezervacije, te ostatka iznosa
                  na mjesečne obroke uplatnicama koje dostavlja agencija
                  (elektronskom poštom) s datumom dospijeća naznačenim na
                  aranžmanu
                </span>
              )}
              {activeAran.CijenaCWebPrikaz === "True" && (
                <span
                  style={{ fontWeight: price === "C" ? 600 : 400 }}
                  className="priceExpl"
                >
                  C (osnovna cijena) -Uplata cjelokupnog iznosa aranžmana
                  jednokratno ili obročno debitnim ili kreditnim karticama (max
                  12 obroka) do datuma naznačenog na aranžmanu
                </span>
              )}
            </div>
            <div className="inputContOver">
              <select
                className="selectOverLast"
                id="nacinPlacanja"
                style={{
                  fontSize: 13,
                  fontWeight: uredi18 === false ? 600 : 400,
                }}
                defaultValue={price}
                disabled={uredi18 ? false : true}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              >
                <option value="">---</option>
                {activeAran.CijenaAWebPrikaz === "True" && (
                  <option
                    disabled={
                      new Date(`${dateA[2]}-${dateA[1]}-${dateA[0]}`) <= today
                        ? new Date(
                            `${dateA[2]}-${dateA[1]}-${dateA[0]}`
                          ).getDay() !== today.getDay() &&
                          new Date(
                            `${dateA[2]}-${dateA[1]}-${dateA[0]}`
                          ).getMonth() !== today.getMonth()
                          ? true
                          : false
                        : false
                    }
                    value={"A"}
                  >{`A - ${activeAran.CijenaA},00 ( uplata do ${activeAran.DatumZaCijenuA} )`}</option>
                )}
                {activeAran.CijenaBWebPrikaz === "True" && (
                  <option
                    disabled={
                      new Date(`${dateB[2]}-${dateB[1]}-${dateB[0]}`) <= today
                        ? new Date(
                            `${dateB[2]}-${dateB[1]}-${dateB[0]}`
                          ).getDay() !== today.getDay() &&
                          new Date(
                            `${dateB[2]}-${dateB[1]}-${dateB[0]}`
                          ).getMonth() !== today.getMonth()
                          ? true
                          : false
                        : false
                    }
                    value={"B"}
                  >{`B - ${activeAran.CijenaB},00 ( uplata do ${activeAran.DatumZaCijenuB} )`}</option>
                )}
                {activeAran.CijenaCWebPrikaz === "True" && (
                  <option
                    disabled={
                      new Date(`${dateC[2]}-${dateC[1]}-${dateC[0]}`) <= today
                        ? new Date(
                            `${dateC[2]}-${dateC[1]}-${dateC[0]}`
                          ).getDay() !== today.getDay() &&
                          new Date(
                            `${dateC[2]}-${dateC[1]}-${dateC[0]}`
                          ).getMonth() !== today.getMonth()
                          ? true
                          : false
                        : false
                    }
                    value={"C"}
                  >{`C - ${activeAran.CijenaC},00 ( uplata do ${activeAran.DatumZaCijenuC} )`}</option>
                )}
              </select>
              <button onClick={() => seturedi18(true)}>
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
              <button onClick={() => seturedi18(false)}>
                <i class="fa fa-save"></i>
              </button>
            </div>
          </div>
          <div className="buttonCont" style={{ marginBottom: 20 }}>
            <></>
            <button
              className="nextPrev"
              onClick={() => {
                data.setUgovaratelj({
                  ime: imeRoditelj,
                  prezime: prezimeRoditelj,
                });
                data.setStep3({
                  RoditeljSkrbnik: `${imeRoditelj} ${prezimeRoditelj}`,
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
                });
                data.setStep4({
                  BrojPutneIsprave: document.getElementById("docBroj").value,
                  Cijena: NacinPlacanja(price),
                  Email: document.getElementById("emailPutnika").value,
                  FotoVideoSuglasnost: data.data.FotoVideoSuglasnost,
                  Mob: document.getElementById("MobPutnika").value,
                  NacinPlacanja: price,
                  PutnaIspravaVrijediDo: dateDoc,
                  Tel: document.getElementById("telPutnika").value,
                  VrstaPutneIsprave: document.getElementById("dokument").value,
                });
                setsubmit(true);

                window.localStorage.clear();
              }}
            >
              Pošalji prijavu
            </button>
          </div>
        </div>
      </div>
    );
}
