import styled from "styled-components";
import background from "../../assets/images/pokemon-background.jpg";

export const Page = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.pokeBlue};
  background-image: url(${background});
  background-size: cover;
`;

export const Container = styled.main`
  max-width: 500px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 64px;
  padding: 32px;
  background-color: rgba(0, 0, 0, 0.5);

  & > h1 {
    font-size: 2.5rem;
    color: #ffffff;
  }

  & > h2,
  p {
    color: #ffffff;
  }

  & > button:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  @media screen and (max-width: 600px) {
    margin: 0 10px;
    padding: 16px;

    & > h1 {
        font-size: 1.8rem;
    }

    &> h2 {
        font-size: 1.25rem;
    }
  }
`;

export const Button = styled.button`
  padding: 6px 24px;
  border-radius: 12px;
  border: none;
  font-size: 2rem;
  background-color: ${({ theme }) => theme.colors.pokeBlue};
  color: #ffffff;
  transition: transform ease 200ms;

  @media screen and (max-width: 600px) {
    font-size: 1.25rem;
    margin-bottom: 10px;
    max-width: 200px;
  }
`;
