import React from "react";
import PropTypes from "prop-types";
import { ImgWrapper } from "./Avatar.style";

let Avatar = (props) => {
  return <ImgWrapper src={props.avatarImg} alt={props.authorName} />;
};

Avatar.propTypes = {
  avatarImg: PropTypes.string,
  authorName: PropTypes.string,
};

export default Avatar;
