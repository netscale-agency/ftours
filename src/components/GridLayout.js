/*import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import '../styles/components/GridLayout.css';
import CardItem from "./CardItem";

function ItemsLayout() {
  return (
    <Container fluid>
    <Row xs={1} md={3} className="g-0">
      {Array.from({ length: 3 }).map((_, idx) => (
        <Col>
          <CardItem />
        </Col>
      ))}
    </Row>
    </Container>
  );
}

export default ItemsLayout;*/

import React, { useState } from "react";
import data from "../data";
import "../styles/components/GridLayout.css";

function GridLayout() {
  const [noOfElement, setnoOfElement] = useState(4);
  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  };

  const slice = data.cardData.slice(0, noOfElement);

  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        {slice.map((item, index) => {
          return (
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
              <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={item.img} className="card-img-top" alt="card" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div class="col-md-12 text-center">
        <button type="button" class="btn btn-dark" onClick={() => loadMore()}>
          LOAD MORE
        </button>
      </div>
    </section>
  );
}

export default GridLayout;
