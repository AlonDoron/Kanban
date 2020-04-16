import React, { useState } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Colors } from "../misc";
import { Button } from "./";

const ModalWrapper = styled.div({});

const modalStyle = {
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    left: "15%",
    right: "15%",
    width: "70%",
  },
};

const TitleWrapper = styled.h3({
  alignSelf: "center",
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
      </ReactModal>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  onCloseModal: PropTypes.func,
};

export default Modal;
