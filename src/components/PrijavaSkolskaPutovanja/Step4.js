import React, { useState } from "react";
import { postData } from "./util/post";

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
    <div style={{display:'flex'}}><label>Osobna iskaznica</label>
    <input style={{width:20, marginTop:'auto'}}  id="dokument" type="radio" value={"Osobna iskaznica"} /><label>Putovnica</label>
      <input style={{width:20 ,marginTop:'auto'}} id="dokument" type="radio" value={"Putovnica"} /></div>  
      <label>Broj putne isprave putnika</label>
      <input id="docBroj" type="text" /> <label>Putna isprava vrijedi do</label>
      <input id="docTrajanje" type="date" /> <label>Telefon putnika</label>
      <input id="telPutnika" type="tel" />{" "}
      <label>Mobitel putnika (obavezno)</label>
      <input id="MobPutnika" type="tel" />{" "}
      <label>E-mail putnika (obavezno)</label>
      <input id="emailPutnika" type="email" />{" "}
      <label>Način plaćanja (obavezno)</label>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {activeAran.CijenaAWebPrikaz === "True" && (
          <span>
            A - Uplata cjelokupnog iznosa aranžmana jednokratno novčanicama,
            internet bankarstvom ili uplatnicom koji dostavlja agencija do
            datuma naznačenog na aranžmanu
          </span>
        )}
        {activeAran.CijenaBWebPrikaz === "True" && (
          <span>
            B - Uplata rezervacije navedene na aranžmanu, te ostatka iznosa na
            mjesečne obroke uplatnicama do datuma naznačenog na aranžmanu
            (agencija dostavlja uplatnice putem elektronske pošte){" "}
          </span>
        )}
        {activeAran.CijenaCWebPrikaz === "True" && (
          <span>
            C - Uplata cjelokupnog iznosa aranžmana jednokratno ili obročno
            debitnim i kreditnim karticama, a u skladu s uvjetima koje
            ugovaratelj putovanja ima s izdavateljima kartica{" "}
          </span>
        )}
      </div>
      <select id="nacinPlacanja">
        {activeAran.CijenaAWebPrikaz === "True" && (
          <option value={activeAran.CijenaA}>A -</option>
        )}
        {activeAran.CijenaBWebPrikaz === "True" && (
          <option value={activeAran.CijenaB}>B -</option>
        )}
        {activeAran.CijenaCWebPrikaz === "True" && (
          <option value={activeAran.CijenaC}>C -</option>
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
        određen važećim nacionalnim ili europskim propisima. Izjavljujem da
        privolu dajem dobrovoljno, da mi je detaljno pojašnjena namjera
        korištenja osobnih podataka djeteta u svrhe iz ove privole kao i moje
        pravo da se predmetnoj obradi usprotivim te da ova privola predstavlja
        izričitu privolu sukladno važećim zakonskim propisima koji uređuju
        zaštitu osobnih podataka te da je uporaba osobnih podataka djeteta
        dozvoljena na opisani način i u zadanom opsegu. (obavezno)
        <input type="checkbox" />
      </span>
      <label>
        Suglasan sam da se fotografije/video snimke/audio snimke mog djeteta sa
        putovanja objave na društvenim mrežama Agencije (obavezno)
      </label>
      <input id="suglasnost" type="checkbox" />{" "}
      <label>Pročitao/la sam i prihvaćam opće uvjete (obavezno)</label>
      <input id="općiUvjeti" type="checkbox" />
      <div className="buttonCont" style={{ marginBottom: 20 }}>
        <button
          disabled={active === 0 ? true : false}
          className="nextPrev"
          onClick={() => {
            if (active > 0) {
              setActive(active - 1);
            }
          }}
        >
          Prev
        </button>
        <button
          className="nextPrev"
          disabled={
         
            document.getElementById("MobPutnika").value &&
            document.getElementById("emailPutnika").value &&
            document.getElementById("nacinPlacanja").value 
              ? false
              : true
          }
          onClick={() => {
            setStep4({
              BrojPutneIsprave: document.getElementById("docBroj").value,
              Cijena: document.getElementById("nacinPlacanja").value,
              Email: document.getElementById("emailPutnika").value,
              FotoVideoSuglasnost: document.getElementById("suglasnost").value,
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
                PutnaIspravaVrijediDo: document.getElementById("docTrajanje")
                  .value,
                Tel: document.getElementById("telPutnika").value,
                VrstaPutneIsprave: document.getElementById("dokument").value,
              })
            );
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
            window.localStorage.clear();
          }}
        >
          Pošalji
        </button>
      </div>
    </div>
  );
}
