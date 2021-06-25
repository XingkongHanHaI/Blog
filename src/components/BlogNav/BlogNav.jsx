import React from "react";
import "./BlogNav.scss";

export default class BlogNav extends React.Component {
  render() {
    return (
      <aside className="blog-nav">
        <p>Tags</p>
        <div className="tag-list">
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
        </div>
      </aside>
    )
  }
}