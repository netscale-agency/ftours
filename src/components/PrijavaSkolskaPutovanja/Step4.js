import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import { dateData, putovnicaYears } from "./util/check";

export default function Step4({
  setActive,
  active,
  setStep4,
  contentData,
  setactivateCheck,
  aran,
}) {
  const [activeAran, setActiveAran] = useState(
    contentData.filter((item) => item.GrupaId === aran)[0]
  );

  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [day, setday] = useState("");
  const [year, setYear] = useState("");
  const [dokument, setDokument] = useState("");
  const [price, setPrice] = useState("");
  const [brDoc, setbrDoc] = useState("");
  const today = new Date();
  const [date, setDate] = useState("");
  const [foto, setFoto] = useState("Ne");
  const [month, setmonth] = useState("");
  const checkPutna = (date, br) => {
    if (date && br) {
      return true;
    } else if (!date && !br) {
      return true;
    } else {
      return false;
    }
  };
  useEffect(() => {
    if (day && month && year) setDate(`${day}${day&&'.'}${month}${month&&'.'}${year}`);
  }, [year, month, day]);
  const dateA = activeAran.DatumZaCijenuA.split(".");
  const dateB = activeAran.DatumZaCijenuB.split(".");
  const dateC = activeAran.DatumZaCijenuC.split(".");
  const NacinPlacanja = (str) => {
    if (str === "A") {
      return activeAran.CijenaA;
    } else if (str === "B") {
      return activeAran.CijenaB;
    } else {
      return activeAran.CijenaB;
    }
  };

  return (
    <div className="stepAlign">
      <b>
        <label>Vrsta putne isprave putnika</label>
      </b>
      <div style={{ display: "flex" }}>
        <label style={{ marginTop: "auto", marginBottom: "auto" }}>
          Osobna iskaznica
        </label>
        <input
          style={{ width: 20, marginTop: "auto", marginBottom: "auto" }}
          id="dokument"
          type="radio"
          name="dokument"
          defaultChecked={dokument === "Osobna iskaznica" ? true : false}
          onClick={() => setDokument("Osobna iskaznica")}
          value={"Osobna iskaznica"}
        />
        <label style={{ marginTop: "auto", marginBottom: "auto" }}>
          Putovnica
        </label>
        <input
          style={{ width: 20, marginTop: "auto", marginBottom: "auto" }}
          id="dokument"
          type="radio"
          name="dokument"
          defaultChecked={dokument === "Putovnica" ? true : false}
          onClick={() => setDokument("Putovnica")}
          value={"Putovnica"}
        />
      </div>
      <br />
      <label>Broj putne isprave putnika</label>
      <input
        id="docBroj"
        type="text"
        style={{ maxWidth: 300 }}
        onChange={(e) => {
          setbrDoc(e.target.value);
        }}
        placeholder="Popunite broj putne isprave"
      />{" "}
      {!day && (
        <p
          style={{
            marginTop: -8,
            color: "#0d6efd",
            fontSize: 13.8,
          }}
        >
          Za putovanja u inozemstvo potrebno dostaviti broj važeće putne isprave
          s kojom će se putovati i do kada vrijedi <br />
          (najkasnije 30 dana prije polaska!)
        </p>
      )}
      <label>Putna isprava vrijedi do</label>
      <div id="docTrajanje" style={{ display: "flex" }}>
        <select
          disabled={brDoc ? false : true}
          style={{ maxWidth: "100px" }}
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
          disabled={brDoc ? false : true}
          style={{ maxWidth: "100px" }}
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
          disabled={brDoc ? false : true}
          style={{ maxWidth: "100px" }}
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
          }}
        >
          Prvo odaberite iz izbornika Godinu, zatim Mjesec i onda Dan do kada
          vrijedi putna isprava.
        </p>
      )}
      <label>Telefon putnika</label>
      <InputMask
        style={{
          maxWidth: 300,
        }}
        mask="+385 (0) 99/999/9999"
        id="telPutnika"
        alwaysShowMask={true}
        type="tel"
      />
      <label>
        Mobitel putnika <b style={{ color: "#B11F23" }}>(obavezno)</b>
      </label>
      <InputMask
        style={{
          maxWidth: 300,
        }}
        mask="+385 (0) 99/999/9999"
        id="MobPutnika"
        alwaysShowMask={true}
        type="tel"
      />
      <label>
        E-mail putnika <b style={{ color: "#B11F23" }}>(obavezno)</b>
      </label>
      <input
        className="selectLast"
        style={{ textTransform: "none" }}
        placeholder="Popunite E-mail (npr. ivo.ivic@gmail.com)"
        id="emailPutnika"
        type="email"
      />{" "}
      <label>
        Način plaćanja <b style={{ color: "#B11F23" }}>(obavezno)</b>
      </label>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {activeAran.CijenaAWebPrikaz === "True" && (
          <span style={{ fontWeight: price === "A" ? 600 : 400 }}>
            <b>A (cijena s popustom)</b> -Uplata cjelokupnog iznosa aranžmana
            jednokratno novčanicama, internet/mobilnim bankarstvom ili
            uplatnicom koju dostavlja agencija (elektronskom poštom) s datumom
            dospijeća naznačenim na aranžmanu
            <br />{" "}
          </span>
        )}
        {activeAran.CijenaBWebPrikaz === "True" && (
          <span style={{ fontWeight: `${price === "B" ? 600 : 400}` }}>
            <b>B (cijena s popustom)</b> -Uplata rezervacije, te ostatka iznosa
            na mjesečne obroke uplatnicama koje dostavlja agencija (elektronskom
            poštom) s datumom dospijeća naznačenim na aranžmanu
          </span>
        )}
        {activeAran.CijenaCWebPrikaz === "True" && (
          <span style={{ fontWeight: price === "C" ? 600 : 400 }}>
            <b>C (osnovna cijena)</b> -Uplata cjelokupnog iznosa aranžmana
            jednokratno ili obročno debitnim ili kreditnim karticama (max 12
            obroka) do datuma naznačenog na aranžmanu
          </span>
        )}
      </div>
      <select
        className="selectLast"
        id="nacinPlacanja"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      >
        <option>---</option>
        {activeAran.CijenaAWebPrikaz === "True" && (
          <option
            disabled={
              new Date(`${dateA[2]}-${dateA[1]}-${dateA[0]}`) < today
                ? new Date(`${dateA[2]}-${dateA[1]}-${dateA[0]}`).getDay() !==
                    today.getDay() &&
                  new Date(`${dateA[2]}-${dateA[1]}-${dateA[0]}`).getMonth() !==
                    today.getMonth()
                  ? true
                  : false
                : false
            }
            value={"A"}
          >{`A - ${activeAran.CijenaA} kn / ${Math.round((Number(activeAran.CijenaA.replace(/,/g, "."))/7.5345)*100)/100}€ ( uplata do ${activeAran.DatumZaCijenuA} )`}</option>
        )}
        {activeAran.CijenaBWebPrikaz === "True" && (
          <option
            disabled={
              new Date(`${dateB[2]}-${dateB[1]}-${dateB[0]}`) < today
                ? new Date(`${dateB[2]}-${dateB[1]}-${dateB[0]}`).getDay() !==
                    today.getDay() &&
                  new Date(`${dateB[2]}-${dateB[1]}-${dateB[0]}`).getMonth() !==
                    today.getMonth()
                  ? true
                  : false
                : false
            }
            value={"B"}
          >{`B - ${activeAran.CijenaB} kn / ${Math.round((Number(activeAran.CijenaB.replace(/,/g, "."))/7.5345)*100)/100}€ ( uplata do ${activeAran.DatumZaCijenuB} )`}</option>
        )}
        {activeAran.CijenaCWebPrikaz === "True" && (
          <option
            disabled={
              new Date(`${dateC[2]}-${dateC[1]}-${dateC[0]}`) < today
                ? new Date(`${dateC[2]}-${date[1]}-${dateC[0]}`).getDay() !==
                    today.getDay() &&
                  new Date(`${dateC[2]}-${dateC[1]}-${dateC[0]}`).getMonth() !==
                    today.getMonth()
                  ? true
                  : false
                : false
            }
            value={"C"}
          >{`C - ${activeAran.CijenaC} kn / ${Math.round((Number(activeAran.CijenaC.replace(/,/g, "."))/7.5345)*100)/100}€ ( uplata do ${activeAran.DatumZaCijenuC} )`}</option>
        )}
      </select>
      <label>
        {" "}
        <b>RODITELJSKA PRIVOLA ZA UPRAVLJANJE OSOBNIM PODACIMA</b>
      </label>
      <br />
      <span>
        {" "}
        Ja, kao nositelj roditeljske skrbi maloljetnika suglasan sam da Agencija
        obrađuje osobne podatke putnika (ime i prezime, datum rođenja, broj
        putnog dokumenta) mog djeteta u slučaju kada je to neophodno za
        realizaciju usluge smještaja, prijevoza, osiguranja i ulaznica za
        posjete muzejima, te da se osobni podaci: ime, prezime i datum rođenja
        mogu proslijediti društvima navedenim u paket aranžmanu. Osobni podaci
        će se koristiti samo u prethodno navedene svrhe i čuvat će se sukladno
        zakonskim i regulatornim propisima Opće uredbe o zaštiti osobnih
        podataka (GDPR 2016/679), odnosno u trajanju od 5 godina od završetka
        usluge, osim ako dulji vremenski period čuvanja osobnih podataka nije
        određen važećim nacionalnim ili europskim propisima. <br />
        <b>
          Izjavljujem da privolu dajem dobrovoljno, da mi je detaljno pojašnjena
          namjera korištenja osobnih podataka djeteta u svrhe iz ove privole kao
          i moje pravo da se predmetnoj obradi usprotivim te da ova privola
          predstavlja izričitu privolu sukladno važećim zakonskim propisima koji
          uređuju zaštitu osobnih podataka te da je uporaba osobnih podataka
          djeteta dozvoljena na opisani način i u zadanom opsegu. <br />
          <b style={{ color: "#B11F23" }}>(obavezno)</b>
        </b>
        <br />
        <input
          style={{ alignItems: "start", width: 17, height: 17 }}
          type="checkbox"
          id="uvjeti"
          onChange={() => setChecked(!checked)}
        />
        <br />
      </span>
      <p>
        Opoziv suglasnosti je moguće ostvariti na način da se pošalje obavijest
        o opozivu na e-mail adresu desk@f-tours.hr ili na adresu Destinations
        F-tours d.o.o., Trg Hrvatske bratske zajednice 2, 21000 Split.
      </p>
      <label>
        <b>
          {" "}
          Suglasan sam da se fotografije/video snimke/audio snimke mog djeteta
          sa putovanja objave na društvenim mrežama Agencije{" "}
        </b>
        <br />
        <b style={{ color: "#B11F23" }}>(obavezno)</b>
      </label>
      <div style={{ display: "flex" }}>
        <label>Da</label>
        <input
          id="suglasnost"
          type="radio"
          onClick={() => setFoto("Da")}
          name="suglasnost"
          style={{ width: 17, height: 17 }}
          value={"Da"}
        />{" "}
        <label style={{ marginLeft: 32 }}>Ne</label>
        <input
          id="suglasnost"
          type="radio"
          name="suglasnost"
          onClick={() => setFoto("Ne")}
          value={"Ne"}
          style={{ width: 17, height: 17 }}
        />
      </div>
      <a
        style={{ cursor: "pointer" }}
        target="blank"
        href="https://destinationsftours-my.sharepoint.com/personal/marko_f-tours_hr/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fmarko%5Ff%2Dtours%5Fhr%2FDocuments%2FWEB%2F2023%2Ff%2Dtours%20opci%20uvjeti%202023%2Epdf&parent=%2Fpersonal%2Fmarko%5Ff%2Dtours%5Fhr%2FDocuments%2FWEB%2F2023"
      >
        {" "}
        <label style={{ cursor: "pointer" }}>
          Pročitao/la sam i prihvaćam opće uvjete <br />
          <b style={{ color: "#B11F23" }}>(obavezno)</b>
        </label>
      </a>
      <input
        id="općiUvjeti"
        type="checkbox"
        style={{ width: 17, height: 17 }}
        onChange={() => setChecked2(!checked2)}
      />
      <p>
        <b>
          Slanjem ove prijave Pošiljatelj je potvrdio da je upoznat sa detaljima
          aranžmana i Općim uvjetima poslovanja putničke agencije Destinations
          F-tours d.o.o. i dao je osobnu/roditeljsku privolu za upravljanje
          osobnim podacima te je potvrdio da su dostavljeni podaci istiniti.
        </b>
      </p>
      <div className="buttonCont" style={{ marginBottom: 20 }}>
        <button
          disabled={active === 0 ? true : false}
          className="prev"
          onClick={() => {
            if (active > 0) {
              setActive(active - 1);
            }
          }}
        >
          Prethodni korak
        </button>
        <button
          className="nextPrev"
          disabled={
            checked &&
            checked2 &&
            price &&
            document.getElementById("emailPutnika").value &&
            document.getElementById("telPutnika").value &&
            document.getElementById("MobPutnika").value &&
            checkPutna(date, brDoc) &&
            price
              ? false
              : true
          }
          onClick={() => {
            if (document.getElementById("MobPutnika").value) {
              setStep4({
                BrojPutneIsprave: document.getElementById("docBroj").value,
                Cijena: NacinPlacanja(price),
                Email: document.getElementById("emailPutnika").value,
                FotoVideoSuglasnost: foto,
                Mob: document.getElementById("MobPutnika").value,
                NacinPlacanja: price,
                PutnaIspravaVrijediDo: date,
                Tel: document.getElementById("telPutnika").value,
                VrstaPutneIsprave: dokument,
              });
              localStorage.setItem(
                "step4",
                JSON.stringify({
                  BrojPutneIsprave: document.getElementById("docBroj").value,
                  Cijena: NacinPlacanja(price),
                  Email: document.getElementById("emailPutnika").value,
                  FotoVideoSuglasnost: foto,
                  Mob: document.getElementById("MobPutnika").value,
                  NacinPlacanja: price,
                  PutnaIspravaVrijediDo: date,
                  Tel: document.getElementById("telPutnika").value,
                  VrstaPutneIsprave: dokument,
                })
              );
              setactivateCheck(true);
              // window.localStorage.clear();
            }
          }}
        >
          Sljedeći korak
        </button>
      </div>
    </div>
  );
}
