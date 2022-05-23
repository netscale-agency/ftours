import React from 'react';
import {Carousel} from 'react-bootstrap';
import "./../slider/slider.css"
import image1 from "./../assets/imgs/1.jpg"
import image2 from "./../assets/imgs/2.jpg"
import image3 from "./../assets/imgs/3.jpg"

const CarouselContainer = () => {
    return(
        <Carousel>
  <Carousel.Item >
    <img
      className="dalekaP"
      src={image1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='h3-slider'>DALEKA PUTOVANJA</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="euroP"
      src={image2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3 className='h3-slider'>EUROPSKA PUTOVANJA</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="skolskaP"
      src={image3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 className='h3-slider'>ŠKOLSKA PUTOVANJA</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}

export default CarouselContainer;