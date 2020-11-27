import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
} from 'styled-components';

const GlobalStyle: GlobalStyleComponent<
  unknown,
  DefaultTheme
> = createGlobalStyle`
  body {
    margin: 0;
  }

  body,
  #app {
    min-height: 100vh;
  }

  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  span {
    font-weight: 400;
  }

  a {
    cursor: pointer;
    transition: all 300ms ease-in-out;
  }
`;

export default GlobalStyle;
