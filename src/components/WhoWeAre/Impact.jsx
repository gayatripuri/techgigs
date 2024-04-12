import React from 'react'
import './Impact.css'

import CEOImage from "../../assets/sandeepCEO.jpg";

const Impact = () => {
  return (
    <>
    <section className='ourImpactSection' id='testimonial'>
      <div className='container'>
      <div className="ourImpactHeading">
            <h3>OUR IMPACT</h3>
            <h2>People who already love us</h2>
            <p>
            It is the Bright One, it is the Right One, that is Love us.
            </p>
          </div>
          <div className="ceoMsg">
            <div className="row">
              <div className="col-md-5">
                <div className="ceoImage">
                  <img src={CEOImage} alt="Ceo" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="ceoIContent">
                  <h4>
                    “As a busy professional, convenience is key when it comes to shopping. This e-commerce app ticks all the boxes for me - from easy search functionality to secure payment options. It's become my go-to for everything I need.”
                  </h4>
                  <h5>Sandeep Mohite</h5>
                  <p>Ceo & Founder</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
    
    </>
  )
}

export default Impact;