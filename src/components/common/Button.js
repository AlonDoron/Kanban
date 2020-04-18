import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Colors } from "../misc";

let ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
`;

let StyledButton = styled.button`
  width: 100%;
  background: ${Colors.background};
  border: 1px solid ${Colors.border};
  border-radius: 5px;
  margin: 0 10% 0 10%;
  &:active {
    background: ${Colors.border};
  }
`;

let Button = (props) => {
  return (
    <ButtonWrapper>
      <StyledButton onClick={() => props.onButtonClick()}>
        {props.text}
      </StyledButton>
    </ButtonWrapper>
  );
};

Button.propTypes = {
  onButtonClick: PropTypes.func,
  text: PropTypes.string,
};

export default Button;
