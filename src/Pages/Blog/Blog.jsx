import React from "react";
import "./Blog.scss";
import BlogCard from "../../components/BlogCard/BlogCard";
import BlogNav from "../../components/BlogNav/BlogNav";
export default class Home extends React.Component {
  render() {
    return (
      <div className="blog">
        <div className="blog-logo">
          <div className="blog-logo-title">
            <span>Blog</span>
          </div>
        </div>
        <div className="blog-container">
          <BlogNav />
          <div className="blog-content">
            <BlogCard />
          </div>
        </div>
      </div>
    );
  }
}
