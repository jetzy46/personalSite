import React from "react";
import styled from "styled-components";
import { Header, Infos, Projects } from "../Components/index";

function App() {
  return (
    <MainContainer>
      <Header />
      <Infos />
      <Projects />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;
