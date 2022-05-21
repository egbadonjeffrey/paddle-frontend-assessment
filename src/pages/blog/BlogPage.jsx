import React from "react";
import "./blog.css";
import Search from "../../components/search/Search";
import Button from "../../components/Button/Button";
import BlogComponent from "../../components/blog_component/BlogComponent";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Article from "../../components/article_components/Article";
import HeroBanner from "./HeroBanner";

const Blog = () => {
  return (
    <>
      <Navbar navColor={`link__color`} />
      <HeroBanner />
      <div className="blog__page">
        <div className="banner__text">
          <div className="blog__intro">
            <h2>Latest From The Blog</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi id
              quibusdam deleniti tempora nisi expedita commodi placeat nihil
              ipsa voluptate.
            </p>
          </div>
          <Search />
        </div>
        <div className="blogs">
          <BlogComponent />
        </div>

        <div className="recent__articles">
          <h3>Recent Articles</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            officiis facilis earum dolor excepturi fugit qui illo cupiditate
            provident sint.
          </p>
        </div>

        <div className="blogs">
          <Article />
        </div>
        <div className="blog-button">
          <Button value="Load more" styleClass={`blogs__btn`} />
        </div>
      </div>
      <div className="hero__banner">
        <div className="hero__banner_2">
          <div className="metricks__text">
            <h4>what to know more about Metrics ?</h4>
            <p>Learn who we are and what drives us.</p>
            <a href="">Contact us</a>
          </div>
          <div className="boxes">
            <div className="box"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
