import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Avatar } from "./";
import { Colors } from "../misc";

const UserInfoWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const UsernameWrapper = styled.h4`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${Colors.name};
`;

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

let UserInfo = (props) => {
  return (
    <UserInfoWrapper>
      <UsernameWrapper>{props.authorName}</UsernameWrapper>
      <AvatarWrapper>
        <Avatar avatarImg={props.avatarUrl} authorName={props.authorName} />
      </AvatarWrapper>
    </UserInfoWrapper>
  );
};

UserInfo.propTypes = {
  authorName: PropTypes.string,
  avatarUrl: PropTypes.string,
};

export default UserInfo;
