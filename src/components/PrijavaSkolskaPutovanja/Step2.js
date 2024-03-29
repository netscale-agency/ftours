import React, { useEffect, useState } from "react";

export default function Step2({
  data,
  aran,
  setActive,
  active,
  step2,
  SchoolMailData,
  setStep2,
}) {
  const [checked, setChecked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [razrednikIme, setRazrednikIme] = useState("");
  const [skolaNaziv, setSkolaNaziv] = useState("");
  const aranIme = data.GrupeRezervacije.filter((item) => item.GrupaId === aran);
  const [pickedRazred, setPickedRazred] = useState(
    JSON.parse(localStorage.getItem("step2")).Razred
  );
  const skole = data.GrupeSkole.filter((item) => item.GrupaId === aran);
  const [pickedSchool, setPickedSchool] = useState(
    localStorage.getItem("schoolId") || (skole.length === 1 && skole[0].skolaId)
  );

  useEffect(() => {
    setSkolaNaziv(
      skole &&
        skole.filter((item) => item.skolaId === pickedSchool)[0] &&
        skole.filter((item) => item.skolaId === pickedSchool)[0].skola
    );
  }, [pickedSchool]);
  useEffect(() => {
    setSkolaNaziv(
      skole &&
        skole.filter((item) => item.skolaId === pickedSchool)[0] &&
        skole.filter((item) => item.skolaId === pickedSchool)[0].skola
    );
  }, []);
  const aranData = data.GrupeRezervacije.filter(
    (item) => item.GrupaId === aran
  );
  console.log(data)
  const razredi = data.GrupeRazredi.filter((item) => item.GrupaId === aran);
  return (
    <div className="stepContainer2 ">
      <label>Škola</label>
      <select
        id="skola"
        defaultValue={pickedSchool}
        onChange={(e) => {
          setPickedSchool(e.target.value);
        }}
      >
        {skole.length > 1 && <option>---</option>}
        {skole.map((item, i) => {
          return (
            <option key={i} value={item.skolaId}>
              {item.skola}
            </option>
          );
        })}
      </select>
      <label>Aranžman / odredište</label>
      <select>
        {aranData.map((item, i) => {
          return (
            <option key={i} value={item.OpisAranzmana}>
              {item.OpisAranzmana}
            </option>
          );
        })}
      </select>
      <label>
        Razred <b style={{ color: "#B11F23" }}>(obavezno)</b>
      </label>
      <select
        defaultValue={pickedRazred || ""}
        id="razred"
        defaultChecked={pickedRazred || ""}
        onChange={(e) => {
          setPickedRazred(e.target.value);
        }}
      >
        {<option>---</option>}
        {razredi.map((item, i) => {
          if (item.skolaId === pickedSchool)
            return (
              <option key={i} value={item.Razred}>
                {item.Razred}
              </option>
            );
        })}
      </select>
      <label>Razrednik / voditelj</label>
      <select id="razrednik">
        {data.GrupeKontaktOsobe.map((item, i) => {
          if (item.skolaId === pickedSchool && item.Razred === pickedRazred)
            return (
              <option key={i} value={item.KontaktOsobaId}>
                {item.KontaktOsoba}
              </option>
            );
        })}
      </select>
      <div>
        <span style={{ color: "red" }}>
          Označite polje i pročitajte/preuzmite program putovanja
        </span>
        <div style={{ display: "flex", marginTop: 8, marginBottom: 20 }}>
          {" "}
          <a
            target="blank"
            href={
              data.GrupeRezervacije.filter((item) => item.GrupaId === aran)[0]
                .FileProgramPutovanja
            }
          >
            <input
              style={{ width: 27, height: 27, marginRight: 8 }}
              onChange={() => {
                setChecked(!checked);
              }}
              onClick={() => {
                if (checked === false) {
                  setModalOpen(true);
                  window.open(
                    data.GrupeRezervacije.filter(
                      (item) => item.GrupaId === aran
                    )[0].FileProgramPutovanja,
                    "_blank"
                  );
                }
              }}
              type="checkbox"
            />
          </a>
          {checked && (
            <a
              style={{ color: "black" }}
              target="blank"
              href={
                data.GrupeRezervacije.filter((item) => item.GrupaId === aran)[0]
                  .FileProgramPutovanja
              }
            >
              {" "}
              <i
                onClick={() => setModalOpen(true)}
                className="fa fa-file-pdf-o fa-2x"
              />
            </a>
          )}
        </div>
      </div>
      {/* {modalOpen && (
        <div
          style={{
            position: "absolute",
            top: "20%",
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <i
            onClick={() => setModalOpen(false)}
            className="fa  fa-solid fa-x fa-2x"
          />
          <iframe
            height={"70%"}
            width={"100%"}
            src={
              data.GrupeRezervacije.filter((item) => item.GrupaId === aran)[0]
                .FileProgramPutovanja
            }
          ></iframe>
        </div>
      )} */}

      <div className="buttonContstep12">
        <button
          className="prev"
          onClick={() => {
            setActive(active - 1);
          }}
        >
          Prethodni korak
        </button>
        <button
          disabled={checked && pickedRazred !== "" ? false : true}
          className="nextPrev"
          onClick={() => {
            setStep2({
              KontaktOsobaId: Number(
                document.getElementById("razrednik").value
              ),
              Razred: document.getElementById("razred").value,
            });
            localStorage.setItem("schoolId", pickedSchool);

            localStorage.setItem(
              "step2",
              JSON.stringify({
                KontaktOsobaId: Number(
                  document.getElementById("razrednik").value
                ),
                Razred: document.getElementById("razred").value,
              })
            );
            SchoolMailData({
              razrednik: data.GrupeKontaktOsobe.filter(
                (item) =>
                  item.KontaktOsobaId ==
                  Number(document.getElementById("razrednik").value)
              )[0].KontaktOsoba,
              skola: skolaNaziv,
              aranIme: aranIme[0].OpisAranzmana,
            });
            setActive(active + 1);
          }}
        >
          Sljedeći korak
        </button>
      </div>
    </div>
  );
}
