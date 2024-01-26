import React, { FC } from 'react';

// styles
import styles from './styles.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.container__outer}>
      <div className={styles.container__background}>
        <div className={styles.background} />
      </div>
    </header>
  );
};

export default Header;
