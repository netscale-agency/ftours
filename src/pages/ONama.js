import React from "react";
import "../styles/pages/ONama.css";
import img from "../assets/images/o-nama.jpg";
import avatar from "../assets/images/avatar.png";
import { Container, Row, Col, Card } from "react-bootstrap";

function ONama() {
  return (
    <>
      <section className="section-full-width">
        <Card className="card-o-nama bg-dark text-white">
          <Card.Img className="img-o-nama" src={img} alt="O nama" />
          <Card.ImgOverlay className="img-overlay-o-nama">
            <Card.Title className="title-o-nama">o nama</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </section>
      <Container className="container-o-nama-tekst">
        <Row className="row-o-nama-tekst">
          <Col xs={11} className="col-o-nama-text">
            <p className="p-o-nama">
              Destinations F-TOURS d.o.o., turistička je agencija koja djeluje
              na području Dalmacije. Agencija aktivno sudjeluje u outgoing
              turizmu sa posebnim usmjerenjem prema školskom turizmu i grupnim
              putovanjima.
            </p>
            <p className="p-o-nama">
              Profesionalni tim agencije čine djelatnici s bogatim radnim
              iskustvom u svim segmentima turističkog poslovanja. Organizirali
              smo putovanje za preko 100 000 putnika i na taj način stekli
              veliko iskustvo, a našim putnicima pružili temelj za sigurnost i
              povjerenje. Svi naši proizvodi i poslovni procesi utemeljeni su na
              načelima upravljanja kvalitetom, a zadovoljstvo klijenata naše je
              glavno usmjerenje. Putovanje nije samo naš posao, putovanje je naš
              način života. Novi ljudi, slikoviti gradovi i različite kulture
              boje su koje dodajemo na paletu naših života. To je privilegija
              koju želimo dijeliti s Vama.
            </p>
            <p className="p-o-nama">
              Težimo da budemo najbolji u onome što radimo i usredotočujemo se
              na ono što je važno za izgradnju našeg poslovanja. Pri tome se
              oslanjamo na ključne vrijednosti, a to su profesionalnost,
              ustrajnost i poštenje. Svi sudjelujemo u tome.
            </p>
            <p className="p-o-nama">
              Generacije naših putnika govore nama u prilog… uvjerite se i Vi!
            </p>
          </Col>
        </Row>
      </Container>
      <div class="ftours-purple o-nama">vaš f-tours team</div>
      <Container className="container-ftours-team">
        <Row className="row-ftours-team">
          <Col>
            <Card className="card-ftours-team shadow">
              <Card.Img className="img-avatar" src={avatar}></Card.Img>
              <Card.Body className="card-body-ftours-team">
                <Card.Title>Maja Božinović</Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">
                  direktor, član uprave
                </Card.Subtitle>
                <Card.Text>
                  Telefon: +385 21 360 085
                  <br />
                  Email: maja@f-tours.hr
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-ftours-team shadow">
            <Card.Img className="img-avatar" src={avatar}></Card.Img>
              <Card.Body className="card-body-ftours-team">
                <Card.Title>Mario Miočić</Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">
                  direktor, član uprave
                </Card.Subtitle>
                <Card.Text>
                  Telefon: +385 21 339 611
                  <br />
                  Email: mario@f-tours.hr
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-ftours-team shadow">
            <Card.Img className="img-avatar" src={avatar}></Card.Img>
              <Card.Body className="card-body-ftours-team">
                <Card.Title>Marko Mandušić</Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">
                voditelj računovodstva
                </Card.Subtitle>
                <Card.Text>
                  Telefon: +385 21 339 608
                  <br />
                  Email: marko@f-tours.hr
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="container-ftours-team">
        <Row className="row-ftours-team">
          <Col>
            <Card className="card-ftours-team shadow">
            <Card.Img className="img-avatar" src={avatar}></Card.Img>
              <Card.Body className="card-body-ftours-team">
                <Card.Title>Egidio Košta</Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">
                  prodajni predstavnik
                </Card.Subtitle>
                <Card.Text>
                  Telefon: +385 21 339 612
                  <br />
                  Email: kole@f-tours.hr
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-ftours-team shadow">
            <Card.Img className="img-avatar" src={avatar}></Card.Img>
              <Card.Body className="card-body-ftours-team">
                <Card.Title>Mate Božiković</Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">
                  prodajni predstavnik
                </Card.Subtitle>
                <Card.Text>
                  Telefon: +385 21 339 607
                  <br />
                  Email: mate.bozikovic@f-tours.hr
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-ftours-team shadow">
            <Card.Img className="img-avatar" src={avatar}></Card.Img>
              <Card.Body className="card-body-ftours-team">
                <Card.Title>Ivana Olujić</Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">
                  predstavnica u poslovnici
                </Card.Subtitle>
                <Card.Text>
                  Telefon: +385 21 344 842
                  <br />
                  Email: ivana@f-tours.hr
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ONama;
