import { Command } from '@kieranroneill/terminal-in-react';
import { Dispatch, SetStateAction } from 'react';

// constants
import { Descriptions } from '../constants';

// descriptions
import { asteroidsDescription } from '../descriptions';

const helpDescription: string = `
Usage: barrelroll [OPTION]...
${asteroidsDescription}

Mandatory arguments to long options are mandatory for short options too.
  -h, --help      ${Descriptions.HELP_OPTION}
`;

export default function getCmd(
  setBarrelRollStateFn: Dispatch<SetStateAction<boolean>>
): Command {
  return {
    method: (args, print) => {
      if (args.h || args.help) {
        print(helpDescription);

        return;
      }

      setBarrelRollStateFn(true);

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
