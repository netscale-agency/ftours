import React from 'react';
//import data from '../components/util/SinglePostData';
import '../styles/components/SingleDestination.css';
import { Image } from 'react-bootstrap';
import img1 from "../assets/images/istanbul-gallery.jpg";
//import axios from 'axios';

function SingleDestination() {
  return (
    <div className='image-overlay'>
      <Image className="post-image" src={img1} fluid></Image>
    </div>
  )
}

export default SingleDestination;