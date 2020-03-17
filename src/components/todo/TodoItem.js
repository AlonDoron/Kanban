import React from "react";
import { UserInfo } from "../common";

function TodoItem(props) {
  return (
    <div className="Item">
      <header className="ItemInfo">
        <h2 className="Title">{props.title}</h2>
        <UserInfo user={props.user} />
      </header>
      <section className="Content">{props.content}</section>
    </div>
  );
}

export default TodoItem;
