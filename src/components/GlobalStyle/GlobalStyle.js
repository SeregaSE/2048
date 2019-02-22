import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body, #root {
        width: 100%;
        min-height: 100%;
        display: flex;
        align-items: stretch;
    }

    div {
        box-sizing: border-box;
    }

    #root {
        justify-content: center;
        color: ${props => props.theme.colors.onPrimary};
        font-family:  ${props => props.theme.typography.fontFamily};
        font-weight: ${props => props.theme.typography.fontWeight};
        font-size: ${props => props.theme.typography.fontSize};
        background: ${props => props.theme.colors.body};
    }
`;

export default GlobalStyle;
