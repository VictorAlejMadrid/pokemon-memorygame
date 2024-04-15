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

export const ListContainer = styled.ul`
  width: 90%;
  background-color: ${({ theme }) => theme.colors.pokeBlue}60;
  padding: 24px;
  border-radius: inherit;
  box-sizing: border-box;
  margin-bottom: 32px;
  height: 500px;
  overflow-y: hidden;

  & > li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > span {
      font-size: 1.25rem;
    }
  }


`;

export const ListLabels = styled.li`
  & > h3 {
    font-size: 1.5rem;
  }

  & > span {
    font-size: 1.5rem !important;
  }
`;