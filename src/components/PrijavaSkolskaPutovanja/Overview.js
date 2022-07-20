import React, { useEffect, useState } from "react";
import { check, dateData, putovnicaYears } from "./util/check";
import { cityData } from "./util/data";
import { postData } from "./util/post";
import InputMask from "react-input-mask";

export default function Overview(data) {
  const [day, setday] = useState(data.data.DatumRodjenja.split(".")[0]);
  const [year, setYear] = useState(data.data.DatumRodjenja.split(".")[2]);
  const [month, setmonth] = useState(data.data.DatumRodjenja.split(".")[1]);
  const [spol, setSpol] = useState(data.data.Spol);
  const [date, setDate] = useState();
  const [city, setCity] = useState(data.data.Mjesto || "");

  const thisYear = new Date().getFullYear();
  const NacinPlacanja = (str) => {
    if (str === activeAran.CijenaA) {
      return "A";
    } else if (str === activeAran.CijenaB) {
      return "B";
    } else {
      return "C";
    }
  };
  const [imeRoditelj, setImeRoditelj] = useState();

  const activeAran = data.contentData.filter(
    (item) => item.GrupaId === data.aran
  )[0];
  const [prezimeRoditelj, setPrezimeRoditelj] = useState();
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
  }, [year, month, day]);
  useEffect(() => {
    if (
      data.data.Adresa &&
      data.data.Email &&
      data.data.Cijena &&
      data.data.Prezime &&
      cityData.includes(city) &&
      year < thisYear &&
      data.data.DatumRodjenja &&
      data.data.BrojPutneIsprave &&
      data.data.Tel
    )
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
          Mob: data.data.Mob,
          NacinPlacanja: data.data.NacinPlacanja,
          Prezime: data.data.Prezime,
          PutnaIspravaVrijediDo: data.data.PutnaIspravaVrijediDo,
          Razred: data.data.Razred,
          RoditeljSkrbnik: data.data.RoditeljSkrbnik,
          RoditeljSkrbnikEmail: data.data.RoditeljSkrbnikEmail,
          RoditeljSkrbnikMob: data.data.RoditeljSkrbnikMob,
          Signature: data.data.Signature,
          Spol: data.data.BrojPutneIsprave,
          Tel: data.data.Tel,
          VrstaPutneIsprave: data.data.VrstaPutneIsprave,
        },
      });
  }, [submit]);
  if (data)
    return (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "15px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "800px",
          }}
        >
          <h2>Provjera podataka</h2>
          <label>
            Prezime ugovaratelja putovanja (roditelj/staratelj){" "}
            <b>(obavezno)</b>
          </label>
          <input
            placeholder="Popunite Prezime (npr. Horvat)"
            style={{ textTransform: "capitalize" }}
            defaultValue={data.data.RoditeljSkrbnik.split(" ")[1]}
            onChange={(e) => {
              setPrezimeRoditelj(e.target.value);
            }}
            id="prezimeRoditelj"
            type="text"
          />
          <span style={{ color: "red", marginTop: -16, fontSize: 14 }}>
            {(!data.data.RoditeljIme || prezimeRoditelj === "") &&
              check(prezimeRoditelj, "prezimeRoditelj")}
          </span>
          <label>
            Ime ugovaratelja putovanja (roditelj/staratelj)<b>(obavezno)</b>
          </label>
          <input
            placeholder="Popunite Ime (npr. Ante)"
            defaultValue={data.data.RoditeljSkrbnik.split(" ")[0]}
            style={{ textTransform: "capitalize" }}
            onChange={(e) => {
              setImeRoditelj(e.target.value);
            }}
            id="imeRoditelj"
            type="text"
          />{" "}
          <span style={{ color: "red", marginTop: -16, fontSize: 14 }}>
            {(!data.data.roditeljPrezime || imeRoditelj === "") &&
              check(imeRoditelj, "imeRoditelj")}
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
            defaultValue={data.data.RoditeljSkrbnikMob}
            type="tel"
          />
          <span style={{ color: "red", marginTop: -16, fontSize: 14 }}>
            {(!data.data.RoditeljSkrbnikMob || telRoditelj === "") &&
              check(telRoditelj, "telRoditelj")}
          </span>
          <label>
            E-mail ugovaratelja putovanja <b>(obavezno)</b>
          </label>
          <input
            defaultValue={data.data.RoditeljSkrbnikEmail}
            id="emailRoditelj"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Popunite E-mail (npr. ivo.ivic@gmail.com)"
            type="email"
          />{" "}
          <span style={{ color: "red", marginTop: -16, fontSize: 14 }}>
            {(!data.data.RoditeljSkrbnikEmail || email === "") &&
              check(email, "emailRoditelj")}
          </span>
          <label>
            Prezime putnika <b>(obavezno)</b>
          </label>
          <input
            style={{ textTransform: "uppercase" }}
            defaultValue={data.data.Prezime}
            id="prezimePutnika"
            onChange={(e) => {
              setPrezimePutnika(e.target.value);
            }}
            placeholder="Popunite prezime (npr. HORVAT)"
            type="text"
          />{" "}
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
          <p style={{ color: "#0d6efd", marginTop: -12, fontSize: 13.8 }}>
            Koristite hrvatske dijakritičke znakove (č, ć, dž, đ, š, ž){" "}
          </p>
          <label>
            Ime putnika <b>(obavezno)</b>
          </label>
          <input
            style={{ textTransform: "uppercase" }}
            defaultValue={data.data.Ime}
            id="imePutnika"
            onChange={(e) => {
              setImePutnika(e.target.value);
            }}
            placeholder="Popunite ime (npr. ANTE)"
            type="text"
          />{" "}
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
          <p style={{ color: "#0d6efd", marginTop: -12, fontSize: 13.8 }}>
            Koristite hrvatske dijakritičke znakove (č, ć, dž, đ, š, ž){" "}
          </p>
          <label>
            Adresa putnika <b>(obavezno)</b>
          </label>
          <input
            style={{ textTransform: "capitalize" }}
            defaultValue={data.data.Adresa}
            id="adresaPutnika"
            onChange={(e) => {
              setAdresaPutnika(e.target.value);
            }}
            type="text"
            placeholder="Popunite svoju adresu (npr. Horvatova 1)"
          />{" "}
          <span style={{ color: "red", marginTop: -16, fontSize: 14 }}>
            {(!data.data.Adresa || adresaPutnika === "") &&
              check(adresaPutnika, "adresaPutnika")}
          </span>
          <label>
            Grad/mjesto putnika <b>(obavezno)</b>
          </label>
          <input
            style={{ maxWidth: "474px" }}
            defaultValue={data.data.Mjesto}
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
          <input
            style={{ maxWidth: "474px" }}
            id="drzava"
            type="text"
            defaultValue={"HRVATSKA"}
          />{" "}
          <label>
            Datum rođenja putnika <b>(obavezno)</b>
          </label>
          <div style={{ display: "flex" }}>
            <select
              defaultValue={year}
              style={{ maxWidth: "158px" }}
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
              style={{ maxWidth: "158px" }}
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
              style={{ maxWidth: "158px" }}
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
          <label>Vrsta putne isprave putnika</label>
          <div style={{ display: "flex" }}>
            <label>Osobna iskaznica</label>
            <input
              style={{ width: 20, marginTop: "auto" }}
              id="dokument"
              type="radio"
              value={"Osobna iskaznica"}
            />
            <label>Putovnica</label>
            <input
              style={{ width: 20, marginTop: "auto" }}
              id="dokument"
              type="radio"
              value={"Putovnica"}
            />
          </div>
          <label>Broj putne isprave putnika</label>
          <input
            id="docBroj"
            type="text"
            placeholder="Popunite broj putne isprave"
          />{" "}
          <label>Putna isprava vrijedi do</label>
          <div id="docTrajanje" style={{ display: "flex" }}>
            <select
              style={{ maxWidth: "158px" }}
              id="god"
              onChange={(e) => {
                setYear(e.target.value);
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
              Prvo odaberite iz izbornika Godinu, zatim Mjesec i onda Dan do
              kada vrijedi putna isprava.
            </p>
          )}
          <label>Telefon putnika</label>
          <InputMask
            mask="+385 (0) 99/999/9999"
            id="telPutnika"
            alwaysShowMask={true}
            type="tel"
          />
          <label>Mobitel putnika (obavezno)</label>
          <InputMask
            mask="+385 (0) 99/999/9999"
            id="MobPutnika"
            alwaysShowMask={true}
            type="tel"
          />
          <label>E-mail putnika (obavezno)</label>
          <input
            style={{ textTransform: "none" }}
            placeholder="Popunite E-mail (npr. ivo.ivic@gmail.com)"
            id="emailPutnika"
            type="email"
          />{" "}
          <label>Način plaćanja (obavezno)</label>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {activeAran.CijenaAWebPrikaz === "True" && (
              <span>
                A (cijena s popustom) -Uplata cjelokupnog iznosa aranžmana
                jednokratno novčanicama, internet/mobilnim bankarstvom ili
                uplatnicom koju dostavlja agencija (elektronskom poštom) s
                datumom dospijeća naznačenim na aranžmanu
              </span>
            )}
            {activeAran.CijenaBWebPrikaz === "True" && (
              <span>
                B (cijena s popustom) -Uplata rezervacije, te ostatka iznosa na
                mjesečne obroke uplatnicama koje dostavlja agencija
                (elektronskom poštom) s datumom dospijeća naznačenim na
                aranžmanu
              </span>
            )}
            {activeAran.CijenaCWebPrikaz === "True" && (
              <span>
                C (osnovna cijena) -Uplata cjelokupnog iznosa aranžmana
                jednokratno ili obročno debitnim ili kreditnim karticama (max 12
                obroka) do datuma naznačenog na aranžmanu
              </span>
            )}
          </div>
          <select id="nacinPlacanja">
            {activeAran.CijenaAWebPrikaz === "True" && (
              <option
                value={activeAran.CijenaA}
              >{`A - ${activeAran.CijenaA},00 do (${activeAran.DatumZaCijenuA})`}</option>
            )}
            {activeAran.CijenaBWebPrikaz === "True" && (
              <option
                value={activeAran.CijenaB}
              >{`B - ${activeAran.CijenaB},00 do (${activeAran.DatumZaCijenuB})`}</option>
            )}
            {activeAran.CijenaCWebPrikaz === "True" && (
              <option
                value={activeAran.CijenaC}
              >{`C - ${activeAran.CijenaC},00 do (${activeAran.DatumZaCijenuC})`}</option>
            )}
          </select>
          <div className="buttonCont" style={{ marginBottom: 20 }}>
            <></>
            <button
              className="nextPrev"
              onClick={() => {
                if (document.getElementById("MobPutnika").value) {
                  data.setStep4({
                    BrojPutneIsprave: data,
                    Cijena: document.getElementById("nacinPlacanja").value,
                    Email: document.getElementById("emailPutnika").value,
                    FotoVideoSuglasnost:
                      document.getElementById("suglasnost").value == "on"
                        ? "Da"
                        : "Ne",
                    Mob: document.getElementById("MobPutnika").value,
                    NacinPlacanja: NacinPlacanja(
                      document.getElementById("nacinPlacanja").value
                    ),
                    PutnaIspravaVrijediDo: document.getElementById(
                      "docTrajanje"
                    ).value,
                    Tel: document.getElementById("telPutnika").value,
                    VrstaPutneIsprave: document.getElementById("dokument")
                      .value,
                  });
                  localStorage.setItem(
                    "step4",
                    JSON.stringify({
                      BrojPutneIsprave: document.getElementById("docBroj")
                        .value,
                      Cijena: document.getElementById("nacinPlacanja").value,
                      Email: document.getElementById("emailPutnika").value,
                      FotoVideoSuglasnost: document.getElementById("suglasnost")
                        .value,
                      Mob: document.getElementById("MobPutnika").value,
                      NacinPlacanja: NacinPlacanja(
                        document.getElementById("nacinPlacanja").value
                      ),
                      PutnaIspravaVrijediDo: date,
                      Tel: document.getElementById("telPutnika").value,
                      VrstaPutneIsprave: document.getElementById("dokument")
                        .value,
                    })
                  );
                  window.localStorage.clear();
                }
              }}
            >
              Pošalji
            </button>
          </div>
        </div>
      </div>
    );
}
