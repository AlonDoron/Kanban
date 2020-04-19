import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TodoItem } from "./";
import { Button } from "../common";
import { Colors, ScreenSizes } from "../misc";

const TodoListWrapper = styled.div`
  flex: 1;
  min-width: 15%;
  max-width: 20%;
  border: 1px solid ${Colors.border};
  padding: 10px;
  margin-top: 20px;
  height: 100%;

  @media (max-width: ${ScreenSizes.desktop}) {
    flex: 1 0 33%;
    max-width: 30%;
  }

  @media (max-width: ${ScreenSizes.tablet}) {
    flex: 1 0 40%;
    max-width: 45%;
  }

  @media (max-width: ${ScreenSizes.mobile}) {
    flex: 1 0 100%;
    max-width: 90%;
  }
`;

const TodoTitleWrapper = styled.div`
  flex: 1;
  text-align: center;
`;

const TodoItemsWrapper = styled.ul`
  padding: 0;
`;

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
