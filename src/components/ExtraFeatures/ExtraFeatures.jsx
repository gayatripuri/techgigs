import React from "react";
import "./ExtraFeatures.css";
import ExtendMainImg from "../../assets/Highly-Secure-widget-background.png";
import mobilebg from "../../assets/mobile (2).png";
import mobileimg from "../../assets/mobile (1).png";
import SetngImg from "../../assets/Vector (5).png";
import SetngImg1 from "../../assets/sale-outline.png";

const ExtraFeatures = () => {
  return (
    <>
      <section className="extendFeatures">
        <div className="container">
          <div className="extndFeatureHeading">
            <h3>EXTENDED FEATURES</h3>
            <h2>Simple, Yet Powerful Features</h2>
            <p>There is More Than One Way To Eat A Extended features.</p>
          </div>
          <div className="extendSec">
            <div className="row">
              <div className="col-md-4">
                <div className="extendCntens">
                  <h3>Customer Rewards Programs</h3>
                  <p>
                    Keep your customers coming back with loyalty programs
                    tailored to their needs and preferences.
                  </p>
                  <ul>
                    <li>
                      {" "}
                      <img src={SetngImg1} alt="Extend features" />
                    </li>
                    <li>
                      <h5>Customer offerings</h5>
                      <p>
                        Keep customers coming back with personalized loyalty
                        rewards. Earn points, unlock discounts, and enjoy
                        exclusive perks.
                      </p>
                    </li>
                  </ul>
                  <h3>Simple Sales Insights</h3>
                  <p>
                    Get easy-to-understand reports on what's selling well,
                    customer behaviour, and trends to help you make smarter
                    business decisions.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="extendfeaturesImages">
                  <img src={ExtendMainImg} alt="Extend features" />
                </div>
              </div>
            </div>
          </div>
          <div className="extendSec">
            <div className="row">
              <div className="col-md-4">
                <div className="extendfeaturesImages">
                  <img src={mobilebg} alt="Extend features" />
                  <img
                    src={mobileimg}
                    alt="Extend features"
                    className="mobileimg"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="extendCntens">
                  <h3>Wishlist and Favorites</h3>
                  <p>
                    Design personalized product recommendations based on your
                    browsing history, purchase behaviour, and preferences.
                  </p>
                  <ul>
                    <li>
                      {" "}
                      <img src={SetngImg} alt="Extend features" />
                    </li>
                    <li>
                      <h5>Customer offerings</h5>
                      <p>
                        Create a Wishlist, get notified when favourites are on
                        sale or back in stock.
                      </p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      {" "}
                      <img src={SetngImg} alt="Extend features" />
                    </li>
                    <li>
                      <h5>Customer offerings</h5>
                      <p>
                        Create a Wishlist, get notified when favourites are on
                        sale or back in stock.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExtraFeatures;
