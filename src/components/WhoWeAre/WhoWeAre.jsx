import React from "react";
import "./WhoWeAre.css";
import RetailManagementIcon from "../../assets/RetailManagement.png";
import CustomizeBuisenessIcon from "../../assets/Customize-your-needs.png";
import cellPhoneIcon from "../../assets/cellphone-settings.png";
import CEOImage from "../../assets/CEO.jpg";

const About = () => {
  return (
    <>
      <section id="about-us" >
        <div className="container">
          <div className="whoweareHeading">
            <h3>Who we are?</h3>
            <h2>We Are The Future of Retail Management</h2>
            <p>
              Our app, along with Android and iOS platforms and a robust admin
              panel, is set to transform how retail businesses operate.
            </p>
          </div>
          <div className="featuersSec">
            <div className="row">
              <div className="col-md-4">
                <div className="featureContent">
                  <img src={RetailManagementIcon} alt="Retail Management" />
                  <h4>
                    {" "}
                    Comprehensive <br />
                    Retail Management{" "}
                  </h4>
                  <p>
                    A centralizes inventory with sales tracking, enhance
                    engagement and features to streamlines operations.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="featureContent">
                  <img
                    src={CustomizeBuisenessIcon}
                    alt="Customize Your Business"
                  />
                  <h4>
                    Customize Your <br />
                    Business Needs
                  </h4>
                  <p>
                    Customizable for unique needs, efficient product management,
                    flexible customer engagement, seamless workflow.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="featureContent">
                  <img src={cellPhoneIcon} alt="Mobile Accessibility" />
                  <h4>
                    Mobile <br />
                    Accessibility
                  </h4>
                  <p>
                    Access business anywhere with Android and iOS apps, manage
                    on the go.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
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
                    “Tech is changing stores. Using digital tools helps
                    businesses keep up and serve customers better.”
                  </h4>
                  <h5>Nikita Bhalodiya</h5>
                  <p>Ceo & Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
