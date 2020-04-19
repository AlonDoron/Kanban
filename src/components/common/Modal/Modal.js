import React from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";
import { Button } from "../";
import { NewTodo } from "../../forms";
import {
  ModalWrapper,
  TitleWrapper,
  ButtonWrapper,
  modalStyle,
} from "./Modal.style";

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
        <NewTodo
          closeModal={props.onCloseModal}
          submitForm={props.onSubmitModal}
          name={props.name}
        />
      </ReactModal>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  onCloseModal: PropTypes.func,
  onSubmitModal: PropTypes.func,
};

export default Modal;
