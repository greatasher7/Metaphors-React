import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export default createGlobalStyle`
    ${reset}
    *, *::before, *::after{
        box-sizing: border-box;
    }
    html{
        font-size: 1vw;
    }
    body{
        font-family: "NotoSansKR";
        background-color: ${({ theme }) => theme.variable.colors.background_color};
        color: ${({ theme }) => theme.variable.colors.A_FFF}
    }
    a{
        color: inherit;
        text-decoration: none;
    }
    ul{
        list-style: none;
    }
`;
