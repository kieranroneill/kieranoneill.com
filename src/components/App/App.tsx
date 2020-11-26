import React from 'react';
import styled from 'styled-components';
import Terminal, { Commands, Descriptions } from 'terminal-in-react';

// Commands.
import { cvCommand } from './commands';

// Components.
import GlobalStyle from '../GlobalStyle';
import Helmet from '../Helmet';

// Descriptions.
import { cvDescription } from './descriptions';

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

const commands: Commands = {
  cv: cvCommand,
};
const descriptions: Descriptions = {
  cv: cvDescription,
};

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Helmet />
    <WrapComponent>
      <Terminal
        allowTabs={false}
        backgroundColor="black"
        color="green"
        commands={commands}
        descriptions={descriptions}
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
