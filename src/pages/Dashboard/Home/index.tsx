import { SSL_OP_NO_TLSv1_1 } from 'constants';
import React from 'react';
import MobileBar from '../components/MobileBar';
import MobileHeader from '../components/MobileHeader';
import { Container } from './styles';

function Home(){
    return(
        <>
            <MobileHeader/>
            <Container>
                <h1>ola mundo</h1>
            </Container>
            <MobileBar/>
        </>
    );
}

export default Home;