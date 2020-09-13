import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 8vh;
    background: var(--color-primary-dark);
    display: flex;
    align-items: center;
    padding: 0 1.8rem;
    position: sticky;
    top: 0;
`;

export const Avatar = styled.img`
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    margin-right: 1.2rem;
`;

export const Title = styled.h2`
    font-size: 2rem;
    color: var(--color-white);
    font-family: Archivo;
`;