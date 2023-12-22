import { Command } from '@kieranroneill/terminal-in-react';

// constants
import { CV_FILENAME, DOCS_PATH } from '@site/constants';

// types
import { IBaseCommandOptions } from '@site/types';

// utils
import { downloadFile } from '@site/utils';

export default function getCmd({ t }: IBaseCommandOptions): Command {
  const downloadOptionDescription: string = t('options.cvDownload');
  const helpOptionDescription: string = t('options.help');
  const web3OptionDescription: string = t('options.web3Cv');
  let file: string = `${CV_FILENAME}.pdf`;

  return {
    method: (args, print) => {
      if (args.h || args.help) {
        print(`
Usage: cv [OPTION]...
${t('commands.cv')}

${t('captions.arguments')}
  -d, --download  ${downloadOptionDescription}
  -h, --help      ${helpOptionDescription}
  --web3   ${web3OptionDescription}
`);

        return;
      }

      if (args.web3) {
        file = `${CV_FILENAME}-web3.pdf`;
      }

      if (args.d || args.download) {
        downloadFile(DOCS_PATH, file);

        print(t('captions.cvDownloaded'));

        return;
      }

      window.open(`${DOCS_PATH}/${file}`, '_blank');

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
        description: helpOptionDescription,
        defaultValue: false,
      },
      {
        name: 'web3',
        description: web3OptionDescription,
        defaultValue: false,
      },
    ],
  };
}
