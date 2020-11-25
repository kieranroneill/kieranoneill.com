import React from 'react';
import styled from 'styled-components';
import Terminal from 'terminal-in-react';

// Components.
import GlobalStyle from '../GlobalStyle';
import Helmet from '../Helmet';

const msg: string = `Welcome to
    __   _                                        _ ____
   / /__(_)__  _________ _____  ____  ____  ___  (_) / /_________  ____ ___
  / // / / _ \\/ ___/ __ \`/ __ \\/ __ \\/ __ \\/ _ \\/ / / // ___/ __ \\/ __ \`__ \\
 / , </ /  __/ /  / /_/ / / / / /_/ / / / /  __/ / / // /__/ /_/ / / / / / /
/_/|_/_/\\___/_/   \\__,_/_/ /_/\\____/_/ /_/\\___/_/_/_(_)___/\\____/_/ /_/ /_/

Type \`help\` to begin'`;
const WrapComponent = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Helmet />
    <WrapComponent>
      <Terminal
        allowTabs={false}
        backgroundColor="black"
        color="green"
        hideTopBar={true}
        msg={msg}
        promptSymbol="$ "
        showActions={false}
        startState="maximised"
      />
    </WrapComponent>
  </>
);

export default App;
