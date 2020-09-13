import React from 'react';
import { Container, Avatar, Title } from './styles';

function MobileHeader (){
    return(
        <Container>
            <Avatar
                src="https://pbs.twimg.com/profile_images/1081573705409613825/zNW0VcoU_bigger.jpg"
                alt="Imgem de perfil"
            />
            <Title>Home</Title>
        </Container>
    );
}

export default MobileHeader;