import UserInfo from "./UserInfo";
import "./comment.css"
import React from "react";

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.toggleComment = this.toggleComment.bind(this);
    this.state = {
      isShowComment: true
    }
  }
  toggleComment() {
    this.setState(state => ({
      isShowComment: !state.isShowComment
    }));
  }
  render() {
    const Comment = () => {
      if (!this.state.isShowComment) {
        return null;
      } else {
        return this.props.comments.map(commentItem => {
          console.log(commentItem);
          return (
            <div className="comment" key={commentItem.id}>
              <UserInfo author={commentItem.author} ></UserInfo>
              <div className="comment-section">
                <div className="comment-text">
                  {commentItem.commentText}
                </div>
                <div className="comment-time">
                  发表时间：{commentItem.date.toLocaleTimeString()}
                </div>
              </div>
            </div>
          )
        });
      }
    }
    return (
      <div className="comment-wrap">
        <div className="action-wrap">
          <button onClick={this.toggleComment} className="toggleBtn">{this.state.isShowComment ? "隐藏评论" : "展示评论"}</button>
        </div>
        <div>
          <Comment />
        </div>
      </div>
    )
  }
}
