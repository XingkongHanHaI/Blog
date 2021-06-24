import React from "react";
import "./Blog.scss";
export default class Home extends React.Component {
  render() {
    return (
      <div className="blog">
        <div className="blog-logo">
          <div className="blog-logo-title">
            <span>Blog</span>
          </div>
        </div>
        <div className="blog-content">
        </div>
      </div>
    );
  }
}
