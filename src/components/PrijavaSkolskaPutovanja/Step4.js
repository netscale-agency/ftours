import React, { useEffect, useState } from "react";
import { postData } from "./util/post";
import InputMask from "react-input-mask";
import { dateData } from "./util/check";

export default function Step4({
  data,
  setActive,
  active,
  step4,
  setStep4,
  contentData,
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
  const [date, setDate] = useState();
  const [month, setmonth] = useState("");
  useEffect(() => {
    setDate(`${day}.${month}.${year}`);
  }, [year, month, day]);
  useEffect(() => {
    if (
      data.Adresa &&
      data.Email &&
      data.Cijena &&
      data.Prezime &&
      data.DatumRodjenja &&
      data.BrojPutneIsprave &&
      data.Tel
    )
      postData({
        zaglavlje: {
          Adresa: data.Adresa,
          BrojPutneIsprave: data.BrojPutneIsprave,
          Cijena: data.Cijena,
          DatumRodjenja: data.DatumRodjenja,
          Drzava: "HR",
          Email: data.Email,
          FotoVideoSuglasnost: data.FotoVideoSuglasnost,
          GrupaId: data.GrupaId,
          Ime: data.Ime,
          KontaktOsobaId: data.KontaktOsobaId,
          Mjesto: data.Mjesto,
          Mob: data.Mob,
          NacinPlacanja: data.NacinPlacanja,
          Prezime: data.Prezime,
          PutnaIspravaVrijediDo: data.PutnaIspravaVrijediDo,
          Razred: data.Razred,
          RoditeljSkrbnik: data.RoditeljSkrbnik,
          RoditeljSkrbnikEmail: data.RoditeljSkrbnikEmail,
          RoditeljSkrbnikMob: data.RoditeljSkrbnikMob,
          Signature: data.Signature,
          Spol: data.BrojPutneIsprave,
          Tel: data.Tel,
          VrstaPutneIsprave: data.VrstaPutneIsprave,
        },
      });
  }, [step4]);
  const NacinPlacanja = (str) => {
    if (str === activeAran.CijenaA) {
      return "A";
    } else if (str === activeAran.CijenaB) {
      return "B";
    } else {
      return "C";
    }
  };

  return (
    <div>
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
          Prvo odaberite iz izbornika Godinu, zatim Mjesec i onda Dan do kada vrijedi putna isprava.
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
            uplatnicom koju dostavlja agencija (elektronskom poštom) s datumom
            dospijeća naznačenim na aranžmanu
          </span>
        )}
        {activeAran.CijenaBWebPrikaz === "True" && (
          <span>
            B (cijena s popustom) -Uplata rezervacije, te ostatka iznosa na
            mjesečne obroke uplatnicama koje dostavlja agencija (elektronskom
            poštom) s datumom dospijeća naznačenim na aranžmanu
          </span>
        )}
        {activeAran.CijenaCWebPrikaz === "True" && (
          <span>
            C (osnovna cijena) -Uplata cjelokupnog iznosa aranžmana jednokratno
            ili obročno debitnim ili kreditnim karticama (max 12 obroka) do
            datuma naznačenog na aranžmanu
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
      <label> RODITELJSKA PRIVOLA ZA UPRAVLJANJE OSOBNIM PODACIMA</label>
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
        određen važećim nacionalnim ili europskim propisima. <br/><br/><b>Izjavljujem da
        privolu dajem dobrovoljno, da mi je detaljno pojašnjena namjera
        korištenja osobnih podataka djeteta u svrhe iz ove privole kao i moje
        pravo da se predmetnoj obradi usprotivim te da ova privola predstavlja
        izričitu privolu sukladno važećim zakonskim propisima koji uređuju
        zaštitu osobnih podataka te da je uporaba osobnih podataka djeteta
        dozvoljena na opisani način i u zadanom opsegu. (obavezno)</b>
        <input
          type="checkbox"
          id="uvjeti"
          onChange={() => setChecked(!checked)}
        />
      </span>
      <label>
        Suglasan sam da se fotografije/video snimke/audio snimke mog djeteta sa
        putovanja objave na društvenim mrežama Agencije (obavezno)
      </label>
      <input
        id="suglasnost"
        type="checkbox"
        onChange={() => setChecked1(!checked1)}
      />{" "}
      <a href="https://destinationsftours-my.sharepoint.com/:b:/g/personal/marko_f-tours_hr/EYlcvPyWVPxMnAAiSzO5DpQBIMZwKzXhH0_dBYvhCpP4zg?e=akM3HE">
        {" "}
        <label>Pročitao/la sam i prihvaćam opće uvjete (obavezno)</label>
      </a>
      <input
        id="općiUvjeti"
        type="checkbox"
        onChange={() => setChecked2(!checked2)}
      />
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
          disabled={checked && checked1 && checked2 ? false : true}
          onClick={() => {
            if (document.getElementById("MobPutnika").value) {
              setStep4({
                BrojPutneIsprave: data,
                Cijena: document.getElementById("nacinPlacanja").value,
                Email: document.getElementById("emailPutnika").value,
                FotoVideoSuglasnost: document.getElementById("suglasnost")
                  .value,
                Mob: document.getElementById("MobPutnika").value,
                NacinPlacanja: NacinPlacanja(
                  document.getElementById("nacinPlacanja").value
                ),
                PutnaIspravaVrijediDo: document.getElementById("docTrajanje")
                  .value,
                Tel: document.getElementById("telPutnika").value,
                VrstaPutneIsprave: document.getElementById("dokument").value,
              });
              localStorage.setItem(
                "step4",
                JSON.stringify({
                  BrojPutneIsprave: document.getElementById("docBroj").value,
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
                  VrstaPutneIsprave: document.getElementById("dokument").value,
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
  );
}
