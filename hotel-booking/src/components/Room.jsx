import React from 'react';
import { useState } from 'react';
import { Modal, Carousel } from 'react-bootstrap'
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';


function Room({ room, fromdate, todate }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>

            <div className='container room-card' >
                <div className='row row-text'>
                    <div className='col-md-4'>
                        <img
                            src={room.imageurls[0]}
                            className='smallimg'
                        />
                    </div>
                    <div className='col-md-7'>
                        <h1>{room.name}</h1>
                        <b>
                            <p>Room Type: {room.type}</p>
                            <p>Max Count: {room.maxcount}</p>
                            <p>Phone Number: {room.phonenumber}</p>
                        </b>

                        <div style={{ float: 'right' }}>
                            <b><p>Price: Rs. {room.rentperday} per day</p></b>

                            {(fromdate && todate) && (
                                <Link to={`/bookingscreen/${room._id}/${fromdate}/${todate}`} class="link-info">
                                    <button className="btn btn-primary m-2">Book Now</button>
                                </Link>
                            )}

                            <button className='btn btn-primary' onClick={handleShow}>View Details</button>
                        </div>
                    </div>


                    <Modal show={show} onHide={handleClose} size='lg'>
                        <Modal.Header closeButton>
                            <Modal.Title>{room.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Carousel>
                                {room.imageurls.map(url => {
                                    return <Carousel.Item>
                                        <img
                                            className="d-block w-100 bigimg"
                                            src={url}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                })}
                            </Carousel>
                            <p>{room.description}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>

                        </Modal.Footer>
                    </Modal>
                </div>

            </div>

        </div>
    )
}

export default Room