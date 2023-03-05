import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        background: rgba(19, 21, 24, 1);
        font-family: 'Overpass';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;
        color: rgba(150, 159, 173, 1);
        height: 100vh;
        width: 100vw;
    }

    #root {
        width: 100%;
        height: 100%;
        display:flex;
        justify-content: center;
        align-items: center;
    }

    h1,
    h2,
    h3,
    h4 {
        font-family: Overpass;
        font-size: 28px;
        font-weight: 700;
        line-height: 35px;
        letter-spacing: 0px;
        color: rgba(255, 255, 255, 1);
    }

    ul {
        padding: 0;
        margin: 0;
    }
    
    li {
        list-style: none;
    }
`;