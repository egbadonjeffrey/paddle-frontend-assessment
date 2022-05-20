import React from "react";
import "./waitlist.css";
import Button from "../Button/Button";

const Waitlist = () => {
  return (
    <>
      <form className="waitlist_form">
        <div className="name__fields">
          <input placeholder="First Name" type="text" name="first__name" />
          <input placeholder="Last Name" type="text" name="last__name" />
        </div>

        <div className="email__subscribe">
          <input
            placeholder="Enter your email address.."
            type="text"
            name="email"
            className="email__field"
          />
          <Button styleClass="waitlist__btn" value="join our waiting list" />
        </div>
      </form>
    </>
  );
};

export default Waitlist;
