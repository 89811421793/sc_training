import React from "react";
import "./App.css";
import backgr from "./assets/images/backgr_desert.jpg";
import HeaderH1 from "./components/Header" 
import { ParagraphDescription } from "./components/Paragraph"
import { CenterImg } from "./components/CentralImg"
import { CardWrapper } from "./components/CardWrapper";
import { Button } from "./components/Button";


function App() {
  return (
    <CardWrapper>
      <CenterImg src={backgr} alt=""/>
      <HeaderH1>Headline</HeaderH1>
      <ParagraphDescription>
        Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
        ornare in venen.
      </ParagraphDescription>
      <Button>See more</Button>
      <Button>Save</Button>
      </CardWrapper>
    
  );
}

export default App;
