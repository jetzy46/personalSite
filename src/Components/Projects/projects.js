import React from "react";
import styled from "styled-components";

function Projects() {
  return (
    <MainContainer>
      <TitleContainer>
        <h3>Mes Réalisations</h3>
      </TitleContainer>
      <ProjectsContainer>
        <Project>
          <h5>Portfolio Chargé de Production Audiovisuelle</h5>
          <img src="/img/tporier.jpg" alt="" />
          <p>
            Création d'un portfolio pour un ami afin d'aider sa recherche d'emploi.
            <br />
            Site vitrine développé uniquement en React.
          </p>
          <a href="https://github.com/jetzy46/portfolioTP">Repo Github</a>
          <a href="http://www.thomasporier.fr/" target="_blank" rel="noreferrer">
            Son site
          </a>
        </Project>
        <Project>
          <h5>Bierty</h5>
          <img src="/img/bierty.jpg" alt="" />
          <p>
            Création d'un POC fonctionnel pour une startup.
            <br />
            L'application est basée sur le conseil de bière personnalisé.
            <br />
            Le POC à été réalisé en Meteor, avec la partie FrontEnd en React.
          </p>
          <a href="https://bierty.fr/" target="_blank" rel="noreferrer">
            Leur site
          </a>
        </Project>
        <Project>
          <h5>Sobre Bike</h5>
          <img src="/img/sobre.jpg" alt="" />
          <p>
            Copie d'un site de cadre de vélo pour m'entraîner.
            <br />
            C'est un site vitrine refait entièrement en React, responsive.
          </p>
          <a href="https://github.com/jetzy46/SobreBikesCopy">Repo Github</a>
          <a href="http://www.sobre-bikes.fr/" target="_blank" rel="noreferrer">
            Leur Site
          </a>
        </Project>
        <Project>
          <h5>Ce site</h5>
          <img src="/img/jlinol.jpg" alt="" />
          <p>Création d'un site simple me servant de vitrine, entièrement développé en React</p>
          <a href="https://github.com/jetzy46/personalSite">Repo Github</a>
        </Project>
      </ProjectsContainer>
    </MainContainer>
  );
}

export default Projects;

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;

  @media only screen and (max-width: 899px) {
    height: auto;
    min-height: 200vh;
    margin-top: 2rem;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > h3 {
    font-size: 3rem;
  }

  @media only screen and (max-width: 899px) {
    height: 15vh;
    > h3 {
      font-size: 2.2rem;
    }
  }
`;
const ProjectsContainer = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: 899px) {
    flex-direction: column;
    justify-content: center;
    height: 92%;
  }
`;
const Project = styled.div`
  width: 20%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h5 {
    font-size: 1.6rem;
    text-align: center;
  }

  > img {
    max-width: 100%;
    max-height: 40%;
  }

  > p {
    text-align: center;
  }

  > a {
    margin-top: 1rem;
    color: white;
    :hover {
      text-decoration: underline;
    }
  }

  @media only screen and (max-width: 899px) {
    width: 80%;
    height: auto;
    min-height: 50vh;
  }
`;
