import { Dispatch, SetStateAction } from 'react';

// types
import { IBaseCommandOptions } from '@site/types';

interface IOptions extends IBaseCommandOptions {
  setAsteroidsStateFn: Dispatch<SetStateAction<boolean>>;
}

export default IOptions;
