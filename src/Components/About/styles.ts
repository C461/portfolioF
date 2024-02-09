import styled from "styled-components";

export const Container = styled.section`
  
margin-top: 12rem;
  display: flex flex-column;
  font-family: 'Play', sans-serif;
  background-color: rgba(33, 33, 33, 0.5);
  margin-top: 10%;
  margin-left: 5%;
  margin-right: 5%;
  border-radius: 20px;
  padding: 40px;
  .hard-skills{
    margin-top: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.8rem;
   
    padding: 20px 0;
    border-radius: 20px;
    margin-left: 20%;
    margin-right: 20%;
    
  }
  .hability{
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    align-items: center;
    transition: 800ms;
    transform: translateY(10px);
    &:hover{
        transform: translateY(0px);
    }
    img{
      width: 3.4rem;
    
    }
  }

  .about-text p {
    margin-top: 5%;
  }

  

  .about-image{
    text-align: center;
   img{
    margin: auto;
     width: 60%;
     filter: grayscale(0);
     transition: filter 0.5s;
     border-radius: 20px;
     box-shadow: 0px 0px 30px rgba(0, 41, 102, 0.8);
     &:hover{
       filter: grayscale(0);
     }
   }
  }

  @media (max-width: 1440px) {
    .about-image img{
      margin-top: 5%;
    }
  }

  @media (max-width: 1280px) {
    .about-image img{
      margin-top: 20%;
    }
  }
 @media (max-width: 1024px) {
  .about-image img{
    margin-top: 0;
  }
  .cont1 {
    display: flex;
    flex-direction: column;
  }
  .about-image{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .about-text {
    width: 100%;
    margin-top: 5%;
  
  }
  .hard-skills {
    margin-left: 5%;
    margin-right: 5%;
  }
 }
 @media (max-width: 375px){
  .hard-skills {
    margin-left: 0;
    margin-right: 0;
    gap: 1rem;
  }
 }
  `;
