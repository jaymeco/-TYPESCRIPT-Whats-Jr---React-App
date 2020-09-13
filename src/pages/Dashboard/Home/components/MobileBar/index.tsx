import { SSL_OP_NO_TLSv1_1 } from 'constants';
import React from 'react';
import { BarButton, Container } from './styles';
import { MdHome, MdPeople, MdExplore, MdNotifications, MdPerson } from 'react-icons/md';

function MobileBar(){
    return(
        <Container>
            <BarButton className="active-page">
                <MdHome size={22} color="#fff"/>                
            </BarButton>
            <BarButton>
                <MdPeople size={22} color="#fff"/>                
            </BarButton>
            <BarButton>
                <MdExplore size={22} color="#fff"/>                
            </BarButton>
            <BarButton>
                <MdNotifications size={22} color="#fff"/>                
            </BarButton>
            <BarButton>
                <MdPerson size={22} color="#fff"/>                
            </BarButton>
        </Container>
    );
}

export default MobileBar;