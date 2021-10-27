import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div style={{ marginRight: "100px" }}>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
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
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link ms-5 active"
                  aria-current="page"
                  href="/home"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-5" aria-current="page" href="/about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-5" aria-current="page" href="/services">
                  Dental Services
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link ms-5 text-white"
                  aria-current="page"
                  href="/reviews"
                >
                  Reviews
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link ms-5 text-white"
                  aria-current="page"
                  href="/blog"
                >
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link ms-5 text-white"
                  aria-current="page"
                  href="/contact"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
