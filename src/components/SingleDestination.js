import React, { useMemo, useState } from "react";
import "../styles/components/SingleDestination.css";
import { Tabs, Tab, Card, Col, Container, Image, Row } from "react-bootstrap";
import axios from "axios";
import Gallery from "./Gallery";
import Modal from "./Modal";

function SingleDestination() {
  const [destination, setDestination] = useState();
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const href = window.location.href.split("/").filter(Boolean);
  const slug = href[2];
  const dataCall = (slug) => {
    axios.get(`http://64.225.64.125:8000/${slug}`).then((res) => {
      setDestination(res.data);
    });
  };
  useMemo(() => {
    dataCall(slug);
  }, [slug]);
  if (destination)
    return (
      <>
        {" "}
        {open && (
          <Modal  data={destination.data.gallery} setOpen={setOpen} setActive={setActive} active={active} />
        )}
        <section className="single-dest-img">
          <Card className="single-fw">
            <Card.Img
              className="img-single"
              src={destination.data.hero.image}
              alt="Destination image"
            />
            <Card.ImgOverlay className="overlay-fw-body">
              <Card.Title className="heading-single">
                {destination.data.hero.title}
              </Card.Title>
              <Card.Text className="short-desc">
                {destination.data.hero.subtitle}
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
          <Gallery data={destination.data.gallery} setOpen={setOpen} setActive={setActive} />
        </section>
        <section className="destionation-content">
          <div className="head-purple">
            <div className="head-inner">
              <h3 className="h3-single-head">
                {destination.data.sekcija1.trip_title}
              </h3>
              <p className="p-single-head">
                {destination.data.sekcija1.trip_description}
              </p>
            </div>
          </div>
          <Container className="single-dest-info">
            <Row className="row-single-info">
              <Col className="col-single-info">
                <div className="single-info-head">
                  <i className="fa-solid fa-calendar" />
                  <h5 className="h5-single-info">polasci</h5>
                </div>
                {destination.data.polasci.map((item, i) => {
                  if (item.status !== "Popunjeno" && item.polazak)
                    return (
                      <p key={i} className="p-single-info">
                        {item.polazak}
                      </p>
                    );
                })}
              </Col>
              <Col className="col-single-info">
                <div className="single-info-head">
                  <i className="fa-solid fa-clock" />
                  <h5 className="h5-single-info">trajanje</h5>
                </div>
                <p className="p-single-info">
                  {destination.data.aboutTrip.duration}
                </p>
              </Col>
              <Col className="col-single-info">
                <div className="single-info-head">
                  <i className="fa-brands fa-avianex" />
                  <h5 className="h5-single-info">prijevoz</h5>
                </div>
                <p className="p-single-info">
                  {destination.data.aboutTrip.transportation}
                </p>
              </Col>
              <Col className="col-single-info">
                <div className="single-info-head">
                  <i className="fa-solid fa-money-bill" />
                  <h5 className="h5-single-info">cijena</h5>
                </div>
                <p className="p-single-info">
                  {destination.data.aboutTrip.cijena}
                </p>
              </Col>
              <Col className="col-single-info">
                <button
                  type="button"
                  onClick={() => {
                    window.location.href = "/";
                  }}
                  className="btn-single"
                >
                  prijava za putovanje
                </button>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="single-long-info">
          <div className="head-blue">
            <i class="fa-solid fa-circle-info" />
            <h3 className="h3-long-info">detaljno o putovanju</h3>
          </div>
          <Container className="container-single-long">
            <Tabs defaultActiveKey="program" className="tabs-single">
              <Tab
                eventKey="program"
                title="Program putovanja"
                className="tab-single"
              >
                <p className="p-tab-description">
                  {destination.data.aboutTrip.program_putovanja}
                </p>
              </Tab>
              <Tab
                eventKey="info"
                title="Dodatne informacije"
                className="tab-single"
              >
                <p className="p-tab-description">
                  {destination.data.aboutTrip.dodatne_informacije}
                </p>
              </Tab>
            </Tabs>
          </Container>
        </section>
        <section className="section-price">
          <div className="div-blue-price">
            <Container className="container-single-long">
              <h5>
                <i class="fa-solid fa-credit-card"></i>cijena
              </h5>
              <p>
                <ul>
                  <li>{destination.data.price.cijena_popust}</li>
                  <li>{destination.data.price.cijena_redovna}</li>
                </ul>
              </p>
              <h6>Načini plaćanja putovanja:</h6>
              <p>{destination.data.price.nacini_placanja}</p>
            </Container>
          </div>
          <Container className="container-single-long">
            <Tabs defaultActiveKey="program" className="tabs-single">
              <Tab
                eventKey="program"
                title="Cijena uključuje"
                className="tab-single"
              >
                <p className="p-tab-description">
                  <ul>
                    <li>(tekst tekst)</li>
                    <li>(tekst tekst)</li>
                    <li>(tekst tekst)</li>
                    <li>(tekst tekst)</li>
                    <li>(tekst tekst)</li>
                    <li>(tekst tekst)</li>
                    <li>(tekst tekst)</li>
                    <li>(tekst tekst)</li>
                  </ul>
                </p>
              </Tab>
              <Tab
                eventKey="info"
                title="Cijena ne uključuje"
                className="tab-single"
              >
                <p className="p-tab-description">
                  <ul>
                    <li>(tekst tekst)</li>
                    <li>(tekst tekst)</li>
                    <li>(tekst tekst)</li>
                    <li>(tekst tekst)</li>
                    <li>(tekst tekst)</li>
                    <li>(tekst tekst)</li>
                    <li>(tekst tekst)</li>
                    <li>(tekst tekst)</li>
                  </ul>
                </p>
              </Tab>
            </Tabs>
            <div className="div-btn">
              <button
                type="button"
                onClick={() => {
                  window.location.href = "/";
                }}
                className="btn-single main"
              >
                prijava za putovanje
              </button>
            </div>
          </Container>
        </section>
      </>
    );
}

export default SingleDestination;
