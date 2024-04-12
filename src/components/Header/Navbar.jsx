import React from "react";

import "./Navbar.css";
import navlogo from "../../assets/Logo.png";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="mainLogo">
              <img src={navlogo} className="navbar-brand" alt="Main Logo" />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbarui" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a href="#home" className="nav-link" aria-current="page">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#about-us" className="nav-link">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#features" className="nav-link">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#pricing" className="nav-link">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#testimonial" className="nav-link">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#contactus" className="nav-link">
                    Contact Us
                  </a>
                </li>
                <button className="nav-item buyNowbtn">BUY NOW</button>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
