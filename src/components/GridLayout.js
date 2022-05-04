import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import CardItem from "./CardItem";

function ItemsLayout() {
  return (
    <Container>
    <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 3 }).map((_, idx) => (
        <Col>
          <CardItem />
        </Col>
      ))}
    </Row>
    </Container>
  );
}

export default ItemsLayout;