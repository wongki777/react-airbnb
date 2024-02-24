import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Bromo Mountain, Indonesia</h5>
          <p>The area is one of the most visited tourist destinations in East Java.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src='../images/carousel-1.jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Road Trip to Utah, USA</h5>
          <p>Utah is a stargazer’s paradise with mountainous landscapes and very low light pollution</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Pinky Beach, Myokonos</h5>
          <p>enjoy the modern and discreet elegance of pinky beach in a laid back atmosphere.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
