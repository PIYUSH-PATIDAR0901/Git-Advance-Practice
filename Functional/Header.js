import React from 'react';
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="container-fluid">
    <nav class="navbar row navbar-expand-lg" id='Nav1'>
      <div class="container-fluid col-sm col-md col">
        <Link class="navbar-brand" to="/">
         <img src="logo.webp" alt="" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="AboutUs">
                About Us
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="Services">
                Services
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="Solution">
                Solution
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="Portfolio">
                Portfolio
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="HireUs">
                Hire Us
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="OurClients">
                Our Clients
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="Contact">
                <button className=' text-light' id='btncolor'>Contact Us</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}
