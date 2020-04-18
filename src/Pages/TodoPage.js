import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TodoList } from "../components/todo";
import { todosApi } from "../components/api";
import { Modal } from "../components/common";

let TodoListsWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: center;
`;

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

  let handleCloseModal = () => {
    setModal({ isModalOpen: false });
  };

  return (
    <div>
      <TodoListsWrapper>
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
        <TodoList
          todos={todos.done}
          title="Done"
          onOpenModal={handleOpenModal}
        />
      </TodoListsWrapper>

      {modal.isModalOpen ? (
        <Modal title={modal.title} onCloseModal={handleCloseModal} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default TodoPage;
