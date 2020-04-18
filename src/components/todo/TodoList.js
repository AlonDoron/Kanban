import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TodoItem } from "./";
import { Button } from "../common";
import { Colors } from "../misc";

const TodoListWrapper = styled.div({
  flex: 1,
  minWidth: "15%",
  maxWidth: "20%",
  border: `1px solid ${Colors.border}`,
  padding: "10px",
  marginTop: "20px",
  height: "100%",
});

const TodoTitleWrapper = styled.div({
  flex: 1,
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
      <Button text="+" onButtonClick={() => props.onOpenModal(props.title)} />
    </TodoListWrapper>
  );
};

TodoList.propTypes = {
  title: PropTypes.string,
  todos: PropTypes.array,
  onOpenModal: PropTypes.func,
};

export default TodoList;
