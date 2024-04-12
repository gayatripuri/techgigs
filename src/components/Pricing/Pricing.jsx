import React from "react";
import "./Pricing.css";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <>
      <section className="pricingPlane" id="pricing">
        <div className="container">
          <div className="pricingplaneInnerSection">
            <div className="pricingHeading">
              <h3>CHOOSE AS YOUR NEED</h3>
              <h2>Really Simple Pricing</h2>
              <p>No hidden fees, no limits</p>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="pricingplanecSec">
                  <h3>Basic</h3>
                  <p>
                    Small Business who are just starting on their marketing.
                  </p>
                  <h4>
                    $30.00/<span>month</span>
                  </h4>
                  <Link to="/" className="tryfreebtn">
                    Try free for 30 days
                  </Link>
                  <span>No credit card required</span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="pricingplanecSec active">
                  <h3>Professional</h3>
                  <p>Established Marketing Teams with bigger needs.</p>
                  <h4>
                    $80.00/<span>month</span>
                  </h4>
                  <Link to="/" className="tryfreebtn">
                    ONE WEEK FREE TRIAL
                  </Link>
                  <span>No credit card required</span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="pricingplanecSec">
                  <h3>Enterprise</h3>
                  <p>Agencies who need to manage multiple accounts.</p>
                  <h4>
                    $100.00/<span>month</span>
                  </h4>
                  <Link to="/" className="tryfreebtn">
                    Try free for 2 WEEKS
                  </Link>
                  <span>No credit card required</span>
                </div>
              </div>
            </div>
            <div className="trustedcontnt">
              <div className="row">
                <div className="col-md-3">
                  <div className="innertrstCont">
                    <h3>INTEGRATIONS</h3>
                    <h2>Trusted by many companies</h2>
                    <p>
                      Would You Give Someone Your Last Trusted by? Get the Door
                      - It is Trusted by.
                    </p>
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

export default Pricing;
