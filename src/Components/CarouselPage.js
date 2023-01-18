import React from "react";
import one from './images/one.jfif'
import two from './images/two.jfif'
import three from './images/three.webp'
import Carousel from 'react-bootstrap/Carousel';
import './Homepage.css';


function CarouselPage(){
        return(
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 imgstyle"
          src={one}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgstyle"
          src={two}
          alt="Second slide"
        />


      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgstyle"
          src={three}
          alt="Third slide"
        />


      </Carousel.Item>
    </Carousel>
        )
}

export default CarouselPage;