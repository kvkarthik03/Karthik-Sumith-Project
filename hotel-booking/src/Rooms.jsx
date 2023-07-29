import React from 'react';
import { useState } from 'react';
import { Modal, Carousel } from 'react-bootstrap'
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/esm/Button';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Link, Router } from 'react-router-dom';

function Rooms() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar></Navbar>
      <div className='container' >
        <div className='row'>
          <div className='col-md-4'>
            <img
              src='./room1.jpg'
              className='smallimg'
            />
          </div>
          <div className='col-md-7'>
            <h1>Luxury Ambience Inn</h1>
            <b>
              <p>Rating: ⭐⭐⭐⭐</p>
              <p>Room Type: Deluxe A/c</p>
            </b>

            <div style={{ float: 'right' }}>
              <b><p>Price: Rs. 1000 per day</p></b>
              <Link to="/bookingscreen" class="link-info">
                <button className="btn btn-primary m-2">Book Now</button>
              </Link>
              <button className='btn btn-primary' onClick={handleShow}>View Details</button>
            </div>
          </div>


          <Modal show={show} onHide={handleClose} size='lg'>
            <Modal.Header closeButton>
              <Modal.Title>Luxury Ambience Inn</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100 bigimg"
                    src="./room2.jpg"
                    alt="First slide"
                  />

                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 bigimg"
                    src="./room3.jpg"
                    alt="Second slide"
                  />

                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 bigimg"
                    src="./room4.jpg"
                    alt="Third slide"
                  />

                </Carousel.Item>
              </Carousel>
              <p>This is Room Description</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>

            </Modal.Footer>
          </Modal>
        </div>

      </div>
      <Footer></Footer>
    </div>
  )
}

export default Rooms