import styled from "styled-components";

export const CardWrapper = styled.div<{color?: string}>`
  padding: 10px 10px 25px 10px;
  border-radius: 10px;
  background-color: ${props => props.color || '#FFFFFF'};
  box-shadow: 0px 4px 20px 5px #0000001a;
`;
