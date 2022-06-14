import React, { useMemo, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/pages/Naslovnica.css";
import Slider from "../components/Slider";
import SliderGallery from "../components/SliderGallery";
import DestinationLayoutGrid from "../components/DestinationLayoutGrid";
import img_skolska from "../assets/images/skolska.jpg";
import img_europska from "../assets/images/europska.jpg";
import img_novagodina from "../assets/images/novagodina.jpg";
import axios from "axios";

function Naslovnica() {
  const [destinations, setDestinations] = useState([]);

  const dataCall = () => {
    axios.get("http://localhost:8000/").then((res) => {
      setDestinations(res.data);
    });
  };

  useMemo(async () => {
    await dataCall();
  }, []);
  let current_cat;
  const category = (cat) => {
    if (
      cat === "Skolska putovanja" ||
      cat === "Osnovne skole" ||
      cat === "Srednje skole" ||
      cat === "Izleti"
    ) {
      current_cat = "Skolska putovanja";
      return "Skolska putovanja";
    } else {
      current_cat = "Europska i daleka putovanja";
      return "Europska i daleka putovanja";
    }
  };
  return (
    <>
      <Slider />
      <section className="section-prijava">
        <Container>
          <Row className="row-prijava">
            <Col className="col-prijava">
              <a href="#" className="a-prijava">
                <i className="fa fa-arrow-circle-right" aria-hidden="true" />
                prijava za putovanje!
              </a>
            </Col>
            <Col className="col-prijava">
              <a href="#" className="a-prijava">
                <i className="fa fa-arrow-circle-right" aria-hidden="true" />
                školska putovanja i jednodnevni izleti
              </a>
            </Col>
            <Col className="col-prijava">
              <a href="#" className="a-prijava">
                <i className="fa fa-arrow-circle-right" aria-hidden="true" />
                ostala putovanja
              </a>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section-putovanja">
        <SliderGallery />
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
            <Row className="row-cards">
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
        {destinations.map((item, i) => {
          if (current_cat === item.categories) return item;
          else return "";
        })}

        {destinations &&
          destinations.filter(
            (item) =>
              item.categories === "Skolska putovanja" ||
              "Osnovne skole" ||
              "Srednje skole" ||
              "Izleti"
          ).length && <div className="ftours-red">školska putovanja</div>}
        {destinations &&
          destinations.filter(
            (item) =>
              item.categories === "Skolska putovanja" ||
              "Osnovne skole" ||
              "Srednje skole" ||
              "Izleti"
          ).length && (
            <DestinationLayoutGrid
              destinationscards={destinations.filter(
                (item) =>
                  item.categories === "Skolska putovanja" ||
                  "Osnovne skole" ||
                  "Srednje skole" ||
                  "Izleti"
              )}
            />
          )}
        {destinations &&
          destinations.filter(
            (item) =>
              item.categories === "Europska i daleka putovanja" ||
              "Europska putovanja" ||
              "Daleka putovanja" ||
              "Nova godina" ||
              "Krstarenja"
          ).length && (
            <div className="ftours-blue">europska i daleka putovanja</div>
          )}
        {destinations &&
          destinations.filter(
            (item) =>
              category(item.categories) === "Europska i daleka putovanja" ||
              "Europska putovanja" ||
              "Daleka putovanja" ||
              "Nova godina" ||
              "Krstarenja"
          ).length && (
            <DestinationLayoutGrid
              destinationscards={destinations.filter(
                (item) =>
                  item.categories === "Europska i daleka putovanja" ||
                  "Europska putovanja" ||
                  "Daleka putovanja" ||
                  "Nova godina" ||
                  "Krstarenja"
              )}
            />
          )}
      </section>
      <section className="section-o-nama">
        <Container>
          <Row className="row-o-nama-naslovna">
            <Col className="col-o-nama-naslovna">
              <h3 className="h3-o-nama-naslovna">o nama</h3>
              <p className="p-o-nama-naslovna">
                Težimo da budemo najbolji u onome što radimo i usredotočujemo se
                na ono što je važno za izgradnju našeg poslovanja.
              </p>
              <p className="p-o-nama-naslovna">
                Pri tome se oslanjamo na ključne vrijednosti, a to su
                profesionalnost, ustrajnost i poštenje.
              </p>
              <p className="p-o-nama-naslovna">
                Svi sudjelujemo u tome. Generacije naših putnika govore nama u
                prilog… uvjerite se i Vi!
              </p>
              <button
                type="button"
                onClick={() => {
                  window.location.href = "/o-nama";
                }}
                className="btn btn-info"
              >
                <i className="fa-solid fa-user-group" />
                F-Team
              </button>
            </Col>
            <Col className="col-o-nama-naslovna-icons">
              <div className="col-o-nama-inner">
                <div className="icon-o-nama">
                  <i className="fas fa-life-ring"></i>
                </div>
                <div className="col-o-nama-text">
                  <h5 className="h5-o-nama-icons">putno osiguranje</h5>
                  <p className="p-o-nama-icons">
                    na svakom putovanju, za svakog putnika
                  </p>
                </div>
              </div>
              <div className="col-o-nama-inner">
                <div className="icon-o-nama">
                  <i className="fas fa-address-card"></i>
                </div>
                <div className="col-o-nama-text">
                  <h5 className="h5-o-nama-icons">vodiči i pratitelji</h5>
                  <p className="p-o-nama-icons">iskusni i profesionalni tim</p>
                </div>
              </div>
              <div className="col-o-nama-inner">
                <div className="icon-o-nama">
                  <i className="fas fa-signs-post"></i>
                </div>
                <div className="col-o-nama-text">
                  <h5 className="h5-o-nama-icons">destinacije</h5>
                  <p className="p-o-nama-icons">
                    najzanimljivija mjesta širom svijeta
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Naslovnica;
