import styled from "styled-components";

export const Container = styled.section`
  background-color: rgba(33, 33, 33, 0.5);
  margin-top: 10%;
  margin-left: 5%;
  margin-right: 5%;
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
      rgba(54, 15, 117, 1) 37%,
      rgba(104, 6, 208, 0.5662640056022409) 100%
    );
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
