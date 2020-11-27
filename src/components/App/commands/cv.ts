import { Command } from '@kieranroneill/terminal-in-react';

// Constants.
import { Descriptions, Files, Paths } from '../../../constants';

// Descriptions.
import { cvDescription } from '../descriptions';

// Utils.
import { downloadFile } from '../../../utils';

const downloadOptionDescription: string =
  'downloads the CV rather than opening it in a new tab';
const helpDescription: string = `
Usage: cv [OPTION]...
${cvDescription}

Mandatory arguments to long options are mandatory for short options too.
  -d, --download  ${downloadOptionDescription}
  -h, --help      ${Descriptions.HELP_OPTION}
  -v, --version   ${Descriptions.VERSION_OPTION}
`;
const version: string = 'v8.2.8';

const cmd: Command = {
  method: (args, print) => {
    if (args.h || args.help) {
      print(helpDescription);

      return;
    }

    if (args.v || args.v) {
      print(version);

      return;
    }

    if (args.d || args.download) {
      downloadFile(Paths.DOCS, Files.CV.replace('${version}', version));

      print('You have downloaded my CV, prepare to be entertained!');

      return;
    }

    window.open(
      `${Paths.DOCS}/${Files.CV.replace('${version}', version)}`,
      '_blank'
    );

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
    {
      name: 'version',
      description: Descriptions.VERSION_OPTION,
      defaultValue: false,
    },
  ],
};

export default cmd;
