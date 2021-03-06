import React, { useEffect, useState } from "react";
import { postData } from "./util/post";
import InputMask from "react-input-mask";
import { dateData, putovnicaYears } from "./util/check";

export default function Step4({
  data,
  setActive,
  active,
  step4,
  setStep4,
  contentData,
  setactivateCheck,
  aran,
}) {
  const [activeAran, setActiveAran] = useState(
    contentData.filter((item) => item.GrupaId === aran)[0]
  );
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [day, setday] = useState("");
  const [year, setYear] = useState();
  const [dokument, setDokument] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [foto, setFoto] = useState("Ne");
  const [month, setmonth] = useState("");
  useEffect(() => {
    setDate(`${day}.${month}.${year}`);
  }, [year, month, day]);

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
      <label>Broj putne isprave putnika</label>
      <input
        id="docBroj"
        type="text"
        style={{ maxWidth: 300 }}
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
          Za putovanja u inozemstvo potrebno dostaviti broj va??e??e putne isprave
          s kojom ??e se putovati i do kada vrijedi <br />
          (najkasnije 30 dana prije polaska!)
        </p>
      )}
      <label>Putna isprava vrijedi do</label>
      <div id="docTrajanje" style={{ display: "flex" }}>
        <select
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
        Na??in pla??anja <b style={{ color: "#B11F23" }}>(obavezno)</b>
      </label>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {activeAran.CijenaAWebPrikaz === "True" && (
          <span style={{ fontWeight: price === "A" ? 600 : 400 }}>
            <b>A (cijena s popustom)</b> -Uplata cjelokupnog iznosa aran??mana
            jednokratno nov??anicama, internet/mobilnim bankarstvom ili
            uplatnicom koju dostavlja agencija (elektronskom po??tom) s datumom
            dospije??a nazna??enim na aran??manu
            <br />{" "}
          </span>
        )}
        {activeAran.CijenaBWebPrikaz === "True" && (
          <span style={{ fontWeight: `${price === "B" ? 600 : 400}` }}>
            <b>B (cijena s popustom)</b> -Uplata rezervacije, te ostatka iznosa
            na mjese??ne obroke uplatnicama koje dostavlja agencija (elektronskom
            po??tom) s datumom dospije??a nazna??enim na aran??manu
          </span>
        )}
        {activeAran.CijenaCWebPrikaz === "True" && (
          <span style={{ fontWeight: price === "C" ? 600 : 400 }}>
            <b>C (osnovna cijena)</b> -Uplata cjelokupnog iznosa aran??mana
            jednokratno ili obro??no debitnim ili kreditnim karticama (max 12
            obroka) do datuma nazna??enog na aran??manu
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
            value={"A"}
          >{`A - ${activeAran.CijenaA},00 ( uplata do ${activeAran.DatumZaCijenuA} )`}</option>
        )}
        {activeAran.CijenaBWebPrikaz === "True" && (
          <option
            value={"B"}
          >{`B - ${activeAran.CijenaB},00 ( uplata do ${activeAran.DatumZaCijenuB} )`}</option>
        )}
        {activeAran.CijenaCWebPrikaz === "True" && (
          <option
            value={"C"}
          >{`C - ${activeAran.CijenaC},00 ( uplata do ${activeAran.DatumZaCijenuC} )`}</option>
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
        obra??uje osobne podatke putnika (ime i prezime, datum ro??enja, broj
        putnog dokumenta) mog djeteta u slu??aju kada je to neophodno za
        realizaciju usluge smje??taja, prijevoza, osiguranja i ulaznica za
        posjete muzejima, te da se osobni podaci: ime, prezime i datum ro??enja
        mogu proslijediti dru??tvima navedenim u paket aran??manu. Osobni podaci
        ??e se koristiti samo u prethodno navedene svrhe i ??uvat ??e se sukladno
        zakonskim i regulatornim propisima Op??e uredbe o za??titi osobnih
        podataka (GDPR 2016/679), odnosno u trajanju od 5 godina od zavr??etka
        usluge, osim ako dulji vremenski period ??uvanja osobnih podataka nije
        odre??en va??e??im nacionalnim ili europskim propisima. <br />
        <b>
          Izjavljujem da privolu dajem dobrovoljno, da mi je detaljno poja??njena
          namjera kori??tenja osobnih podataka djeteta u svrhe iz ove privole kao
          i moje pravo da se predmetnoj obradi usprotivim te da ova privola
          predstavlja izri??itu privolu sukladno va??e??im zakonskim propisima koji
          ure??uju za??titu osobnih podataka te da je uporaba osobnih podataka
          djeteta dozvoljena na opisani na??in i u zadanom opsegu. <br />
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
        Opoziv suglasnosti je mogu??e ostvariti na na??in da se po??alje obavijest
        o opozivu na e-mail adresu desk@f-tours.hr ili na adresu Destinations
        F-tours d.o.o., Trg Hrvatske bratske zajednice 2, 21000 Split.
      </p>
      <label>
        <b>
          {" "}
          Suglasan sam da se fotografije/video snimke/audio snimke mog djeteta
          sa putovanja objave na dru??tvenim mre??ama Agencije{" "}
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
        href="https://destinationsftours-my.sharepoint.com/:b:/g/personal/marko_f-tours_hr/EYlcvPyWVPxMnAAiSzO5DpQBIMZwKzXhH0_dBYvhCpP4zg?e=akM3HE"
      >
        {" "}
        <label style={{ cursor: "pointer" }}>
          Pro??itao/la sam i prihva??am op??e uvjete <br />
          <b style={{ color: "#B11F23" }}>(obavezno)</b>
        </label>
      </a>
      <input
        id="op??iUvjeti"
        type="checkbox"
        style={{ width: 17, height: 17 }}
        onChange={() => setChecked2(!checked2)}
      />
      <p>
        <b>
          Slanjem ove prijave Po??iljatelj je potvrdio da je upoznat sa detaljima
          aran??mana i Op??im uvjetima poslovanja putni??ke agencije Destinations
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
          disabled={checked && checked2 ? false : true}
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
          Sljede??i korak
        </button>
      </div>
    </div>
  );
}
