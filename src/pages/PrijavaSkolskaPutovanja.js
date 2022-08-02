import axios from "axios";
import React, { useMemo, useState } from "react";
import ProgressBar from "../components/PrijavaSkolskaPutovanja/ProgressBar";
import Step1 from "../components/PrijavaSkolskaPutovanja/Step1";
import Step2 from "../components/PrijavaSkolskaPutovanja/Step2";
import "../styles/components/Step.css";
import Step3 from "../components/PrijavaSkolskaPutovanja/Step3";
import Step4 from "../components/PrijavaSkolskaPutovanja/Step4";
import { activatedSteps } from "../components/PrijavaSkolskaPutovanja/util/stepsFormater";
import Overview from "../components/PrijavaSkolskaPutovanja/Overview";
import SuccessPop from "../components/PrijavaSkolskaPutovanja/SuccessPop";

export default function PrijavaSkolskaPutovanja() {
  const [active, setActive] = useState(0);
  const [isOpen, setisOpen] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const [data, setData] = useState();
  const [aran, setAran] = useState();
  const [activateCheck, setactivateCheck] = useState(false);
  const [SchoolMailData, setSchoolMailData] = useState({razrednik:'',skola:'',aranIme:''});
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
  // useEffect(() => {
  //   console.log(step3, step4, step2);
  // }, [step3, step2, step4]);
  const url = process.env.REACT_APP_API_RITAM_KEY;
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
  useMemo(() => {
    dataCall();
    getData();
    localStorage.setItem("schoolId", "");
    localStorage.setItem(
      "step2",
      JSON.stringify({
        KontaktOsobaId: 0,
        Razred: "",
      })
    );
    localStorage.setItem(
      "step3",
      JSON.stringify({
        RoditeljIme: "",
        roditeljPrezime: "",
        RoditeljSkrbnikEmail: "",
        RoditeljSkrbnikMob: "",
        Adresa: "",
        Spol: "",
        Mjesto: "",
        Prezime: "",
        DatumRodjenja: "",
        Ime: "",
      })
    );
    localStorage.setItem(
      "step4",
      JSON.stringify({
        BrojPutneIsprave: "",
        Cijena: "",
        Email: "",
        FotoVideoSuglasnost: "",
        Mob: "",
        NacinPlacanja: "",
        PutnaIspravaVrijediDo: "",
        Tel: "",
        VrstaPutneIsprave: "",
      })
    );
  }, []);
  console.log(SchoolMailData)
  if (data)
    return (
      <>
        <SuccessPop setIsOpen={setisOpen} isOpen={isOpen} isErr={isErr} />
        {activateCheck && (
          <Overview
            aran={aran}
            contentData={data.GrupeRezervacije}
            ritamData={data}
            setStep4={setStep4}
            SchoolMailData={SchoolMailData}
            setIsErr={setIsErr}
            setisOpen={setisOpen}
            setStep3={setStep3}
            data={{
              Signature: ip,
              GrupaId: Number(aran),
              ...step2,
              ...step3,
              ...step4,
            }}
          />
        )}
        {!activateCheck && (
          <div className="cont" style={{ width: "80%", margin: "auto" }}>
            <h1>Prijava za školsko putovanje</h1>
            <ProgressBar activeSteps={activatedSteps(active)} />
            <div style={{ minHeight: 400 }} className="containerForm">
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
                  SchoolMailData={setSchoolMailData}
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
                  setactivateCheck={setactivateCheck}
                  setActive={setActive}
                  active={active}
                  aran={aran}
                  step4={step4}
                  contentData={data.GrupeRezervacije}
                  setStep4={setStep4}
                  data={{
                    Signature: ip,
                    GrupaId: Number(aran),
                    ...step2,
                    ...step3,
                    ...step4,
                  }}
                />
              )}
            </div>
          </div>
        )}
      </>
    );
  else return <></>;
}
