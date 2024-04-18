import styled from "styled-components";

export const ListContainer = styled.ul`
  width: 90%;
  background-color: ${({ theme }) => theme.colors.pokeBlue}bb;
  padding: 24px;
  border-radius: inherit;
  box-sizing: border-box;
  margin-bottom: 32px;
  height: 500px;
  overflow-y: scroll;

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
    font-weight: 700;
  }

  & > span {
    font-size: 1.5rem !important;
    font-weight: 700;
  }

  @media screen and (max-width: 600px) {
    & > h3 {
      font-size: 1.2rem;
    }

    & > span {
      font-size: 1.2rem !important; 
    }
  }
`;
