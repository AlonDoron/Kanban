import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TodoList } from "../components/todo";

let AppWrapper = styled.div({
  paddingTop: "20px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignItems: "stretch",
  alignContent: "center",
});

let TodoPage = () => {
  const [todos, setTodos] = useState({
    todo: [],
    inProgress: [],
    needReview: [],
    done: [],
  });

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((response) => response.json())
      .then((result) => {
        console.log({ ...result });
        setTodos({ ...result });
      });
  }, []);

  return (
    <AppWrapper>
      <TodoList todos={todos.todo} title="To Do" />
      <TodoList todos={todos.inProgress} title="In Progress" />
      <TodoList todos={todos.needReview} title="Need Review" />
      <TodoList todos={todos.done} title="Done" />
    </AppWrapper>
  );
};

export default TodoPage;
