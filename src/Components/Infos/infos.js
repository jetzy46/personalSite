import React from "react";
import styled from "styled-components";

function Infos() {
  return (
    <MainContainer>
      <LeftContainer>
        <img src="/img/me.jpg" alt="Johan" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, non voluptatum aliquam placeat voluptatibus
          nemo officiis quibusdam dignissimos possimus, at eum eveniet sunt laborum dolores eligendi modi voluptatem.
          Similique, saepe!
        </p>
      </LeftContainer>
      <RightContainer>
        <LogoContainer>
          <img src="/img/javascript.png" alt="logo javascript" />
          <img src="/img/react.png" alt="logo react" />
        </LogoContainer>
        <Intel>
          <h5>Environnement de travail :</h5>
          <p>
            <br />
            Systèmes d'exploitation : Linux Mint <br />
            Workflow : Git, Chrome, FileZilla, Slack, NPM <br />
            IDE : Visual Studio Code <br />
            Autres compétences : maîtrise de l'anglais ( B2 )<br />
            Savoir-être : capacité d'adaptation, travail en équipe, organisation, rigueur
          </p>
        </Intel>
        <ShortExplanation>
          spécialisé dans le front-end, j'adore voir les projets prendre forme, et creer un site, une interface agréable
          pour les futur utilisateurs
        </ShortExplanation>
        <Files>
          <a href="/files/motivJohanLinol.pdf" download>
            <img src="/img/logo-pdf.png" alt="" />
            Lettre de motivation
          </a>
          <a href="/files/CVJohanLinol.pdf" download>
            <img src="/img/logo-pdf.png" alt="" />
            Mon CV
          </a>
        </Files>
      </RightContainer>
    </MainContainer>
  );
}

export default Infos;

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
const LeftContainer = styled.div`
  border: 1px solid orange;
  width: 42%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    height: 300px;
  }
`;
const RightContainer = styled.div`
  border: 1px solid cyan;
  width: 42%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LogoContainer = styled.div`
  width: 60%;
  height: 150px;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  > img {
    height: 100%;
  }
`;
const Intel = styled.div`
  > h5 {
    font-size: 1.4rem;
    margin: 0;
  }
`;
const ShortExplanation = styled.div``;
const Files = styled.div`
  width: 60%;
  height: 20%;
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  > a {
    border: 1px solid lime;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    :hover {
      transform: scale(1.1);
    }
    > img {
      height: 100px;
    }
  }
`;
