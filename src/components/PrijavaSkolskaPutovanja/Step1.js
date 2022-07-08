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
        setIsAccepted(true);
        setAran(filtered[0].GrupaId);
      } else setIsAccepted(false);
    }
  }, [isString]);
  return (
    <div style={{ width: "100%" }}>
      <div className="inputCont">
        <label>
          Šifra aranžmana <b>(obavezno)</b>
        </label>
        <input
          defaultValue={defAran}
          style={{textTransform:"uppercase"}}
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
      </div>
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
          Prethodni korak
        </button>
        <button
          disabled={!isAccepted}
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
