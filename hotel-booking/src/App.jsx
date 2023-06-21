import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
      <a class="navbar-brand" href="#"><img width="100" height="75" class="d-inline-block align-text-top" src="/logo.jpg" alt="stay-zenith-logo"/></a>
        <a class="navbar-brand" href="#"> StayZenith</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Rooms</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Explore/Discover</a>
            </li>
            <button type="button" class="btn btn-info">Sign Up/Log in</button>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default App
