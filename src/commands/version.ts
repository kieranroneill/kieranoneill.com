import { Command } from '@kieranroneill/terminal-in-react';

// constants
import { Descriptions } from '../constants';

// descriptions
import { xDescription } from '../descriptions';

export default function getCmd(): Command {
  const helpDescription: string = `
Usage: version [OPTION]...
${xDescription}

Mandatory arguments to long options are mandatory for short options too.
  -h, --help      ${Descriptions.HELP_OPTION}
`;

  return {
    method: (args, print) => {
      if (args.h || args.help) {
        print(helpDescription);

        return;
      }

      print(__VERSION__ || 'unknown');

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
