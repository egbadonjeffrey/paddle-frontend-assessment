import React from "react";
import CountDown from "../../components/countdown/CountDown";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Waitlist from "../../components/waitlist/Waitlist";

const ComingSoon = () => {
  const homeStyle = {
    width: "70%",
    margin: "0 auto",
    textAlign: "center",
  };

  return (
    <>
      <div style={homeStyle}>
        <CountDown />
        <Waitlist />
      </div>

      <Footer />
    </>
  );
};

export default ComingSoon;
