import React, { useState } from 'react';
import {
    Container,
    Logo,
    BannerContainer,
    TitleBanner,
    TextBanner,
    ButtonBanner,
} from './styles';
import logoPrimaryDarkImg from '../../../assets/images/logo-primary-dark.svg';
import logoWhiteImg from '../../../assets/images/logo-wihte.svg';

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ModalForgot from '../../components/ModalForgot';

function Home() {
    const [isChanged, setIsChaged] = useState(false);

    function handleToggleChangeComponent() {
        const banner = document.getElementById('banner');
        const signin = document.getElementById('signin');
        const signup = document.getElementById('signup');
        let pos = 0;
        let prev = 50;
        let id = setInterval(frame, 1);
        function frame() {
            if (pos === 50) {
                clearInterval(id);
            } else {
                pos++;
                prev--;
                
                if (banner) {
                    if (!isChanged) {
                        if (signin) {
                            signin.style.opacity = "0";
                        }
                        if (signup) {
                            signup.style.opacity = "1";
                        }
                        banner.style.right = pos + '%';
                        banner.style.left = prev + '%';
                    } else {
                        if (signin) {
                            signin.style.opacity = "1";
                        }
                        if (signup) {
                            signup.style.opacity = "0";
                        }
                        banner.style.right = prev + '%';
                        banner.style.left = pos + '%';
                    }
                }
            }
        }
        setTimeout(()=>{
            setIsChaged(!isChanged);
        }, 100)

    }

    return (
        <Container>
            <Logo src={!isChanged ? logoPrimaryDarkImg : logoWhiteImg} alt="Logo da WhatsJr." />
            {
                !isChanged ? (
                    <SignIn handleToggleChangeComponent={handleToggleChangeComponent} />
                ) : (
                        <SignUp handleToggleChangeComponent={handleToggleChangeComponent} />
                    )
            }
            <BannerContainer id="banner" isChanged={isChanged}>
                <TitleBanner>{!isChanged? 'Oii, Empresário Jr.': 'Bem vindo de volta, Empresário Jr.'}</TitleBanner>
                <TextBanner>{!isChanged? 'Você é de uma Empresa Jr. e ainda não está cadastrado ?': 'Se você já faz parte dessa incrível comunidade, basta você entrar !'}</TextBanner>
                <ButtonBanner onClick={handleToggleChangeComponent}>{!isChanged? 'Cadastrar': 'Login'}</ButtonBanner>
            </BannerContainer>
            {/* <ModalForgot/> */}
        </Container>
    );
}

export default Home;