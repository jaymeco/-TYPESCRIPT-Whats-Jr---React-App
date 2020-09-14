import styled from 'styled-components';

export const Container = styled.div`
    background: var(--color-primary-dark);
    width: 100vw;
    height: 8vh;
    position: fixed;
    bottom: 0;
    z-index: 6;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    @media(min-width: 700px){
        display: none; 
    }
`;

export const BarButton = styled.button`
    border: none;
    outline: none;
    flex: 1;
    height: 100%;
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: background .3s;
    position: relative;
    &:hover{
        background: var(--color-secondary);
    }

    &.active-page::after{
        content: '';
        width: 80%;
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
        height: .3rem;
        display: inline-block;
        background: #ffcf00;
        position: absolute;
        bottom: 0;
    }
`;

export const BarText = styled.p`
    color: var(--color-white);
    font-size: 1.2rem;
`;