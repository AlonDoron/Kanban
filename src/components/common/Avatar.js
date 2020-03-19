import React from "react";
import styled from "styled-components";

const ImgWrapper = styled.img({
  borderRadius: "5px",
  border: "1px solid #0984e3",
  width: "40px"
});

let Avatar = props => {
  return <ImgWrapper src={props.avatarImg} alt={props.authorName} />;
};

export default Avatar;
