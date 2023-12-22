import { TFunction } from 'i18next';

// types
import ILogger from './ILogger';

interface IBaseCommandOptions {
  logger: ILogger;
  t: TFunction;
}

export default IBaseCommandOptions;
