import { Command } from '@kieranroneill/terminal-in-react';

// types
import { IOptions } from './types';

export default function getCmd({ setAsteroidsStateFn, t }: IOptions): Command {
  const helpOptionDescription: string = t('options.help');

  return {
    method: (args, print) => {
      if (args.h || args.help) {
        print(`
Usage: asteroids [OPTION]...
${t('commands.asteroids')}

${t('captions.arguments')}
  -h, --help  ${helpOptionDescription}
`);

        return;
      }

      setAsteroidsStateFn(true);

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
