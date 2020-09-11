import styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';
interface Props {
    shown?: boolean;
    theme_color?: string;
}


export const SelectContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(min-width: 700px){
        width: 100%;
            
    }

    >select {
        width: 100%;
        height: 7vh;
        border: none;
        outline: none;
        background: var(--background-primary);
        border-radius: 50px;
        padding: 1.2rem;
        color: var(--text-base-primary);
    }
    >select > option{
        padding: 5.2rem;
        background: var(--background-primary);
    }
    >select > option:hover{
        background-color: var(--color-primary);
    }
`;
export const SelectComponent = styled.div`
    width: 100%;
    height: 6vh;
    border: none;
    outline: none;
    background: var(--background-primary);
    border-radius: 50px;
    padding: 1.2rem;
    color: var(--text-base-primary);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const SelectContainer = styled.div<Props>`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    display: inline-block;
    .default-option{
        >p{
            font-size: 1.2rem;
            color: var(--text-base-dark);
        }
    }

    .option-container{
        opacity: ${props => props.shown ? 1 : 0};
        display: ${props => props.shown ? 'unset' : 'none'};
        position: absolute;
        background-color: var(--background-light);
        border: 1px solid var(--background-primary);
        border-radius: 10px;
        margin-top: 1.2rem;
        width: 100%;
        z-index: 6;
        padding: 1rem 0;
        transition: opacity .3s;
        transition: display .3s;
        .options{
            list-style: none;
        }
        
    }
`;

export const SelectArrow = styled(MdKeyboardArrowDown) <Props>`
    transform: ${props => props.shown ? 'rotate(180deg)' : 'rotate(0deg)'} ;
    transition: transform .3s;
    
`;

export const OptionItem = styled.li<Props>`

    padding: 1rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: .3s;
    &:hover{
        background: rgba(60, 123, 230, 0.2);
        cursor: pointer;
    }
    &::before{
        opacity: 0;
        content: '';
        width: 1vw;
        height: 5vh;
        background-color: ${props=>props.theme_color ? props.theme_color: 'var(--color-primary-dark)'};
        display: inline-block;
        margin-right: 1.2rem;
        transition: opacity .3s;

        @media(min-width: 700px){
            width: 0.1vw;
        }
    }
    &:hover::before{
        opacity: 1;
    }

    >p{
        font-size: 1.2rem;
        color: var(--color-primary-dark);
    }
`;