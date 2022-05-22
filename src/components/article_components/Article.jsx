import React from "react";
import "./article.css";
import * as ArticleItems from "../../helper/BlogItems";

const Article = () => {
  return (
    <>
      {ArticleItems.articleItems.map((BlogItem, index) => (
        <div key={index} className="blog">
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

export default Article;
