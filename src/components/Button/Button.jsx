import React, { useState } from "react";
import "./button.css";

const Button = ({ value, styleClass, onClick }) => {
  return (
    <button className={` btn ${styleClass} `} onClick={onClick}>
      {" "}
      {value}{" "}
    </button>
  );
};

export default Button;
