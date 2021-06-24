import React from "react";
import "./ShareNav.scss";
export default class ShareNav extends React.Component {
  render() {
    return (
      <div className="share-nav">
        心有三千光华
        <div className="share-nav-icon">
          <a href="www.baidu.com">
            <svg class="icon" aria-hidden="true">
              <use href="#icon-QQ"></use>
            </svg>
          </a>
          <a href="www.baidu.com">
            <svg class="icon" aria-hidden="true">
              <use href="#icon-weixin"></use>
            </svg>
          </a>
          <a href="www.baidu.com">
            <svg class="icon" aria-hidden="true">
              <use href="#icon-twitter"></use>
            </svg>
          </a>
          <a href="www.baidu.com">
            <svg class="icon" aria-hidden="true">
              <use href="#icon-github"></use>
            </svg>
          </a>
        </div>
      </div>
    );
  }
}