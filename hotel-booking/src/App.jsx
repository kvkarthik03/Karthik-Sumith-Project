import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

function App() {
  return (
    <>

      <div class="bg-image">
        <Navbar></Navbar>

        <br></br>
        <h1 className="site-name" data-text="Live in Luxury">Live in Luxury</h1>
        <center><Link to='/rooms'><button className="book-now-btn">Book Luxurious Rooms like these Now!</button></Link></center>
        <div className="carousel-container">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 bigimg"
                src={"room1.jpg"}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 bigimg"
                src={"room2.jpg"}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 bigimg"
                src={"room3.jpg"}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 bigimg"
                src={"room4.jpg"}
                alt="Fourth slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <Footer></Footer>


      {/* <Navbar></Navbar>
      <Link to='/homescreen'>Click</Link> */}
    </>

  )

}

export default App
