import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Colors } from "../../misc";

const InputWrapper = styled.div`
  display: flex;
  margin: 10px 25px 13px 25px;
`;

const LabelWrapper = styled.label`
  flex: 1;
`;

const InputDivWrapper = styled.div`
  background-color: ${Colors.background};
`;

const StyledInput = styled.input`
  flex: 1;
  width: 100%;
  padding: 5px;
  font-size: 16px;
  border: 2px solid ${Colors.border};
  margin-left: 10%;
  border-radius: 5px;
  &: focus {
    outline: 0;
    border: 2px solid ${Colors.title};
  }
`;

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
