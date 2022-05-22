import React from "react";
import styles from "./contact.css";
import { BsArrowRight } from "react-icons/bs";
import Button from "../Button/Button";

const Contact = ({ setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="contactus__modal">
        <div className="contactus__divempty" onClick={handleClick}></div>
        <div className="contactus__divform">
          <div className="contactus__main">
            <div className="contact__mainHeader">
              <h5 className="contactus__message">
                Hey, we are still in the works, but you can send us a message!
              </h5>
            </div>
            <div>
              <form className="contactus__form">
                <div className="firstName">
                  <label htmlFor="first_name">First name</label>
                  <input
                    name="first_name"
                    placeholder="Enter your first name"
                    type="text"
                  />
                </div>

                <div className="last_name">
                  <label htmlFor="last_name">Last name</label>
                  <input
                    name="last_name"
                    placeholder="Enter your last name"
                    type="text"
                  />
                </div>

                <div className="email">
                  <label htmlFor="email">Email address</label>
                  <input
                    name="email"
                    placeholder="Enter your email address"
                    type="text"
                  />
                </div>

                <div className="textarea__message">
                  <label htmlFor="message">
                    Tell Us What You Need Help With:
                  </label>
                  <textarea
                    placeholder="Enter a problem like channel Problem"
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                  <Button value={`send now`} styleClass={`contact_form__btn`} />
                </div>
              </form>
            </div>
            {/* button to close modal */}
            <button className="closeBtn" onClick={handleClick}>
              <BsArrowRight className="contactus__icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
