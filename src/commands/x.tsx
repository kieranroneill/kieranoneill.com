import { Command } from '@kieranroneill/terminal-in-react';
import React from 'react';

// constants
import { Descriptions, Links } from '../constants';

// descriptions
import { xDescription } from '../descriptions';

export default function getCmd(): Command {
  const helpDescription: string = `
Usage: x [OPTION]...
${xDescription}

Mandatory arguments to long options are mandatory for short options too.
  -h, --help      ${Descriptions.HELP_OPTION}
  -l, --link      ${Descriptions.LINK_OPTION}
`;

  return {
    method: (args, print) => {
      if (args.h || args.help) {
        print(helpDescription);

        return;
      }

      if (args.l || args.link) {
        print(
          <a href={Links.X} rel="noreferrer" target="_blank">
            {Links.X}
          </a>
        );

        return;
      }

      window.open(Links.X, '_blank');

      return;
    },
    options: [
      {
        name: 'link',
        description: Descriptions.LINK_OPTION,
        defaultValue: false,
      },
      {
        name: 'help',
        description: Descriptions.HELP_OPTION,
        defaultValue: false,
      },
    ],
  };
}
