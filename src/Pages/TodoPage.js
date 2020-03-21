import React from "react";
import styled from "styled-components";
import { TodoList } from "../components/todo";
import mock from "../mockup";

let AppWrapper = styled.div({
  paddingTop: "20px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignItems: "stretch",
  alignContent: "center"
});

let TodoPage = () => {
  return (
    <AppWrapper>
      <TodoList todos={mock.todo} title="To Do" />
      <TodoList todos={mock.InProgress} title="In Progress" />
      <TodoList todos={mock.NeedReview} title="Need Review" />
      <TodoList todos={mock.Done} title="Done" />
    </AppWrapper>
  );
};

export default TodoPage;
