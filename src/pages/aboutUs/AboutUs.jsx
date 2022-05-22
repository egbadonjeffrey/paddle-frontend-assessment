import React from "react";
import Footer from "../../components/footer/Footer";
import KnowMore from "../../components/know_more/KnowMore";
import Navbar from "../../components/navbar/Navbar";
import "./aboutus.css";
import HeroText from "./HeroText";
import WhyUs from "./WhyUs";

const AboutUs = () => {
  return (
    <div className="about__us">
      <HeroText />
      <div></div>
      <div></div>
      <div className="developed">
        <h2>
          Metricks was developed because just like you, we needed a product that
          could give us <span>good value.</span>
        </h2>
      </div>
      <WhyUs />
      <KnowMore />
    </div>
  );
};

export default AboutUs;
