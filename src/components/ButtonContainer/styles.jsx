import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 12px 0 32px 0;
`;

export const DificultButton = styled.button`
  padding: 4px 16px;
  border-radius: 12px;
  border: none;
  font-size: 1.25rem;
  background-color: ${({ $select, theme }) => ($select ? theme.colors.pokeYellow : "lightgray")};
  transition: transform ease 200ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
