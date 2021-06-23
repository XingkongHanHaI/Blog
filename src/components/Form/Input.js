import React from "react";
export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentValue: ""
    };
    this.submitComment = this.submitComment.bind(this);
    this.commentChange = this.commentChange.bind(this);
  }
  commentChange(event) {
    this.setState({
      commentValue: event.target.value
    });
  }
  submitComment(event) {
    event.preventDefault();
    let commentArticle = {
      id: Math.random(),
      author: {
        name: "无敌哇哈哈",
        authorUrl: "https://q-independent.aixuexi.com/B:1029:K/1615132800/2291a142b9ff4d0a9712f3aae832dfb8.svg",
        uid: "123455"
      },
      commentText: this.state.commentValue,
      date: new Date()
    };
    this.props.createComment(commentArticle);
  }
  render() {
    return (
      <form>
        <label htmlFor="comment">发表评论</label>
        <input type="text" id="comment" value={this.state.commentValue} onChange={this.commentChange}  />
        <button onClick={this.submitComment}>发表评论</button>
      </form>
    )
  }
}