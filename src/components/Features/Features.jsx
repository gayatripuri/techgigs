import React from "react";
import "./Features.css";
import SmilieEmogie from "../../assets/smile.png";
import Canvas from "../../assets/canvas.png";
import StockRotation from "../../assets/stock-rotation.png";
import Mobile from "../../assets/mob.svg";
import BbookingOrder from "../../assets/booking.png";
import SecurePayment from "../../assets/secure-payment.png";
import OrderFullFill from "../../assets/order-fulfillment.png";

const Features = () => {
  return (
    <>
      <section className="featuresSec" id="features">
        <div className="container">
          <div className="featureHeading">
            <h3>AWESOME FEATURES</h3>
            <h2>Check out some of our amazingly crafted features</h2>
            <p>Amazing features - If you love Amazing features.</p>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="featuresListing">
                <ul>
                  <li>
                    <img src={SmilieEmogie} alt="smily emogi" />
                  </li>
                  <li>
                    <h5>
                      User-Friendly <br />
                      Interface
                    </h5>
                    <p>
                      Quick and intuitive interface for hassle-free store
                      creation.
                    </p>
                  </li>
                </ul>

                <ul>
                  <li>
                    <img src={Canvas} alt="smily emogi" />
                  </li>
                  <li>
                    <h5>Brand Customization</h5>
                    <p>
                      Make your store look just like your own shop with easy
                      design changes.
                    </p>
                  </li>
                </ul>

                <ul>
                  <li>
                    <img src={StockRotation} alt="smily emogi" />
                  </li>
                  <li>
                    <h5>
                      Inventory <br />
                      Management
                    </h5>
                    <p>
                      Keep track of what you have easily, and get alerts when
                      you're running low.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="featureMobile">
                <img src={Mobile} alt="mobile" />
              </div>
            </div>

            <div className="col-md-3">
              <div className="featuresListing rightfeaturedSide">
                <ul>
                  <li>
                    <img src={BbookingOrder} alt="smily emogi" />
                  </li>
                  <li>
                    <h5>Mobile-Friendly</h5>
                    <p>
                      Your shop will work great on phones too, so all customers
                      can buy easily.
                    </p>
                  </li>
                </ul>

                <ul>
                  <li>
                    <h5>Secure Payments</h5>
                    <img src={SecurePayment} alt="smily emogi" />
                  </li>
                  <li>
                    <p>
                      Customers can pay you safely using cards or wallets, no
                      worries.
                    </p>
                  </li>
                </ul>

                <ul>
                  <li>
                    <img src={OrderFullFill} alt="smily emogi" />
                  </li>
                  <li>
                    <h5>
                      Order <br />
                      Management
                    </h5>
                    <p>
                      Get orders quickly and send them out fast to keep
                      customers happy.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
