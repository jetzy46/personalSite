import React from "react";
import styled from "styled-components";
import { Header, Infos, Projects, Contact } from "../Components/index";

function App() {
  return (
    <MainContainer>
      <Header />
      <Infos />
      <Projects />
      <Contact />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  @media only screen and (max-width: 899px) {
    margin-bottom: 4rem;
  }
`;
