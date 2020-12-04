import { Command } from '@kieranroneill/terminal-in-react';
import React from 'react';

// Constants.
import { Descriptions } from '../constants';

// Descriptions.
import { twitterDescription } from '../descriptions';

export default function getCmd(): Command {
  const helpDescription: string = `
Usage: version [OPTION]...
${twitterDescription}

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
