import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TodoList } from "../components/todo";
import { todosApi } from "../components/api";
import { Modal } from "../components/common";
import { Consts } from "../components/misc";
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
    name: "",
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

  let handleOpenModal = ({ name, title }) => {
    setModal({ isModalOpen: true, title: title, name: name });
  };

  let handleCloseModal = () => {
    setModal({ isModalOpen: false, title: "", name: "" });
  };

  let handleSubmitModal = ({ name, values }) => {
    let tempTodos = todos;
    let setNewTodoKey = todos[name].length + 1;
    let newTodo = { ...values, key: setNewTodoKey };

    if (newTodo.avatarUrl === undefined || newTodo.avatarUrl === "")
      newTodo.avatarUrl = Consts.DEFAULT_AVATAR_URL;

    tempTodos[name].push(newTodo);

    setTodos((todos) => ({ ...todos, tempTodos }));
    handleCloseModal();
  };

  return (
    <div>
      <TodoListsWrapper>
        <TodoList
          todos={todos.todo}
          title="To Do"
          name="todo"
          onOpenModal={handleOpenModal}
        />
        <TodoList
          todos={todos.inProgress}
          title="In Progress"
          name="inProgress"
          onOpenModal={handleOpenModal}
        />
        <TodoList
          todos={todos.needReview}
          title="Need Review"
          name="needReview"
          onOpenModal={handleOpenModal}
        />
        <TodoList
          todos={todos.done}
          title="Done"
          name="done"
          onOpenModal={handleOpenModal}
        />
      </TodoListsWrapper>

      {modal.isModalOpen ? (
        <Modal
          title={modal.title}
          name={modal.name}
          onCloseModal={handleCloseModal}
          onSubmitModal={handleSubmitModal}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default TodoPage;
