import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../src/styles/pages/TermsOfService.css";

function PodnosenjaPrigovora() {
  return (
    <Container>
      <Row className="row-terms">
        <Col>
          <h1 className="h1-terms">Način podnošenja prigovora</h1>
        </Col>
        <Col>
          <p className="p-terms">
            Sukladno Članku 10. Stavak 2. Zakona o zaštiti potrošača (NN 41/14,
            110/15), obavješćujemo potrošače kako prigovor na kvalitetu naših
            usluga mogu dostaviti isključivo u pisanom obliku, elektronskom
            poštom na: desk@f-tours.hr ili poštom na adresu: DESTINATIONS
            F-TOURS d.o.o., Trg Hrvatske bratske zajednice 2, 21000 Split,
            unutar osam (8) dana nakon završetka usluge.<br />Odgovor na prigovor
            potrošača, obvezujemo se dati u roku od petnaest (15) dana od dana
            zaprimanja Vašeg prigovora, na adresu koju navedete u prigovoru kao
            Vašu adresu.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default PodnosenjaPrigovora;
