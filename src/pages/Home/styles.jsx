import styled from "styled-components";

export const Page = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
    font-family: "Pixelify Sans", sans-serif;
    font-weight: 800;
    font-size: 2.6rem;
    color: #ffffff;
  }

  & > h2,
  p {
    color: #ffffff;
    margin-bottom: 5px;
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

    & > h2 {
      font-size: 1.25rem;
    }
  }
`;