// types
import { IResourceLanguage } from '@site/types';

const translation: IResourceLanguage = {
  captions: {
    arguments:
      'Mandatory arguments to long options are mandatory for short options too.',
    cvDownloaded: 'You have downloaded my CV, prepare to be entertained!',
  },
  commands: {
    asteroids: 'Chillout and shoot some asteroids!',
    barrelroll: 'Do a barrel roll!',
    cv: 'View (or download) my CV!',
    github: 'Opens my GitHub profile in a new tab',
    linkedin: 'Opens my Linkedin profile in a new tab',
    version: 'Get the current version of this website',
    x: 'Opens my X profile in a new tab',
  },
  options: {
    cvDownload: 'Downloads the CV rather than opening it in a new tab',
    help: 'Display this help and exit',
    link: 'Displays link',
    version: 'Print version information and quit',
  },
};

export default translation;
