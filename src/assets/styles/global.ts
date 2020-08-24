import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        font-size: 60%;

        --background-primary: "#F0F0F0";
        --background-secondary: "#F5F5F5";
        --background-light: "#FFFFFF";
        --text-base-light: "#9D9D9D";
        --text-base-dark: "#555555";
        --color-primary: "#3C7BE6";
        --color-primary-dark: "#354AFC";
        --color-white: "#FFFFFF";
        --color-secondary: "#192AB8";
        --color-red-primary: "#D40C0C";
    }
    html,body{
        min-height: 100%;
        background: var(--color-primary);
    }

    *,button, input, textarea{
        font-family: Barlow;
    }

`;