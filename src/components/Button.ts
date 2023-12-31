import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
  width: 86px;
  height: 30px;
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;
  background-color: white;
  color: ${theme.buttonCaption.buttonTextColor};
  border-radius: 5px;
  margin-right: 10px;
  margin-left: 8px;
  border: 2px solid #4e71fe;

  &:hover {
    background-color: #4e71fe;
    color: ${theme.buttonCaption.buttonTextHover};
  }
`;
