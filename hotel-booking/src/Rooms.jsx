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
    // <div>
    // <Navbar></Navbar>
    // <MDBCarousel showControls fade>
    //   <MDBCarouselItem
    //     className='w-100 d-block'
    //     itemId={1}
    //     src='./public/room1.jpg'
    //     alt='...'
    //   />
    //   <MDBCarouselItem
    //     className='w-100 d-block'
    //     itemId={2}
    //     src='./public/room2.jpg'
    //     alt='...'
    //   />
    //   <MDBCarouselItem
    //     className='w-100 d-block'
    //     itemId={3}
    //     src='./public/room3.jpg'
    //     alt='...'
    //   />
    //   <MDBCarouselItem
    //     className='w-100 d-block'
    //     itemId={4}
    //     src='./public/room4.jpg'
    //     alt='...'
    //   />
    // </MDBCarousel>
    // <Button variant="primary">Book Now</Button>

    // <Footer></Footer>
    // </div>

    <div className='container'>
      <Navbar></Navbar>
      <div className="row">
        <div className="col-md-4" >
          <img src="./room1.jpg" className='smallimg'></img>
        </div>

        <div className="col-md-7" style={{ textAlign: 'left', margin: 0, padding: 0 }}>
          <h1>Luxury Ambience Inn</h1>
          <b>
            <p>Rating: ⭐⭐⭐⭐⭐</p>
            <p>Room Type: Deluxe A/c</p>
            <p>Bengaluru, Karnataka, India</p>
          </b>

          <div style={{ float: 'right' }}>
            <b><p>Price: Rs. 1000 per day</p></b>
            <button className="btn btn-primary">Book Now</button>
          </div>

        </div>
      </div>

    </div>
  )
}