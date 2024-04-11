import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background-color: ${({ theme }) => theme.colors.pokeYellow};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;

    & > h1 {
        margin: 0;
        font-size: 2rem;
        color: #fefaf1;
    }
`;