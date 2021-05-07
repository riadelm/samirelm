import React from 'react'
import {Carousel, Image} from 'react-bootstrap'
import CasaImg1 from '../assets/jasminepark1.jpg'
import CasaImg2 from '../assets/casaport.jpg'
import CasaImg3 from '../assets/casatwin.jpg'
const HomeScreen = () => {
    return (
        <div class="carouselDiv containger-lg">
        <Carousel>
        <Carousel.Item interval={1000}>
          <Image
            className="d-block w-100 carousel-bg"
            src={CasaImg1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <Image
            className="d-block w-100 carousel-bg"
            src={CasaImg2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100 carousel-bg"
            src={CasaImg3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    )
}

export default HomeScreen
