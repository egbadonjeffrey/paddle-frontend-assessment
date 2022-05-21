import React from "react";
import "./blog.css";
import Search from "../../components/search/Search";
import Button from "../../components/Button/Button";

const Blog = () => {
  return (
    <>
      <div className="hero__banner">
        <div className="hero__text">
          <p>Blog</p>
          <h2>Articles and News</h2>
        </div>
      </div>
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
          <div className="blog">
            <img src="" alt="blog image" className="blog__image" />
            <p className="date">September 6</p>
            <h4>12 Popup use cases To increase Conversion</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos nisi
              cum iusto ratione sapiente sequi aliquam, quis laborum vitae id!
            </p>
          </div>
          <div className="blog">
            <img src="" alt="blog image" className="blog__image" />
            <p className="date">September 6</p>
            <h4>12 Popup use cases To increase Conversion</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos nisi
              cum iusto ratione sapiente sequi aliquam, quis laborum vitae id!
            </p>
          </div>
          <div className="blog">
            <img src="" alt="blog image" className="blog__image" />
            <p className="date">September 6</p>
            <h4>12 Popup use cases To increase Conversion</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos nisi
              cum iusto ratione sapiente sequi aliquam, quis laborum vitae id!
            </p>
          </div>
          <div className="blog">
            <img src="" alt="blog image" className="blog__image" />
            <p className="date">September 6</p>
            <h4>12 Popup use cases To increase Conversion</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos nisi
              cum iusto ratione sapiente sequi aliquam, quis laborum vitae id!
            </p>
          </div>
          <div className="blog">
            <img src="" alt="blog image" className="blog__image" />
            <p className="date">September 6</p>
            <h4>12 Popup use cases To increase Conversion</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos nisi
              cum iusto ratione sapiente sequi aliquam, quis laborum vitae id!
            </p>
          </div>
          <div className="blog">
            <img src="" alt="blog image" className="blog__image" />
            <p className="date">September 6</p>
            <h4>12 Popup use cases To increase Conversion</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos nisi
              cum iusto ratione sapiente sequi aliquam, quis laborum vitae id!
            </p>
          </div>
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
          <div className="blog">
            <img src="" alt="blog image" className="blog__image" />
            <p className="date">September 6</p>
            <h4>12 Popup use cases To increase Conversion</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos nisi
              cum iusto ratione sapiente sequi aliquam, quis laborum vitae id!
            </p>
          </div>
          <div className="blog">
            <img src="" alt="blog image" className="blog__image" />
            <p className="date">September 6</p>
            <h4>12 Popup use cases To increase Conversion</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos nisi
              cum iusto ratione sapiente sequi aliquam, quis laborum vitae id!
            </p>
          </div>
          <div className="blog">
            <img src="" alt="blog image" className="blog__image" />
            <p className="date">September 6</p>
            <h4>12 Popup use cases To increase Conversion</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos nisi
              cum iusto ratione sapiente sequi aliquam, quis laborum vitae id!
            </p>
          </div>
        </div>
        <div className="blog-button">
          <Button value="Load more" styleClass={`blogs__btn`} />
        </div>
      </div>
      <div className="hero__banner">
        <div className="hero__banner_2">
          <div className="hero__text metricks__text">
            <h4>what to know more about Metrics ?</h4>
            <p>Learn who we are and what drives us.</p>
            <a href="">Contact us</a>
          </div>
          <div className="boxes">
            <div className="box"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
