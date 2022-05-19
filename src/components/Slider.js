import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../assets/images/vienna.jpg";
import img2 from "../assets/images/istanbul.jpg";
import img3 from "../assets/images/egypt.jpg";
import "../styles/components/Slider.css";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={2500}>
        <img className="d-block w-100" src={img1} alt="First slide" />
        <Carousel.Caption>
          <h3 className="slide-heading">školska putovanja</h3>
          <p className="p-slide">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
          <button type="button" className="btn btn-dark slider">
            vidi više
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img className="d-block w-100" src={img2} alt="Second slide" />
        <Carousel.Caption>
          <h3 className="slide-heading">europska putovanja</h3>
          <p className="p-slide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button type="button" className="btn btn-dark">
            vidi više
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img className="d-block w-100" src={img3} alt="Third slide" />
        <Carousel.Caption>
          <h3 className="slide-heading">daleka putovanja</h3>
          <p className="p-slide">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <button type="button" className="btn btn-dark">
            vidi više
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
