import React from "react";
import "./comingsoon.css";
import CountDown from "../../components/countdown/CountDown";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Waitlist from "../../components/waitlist/Waitlist";

const ComingSoon = () => {
  return (
    <div className="home__page">
      <Navbar />
      <div className="homeStyle">
        <CountDown />
        <Waitlist />
      </div>
      <Footer />
    </div>
  );
};

export default ComingSoon;
