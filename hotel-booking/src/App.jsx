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

      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <img src="/public/room1.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="/public/room2.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a short card.</p>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="/public/room3.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="/public/room4.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
