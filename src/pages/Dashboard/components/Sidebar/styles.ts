import styled from 'styled-components';
import { MdKeyboardArrowLeft } from 'react-icons/md';


interface Props {
    isCollapsed?: boolean;
    theme_color?: string;
}

export const Container = styled.div<Props>`
    width: ${props => props.isCollapsed ? '4vw' : '18vw'};
    height: 100vh;
    transition: width .5s;
    position: sticky;
    left: 0;
    top: 0;
    bottom: 0;
    display: none;

    @media(min-width: 700px){
        display: flex;
    }
`;

export const SidebarContainer = styled.article<Props>`
    height: 100%;
    width: 100%;
    padding: 2.4rem 0;
    background: var(--color-primary-dark);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: width .3s;

    >div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        >h3{
            font-size: 1.6rem;
            color: var(--color-white);
        }
    }
`;

export const MainMenu = styled.ul<Props>`
    list-style: none;
    width: 100%;
    height: 100%;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    >li{
        width: 100%;
        display: flex;
        justify-content: ${props => props.isCollapsed ? 'center' : 'flex-start'};
        align-items: center;
        padding: 1.4rem 0 1.4rem ${props => props.isCollapsed ? '0' : '2rem'};
        transition: .3s;
        position: relative;
        >p{          
            font-size: 1.6rem;
            margin-left: 1rem;
            color: var(--color-white);
        }
        &::before{
            content: '';
            height: 100%;            
            border-radius: 50px;
            position: absolute;
            left: 0;
            background: ${props => props.theme_color};
        }

        &:hover{
            background: var(--color-secondary);
            cursor: pointer;
        }
        &:hover::before{
            width: .3rem;
        }
    }
`;

export const ToggleButton = styled.button`
    width: 4rem;
    height: 4rem;
    border: none;
    outline: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-primary-dark);
    transition: .3s;
    margin-top: 1rem;
    margin-left: 1rem;

    &:hover{
        cursor: pointer;
        background: var(--color-white);
        >svg{
            color: var(--color-primary-dark);
        }
    }
`;

export const ToggleIcon = styled(MdKeyboardArrowLeft)`
    width: 5rem;
    height: 3rem;
    color: var(--color-white);
    transition: .3s;
`;

export const Avatar = styled.img<Props>`
    width: ${props => props.isCollapsed ? '5rem': '10rem'};
    border-radius: 50%;
    margin: 1.4rem 0;
    padding: 0 ${props => props.isCollapsed ? '.3rem' : '0'};
`;


export const Logo = styled.img`
    width: 12rem;
`;


