import styled from "styled-components";
import { Colors } from "../../misc";

export const UserInfoWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const UsernameWrapper = styled.h4`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${Colors.name};
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;
