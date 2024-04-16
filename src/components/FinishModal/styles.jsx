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
    height: 275px;
    background-color: ${({theme}) => theme.colors.pokeLightBlue}aa;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    & > h1 {
      margin-bottom: 50px;
      padding: 20px;
      color: white;
      font-size: 1.5rem;
    }
`;
