import React from 'react';
import { Container, Image, Content, Bar, Footer, StarContainer, CompanyContainer, Logo } from './styles';
import { MdStarBorder, MdStar } from 'react-icons/md';


export interface PostProps{
    company_color: string;
    image: string;
    description: string;
    company_name: string;
    company_avatar: string;
    stars: number;
}


interface PostCardProps {
    post: PostProps;
}

const PostCard: React.FC<PostCardProps> = ({ post })=> {
    return(
        <Container>
            {
                post.image && (
                    <Image
                        src={post.image}
                        alt="Imagem do post"
                    />
                )
            }
            <Content>
                <Bar theme_color={post.company_color}/>
                <p>{ post.description }</p>
            </Content>
            <Footer>
                <StarContainer theme_color={post.company_color}>
                    <MdStarBorder size={20} color={post.company_color}/>
                    <p>{ post.stars } Estrelas</p>
                </StarContainer>
                <CompanyContainer theme_color={post.company_color}>
                    <p>{ post.company_name }</p>
                    <Logo
                        src="data:image/png;base64,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"
                        alt={post.company_name}
                    />
                </CompanyContainer>
            </Footer>
        </Container>
    );
}

export default PostCard;