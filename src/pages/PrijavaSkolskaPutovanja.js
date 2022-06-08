import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import ProgressBar from "../components/PrijavaSkolskaPutovanja/ProgressBar";
import Step1 from "../components/PrijavaSkolskaPutovanja/Step1";
import Step2 from "../components/PrijavaSkolskaPutovanja/Step2";
import "../styles/components/Step.css";
import Step3 from "../components/PrijavaSkolskaPutovanja/Step3";
import Step4 from "../components/PrijavaSkolskaPutovanja/Step4";
import { activatedSteps } from "../components/PrijavaSkolskaPutovanja/util/stepsFormater";

export default function PrijavaSkolskaPutovanja() {
  const [active, setActive] = useState(0);
  const [data, setData] = useState();
  const [aran, setAran] = useState();
  const [step2, setStep2] = useState({
    KontaktOsobaId: 0,
    Razred: "",
  });
  const [step3, setStep3] = useState({
    RoditeljSkrbnik: "",
    RoditeljSkrbnikEmail: "",
    RoditeljSkrbnikMob: "",
    Adresa: "",
    Spol: "",
    Mjesto: "",
    Prezime: "",
    DatumRodjenja: "",
    Ime: "",
  });
  const [step4, setStep4] = useState({
    BrojPutneIsprave: "",
    Cijena: "",
    Email: "",
    FotoVideoSuglasnost: "",
    Mob: "",
    NacinPlacanja: "",
    PutnaIspravaVrijediDo: "",
    Tel: "",
    VrstaPutneIsprave: "",
  });
  useEffect(() => {
    console.log(step3, step4, step2);
  }, [step3, step2, step4]);
  const url = "http://188.166.20.77:8000/";
  const dataCall = () => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  };
  const [ip, setIP] = useState("");

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    setIP(res.data.IPv4);
  };

  console.log(data);
  useMemo(() => {
    dataCall();
    getData();
  }, []);
  if (data)
    return (
      <div className="cont">
        <h1>Prijava za školsko putovanje</h1>
        <ProgressBar activeSteps={activatedSteps(active)} />
        <div className="containerForm">
          {active === 0 && (
            <Step1
              setActive={setActive}
              setAran={setAran}
              active={active}
              data={data.GrupeRezervacije}
            />
          )}
          {active === 1 && (
            <Step2
              data={data}
              aran={aran}
              setActive={setActive}
              active={active}
              setStep2={setStep2}
              step2={step2}
            />
          )}
          {active === 2 && (
            <Step3
              setStep3={setStep3}
              step3={step3}
              setActive={setActive}
              active={active}
            />
          )}
          {active === 3 && (
            <Step4
              setActive={setActive}
              active={active}
              step4={step4}
              setStep4={setStep4}
              data={{
                Signature: ip,
                GrupaId: aran,
                ...step2,
                ...step3,
                ...step4,
              }}
            />
          )}
        </div>
      </div>
    );
  else return <></>;
}
