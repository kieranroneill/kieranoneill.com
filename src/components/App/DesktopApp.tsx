import Terminal from '@kieranroneill/terminal-in-react';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// commands
import getAsteroidsCmd from '@site/commands/asteroids';
import getBarrelRollCmd from '@site/commands/barrelroll';
import getCVCmd from '@site/commands/cv';
import getGithubCmd from '@site/commands/github';
import getLinkedInCmd from '@site/commands/linkedin';
import getVersion from '@site/commands/version';
import getXCmd from '@site/commands/x';

// components
import AsteroidsGame from '@site/components/AsteroidsGame';
import BarrelRoll from '@site/components/BarrelRoll';

// theme
import { palette } from '@site/theme';

// types
import { IBaseCommandOptions, ILogger } from '@site/types';

interface IProps {
  logger: ILogger;
}

const WrapComponent = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const DesktopApp: FC<IProps> = ({ logger }: IProps) => {
  const { t } = useTranslation();
  // state
  const [asteroidsOpen, setAsteroidsOpen] = useState<boolean>(false);
  const [barrelRolling, setBarrelRolling] = useState<boolean>(false);
  // misc
  const baseCommandOptions: IBaseCommandOptions = {
    logger,
    t,
  };
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
            asteroids: getAsteroidsCmd({
              ...baseCommandOptions,
              setAsteroidsStateFn: setAsteroidsOpen,
            }),
            barrelroll: getBarrelRollCmd({
              ...baseCommandOptions,
              setBarrelRollStateFn: setBarrelRolling,
            }),
            cv: getCVCmd(baseCommandOptions),
            github: getGithubCmd(baseCommandOptions),
            linkedin: getLinkedInCmd(baseCommandOptions),
            version: getVersion(baseCommandOptions),
            x: getXCmd(baseCommandOptions),
          }}
          descriptions={{
            asteroids: t('commands.asteroids'),
            barrelroll: t('commands.barrelroll'),
            cv: t('commands.cv'),
            github: t('commands.github'),
            linkedin: t('commands.linkedin'),
            version: t('commands.version'),
            x: t('commands.x'),
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
