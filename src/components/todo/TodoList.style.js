import styled from "styled-components";
import { Colors, ScreenSizes } from "../misc";

export const TodoListWrapper = styled.div`
  flex: 1;
  min-width: 15%;
  max-width: 20%;
  border: 1px solid ${Colors.border};
  padding: 10px;
  margin-top: 20px;
  height: 100%;

  @media (max-width: ${ScreenSizes.desktop}) {
    flex: 1 0 33%;
    max-width: 30%;
  }

  @media (max-width: ${ScreenSizes.tablet}) {
    flex: 1 0 40%;
    max-width: 45%;
  }

  @media (max-width: ${ScreenSizes.mobile}) {
    flex: 1 0 100%;
    max-width: 90%;
  }
`;

export const TodoTitleWrapper = styled.div`
  flex: 1;
  text-align: center;
`;

export const TodoItemsWrapper = styled.ul`
  padding: 0;
`;
