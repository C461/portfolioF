import styled from "styled-components";

export const Container = styled.section`
  padding: 50px 0;
  box-shadow: 1px 1px 20px rgba(151, 99, 246, 1);
  margin-top: 10%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 2%;
  border-radius: 20px;  

  header {
    text-align: center;
    h2 {
      text-align: center;
      font-size: 4rem;
    }
    p {
      color: var(--green);
      font-weight: 500;
    }
  }
  .form-1 {
    border-radius: 20px;
    margin-top: 3%;
    padding: 20px;
  }

  .contacts {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    place-items: center;
    margin-top: 1.5rem;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      max-width: 30rem;
      gap: 2rem;

      border-radius: 1.4rem;
      padding: 1.6rem 2.8rem;
      transition: background-color 0.25s;
      img {
        width: 4rem;
      }
      a {
        color: white;
        font-weight: 500;
      }
      &:hover {
        a {
          color: #fff;
        }
      }
    }
  }
  .contact {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(45, 50, 115, 1) 37%,
      rgba(45, 50, 115, 0.5662640056022409) 100%
    );
    box-shadow: 10px -5px 5px rgba(255, 255, 255, 0.2);
  }
  @media (max-width: 1440px) {
    margin-left: 5%;
    margin-right: 5%;
  }
  @media (max-width: 1024px) {
    margin-left: 0;
    margin-right: 0;
    .form-1 {
      flex-direction: column;
      align-items: center;
    }
    .form2 {
      width: 100%;
    }
    .contacts {
      display: none;
    }
  }
  @media (max-width: 960px) {
    .contacts {
      flex-direction: column;
      div {
        width: 100%;
      }
    }
  }
  @media (max-width: 834px) {
    margin-left: 0;
    margin-right: 0;
    .form-1 {
      flex-direction: column;
      align-items: center;
    }
    .form2 {
      width: 100%;
    }
    .contacts {
      display: none;
    }
  }
`;
/* old one - 2/1/2023 - 
@media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
        flex-direction: column;
      }
    }

*/
