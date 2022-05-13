import React from 'react'
import { SubHeader } from './SubHeader'
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
            <input className='input-form-gender' type='radio'></input>
            <input className='input-form-gender' type='radio'></input>
            <br></br>
            <p>Telefon putnika</p>
            <input className='input-form' placeholder='+'></input>
            <br></br>
            <p>Mobitel putnika (obavezno)</p>
            <input className='input-form'></input>
            <br></br>
            <p>E-mail putnika (obavezno)</p>
            <input className='input-form'></input>
            <br></br>
            <p>Aranžman/odredište i datum putovanja(obavezno)</p>
            <input className='input-form'></input>
            <br></br>
            <p>Tip sobe (obavezno)</p>
            <input className='input-form-kreveti' type='radio'></input>
            <input className='input-form-kreveti' type='radio'></input>
            <input className='input-form-kreveti' type='radio'></input>
            <input className='input-form-kreveti' type='radio'></input>
            <br></br>
            <input className='input-form'></input>
            <br></br>
            <input className='input-form'></input>
            <br></br>
            <input className='input-form'></input>
            <br></br>
            <input className='input-form'></input>
            <br></br>
            <input className='input-form'></input>
        </div>
    </div>
  )
}
