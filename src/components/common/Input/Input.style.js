import styled from "styled-components";
import { Colors } from "../../misc";

export const InputWrapper = styled.div`
  display: flex;
  margin: 10px 25px 13px 25px;
`;

export const LabelWrapper = styled.label`
  flex: 1;
`;

export const InputDivWrapper = styled.div`
  background-color: ${Colors.background};
`;

export const StyledInput = styled.input`
  flex: 1;
  width: 100%;
  padding: 5px;
  font-size: 16px;
  border: 2px solid ${Colors.border};
  margin-left: 10%;
  border-radius: 5px;
  &: focus {
    outline: 0;
    border: 2px solid ${Colors.title};
  }
`;
