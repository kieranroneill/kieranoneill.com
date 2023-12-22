import { Command } from '@kieranroneill/terminal-in-react';

// types
import { IOptions } from './types';

export default function getCmd({ setBarrelRollStateFn, t }: IOptions): Command {
  const helpOptionDescription: string = t('options.help');

  return {
    method: (args, print) => {
      if (args.h || args.help) {
        print(`
Usage: barrelroll [OPTION]...
${t('commands.barrelroll')}

${t('captions.arguments')}
  -h, --help  ${helpOptionDescription}
`);

        return;
      }

      setBarrelRollStateFn(true);

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
