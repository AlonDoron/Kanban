import React from "react";
import PropTypes from "prop-types";
import {
  InputWrapper,
  LabelWrapper,
  InputDivWrapper,
  StyledInput,
} from "./Input.style";

let Input = (props) => {
  return (
    <InputWrapper>
      <LabelWrapper>{props.label}</LabelWrapper>
      <InputDivWrapper>
        <StyledInput
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
          onChange={props.onChange}
          required={props.required}
        />
      </InputDivWrapper>
    </InputWrapper>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

export default Input;
