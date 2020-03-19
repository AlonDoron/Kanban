import React from "react";
import styled from "styled-components";
import { UserInfo } from "../common";

const ItemWrapper = styled.li({
  border: "1px solid #0984e3",
  display: "inline-block",
  maxWidth: "25%"
});

const TitleWrapper = styled.h3({
  color: "#00cec9",
  display: "flex",
  flexDirection: "row",
  marginBottom: "0px"
});

let TodoItem = props => {
  return (
    <ItemWrapper>
      <header>
        <TitleWrapper>{props.title}</TitleWrapper>
        <UserInfo {...props} />
      </header>
      <section>{props.content}</section>
    </ItemWrapper>
  );
};

export default TodoItem;
