import React from "react";
import styled from "styled-components";

const ImgWrapper = styled.img({
  borderRadius: "5px",
  border: "1px solid #0984e3",
  width: "3%"
});

function Avatar(props) {
  return <ImgWrapper src={props.user.avatarUrl} alt={props.user.authorName} />;
}

export default Avatar;
