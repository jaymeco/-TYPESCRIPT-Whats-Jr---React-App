import styled from 'styled-components';


export const InputComponent = styled.input`
    width: 100%;
    height: 6vh;
    border: none;
    outline: none;
    background: var(--background-primary);
    border-radius: 50px;
    padding: 1.2rem;
    color: var(--text-base-primary);
`;


export const InputContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(min-width: 700px){
        width: 100%;
            
    }
    
`;