import React from "react";
//import './App.css';

function Navbar() {
  return (
    <body className="main-body">
      <div className="container-fluid navback">
        <div className="row">
          <div className="col-lg-12">
            <nav class="navbar navbar-expand-lg fixed-top navvb ">
              <div class="container-fluid">
                <h3 class="navbar-brand joyy">Joy Okunzuwa</h3>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse navtext" id="navbarNav">
                  <ul class="navbar-nav">
                    {/* <li class="nav-item">
                      <a class="nav-link   homee" aria-current="page" href="#">
                        Home
                      </a>
                    </li> */}
                    <li class="nav-item">
                      <a class="nav-link   homee" href="#about">
                        About
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link   homee" href="#skills">
                        Skills
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link   homee" href="#projects">
                        Project
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link   homee" href="#contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Navbar;
