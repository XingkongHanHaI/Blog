import React from "react";
import "./index.css";
export default class Article extends React.Component {
  render() {
    return (
      <div className="article-wrap">
        {
          this.props.articleLists.map(articleItem => {
            return (
              <div className="article">
                <div className="article-logo">
                  <img src={articleItem.articleLogoUrl} alt="" />
                </div>
                <div className="article-content">
                  <div className="title">{articleItem.title}</div>
                  <div className="info">{articleItem.info}</div>
                  <div className="action">
                    <span className="date">{articleItem.date}</span>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}