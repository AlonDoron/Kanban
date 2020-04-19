import React from "react";
import PropTypes from "prop-types";
import { UserInfo } from "../common";
import { ItemWrapper, TitleWrapper, ContentWrapper } from "./TodoItem.style";

let TodoItem = (props) => {
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

TodoItem.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  authorName: PropTypes.string,
  avatarUrl: PropTypes.string,
};

export default TodoItem;
