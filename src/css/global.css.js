import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    h1, h2, h3{
        font-family: "Roboto", sans-serif;
        font-size: 24px;
        font-weight: 500;
        color: #1C1C1C;
    }
    h2, h3{
        font-size: 16px;
    }
    h3{
        font-weight: 400;
    }
    input{
        font-family: "Roboto", sans-serif;
    }
`

export default Global;