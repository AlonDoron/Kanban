import React, { useState } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Colors } from "../misc";

const TitleWrapper = styled.h3({
  textAlign: "center",
  color: Colors.title,
});

let Modal = (props) => {
  return (
    <div>
      <ReactModal isOpen={true} contentLabel={props.title}>
        <TitleWrapper>Add New {props.title} Item</TitleWrapper>
      </ReactModal>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
};

export default Modal;
