import React from "react";
import "./ShareNav.scss";
import { post } from "../../utils/http";
export default class ShareNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shareIconList: []
    }
  }
  componentDidMount() {
    post("http://localhost:4000/app/home/shareList").then(res => {
      this.setState({
        shareIconList: res.data
      });
    })
  }
  render() {
    return (
      <div className="share-nav">
        心有三千光华
        <div className="share-nav-icon">
          {
            this.state.shareIconList.map(shareItem => {
              return (
                <a href={shareItem.url} key={shareItem.iconText}>
                  <svg className="icon" aria-hidden="true">
                    <use href={shareItem.iconText}></use>
                  </svg>
                </a>
              )
            })
          }
        </div>
      </div>
    );
  }
}