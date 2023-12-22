import { Command } from '@kieranroneill/terminal-in-react';

// constants
import { CV_FILE, DOCS_PATH } from '@site/constants';
import { CV_VERSION } from './constants';

// types
import { IBaseCommandOptions } from '@site/types';

// utils
import { downloadFile } from '@site/utils';

export default function getCmd({ t }: IBaseCommandOptions): Command {
  const downloadOptionDescription: string = t('options.cvDownload');
  const helpOptionDescription: string = t('options.help');
  const versionOptionDescription: string = t('options.version');

  return {
    method: (args, print) => {
      if (args.h || args.help) {
        print(`
Usage: cv [OPTION]...
${t('commands.cv')}

${t('captions.arguments')}
  -d, --download  ${downloadOptionDescription}
  -h, --help      ${helpOptionDescription}
  -v, --version   ${versionOptionDescription}
`);

        return;
      }

      if (args.v || args.v) {
        print(CV_VERSION);

        return;
      }

      if (args.d || args.download) {
        downloadFile(DOCS_PATH, CV_FILE.replace('${version}', CV_VERSION));

        print(t('captions.cvDownloaded'));

        return;
      }

      window.open(
        `${DOCS_PATH}/${CV_FILE.replace('${version}', CV_VERSION)}`,
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
        description: helpOptionDescription,
        defaultValue: false,
      },
      {
        name: 'version',
        description: versionOptionDescription,
        defaultValue: false,
      },
    ],
  };
}
