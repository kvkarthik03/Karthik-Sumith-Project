import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link} from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    
      <div class="bg-image">
        <Navbar></Navbar>
      </div>
      <br></br>
      <div class="row row-cols-1 row-cols-md-2 g-4 hotelcards">
        <div class="col">
          <div class="card mx-auto h-100">
            <img src="/public/room1.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Luxury Ambience Inn</h5>
              <p class="card-text">
                Welcome to the opulent and exquisite Grand Royale Suite, where luxury meets sophistication. The room is bathed in warm, soft lighting, casting a gentle glow on the plush furnishings and fine accents</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mx-auto h-100">
            <img src="/public/room2.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Seaside Paradise Resort</h5>
              <p class="card-text">Indulge in opulence with breathtaking ocean views, world-class amenities, and personalized service at our beachfront resort. Unwind in style and create lasting memories on your dream vacation.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mx-auto h-100">
            <img src="/public/room3.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Cityscape Boutique Hotel</h5>
              <p class="card-text">Discover contemporary elegance at our centrally located hotel. Immerse yourself in the vibrant city life, while enjoying modern comforts, exquisite dining options, and easy access to major attractions.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mx-auto h-100">
            <img src="/public/room4.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Luxe Haven Hotel</h5>
              <p class="card-text">Welcome to the Luxe Haven Hotel, where indulgence and sophistication intertwine to create an unparalleled sanctuary for your senses.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p class="col-md-4 mb-0 text-body-secondary">© 2023 Company, Inc</p>

          <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <svg class="bi me-2" width="40" height="32"><use xlink: href="#bootstrap"></use></svg>
          </a>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
          </ul>
        </footer>
      </div>
    </>
  )

}

export default App