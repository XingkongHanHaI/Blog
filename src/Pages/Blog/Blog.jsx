import React from "react";
import "./Blog.scss";
import BlogCard from "../../components/BlogCard/BlogCard";
import BlogNav from "../../components/BlogNav/BlogNav";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogLists: [
        {
          blogLogoUrl: "http://iph.href.lu/440x320",
          blogTitle: "一文解决JavaScript数据类型及转换",
          blogAbstract: "在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有v",
          blogCreateTime: "2020-01-02",
          blogTags: "javascript",
          blogView: {
            views: 0,
            loves: 0
          }
        },
        {
          blogLogoUrl: "http://iph.href.lu/440x320",
          blogTitle: "一文解决JavaScript数据类型及转换",
          blogAbstract: "在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有v",
          blogCreateTime: "2020-01-02",
          blogTags: "html",
          blogView: {
            views: 0,
            loves: 0
          }
        },
        {
          blogLogoUrl: "http://iph.href.lu/440x320",
          blogTitle: "一文解决JavaScript数据类型及转换",
          blogAbstract: "在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有在javaScript中类型有v",
          blogCreateTime: "2020-01-02",
          blogTags: "html",
          blogView: {
            views: 0,
            loves: 0
          }
        }
      ]
    }
  }
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
            <BlogCard blogLists={this.state.blogLists} />
          </div>
        </div>
      </div>
    );
  }
}
