import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { UserInfo } from "../common";
import { Colors } from "../misc";

const ItemWrapper = styled.li`
  border: 1px solid ${Colors.border};
  border-radius: 5px;
  list-style-type: none;
  margin: 10px;
  padding: 10px;
`;

const TitleWrapper = styled.h3`
  color: ${Colors.title};
  margin-bottom: -15px;
`;

const ContentWrapper = styled.p`
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  margin: 0px;
`;

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
