import styled from "styled-components";
import background from "../../assets/images/pontuations-background.png";

export const Section = styled.section`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
`;

export const Container = styled.div`
  width: 500px;
  max-width: 500px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 64px;
  padding: 32px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  max-height: 600px;
  margin: 10px;

  & > h1 {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 600px){
    padding: 8px;
    
    & > h1 {
      font-size: 2rem;
    }
  }
`;

