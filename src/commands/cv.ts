import { Command } from '@kieranroneill/terminal-in-react';

// Constants.
import { Descriptions, Files, Paths, Versions } from '../constants';

// Descriptions.
import { cvDescription } from '../descriptions';

// Utils.
import { downloadFile } from '../utils';

export default function getCmd(): Command {
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

  return {
    method: (args, print) => {
      if (args.h || args.help) {
        print(helpDescription);

        return;
      }

      if (args.v || args.v) {
        print(Versions.CV);

        return;
      }

      if (args.d || args.download) {
        downloadFile(Paths.DOCS, Files.CV.replace('${version}', Versions.CV));

        print('You have downloaded my CV, prepare to be entertained!');

        return;
      }

      window.open(
        `${Paths.DOCS}/${Files.CV.replace('${version}', Versions.CV)}`,
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
}
