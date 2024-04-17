import styled from "styled-components";

export const Modal = styled.section`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
`;

export const Container = styled.div`
  max-width: 400px;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.pokeLightBlue}aa;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;

  & > h1 {
    margin: 5px;
    padding: 20px;
    color: white;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 600px) {
    height: 350px;
  }
`;

export const Img = styled.img`
  margin: 15px;
  width: 75px;
`;
