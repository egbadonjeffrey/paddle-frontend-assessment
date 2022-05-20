import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img
          src="../../assets/metrics__logo.png"
          className="logoImg"
          alt="logo"
        />
      </div>

      {/* <ul className="nav__links">
        <li>
          {" "}
          <a href=""> about us </a>{" "}
        </li>
        <li>
          {" "}
          <a href=""> blog </a>{" "}
        </li>
        <li>
          <Button value="contact us" styleClass="contactus__btn" />
        </li>
      </ul> */}
      <div className="nav__links">
        <Link to="/about">About Us</Link>
        <Link to="/blog">Blog</Link>
        <Button value={`contact us`} styleClass="contactus__btn" />
      </div>
    </nav>
  );
};

export default Navbar;
