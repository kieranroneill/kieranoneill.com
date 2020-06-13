import React from 'react';

// Components.
import GlobalStyle from '../GlobalStyle';
import Helmet from '../Helmet';
import Terminal from '../Terminal';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Helmet />
    <Terminal />
  </>
);

export default App;
