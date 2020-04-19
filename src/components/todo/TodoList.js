import React from "react";
import PropTypes from "prop-types";
import { TodoItem } from "./";
import { Button } from "../common";
import {
  TodoListWrapper,
  TodoTitleWrapper,
  TodoItemsWrapper,
} from "./TodoList.style";

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
      <Button
        text="+"
        onButtonClick={() => {
          props.onOpenModal({ name: props.name, title: props.title });
        }}
      />
    </TodoListWrapper>
  );
};

TodoList.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  todos: PropTypes.array,
  onOpenModal: PropTypes.func,
};

export default TodoList;
