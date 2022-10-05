import React from "react";
import './Blog.css'
import Article from "../../components/article/Article";
import Blog01 from "../../assets/blog01.png";
import Blog02 from "../../assets/blog02.png";
import Blog03 from "../../assets/blog03.png";
import Blog04 from "../../assets/blog04.png";
import Blog05 from "../../assets/blog05.png";

function Blog() {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading gradient__text">
        <h1>A lot is happening, We are blogging about it. </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container-groupA">
          <Article
            imgUrl={Blog01}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt3__blog-container-groupB">
          <Article
            imgUrl={Blog02}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={Blog03}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={Blog04}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={Blog05}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
