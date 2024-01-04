import styled from "styled-components";

type  HeaderH1PropsType = {
  fontSize?: string
}

const HeaderH1 = styled.h1<HeaderH1PropsType>`
  font-weight: 700;
  font-size: ${props => props.fontSize || '16px'};
  line-height: 19.36px;
  margin-bottom: 20px;
  margin-left: 8px;
`;
export default HeaderH1;
