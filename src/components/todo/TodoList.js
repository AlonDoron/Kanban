import React from "react";
import styled from "styled-components";
import { TodoItem } from "./";

const TodoListWrapper = styled.div({
  maxWidth: "25%",
  border: "1px solid #b2bec3",
  padding: "10px",
  marginTop: "20px",
  height: "100%"
});

const TodoTitleWrapper = styled.div({
  textAlign: "center"
});

const TodoItemsWrapper = styled.ul({
  padding: "0"
});

let TodoList = props => {
  let TodoItems = props.todos.map(todo => <TodoItem key={todo.id} {...todo} />);

  return (
    <TodoListWrapper>
      <TodoTitleWrapper>{props.title}</TodoTitleWrapper>
      <TodoItemsWrapper>{TodoItems}</TodoItemsWrapper>
    </TodoListWrapper>
  );
};

export default TodoList;
