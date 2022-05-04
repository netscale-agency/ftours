import React from "react";
import ItemImg from "../assets/images/bol-brac.jpg";
import { Card } from "react-bootstrap";

function CardItem() {
  return (
    <Card className="text-black">
      <Card.Img variant="top" src={ ItemImg } alt="Item Image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default CardItem;
