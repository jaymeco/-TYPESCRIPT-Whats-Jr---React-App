import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.2rem;
    padding-top: 4.4rem;

    opacity: 1;
    transition: opacity .3s;

    @media(min-width: 700px){
        grid-area: right;
        height: 100%;
        justify-content: space-evenly;
    }
`;

export const FormContent = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    margin-top: 1.4rem;
    width: 80vw;
    >div > input, >div > textarea{
        margin-bottom: 2.4rem;
    }
    @media(min-width: 700px){
        width: 70%;
        >div >div{
            width: 26rem;
        }
    }
`;


export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    >div{
        margin-bottom: 2.4rem;
    }

    @media(min-width: 700px){
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        
    }    
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


export const Title = styled.h1`
    color: var(--color-primary-dark);
    font-size: 2.4rem;
    font-family: Archivo;
    margin-bottom: 1.2rem;

    @media(min-height: 700px){
        font-size: 4.2rem;
    }
`;


export const HelperText = styled.p`
    color: var(--text-base-light);
    align-self: flex-end;

    @media(min-width: 700px){
        font-size: 1.3rem;
    }
`;

export const RedirectText = styled.p`
    color: var(--text-base-dark);
    font-size: 1.7rem;

    @media(min-width: 700px){
        display: none;
    }
`;