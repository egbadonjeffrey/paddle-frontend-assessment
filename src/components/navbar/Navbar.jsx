import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import Button from "../Button/Button";
import "./navbar.css";
import metrik__logo from "../../assets/metrik__logo.png";
import Contact from "../../components/contact/Contact";

const Navbar = ({ navColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClick = (event) => {
    setIsOpen(true);
  };
  return (
    <>
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
          <Button
            value={`contact us`}
            styleClass="contactus__btn"
            onClick={handleClick}
          />
        </div>
      </nav>

      {isOpen && <Contact setIsOpen={setIsOpen} />}
    </>
  );
};

export default Navbar;
