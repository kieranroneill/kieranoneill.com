import { Command } from '@kieranroneill/terminal-in-react';
import React from 'react';

// constants
import { GITHUB_LINK } from '@site/constants';

// types
import { IBaseCommandOptions } from '@site/types';

export default function getCmd({ t }: IBaseCommandOptions): Command {
  const helpOptionDescription: string = t('options.help');
  const linkOptionDescription: string = t('options.link');

  return {
    method: (args, print) => {
      if (args.h || args.help) {
        print(`
Usage: github [OPTION]...
${t('commands.github')}

${t('captions.arguments')}
  -h, --help  ${helpOptionDescription}
  -l, --link  ${linkOptionDescription}
`);

        return;
      }

      if (args.l || args.link) {
        print(
          <a href={GITHUB_LINK} rel="noreferrer" target="_blank">
            {GITHUB_LINK}
          </a>
        );

        return;
      }

      window.open(GITHUB_LINK, '_blank');
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
