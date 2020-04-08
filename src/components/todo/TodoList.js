import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TodoItem } from "./";
import { Button } from "../common";

const TodoListWrapper = styled.div({
  minWidth: "15%",
  maxWidth: "25%",
  border: "1px solid #b2bec3",
  padding: "10px",
  marginTop: "20px",
  height: "100%",
});

const TodoTitleWrapper = styled.div({
  textAlign: "center",
});

const TodoItemsWrapper = styled.ul({
  padding: "0",
});

let TodoList = (props) => {
  return (
    <TodoListWrapper>
      <TodoTitleWrapper>{props.title}</TodoTitleWrapper>
      <TodoItemsWrapper>
        {props.todos.length > 0 ? (
          props.todos.map((todo) => <TodoItem key={todo.id} {...todo} />)
        ) : (
          <></>
        )}
      </TodoItemsWrapper>
      <Button text="+" onButtonClick={() => console.log("HEY")} />
    </TodoListWrapper>
  );
};

TodoList.propTypes = {
  title: PropTypes.string,
  todos: PropTypes.array,
};

export default TodoList;
