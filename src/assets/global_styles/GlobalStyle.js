import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
}

body{
    height: 100vh;
}

.root{
    width: 100%;
    height: 100%;
    background-color: #8c11be;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    color: black;
}

input{
    width: 326px;
    height: 58px;
    background: #FFFFFF;
    border-radius: 5px;
    border: none;
    padding-left: 15px;

    ::placeholder{
        color: black;
        font-size: 20px;
        font-family: 'Raleway', sans-serif;
    }
}

form {
    display: flex;
    flex-direction: column;
    gap: 13px;

    button{
        width: 326px;
        height: 46px;
        background-color: #A328D6;
        border: none;
        border-radius: 5px;
        color: white;
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
        font-size: 20px;
    }
}

`;

export default GlobalStyle;