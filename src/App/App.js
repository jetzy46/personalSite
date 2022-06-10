import React from "react";
import styled from "styled-components";
import Header from "../Components/Header/header";

function App() {
  return (
    <MainContainer>
      <Header />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;
