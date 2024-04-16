import styled from 'styled-components';

export const Input = styled.input`
    width: 90%;
    padding: 5px 10px;
    border-radius: 12px;
`;

export const Div = styled.div`
  width: 100%;  
  display: flex;
  align-items: center;
  flex-direction: column;

  & > h2 {
    color: white;
  }
`;