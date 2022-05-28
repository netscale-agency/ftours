import axios from "axios";
import React, { useMemo, useState } from "react";
import ProgressBar from "../components/PrijavaSkolskaPutovanja/ProgressBar";
import Step1 from "../components/PrijavaSkolskaPutovanja/Step1";
import Step2 from "../components/PrijavaSkolskaPutovanja/Step2";
import '../styles/components/Step.css'
import Step3 from "../components/PrijavaSkolskaPutovanja/Step3";
import Step4 from "../components/PrijavaSkolskaPutovanja/Step4";
import { activatedSteps } from "../components/PrijavaSkolskaPutovanja/util/stepsFormater";

export default function PrijavaSkolskaPutovanja() {
  const [active, setActive] = useState(0);
  const [data, setData] = useState();
  function dataCall() {
    axios.get("https://ritamapi.vsvcloud.com:8920/rest/api/v1/agency/data?username=test&date=04.03.2020 12:30:12&signature=3f818ac7fe4de736de39bb299bb5e33291513c76").then((resp) => {
      setData(resp);
    });
  }
  useMemo(() => dataCall(), []);
  const stepComponents = [<Step1 />, <Step2 />, <Step3 />, <Step4 />];

  if (!data)
    return (
      <div>
        <h1>Prijava za školsko putovanje</h1>
        <ProgressBar activeSteps={activatedSteps(active)} />
        {stepComponents[active]}
        <div>
          <button
            onClick={() => {
              if (active > 0) {
                setActive(active - 1);
              }
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (active < 3) {
                setActive(active + 1);
              }
            }}
          >
            Next
          </button>
        </div>
      </div>
    );else return <></>
}
