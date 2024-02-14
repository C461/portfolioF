import styled from "styled-components";

export const Container = styled.section`
  padding: 150px 0;
  display: flex;
  box-shadow: 5px 2px 50px rgba(151, 99, 246, .7);
  animation: pulseAnimation 1.7s infinite;
  margin-top: 10%;
  margin-left: 5%;
  margin-right: 5%;
  max-height: 700px;
  border-radius: 20px;
  .hero-text {
    position: relative;
    z-index: 1;
    & > h1 {
      font-size: 7rem;
    }

    h3 {
      margin: 1rem 0;
    }

    p.small-resume {
      margin-bottom: 5rem;
    }
  }
  // New added
  .social-media {
    span {
      font-size: 2rem;
      width: 3rem;
    }
  }

  .absolute {
    width: 500px;
    height: 450px;
    border-radius: 50%;
  }

  .contact {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(45, 50, 115, 1) 37%,
      rgba(45, 50, 115, 0.5662640056022409) 100%
    );
    box-shadow: 10px -5px 10px rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 1440px) {
    display: flex;
    margin-top: 15%;
    .hero-text {
      h1 {
        font-size: 5rem;
      }
      .present {
        font-size: 12px;
      }
    }

    .img-1 {
      width: 400px;
      height: 400px;
      transform: translateY(2px);
    }
    .absolute {
      width: 300px;
    }
  }
  @media (max-width: 1024px) {
    margin-left: 0;
    margin-right: 0;
    padding: 50px 0;
    .img-1 {
      width: 300px;
      height: 300px;
      transform: translate(-30px, 10px);
    }
    .absolute {
      width: 250px;
      transform: translate(-40px, 5px);
    }
    .cont-2 {
      margin-left: 30px;
      width: 100%;
    }
    .text-1 {
      width: 70%;
    }
  }
  @media (max-width: 835px) {
    display: block;
    margin-top: 20%;
    margin-left: 0;
    margin-right: 0;
    .img-1 {
      display: none;
    }
    .absolute {
      display: none;
    }
    .cont-2 {
      margin-left: 30px;
      width: 100%;
    }
    .text-1 {
      width: 70%;
    }
  }
  @media (max-width: 480px) {
    margin-top: 45%;
  }

  @media (max-width: 375px) {
    p {
      font-size: 13px;
      margin-top: 10px;
    }
    .cont-2 {
      display: flex;
      flex-direction: column;
    }
    .social-media {
      display: flex;
      flex-direction: row;
      gap: 1em;
    }

    .scroll {
      display: none;
    }
  }
  @keyframes pulseAnimation {
    0% {
      transform: translateY(0);
      filter: brightness(1);
    }
    50% {
      transform: translateY(0);
      filter: brightness(1.2);
    }
    100% {
      transform: translateY(0);
      filter: brightness(1);
    }
  }
`;
