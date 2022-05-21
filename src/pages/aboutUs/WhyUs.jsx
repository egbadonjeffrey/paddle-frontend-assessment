import React from "react";
import "./aboutus.css";

const WhyUs = () => {
  return (
    <div className="why__us">
      {/* why us 01 */}
      <div className="whyus__divs">
        <div className="whyus__title">
          <div className="number">
            <span>01</span>
            <span className="line__before__blog"></span>
          </div>
          <h3 className="title__whyus">why us?</h3>
        </div>

        <div className="whyus__one_text">
          <p>
            We pride ourselves in our ability to innovate and create world-class
            tools that provide reliable and efficient touchpoints between
            advertisers and affiliates.
          </p>
        </div>

        {/* DOTTED LINE */}
      </div>

      {/* why us 02 */}
      <div className="whyus__divs">
        <div className="whyus__div">
          <div className="whyus__title">
            <div className="number">
              <span>02</span>
              <span className="line__before__blog"></span>
            </div>
            <h3 className="title__whyus">Growing with you</h3>
          </div>
          <div className="whyus__text">
            <p>
              Leveraging the best technology, we have developed an all-in-one
              affiliate marketing tracking software, a genius tool to help you
              track, automate and optimize your influencer campaigns, all from
              one dashboard.
            </p>

            <p>
              Our team of experts are constantly brainstorming, testing and
              developing new solutions with only one thing in mind - your
              business growth. Your success is our success and by giving you the
              tools you need to scale, we grow as well.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
