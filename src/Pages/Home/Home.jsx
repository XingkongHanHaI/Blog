import React from "react";
import ShareNav from "../../components/ShareNav/ShareNav";
import "./Home.scss";
export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="welcome-content">
          <span>Hi, FEer!</span>
          <ShareNav />
        </div>
      </div>
    );
  }
}
