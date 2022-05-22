import React from "react";
import "./countdown.css";

const CountDown = () => {
  return (
    <>
      <div className="countdown_hero__text">
        <h2>something awesome is coming soon</h2>
        <p>
          your all-in-one affliate marketing tracking software track, automate
          and optimize your campaigns.
        </p>
      </div>
      <div className="countdown__boxes">
        <div className="countdown__box">
          <h2>7</h2>
          <p>hours</p>
        </div>
        <div className="countdown__box">
          <h2>7</h2>
          <p>hours</p>
        </div>
        <div className="countdown__box">
          <h2>7</h2>
          <p>hours</p>
        </div>
        <div className="countdown__box">
          <h2>7</h2>
          <p>hours</p>
        </div>
      </div>
    </>
  );
};

export default CountDown;
