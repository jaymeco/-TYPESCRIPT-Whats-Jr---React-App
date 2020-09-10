import styled, { keyframes } from 'styled-components';
import bg from '../../../assets/images/Background.png'

interface BannerProps {
    readonly isChanged: boolean;
}

const AnimationRightToLeft = keyframes`
    from {
        right: 0;
    }
    50%{
        right: 50%;
    }
    to {
        left: 0;
    }

`;

const AnimationLeftToRight = keyframes`
    from {
        left: 0;
    }
    50%{
        left: 50%;
    }
    to {
        right: 0;
    }

`;

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media(min-width: 700px){
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "left right"
        ;
    }
`;

export const LoginContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.2rem;
`;

export const Logo = styled.img`
    width: 12rem;
    align-self: flex-start;
    margin-top: 1.2rem;
    margin-left: 1.2rem;
    position: absolute;
    z-index: 6;
`;

export const FormContent = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    margin-top: 1.4rem;
    width: 80vw;
`;

export const TitleLogin = styled.h1`
    color: var(--color-primary-dark);
    font-size: 2.4rem;
    font-family: Archivo;
    align-self: flex-start;
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
`;

export const TextForgot = styled.p`
    font-size: 1.7rem;    
    color: var(--text-base-dark);
    margin-top: 1.2rem;
`;

export const BannerContainer = styled.div<BannerProps>`
    width: 100%;
    height: 40vh;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    position: absolute;
    bottom: 0;
    display: none;

    @media(min-width: 700px){
        grid-area: ${props=>!props.isChanged ? 'right': 'left'};
        width: 50%;
        height: 100vh;
        display: flex;
        right: 0;
        justify-content: center;
    }

    transition: 1.5s;
`;

export const TitleBanner = styled.h1`
    font-family: Archivo;
    font-size: 1.8rem;
    width: 20ch;
    text-align: center;
    color: var(--color-white);

    @media(min-width: 700px){
        font-size: 4.4rem;
        margin-bottom: 4.2rem;
    }
`;

export const TextBanner = styled.h4`    
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--color-white);
    width: 24ch;
    text-align: center;

    @media(min-width: 700px){
        font-size: 2.6rem;
        margin-bottom: 4.2rem;
    }
`;

export const ButtonBanner = styled.button`
    width: 20rem;
    height: 4rem;
    border: 2px solid var(--color-white);
    background: transparent;
    color: var(--color-white);
    border-radius: 50px;
    font-size: 1.8rem;
    outline: inherit;
    &:hover{
        background: var(--background-light);
        cursor: pointer;
        color: var(--color-primary);
    }
    transition: background .2s;

    @media(min-width: 700px){
        width: 25rem;
        height: 6rem;
        font-size: 3.4rem;
    }
`;

export const SignUpContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.2rem;
`;

export const TitleSignUp = styled.h1`
    color: var(--color-primary-dark);
    font-size: 2.4rem;
    font-family: Archivo;
    margin-bottom: 1.2rem;
`;

export const InputContainer = styled.div`
    width: 30rem;
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
`;

export const HelperText = styled.p`
    color: var(--text-base-light);
    align-self: flex-end;
`;

export const Textarea = styled.textarea`
    width: 100%;
    height: 15vh;
    resize: none;
    border: none;
    outline: none;
    background: var(--background-primary);
    border-radius: 25px;
    padding: 1.5rem;
    color: var(--text-base-primary);
`;