import React from "react";
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

      <ul className="nav__links">
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
      </ul>
    </nav>
  );
};

export default Navbar;
