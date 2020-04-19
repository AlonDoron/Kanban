import styled from "styled-components";
import { Colors } from "../misc";

export const ItemWrapper = styled.li`
  border: 1px solid ${Colors.border};
  border-radius: 5px;
  list-style-type: none;
  margin: 10px;
  padding: 10px;
`;

export const TitleWrapper = styled.h3`
  color: ${Colors.title};
  margin-bottom: -15px;
`;

export const ContentWrapper = styled.p`
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  margin: 0px;
`;
