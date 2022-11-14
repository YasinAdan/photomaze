import { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1700px) {
            font-size: 75%;
    }
}

    body {
        background: #1b1b1b;
        font-family: 'Inter', sans-serif;
    }

    button {
        font-weight: bold;
        font-size: 1.1rem;
        font-family: 'Inter', sans-serif;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        transition: all 0.5s ease;
        &:hover {
            background-color: #23d997;
        }
        color: white;
    }

    h2 {
        font-weight: lighter;
        font-size: 4rem;
    }
    h3 {
        color: white;
    }

    h4 {
        font-weight: bold;
        font-size: 2rem;
    }
    span {
        font-weight: bold;
        color: #23d997;
    }
    a {
        font-size: 1.1rem;
    }
    p {
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
    
    Progress {
    width: 100%;
    height: 10px;
    position: fixed;
    left: 0;
    top: 95%;
    right:0;
    background-color: #ff0055;
     }
`;

export default GlobalStyle;
