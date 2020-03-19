import React from "react";
import styled from "styled-components";
import { Avatar } from "./";

const UserInfoWrapper = styled.div({
  display: "inline-flex",
  flexDirection: "row"
});

const UsernameWrapper = styled.h4({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  color: "#0984e3"
});

const AvatarWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginLeft: "10px"
});

let UserInfo = props => {
  return (
    <UserInfoWrapper>
      <UsernameWrapper>{props.user.name}</UsernameWrapper>
      <AvatarWrapper>
        <Avatar user={props.user} />
      </AvatarWrapper>
    </UserInfoWrapper>
  );
};

export default UserInfo;
