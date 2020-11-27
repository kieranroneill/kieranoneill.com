import Terminal from '@kieranroneill/terminal-in-react';
import React, { useState } from 'react';
import styled from 'styled-components';

// Commands.
import {
  getAsteroidsCmd,
  getCVCmd,
  getGithubCmd,
  getLinkedInCmd,
  getTwitterCmd,
} from '../../commands';

// Components.
import AsteroidsGame from '../AsteroidsGame';
import GlobalStyle from '../GlobalStyle';
import Helmet from '../Helmet';

// Descriptions.
import {
  asteroidsDescription,
  cvDescription,
  githubDescription,
  linkedinDescription,
  twitterDescription,
} from '../../descriptions';

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

const App: React.FC = () => {
  const [asteroidsOpen, setAsteroidsOpen] = useState<boolean>(false);

  return (
    <>
      <GlobalStyle />
      <Helmet />
      {asteroidsOpen && (
        <AsteroidsGame onClose={() => setAsteroidsOpen(false)} />
      )}
      <WrapComponent>
        <Terminal
          allowTabs={false}
          backgroundColor="black"
          color="green"
          commands={{
            asteroids: getAsteroidsCmd(setAsteroidsOpen),
            cv: getCVCmd(),
            github: getGithubCmd(),
            linkedin: getLinkedInCmd(),
            twitter: getTwitterCmd(),
          }}
          descriptions={{
            asteroids: asteroidsDescription,
            cv: cvDescription,
            github: githubDescription,
            linkedin: linkedinDescription,
            twitter: twitterDescription,
          }}
          hideTopBar={true}
          msg={msg}
          promptSymbol="$ "
          showActions={false}
          startState="maximised"
          style={{
            display: asteroidsOpen ? 'none' : 'block',
          }}
        />
      </WrapComponent>
    </>
  );
};

export default App;
