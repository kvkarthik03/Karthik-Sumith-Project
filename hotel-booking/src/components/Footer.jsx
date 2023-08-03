import React from "react"

function Footer() {
return(
    <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p class="col-md-4 mb-0 text-body-secondary">© StayZenith</p>

          <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <svg class="bi me-2" width="40" height="32"><use xlink: href="#bootstrap"></use></svg>
          </a>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item"><a href="/rooms" class="nav-link px-2 text-body-secondary">Rooms</a></li>
            <li class="nav-item"><a href="contactus" class="nav-link px-2 text-body-secondary">Contact Us</a></li>
            
          </ul>
          <i><p className="text-body-secondary">*This website is intended for educational purposes only, and not meant for commercial use.</p></i>
        </footer>
      </div>
)
}

export default Footer