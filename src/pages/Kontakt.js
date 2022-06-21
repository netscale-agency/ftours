import React from "react";
import "../styles/pages/Kontakt.css";
import ContactForm from "../components/ContactForm";
import { Row, Col, Accordion, Container } from "react-bootstrap";

function Kontakt() {
  return (
    <>
      <section className="kontakt">
        <div className="container-kontakt-purple">Kontakt</div>
      </section>
      <Container className="containter-kontakt">
        <Row className="row-kontakt-page">
          <Col className="col-kontakt">
            <Accordion defaultActiveKey={["0"]}>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Radno vrijeme</Accordion.Header>
                <Accordion.Body>
                  <h3 className="h3-kontakt">
                    <span className="span-kontakt">
                      radno vrijeme poslovnice (01.05.-30.06.’22.)
                    </span>
                  </h3>
                  <p className="p-kontakt">
                    <span className="span-kontakt">• Ponedjeljak – Petak:</span>{" "}
                    09:00h – 13:00h
                    <br />
                    <span className="span-kontakt">
                      • Subotom, nedjeljom i praznikom:
                    </span>{" "}
                    ne radimo
                  </p>
                  <br />
                  <h3 className="h3-kontakt">
                    <span className="span-kontakt">radno vrijeme</span>
                  </h3>
                  <p className="p-kontakt">
                    <span className="span-kontakt">• Ponedjeljak – Petak:</span>{" "}
                    09:00h – 17:00h
                    <br />
                    <span className="span-kontakt">
                      • Subotom, nedjeljom i praznikom:
                    </span>{" "}
                    ne radimo
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Kontakt</Accordion.Header>
                <Accordion.Body>
                  <p className="p-kontakt">
                    <span className="span-kontakt">• Adresa: </span>
                    Trg Hrvatske bratske zajednice 2, 21000 Split
                    <br />
                    <span className="span-kontakt">• Telefon: </span>
                    <a href="tel:+38521344842" className="a-kontakt-link">
                      021 344 842
                    </a>
                    <br />
                    <span className="span-kontakt">• Fax: </span>
                    <a href="tel:+38521339609" className="a-kontakt-link">
                      021 339 609
                    </a>
                    <br />
                    <span className="span-kontakt">• Email: </span>
                    <a href="mailto:desk@f-tours.hr" className="a-kontakt-link">
                      desk@f-tours.hr
                    </a>
                    <br />
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Informacije</Accordion.Header>
                <Accordion.Body>
                  <p className="p-kontakt">
                    <span className="span-kontakt">• OIB: </span>
                    05871616331
                    <br />
                    <span className="span-kontakt">• IBAN: </span>
                    HR07 2390 0011 1012 6276 4<br />
                    kod HRVATSKA POŠTANSKA BANKA d.d.
                    <br />
                    <span className="span-kontakt">• SWIFT/BIC: </span>
                    HPBZHR2X
                    <br />
                    <span className="span-kontakt">• IDK: </span>
                    HR-AB-21-060333584
                    <br />
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <ContactForm />
          </Col>
          <Col className="col-gmap">
            <iframe
              className="gmap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.3958355951513!2d16.43769951522363!3d43.51493766937882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355e0079b9df27%3A0x7b611de1e41c78fa!2sF-TOURS%20Ltd.!5e0!3m2!1sen!2shr!4v1653993097991!5m2!1sen!2shr"
              frameborder="0"
              style={{ border: "0" }}
              title="F-tours map location"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Kontakt;
