import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div class="bg-image">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><img width="100" height="75" class="d-inline-block align-text-top" src="/logo.jpg" alt="stay-zenith-logo" /></a>
            <a class="navbar-brand site-name" href="#">StayZenith</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">

              <ul class="navbar-nav">
                <div class="right-aligned">
                  <li class="nav-item">
                    <a class="nav-link active navbutton" aria-current="page" href="#">Rooms</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active navbutton" href="#">About us</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active navbutton" href="#">Explore/Discover</a>
                  </li>
                  <li>
                    <a class="nav-link active navbutton btn btn-dark" href="#">Sign Up/Login</a>
                    {/* <button type="button" class="btn btn-dark">Sign Up/Log in</button> */}
                  </li>

                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <br></br>
      <div class="row row-cols-1 row-cols-md-2 g-4 hotelcards">
        <div class="col">
          <div class="card h-100">
            <img src="/public/room1.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Luxury Ambience Inn</h5>
                <p class="card-text">
Welcome to the opulent and exquisite Grand Royale Suite, where luxury meets sophistication. The room is bathed in warm, soft lighting, casting a gentle glow on the plush furnishings and fine accents</p>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="/public/room2.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Seaside Paradise Resort</h5>
                <p class="card-text">Indulge in opulence with breathtaking ocean views, world-class amenities, and personalized service at our beachfront resort. Unwind in style and create lasting memories on your dream vacation.</p>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="/public/room3.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Cityscape Boutique Hotel</h5>
                <p class="card-text">Discover contemporary elegance at our centrally located hotel. Immerse yourself in the vibrant city life, while enjoying modern comforts, exquisite dining options, and easy access to major attractions.</p>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="/public/room4.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Luxe Haven Hotel</h5>
                <p class="card-text">Welcome to the Luxe Haven Hotel, where indulgence and sophistication intertwine to create an unparalleled sanctuary for your senses.</p>
              </div>
          </div>
        </div>
      </div>
      
      </>
  )
  
}

export default App
