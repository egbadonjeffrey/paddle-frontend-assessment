import React from "react";
import "./button.css";

const Button = ({ value, styleClass }) => {
  return <button className={` btn ${styleClass} `}> {value} </button>;
};

export default Button;
