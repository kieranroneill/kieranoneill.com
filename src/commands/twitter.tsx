import { Command } from '@kieranroneill/terminal-in-react';
import React from 'react';

// Constants.
import { Descriptions, Links } from '../constants';

// Descriptions.
import { twitterDescription } from '../descriptions';

export default function getCmd(): Command {
  const helpDescription: string = `
Usage: twitter [OPTION]...
${twitterDescription}

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
          <a href={Links.TWITTER} rel="noreferrer" target="_blank">
            {Links.TWITTER}
          </a>
        );

        return;
      }

      window.open(Links.TWITTER, '_blank');

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
