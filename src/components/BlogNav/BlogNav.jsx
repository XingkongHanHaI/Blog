import React from "react";
import "./BlogNav.scss";

export default class BlogNav extends React.Component {
  render() {
    return (
      <aside className="blog-nav">
        <p>Article Tags</p>
        <div className="tag-list">
          {
            this.props.tags.map(tagsItem => {
              return (
                <span className="tag" style={{ backgroundColor: tagsItem.tagColor }}>{tagsItem.tagName}</span>
              )
            })
          }
        </div>
      </aside>
    )
  }
}