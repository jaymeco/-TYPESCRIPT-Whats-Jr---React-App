import React from 'react';
import {
    Container,
    FormContent,
    InputContainer,
    InputContent,
    Input,
    HelperText,
    Title,
    Textarea,
    ButtonContainer,
    Button,
    RedirectText
} from './styles';

interface props {
    handleToggleChangeComponent(): void;
}
const SignUp: React.FC<props> = ({ handleToggleChangeComponent }) => {
    return (
        <Container id="signup">
            <Title>Cadastre-se</Title>
            <FormContent>
                <InputContainer>
                    <InputContent>
                        <Input type="text" name="username" placeholder="Usuário" />
                    </InputContent>
                    <InputContent>
                        <Input type="text" name="password" placeholder="Senha" />
                    </InputContent>
                </InputContainer>
                <InputContainer>
                    <InputContent>
                        <Input type="text" name="first_name" placeholder="Nome" />
                    </InputContent>
                    <InputContent>
                        <Input type="text" name="last_name" placeholder="Sobrenome" />
                    </InputContent>
                </InputContainer>
                <InputContainer>
                    <InputContent>
                        <Input type="text" name="jr_company" placeholder="Empresa Jr." />
                    </InputContent>
                    <InputContent>
                        <Input type="text" name="office" placeholder="Cargo" />
                    </InputContent>
                </InputContainer>
                <InputContainer>
                    <InputContent>
                        <Input type="text" name="core" placeholder="Núcleo" />
                    </InputContent>
                    <InputContent>
                        <Input type="text" name="ingress_year" placeholder="Ano de ingresso" />
                        <HelperText>(Ano em que você entrou na EJ.)</HelperText>
                    </InputContent>
                </InputContainer>
                <InputContent>
                    <Textarea name="bio" placeholder="Biografia..."></Textarea>
                </InputContent>
                <ButtonContainer>
                    <Button>Cadastrar</Button>
                    <RedirectText onClick={handleToggleChangeComponent}>Já possui uma conta? Faça seu Login.</RedirectText>
                </ButtonContainer>
            </FormContent>
        </Container>
    );
}

export default SignUp;