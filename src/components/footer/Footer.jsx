import React from "react";
import "./footer.css";

import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="social__icons">
        <AiFillYoutube className="social__icon" />
        <AiFillFacebook className="social__icon" />
        <AiFillLinkedin className="social__icon" />
        <AiFillInstagram className="social__icon" />
        <AiFillTwitterSquare className="social__icon" />
      </div>
      <div className="company__documents">
        <a href="#">Terms of services</a>
        <a href="#">Privacy policy</a>
      </div>
      <p className="copyright">
        Copyright 2021 @ peddie Technologies. All Rights Reserved{" "}
      </p>
    </footer>
  );
};

export default Footer;
