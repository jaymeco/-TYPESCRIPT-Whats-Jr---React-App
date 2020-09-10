import React from 'react';
import {
    Container,
    FormContent,
    InputContainer,
    HelperText,
    Title,
    Textarea,
    ButtonContainer,
    Button,
    RedirectText
} from './styles';
import Input from '../../../../components/Inputs';

interface props {
    handleToggleChangeComponent(): void;
}
const SignUp: React.FC<props> = ({ handleToggleChangeComponent }) => {
    return (
        <Container id="signup">
            <Title>Cadastre-se</Title>
            <FormContent>
                <InputContainer>
                    <Input type="text" name="username" placeholder="Usuário" />
                    <Input type="text" name="password" placeholder="Senha" />
                </InputContainer>
                <InputContainer>
                    <Input type="text" name="first_name" placeholder="Nome" />
                    <Input type="text" name="last_name" placeholder="Sobrenome" />
                </InputContainer>
                <InputContainer>
                    <Input type="text" name="jr_company" placeholder="Empresa Jr." />
                    <Input type="text" name="office" placeholder="Cargo" />
                </InputContainer>
                <InputContainer>
                    <Input type="text" name="core" placeholder="Núcleo" />
                    <Input type="text" name="ingress_year" placeholder="Ano de ingresso">
                        <HelperText>(Ano em que você entrou na EJ.)</HelperText>
                    </Input>
                </InputContainer>
                {/* <InputContent>
                    <Textarea name="bio" placeholder="Biografia..."></Textarea>
                </InputContent> */}
                <ButtonContainer>
                    <Button>Cadastrar</Button>
                    <RedirectText onClick={handleToggleChangeComponent}>Já possui uma conta? Faça seu Login.</RedirectText>
                </ButtonContainer>
            </FormContent>
        </Container>
    );
}

export default SignUp;