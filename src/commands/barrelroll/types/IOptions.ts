import { Dispatch, SetStateAction } from 'react';

// types
import { IBaseCommandOptions } from '@site/types';

interface IOptions extends IBaseCommandOptions {
  setBarrelRollStateFn: Dispatch<SetStateAction<boolean>>;
}

export default IOptions;
