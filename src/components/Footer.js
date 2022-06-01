import React from "react";
import { Row, Col } from "react-bootstrap";
import "../styles/components/Footer.css";

function Footer() {
  return (
    <>
      <section className="footer-colors">
        <div className="f-tours-yellow"></div>
        <div className="f-tours-red"></div>
        <div className="f-tours-purple"></div>
      </section>
      <section className="footer">
        <div className="container-footer">
          <Row className="row-footer">
            <Col className="col-footer-social">
              <h5 className="h5-footer">društvene mreže</h5>
              <div className="div-footer-social">
                <a href="https://www.facebook.com/ftours/" target="_blank">
                  <i class="fa-brands footer fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/ftours_split/"
                  target="_blank"
                >
                  <i class="fa-brands footer fa-instagram"></i>
                </a>
              </div>
            </Col>
            <Col className="col-footer-info">
              <h5 className="h5-footer">kontakt</h5>
              <p className="p-footer">
                <span className="span-bold">adresa: </span>
                <a
                  target="_blank"
                  className="a-contact"
                  href="https://goo.gl/maps/Ce1W69unBS4pQLTb9"
                >
                  Trg Hrvatske bratske zajednice 2, 21000 Split
                </a>
                <br />
                <span className="span-bold">telefon: </span>
                <a className="a-contact" href="tel:+38521344842">
                  +385 (0)21 344 842
                </a>
                <br />
                <span className="span-bold">email: </span>
                <a className="a-contact" href="mailto:desk@f-tours.hr">
                  desk@f-tours.hr
                </a>
              </p>
              <h5 className="h5-footer">radno vrijeme</h5>
              <p className="p-footer">
                Ponedjeljak – Petak
                <br />
                09:00h – 17:00h
                <br />
                Subotom, nedjeljom i praznikom ne radimo
              </p>
            </Col>
            <Col className="col-footer">
              <h5 className="h5-footer">korisni linkovi</h5>
              <a className="a-pravila-uvjeti" href="opci-podaci-o-agenciji">Opći podaci o agenciji</a>
              <a className="a-pravila-uvjeti" href="opci-uvjeti-poslovanja">Opći uvjeti poslovanja</a>
              <a className="a-pravila-uvjeti" href="pravila-privatnosti">Pravila privatnosti</a>
              <a className="a-pravila-uvjeti" href="podnosenja-prigovora">Način podnošenja prigovora</a>
              <a className="a-pravila-uvjeti" href="politika-kolacica">Politike kolačića</a>
            </Col>
          </Row>
        </div>
      </section>
      <div className="f-tours-dark-blue">
        <span className="copyright">Copyright &copy; 2022 Netscale Agency</span>
      </div>
    </>
  );
}

export default Footer;
