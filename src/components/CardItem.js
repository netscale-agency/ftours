import React, { useState, useEffect } from "react";
import ItemImg from "../assets/images/bol-brac.jpg";
import { Card } from "react-bootstrap";
import Item from './Item';

function CardItem() {
  return (
    <Card className="text-black">
      <Card.Img href={ Item } variant="top" src={ ItemImg } alt="Item Image" />
      <Card.Body>
        <Card.Title>Putovanje</Card.Title>
        <Card.Text>
          1 dan / brod i autobus
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
