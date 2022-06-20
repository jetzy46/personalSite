import React from "react";
import styled from "styled-components";

function Infos() {
  return (
    <MainContainer>
      <LeftContainer>
        <img src="/img/me.jpg" alt="Johan" />
        <p>
          Bonjour, moi c'est Johan ! Je suis un ancien charpentier reconverti développeur web ! <br />
          Après plusieurs années, j'ai décidé de changer de voie dans un secteur qui m'a toujours fasciné: le
          développement.
          <br />
          Après une année de reconversion faite à Digital Campus à Labège, me voilà , prêt à faire ce que j'aime !
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
            IDE : Visual Studio Code <br />
            Workflow : Git, Chrome, FileZilla, Slack, NPM, Agile <br />
            Autres compétences : maîtrise de l'anglais ( B1 )<br />
            Savoir-être : capacité d'adaptation, travail en équipe, organisation, rigueur
          </p>
        </Intel>
        <ShortExplanation>
          Spécialisé dans le front-end, j'adore voir les projets prendre forme, et créer un site, une interface agréable
          pour les futurs utilisateurs.
          <br />
          Partir de zéro, une page blanche et pouvoir construire quelque chose qui attire, qui est intéressant est
          vraiment une satisfaction pour moi, et ça ne part pas, projet après projet !
        </ShortExplanation>
        <Files>
          <a href="/files/motivationJohanLINOL.pdf" download>
            <img src="/img/logo-pdf.png" alt="" />
            Lettre de motivation
          </a>
          <a href="/files/CVJohanLINOL.pdf" download>
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

  @media only screen and (max-width: 899px) {
    height: auto;
    min-height: 150vh;
    flex-direction: column;
  }
`;

const LeftContainer = styled.div`
  width: 42%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    height: 300px;
  }

  > p {
    font-size: 1.3rem;
    margin-top: 3rem;
  }

  @media only screen and (max-width: 899px) {
    width: 80%;
    height: 40%;
    min-height: 80vh;

    > p {
      font-size: 1rem;
      margin-top: 3rem;
    }

    > img {
      height: 200px;
    }

    > p {
      text-align: center;
    }
  }
`;

const RightContainer = styled.div`
  width: 42%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 899px) {
    width: 80%;
    height: 60%;
    min-height: 80vh;
  }
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

  @media only screen and (max-width: 899px) {
    width: 75%;
    > img {
      height: 10vh;
    }
  }
`;

const Intel = styled.div`
  > h5 {
    font-size: 1.4rem;
    margin: 0;
  }

  > p {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 899px) {
    > p {
      font-size: 1rem;
    }
  }
`;

const ShortExplanation = styled.div`
  font-size: 1.3rem;
  margin: 3rem 0;

  @media only screen and (max-width: 899px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const Files = styled.div`
  width: 60%;
  height: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  > a {
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

  @media only screen and (max-width: 899px) {
    width: 90%;

    > img {
      height: 10vh;
    }
  }
`;
