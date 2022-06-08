import axios from "axios";
import React, { useMemo, useState } from "react";
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
  console.log(aran);
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
    console.log(res.data);
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
            />
          )}
          {active === 2 && <Step3 setActive={setActive} active={active} />}
          {active === 3 && <Step4 data={data.GrupeRezervacije} />}
        </div>
      </div>
    );
  else return <></>;
}
