import React from 'react';
import MobileBar from '../components/MobileBar';
import MobileHeader from '../components/MobileHeader';
import PostCard from './components/PostCard';
import { Container } from './styles';

function Home() {
    return (
        <>
            <MobileHeader />
            <Container>
                <PostCard
                    post={
                        {
                            company_color: '#ffcf00',
                            image: 'https://vignette.wikia.nocookie.net/onepiece/images/6/69/Marineford_Infobox.png/revision/latest?cb=20150823164246&path-prefix=pt',
                            description: 'Eu sou o cara mais lindo dessa empresa ninguém se compara a mim quando o assunto é beleza. Eu sou o cara mais lindo dessa empresa ninguém se compara a mim quando o assunto é beleza',
                            company_name: 'Praxis - Empresa Jr.',
                            company_avatar: 'https://avatars1.githubusercontent.com/u/61063945?s=460&v=4',
                            stars: 50,
                        }
                    }
                />
                <PostCard
                    post={
                        {
                            company_color: '#ffcf00',
                            image: '',
                            description: 'Eu sou o cara mais lindo dessa empresa ninguém se compara a mim quando o assunto é beleza. Eu sou o cara mais lindo dessa empresa ninguém se compara a mim quando o assunto é beleza',
                            company_name: 'Praxis - Empresa Jr.',
                            company_avatar: 'https://avatars1.githubusercontent.com/u/61063945?s=460&v=4',
                            stars: 50,
                        }
                    }
                />
                <PostCard
                    post={
                        {
                            company_color: '#ffcf00',
                            image: 'https://vignette.wikia.nocookie.net/onepiece/images/6/69/Marineford_Infobox.png/revision/latest?cb=20150823164246&path-prefix=pt',
                            description: 'Eu sou o cara mais lindo dessa empresa ninguém se compara a mim quando o assunto é beleza. Eu sou o cara mais lindo dessa empresa ninguém se compara a mim quando o assunto é beleza',
                            company_name: 'Praxis - Empresa Jr.',
                            company_avatar: 'https://avatars1.githubusercontent.com/u/61063945?s=460&v=4',
                            stars: 50,
                        }
                    }
                />
            </Container>
            <MobileBar />
        </>
    );
}

export default Home;