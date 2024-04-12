import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import navlogo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="single_footer single_footer_address">
                <img src={navlogo} alt="FooterLogo" />
              </div>
              <div className="social_profile">
                <h5>Follow us on:</h5>
                <ul>
                  <li>
                    <Link to="#.">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#.">
                      <i className="fa-brands fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#.">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>

                  <li>
                    <Link to="#.">
                      <i className="fa-brands fa-google"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-xs-12">
              <div className="single_footer">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <Link to="#.">Home</Link>
                  </li>
                  <li>
                    <Link to="#.">About Us</Link>
                  </li>
                  <li>
                    <Link to="#.">Features </Link>
                  </li>
                  <li>
                    <Link to="#.">Pricing</Link>
                  </li>
                  <li>
                    <Link to="#.">Testimonial</Link>
                  </li>
                  <li>
                    <Link to="#.">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-12">
              <div className="single_footer single_footer_address">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <Link to="#.">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="#.">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="#.">Features </Link>
                  </li>
                  <li>
                    <Link to="#.">Pricing</Link>
                  </li>
                  <li>
                    <Link to="#.">Testimonial</Link>
                  </li>
                  <li>
                    <Link to="#.">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <p> Copyright © MyDukaan 2024, All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
