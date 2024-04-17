import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 500px;
  max-width: 500px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  padding: 32px;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  max-height: 600px;
  margin: 10px;

  & > h1 {
    margin: 10px;
    font-size: 2.5rem;
  }

  @media screen and (max-width: 600px){
    padding: 8px;
    
    & > h1 {
      font-size: 2rem;
    }
  }
`;

