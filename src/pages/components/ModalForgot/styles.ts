import styled, { keyframes } from 'styled-components';


const opacityModal = keyframes`
    0%{ opacity: .2; }
    25%{ opacity: .4; }
    50% { opacity: .6; }
    75% { opacity: .8; }
    100% { opacity: 1; }
`;

const slideDownModal = keyframes`
    0%{ opacity: .2; transform: translateY(-100px);}
    25%{ opacity: .4; }
    50% { opacity: .6; }
    75% { opacity: .8; }
    100% { opacity: 1; }
`;

export const Container = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    animation-name: ${opacityModal};
    animation-duration: .4s;
    animation-timing-function: ease-in-out;
`;

export const ModalContainer = styled.div`
    width: 90%;
    height: 70%;
    background: var(--background-light);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation-name: ${slideDownModal};
    animation-duration: .4s;
    animation-timing-function: ease-in-out;
    @keyframes slideUpModal{
        0%{ opacity: 1;}
        25%{ opacity: .6; }
        50% { opacity: .4; }
        75% { opacity: .2; }
        100% { opacity: 0; transform: translateY(-100px);}
    }

    @media(min-width: 1180px){
        width: 60%;
    }
`;

export const ModalHeader = styled.div`
    width: 100%;
    height: 5vh;
    padding: 1.4rem 1.2rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

export const CloseRoundedButton = styled.button`
    width: 2.8rem;
    height: 2.8rem;
    background: var(--color-primary);
    border: none;
    outline: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background .3s;
    &:hover{
        background: var(--color-primary-dark);
        cursor: pointer;
    }
`;

export const ModalBody = styled.main`
    height: 100%;
    width: 100%;
    padding: 2.4rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 1180px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        grid-template-areas:
            'banner form'
        ;
        padding: 2.4rem 10rem;
    }

    >div{
        @media(min-width: 1180px){
            grid-area: 'banner';
            align-self: flex-start;
            margin-top: 5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`;

export const Title = styled.h3`
    font-size: 1.8rem;
    color: var(--color-primary-dark);

    @media(min-width: 1180px){
        width: 18ch;
        font-size: 3.2rem;
    }
`;
export const SubTitle = styled.p`
    font-size: 1.5rem;
    color: var(--text-base-dark);
    @media(min-width: 1180px){
        width: 28ch;
        font-size: 2rem;
        margin-top: 1.2rem;
    }
`;

export const Form = styled.form`
    width: 100%;
    height: 100%;
    padding: 1.4rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    @media(min-width: 1180px){
        grid-area: 'form';
    }
`;

export const Button = styled.button`
    width: 50%;
    height: 5vh;
    border: none;
    outline: none;
    border-radius: 50px;
    background: var(--color-primary);
    color: var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s;

    &:hover{
        background: var(--color-primary-dark);
        cursor: pointer;
    }
`;

export const RedirectButton = styled.button`
    font-size: 1.4rem;
    background-color: transparent;
    border: none;
    border-radius: 50px;
    outline: none;
    padding: 1rem;
    color: var(--color-primary);
    transition: .3s;
    &:hover{
        color: var(--color-primary-dark);
        background: rgba(60, 123, 230, .4);
        cursor: pointer;
    }
`;