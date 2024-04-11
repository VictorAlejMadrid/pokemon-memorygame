import styled from 'styled-components';

export const Container = styled.main`
  margin-top: 20px;
  width: 80%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly; 
  gap: 30px;

  @media screen and (max-width: 1000px) {
    width: 95%;
  }
`;

export const BackContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

`;