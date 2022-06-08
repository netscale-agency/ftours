import React, { useEffect, useState } from "react";

export default function Step1({ data, active ,setActive, setAran}) {
  const [isAccepted, setIsAccepted] = useState(false);

  const [isString, setIsString] = useState("");
  let filtered = [];
  useEffect(() => {
    filtered = data.filter((item) => item.BrojAranzmana === isString);
    if (filtered.length === 1) {
      setIsAccepted(true);
      setAran(filtered[0].GrupaId)
    } else setIsAccepted(false);
  }, [isString]);
  return (
    <div>
      <div className="inputCont">
        <label>
          Šifra aranžmana <b>(obavezno)</b>
        </label>
        <input
          onChange={(e) => {
            setIsString(e.target.value);
          }}
          placeholder="Popunite šifru aranžmana i potvrdite „enter/OK“"
          type="text"
        />
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
          Prev
        </button>
        <button
          disabled={!isAccepted}
          className="nextPrev"
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
  );
}
