import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ImgWrapper = styled.img({
  borderRadius: "5px",
  border: "1px solid #0984e3",
  width: "25px"
});

let Avatar = props => {
  return <ImgWrapper src={props.avatarImg} alt={props.authorName} />;
};

Avatar.propTypes = {
  avatarImg: PropTypes.string,
  authorName: PropTypes.string
};

export default Avatar;
