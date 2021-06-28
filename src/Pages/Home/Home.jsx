import React from "react";
import ShareNav from "../../components/ShareNav/ShareNav";
import "./Home.scss";
import { post } from "../../utils/http";
export default class Home extends React.Component {
  componentDidMount() {
    post("http://localhost:4000/app/home").then(res => {
      console.log(res);
    })
  }
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
