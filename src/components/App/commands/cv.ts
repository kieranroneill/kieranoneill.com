import { Command } from '@kieranroneill/terminal-in-react';

// Constants.
import { Descriptions, Files, Paths } from '../../../constants';

// Descriptions.
import { cvDescription } from '../descriptions';

// Utils.
import { downloadFile } from '../../../utils';

const downloadOptionDescription: string =
  'downloads the CV rather than opening it in a new tab';

const cmd: Command = {
  method: (args, print) => {
    if (args.h || args.help) {
      print(`
Usage: cv [OPTION]...
${cvDescription}

Mandatory arguments to long options are mandatory for short options too.
  -d, --download  ${downloadOptionDescription}
  -h, --help      ${Descriptions.HELP_OPTION}
      `);

      return;
    }

    if (args.d || args.download) {
      downloadFile(Paths.DOCS, Files.CV);

      print('You have downloaded my CV, prepare to be entertained!');

      return;
    }

    window.open(`${Paths.DOCS}/${Files.CV}`, '_blank');

    return;
  },
  options: [
    {
      name: 'download',
      description: downloadOptionDescription,
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
