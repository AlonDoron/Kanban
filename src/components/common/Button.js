import React from "react";
import styled from "styled-components";

let ButtonWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  justifyItems: "center",
});

let Button2 = styled.button({
  width: "100%",
  background: "#ffffff",
  border: "1px solid #b2bec3",
  borderRadius: "5px",
  margin: "0 10% 0 10%",
  "&:active": {
    background: "#b2bec3",
  },
});

let Button = (props) => {
  return (
    <ButtonWrapper>
      <Button2 onClick={props.onButtonClick}>{props.text}</Button2>
    </ButtonWrapper>
  );
};

export default Button;
