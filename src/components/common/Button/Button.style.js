import styled from "styled-components";
import { Colors } from "../../misc";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
`;

export const StyledButton = styled.button`
  width: 100%;
  background: ${Colors.background};
  border: 1px solid ${Colors.border};
  border-radius: 5px;
  margin: 0 10% 0 10%;
  &:active {
    background: ${Colors.border};
  }
`;
