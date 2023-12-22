import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
} from 'styled-components';

// components
import RollAnimation from '@site/components/RollAnimation';

// fonts
import SourceCodeProBoldTTF from '../../fonts/SourceCodePro/SourceCodePro-Bold.ttf';
import SourceCodeProBoldWOFF from '../../fonts/SourceCodePro/SourceCodePro-Bold.woff';
import SourceCodeProBoldWOFF2 from '../../fonts/SourceCodePro/SourceCodePro-Bold.woff2';
import SourceCodeProBoldItalicTTF from '../../fonts/SourceCodePro/SourceCodePro-BoldItalic.ttf';
import SourceCodeProBoldItalicWOFF from '../../fonts/SourceCodePro/SourceCodePro-BoldItalic.woff';
import SourceCodeProBoldItalicWOFF2 from '../../fonts/SourceCodePro/SourceCodePro-BoldItalic.woff2';
import SourceCodeProItalicTTF from '../../fonts/SourceCodePro/SourceCodePro-Italic.ttf';
import SourceCodeProItalicWOFF from '../../fonts/SourceCodePro/SourceCodePro-Italic.woff';
import SourceCodeProItalicWOFF2 from '../../fonts/SourceCodePro/SourceCodePro-Italic.woff2';
import SourceCodeProRegularTTF from '../../fonts/SourceCodePro/SourceCodePro-Regular.ttf';
import SourceCodeProRegularWOFF from '../../fonts/SourceCodePro/SourceCodePro-Regular.woff';
import SourceCodeProRegularWOFF2 from '../../fonts/SourceCodePro/SourceCodePro-Regular.woff2';

const GlobalStyle: GlobalStyleComponent<
  unknown,
  DefaultTheme
> = createGlobalStyle`
  @font-face {
    font-family: "Source Code Pro";
    font-style: normal;
    font-weight: 400;
    src: url("${SourceCodeProRegularTTF}") format("truetype"),
    url("${SourceCodeProRegularWOFF}") format("woff"),
    url("${SourceCodeProRegularWOFF2}") format("woff2");
  }
  @font-face {
    font-family: "Source Code Pro";
    font-style: italic;
    font-weight: 400;
    src: url("${SourceCodeProItalicTTF}") format("truetype"),
    url("${SourceCodeProItalicWOFF}") format("woff"),
    url("${SourceCodeProItalicWOFF2}") format("woff2");
  }
  @font-face {
    font-family: "Source Code Pro";
    font-style: normal;
    font-weight: 600;
    src: url("${SourceCodeProBoldTTF}") format("truetype"),
    url("${SourceCodeProBoldWOFF}") format("woff"),
    url("${SourceCodeProBoldWOFF2}") format("woff2");
  }
  @font-face {
    font-family: "Source Code Pro";
    font-style: italic;
    font-weight: 600;
    src: url("${SourceCodeProBoldItalicTTF}") format("truetype"),
    url("${SourceCodeProBoldItalicWOFF}") format("woff"),
    url("${SourceCodeProBoldItalicWOFF2}") format("woff2");
  }

  body {
    margin: 0;

    &.roll {
      animation: 3000ms forwards ${RollAnimation};
    }
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
