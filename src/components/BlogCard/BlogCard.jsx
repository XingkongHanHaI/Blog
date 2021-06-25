import React from "react";
import "./BlogCard.scss";
export default class BlogCard extends React.Component {
  render() {
    return (
      this.props.blogLists.map(blogItem => {
        return (
          <section className="blog-card">
            <div className="blog-card-aside">
              <img src={blogItem.blogLogoUrl} alt="" />
            </div>
            <div className="blog-card-content">
              <h3>{blogItem.blogTitle}</h3>
              <div className="tag-date">
                <span className="date">{blogItem.blogCreateTime}</span>
                <span className="tag">{blogItem.blogTags}</span>
              </div>
              <div className="abstract">
                <p>{blogItem.blogAbstract}</p>
              </div>
              <div className="view-action">
                <span className="views">
                  <svg className="icon" aria-hidden="true">
                    <use href="#icon-eye"></use>
                  </svg>
                  <span className="num">{blogItem.blogView.views}</span>
                </span>
              </div>
            </div>
          </section>
        )
      })
    );
  }
}