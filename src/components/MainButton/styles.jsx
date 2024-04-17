import styled from "styled-components"; 

export const Button = styled.button`
  padding: 6px 24px;
  border-radius: 12px;
  border: none;
  font-size: 2rem;
  background-color: ${({ theme }) => theme.colors.pokeBlue};
  color: #ffffff;
  transition: transform ease 200ms;
  font-family: "Pixelify Sans", sans-serif;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  @media screen and (max-width: 600px) {
    font-size: 1.25rem;
    margin-bottom: 10px;
    max-width: 200px;
  }
`;