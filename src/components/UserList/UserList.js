import React from "react";
import "./userList.css";
export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {
          name: "会飞的企鹅",
          uid: "982313"
        },
        {
          name: "坦克",
          uid: "672311"
        },
        {
          name: "飞机",
          uid: "123490"
        }
      ]
    };
  }
  render() {
    return (
      <div className="userList">
        <span>当前在线用户列表：</span>
        {
          this.state.userList.map(userItem => {
            return <div key={userItem.uid}>{userItem.name}(uid:{userItem.uid})</div>
          })
        }
      </div>
    );
  }
}