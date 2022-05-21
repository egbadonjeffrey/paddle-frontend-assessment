import React from "react";
import "./blog.css";

const HeroBanner = () => {
  return (
    <div className="hero__banner">
      <div className="hero__text">
        <div className="blog__hero_text">
          <span className="line__before__blog"></span>
          <p>Blog</p>
        </div>

        <h2>Articles and News</h2>
      </div>
    </div>
  );
};

export default HeroBanner;
