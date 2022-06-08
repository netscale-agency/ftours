import React from "react";
//import data from '../components/util/SinglePostData';
import "../styles/components/SingleDestination.css";
import { Tabs, Tab, Card, Col, Container, Image, Row } from "react-bootstrap";
import axios from "axios";

axios
  .get("http://128.199.53.252/wp-json/wp/v2/posts/1")
  .then((res) => console.log(res.data));

function SingleDestination() {
  return (
    <>
      <section className="single-dest-img">
        <Card className="single-fw">
          <Card.Img
            className="img-single"
            src="https://www.f-tours.hr/wp-content/uploads/2018/11/toscana-2286630_1920-1500x430.jpg"
            alt="Destination image"
          />
          <Card.ImgOverlay className="overlay-fw-body">
            <Card.Title className="heading-single">
              single destination
            </Card.Title>
            <Card.Text className="short-desc">short description</Card.Text>
          </Card.ImgOverlay>
        </Card>
        <div className="div-gallery-single">
          <Image
            thumbnail
            className="thumb-single"
            src="https://www.f-tours.hr/wp-content/uploads/2018/09/House-in-the-Tuscany-000016780387_Large-705x469.jpg"
          />
          <Image
            thumbnail
            className="thumb-single"
            src="https://www.f-tours.hr/wp-content/uploads/2018/09/Siena-000001641306_Large-705x462.jpg"
          />
          <Image
            thumbnail
            className="thumb-single"
            src="https://www.f-tours.hr/wp-content/uploads/2018/09/Medieval-town-of-San-Gimignano-Tuscany-Italy-000052577256_Large-1030x686.jpg"
          />
          <Image
            thumbnail
            className="thumb-single"
            src="https://www.f-tours.hr/wp-content/uploads/2018/09/Cathedral-and-Duomo-on-the-Florence-City-Skyline-in-Italy-000016333499_Large-1030x765.jpg"
          />
        </div>
      </section>
      <section className="destionation-content">
        <div className="head-purple">
          <div className="head-inner">
            <h3 className="h3-single-head">single destination</h3>
            <p className="p-single-head">single - destination - route</p>
          </div>
        </div>
        <Container className="single-dest-info">
          <Row className="row-single-info">
            <Col className="col-single-info">
              <div className="single-info-head">
                <i className="fa-solid fa-calendar" />
                <h5 className="h5-single-info">polasci</h5>
              </div>
              <p className="p-single-info">datum / datum</p>
            </Col>
            <Col className="col-single-info">
              <div className="single-info-head">
                <i className="fa-solid fa-clock" />
                <h5 className="h5-single-info">trajanje</h5>
              </div>
              <p className="p-single-info">dan</p>
            </Col>
            <Col className="col-single-info">
              <div className="single-info-head">
                <i className="fa-brands fa-avianex" />
                <h5 className="h5-single-info">prijevoz</h5>
              </div>
              <p className="p-single-info">tip prijevoza</p>
            </Col>
            <Col className="col-single-info">
              <div className="single-info-head">
                <i className="fa-solid fa-money-bill" />
                <h5 className="h5-single-info">cijena</h5>
              </div>
              <p className="p-single-info">od 00000 kn</p>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vehicula venenatis vestibulum. Maecenas magna felis, interdum id
                eros ac, rhoncus auctor libero. Aenean at placerat sem. Nunc
                magna leo, pulvinar scelerisque ultrices vel, iaculis a est.
                Aenean eu porttitor eros. Proin porta fermentum congue.
                Suspendisse euismod purus nec ligula condimentum tincidunt.
                Quisque pharetra purus a dolor consequat, eget ornare tellus
                mollis. Morbi congue turpis non tortor porta congue sed et
                augue. Pellentesque habitant morbi tristique senectus et netus
                et malesuada fames ac turpis egestas. Quisque vitae velit
                viverra, malesuada mi dapibus, congue arcu.
              </p>
            </Tab>
            <Tab
              eventKey="info"
              title="Dodatne informacije"
              className="tab-single"
            >
              <p className="p-tab-description">
                Ut pharetra leo et lectus varius fermentum. Integer iaculis nisl
                non turpis blandit, ut viverra lacus pellentesque. Sed
                tincidunt, urna at porttitor sollicitudin, arcu mauris convallis
                orci, sit amet vestibulum elit mi nec tellus. Mauris interdum
                quam nibh, ut ullamcorper ex venenatis eget. Integer nec ante eu
                ligula bibendum commodo eu a velit. Fusce at ex mattis,
                consectetur odio a, tincidunt velit. Etiam efficitur justo ante,
                faucibus aliquam mauris viverra in. Etiam tincidunt lorem sem,
                cursus auctor erat faucibus eget. Proin venenatis lacus nec
                lorem facilisis, eget vestibulum felis bibendum.
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
              <li>(cijena s popustom)</li>
              <li>(redovna cijena)</li>
            </ul>
          </p>
          <h6>Načini plaćanja putovanja:</h6>
          <p>
            Sed ac nulla non nisi euismod pellentesque in non arcu. Duis
            consectetur vitae est non commodo. Nunc diam diam, iaculis ut
            pulvinar in, accumsan at sem. Curabitur et lacus eu nibh blandit
            sollicitudin. Suspendisse vestibulum massa mi, non fermentum metus
            lobortis sed. Proin libero lacus, eleifend ac gravida nec, dictum ut
            risus.
          </p>
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
