import { Command } from 'terminal-in-react';

// Constants.
import { Files, Paths } from '../../../constants';

// Utils.
import { downloadFile } from '../../../utils';

const cv: Command = {
  method: (args, print) => {
    if (args.d || args.download) {
      downloadFile(Paths.DOCS, Files.CV);

      print('You have downloaded my CV, prepare to be entertained!');

      return false;
    }

    window.open(`${Paths.DOCS}/${Files.CV}`, '_blank');

    return;
  },
  options: [
    {
      name: 'download',
      description: 'Downloads the CV rather than opening it in a new tab',
      defaultValue: false,
    },
  ],
};

export default cv;
