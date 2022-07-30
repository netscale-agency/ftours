import React, { useEffect, useState } from "react";

export default function Step1({ data, active, setActive, setAran }) {
  const [isAccepted, setIsAccepted] = useState(false);

  const [isString, setIsString] = useState(localStorage.getItem("aran") || "");
  let filtered = [];
  const defAran = localStorage.getItem("aran") || "";
  useEffect(() => {
    if (data) {
      filtered = data.filter((item) => item.BrojAranzmana === isString);
      if (filtered.length === 1) {
        if (filtered[0].GrupaPopunjena === "False") {
          setIsAccepted(true);
          setAran(filtered[0].GrupaId);
        }
      } else {
        setIsAccepted(false);
      }
    }
  }, [isString]);
  return (
    <div className="step1Cont" >
      <div className="inputCont input100" >
        <label>
          Šifra aranžmana <b style={{ color: "#B11F23" }}>(obavezno)</b>
        </label>
        <input
          defaultValue={defAran}
          style={{ textTransform: "uppercase" }}
          onChange={(e) => {
            setIsString(e.target.value.toUpperCase());
          }}
          placeholder="Popunite šifru aranžmana i potvrdite „enter/OK“"
          type="text"
        />
        {data &&
          data.filter((item) => item.BrojAranzmana === isString).length === 0 &&
          isString && (
            <span>
              Pogrešan unos / ili šifra aranžmana trenutno nije aktivna!
            </span>
          )}
        {data &&
          data.filter((item) => item.BrojAranzmana === isString).length !== 0 &&
          data.filter((item) => item.BrojAranzmana === isString)[0]
            .GrupaPopunjena === "True" && (
            <span>
              Grupa je trenutno popunjena. Pošaljite upit na (desk@f-tours.hr)
            </span>
          )}
      </div>
      <div className="buttonContstep12">
        <div></div>
        <button
          disabled={!isAccepted}
          style={{marginRight:12}}
          className="nextPrev"
          onClick={() => {
            if (active < 3) {
              localStorage.setItem("aran", isString);

              setActive(active + 1);
            }
          }}
        >
          Sljedeći korak
        </button>
      </div>
    </div>
  );
}
