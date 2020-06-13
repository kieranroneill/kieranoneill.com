import React from 'react';
import Terminal, { History } from 'react-bash';

// Extensions.
import extensions from './extensions';

// Structure.
import structure from './structure';

// Styles.
import styles from './styles';

// prettier-ignore
const history: History[] = [
  { value: 'Welcome to' },
  { value: '    __    _                                                _  __ __' },
  { value: '   / /__ (_)___   _____ ____ _ ____   ____   ____   ___   (_)/ // /  _____ ____   ____ ___' },
  { value: '  / //_// // _ \\ / ___// __ `// __ \\ / __ \\ / __ \\ / _ \\ / // // /  / ___// __ \\ / __ `__ \\' },
  { value: ' / ,<  / //  __// /   / /_/ // / / // /_/ // / / //  __// // // /_ / /__ / /_/ // / / / / /' },
  { value: '/_/|_|/_/ \\___//_/    \\__,_//_/ /_/ \\____//_/ /_/ \\___//_//_//_/(_)\\___/ \\____//_/ /_/ /_/' },
  { value: ' ' },
  { value: 'Type `help` to begin' },
];

const KOTerminal: React.FC = () => (
  <Terminal
    extensions={extensions}
    history={history}
    structure={structure}
    styles={styles}
    whoami="kieranoneill"
  />
);

export default KOTerminal;
