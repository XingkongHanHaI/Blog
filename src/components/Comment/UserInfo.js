import Avatar from "./Avatar";
import "./user.css";
function UserInfo(props) {
  return (
    <div className="userInfo">
      <Avatar avatar={props.author}/>
      <div className="userInfo-name">
        {props.author.name}
        <span className="uid">(uid: {props.author.uid})</span>
      </div>
    </div>
  );
}

export default UserInfo;