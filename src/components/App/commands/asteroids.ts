import { Dispatch, SetStateAction } from 'react';
import { Command } from '@kieranroneill/terminal-in-react';

// Constants.
import { Descriptions } from '../../../constants';

// Descriptions.
import { asteroidsDescription } from '../descriptions';

const helpDescription: string = `
Usage: asteroids [OPTION]...
${asteroidsDescription}

Mandatory arguments to long options are mandatory for short options too.
  -h, --help      ${Descriptions.HELP_OPTION}
`;

export default function getCmd(
  setAsteroidsStateFn: Dispatch<SetStateAction<boolean>>
): Command {
  return {
    method: (args, print) => {
      if (args.h || args.help) {
        print(helpDescription);

        return;
      }

      setAsteroidsStateFn(true);

      return;
    },
    options: [
      {
        name: 'help',
        description: Descriptions.HELP_OPTION,
        defaultValue: false,
      },
    ],
  };
}
