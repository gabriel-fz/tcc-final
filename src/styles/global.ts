import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-variant-numeric: lining-nums;
    }

    body, #root {
      background: #ececec;
      color: #1a1a1a;
      -webkit-font-smoothing: antialiased;
    }

    body, input, button {
      font-family: 'Roboto', sans-serif;
      font-size:16px;
      font-variant-numeric: lining-nums;
    }

    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 500;
    }

    button {
      cursor: pointer;
    }

    button:focus {
      outline: thin dotted;
      outline: 0px auto -webkit-focus-ring-color;
      outline-offset: 0px;
    }
`;
