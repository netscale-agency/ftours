import React from "react";
import { Container } from "react-bootstrap";
import "../styles/pages/PrijavaOstalaPutovanja.css";

function PrijavaOstalaPutovanja() {
  return (
    <>
      <div className="div-prijava-ostala-head">
        <h1 className="h1-prijava-ostala">
          prijava za europska i daleka putovanja
        </h1>
        <p className="p-prijava-ostala">
          Za školska putovanja (ekskurzije) i jednodnevne izlete ova prijavnica
          je nevažeća. Potrebno je popuniti:{" "}
          <a className="a-prijava-skolska" href="/prijava-skolska-putovanja">
            → PRIJAVNICU ZA ŠKOLSKA PUTOVANJA!
          </a>
        </p>
      </div>
      <Container className="container-prijava-ostala">
        <div className="form-prijava">
          <p className="p-form">
            Prezime ugovaratelja putovanja <strong>(obavezno)</strong>
          </p>
          <input className="input-form" required />
          <br />
          <p className="p-form">
            Ime ugovaratelja putovanja <strong>(obavezno)</strong>
          </p>
          <input className="input-form" required></input>
          <br />
          <p className="p-form">
            E-mail ugovaratelja putovanja <strong>(obavezno)</strong>
          </p>
          <input className="input-form" required></input>
          <br />
          <p className="p-form">
            Mobitel ugovaratelja putovanja <strong>(obavezno)</strong>
          </p>
          <input className="input-form" required></input>
          <br />
          <p className="p-form">
            Prezime putnika <strong>(obavezno)</strong>
          </p>
          <input className="input-form" required></input>
          <br />
          <p className="p-form">
            Ime putnika <strong>(obavezno)</strong>
          </p>
          <input className="input-form" required></input>
          <br />
          <p className="p-form">
            Adresa putnika <strong>(obavezno)</strong>
          </p>
          <input className="input-form" required></input>
          <br />
          <p className="p-form">
            Grad/mjesto putnika <strong>(obavezno)</strong>
          </p>
          <input className="input-form" required></input>
          <br />
          <p className="p-form">
            Država putnika <strong>(obavezno)</strong>
          </p>
          <input className="input-form" required></input>
          <br />
          <p className="p-form">
            Datum rođenja putnika <strong>(obavezno)</strong>
          </p>
          <input className="input-form" type="date" required></input>
          <br />
          <p className="p-form">
            Spol <strong>(obavezno)</strong>
          </p>
          <div className="div-radio">
            <input
              checked
              id="male"
              type="radio"
              name="gender"
              value="male"
              className="input-radio"
              required
            ></input>
            <label for="male" className="label-radio">Muški</label>
          </div>
          <div className="div-radio">
            <input
              id="female"
              type="radio"
              name="gender"
              value="female"
              className="input-radio"
            ></input>
            <label for="female" className="label-radio">Ženski</label>
          </div>
          <br />
          <p className="p-form">
            Broj putne isprave putnika <strong>(obavezno)</strong>
          </p>
          <input className="input-form" required></input>
          <br></br>
          <p className="p-form">Putna isprava vrijedi do</p>
          <input className="input-form" type="date" required></input>
          <br />
          <p className="p-form">
            Vrsta putne isprave putnika <strong>(obavezno)</strong>
          </p>
          <div className="div-radio">
            <input
              checked
              id="osobna"
              className="input-radio"
              type="radio"
              name="isprave"
              value="osobna"
              required
            ></input>
            <label for="osobna" className="label-radio">Osobna iskaznica</label>
          </div>
          <div className="div-radio">
            <input
              id="putovnica"
              className="input-radio"
              type="radio"
              name="isprave"
              value="putovnica"
            ></input>
            <label for="putovnica" className="label-radio">Putovnica</label>
          </div>
          <br />
          <p className="p-form">Telefon putnika</p>
          <input className="input-form" type="tel"></input>
          <br />
          <p className="p-form">
            Mobitel putnika <strong>(obavezno)</strong>
          </p>
          <input className="input-form" type="tel" required></input>
          <br />
          <p className="p-form">
            E-mail putnika <strong>(obavezno)</strong>
          </p>
          <input className="input-form" required></input>
          <br />
          <p className="p-form">
            Aranžman/odredište i datum putovanja <strong>(obavezno)</strong>
          </p>
          <input className="input-form" required></input>
          <br />
          <div>
            <p className="p-form">
              Tip sobe <strong>(obavezno)</strong>
            </p>
            <div className="div-radio">
              <input
                checked
                className="input-radio"
                id="jednokrevetna"
                type="radio"
                name="soba"
                value="jednokrevetna"
                required
              ></input>
              <label for="jednokrevetna" className="label-radio">Jednokrevetna</label>
            </div>
            <div className="div-radio">
              <input
                className="input-radio"
                id="dvokrevetna"
                type="radio"
                name="soba"
                value="dvokrevetna"
              ></input>
              <label for="dvokrevetna" className="label-radio">Dvokrevetna</label>
            </div>
            <div className="div-radio">
              <input
                className="input-radio"
                id="trokrevetna"
                type="radio"
                name="soba"
                value="trokrevetna"
              />
              <label for="trokrevetna" className="label-radio">Trokrevetna</label>
            </div>
            <div className="div-radio">
              <input
                className="input-radio"
                id="visekrevetna"
                type="radio"
                name="soba"
                value="visekrevetna"
              />
              <label for="visekrevetna" className="label-radio">Višekrevetna</label>
            </div>
          </div>
          <br />
          <p className="p-form">Osoba/e s kojima dijelim sobu</p>
          <input className="input-form"></input>
          <br />
          <p className="p-form">
            Uzimam paket dodatnog putnog osiguranja <strong>(obavezno)</strong>
          </p>
          <input className="input-form"></input>
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
          <select required className="input-form">
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
              checked
            ></input>
            <label for="yes" className="label-radio">Da</label>
          </div>
          <div className="div-radio">
          <input
            id="no"
            className="input-radio"
            type="radio"
            name="suglasnost"
            value="no"
          ></input>
          <label for="no" className="label-radio">Ne</label>
          </div>
          <br />
          <p className="p-form">
            Pročitao/la sam i prihvaćam opće uvjete <strong>(obavezno)</strong>
          </p>
          <div className="div-radio">
            <input
              required
              id="yes"
              className="input-radio"
              type="radio"
              name="opci-uvjeti"
              value="yes"
              checked
            ></input>
            <label for="yes" className="label-radio">Da</label>
          </div>
          <div className="div-radio">
            <input
              id="no"
              className="input-radio"
              type="radio"
              name="opci-uvjeti"
              value="no"
            ></input>
            <label for="no" className="label-radio">Ne</label>
          </div>
          <span className="span-btn">
            <button className="btn btn-dark prijava-ostalo">
              Pošalji prijavu
            </button>
          </span>
        </div>
      </Container>
    </>
  );
}

export default PrijavaOstalaPutovanja;
