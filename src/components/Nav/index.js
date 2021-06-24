import React from "react";
import { Link } from "react-router-dom";
import logoUrl from "../../images/logo.jpg";
import "./index.scss";
export default class Nav extends React.Component {
  render() {
    return (
      <ul className="nav">
        <li className="nav-logo">
          <img src={logoUrl} alt="" />
          <span>SmileSword</span>
        </li>
        <div className="nav-list">
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/lifePhoto">照片</Link>
          </li>
          <li>
            <Link to="/docs">博客</Link>
          </li>
          <li>
            <Link to="/comment">评论</Link>
          </li>
          <li>
            <Link to="/about">关于</Link>
          </li>
        </div>
      </ul>
    )
  }
}