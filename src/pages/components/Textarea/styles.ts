import styled from 'styled-components';

export const TextareaComponent = styled.textarea`
    width: 100%;
    height: 15vh;
    resize: none;
    border: none;
    outline: none;
    background: var(--background-primary);
    border-radius: 25px;
    padding: 1.5rem;
    color: var(--text-base-primary);
`;

export const TextareaContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(min-width: 700px){
        width: 100%;
            
    }
`;