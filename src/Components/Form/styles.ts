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
      background-color: rgba(33, 33, 33, .7);
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
      background: rgb(2,0,36);
      background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(54,15,117,1) 37%, rgba(104,6,208,0.5662640056022409) 100%);
      
    
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



