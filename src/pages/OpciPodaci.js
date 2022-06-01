import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../src/styles/pages/TermsOfService.css";

function OpciPodaci() {
  return (
    <Container>
      <Row className="row-terms">
        <Col>
          <h1 className="h1-terms">
            Opći podatci o Agenciji sukladno Zakonu o pružanju usluga o turizmu
            (NN 130/2017)
          </h1>
        </Col>
        <Col>
          <p className="p-terms">
            <span className="span-terms">Registrirani naziv tvrtke:</span> DESTINATIONS F-TOURS d.o.o. putnička
            agencija
            <br />
            <span className="span-terms">Registrirana trgovačka marka:</span> DESTINATIONS F-TOURS d.o.o
            <br />
            <span className="span-terms">Adresa sjedišta:</span> HR-21000 Split, Trg Hrvatske bratske zajednice 2,
            Republika Hrvatska
            <br />
            <span className="span-terms">Adresa poslovnice za stranke:</span> HR-21000 Split, Trg Hrvatske bratske
            zajednice 2, Republika Hrvatska
            <br />
            <span className="span-terms">Radno vrijeme za stranke:</span> ponedjeljak – petak od 09:00 – 17:00 h
            <br />
            <span className="span-terms">OIB poslovnog subjekta:</span> 05871616331
            <br />
            <span className="span-terms">Porezni broj:</span> 05871616331
            <br />
            <span className="span-terms">EU porezni – identifikacijski broj:</span> HR05871616331
            <br />
            <span className="span-terms">MBS Poslovnog subjekta:</span> 060333584
            <br />
            <span className="span-terms">Registracija:</span> Tt-17/1409-2 kod Trgovačkog suda u Splitu
            <br />
            <span className="span-terms">ID KOD AGENCIJE:</span> HR-AB-21-060333584
          </p>
        </Col>
        <Col>
          <p className="p-terms">
            <span className="span-terms">Voditelj poslova:</span> MLADINIĆ GORANA, u svojstvu Osobe odgovorne za
            poslovanje putničke agencije, <br />
            sukladno Zakonu o pružanju usluga u turizmu (N.N. 130/2017)
            <br />
            <span className="span-terms">Temeljni kapital:</span> 20.000,00 kuna uplaćen u cijelosti
            <br />
            <span className="span-terms">Nadležno nadzorno tijelo:</span> Ministarstvo turizma RH – turistička
            inspekcija
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default OpciPodaci;
