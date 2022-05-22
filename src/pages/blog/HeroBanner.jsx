import React from "react";
import "./blog.css";

const HeroBanner = () => {
  return (
    <div className="blog_hero__banner">
      <div className="blog__emptydiv">
        <div className="blurred__div"></div>
      </div>
      <div className="blog_hero__text">
        <div className="blog__hero_textSmall">
          <span className="line__before__blog"></span>
          <p>Blog</p>
        </div>

        <h2>Articles and News</h2>
      </div>
    </div>
  );
};

export default HeroBanner;
