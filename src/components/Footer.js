import React from "react";
import { Row, Col } from "react-bootstrap";
import "../styles/components/Footer.css";
import master from "../assets/images/mastercard.svg";
import maestro from "../assets/images/maestro.svg";
import diners from "../assets/images/diners.svg";

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
                  <i className="fa-brands footer fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/ftours_split/"
                  target="_blank"
                >
                  <i className="fa-brands footer fa-instagram"></i>
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
              <a className="a-pravila-uvjeti" href="opci-podaci-o-agenciji">
                Opći podaci o agenciji
              </a>
              <a className="a-pravila-uvjeti" href="opci-uvjeti-poslovanja">
                Opći uvjeti poslovanja
              </a>
              <a className="a-pravila-uvjeti" href="pravila-privatnosti">
                Pravila privatnosti
              </a>
              <a className="a-pravila-uvjeti" href="podnosenja-prigovora">
                Način podnošenja prigovora
              </a>
              <a className="a-pravila-uvjeti" href="politika-kolacica">
                Politike kolačića
              </a>
              <a className="a-pravila-uvjeti" href="uvjeti-placanja">
                Uvjeti korištenja/uvjeti kupnje
              </a>
            </Col>
          </Row>
        </div>
      </section>

      <div className="logocont">
        <div
          className="redDoli"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            {" "}
            <a
              href="https://www.mastercard.com"
              class="footer-logo-link"
              target="_blank"
            >
              <img
                src={master}
                className="bigLogo"
                style={{ width: "14em", height: "auto" }}
              />
            </a>
            <a
              href="https://brand.mastercard.com/brandcenter/more-about-our-brands.html"
              class="footer-logo-link"
              target="_blank"
              rel="noopener"
            >
              <img
                className="bigLogo"
                src={maestro}
                alt={"maestro"}
                style={{ width: "14em", height: "auto" }}
              />
            </a>
          </div>
          <a
            href="https://www.visaeurope.com"
            class="footer-logo-link"
            target="_blank"
            rel="noopener"
          >
            <img
              className="bigLogo"
              src={
                "https://www.modulos.hr/wp-content/uploads/2020/11/visa-seeklogo.com_.svg"
              }
              alt={"alttext"}
              style={{ width: "14em", height: "auto" }}
            />
          </a>
          <a
            target="_blank"
            class="footer-logo-link"
            href="http://www.diners.com.hr"
          >
            <img
              alt=""
              className="bigLogo"
              src={diners}
              style={{ width: "16em", height: "auto" }}
            />
          </a>
        </div>
        <div className="redDoli" style={{ display: "flex" }}>
          <div>
            <a
              target={"_blank"}
              href="https://www.visa.com.hr/run-your-business/small-business-tools/payment-technology/visa-secure.html"
            >
              <img
                className="smallLogo"
                src="https://3gproxy.com/wp/wp-content/uploads/2022/06/visa_secure.svg"
                alt="Visa logo"
                class="footer-logo-link"
                style={{ width: "8em", height: "auto" }}
              />
            </a>
            <p className="footer-logo-link" style={{ maxWidth: 110 }}>
              <b>"vaše transakcije su sigurne sa Visa-om"</b>
            </p>
          </div>
          <a
            href="https://www-mastercard-com.translate.goog/global/en/business/overview/safety-and-security/identity-check.html?_x_tr_sl=en&_x_tr_tl=hr&_x_tr_hl=hr&_x_tr_pto=sc"
            target={"_blank"}
            class="footer-logo-link"
          >
            <img
              src={
                "https://www.modirum.com/wp-content/uploads/2020/12/MC-IDC-864x864-1-655x437.png"
              }
              alt={"alttext"}
              className="smallLogo"
              style={{ width: "10em", height: "auto" }}
            />
          </a>
          <a href="" target={"_blank"} class="footer-logo-link">
            <img
              className="smallLogo"
              src={
                "https://djecjakolica.eu/wp-content/uploads/2014/05/logo_sigurna-kupnja_2.1.png"
              }
              alt={"alttext"}
              style={{ width: "10em", height: "auto" }}
            />
          </a>{" "}
          <a
            href="https://www.monri.com"
            class="footer-logo-link"
            target="_blank"
            rel="noopener"
          >
            <img
              src={
                "https://www.modulos.hr/wp-content/uploads/2020/11/monri_footer.png"
              }
              alt={"alttext"}
              style={{ width: "10em", height: "auto" }}
            />
          </a>
        </div>
      </div>

      <div className="f-tours-dark-blue">
        <span className="copyright">Copyright &copy; 2022 Netscale Agency</span>
      </div>
    </>
  );
}

export default Footer;
