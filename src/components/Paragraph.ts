import styled from "styled-components";
import { theme } from "../styles/Theme";

export const ParagraphDescription = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: ${theme.fontColors.paragraphColor};
  max-width: 256px;
  margin-bottom: 20px;
  margin-left: 8px;
`;
