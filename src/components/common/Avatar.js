import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Colors } from "../misc";

const ImgWrapper = styled.img`
  border-radius: 5px;
  border: 1px solid ${Colors.border};
  width: 25px;
`;

let Avatar = (props) => {
  return <ImgWrapper src={props.avatarImg} alt={props.authorName} />;
};

Avatar.propTypes = {
  avatarImg: PropTypes.string,
  authorName: PropTypes.string,
};

export default Avatar;
