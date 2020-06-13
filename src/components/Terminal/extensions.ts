import { Extensions } from 'react-bash';

const extensions: Extensions = {
  sudo: {
    exec: ({ history, ...otherOptions }) => {
      return {
        history: history.concat({ value: 'Nice try... (ಠ(ಠ(ಠ_ಠ)ಠ)ಠ)' }),
        ...otherOptions,
      };
    },
  },
};

export default extensions;
