import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import slideImg1 from '../../static/banner/Dusty trimmer.png'
import slideImg2 from '../../static/banner/home-picture.jpg'

const ImageSlider = () =>{

    return <>
    <Carousel fade>
  <Carousel.Item>
    <img
    
      src={slideImg1}
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
    
      src={slideImg2}
      alt="Second slide"
    />

  </Carousel.Item>

</Carousel>
    </>
}
export default ImageSlider;