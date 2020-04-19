import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "../";
import {
  UserInfoWrapper,
  UsernameWrapper,
  AvatarWrapper,
} from "./UserInfo.style";

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
