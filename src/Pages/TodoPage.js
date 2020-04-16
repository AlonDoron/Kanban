import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TodoList } from "../components/todo";
import { todosApi } from "../components/api";
import { Modal } from "../components/common";

let AppWrapper = styled.div({
  paddingTop: "20px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignItems: "stretch",
  alignContent: "center",
});

let TodoPage = () => {
  const [modal, setModal] = useState({
    isModalOpen: false,
    title: "",
  });

  const [todos, setTodos] = useState({
    todo: [],
    inProgress: [],
    needReview: [],
    done: [],
  });

  useEffect(() => {
    todosApi.getTodos().then((result) => {
      setTodos({ ...result });
    });
  }, []);

  let handleOpenModal = (title) => {
    setModal({ isModalOpen: true, title: title });
  };

  return (
    <AppWrapper>
      <TodoList
        todos={todos.todo}
        title="To Do"
        onOpenModal={handleOpenModal}
      />
      <TodoList
        todos={todos.inProgress}
        title="In Progress"
        onOpenModal={handleOpenModal}
      />
      <TodoList
        todos={todos.needReview}
        title="Need Review"
        onOpenModal={handleOpenModal}
      />
      <TodoList todos={todos.done} title="Done" onOpenModal={handleOpenModal} />
      {modal.isModalOpen ? <Modal title={modal.title} /> : <></>}
    </AppWrapper>
  );
};

export default TodoPage;
