import React from "react";
import { TodoItem } from "./";

let TodoList = props => {
  let TodoItems = props.todos.map(todo => <TodoItem key={todo.id} {...todo} />);

  return <ul>{TodoItems}</ul>;
};

export default TodoList;
