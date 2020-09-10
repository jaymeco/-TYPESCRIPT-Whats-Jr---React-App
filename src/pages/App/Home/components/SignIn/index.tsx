import React from 'react';
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

interface props {
    handleToggleChangeComponent(): void;
}

const SignIn: React.FC<props> = ({ handleToggleChangeComponent }) => {
    return (
        <Container id="signin">
            <FormContent>
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
                    <TextForgot>Esqueceu sua senha?</TextForgot>
                    <RedirectText onClick={handleToggleChangeComponent}>Não possui uma conta? Cadastre-se</RedirectText>
                </ButtonContainer>
            </FormContent>
        </Container>
    );
}

export default SignIn;