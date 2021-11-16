import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Heebo&display=swap");

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
        font-family: "Heebo", sans-serif;
    }

    .container{
        max-width: 60%;
        width: 60%;
        padding: 10px 15px;
        margin: 0 auto;
    }

    .container-max{
        height: 100vh;
        width: 100vw;
        font-size: 3rem;
        text-align: center;
        background: #1f1d36;
        color: #fff;
        padding-top: 3rem;
        text-transform: uppercase;
    }

    a{
        text-decoration: none;
        color: black;
    }

    .link-white{
        color: #fff;
    }

    @media(max-width: ${({ theme }) => theme.mobile}){
        .container{
            width: unset;
            max-width: unset;
        }
    }
`;
