import React, { FormEvent } from 'react';
import {
    Container,
    FormContent,
    ButtonContainer,
    Button,
    TextForgot,
    Title,
    RedirectText
} from './styles';
import Input from '../../../../components/Inputs';
import { useHistory } from "react-router-dom";


interface props {
    handleToggleChangeComponent(): void;
    handleToggleModal:()=> void;
}

const SignIn: React.FC<props> = ({ handleToggleChangeComponent, handleToggleModal }) => {
    const history = useHistory();
    
    function handleSubmitForm(event: FormEvent){
        event.preventDefault();
        history.push('/dashboard')
    }

    return (
        <Container id="signin">
            <FormContent onSubmit={handleSubmitForm}>
                <Title>Faça seu Login</Title>
                <Input
                    type="text"
                    name="email"
                    placeholder="E-mail ou Usuário"
                />

                <Input
                    type="password"
                    name="password"
                    placeholder="Senha"
                />
                
                <ButtonContainer>
                    <Button>Entrar</Button>
                    <TextForgot onClick={handleToggleModal}>Esqueceu sua senha?</TextForgot>
                    <RedirectText onClick={handleToggleChangeComponent}>Não possui uma conta? Cadastre-se</RedirectText>
                </ButtonContainer>
            </FormContent>
        </Container>
    );
}

export default SignIn;