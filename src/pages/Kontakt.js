import React from "react";
import "../styles/pages/Kontakt.css";
import { Accordion } from "react-bootstrap";

function Kontakt() {
  return (
    <>
      <section className="kontakt">
        <div className="container-kontakt">Kontakt</div>
      </section>
      <Accordion defaultActiveKey={["0","1","2"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>RADNO VRIJEME</Accordion.Header>
          <Accordion.Body>
            Ponedjeljak – Petak 09:00h – 17:00h<br/>Subotom, nedjeljom i praznikom
            ne radimo<br/> RADNO VRIJEME POSLOVNICE (01.04.-30.04.’22.) <br/>Ponedjeljak –
            Petak 09:00h – 13:00h
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>LOKACIJA</Accordion.Header>
          <Accordion.Body>
            Adresa: Trg Hrvatske bratske zajednice 2, 21000 Split<br />

            [ GOOGLE API MAPA ]
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>KONTAKT</Accordion.Header>
          <Accordion.Body>
            tel: 021 344 842<br />
            fax: 021 339 609<br />
            <a href="mailto:desk@f-tours.hr">desk@f-tours.hr</a>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default Kontakt;
