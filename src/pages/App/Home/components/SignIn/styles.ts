import styled from 'styled-components';



export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.2rem;

    opacity: 1;
    transition: opacity .3s;
    @media (min-width: 700px){
        grid-area: left;
        flex-direction: row;
        justify-content: center;
        align-items: center;        
    }
`;

export const FormContent = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    margin-top: 1.4rem;
    width: 80vw;
    height: 50vh;

    @media(min-width: 700px){
        width: 30vw;
        height: 80%;
    }
`;

export const Title = styled.h1`
    color: var(--color-primary-dark);
    font-size: 2.4rem;
    font-family: Archivo;
    align-self: flex-start;

    @media(min-width: 700px){
        font-size: 3.4rem;
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 6vh;
    border: none;
    outline: none;
    background: var(--background-primary);
    border-radius: 50px;
    padding: 1.2rem;
    color: var(--text-base-primary);
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
`;

export const Button = styled.button`
    width: 20rem;
    height: 4rem;
    border: none;
    background: var(--color-primary);
    color: var(--color-white);
    border-radius: 50px;
    outline: inherit;
    &:hover{
        background: var(--color-primary-dark);
        cursor: pointer;        
    }
    transition: background .2s;
`;

export const TextForgot = styled.p`
    font-size: 1.7rem;
    color: var(--text-base-dark);
    margin-top: 1.2rem;
    transition: color .3s;
    &:hover{
        color: var(--color-primary-dark);
        cursor: pointer;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const InputContent = styled.div`
    width: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.4rem;
    @media(min-width: 700px){
        width: 100%
    }
`;

export const RedirectText = styled.p`
    font-size: 1.7rem;
    color: var(--text-base-dark);
    margin-top: 1.2rem;

    @media(min-width: 700px){
        display: none;
    }
`;