import styled from "styled-components";


export const Container = styled.div`
  margin-top: 3rem;
  display: grid;
  place-items: center;
  
  h2{
    text-align: center;
    margin-bottom: 2rem;
  }
  form{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    input, textarea{
      width: 40rem;
      padding: 1rem 2rem;
      border-radius: 5px;
      outline: none;
      background: rgb(2, 0, 36);
      background: linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(45, 50, 115, 1) 37%,
        rgba(45, 50, 115, 0.5662640056022409) 100%
      );
      box-shadow: 5px -5px 10px rgba(255, 255, 255, 0.2);
      color: #fff; 
      font-weight: 300;
      &::placeholder{
        color: #fff; 
      }
    }

    textarea{
      height: 20rem;
      overflow-y: auto;
      resize: none;
    }

    button{
      padding: 1rem 6rem;
      text-transform: uppercase;
      background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(45, 50, 115, 1) 37%,
      rgba(45, 50, 115, 0.5662640056022409) 100%
    );
    box-shadow: 10px -5px 10px rgba(255, 255, 255, 0.2);
      
    
    }
  
  }

  @media (max-width: 740px){
    form{
      width: 100%;
      
      input,textarea{
        width: 100%;
      }
    }
  }
`



