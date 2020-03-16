import React from "react";
import { Avatar } from "./";

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="Username">{props.user.name}</div>
    </div>
  );
}

export default UserInfo;
