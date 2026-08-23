import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  body {
    /* O tom cinza-claro azulado oficial das plataformas profissionais modernos */
    background-color: #f1f5f9;
    color: #0f172a;
    min-height: 100vh;
    overflow-x: hidden;
  }

  button, input, textarea {
    outline: none;
    border: none;
  }

  button {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  /* Customização discreta da barra de rolagem lateral */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f5f9;
  }
  ::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
`;

export default GlobalStyles;
