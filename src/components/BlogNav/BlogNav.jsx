import React from "react";
import { post } from "../../utils/http";
import "./BlogNav.scss";

export default class BlogNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagsList: []
    }
  }
  componentDidMount() {
    post("http://localhost:4000/app/blog/tags").then(res => {
      this.setState({
        tagsList: res.data
      });
    })
  }
  render() {
    return (
      <aside className="blog-nav">
        <p>Article Tags</p>
        <div className="tag-list">
          {
            this.state.tagsList.map(tagsItem => {
              return (
                <span className="tag" key={tagsItem.tagColor} style={{ backgroundColor: tagsItem.tagColor }}>{tagsItem.tagName}</span>
              )
            })
          }
        </div>
      </aside>
    )
  }
}