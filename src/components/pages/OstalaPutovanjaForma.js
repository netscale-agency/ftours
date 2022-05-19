import React from 'react'
import { SubHeader } from './SubHeader'
import Footer from './../footer/footer'
import './styles/OstalaPutovanjaForma.css'

export default function OstalaPutovanjaForma() {
  return (
    <div>
        <SubHeader />
        <div className='form-container'>
            <div className='title'>
                <h1>PRIJAVA ZA EUROPSKA I DALEKA PUTOVANJA</h1>
                <p className='paragraf'>Za školska putovanja i jednodnevne izlete potrebno je popuniti Prijavnicu za školska putovanja</p>
            </div>
        </div>
        <div className='form-prijava'>
            <p>Prezime ugovaratelja putovanja (obavezno)</p>
            <input className='input-form'></input>
            <br></br>
            <p>Ime ugovaratelja putovanja (obavezno)</p>
            <input className='input-form'></input>
            <br></br>
            <p>E-mail ugovaratelja putovanja (obavezno)</p>
            <input className='input-form'></input>
            <br></br>
            <p>Mobitel ugovaratelja putovanja (obavezno)</p>
            <input className='input-form'></input>
            <br></br>
            <p>Prezime putnika (obavezno)</p>
            <input className='input-form'></input>
            <br></br>
            <p>Ime putnika (obavezno)</p>
            <input className='input-form'></input>
            <br></br>
            <p>Adresa putnika (obavezno)</p>
            <input className='input-form'></input>
            <br></br>
            <p>Grad/mjesto putnika (obavezno)</p>
            <input className='input-form'></input>
            <br></br>
            <p>Država putnika (obavezno)</p>
            <input className='input-form'></input>
            <br></br>
            <p>Datum rođenja putnika (obavezno)</p>
            <input className='input-form' type='date'></input>
            <br></br>
            <p>Spol (obavezno)</p>
            <input type='radio' name='gender' value='male' className='input-form-gender'></input>
            <input type='radio' name='gender' value='Ž' className='input-form-gender'></input>
            <br></br>
            <p>Broj putne isprave putnika</p>
            <input className='input-form'></input>
            <br></br>
            <p>Putna isprava vrijedi do</p>
            <input className='input-form' type='date'></input>
            <br></br>
            <p>Vrsta putne isprave putnika</p>
            <input className='input-form-gender' type='radio' name='isprave' value="osobna"></input>
            <input className='input-form-gender' type='radio' name='isprave' value="putovnica"></input>
            <br></br>
            <p>Telefon putnika</p>
            <input className='input-form' placeholder='+'></input>
            <br></br>
            <p>Mobitel putnika (obavezno)</p>
            <input className='input-form' type="tel"></input>
            <br></br>
            <p>E-mail putnika (obavezno)</p>
            <input className='input-form'></input>
            <br></br>
            <p>Aranžman/odredište i datum putovanja(obavezno)</p>
            <input className='input-form'></input>
            <br></br>
            <div>
            <p className='row-input'>Tip sobe (obavezno)</p>
              <input type='radio' name='sobe' value="jednosobna" placeholder='A) Jednokrevetna'></input>
              <input type='radio' name='sobe' value="dovsobna" placeholder='B) Dvosobna'></input>
              <input type='radio' name='sobe' value="trosobna" placeholder='C) Trosobna'></input>
              <input type='radio' name='sobe' value="visesobna" placeholder='D) Višesobna'></input>
            </div>
            <br></br>
            <p>Osoba/e s kojima dijelim sobu</p>
            <input className='input-form'></input>
            <br></br>
            <p>Uzimam paket dodatnog putnog osiguranja (obavezno)</p>
            <input className='input-form'></input>
            <br></br>
            <p>Način plaćanja (obavezno)</p>
            <p className='nacin-placanja'>A - Uplata rezervacije prilikom potpisivanja ugovora, te ostatka iznosa jednokratno do datuma naznačenog na aranžmanu</p>
            <p className='nacin-placanja'>B - Uplata rezervacije prilikom potpisivanja ugovora, te ostatka iznosa na mjesečne obroke do datuma naznačenog na aranžmanu.</p>
            <p className='nacin-placanja'>C - Uplata rezervacije prilikom potpisivanja ugovora, te ostatka iznosa na maksimalni dopušteni broj obroka kreditnim karticama</p>
            <select className='input-form'>
              <option value="---">---</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
            <br></br>
            <p className='suglasnost'>Suglasan/na sam da Agencija obrađuje moje osobne podatke (ime i prezime, datum rođenja, broj putnog dokumenta) u slučaju kada je to neophodno za realizaciju usluge smještaja, prijevoza, osiguranja i ulaznica za posjete muzejima, te da se osobni podatci: ime, prezime i datum rođenja mogu proslijediti društvima navedenim u paket aranžmanu. Osobni podaci će se koristiti samo u prethodno navedene svrhe i čuvat će se sukladno zakonskim i regulatornim propisima Opće uredbe o zaštiti osobnih podataka (GDPR 2016/679), odnosno u trajanju od 5 godina od završetka usluge, osim ako dulji vremenski period čuvanja osobnih podataka nije određen važećim nacionalnim ili europskim propisima.
Izjavljujem da privolu dajem dobrovoljno, da mi je detaljno pojašnjena namjera korištenja mojih osobnih podataka u svrhe iz ove privole kao i moje pravo da se predmetnoj obradi usprotivim te da ova privola predstavlja izričitu privolu sukladno važećim zakonskim propisima koji uređuju zaštitu osobnih podataka te da je uporaba mojih osobnih podataka dozvoljena na opisani način i u zadanom opsegu.
Opoziv suglasnosti je moguće ostvariti na način da se pošalje obavijest o opozivu na e-mail adresu desk@f-tours.hr ili na adresu Destinations F-tours d.o.o., Trg Hrvatske bratske zajednice 2, 21000 Split</p>
            <br></br>
            <p>Suglasan sam da se moje fotografije i/ili audio snimke sa putovanja objave na društvenim mrežama (obavezno)</p>
            <input className='input-form-gender' type="radio" name='suglasnost' value="da"></input>
            <input className='input-form-gender' type="radio" name='suglasnost' value="ne"></input>
            <br></br>
            <p>Pročitao/la sam i prihvaćam opće uvjete (obavezno)</p>
            <input className='input-form-gender' type="radio" name='opci-uvjeti' value="yes"></input>
            <input className='input-form-gender' type="radio" name='opci-uvjeti' value="no"></input>
            <button className='prijava-botun'>Pošalji prijavu za putovanje</button>
        </div>
        <Footer />
    </div>
  )
}
