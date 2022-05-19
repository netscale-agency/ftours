import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/pages/Naslovnica.css";
import Slider from "../components/Slider";
import DestinationLayoutGrid from "../components/DestinationLayoutGrid";
import img_skolska from "../assets/images/skolska.jpg";
import img_europska from "../assets/images/europska.jpg";
import img_novagodina from "../assets/images/novagodina.jpg";

function Naslovnica() {
  return (
    <>
      <Slider />
      <section className="section-prijava">
        <Container>
          <Row>
            <Col className="col-prijava">
              <a href="#" className="a-prijava">
                <i class="fa fa-arrow-circle-right" aria-hidden="true" />
                prijava za putovanje!
              </a>
            </Col>
            <Col className="col-prijava">
              <a href="#" className="a-prijava">
                <i class="fa fa-arrow-circle-right" aria-hidden="true" />
                školska putovanja i jednodnevni izleti
              </a>
            </Col>
          </Row>
          <Row>
            <Col />
            <Col className="col-prijava">
              <a href="#" className="a-prijava">
                <i class="fa fa-arrow-circle-right" aria-hidden="true" />
                ostala putovanja
              </a>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section-putovanja">
        <div className="div-galerija"><h1>GALERIJA</h1></div>
        <div className="div-putovanja">
          <div className="div-putovanja-inner">
            <h1 className="h3-putovanja">
              Putovanje nije samo naš posao, putovanje je naš način života
            </h1>
            <p className="p-putovanja">prudruži nam se!</p>
          </div>
        </div>
        <div className="div-cards-kategorije">
          <Container>
            <Row>
              <Col className="col-cards">
                <Card className="bg-dark text-white">
                  <Card.Img src={img_skolska} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title>školska putovanja</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col className="col-cards">
                <Card className="bg-dark text-white">
                  <Card.Img src={img_europska} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title>europska putovanja</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col className="col-cards">
                <Card className="bg-dark text-white">
                  <Card.Img src={img_novagodina} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title>nova godina</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className="section-cards">
        <div class="ftours-red">Europska putovanja</div>
        <DestinationLayoutGrid />
        <div class="ftours-purple">Školska putovanja</div>
        <DestinationLayoutGrid />
        <div class="ftours-blue">Nova godina</div>
        <DestinationLayoutGrid />
      </section>
    </>
  );
}

export default Naslovnica;
