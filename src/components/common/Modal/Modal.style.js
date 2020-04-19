import styled from "styled-components";
import { Colors } from "../../../misc";

export const ModalWrapper = styled.div({});

export const TitleWrapper = styled.h3`
  color: ${Colors.title};
`;

export const ButtonWrapper = styled.div`
  align-self: flex-end;
`;

export const modalStyle = {
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: `2px solid ${Colors.border}`,
    borderRadius: "5px",
    left: "25%",
    right: "25%",
    width: "50%",
    height: "50%",
  },
};
