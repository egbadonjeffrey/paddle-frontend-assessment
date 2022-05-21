import React from "react";
import "./aboutus.css";

const HeroText = () => {
  return (
    <div className="aboutus__herotext">
      <div className="opaque__div">
        <div className="orange__box"></div>
      </div>
      <div className="about__text">
        <div className="aboutus__text">
          <div className="about__title">
            <span></span>
            About Us
            <div className="hero__text">
              <h2>Built for SaaS and E-commerce</h2>
            </div>
          </div>
        </div>

        <div className="banner__description">
          Our tools are easy to set up and use with a user friendly dashboard
          that enables you to set up, launch, automate and manage
          multi-affiliate campaigns in 5 minutes.
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HeroText;
