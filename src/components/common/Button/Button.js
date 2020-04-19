import React from "react";
import PropTypes from "prop-types";
import { ButtonWrapper, StyledButton } from "./Button.style";

let Button = (props) => {
  return (
    <ButtonWrapper>
      {props.onButtonClick ? (
        <StyledButton onClick={props.onButtonClick}>{props.text}</StyledButton>
      ) : (
        <StyledButton type={props.type}>{props.text}</StyledButton>
      )}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  onButtonClick: PropTypes.func,
  type: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
