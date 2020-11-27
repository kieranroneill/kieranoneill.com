import { Command } from '@kieranroneill/terminal-in-react';

// Constants.
import { Descriptions, Links } from '../../../constants';

// Descriptions.
import { githubDescription } from '../descriptions';

const helpDescription: string = `
Usage: github [OPTION]...
${githubDescription}

Mandatory arguments to long options are mandatory for short options too.
  -h, --help      ${Descriptions.HELP_OPTION}
  -l, --link      ${Descriptions.LINK_OPTION}
`;

const cmd: Command = {
  method: (args, print) => {
    if (args.h || args.help) {
      print(helpDescription);

      return;
    }

    if (args.l || args.link) {
      print(Links.GITHUB);

      return;
    }

    window.open(Links.GITHUB, '_blank');

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

export default cmd;
