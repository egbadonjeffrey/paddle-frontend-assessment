import React from "react";
import { Link, Route } from "react-router-dom";
import Button from "../Button/Button";
import "./navbar.css";
import metrik__logo from "../../assets/metrik__logo.png";

const Navbar = ({ navColor }) => {
  return (
    <nav className={`navbar ${navColor}`}>
      <div className="navbar__logo">
        <Link to="/">
          {Route.asPath === "/about" ? (
            <img src="" className="logoImg" alt="logo" />
          ) : (
            <img src={metrik__logo} className="logoImg" alt="logo" />
          )}
        </Link>
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
