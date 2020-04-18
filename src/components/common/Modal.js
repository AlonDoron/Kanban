import React, { useState } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Colors } from "../misc";
import { Button } from "./";
import { AddNewTodoForm } from "../forms";

const ModalWrapper = styled.div({});

const modalStyle = {
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: `2px solid ${Colors.border}`,
    borderRadius: "5px",
    left: "25%",
    right: "25%",
    width: "50%",
    height: "50%",
  },
};

const TitleWrapper = styled.h3({
  color: Colors.title,
});

const ButtonWrapper = styled.div({
  alignSelf: "flex-end",
});

let Modal = (props) => {
  return (
    <ModalWrapper>
      <ReactModal
        isOpen={true}
        contentLabel={props.title}
        ariaHideApp={false}
        style={modalStyle}
      >
        <ButtonWrapper>
          <Button onButtonClick={props.onCloseModal} text="X" />
        </ButtonWrapper>
        <TitleWrapper>Add New {props.title} Item</TitleWrapper>
        <AddNewTodoForm />
      </ReactModal>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  onCloseModal: PropTypes.func,
};

export default Modal;
