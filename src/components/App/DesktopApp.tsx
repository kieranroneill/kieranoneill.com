import Terminal from '@kieranroneill/terminal-in-react';
import React, { useState } from 'react';
import styled from 'styled-components';

// commands
import {
  getAsteroidsCmd,
  getBarrelRollCmd,
  getCVCmd,
  getGithubCmd,
  getLinkedInCmd,
  getXCmd,
  getVersion,
} from '../../commands';

// components
import AsteroidsGame from '../AsteroidsGame';
import BarrelRoll from '../BarrelRoll';

// descriptions
import {
  asteroidsDescription,
  barrelrollDescription,
  cvDescription,
  githubDescription,
  linkedinDescription,
  xDescription,
  versionDescription,
} from '../../descriptions';

// theme
import { palette } from '../../theme';

const WrapComponent = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const DesktopApp: React.FC = () => {
  const [asteroidsOpen, setAsteroidsOpen] = useState<boolean>(false);
  const [barrelRolling, setBarrelRolling] = useState<boolean>(false);
  const msg: string = `
Welcome to
    __   _                                        _ ____
   / /__(_)__  _________ _____  ____  ____  ___  (_) / /_________  ____ ___
  / // / / _ \\/ ___/ __ \`/ __ \\/ __ \\/ __ \\/ _ \\/ / / // ___/ __ \\/ __ \`__ \\
 / , </ /  __/ /  / /_/ / / / / /_/ / / / /  __/ / / // /__/ /_/ / / / / / /
/_/|_/_/\\___/_/   \\__,_/_/ /_/\\____/_/ /_/\\___/_/_/_(_)___/\\____/_/ /_/ /_/

Type \`help\` to begin'
`;

  return (
    <>
      {asteroidsOpen && (
        <AsteroidsGame onClose={() => setAsteroidsOpen(false)} />
      )}
      <BarrelRoll
        onComplete={() => setBarrelRolling(false)}
        roll={barrelRolling}
      />
      <WrapComponent>
        <Terminal
          allowTabs={false}
          backgroundColor="black"
          color={palette.brand.primary.main}
          commands={{
            asteroids: getAsteroidsCmd(setAsteroidsOpen),
            barrelroll: getBarrelRollCmd(setBarrelRolling),
            cv: getCVCmd(),
            github: getGithubCmd(),
            linkedin: getLinkedInCmd(),
            version: getVersion(),
            x: getXCmd(),
          }}
          descriptions={{
            asteroids: asteroidsDescription,
            barrelroll: barrelrollDescription,
            cv: cvDescription,
            github: githubDescription,
            linkedin: linkedinDescription,
            version: versionDescription,
            x: xDescription,
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

export default DesktopApp;
