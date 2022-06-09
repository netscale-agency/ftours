import React from 'react';
import "../styles/components/SliderGallery.css";
import slide1 from "../assets/images/toskana-gallery.jpg";
import slide2 from "../assets/images/venecija-gallery.jpg";
import slide3 from "../assets/images/istanbul-gallery.jpg";
import slide4 from "../assets/images/atena-gallery.jpg";

function SliderGallery() {
  return (
    <div className="container-slider-gallery animation">
      <div className="slide-first">
        <img src={slide1}></img>
      </div>
      <div className="slide-second">
        <img src={slide2}></img>
      </div>
      <div className="slide-third">
        <img src={slide3}></img>
      </div>
      <div className="slide-fourth">
        <img src={slide4}></img>
      </div>
    </div>
  )
}

export default SliderGallery;