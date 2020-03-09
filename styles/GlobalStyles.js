import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');

  html {font-size: 100%;} /*16px*/

  body {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.65;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  p {margin-bottom: 1.15rem;}

  h1, h2, h3, h4, h5 {
    margin: 2.75rem 0 1.05rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.15;
  }

  h1 {
    margin-top: 0;
    font-size: 4em;
    @media (min-width: 1225px) {
      font-size: 5.653em;
    }
  }

  h2 {font-size: 3.998em;}

  h3 {font-size: 2.827em;}

  h4 {
    font-size: 1.999em;
    margin-top: 1rem;
  }

  h5 {
    font-size: 1.414em;
    margin-top: 1rem;
  }

  small, .text_small {font-size: 0.707em;}
`;

export default GlobalStyle;
