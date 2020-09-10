import React from 'react';
import {
    Container,
    FormContent,
    InputContent,
    Input,
    ButtonContainer,
    Button,
    TextForgot,
    Title,
    RedirectText
} from './styles';

interface props {
    handleToggleChangeComponent(): void;
}

const SignIn: React.FC<props> = ({ handleToggleChangeComponent }) => {
    return (
        <Container id="signin">
            <FormContent>
                <Title>Faça seu Login</Title>
                <InputContent>
                    <Input type="text" name="email" placeholder="E-mail ou Usuário" />
                </InputContent>
                <InputContent>
                    <Input type="password" name="password" placeholder="Senha" />
                </InputContent>
                <ButtonContainer>
                    <Button>Entrar</Button>
                    <TextForgot>Esqueceu sua senha?</TextForgot>
                    <RedirectText onClick={handleToggleChangeComponent}>Não possui uma conta? Cadastre-se</RedirectText>
                </ButtonContainer>
            </FormContent>
        </Container>
    );
}

export default SignIn;