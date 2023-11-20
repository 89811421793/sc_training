import React from "react";
import "./App.css";
import styled from "styled-components";
import backgr from "./backgr.jpg";
import HeaderH1 from "./Components/Header.jsx" 
import { ParagraphDescription } from "./Components/Paragraph.jsx"
import { CenterImg } from "./Components/CentralImg.jsx"


const StyledBtnLeft = styled.button`
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

const StyledBtnRight = styled(StyledBtnLeft)`
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

function App() {
  return (
    <div className="App">
      <CenterImg src={backgr} alt=""/>
      <HeaderH1>Headline</HeaderH1>
      <ParagraphDescription>
        Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
        ornare in venen.
      </ParagraphDescription>
      <BtnContainer>
        <StyledBtnLeft>See more</StyledBtnLeft>
        <StyledBtnRight>Save</StyledBtnRight>
      </BtnContainer>
    </div>
  );
}

export default App;
