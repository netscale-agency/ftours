import React from "react";
import { postData } from "./util/post";

export default function Step4({ data, setActive, active, step4, setStep4 }) {
  console.log(data);
  return (
    <div>
      <label>Vrsta putne isprave putnika</label>
      <input id="dokument" type="checkbox"/> <label>Broj putne isprave putnika</label>
      <input id="docBroj" type="text"/> <label>Putna isprava vrijedi do</label>
      <input id="docTrajanje" type="date"/> <label>Telefon putnika</label>
      <input id="telPutnika" type="tel"/> <label>Mobitel putnika (obavezno)</label>
      <input id="MobPutnika" type="tel" /> <label>E-mail putnika (obavezno)</label>
      <input id="emailPutnika" type="email"/> <label>Način plaćanja (obavezno)</label>
      <input id="nacinPlacanja" /> <label></label>
      <input type="checkbox"/>
      <label>
        Suglasan sam da se fotografije/video snimke/audio snimke mog djeteta sa
        putovanja objave na društvenim mrežama Agencije (obavezno)
      </label>
      <input id="suglasnost" type="checkbox"/>{" "}
      <label>Pročitao/la sam i prihvaćam opće uvjete (obavezno)</label>
      <input id="općiUvjeti" />
      <div className="buttonCont">
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
          onClick={() => {
            setStep4({
              BrojPutneIsprave: document.getElementById("docBroj").value,
              Cijena: '400',
              Email: document.getElementById("emailPutnika").value,
              FotoVideoSuglasnost: document.getElementById("suglasnost").value,
              Mob: document.getElementById("MobPutnika").value,
              NacinPlacanja: document.getElementById("MobPutnika").value,
              PutnaIspravaVrijediDo: document.getElementById("docTrajanje").value,
              Tel: document.getElementById("telPutnika").value,
              VrstaPutneIsprave: document.getElementById("dokument").value,
            });
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
          }}
        >
          Pošalji
        </button>
      </div>
    </div>
  );
}
