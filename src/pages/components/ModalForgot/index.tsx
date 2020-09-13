import React, { useCallback, useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { Container, ModalContainer, ModalHeader, CloseRoundedButton, Title, ModalBody, SubTitle, Form, Button, RedirectButton } from './styles';
import { MdClose } from 'react-icons/md';
import Input from '../Inputs';

export interface ModalHandles{
    toggleModal: ()=> void;
}


const ModalForgot: React.ForwardRefRenderFunction<ModalHandles> = (props, ref)=> {
    const [changedForm, setChagedForm] = useState(false);
    const [visible, setVisible] = useState(false);

    const handleToggleForm = useCallback(() => {
        setChagedForm(!changedForm);
        console.log(!changedForm);
    }, [changedForm]);

    const toggleModal = useCallback(()=>{
        const modalContainer = document.getElementById('modal-forgot-container');
        if(modalContainer && visible){
            modalContainer.style.animationName = 'slideUpModal';
            setTimeout(()=>{
                setVisible(!visible);
            }, 380);
            return;
        }
        setVisible(!visible);
    }, [visible]);

    function handleOnDismiss(){
        const containerForgot = document.getElementById('container-forgot');

        window.addEventListener('click', (event)=>{
            if(event.target === containerForgot){
                toggleModal();
            }
        });
    }

    useImperativeHandle(ref, ()=>{
        return {
            toggleModal
        };
    })


    if(!visible){
        return null;
    }

    return (
        <Container id="container-forgot" onClick={handleOnDismiss}>
            <ModalContainer id="modal-forgot-container">
                <ModalHeader>
                    <CloseRoundedButton onClick={toggleModal}>
                        <MdClose size={20} color="#fff" />
                    </CloseRoundedButton>
                </ModalHeader>

                <ModalBody>
                    <div>
                        <Title>
                            {
                                !changedForm ?
                                    ('Parece que você esqueceu sua senha!') :
                                    ('Falta pouco para sua nova senha!')
                            }

                        </Title>
                        <SubTitle>
                            É preencher só os campos que em instantes sua senha será alterada!
                        </SubTitle>
                    </div>
                    {
                        !changedForm ? (
                            <Form>
                                <Input
                                    name="username"
                                    placeholder="Usuário"
                                    type="text"
                                    required
                                />
                                <Input
                                    name="email"
                                    placeholder="E-mail"
                                    type="email"
                                    required
                                />
                                <Button type="submit">Enviar</Button>
                                <RedirectButton onClick={handleToggleForm} type="button">Já possuo o código</RedirectButton>
                            </Form>

                        ):(
                            <Form>
                                <Input
                                    name="token"
                                    placeholder="Código"
                                    type="text"
                                    required
                                />
                                <Input
                                    name="username"
                                    placeholder="Usuário"
                                    type="text"
                                    required
                                />
                                <Input
                                    name="email"
                                    placeholder="E-mail"
                                    type="email"
                                    required
                                />
                                <Input
                                    name="password"
                                    placeholder="Nova senha"
                                    type="password"
                                    required
                                />
                                <Button type="submit">Redefinir</Button>
                                <RedirectButton onClick={handleToggleForm} type="button">Voltar</RedirectButton>
                            </Form>
                        )
                    }
                </ModalBody>
            </ModalContainer>
        </Container>
    );
}

export default forwardRef(ModalForgot);