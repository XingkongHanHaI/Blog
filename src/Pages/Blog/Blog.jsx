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
          blogTag: {
            tagName: "JavaScript",
            tagColor: "#d1b514"
          },
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
          blogTag: {
            tagName: "CSS",
            tagColor: "#264de4"
          },
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
          blogTag: {
            tagName: "HTML",
            tagColor: "#e44d2c"
          },
          blogView: {
            views: 0,
            loves: 0
          }
        }
      ],
      tags: [
        {
          tagName: "HTML",
          tagColor: "#e44d2c"
        },
        {
          tagName: "CSS",
          tagColor: "#264de4"
        },
        {
          tagName: "JavaScript",
          tagColor: "#d1b514"
        },
        {
          tagName: "Vue",
          tagColor: "#41b883"
        },
        {
          tagName: "React",
          tagColor: "#07aedc"
        },
        {
          tagName: "WebPack",
          tagColor: "#75afcc"
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
          <BlogNav tags={this.state.tags} />
          <div className="blog-content">
            <BlogCard blogLists={this.state.blogLists} />
          </div>
        </div>
      </div>
    );
  }
}
