import { Command } from '@kieranroneill/terminal-in-react';
import React from 'react';

// constants
import { X_LINK } from '@site/constants';

// types
import { IBaseCommandOptions } from '@site/types';

export default function getCmd({ t }: IBaseCommandOptions): Command {
  const helpOptionDescription: string = t('options.help');
  const linkOptionDescription: string = t('options.link');

  return {
    method: (args, print) => {
      if (args.h || args.help) {
        print(`
Usage: x [OPTION]...
${t('commands.x')}

${t('captions.arguments')}
  -h, --help  ${helpOptionDescription}
  -l, --link  ${linkOptionDescription}
`);

        return;
      }

      if (args.l || args.link) {
        print(
          <a href={X_LINK} rel="noreferrer" target="_blank">
            {X_LINK}
          </a>
        );

        return;
      }

      window.open(X_LINK, '_blank');
    },
    options: [
      {
        name: 'help',
        description: helpOptionDescription,
        defaultValue: false,
      },
      {
        name: 'link',
        description: linkOptionDescription,
        defaultValue: false,
      },
    ],
  };
}
