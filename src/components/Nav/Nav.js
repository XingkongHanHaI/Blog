import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
export default class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="website-logo">
          SmileSword
        </div>
        <div className="list-wrap">
          <div className="list-wrap-item">
            <Link to="/">Home</Link>
          </div>
          <div className="list-wrap-item">
            <Link to="/blog">Blog</Link>
          </div>
          <div className="list-wrap-item">
            <Link to="/about">About</Link>
          </div>
        </div>
      </div>
    );
  }
}