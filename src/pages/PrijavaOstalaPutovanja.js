import React from "react";
import { Container } from "react-bootstrap";
import "../styles/pages/PrijavaOstalaPutovanja.css";
import emailjs from "@emailjs/browser";
import {
  docCheck,
  genderCheck,
  slikeCheck,
  sobaCheck,
} from "../components/prijavaZaOstala/util/helperFunctions";

function PrijavaOstalaPutovanja() {
  const send = () => {
    emailjs
      .send(
        "service_650o6of",
        "template_8x7nari",
        {
          aran: document.getElementById("odrediste").value,
          adresa: document.getElementById("adresaPutnika").value,
          brPutne: document.getElementById("brPutne").value,
          placanje: document.getElementById('placanje').value,
          datumRodjenja: document.getElementById("datumRodjenja").value,
          drzava: document.getElementById("drzava").value,
          emailPutnik: document.getElementById('emailPutnik').value,
          fotoSugl: slikeCheck(document.getElementById('yes').checked),
          osiguranje:document.getElementById('paketOsiguranja').value,
          imePutnika: document.getElementById("imePutnika").value,
          grad: document.getElementById("grad").value,
          brMobPutnik: document.getElementById('mobPutnik').value,
          prezimePutnika: document.getElementById("prezimePutnika").value,
          ispravaVrijediDo: document.getElementById("datumPutna").value,
          prezimeUgovaratelja: document.getElementById("prezimeUgovaratelj")
            .value,
          tipSobe: sobaCheck({
            jedno: document.getElementById("jednokrevetna").checked,
            dvo: document.getElementById("dvokrevetna").checked,
            tro: document.getElementById("trokrevetna").checked,
          }),
          osobaSoba:document.getElementById('imenaOsoba').value,
          imeUgovaratelja: document.getElementById("imeUgovaratelj").value,
          emailUgovaratelja: document.getElementById("emailUgovaratelj"),
          mobitelUgovaratelja: document.getElementById("mobitelUgovaratelj"),
          spol: genderCheck(document.getElementById("male").checked),
          brTelPutnik: document.getElementById("telPutnika").value,
          vrstaPutne: docCheck(document.getElementById("osobna").checked),
        },
        "86zfbFOOLfvWJuFWM"
      )
      .then(
        function(response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function(error) {
          console.log("FAILED...", error);
        }
      );
    emailjs
      .send(
        "service_650o6of",
        "template_t5u7r62",
        {
          aran: document.getElementById("odrediste").value,
          adresa: document.getElementById("adresaPutnika").value,
          brPutne: document.getElementById("brPutne").value,
          placanje: document.getElementById('placanje').value,
          datumRodjenja: document.getElementById("datumRodjenja").value,
          drzava: document.getElementById("drzava").value,
          emailPutnik: document.getElementById('emailPutnik').value,
          fotoSugl: slikeCheck(document.getElementById('yes').checked),
          osiguranje:document.getElementById('paketOsiguranja').value,
          imePutnika: document.getElementById("imePutnika").value,
          grad: document.getElementById("grad").value,
          brMobPutnik: document.getElementById('mobPutnik').value,
          prezimePutnika: document.getElementById("prezimePutnika").value,
          ispravaVrijediDo: document.getElementById("datumPutna").value,
          prezimeUgovaratelja: document.getElementById("prezimeUgovaratelj")
            .value,
          tipSobe: sobaCheck({
            jedno: document.getElementById("jednokrevetna").checked,
            dvo: document.getElementById("dvokrevetna").checked,
            tro: document.getElementById("trokrevetna").checked,
          }),
          osobaSoba:document.getElementById('imenaOsoba').value,
          imeUgovaratelja: document.getElementById("imeUgovaratelj").value,
          emailUgovaratelja: document.getElementById("emailUgovaratelj"),
          mobitelUgovaratelja: document.getElementById("mobitelUgovaratelj"),
          spol: genderCheck(document.getElementById("male").checked),
          brTelPutnik: document.getElementById("telPutnika").value,
          vrstaPutne: docCheck(document.getElementById("osobna").checked),
        },
        "86zfbFOOLfvWJuFWM"
      )
      .then(
        function(response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function(error) {
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <>
      <div className="div-prijava-ostala-head">
        <h1 className="h1-prijava-ostala">
          prijava za europska i daleka putovanja
        </h1>
        <p className="p-prijava-ostala">
          Za školska putovanja (ekskurzije) i jednodnevne izlete ova prijavnica
          je nevažeća. Potrebno je popuniti:{" "}
          <a className="a-prijava-skolska" href="/prijava-za-skolsko-putovanje">
            → PRIJAVNICU ZA ŠKOLSKA PUTOVANJA!
          </a>
        </p>
      </div>
      <Container className="container-prijava-ostala">
        <form onSubmit={() => send()} className="form-prijava">
          <p className="p-form">
            Prezime ugovaratelja putovanja <strong>(obavezno)</strong>
          </p>
          <input id="prezimeUgovaratelj" className="input-form" required />
          <br />
          <p className="p-form">
            Ime ugovaratelja putovanja <strong>(obavezno)</strong>
          </p>
          <input id="imeUgovaratelj" className="input-form" required></input>
          <br />
          <p className="p-form">
            E-mail ugovaratelja putovanja <strong>(obavezno)</strong>
          </p>
          <input id="emailUgovaratelj" className="input-form" required></input>
          <br />
          <p className="p-form">
            Mobitel ugovaratelja putovanja <strong>(obavezno)</strong>
          </p>
          <input
            id="mobitelUgovaratelj"
            className="input-form"
            required
          ></input>
          <br />
          <p className="p-form">
            Prezime putnika <strong>(obavezno)</strong>
          </p>
          <input id="prezimePutnika" className="input-form" required></input>
          <br />
          <p className="p-form">
            Ime putnika <strong>(obavezno)</strong>
          </p>
          <input id="imePutnika" className="input-form" required></input>
          <br />
          <p className="p-form">
            Adresa putnika <strong>(obavezno)</strong>
          </p>
          <input id="adresaPutnika" className="input-form" required></input>
          <br />
          <p className="p-form">
            Grad/mjesto putnika <strong>(obavezno)</strong>
          </p>
          <input id="grad" className="input-form" required></input>
          <br />
          <p className="p-form">
            Država putnika <strong>(obavezno)</strong>
          </p>
          <input id="drzava" className="input-form" required></input>
          <br />
          <p className="p-form">
            Datum rođenja putnika <strong>(obavezno)</strong>
          </p>
          <input
            id="datumRodjenja"
            className="input-form"
            type="date"
            required
          ></input>
          <br />
          <p className="p-form">
            Spol <strong>(obavezno)</strong>
          </p>
          <div className="div-radio">
            <input
              defaultChecked
              id="male"
              type="radio"
              name="gender"
              value="male"
              className="input-radio"
              required
            ></input>
            <label for="male" className="label-radio">
              Muški
            </label>
          </div>
          <div className="div-radio">
            <input
              id="female"
              type="radio"
              name="gender"
              value="female"
              className="input-radio"
            ></input>
            <label for="female" className="label-radio">
              Ženski
            </label>
          </div>
          <br />
          <p className="p-form">
            Broj putne isprave putnika <strong>(obavezno)</strong>
          </p>
          <input id="brPutne" className="input-form" required></input>
          <br></br>
          <p id="datumPutna" className="p-form">
            Putna isprava vrijedi do
          </p>
          <input className="input-form" type="date" required></input>
          <br />
          <p className="p-form">
            Vrsta putne isprave putnika <strong>(obavezno)</strong>
          </p>
          <div className="div-radio">
            <input
              defaultChecked
              id="osobna"
              className="input-radio"
              type="radio"
              name="isprave"
              value="osobna"
              required
            ></input>
            <label for="osobna" className="label-radio">
              Osobna iskaznica
            </label>
          </div>
          <div className="div-radio">
            <input
              id="putovnica"
              className="input-radio"
              type="radio"
              name="isprave"
              value="putovnica"
            ></input>
            <label for="putovnica" className="label-radio">
              Putovnica
            </label>
          </div>
          <br />
          <p className="p-form">Telefon putnika</p>
          <input id="telPutnik" className="input-form" type="tel"></input>
          <br />
          <p className="p-form">
            Mobitel putnika <strong>(obavezno)</strong>
          </p>
          <input
            id="mobPutnik"
            className="input-form"
            type="tel"
            required
          ></input>
          <br />
          <p className="p-form">
            E-mail putnika <strong>(obavezno)</strong>
          </p>
          <input id="emailPutnik" className="input-form" required></input>
          <br />
          <p className="p-form">
            Aranžman/odredište i datum putovanja <strong>(obavezno)</strong>
          </p>
          <input id="odrediste" className="input-form" required></input>
          <br />
          <div>
            <p className="p-form">
              Tip sobe <strong>(obavezno)</strong>
            </p>
            <div className="div-radio">
              <input
                defaultChecked
                className="input-radio"
                id="jednokrevetna"
                type="radio"
                name="soba"
                value="jednokrevetna"
                required
              ></input>
              <label for="jednokrevetna" className="label-radio">
                Jednokrevetna
              </label>
            </div>
            <div className="div-radio">
              <input
                className="input-radio"
                id="dvokrevetna"
                type="radio"
                name="soba"
                value="dvokrevetna"
              ></input>
              <label for="dvokrevetna" className="label-radio">
                Dvokrevetna
              </label>
            </div>
            <div className="div-radio">
              <input
                className="input-radio"
                id="trokrevetna"
                type="radio"
                name="soba"
                value="trokrevetna"
              />
              <label for="trokrevetna" className="label-radio">
                Trokrevetna
              </label>
            </div>
            <div className="div-radio">
              <input
                className="input-radio"
                id="visekrevetna"
                type="radio"
                name="soba"
                value="visekrevetna"
              />
              <label for="visekrevetna" className="label-radio">
                Višekrevetna
              </label>
            </div>
          </div>
          <br />
          <p className="p-form">Osoba/e s kojima dijelim sobu</p>
          <input id="imenaOsoba" className="input-form"></input>
          <br />
          <p className="p-form">
            Uzimam paket dodatnog putnog osiguranja <strong>(obavezno)</strong>
          </p>
          <input id="paketOsiguranja" className="input-form"></input>
          <br />
          <p className="p-form">
            Način plaćanja <strong>(obavezno)</strong>
          </p>
          <p className="p-form">
            <strong>A)</strong> Uplata rezervacije prilikom potpisivanja
            ugovora, te ostatka iznosa jednokratno do datuma naznačenog na
            aranžmanu
          </p>
          <p className="p-form">
            <strong>B)</strong> Uplata rezervacije prilikom potpisivanja
            ugovora, te ostatka iznosa na mjesečne obroke do datuma naznačenog
            na aranžmanu.
          </p>
          <p className="p-form">
            <strong>C)</strong> Uplata rezervacije prilikom potpisivanja
            ugovora, te ostatka iznosa na maksimalni dopušteni broj obroka
            kreditnim karticama
          </p>
          <select id="placanje" required className="input-form">
            <option value="">Odaberite naćin plaćanja...</option>
            <option value="A">A)</option>
            <option value="B">B)</option>
            <option value="C">C)</option>
          </select>
          <br />
          <p className="p-form">
            Suglasan/na sam da Agencija obrađuje moje osobne podatke (ime i
            prezime, datum rođenja, broj putnog dokumenta) u slučaju kada je to
            neophodno za realizaciju usluge smještaja, prijevoza, osiguranja i
            ulaznica za posjete muzejima, te da se osobni podatci: ime, prezime
            i datum rođenja mogu proslijediti društvima navedenim u paket
            aranžmanu. Osobni podaci će se koristiti samo u prethodno navedene
            svrhe i čuvat će se sukladno zakonskim i regulatornim propisima Opće
            uredbe o zaštiti osobnih podataka (GDPR 2016/679), odnosno u
            trajanju od 5 godina od završetka usluge, osim ako dulji vremenski
            period čuvanja osobnih podataka nije određen važećim nacionalnim ili
            europskim propisima. Izjavljujem da privolu dajem dobrovoljno, da mi
            je detaljno pojašnjena namjera korištenja mojih osobnih podataka u
            svrhe iz ove privole kao i moje pravo da se predmetnoj obradi
            usprotivim te da ova privola predstavlja izričitu privolu sukladno
            važećim zakonskim propisima koji uređuju zaštitu osobnih podataka te
            da je uporaba mojih osobnih podataka dozvoljena na opisani način i u
            zadanom opsegu. Opoziv suglasnosti je moguće ostvariti na način da
            se pošalje obavijest o opozivu na e-mail adresu desk@f-tours.hr ili
            na adresu Destinations F-tours d.o.o., Trg Hrvatske bratske
            zajednice 2, 21000 Split
          </p>
          <br />
          <p className="p-form">
            Suglasan sam da se moje fotografije i/ili audio snimke sa putovanja
            objave na društvenim mrežama <strong>(obavezno)</strong>
          </p>
          <div className="div-radio">
            <input
              required
              id="yes"
              className="input-radio"
              type="radio"
              name="suglasnost"
              value="yes"
              defaultChecked
            ></input>
            <label for="yes" className="label-radio">
              Da
            </label>
          </div>
          <div className="div-radio">
            <input
              id="no"
              className="input-radio"
              type="radio"
              name="suglasnost"
              value="no"
            ></input>
            <label for="no" className="label-radio">
              Ne
            </label>
          </div>
          <br />
          <p className="p-form">
            Pročitao/la sam i prihvaćam opće uvjete <strong>(obavezno)</strong>
          </p>
          <div className="div-radio">
            <input
              required
              id="yesUvjeti"
              className="input-radio"
              type="radio"
              name="opci-uvjeti"
              value="yes"
              defaultChecked
            ></input>
            <label for="yes" className="label-radio">
              Da
            </label>
          </div>
          <div className="div-radio">
            <input
              id="noUvjeti"
              className="input-radio"
              type="radio"
              name="opci-uvjeti"
              value="no"
            ></input>
            <label for="no" className="label-radio">
              Ne
            </label>
          </div>
          <span className="span-btn">
            <button type="submit" className="btn btn-dark prijava-ostalo">
              Pošalji prijavu
            </button>
          </span>
        </form>
      </Container>
    </>
  );
}

export default PrijavaOstalaPutovanja;
