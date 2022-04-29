import { Carousel } from 'bootstrap';
import React from 'react';
import './App.css';
import CarouselContainer from './components/slider/CarouselContainer';
import { FooterContainer } from './container/footer'

function App() {
  return (
    <>
      <CarouselContainer />
      <FooterContainer />
    </>
  );
}

export default App;
