import React from "react";
import styled from "styled-components";

function Contact(props) {
  return (
    <MainContainer>
      <TextContainer>
        <p>
          Téléphone: <a href="tel:0620015764">0620015764</a>
        </p>
        <p>
          Mail: <a href="mail:linol.johan@gmail.com">linol.johan@gmail.com</a>
        </p>
        <p>St Orens de Gameville (31650)</p>
      </TextContainer>
      <ImageContainer>
        <a href="https://github.com/jetzy46">
          <img src="/img/github.png" alt="" />
        </a>
        <a href="https://www.instagram.com/jetzy46/">
          <img src="/img/instagram.png" alt="" />
        </a>
        <a href="https://www.linkedin.com/in/linol-johan/">
          <img src="/img/linkedin.png" alt="" />
        </a>
      </ImageContainer>
    </MainContainer>
  );
}

export default Contact;

const MainContainer = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: 899px) {
    height: auto;
    min-height: 50vh;
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > p {
    > a {
      color: white;
      :hover {
        text-decoration: underline;
      }
    }
  }

  @media only screen and (max-width: 899px) {
    width: 80%;
  }
`;

const ImageContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  > a {
    > img {
      height: 80px;
    }
  }

  @media only screen and (max-width: 899px) {
    width: 80%;
  }
`;
