import React from "react";
import Header from '../Components/Header';
import Carousel from '../Components/CarouselPage';

import Menu from "../Components/MenuComponent";
  

function Home(){
    return(
        <div>
          <Header/>
          <Carousel />
          <Menu/>
      

        </div>
    )
}
 export default Home;
 /*
 <Carousel style={{marginTop:'2%'}}>
      <Carousel.Item>
        <img
          className="d-block w-100 imgstyle"
          src={uthappizza}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgstyle"
          src={alberto}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgstyle"
          src={buffet}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>*/