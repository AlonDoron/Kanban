import React from "react";
import styled from "styled-components";
import { Avatar } from "./";

const UserInfoWrapper = styled.div({
  display: "inline-flex",
  flexDirection: "row",
  border: "1px solid #0984e3"
});

const UsernameWrapper = styled.h3({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  color: "#0984e3"
});

function UserInfo(props) {
  return (
    <UserInfoWrapper>
      <UsernameWrapper>{props.user.name}</UsernameWrapper>
      <Avatar user={props.user} />
    </UserInfoWrapper>
  );
}

export default UserInfo;
