import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Colors } from "../../misc";

const InputWrapper = styled.div({
  display: "flex",
  margin: "10px 25px 13px 25px",
});

const LabelWrapper = styled.label({
  flex: 1,
});

const InputDivWrapper = styled.div({
  backgroundColor: `${Colors.background}`,
});

const StyledInput = styled.input({
  flex: 1,
  width: "100%",
  padding: "5px",
  fontSize: "16px",
  border: `2px solid ${Colors.border}`,
  marginLeft: "10%",
  borderRadius: "5px",
  "&: focus": {
    outline: 0,
    border: `2px solid ${Colors.title}`,
  },
});

let Input = (props) => {
  return (
    <InputWrapper>
      <LabelWrapper>{props.label}</LabelWrapper>
      <InputDivWrapper>
        <StyledInput />
      </InputDivWrapper>
    </InputWrapper>
  );
};

export default Input;
