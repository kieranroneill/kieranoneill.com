import { Command } from '@kieranroneill/terminal-in-react';

// types
import { IBaseCommandOptions } from '@site/types';

export default function getCmd({ t }: IBaseCommandOptions): Command {
  const helpOptionDescription: string = t('options.help');

  return {
    method: (args, print) => {
      if (args.h || args.help) {
        print(`
Usage: version [OPTION]...
${t('commands.version')}

${t('captions.arguments')}
  -h, --help  ${helpOptionDescription}
`);

        return;
      }

      print(__VERSION__ || 'unknown');

      return;
    },
    options: [
      {
        name: 'help',
        description: helpOptionDescription,
        defaultValue: false,
      },
    ],
  };
}
