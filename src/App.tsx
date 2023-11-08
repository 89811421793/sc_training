import React from "react";
import "./App.css";
import styled from "styled-components";
import backgr from "./backgr.jpg";

const Paragraph = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #abb3ba;
  text-align: center;
`;

const HeaderH1 = styled.h1`
text-align: center;
`

const StyledBtnL = styled.button`
  border: none;
  background-color: hsl(147, 50%, 47%);
  color: snow;
  padding: 10px 20px;
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;
  margin-right: 10px;
  border-radius: 5px;
  margin-left: 20px;
  font-family: Inter;

  &: hover {
    background-color: #4e71fe;
  }
`;

const StyledBtnR = styled(StyledBtnL)`
  background-color: yellow;
  color: #4e71fe;
  padding: 10px 38px 10px 38px;

  &: hover {
    background-color: transparent;
    border: 2px solid #4e71fe;
  }
`;
const BtnContainer = styled.div`
  display: block;
 text-align: center;

  button {
    cursor: pointer;
  }
`;

const CenterImg = styled.img`
display: block;
margin: auto;
width: 50vw;
`

function App() {
  return (
    <div className="App">
      <CenterImg src={backgr} alt=""/>
      <HeaderH1>Headline</HeaderH1>
      <Paragraph>
        Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
        ornare in venen.
      </Paragraph>
      <BtnContainer>
        <StyledBtnL>See more</StyledBtnL>
        <StyledBtnR>Save</StyledBtnR>
      </BtnContainer>
    </div>
  );
}

export default App;
