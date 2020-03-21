import React from "react";
import styled from "styled-components";
import { UserInfo } from "../common";

const ItemWrapper = styled.li({
  border: "1px solid #b2bec3",
  borderRadius: "5px",
  listStyleType: "none",
  margin: "10px",
  padding: "10px"
});

const TitleWrapper = styled.h3({
  color: "#00cec9",
  marginBottom: "-15px"
});

const ContentWrapper = styled.p({
  overflowWrap: "break-word",
  wordWrap: "break-word",
  hyphens: "auto",
  margin: "0px"
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
