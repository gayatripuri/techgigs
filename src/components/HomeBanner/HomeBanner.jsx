import React from "react";
import { Link } from "react-router-dom";
import "./HomeBanner.css";
import HomeBannerImag from "../../assets/HomeBannerBackground.png";
import BannerFemale from "../../assets/Female-Charater.png";
import Midagemodel from "../../assets/ModelMan.png";
import HappyYouth from "../../assets/Happy-youth-with-big-mobile.png";
import Younghappyman from "../../assets/Young-happy-man.png";
import RandomShape from "../../assets/Random-Shapes.svg";
import ScrollMouse from "../../assets/mouse-move-down.svg";
import RightArrow from "../../assets/akar-icons_arrow-right.png";

const HomeBanner = ({ scrollToSection }) => {
  return (
    <>
      <section
        className="homeMainBannerSection"
        style={{ backgroundImage: `url(${HomeBannerImag})` }}
        id="home"
      >
        <div className="row ">
          <div className="col-md-4">
            <div className="bannerCont">
              <div>
                <h2>
                  Shop Smart, Shop Easy: With our Ultimate Mobile Marketplace!
                </h2>
                <Link className="demoBtn" to="/about-us">
                  get a demo <img src={RightArrow} alt="Right Arrow" />
                </Link>

                <div
                  className="scrollBox"
                  onClick={() => scrollToSection("whoweareSec")}
                >
                  <p>
                    Scroll Down <img src={ScrollMouse} alt="scroll Mouse" />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="bnnerImgaes">
              <div
                className="bnrModels"
                style={{
                  backgroundImage: `url(${RandomShape})`,
                  textAlign: "center",
                }}
              >
                <img
                  src={BannerFemale}
                  className="img-fluid modelGirl"
                  alt="Model"
                />
                <img
                  src={Midagemodel}
                  className="img-fluid midModel"
                  alt="Model"
                />
              </div>
              <div className="bnrModels">
                <img
                  src={HappyYouth}
                  className="img-fluid happyYuth"
                  alt="Model"
                />
                <img
                  src={Younghappyman}
                  className="img-fluid yungMan"
                  alt="Model"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
