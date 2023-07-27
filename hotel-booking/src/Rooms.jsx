import React from 'react';
import { useState } from 'react';
//import {Modal, Button} from 'react-bootstrap'
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/esm/Button';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function Rooms() {
  const [showCarousel, setShowCarousel] = useState(false);

  const handleImageClick = () => {
    setShowCarousel(true);
  };
  return (
    // <div>
    /* <Navbar></Navbar>
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
    <Button variant="primary">Book Now</Button> */
    <div>
      <Navbar></Navbar>
      <div className='container text-left'>
        <div className='row text-left'>
          <div className='col-md-4 text-left'>
          <img
              src='./room1.jpg'
              className='smallimg'
            />
          </div>
          <div className='col-md-7 text-left'>
            <h1>Luxury Ambience Inn</h1>
            <b>
              <p>Rating: ⭐⭐⭐⭐</p>
              <p>Room Type: Deluxe A/c</p>
            </b>

            <div style={{ float: 'right' }}>
              <p>Price: Rs. 1000 per day</p>
              <button className='btn btn-primary'>Book Now</button>
            </div>
          </div>


        </div>

      </div>

      <Footer></Footer>

      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}

    </div>
  )
}

export default Rooms