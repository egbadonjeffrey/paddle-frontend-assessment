import React from "react";
import "./blog.css";
import blog__picture from "../../assets/blog-pic.png";
import * as BlogItems from "../../helper/BlogItems";

const Blog = () => {
  return (
    <>
      {BlogItems.blogItems.map((BlogItem, index) => (
        <div key={index} className="blog">
          <img src={blog__picture} alt="blog image" className="blog__image" />
          <p className="date">September 6</p>
          <h4>12 Popup use cases To increase Conversion</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos nisi
            cum iusto ratione sapiente sequi aliquam, quis laborum vitae id!
          </p>
        </div>
      ))}
    </>
  );
};

export default Blog;
