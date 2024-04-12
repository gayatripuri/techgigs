import React from "react";
import "./Contact.css";
import MapMarker from "../../assets/map.png";
import CallLogs from "../../assets/call_log.png";
import mailBox from "../../assets/mail.png";

const Contact = () => {
  return (
    <>
      <section className="homeContactSection" id="contactus">
        <div className="container">
          <div className="cotactInnerSec">
            <div className="row">
              <div className="col-md-6">
                <div class="homeContactSec">
                  <h3>CONTACT US</h3>
                  <h2>Get in Touch</h2>
                  <p>When you say Get in touch you have said it all.</p>
                </div>
                <div className="contactDetails">
                  <ul>
                    <li>
                      <img src={mailBox} alt="Mail Box" />
                    </li>
                    <li>
                      <h3>Email Us</h3>
                      <a href="mailto:nikita@mydukaanapp.com">
                        nikita@mydukaanapp.com
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <img src={CallLogs} alt="call logs" />
                    </li>
                    <li>
                      <h3>Call Us</h3>
                      <a href="tel:+91 9988776655">+91 9988776655</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <img src={MapMarker} alt="Map Makere" />
                    </li>
                    <li>
                      <h3>Visit Us</h3>
                      <p>2561, Victoria Market, Melbourne VIC, 3000</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div class="homeContactForm">
                  <div class="homeContactSec">
                    <h2>Leave us a message</h2>
                    <p>And we will get back to you as soon as possible.</p>
                  </div>
                  <div className="formPart">
                    <form>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="formField">
                            <input type="text" placeholder="First Name" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="formField">
                            <input type="text" placeholder="Last Name" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="formField">
                            <input type="eail" placeholder="Email Address" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="formField">
                            <textarea placeholder="Your Message"></textarea>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="formField">
                            <button className="tryfreebtn">Send Message</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
