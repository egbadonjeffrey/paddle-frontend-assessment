import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="banner__text">
        <div className="about__us">
          <hr />
          About Us
        </div>
        <div className="hero__text">
          <h2>Built for SaaS and E-commerce</h2>
        </div>
        <div className="banner__description">
          Our tools are easy to set up and use with a user friendly dashboard
          that enables you to set up, launch, automate and manage
          multi-affiliate campaigns in 5 minutes.
        </div>
      </div>
      <div></div>
      <div></div>
      <Footer />
    </>
  );
};

export default AboutUs;
