import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/esm/Button';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Rooms() {
  return (
    <div>
    <Navbar></Navbar>
    <MDBCarousel showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='./public/room1.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='./public/room2.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='./public/room3.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src='./public/room4.jpg'
        alt='...'
      />
    </MDBCarousel>
    <Button variant="primary">Book Now</Button>
    
    <Footer></Footer>
    </div>
  )
}