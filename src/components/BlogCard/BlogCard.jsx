import React from "react";
import "./BlogCard.scss";
import { post } from "../../utils/http";
export default class BlogCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogLists: []
    }
  }
  componentDidMount() {
    post("http://localhost:4000/app/blog/list").then(res => {
      console.log(res);
      this.setState({
        blogLists: res.data
      });
    })
  }
  render() {
    return (
      this.state.blogLists.map(blogItem => {
        return (
          <section className="blog-card" key={blogItem.blogTitle}>
            <div className="blog-card-aside">
              <img src={blogItem.blogLogoUrl} alt="" />
            </div>
            <div className="blog-card-content">
              <h3>{blogItem.blogTitle}</h3>
              <div className="tag-date">
                <span className="date">{blogItem.blogCreateTime}</span>
                <span className="tag" style={{ backgroundColor: blogItem.blogTag.tagColor }}>{blogItem.blogTag.tagName}</span>
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