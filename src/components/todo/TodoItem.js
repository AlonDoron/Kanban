import React from "react";
import styled from "styled-components";
import { UserInfo } from "../common";

const ItemWrapper = styled.li({
  border: "1px solid #0984e3",
  maxWidth: "50%"
});

const TitleWrapper = styled.h3({
  color: "#00cec9",
  marginBottom: "0px"
});

const ContentWrapper = styled.p({
  overflowWrap: "break-word",
  wordWrap: "break-word",
  hyphens: "auto"
});

let TodoItem = props => {
  return (
    <ItemWrapper>
      <header>
        <TitleWrapper>{props.title}</TitleWrapper>
        <UserInfo {...props} />
      </header>
      <ContentWrapper>{props.content}</ContentWrapper>
    </ItemWrapper>
  );
};

export default TodoItem;
