import styled from 'styled-components';

interface ThemeColorProps{
    theme_color: string;
}

export const Container = styled.div`
    width: 95%;
    background: var(--color-white);
    box-shadow: 1px 1px 20px 1px rgba(0, 0, 0, .2);
    border-radius: 15px;
    margin: 1rem 0;
`;

export const Image = styled.img`
    width: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`;

export const Content = styled.div`
    padding: 1.8rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    >p{
        width: 40ch;
        font-size: 1.1rem;
        margin-left: 1rem;
    }
`;


export const Bar = styled.div<ThemeColorProps>`
    height: 4rem;
    width: .4rem;
    border-radius: 50px;
    background: ${props=>props.theme_color};
`;


export const Footer = styled.footer`
    padding: 1.8rem 1.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


export const StarContainer = styled.div<ThemeColorProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    >p{
        margin-left: .5rem;
        font-size: 1.1rem;
        transition: .3s;
        color: var(--text-base-light);
    }
    transition: .3s;
    &:hover{
        >p{
            color: ${props=>props.theme_color};
        }
        cursor: pointer;
    }
`;


export const CompanyContainer = styled.div<ThemeColorProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    >p{
        font-size: 1.1rem;
        transition: .3s;
        color: var(--text-base-light);
    }
    transition: .3s;
    &:hover{
        >p{
            color: ${props=>props.theme_color};
        }
        cursor: pointer;
    }
`;


export const Logo = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-left: 1rem;
`;
